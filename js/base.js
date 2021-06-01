const url = 'http://192.168.46.10:9201/mes/cjkb/execute' // 服务器
// const url = 'http://192.168.120.62/mes/cjkb/execute' // 张杭烃本地
// const url = 'http://rap2api.taobao.org/app/mock/283615/mes/cjkb/execute:9999' // rap2模拟数据

// 查询条件
const data = {
  gc: '1530',
  lh: '新基地4#',
  ks: '组测三课',
  cj: '三课一',
  sbglcj: '组测三课一车间'
}

// 最长查询时间
const timeout = { timeout: 50000 }
// 轮询的时间
const time = 30 * 60 * 1000

let Main = new Vue({
  el: '#app',
  name: 'app',
  data: {
    width: 350,
    strokeWidth: 40,
    time: '',
    timeDatas: [
      '08:00',
      '10:00',
      '12:00',
      '14:00',
      '16:00',
      '18:00',
      '20:00',
      '22:00',
      '00:00',
      '02:00',
      '04:00',
      '06:00',
      '08:00'
    ],
    qjd: 92, //清洁度
    wlqtl: 68, //物料齐套率
    sbdjs: 20, //设备点击率，
    ctl: 10, // 设备直通率
    ydl: 10, // 稼动率
    ztl: 0, //直通率
    jhdcl: 0, //计划达成率
    OQC: 20, // OQC
    zjshl: 20, // 治具损坏率
    percentage: 90,
    percentage1: 20,
    percentage2: 90,
    tableData: {
      columns: [
        {
          label: '在职人员',
          prop: 'zzrs',
          align: 'center',
          showHead: true
        },
        {
          label: '应出勤',
          prop: 'ycq',
          align: 'center',
          showHead: true
        },
        {
          label: '实际出勤',
          prop: 'sjcq',
          align: 'center',
          showHead: true
        },
        {
          label: '超出勤',
          prop: 'ccq',
          align: 'center',
          showHead: true
        },
        {
          label: '出勤率',
          prop: 'cql',
          align: 'center',
          class: 'red',
          showHead: true
        }
      ],
      data: [], // 定额人员出勤
      columns2: [
        {
          label: '序列',
          prop: 'xl',
          align: 'center'
        },
        {
          label: '在职人数',
          prop: 'zzrs',
          align: 'center'
        },
        {
          label: '实际出勤',
          prop: 'sjcq',
          align: 'center'
        }
      ],
      data2: [], // 非定额人员出勤-左
      data3: [], // 非定额人员出勤-右
      columns4: [
        {
          label: '治具总数',
          prop: 'zjzs',
          align: 'center'
        },
        {
          label: '机台总数',
          prop: 'jtzs',
          align: 'center'
        },
        {
          label: '运行',
          prop: 'yx',
          align: 'center',
          class: 'lv'
        },
        {
          label: '待机',
          prop: 'dj',
          align: 'center',
          class: 'huang'
        },
        {
          label: '报警',
          prop: 'bj',
          align: 'center',
          class: 'hong'
        },
        {
          label: '离线',
          prop: 'lx',
          align: 'center',
          class: 'hui'
        }
      ],
      data4: [], // 异常情况表格
      columns5: [
        {
          label: '计划达成率',
          prop: 'jhdcl',
          align: 'center'
        },
        {
          label: '物料齐通率',
          prop: 'wlqtl',
          align: 'center'
        },
        {
          label: '实际UPH',
          prop: 'uph',
          align: 'center'
        },
        {
          label: '直通率',
          prop: 'ztl',
          align: 'center'
        }
      ],
      data5: [],
      height: 100
    },
    colors: [
      {
        color: '#F56C6C',
        percentage: 20
      },
      {
        color: '#F56C6C',
        percentage: 40
      },
      {
        color: '#E6A23C',
        percentage: 60
      },
      {
        color: '#4caf50',
        percentage: 80
      },
      {
        color: '#4caf50',
        percentage: 100
      }
    ],

    // echarts 的 option
    echartsOption: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        data: ['入库', '物料齐套', '总计划'],
        left: 'center',
        bottom: '1%',
        itemWidth: 100,
        itemHeight: 40,
        textStyle: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        }
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '0',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          fontWeight: 'bold',
          fontSize: 30,
          color: '#fff',
          align: 'center'
        }
      },
      yAxis: {
        type: 'category',
        data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#'],
        axisLabel: {
          fontWeight: 'bold',
          fontSize: 30,
          color: '#fff',
          lineHeight: '50'
        }
      },
      series: [
        {
          name: '入库',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 20, 0, 0, 5, 15, 33]
        },
        {
          name: '物料齐套',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 50, 30, 70, 25, 25, 33]
        },
        {
          name: '总计划',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [100, 30, 70, 30, 70, 60, 34]
        }
      ]
    },
    myChart: null
  },
  computed: {
    columns () {
      return this.tableData.columns.filter(item => {
        return item.showHead
      })
    },
    columns2 () {
      return this.tableData.columns2
    },
    columns4 () {
      return this.tableData.columns4
    },
    columns5 () {
      return this.tableData.columns5
    },
    items () {
      return this.tableData.columns.filter(item => {
        return !item.showHead
      })
    }
  },
  created: function () {},
  mounted: function () {
    this.currentTime()
    this.getData()
  },
  beforeDestroy () {
    if (this.formatDate) {
      clearInterval(this.formatDate) // 在Vue实例销毁前，清除时间定时器
    }
  },
  methods: {
    // 获取数据
    getData () {
      this.$nextTick(() => {
        axios
          .post(url, data, timeout)
          .then(response => {
            console.log(response)
            this.updateData(response.data)
            // 每半小时更新数据
            setTimeout(() => {
              this.getData()
            }, time)
          })
          .catch(error => {
            console.log(error)
            // 因为网络等问题获取数据失败，每半小时重新获取
            setTimeout(() => {
              this.getData()
            }, time)
          })
      })
    },
    // 更新数据
    updateData (options) {
      // 产前准备
      this.qjd = Number((options.cqzb[0].qjd * 100).toFixed(2))
      this.wlqtl = Number((options.cqzb[0].wlqtl * 100).toFixed(2))
      this.sbdjs = Number((options.cqzb[0].sbdjs * 100).toFixed(2))

      // 定额人员
      this.tableData.data = options.derycq

      // 非定额人员
      this.tableData.data2 = options.fderycq1
      this.tableData.data3 = options.fderycq2

      // 异常情况
      this.tableData.data4 = options.ycqk.data

      this.jhdcl = Number((options.ycqk.yc.jhdcl * 100).toFixed(2)) // 直通率
      this.ztl = Number((options.ycqk.yc.ztl * 100).toFixed(2)) // 直通率
      this.ydl = Number((options.ycqk.yc.ydl * 100).toFixed(2)) // 稼动率

      this.zjshl = Number((options.ycqk.yc.zjshl * 100).toFixed(2)) // 治具损坏率
      this.OQC = Number((options.ycqk.yc.OQC * 100).toFixed(2)) // OQC

      // 生产进度
      let data = []
      let lv = []
      let huang = []
      let hong = []
      options.scjd.forEach(el => {
        el.jhdcl = (el.jhdcl * 100).toFixed(2)
        el.wlqtl = (el.wlqtl * 100).toFixed(2)
        el.ztl = (el.ztl * 100).toFixed(2)

        data.push(el.xt)
        lv.push(el.lv)
        huang.push(el.huang)
        hong.push(el.hong)
      })
      this.tableData.data5 = options.scjd

      this.echartsOption.yAxis.data = data
      this.echartsOption.series[0].data = lv
      this.echartsOption.series[1].data = huang
      this.echartsOption.series[2].data = hong

      let dom = document.getElementById('container')
      if (!this.myChart) {
        let myChart = echarts.init(dom)
        this.myChart = myChart
      }
      // let myChart = echarts.init(dom);

      let option = this.echartsOption
      if (option && typeof option === 'object') {
        this.myChart.setOption(option)
      }
    },

    // 计算时间
    formatDate () {
      let date = new Date()
      let year = date.getFullYear() // 年
      let month = date.getMonth() + 1 // 月
      let day = date.getDate() // 日
      let week = date.getDay() // 星期
      let weekArr = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      let hour = date.getHours() // 时
      hour = hour < 10 ? '0' + hour : hour // 如果只有一位，则前面补零
      let minute = date.getMinutes() // 分
      minute = minute < 10 ? '0' + minute : minute // 如果只有一位，则前面补零
      let second = date.getSeconds() // 秒
      second = second < 10 ? '0' + second : second // 如果只有一位，则前面补零
      this.time = `${year}年${month}月${day}日${hour}:${minute}:${second} ${weekArr[week]}`
    },
    // 实时更新时间
    currentTime () {
      setInterval(this.formatDate, 500)
    }
  }
})
