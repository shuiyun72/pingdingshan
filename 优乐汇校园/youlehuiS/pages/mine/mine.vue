<template>
	<view class="pingjia">
		<view class="pj_item" v-for="item in pingjiaList">
			<view class="pj1">
				<view class="pj_left">
					<image src="../../static/img/pj.png" class="pj_img" mode=""></image>
					<view class="x">
						订单编号 : 12345651651454
					</view>
				</view>
				
				<view class="red" @click="nativeTo(item)">
					回复
				</view>
			</view>
			<view class="pj2">
				<image src="../../static/img/dp.png" class="pj2_img" mode=""></image>
				<view class="pj2_r">
					<view class="pt">单人单人单人单人单人单人</view>
					<view class="money_pj2">
						共1份 实付 :
						<text class="num"> 18元</text>
					</view>
				</view>
			</view>
			<view class="rate_sy">
				<view class="rate_i_sy">
					<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(item.star)"></view>
					<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - item.star)"></view>
				</view>
				<view class="right">{{ item.star }}.0</view>
			</view>
			<view class="msg_text">经常来经常来经常来经常来经常来经常来</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pingjiaList: [
				{
					star: 5
				},
				{
					star: 4
				}
			]
		};
	},
	methods:{
		calcNum(num) {
			let arrayL = [];
			for (let i = 0; i < num; i++) {
				arrayL.push(i);
			}
			return arrayL;
		},
		nativeTo(item){
			uni.navigateTo({
				url:"./reply"
			})
		}
	}
};
</script>

<style lang="less" scoped>
.pingjia{
	background-color: #f0f0f0;
	font-size: 28upx;
	padding-top: 2upx;
	color: #666;
	/* #ifdef MP */
	min-height: 100vh;
	/* #endif */
	/* #ifndef MP */
	min-height: 92vh;
	/* #endif */
	.rate_sy {
		display: flex;
		.rate_i_sy {
			display: inline-flex;
			.iconxingxing {
				color: #ccc;
				font-size: 28upx;
				margin-right: 12upx;
				&.yellow {
					color: #fec40b;
				}
			}
		}
		.right {
			color: #999;
			font-size: 28upx;
		}
	}
	.pj_item{
		padding: 26upx 26upx 30upx;
		background-color: #fff;
		margin-bottom: 26upx;
		.pj1{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.pj_left{
				display: inline-flex;
			}
			.pj_img{
				width: 36upx;
				height: 36upx;
				margin-right: 20upx;
			}
			.x{
				color: #333;
				font-size: 32upx;
			}
			.red{
				color: #FF3152;
			}
		}
		.pj2{
			display: flex;
			padding: 30upx 0 20upx;
			.pj2_img{
				width: 110upx;
				height: 110upx;
				margin-right: 20upx;
			}
			.pj2_r{
				.pt{
					font-size: 32upx;
					color: #333;
				}
				.money_pj2{
					padding-top: 10upx;
					color: #999;
					.num{
						margin-left: 10upx;
					}
				}
			}
		}
		.msg_text{
			padding-top: 20upx;
		}
	}
}
</style>
