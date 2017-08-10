<template>
  <div>
    <div class="dialog-wrap">
     <div class="dialog-cover" v-if="isShow" @click="closeDialog">
       <div class="dialog-content" v-if="isShow">
         <p class="dialog-close" @click="closeDialog">X</p>
         <slot>没有任何内容！</slot>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    isShow : {
      type: Boolean,
      default: false
    }
  },
  methods:{
    closeDialog () {
      this.$emit('on-close');
    }
  }
}
</script>
<style scoped>
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .6;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width:50%;
    position: fixed;
    max-height: 50%;
    margin-left: -25%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    z-index: 0;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
