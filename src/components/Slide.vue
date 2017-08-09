<template>
<div class="slide-show" @mouseover="clearImg" @mouseout="runImg">
  <div class="slide-img">
    <a :href="slides[imgIndex].src">
      <transition name="slide-trans">
        <img v-if="isShow" :src="slides[imgIndex].src" alt="">
      </transition>
      <transition name="slide-trans-old">
        <img v-if="!isShow" :src="slides[imgIndex].src" alt="">
      </transition>
    </a>
  </div>
  <h2>{{ slides[imgIndex].title }}</h2>
  <ul class="slide-pages">
    <li @click = "goImg(prevImgIndex)">&lt;</li>
    <li v-for="(item,index) in slides.length"  :class="{ on : index == imgIndex }"  @click="goImg(index)"> {{ index + 1}} </li>
    <li @click = "goImg(nextImgIndex)">&gt;</li>
  </ul>
</div>

</template>
<script>
export default {
  props:{
    slides:{
      type: Array ,
      default: []
    },
    inv:{
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      imgIndex:0,
      isShow:false
    }
  },
  computed:{
    nextImgIndex () {
      if(this.imgIndex === this.slides.length -1){
        return 0
      }else{
        return this.imgIndex + 1;
      }
    },
    prevImgIndex () {
      if(this.imgIndex === 0){
        return this.slides.length -1
      }else {
        return this.imgIndex - 1;
      }
    }
  },
  methods:{
    // 图片跳转
    goImg(imgIndex) {
      this.isShow = false;
      setTimeout(()=>{
        this.isShow = true;
        this.imgIndex = imgIndex;
      },10);
    },
    // 定时跳转下一张图片
    runImg () {
     this.invId = setInterval(()=>{
        this.goImg(this.nextImgIndex);
      },this.inv);
    },
    //鼠标移出轮播图
    clearImg () {
      clearInterval(this.invId);
    }
  },
  mounted () {
    this.runImg();
  }
}
</script>
<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    line-height:30px;
    text-align: left;

    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li.on {
    text-decoration: underline;
  }
  .slide-pages li:hover {
    color: #4fc08d;
    text-decoration: underline;
  }
</style>
