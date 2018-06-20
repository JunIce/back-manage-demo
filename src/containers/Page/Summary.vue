<template>
  <div>
    <el-row class="m-card-menu">
      <el-col :span="6" class="f-flex">
        <div class="m-card-button">
          <span>按类型</span>
        </div>
        <div class="m-card-button">
          <span>按大小</span>
        </div>
      </el-col>
      <el-col :span="6" :offset="10">
        <div class="u-card-search-box">
          <input type="text" placeholder="搜索" class="u-card-search">
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="flex-start" style="flex-wrap:wrap">
      <template v-for="(card,idx) in classlists">
        <div class="u-room-item" :key="idx">
          <div class="u-room-card" :class="'bg-type-' + card.type">
            <img :src="card.cover" alt="" class="m-card-coverimg">
            <div class="f-flex u-card-title">
              <span>{{card.title}}</span>
              <span class="u-card-title-size">{{card.size}}M</span>
            </div>
          </div>
        </div>
      </template>
    </el-row>
    <CardMask v-if="show" :show="show" />
  </div>
</template>

<script>
import api from '@/api'
import CardMask from '@/components/CardMask'
export default {
  name: 'Summary',
  data () {
    return {
      classlists: [],
      msg: 'dsafsdaf',
      show: false
    }
  },
  mounted () {
    this.$http.get(api.ClassLists)
      .then((res) => {
        this.classlists = res.data.data
      })
  },
  components: {
    CardMask
  }
}
</script>
<style scoped>
.m-card-menu{
  background-color: #ffffff;
  margin: 10px;
}
.m-card-button{
  width: 140px;
  height: 45px;
  font-size: 14px;
  text-align: center;
  line-height: 45px;
  cursor: pointer;
}
.m-card-button:hover{
  background-color: #4886ff;
  color: #ffffff;
}
.u-card-search-box{
  margin-top: 5px;
  padding: 3px;
  border:1px solid #f4f4f4;
  border-radius: 4px;
}
.u-card-search{
  width: 100%;
  color: #666;
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 4px 8px;
}
.u-room-item{
  width:20%;
  padding: 10px;
  box-sizing: border-box;
}
.u-room-card{
  height: 100%;
  border-radius: 4px;
  background-color: #ccc;
  box-shadow: -2px 2px 32px #d7d7d7;
  overflow: hidden;
}
.m-card-coverimg{
  display: block;
  width: 100%;
}
.u-card-title{
  font-size: 14px;
  padding: 12px 10px;
  align-items: center;
  justify-content: space-between;
}
.u-card-title-size{
  color: #f4f4f4;
}
.bg-type-1{
  background-color: #46a3da;
  color: #ffffff;
}
.bg-type-2{
  background-color: #7f8bff;
  color: #ffffff;
}
.bg-type-3{
  background-color: #be7fff;
  color: #ffffff;
}
</style>
