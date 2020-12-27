<template>
	<view class="return_msg">
		<view class="re_title">问题和意见</view>
		<textarea v-model="ques" placeholder="请简要描述您的问题和意见" class="textarea t1" />
		<view class="re_title">联系方式</view>
		<textarea v-model="phone" placeholder="请留下您的联系方式" class="textarea t2" />
		<view class="bh160"></view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo">提交</view></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ques: '',
			phone: ''
		};
	},
	methods: {
		nativeTo() {
			uni.navigateTo({
				url: '../home/msg?pageType=4'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.return_msg {
	background-color: #f0f0f0;
	height: 100vh;
	.bg_btn_sub_sy {
		padding: 0 26upx;
		.btn {
			background-color: #fec106;
			color: #fff;
			padding: 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
	.re_title {
		padding: 26upx;
		font-size: 32upx;
		color: #666;
	}
	.textarea {
		background-color: #fff;
		font-size: 28upx;
		padding: 26upx;
		&.t1 {
			height: 150upx;
		}
		&.t2 {
			height: 50upx;
		}
	}
	.msg_btn {
		padding: 0 60upx;
	}
}
</style>
