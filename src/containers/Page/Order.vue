<template>
  <div>
    <el-row class="order-filter-box f-shadow">
      <el-row class="order-filter-title">
        <el-col :span="6">订单筛选</el-col>
      </el-row>
      <el-row class="order-filter-menu-title">
        <el-col :span="6">订单时间</el-col>
        <el-col :span="6">订单数</el-col>
        <el-col :span="6">下单渠道</el-col>
        <el-col :span="6">支付方式</el-col>
      </el-row>
      <el-row class="order-filter-main">
        <el-col :span="6">
          <el-date-picker
            v-model="filterDate"
            type="date"
            placeholder="请选择日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-select v-model="filterOrderNum" placeholder="请选择" @change="page_init">
            <el-option
              v-for="item in orderNums"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="filterOrderType" placeholder="请选择" @change="page_init">
            <el-option
              v-for="item in orderTypes"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="filterPayType" placeholder="请选择">
            <el-option
              v-for="item in payTypes"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="order-menu">
      <el-col :span="2"><el-button class="order-menu-button" @click="goToNew">新增订单</el-button></el-col>
      <el-col :span="1" :offset="17" class="order-page-indecator">第{{page}}页</el-col>
      <el-col :span="1"><el-button @click="page_decrease"><div class="order-menu-page order-menu-page-left"></div></el-button></el-col>
      <el-col :span="1"><el-button @click="page_increase"><div class="order-menu-page order-menu-page-right"></div></el-button></el-col>
    </el-row>
    <el-row class="f-shadow">
      <el-col>
        <el-table
          :data="filterLists"
          border
          :row-class-name="filterRowConsumd"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <OrderInfo :data="props"/>
            </template>
          </el-table-column>
          <el-table-column label="订单号" prop="order_id"></el-table-column>
          <el-table-column label="下单时间" prop="creat_at"></el-table-column>
          <el-table-column label="客户姓名" prop="order_name"></el-table-column>
          <el-table-column label="预定时间" prop="order_time"></el-table-column>
          <el-table-column label="订单数" prop="order_num"></el-table-column>
          <el-table-column width="100" label="操作">
            <template slot-scope="order">
              <el-dropdown @command="delOrder">
                <span class="el-dropdown-link"><i class="el-icon-more"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="order"><i class="el-icon-delete"></i><span>删除</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api'
import OrderInfo from '@/components/OrderInfo'

export default {
  name: 'Order',
  data () {
    return {
      filterDate: '',
      filterOrderNum: 0,
      orderNums: [3, 5, 7],
      filterOrderType: '',
      orderTypes: ['MT', 'TN', 'ELE', 'ALI'],
      filterPayType: '',
      payTypes: ['WeChatPay', 'ApplePay', 'AliPay'],
      checked: true,
      orderLists: [],
      loading: true,
      page: 1,
      page_size: 6,
      total: 0
    }
  },
  mounted () {
    // const loadingInstance = this.startLoading()
    // setTimeout(() => {
    //   this.$nextTick(() => {
    //     loadingInstance.close()
    //   })
    // }, 3000)
    this.$http.get(api.Orderlists)
      .then((res) => {
        this.orderLists = res.data.orderlists
      })
  },
  methods: {
    startLoading () {
      return this.$loading({target: 'main'})
    },
    page_decrease () {
      this.page = this.page <= 1 ? 1 : --this.page
    },
    page_increase () {
      this.page = this.page < this.total ? ++this.page : this.total
    },
    page_init () {
      this.page = 1
    },
    filterRowConsumd ({row, idx}) {
      return row.consumed ? 'row-consumed' : ''
    },
    goToNew () {
      this.$router.push('neworder')
    },
    delOrder ({ row, $index }) {
      this.orderFilter()
      // console.log(this.orderLists)
      // this.orderLists.splice(this.orderLists.indexOf($index), 1)
      // console.log(this.orderLists)      
    },
    orderFilter () {
      let promise = new Promise((resolve) => resolve(this.orderLists))
      let _self = this
      promise.then((orderlists) => {
        return orderlists.filter((order) => {
          return (order.order_num > _self.filterOrderNum)
        })
      }).then((orderlists) => {
        return orderlists.filter((order) => {
          return (order.order_type === _self.filterOrderType)
        })
      }).then((orderlists) => {
        return orderlists.filter((order) => {
          return (order.order_type === _self.filterOrderType)
        })
      })
    }
  },
  computed: {
    filterLists () {
      let arr = []
      if (this.filterOrderNum) {
        arr = this.orderLists.filter((order) => {
          return (order.order_num > this.filterOrderNum)
        })
      } else if (this.filterOrderType) {
        arr = this.orderLists.filter((order) => {
          return (order.order_type > this.filterOrderType)
        })
      } else {
        arr = this.orderLists
      }
      this.total = Math.floor(arr.length / this.page_size)
      let start = (this.page - 1) * this.page_size
      let end = this.page * this.page_size
      return arr.filter((order, idx) => {
        if (idx > start && idx <= end) {
          return order
        }
      })
    }
  },
  components: {
    OrderInfo
  }
}
</script>
<style>
.order-filter-box{
  background-color: #ffffff;
  padding: 30px;
  margin-top: 30px;
}
.order-filter-title{
  font-size: 20px;
  color: #333;
  font-weight: bold;
  border-bottom: 1px solid #f4f4f4;
  line-height: 80px;
}
.order-filter-menu-title{
  color: #666;
  font-size: 16px;
  margin-top: 30px;
}
.order-filter-main{
  margin: 30px 0 20px;
}
.order-menu{
  margin: 30px 0;
}
.order-page-indecator{
  line-height: 40px;
  font-size: 14px;
}
.order-menu-button{
  box-shadow: 2px 2px 16px #dddddd;
  color: #242aa7;
}
.order-menu-button:hover{
  background-color: #242aa7;
  color: #ffff;
}
.order-menu-page{
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.row-consumed{
  background-color:#e8e4ff!important;
}
.current-row{
  background-color: #ccc4fa;
}
.order-menu-page-left{
  border-right: 10px solid #242aa7;
}
.order-menu-page-right{
  border-left: 10px solid #242aa7;
}
.el-icon-delete{
  margin-right: 8px;
}
</style>
