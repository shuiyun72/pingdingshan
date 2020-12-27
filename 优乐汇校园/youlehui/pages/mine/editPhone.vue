<template>
	<view class="edit_phone">
		<view class="edit_body">
			<view class="icon_input_sy">
				<view class="iconfont icon19"></view>
				<input class="input" type="text" v-model="phone" placeholder="请输入手机号" />
				<text class="iconfont iconshouye_shugang_shijiantixing"></text>
				<text class="yzm" @click="getYZM" v-if="timeout < 0">发送验证码</text>
				<text class="yzm" v-if="timeout >= 0">{{ timeout }}s 重新获取</text>
			</view>
			<view class="icon_input_sy" v-if="isShow">
				<view class="iconfont iconyanzhengma2"></view>
				<input class="input" type="text" v-model="yzm" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="bh160"></view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo">提交</view></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: true,
			phone: '',
			yzm: '',
			timeout: -1
		};
	},
	onShow() {},
	methods: {
		getYZM() {},
		nativeTo() {
			uni.navigateTo({
				url: '../home/msg?pageType=4'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
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
.edit_body {
	padding: 120upx 0 100upx;
}
.edit_phone {
	font-size: 28upx;
	color: #666;
	.s_bz {
		padding-top: 10upx;
		color: #999;
		transform: scale(0.9);
		text-align: center;
	}
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
		width: 230upx;
	}
}

.sub_top {
	margin-top: 160upx;
}

.edit_phone {
	padding: 40upx 60rpx 0 60rpx;

	.iconshouye_shugang_shijiantixing {
		font-size: 38upx;
		color: #999;
	}

	.yzm {
		font-size: 25upx;
		color: #999;
	}
}

.login_wjmm {
	font-size: 20upx;
	color: #999;
	padding: 20upx 0 90upx;

	&.b {
		color: #333;
	}
}
</style>
