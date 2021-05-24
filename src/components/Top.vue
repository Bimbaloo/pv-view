<template>
  <div class="title-box">
    <div class="title">{{ title }}</div>
    <div class="message">
      <div class="time">{{ time }}</div>
      <div class="name">MES</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  },
  data () {
    return {
      title: '一工厂标间车间看板',
      time: ''
    }
  },
  created () {
    this.currentTime()
  },
  methods: {
    // 计算时间
    formatDate () {
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日
      const week = date.getDay() // 星期
      const weekArr = [
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title-box {
  height: 10vh;
  background-image: linear-gradient(to right, #020828, #12204d, #020828);
  width: 100vw;

  .title {
    font-size: 2.7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .message {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .time,
    .name {
      color: #fff;
    }

    .name {
      font-size: 2vw;
      margin-left: 1vw;
      margin-right: 1vw;
    }

    .time {
      font-size: 1vw;
    }
  }
}
</style>
