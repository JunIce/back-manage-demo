<template>
  <el-aside class="g-side" :width="isCollapse ? '64px': '280px'">
    <div class="f-height" style="position:relative">
      <div class="m-side-logo">
        <h1>LOGO</h1>
      </div>
      <el-menu
        router
        mode='vertical'
        :collapse='isCollapse'
        :default-active="activeIndex"
        @select="handleSelect"
        :collapse-transition=false
        class="m-menu">
        <el-menu-item index="dashboard">
          <i class="iconfont icon-dashboard"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="summary">
          <i class="iconfont icon-all"></i>
          <span slot="title">酒店总览</span>
        </el-menu-item>
        <el-menu-item index="order">
          <i class="iconfont icon-order"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="neworder">
          <i class="iconfont icon-order01"></i>
          <span slot="title">新的订单</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="iconfont icon-set"></i>
          <span slot="title">后台设置</span>
        </el-menu-item>
      </el-menu>
      <div class="side-bar-menu" @click="isCollapse = !isCollapse">
        <i class="iconfont icon-packup icon-sidebar-menu icon-side-rotate" :class="isCollapse ? 'icon-side-rotate-active':''"></i>
        <span>收起</span>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: 'Side',
  data () {
    return {
      isCollapse: false,
      activeIndex: 'dashboard'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
    }
  }
}
</script>

<style scoped>
.sidebar{
  height: 100%;
}
.m-side-logo{
  height: 60px;
  background-color: #4951ec;
  line-height: 60px;
  text-align: center;
}
.m-menu{
  border-right: 0;
}
.iconfont{
  margin-right: 25px;
  font-size: 20px;
  color: #242aa7;
}
.el-menu-item{
  color: #242aa7;
}
.el-menu-item.is-active{
  background-color: #242aa7;
  color: #ffffff;
}
.side-bar-menu{
  position: absolute;
  bottom: 0;
  height: 56px;
  line-height: 56px;
  width: 100%;
  color: #fff;
  padding-left: 20px;
  background-color: #3366ff;
  cursor: pointer;
}
.icon-sidebar-menu{
  color: #fff;
}
.icon-side-rotate:before{
  display: inline-block;
  transform: rotate(-90deg);
  transition: .3s transform ease-in-out;
}
.icon-side-rotate-active:before{
  transform: rotate(90deg);
}
</style>
