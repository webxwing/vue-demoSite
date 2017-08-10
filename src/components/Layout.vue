<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="../assets/logo.png" alt="VUE官方LOGO">

        <div class="head-nav">
          <ul class="nav-list">
            <li @click="showDialog('loginIsShow')">登录</li>
            <li class="nav-pile">|</li>
            <li @click="showDialog('regIsShow')">注册</li>
            <li class="nav-pile">|</li>
            <li @click="showDialog('helpIsShow')">帮助</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="app-foot">
      <p>2017 demo.ioc MIT</p>
    </div>
    <MyDialog  :isShow="loginIsShow" @on-close = "closeDialog('loginIsShow')">
      <p>login</p>
    </MyDialog>
    <MyDialog  :isShow="regIsShow" @on-close = "closeDialog('regIsShow')">
      <p>regIsShow</p>
    </MyDialog>
    <MyDialog :isShow="helpIsShow" @on-close = "closeDialog('helpIsShow')">
      <p>helpIsShow</p>
    </MyDialog>
  </div>
</template>
<script>
  import Dialog from "./Dialog.vue"
  export default {
    data (){
      return {
        loginIsShow : false,
        regIsShow : false,
        helpIsShow : false
      }
    },
    methods: {
      closeDialog (tagIsShow) {
        this[tagIsShow] = false ;
      },
      showDialog(tagIsShow){
        this[tagIsShow] = true ;
      }
    },
    components:{
      MyDialog : Dialog
    }
  }
</script>
<style>
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .app-head-inner {
    width: 90%;
    margin: 0 auto;
  }

  .head-logo {
    float: left;
  }

  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }

</style>
