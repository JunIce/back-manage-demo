<template>
  <div id="app">
    <el-container>
      <Side />
      <el-container style="height: 100vh;">
        <el-header class="g-header f-shadow">
          <Header />
        </el-header>
        <el-main class="g-main">
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Side from '@/containers/Side'
import Header from '@/containers/Header'
import Main from '@/containers/Main'

export default {
  name: 'App',
  components: {
    Side,
    Header,
    Main
  }
}
</script>

<style>
body,div,h1,h2,h3,section,aside,p,ul,li{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}
.g-side{
  background-color: #ffffff;
  color: #242aa7;
}
.g-header{
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  position: relative;
}

.g-main{
  background-color: #f4f4f4;
  position: relative;
  overflow-y: scroll;
}

.f-flex{
  display: flex;
}
.f-height{
  height: 100%;
}
.f-relative{
  position: relative;
}
.f-menu-hidden{
  display: none;
}
.f-over-hidden{
  overflow: hidden;
}
.f-text-center{
  text-align: center;
}
.f-text-right{
  text-align: right;
}
.f-999{
  color: #999;
}
.f-mr-top-20{
  margin-top: 20px;
}
.f-shadow{
  box-shadow: -2px 0 40px #ddd;
}
.f-default-bg{
  background-color: #242aa7;
  border-color: #242aa7;
}
.f-bg-fff{
  background-color: #ffffff;
}
button.f-default-bg:hover{
  background-color: #4951ec;
  border-color: #4951ec;
}
.v-message,.v-message .el-icon-close{
  color: #fff;
}
.v-message-success{
  background-color: #7e84ff;
}
.v-message-failure{
  background-color: #fe5bc5;
}

</style>
