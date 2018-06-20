<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12" class="n-order-box f-shadow">
        <el-row>
          <el-col class="n-order-title">
            <span>新的订单</span>
          </el-col>
          <el-col>
            <el-form ref="form" :model="form" label-position="left" class="order-form">
              <el-form-item label="客户姓名">
                <el-input v-model="form.order_name"></el-input>
              </el-form-item>
              <el-form-item label="预留手机号码">
                <el-input v-model="form.order_phone"></el-input>
              </el-form-item>
              <el-form-item label="预定人数">
                <el-input v-model="form.order_num"></el-input>
              </el-form-item>
              <el-form-item label="预定时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.order_time" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="优惠券">
                <el-input v-model="form.ticket"></el-input>
              </el-form-item>
              <el-form-item label="合计总价">
                <el-col class="order-total-price">
                  12332
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" class="f-default-bg" >立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NewOrder',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
.n-order-box{
  background-color: #ffffff;
}
.n-order-title{
  font-size: 18px;
  padding: 30px;
  color: #fff;
  background-color: #242aa7;
}
.order-form{
  width: 460px;
  margin: 60px auto;
}
.order-total-price{
  font-size: 20px;
  color: #333;
}
</style>
