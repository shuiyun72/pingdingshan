<template>
	<view class="login">
		<view class="mine_l">
			<image src="../../static/img/logo.png" class="mine_logo"></image>
		</view>
		<view class="icon_input_sy">
			<view class="iconfont icon19"></view>
			<input class="input" type="text" v-model="phone" placeholder="请输入手机号" />
		</view>
		<view class="icon_input_sy">
			<view class="iconfont iconjiesuo"></view>
			<input class="input" type="text" v-model="psd" placeholder="请输入密码" />
		</view>

		<view class="bh160">
			
		</view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="loginIn">确定</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				psd: ""
			};
		},
		onShow() {

		},
		methods: {
			loginIn() {
				
			}

		}
	}
</script>

<style lang="scss" scoped>
	.bg_btn_sub_sy {
		padding: 0 52upx;
		.btn {
			background-color: #FF3152;
			color: #fff;
			padding:16upx 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
	.icon_input_sy {
		display: flex;
		border-bottom: 3rpx solid #eee;
		padding: 50rpx 12rpx 12rpx;
	
		.iconfont {
			font-size: 44upx;
		}
	
		.input {
			font-size: 26upx;
			padding: 4rpx 10rpx 4rpx 20upx;
			margin-left: 12rpx;
			width: 300rpx;
		}
	}
	.login {
		padding: 40upx 60rpx 0 60rpx;
		
		.iconshouye_shugang_shijiantixing {
			font-size: 38upx;
			color: #999;
		}
		
		.yzm {
			font-size: 25upx;
			color: $uni-bl;
		}
		.s_bz {
			padding-top: 10upx;
			color: #999;
			transform: scale(.9);
			text-align: center;
		}

		.mine_l_t {
			text-align: center;

			.t {
				padding: 100upx 0 50upx;
			}

			.wx {
				width: 80upx;
			}
		}

		.mine_l {
			text-align: center;
			margin-bottom: 50upx;

			.mine_logo {
				width: 200upx;
				height: 200upx;
			}
		}

		.sub_top {
			margin-top: 160upx;
		}

		.login_wjmm {
			font-size: 20upx;
			color: #999;
			padding: 20upx 0 90upx;

			&.b {
				color: #333;
			}
		}
	}
</style>
