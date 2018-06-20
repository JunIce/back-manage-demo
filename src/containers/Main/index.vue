<template>
  <div class="m-main">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      classlists: [],
      msg: 'dsafsdaf',
      show: false
    }
  },
  mounted () {
    this.$root.Bus.$on('message', (msg) => {
      this._renderMessage(msg)
    })
  },
  methods: {
    // 提示方法，抽出公共方法方便子组件调用
    _renderMessage (data) {
      let h = this.$createElement
      this.$message({
        message: h('p', { style: 'margin-left: 5px' }, [
          h('span', null, data.msg)
        ]),
        iconClass: data.status ? 'el-icon-circle-check' : 'el-icon-circle-close',
        customClass: data.status ? 'v-message v-message-success' : 'v-message v-message-failure', // 自定义样式要注册全局下面
        showClose: true
      })
    }
  },
  components: {
  }
}
</script>

<style scoped>
.m-main{
  padding: 0 20px;
  margin: 0 20px;
}
</style>
