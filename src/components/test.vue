<template>

</template>
<script>
export default {
  computed:{
    nextId(){
      return this.id + 1;
    }
  },
  methods:{
    goById(id){
      console.log(id);
    },
    readyGo(){
      //方法直接调用，参数为计算属性名
      this.goById(this.nextId);
    }
  },
  data(){
   return {
     id: 0
   }
  }
}
</script>
<style scoped>

</style>
