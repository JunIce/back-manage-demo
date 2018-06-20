<template>
  <div>
    <el-row :gutter="20" class="f-mr-top-20">
      <template v-for="(dash, idx) in d_sumary">
        <el-col :span="6" :key="idx">
          <el-row class="d-sumary-box f-shadow f-text-center f-flex">
            <el-col :span="12" class="">
              <i class="iconfont" :class="['icon-' + dash.icon, 'd-text-' + dash.icon]" ></i></el-col>
            <el-col :span="14">
              <p class="d-sumary-title">{{dash.text}}</p>
              <p class="d-sumary-text" :class="'d-text-' + dash.icon">{{dash.d_txt_num}}</p>
            </el-col>
          </el-row>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="20" class="f-mr-top-20">
      <el-col :span="16">
        <el-row class="f-shadow d-charts-box">
          <el-col :span="4">
            <span>百度搜索指数</span>
          </el-col>
          <el-col :span="4" :offset="16">
            <el-select v-model="chartSelect" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col>
             <div id="myChart" :style="{width: '940px', height: '480px'}"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <div class="d-infos-box f-shadow" id="main">
        <el-row>
          <el-col :span="4">
            <span>销售业绩</span>
          </el-col>
          <el-col :span="7" :offset="13">
            <el-switch
              class="pie-switch"
              style="display: block"
              v-model="pieSelect"
              active-color="#4951ec"
              inactive-color="#242aa7"
              active-text="按月"
              inactive-text="按周">
            </el-switch>
          </el-col>
        </el-row>
          <div id="pieChart" style="width: 460px; height: 480px;"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 按需引入
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

import util from '@/common/util'

export default {
  name: 'Dashboard',
  data () {
    return {
      pieSelect: true, // true为按月计算， false为按周计算
      chartSelect: 30,
      options: [
        {
          label: '7天',
          value: 7
        },
        {
          label: '15天',
          value: 15
        },
        {
          label: '30天',
          value: 30
        }
      ],
      d_sumary: [
        {
          icon: 'time',
          text: '累计使用时长',
          d_txt_num: 342423
        },
        {
          icon: 'qitashouru',
          text: '累计收入',
          d_txt_num: 342423
        },
        {
          icon: 'fonts-user',
          text: '累计访问人数',
          d_txt_num: 432
        },
        {
          icon: 'order',
          text: '本月订单数量',
          d_txt_num: 5442
        }
      ],
      randomData: []
    }
  },
  created () {
    // 随机90天的数据
    this.randomData = this.setRandomData(90)
  },
  mounted () {
    let myChart = echarts.init(document.getElementById('myChart'))
    // 挂载到组件实例上，方便调用
    this.myChart = myChart
    this.lineChartInit()
    // 模拟异步加载
    this.myChart.showLoading()

    let pieChart = echarts.init(document.getElementById('pieChart'))
    this.pieChart = pieChart
  },
  methods: {
    // 随机时间数据
    setRandomData (val) {
      let arr = new Array(val)
      let date = new Date()

      return arr.fill(0).reduce((pre, aft, idx, array) => {
        let length = array.length
        let pretime = new Date(date.getTime() - (length - idx) * 24 * 3600 * 1000)
        let obj = {
          date: pretime,
          week: util.getWeekNumber(pretime),
          exp: Math.floor(Math.random() * 100 + 200 + idx)
        }
        pre.push(obj)
        return pre
      }, [])
    },
    // 初次渲染图形框架，以便后续添加数据
    lineChartInit () {
      this.myChart.setOption({
        xAxis: {
          type: 'category',
          data: [],
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            return '<span style="font-size:20px;font-weight:bold;line-height: 30px;margin-bottom: 10px;">' + params.name + '</span>' + '<br />' + '<span>百度搜索指数：</span>' + params.value
          },
          padding: [20],
          extraCssText: 'border-radius: 0; background-color: rgba(0,0,0,.8)',
          textStyle: {
            color: '#f4f4f4'
          }
        }
      })
    }
  },
  watch: {
    LineChartData (val) {
      // 模拟异步加载
      this.myChart.hideLoading()
      this.myChart.setOption({
        xAxis: {
          data: val.date
        },
        series: [{
          name: '百度指数',
          data: val.exp,
          type: 'line',
          smooth: true,
          hoverAnimation: true
        }]
      })
    },
    pieChartData (value) {
      this.pieChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return '<span style="font-size:18px;">' + params.name + '</span><br />' + params.value
          },
          padding: [10, 20],
          textStyle: {
            color: '#ddd',
            lineHeight: 30
          }
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  computed: {
    LineChartData () {
      let length = this.randomData.length
      return this.randomData.slice(length - this.chartSelect).reduce((pre, d, idx) => {
        pre.date.push((d.date.getMonth() + 1) + '-' + d.date.getDate())
        pre.exp.push(d.exp)
        return pre
      }, {date: [], exp: []})
    },
    pieChartData () {
      if (this.pieSelect) {
        return this.randomData.reduce((pre, d, idx, arr) => {
          let obj = {}

          if (idx !== 0 && d.date.getMonth() === arr[idx - 1].date.getMonth()) {
            pre[pre.length - 1].value += d.exp
          } else {
            obj.name = d.date.getMonth() + '月份'
            obj.value = d.exp
            pre.push(obj)
          }
          return pre
        }, [])
      } else {
        return this.randomData.reduce((pre, d, idx, arr) => {
          let obj = {}

          if (idx !== 0 && d.week === arr[idx - 1].week) {
            pre[pre.length - 1].value += d.exp
          } else {
            obj.name = '第' + d.week + '周'
            obj.value = d.exp
            pre.push(obj)
          }
          return pre
        }, [])
      }
    }
  },
  components: {
    // Echart
  }
}
</script>
<style scoped>
.d-sumary-box{
  background-color: #ffffff;
  height: 180px;
  align-items: center;
}
.iconfont{
  font-size: 40px;
}
.d-sumary-title{
  color: #666;
  font-size: 16px;
}
.d-sumary-text{
  font-size: 30px;
}
.d-text-time{
  color: #4951ec;
}
.d-text-qitashouru{
  color: #ff0000;
}
.d-text-fonts-user{
  color: #ec9949;
}
.d-text-order{
  color: #ec499e;
}
.d-infos-box,.d-charts-box{
  background-color: #ffffff;
  padding: 20px 25px;
}
</style>
