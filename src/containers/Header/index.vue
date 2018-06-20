<template>
  <div class="m-header">
    <el-row type="flex" justify="space-between" class="m-header-wrap">
      <el-col :span="6">
        <div class="m-header-search-border">
          <input type="text" name="search" class="m-header-search" placeholder="请输入搜索内容" autocomplete="off">
        </div>
      </el-col>
      <el-col :span="4">
        <el-row type="flex" style="align-items:center">
          <el-col :span="3" class="f-relative">
            <i class="iconfont icon-notice u-admin-notice"></i>
            <i class="red-point"></i>
          </el-col>
          <el-col :span="20" :offset="2" class="f-relative" >
            <i class="iconfont icon-76 u-admin-userhead"></i>
            <span class="u-admin-name" @click="show">admin</span>
            <div class="login-user-dropmenu" :class="userProfile? 'pop-fadeInDown':''">
              <span class="popover-arrow"></span>
              <div class="popup-box">
                <a href="##" type="button" class="iconbutton icon-profile">
                  我的主页
                </a>
                <a href="##" type="button" class="iconbutton icon-setting">
                  设置
                </a>
                <a href="##" type="button" class="iconbutton icon-logout">
                  退出
                </a>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      userProfile: false
    }
  },
  methods: {
    show () {
      console.log(1)
      this.userProfile = !this.userProfile
    }
  }
}
</script>

<style scoped>
.m-header-wrap{
  height: 60px;
  align-items: center;
}
.m-header-search-border{
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 4px 12px;
}
.m-header-search{
  color: #333;
  font-size: 14px;
  width: 100%;
  border: none;
  outline: none;
  padding: 4px 12px;
  box-sizing: border-box;
}
.m-admin-login-box{
  display: table;
}
.u-admin-notice,.u-admin-userhead{
  color: #999;
  vertical-align: middle;
}
.u-admin-notice{
  margin-right: 30px;
  font-size: 28px;
}
.u-admin-userhead{
  font-size: 33px;
  margin-right: 10px;
}
.u-admin-name{
  line-height: 60px;
  font-size: 18px;
}
.iconfont{
  cursor: pointer;
}
.red-point{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  background-color: red;
  position: absolute;
  top: 5px;
  right: 10px;;
}
.login-user-dropmenu{
  position: absolute;
  z-index: 2;
  opacity: 0;
  transition: all .2s ease-in-out;
}
.pop-fadeInDown{
  opacity: 1;
}
.popover-arrow:after{
  content: "";
  border: 8px solid transparent;
  display: block;
  width: 0;
  height: 0;
  border-bottom-color: #fff;
  border-top-width: 0;
  transform: translateX(50px)
}
.popup-box{
  padding: 10px 0;
  height: 120px;
  box-shadow: 0 5px 20px rgba(26,26,26,.1);
  background-color: #fff;
  border-radius: 4px;
}

.iconbutton{
  display: block;
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
}
.iconbutton:hover{
  background-color: #e0e1f8;
}
.icon-logout:before,.icon-profile:before,.icon-setting:before{
  font-family:'iconfont' !important;
  font-size:16px;font-style:normal;
  margin-right: 5px;
}
.icon-profile:before{
  content: '\e604';
}
.icon-setting:before{
  content: '\e7e1';
}
.icon-logout:before{
  content: '\e625';
}
</style>
