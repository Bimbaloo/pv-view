<template>
  <div class="content-box">
    <div class="Production">
      <div class="ready">
        <div class="designation">
          <i class="el-icon-menu"></i>
          <span>产前准备</span>
        </div>
        <div class="progress-boxs">
          <div class="progress-box">
            <el-progress
              type="dashboard"
              :percentage="sbdjs"
              :stroke-width="strokeWidth"
              :color="colors"
              :width="width"
            >
            </el-progress>
            <span>设备点检率</span>
          </div>

          <div class="progress-box">
            <el-progress
              type="dashboard"
              :percentage="qjd"
              :stroke-width="strokeWidth"
              :color="colors"
              :width="width"
            >
            </el-progress>
            <span>清洁度OK率</span>
          </div>
          <div class="progress-box">
            <el-progress
              type="dashboard"
              :percentage="wlqtl"
              :stroke-width="strokeWidth"
              :color="colors"
              :width="width"
            >
            </el-progress>
            <span>物料齐率</span>
          </div>
        </div>
      </div>
      <!-- 出勤 -->
      <div class="chuqing">
        <div class="designation">
          <span style="display: inline-block;margin-left: 30px;"
            >定额人员出勤</span
          >
        </div>
        <div class="table-message">
          <el-table
            ref="table"
            :data="tableData.data"
            style="width: 100%;margin-top: 5px;"
          >
            <el-table-column
              v-for="col in columns"
              :key="col.prop"
              :label="col.label"
              :prop="col.prop"
              :class-name="col.class"
              align="center"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 异常 -->
    <div class="abnormal">
      <div class="designation" style="padding-top:1vh">
        <i class="el-icon-menu"></i>
        <span>过程监控</span>
      </div>
      <div class="table-message">
        <el-table ref="table4" :data="tableData.data4" style="width: 100%">
          <el-table-column
            v-for="col in columns4"
            :key="col.prop"
            :label="col.label"
            :prop="col.prop"
            :class-name="col.class"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="progress-boxs" style="margin-top:0">
        <div class="progress-box">
          <el-progress
            type="dashboard"
            :percentage="jhdcl"
            :stroke-width="strokeWidth"
            :color="colors"
            :width="width"
          >
          </el-progress>
          <span>计划完工率</span>
        </div>

        <div class="progress-box">
          <el-progress
            type="dashboard"
            :percentage="ztl"
            :stroke-width="strokeWidth"
            :color="colors"
            :width="width"
          >
          </el-progress>
          <span>直通率</span>
        </div>

        <div class="progress-box">
          <el-progress
            type="dashboard"
            :stroke-width="strokeWidth"
            :percentage="ydl"
            :color="colors"
            :width="width"
          >
          </el-progress>
          <span>稼动率</span>
        </div>
      </div>
      <div class="progress-boxs2">
        <div class="progress-box2">
          <div class="progress-message">
            治具损坏率
          </div>
          <el-progress
            :stroke-width="10"
            :percentage="zjshl"
            color="#f14135"
          ></el-progress>
        </div>
        <div class="progress-box2">
          <div class="progress-message">
            OQC批退率
          </div>
          <el-progress
            :stroke-width="10"
            :percentage="OQC"
            color="#f14135"
          ></el-progress>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="designation" style="width: 100vw;height:5vh;line-height:5vh">
        <i class="el-icon-menu"></i>
        <span>生产进度</span>
      </div>
      <div class="left" style="height: 45vh;width: 65vw;">
        <div class="timebox">
          <div v-for="(timeData, index) in timeDatas" :key="index">
            {{ timeData }}
          </div>
        </div>
        <div id="container" style="height:265px"></div>
      </div>
      <div class="right" style="height: 45vh;width: 35vw;">
        <el-table
          class="progress-table"
          ref="table5"
          :data="tableData.data5"
          style="width: 100%"
          height="270"
        >
          <el-table-column
            v-for="col in columns5"
            :key="col.prop"
            :label="col.label"
            :prop="col.prop"
            :class-name="col.class"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
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

export default {
  name: 'PcViewContent',
  data () {
    return {
      width: 90,
      strokeWidth: 12,
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
      qjd: 92, // 清洁度
      wlqtl: 68, // 物料齐套率
      sbdjs: 20, // 设备点击率，
      ctl: 10, // 设备直通率
      ztl: 10, // 直通率
      lv: 10, // 良率
      jhdcl: 10, // 计划达成率
      ydl: 10, // 移动率
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
            label: '计划投入数',
            prop: 'jhtrs',
            align: 'center'
          },

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
        // {
        //   color: '#F56C6C',
        //   percentage: 20
        // },
        // {
        //   color: '#F56C6C',
        //   percentage: 40
        // },
        {
          color: '#ffc107',
          percentage: 60
        },
        // {
        //   color: '#4caf50',
        //   percentage: 80
        // },
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
          itemWidth: 20,
          itemHeight: 15,
          textStyle: {
            color: '#fff',
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        grid: {
          left: '1%',
          right: '3%',
          bottom: '10%',
          top: '0',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            fontWeight: 'bold',
            fontSize: 15,
            color: '#fff',
            align: 'center',
            show: false
          },
          interval: 1 / 12
        },
        yAxis: {
          type: 'category',
          data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#'],
          axisLabel: {
            fontWeight: 'bold',
            fontSize: 10,
            color: '#fff'
            // lineHeight: '10'
          },
          inverse: true
        },
        series: [
          {
            name: '入库',
            type: 'bar',
            stack: 'total',
            itemStyle: { color: 'rgb(76, 175, 80)' },
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
            itemStyle: { color: '#ffeb3b' },
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
            itemStyle: { color: '#f14135' },
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
    }
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
  mounted () {
    this.getData()
  },
  // 在Vue实例销毁前，清除时间定时器
  beforeDestroy () {
    if (this.formatDate) {
      clearInterval(this.formatDate)
    }
  },
  methods: {
    // 获取数据
    getData () {
      this.$nextTick(() => {
        this.axios
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
      this.qjd = (options.cqzb[0].qjd * 10000) / 100
      this.wlqtl = (options.cqzb[0].wlqtl * 10000) / 100
      this.sbdjs = (options.cqzb[0].sbdjs * 10000) / 100

      // 定额人员
      options.derycq.forEach(el => {
        el.ccq = (el.ccq * 10000) / 100 + '%'
        el.cql = (el.cql * 10000) / 100 + '%'
      })
      this.tableData.data = options.derycq

      // 非定额人员
      this.tableData.data2 = options.fderycq1
      this.tableData.data3 = options.fderycq2

      // 异常情况
      this.tableData.data4 = options.ycqk.data

      this.ctl = (options.ycqk.yc.ctl * 10000) / 100 // 设备直通率
      this.ydl = (options.ycqk.yc.ydl * 10000) / 100 // 移动率
      this.jhdcl = (options.ycqk.yc.jhdcl * 10000) / 100 // 计划达成率
      this.ztl = (options.ycqk.yc.ztl * 10000) / 100 // 良率

      this.zjshl = (options.ycqk.yc.zjshl * 10000) / 100 // 治具损坏率
      this.OQC = (options.ycqk.yc.OQC * 10000) / 100 // OQC

      // 生产进度
      const data = []
      const lv = []
      const huang = []
      const hong = []
      options.scjd.forEach(el => {
        el.jhdcl = (el.jhdcl * 10000) / 100 + '%'
        el.wlqtl = (el.wlqtl * 10000) / 100 + '%'
        el.ztl = (el.ztl * 10000) / 100 + '%'

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

      const dom = document.getElementById('container')
      if (!this.myChart) {
        const myChart = this.echarts.init(dom)
        this.myChart = myChart
      }
      // let myChart = echarts.init(dom);

      const option = this.echartsOption
      if (option && typeof option === 'object') {
        this.myChart.setOption(option)
      }
    }
  }
}
</script>

<style lang="less">
.table-message td,
th {
  background-color: #000552 !important;
  border: 1px solid #000552;
}
.el-table td,
.el-table th.is-leaf {
  border: 1px solid #000552;
}
.el-table th,
.el-table td {
  background-color: #000552 !important;
  padding: 6px 0;
}
.el-table {
  color: #fff;
  font-weight: bold;
}
.el-table,
.el-table__expanded-cell {
  background-color: #000552 !important;
}
.el-table th > .cell {
  // height: 1vh;
  color: #fff;
  font-weight: bold;
  font-size: 1vw;
  line-height: 2vh;
}
.el-table td > .cell {
  // height: 1vh;
  font-size: 1vw;
  color: rgb(213, 104, 13);
}

.content-box {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100vw;
  height: 90vh;
  justify-content: space-evenly;

  .designation {
    color: #fff;
    font-size: 1.5vw;
  }

  .progress-boxs {
    display: flex;
    justify-content: space-around;
    margin-top: 1.1vh;
    .progress-box span {
      color: #fff;
      font-weight: bold;
      font-size: 1vw;
    }
  }

  .Production {
    height: 40vh;
    width: 50vw;
    border-right: 5px solid #12204d;
    border-bottom: 10px solid #12204d;
    box-sizing: border-box;
    .ready,
    .chuqing {
      padding-top: 1vh;
      height: 23vh;
    }
    .chuqing {
      height: 15vh;
    }
  }

  /* 异常 */
  .abnormal {
    height: 40vh;
    width: 50vw;
    border-left: 5px solid #12204d;
    border-bottom: 10px solid #12204d;

    box-sizing: border-box;
  }

  .progress {
    width: 100vw;
    height: 50vh;
  }

  .el-icon-menu {
    color: #2f84c1;
    margin-left: 10px;
  }

  .progress-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress-box2 {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.3vh;
    margin-bottom: 2vh;
    align-items: center;
  }
  .progress-box2 .el-progress {
    width: 80%;
    display: flex;
    align-items: center;
  }
  .progress-message {
    color: #fff;
    font-weight: bold;
    font-size: 1vw;
  }
  .progress {
    // padding-top: 10px;
  }
  .el-table::before {
    height: 0;
  }
  .progress {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .timebox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 30px;
  }
  .timebox div {
    color: #fff;
    font-weight: bold;
    font-size: 1vw;
  }
  .el-progress__text {
    color: rgb(213, 104, 13);
    font-weight: bold;
  }
  .progress-box > span {
    color: rgb(213, 104, 13);
  }
  td.lv > .cell {
    color: lime !important;
  }
  td.huang > .cell {
    color: yellow;
  }
  td.hong > .cell {
    color: red;
  }
  td.hui > .cell {
    color: dimgrey;
  }
  .el-progress-bar__outer {
    background-color: #f14135;
  }
  .progress-table th > .cell {
    height: 16px;
  }
  .progress-table td {
    padding: 1px;
  }
  .progress-table td > .cell {
    height: 26px;
    line-height: 26px;
  }
  .el-table .cell {
    // line-height: 50px;
  }
}
.content-box .el-progress__text {
  font-size: 16px !important;
}
.el-table th,
.el-table tr {
  background-color: #000552;
}

.el-table td > .cell {
  font-size: 16px !important;
}

.content-box .el-progress__text {
  font-size: 16px !important;
}
.content-box .el-progress-bar__outer {
  background-color: #4caf50 !important;
}
</style>
