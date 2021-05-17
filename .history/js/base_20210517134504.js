var Main = new Vue({
  el: '#app',
  name: app,
  data: {
    timeDatas: [
      "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00", "02:00", "04:00", "06:00", "08:00"
    ],
    qjd: 1.0000, //清洁度
    wlqtl: 0.6924, //物料齐套率
    sbdjs: 0, //设备点击率
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
          align: 'center',
        }, {
          label: '在职人数',
          prop: 'zzrs',
          align: 'center',
        }, {
          label: '实际出勤',
          prop: 'sjcq',
          align: 'center',
        }],
      data2: [], // 非定额人员出勤-左
      data3: [], // 非定额人员出勤-右
      columns4: [
        {
          label: '治具总数',
          prop: 'zjzs',
          align: 'center',
        }, {
          label: '机台总数',
          prop: 'jtzs',
          align: 'center',
        }, {
          label: '运行',
          prop: 'yx',
          align: 'center',
        }, {
          label: '待机',
          prop: 'dj',
          align: 'center',
        }, {
          label: '报警',
          prop: 'bj',
          align: 'center',
        }, {
          label: '离线',
          prop: 'lx',
          align: 'center',
        }],
      data4: [
        {
          order: '0',
          num: '13',
          run: '9',
          Standby: '3',
          alarm: '0',
          offline: '1'
        }],
      columns5: [
        {
          label: '计划达成率',
          prop: 'Achievement',
          align: 'center',
        }, {
          label: '物料齐率',
          prop: 'material',
          align: 'center',
        }, {
          label: '实际UPH',
          prop: 'UPH',
          align: 'center',
        }
      ],
      data5: [],
      height: 100
    },
    colors: [
      {
        color: '#f56c6c',
        percentage: 20
      },
      {
        color: '#e6a23c',
        percentage: 40
      },
      {
        color: '#5cb87a',
        percentage: 60
      },
      {
        color: '#1989fa',
        percentage: 80
      },
      {
        color: '#6f7ad3',
        percentage: 100
      }
    ],
    percentage: 90,
    width: 200
  },
  computed: {
    columns() {
      return this.tableData.columns.filter((item) => {
        return item.showHead
      })
    },
    columns2() {
      return this.tableData.columns2
    },
    columns4() {
      return this.tableData.columns4
    },
    columns5() {
      return this.tableData.columns5
    },
    items() {
      return this.tableData.columns.filter((item) => {
        return !item.showHead
      })
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      axios.get('assets/fgb.json', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
        .then((response) => {
          console.log(response);
          this.tableData.data5 = response.data.data
          myChart.setOption({

          })
        })
        .catch((error) => {
          console.log(error);
        });
    })
  },
  methods: {

  }
})

var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // Use axis to trigger tooltip
      type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    data: ['入库', '物料齐套', '总计划']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#']
  },
  series: [
    {
      name: '入库',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
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
        show: true
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
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [100, 30, 70, 30, 70, 60, 34]
    }


  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}
