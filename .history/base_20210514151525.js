var Main = new Vue({
  el: '#app',
  name: app,
  data: {
    tableData: {
      columns: [{
        label: '在职人员',
        prop: 'printer',
        align: 'center',
        showHead: true
      },
      {
        label: '应出勤',
        prop: 'tasksNum',
        align: 'center',
        showHead: true
      },
      {
        label: '实际出勤',
        prop: 'status',
        align: 'center',
        showHead: true
      },
      {
        label: '超出勤',
        prop: 'lastTime',
        align: 'center',
        showHead: true
      },
      {
        label: '出勤率',
        prop: 'equipment',
        align: 'center',
        class: 'red',
        showHead: true
      }
      ],
      data: [{
        tasksNum: '1',
        printer: '0',
        status: '0',
        lastTime: '0',
        equipment: 0
      }],
      columns2: [{
        label: '序列',
        prop: 'order',
        align: 'center',
      }, {
        label: '在职人数',
        prop: 'num',
        align: 'center',
      }, {
        label: '实际出勤',
        prop: 'realistic',
        align: 'center',
      }],
      data2: [{
        order: '设备',
        num: '1',
        realistic: '0'
      }, {
        order: '工艺',
        num: '5',
        realistic: '0'
      },],
      data3: [{
        order: '品质',
        num: '0',
        realistic: '0'
      },
      {
        order: '制造',
        num: '6',
        realistic: '0'
      }
      ],
      columns4: [{
        label: '治具总数',
        prop: 'order',
        align: 'center',
      }, {
        label: '机台总数',
        prop: 'num',
        align: 'center',
      }, {
        label: '运行',
        prop: 'run',
        align: 'center',
      }, {
        label: '待机',
        prop: 'Standby',
        align: 'center',
      }, {
        label: '报警',
        prop: 'alarm',
        align: 'center',
      }, {
        label: '离线',
        prop: 'offline',
        align: 'center',
      }],
      data4: [{
        order: '0',
        num: '13',
        run: '9',
        Standby: '3',
        alarm: '0',
        offline: '1'
      }],
      columns5: [{
{
        label: '待机',
        prop: 'Standby',
        align: 'center',
      }, {
        label: '报警',
        prop: 'alarm',
        align: 'center',
      }, {
        label: '离线',
        prop: 'offline',
        align: 'center',
      }
      }],
    height: 100,
  },
  colors: [{
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
  items() {
    return this.tableData.columns.filter((item) => {
      return !item.showHead
    })
  }
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
    data: ['Direct', 'Mail Ad', 'Affiliate Ad']
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
      name: 'Direct',
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
      name: 'Mail Ad',
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
      name: 'Affiliate Ad',
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
