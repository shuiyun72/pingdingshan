<template>
	<view class="search_result mc26">
		<view class="item_shu_food_sy" v-for="item in hotFoodsList" @click="shopDetail(item)">
			<image class="img" src="../../static/img/home/tu4.png" mode=""></image>
			<view class="right">
				<view class="">
					<view class="title">启达西饼蛋糕店</view>
					<view class="rate_sy">
						<view class="rate_i_sy">
							<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(item.star)"></view>
							<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - item.star)"></view>
						</view>
						<view class="right">{{ item.star }}.0</view>
					</view>
				</view>
				<view class="over_num" v-if="item.witch == 1">
					<view class="icon blue">蓝楼</view>
					<view class="text">已售960</view>
				</view>
				<view class="over_num" v-if="item.witch == 2">
					<view class="icon red">红楼</view>
					<view class="text">已售960</view>
				</view>
				<view class="over_num" v-if="item.witch == 3">
					<view class="icon yel">白楼</view>
					<view class="text">已售960</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotFoodsList: [
					{
						img: '../../static/img/home/tu4.png',
						title: '骐达西饼蛋糕店',
						star: 5,
						witch: 1,
						num: 960
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
			shopDetail(item){
				console.log(item)
				uni.setStorageSync('pageTitle','蓝楼')
				uni.switchTab({
					url:"../orders/orders"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.search_result{
	font-size: 28upx;
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
		.right{
			color: #999;
			font-size: 28upx;
		}
	}
	.item_shu_food_sy {
		display: flex;
		margin-bottom: 40upx;
		.img {
			width: 190upx;
			height: 190upx;
		}
		.right {
			margin-left: 26upx;
			display: inline-flex;
			justify-content: space-between;
			flex-direction: column;
			.title {
				font-size: 36upx;
				margin-bottom: 16upx;
			}
			.over_num {
				display: inline-flex;
				align-items: center;
				.text {
					font-size: 28upx;
				}
				.icon {
					padding: 4upx 10upx;
					transform: scale(0.9);
					margin-right: 12upx;
					&.blue {
						background-color: #d4e9ff;
						color: #459ffe;
					}
					&.red {
						background-color: #ffd1be;
						color: #f00;
					}
					&.yel {
						background-color: #fee9aa;
						color: #fec106;
					}
				}
			}
		}
	}
}
</style>
