<template>
  <div class="order-expand-box">
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">订单号</el-col>
      <el-col :span="8">{{ data.row.order_id }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">客户姓名</el-col>
      <el-col :span="8">{{ data.row.order_name }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">下单时间</el-col>
      <el-col :span="8">{{ data.row.creat_at }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">预留手机号码</el-col>
      <el-col :span="8">{{ data.row.order_phone }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">预定时间</el-col>
      <el-col :span="8">{{ data.row.order_time }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">订单数</el-col>
      <el-col :span="8">{{ data.row.order_num }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">预定渠道</el-col>
      <el-col :span="8">{{ data.row.order_type }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">付款方式</el-col>
      <el-col :span="8">{{ data.row.pay_type }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">优惠券</el-col>
      <el-col :span="8">{{ data.row.ticket }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">是否消费</el-col>
      <el-col :span="8">{{ data.row.consumed ? '已消费':'未消费' }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="1" class="f-999">总价</el-col>
      <el-col :span="8">{{ data.row.total_price }}</el-col>
      <el-col :span="2" :offset="1" class="f-999">折扣</el-col>
      <el-col :span="8">{{ data.row.discount }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="20" class="f-999">折扣后总价</el-col>
      <el-col :span="2" class="order-total-price">{{ getDiscountPrice(data.row.total_price, data.row.discount) }}</el-col>
    </el-row>
    <div v-if="data.row.consumed" class="order-consum o-consumd">
      <span>{{ data.row.consumed ? '已消费':'未消费' }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderInfo',
  props: ['data'],
  methods: {
    getDiscountPrice (price, account) {
      return Math.floor(price * account)
    }
  }
}
</script>
<style scoped>
.order-expand-box{
  background-color: #f4f4f4;
  padding: 20px;
  line-height: 40px;
  position: relative;
  overflow: hidden;
}

.order-total-price{
  font-size: 18px;
}
.order-consum{
  position: absolute;
  bottom: 32px;
  right: -150px;
  font-size: 30px;
  -webkit-transform: rotateX(45deg);
  transform: rotateZ(-45deg);
  padding: 16px;
  z-index: 1;
  width: 450px;
  text-align: center;
}
.o-consumd {
  color: red;
}
</style>
