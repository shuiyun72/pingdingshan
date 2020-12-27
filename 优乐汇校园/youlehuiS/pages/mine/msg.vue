<template>
	<view class="msg">
		<view class="wc_img">
			<image src="../../static/img/yxz.png" class="img" mode=""></image>
		</view>
		<view class="msg_t">
			<view class="title">提现申请提交成功</view>
		</view>
		<view class="bh160">
			
		</view>
		<view class="bg_btn_sub_sy">
			<view class="btn" @click="next">返回钱包</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			next(){
				uni.navigateBack({
					delta:2
				})
			}
		}
	}
</script>

<style lang="less">
	.msg {
		font-size: 28upx;
		color: #666;
		.msg_t {
			text-align: center;
			.title {
				font-size: 36upx;
			}
		}
		.wc_img {
			padding: 120upx 0 40upx;
			display: flex;
			justify-content: center;

			.img {
				width: 120upx;
				height: 120upx;
			}
		}
	}

	.bg_btn_sub_sy {
		padding: 0 52upx;

		.btn {
			background-color: #FF3152;
			color: #fff;
			padding: 16upx 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
</style>
