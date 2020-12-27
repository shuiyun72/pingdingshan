<template>
	<view class="charge">
		<view class="mine_l">
			<image src="../../static/img/logo.png" class="mine_logo" mode="widthFix"></image>
		</view>
		
		<uni-list>
			<uni-list-item title="会员类型">
				<template v-slot:right="">
					<picker @change="bindPickerChangeCX" :value="carCXIndex" :range="carCXArray" range-key="name">
						<view class="uni-input">{{carCXArray[carCXIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
		</uni-list>
		<view class="huiyuan_msg">
			您选择的年会员需要支付 <text class="cc"> {{carMArray[carCXIndex].name}} </text> 元
		</view>
		<view class="sub_top">
			<button class="btn blue ms round" @click="payMoney">支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carCXArray: [{
					name: '年会员'
				}, {
					name: '季会员'
				}, {
					name: '月会员'
				}],
				carMArray: [{
					name: '3000'
				}, {
					name: '1000'
				}, {
					name: '300'
				}],
				carCXIndex: 0,
			};
		},
		onShow() {

		},
		methods: {
			payMoney() {
				uni.showToast({
				    title: '支付成功',
				    duration: 2000
				});
				setTimeout(() => {
					uni.switchTab({
						url: '../mine/mine'
					})
				}, 1500)
			},
			bindPickerChangeCX: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carCXIndex = e.detail.value
			},

		}
	}
</script>

<style lang="scss" scoped>
	.charge {
		padding: 40upx 60rpx 0 60rpx;
		.huiyuan_msg{
			padding: 26upx;
			.cc{
				color: #f00;
				margin: 0 6upx;
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

		.sub_top2 {
			margin-top: 30upx;
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
