<template>
	<view class="m_msg">
		<view class="item" v-for="i in 10">
			<text class="text_title">系统消息 : </text>
			<text>设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.m_msg {
		padding: 0upx 26upx 40upx;

		.item {
			margin-bottom: 26upx;
			.text_title {
				font-weight: bold;
				margin-right: 6upx;
				font-size: 32upx;
			}
		}
	}
</style>
