<script>
  var Main = new Vue({
    el: '#app',
      name: app,
      data: {

    tableData: {
    columns: [{
    label: '打印机',
              prop: 'printer',
              align: 'center',
              showHead: true
            },
            {
    label: '任务数',
              prop: 'tasksNum',
              align: 'center',
              showHead: true
            },
            {
    label: '状态',
              prop: 'status',
              align: 'center',
              showHead: true
            },
            {
    label: '最近一次打印时间',
              prop: 'lastTime',
              align: 'center',
              showHead: true
            },
            {
    label: '关联设备',
              prop: 'equipment',
              align: 'center',
              class: 'red',
              showHead: true
            },
            {
    label: '操作',
              prop: 'handle',
              align: 'center',
              showHead: true
            },
            {
    label: '任务名称:',
              prop: 'name',
              align: 'center',
              showHead: false
            },
            {
    label: '发起人:',
              prop: 'people',
              align: 'center',
              showHead: false
            },
            {
    label: '发起时间:',
              prop: 'happenTime',
              align: 'center',
              showHead: false
            },
            {
    label: '页数:',
              prop: 'size',
              align: 'center',
              showHead: false
            }
          ],
          data: [{
    tasksNum: '1',
              printer: 'AA',
              status: '启动',
              lastTime: '2018/3/29 11:20',
              equipment: 4,
              handle: '暂停',
              rowNums: [{
    name: '招聘信息',
                people: '张三',
                happenTime: '2018/1/2',
                size: 10
              }]
            },
            {
    tasksNum: '2',
              printer: 'BB',
              status: '暂停',
              lastTime: '2018/3/28 10:55',
              equipment: 5,
              handle: '启动',
              rowNums: [{
    name: '打印信息',
                  people: '李四',
                  happenTime: '2018/1/2',
                  size: 10
                },
                {
    name: '打印信息',
                  people: '李四',
                  happenTime: '2018/1/2',
                  size: 10
                }
              ]
            },
            {
    tasksNum: '3',
              printer: 'CC',
              status: '--',
              lastTime: '2018/3/29 01:10',
              equipment: 1,
              handle: '启动',
              rowNums: [{
    name: '打印信息1',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                },
                {
    name: '打印信息',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                },
                {
    name: '打印信息',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                }
              ]
            },
            {
    tasksNum: '4',
              printer: 'DD',
              status: '--',
              lastTime: '2018/3/29 06:58',
              equipment: 4,
              handle: '启动',
              rowNums: [{
    name: '打印信息1',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                },
                {
    name: '打印信息',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                },
                {
    name: '打印信息',
                  people: '赵钱',
                  happenTime: '2018/1/2',
                  size: 10
                }
              ]
            }
          ],
          height: 100
        }
      },
      computed: {
    columns() {
          return this.tableData.columns.filter((item) => {
            return item.showHead
          })
        },
        items() {
          return this.tableData.columns.filter((item) => {
            return !item.showHead
          })
        }
      },
      methods: {
    handleClick() {
    this.$confirm('是否启动打印机?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '启动成功!'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消启动'
      })
    })
  },
        clearClick() {
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '启动成功!'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消启动'
      })
    })
  },
        cellClick(row, column, cell, event) {
    console.log(row, column, cell, event)
          if (column.property === 'equipment') {
    window.open('table2.html')
  }
        }
      }
    })

  </script>