<template>
	<div class="title-box">
		<div class="title">{{title}}</div>
		<div class="message">
			<div class="time">{{time}}</div>
			<div class="name">MES</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "head",
	props: {
		msg: String
	},
	data() {
		return {
			title: "三课一车间生产看板",
			time: ""
		};
	},
	created() {
		this.currentTime();
	},
	methods: {
		// 计算时间
		formatDate() {
			let date = new Date();
			let year = date.getFullYear(); // 年
			let month = date.getMonth() + 1; // 月
			let day = date.getDate(); // 日
			let week = date.getDay(); // 星期
			let weekArr = [
				"星期日",
				"星期一",
				"星期二",
				"星期三",
				"星期四",
				"星期五",
				"星期六"
			];
			let hour = date.getHours(); // 时
			hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
			let minute = date.getMinutes(); // 分
			minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
			let second = date.getSeconds(); // 秒
			second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
			this.time = `${year}年${month}月${day}日${hour}:${minute}:${second} ${weekArr[week]}`;
		},

		// 实时更新时间
		currentTime() {
			setInterval(this.formatDate, 500);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title-box {
	height: 10%;
	background-image: linear-gradient(to right, #020828, #12204d, #020828);
	width: 100%;

	.title {
		font-size: 80px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 120px;
		height: 120px;
		font-size: 50px;
		color: #fff;
	}

	.message {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 100px;

		.time,
		.name {
			color: #fff;
		}

		.name {
			font-size: 80px;
			margin-left: 50px;
		}

		.time {
			font-size: 50px;
		}
	}
}
</style>
