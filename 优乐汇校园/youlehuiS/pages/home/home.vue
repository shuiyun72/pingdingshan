<template>
	<view class="home">
		<view class="h_title">商家端</view>
		<view class="mc26">
			<view class="h_card1">
				<image src="../../static/img/dp.png" class="h_img" mode=""></image>
				<view class="h1_r">
					<view class="t1">启达西饼蛋糕店</view>
					<view class="t2">
						<text class="iconfont iconmarketingturntablewinningDetail"></text>
						<view class="t_l" @click="nativeTo('nav0')">店家评价</view>
					</view>
					<view class="t3">
						<view class="state">店家状态</view>
						<switch @change="switch2Change" color="#FEC106" :checked="checkedL" class="swicth_btn" />
					</view>
				</view>
			</view>
		</view>
		<view class="mc26">
			<view class="h_card2" v-for="item in selList"  @click="nativeTo(item.url)">
				<view class="left">
					<image :src="'../../static/img/'+item.img" class="c2_img" mode=""></image>
					<view class="h2_r">
						<view class="t1">
							{{item.title}}
						</view>
						<view class="t2">
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="iconfont iconjiantou"> </view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			checkedL: true,
			selList:[
				{
					img:"qbmx.png",
					title:"钱包明细",
					text:"收入与提现账单",
					url:"nav1"
				},
				{
					img:"cplb.png",
					title:"产品列表",
					text:"管理我的产品",
					url:"nav2"
				},
				{
					img:"wddd.png",
					title:"我的订单",
					text:"查看我的店铺",
					url:"nav3"
				}
			]
		};
	},
	methods: {
		switch2Change(e) {
			console.log(e);
		},
		nativeTo(el){
			if(el == 'nav0'){
				uni.navigateTo({
					url:'../mine/mine'
				})
			}else
			if(el == 'nav1'){
				uni.navigateTo({
					url:'../mine/money'
				})
			}else
			if(el == 'nav2'){
				uni.navigateTo({
					url:'../orders/orders'
				})
			}else
			if(el == 'nav3'){
				uni.navigateTo({
					url:'../orders/allOrder'
				})
			}
		}
	}
};
</script>

<style lang="less" scoped>
.home {
	background-color: #e92544;
	min-height: 100vh;
	font-size: 28upx;
	color: #666;
	.h_title {
		color: #fff;
		text-align: center;
		font-size: 34upx;
		padding: 20upx;
	}
	.h_card2{
		background-color: #fff;
		margin-bottom: 26upx;
		padding: 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 16upx;
		.left{
			display: inline-flex;
			.c2_img{
				width: 100upx;
				height: 120upx;
			}
			.h2_r{
				margin-left: 50upx;
				.t1{
					font-size: 36upx;
					color: #333;
					padding-bottom: 20upx;
				}
				.t2{
					color: #999;
				}
			}
		}
		.iconjiantou{
			color: #999;
		}
	}
	.h_card1 {
		padding: 30upx 26upx;
		display: flex;
		background-color: #fff;
		border-radius: 16upx;
		margin-bottom: 40upx;
		.h_img{
			width: 200upx;
			height: 200upx;
		}
		.h1_r{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 40upx;
			.t1{
				font-size: 34upx;
			}
			.t2{
				display: inline-flex;
				color: #e92544;
				align-items: center;
				.iconfont{
					font-size: 28upx;
					margin-right: 12upx;
				}
			}
			.t3{
				display: inline-flex;
				align-items: baseline;
				color: #FEC106;
				.swicth_btn{
					transform: scale(.6);
				}
			}
		}
	}
}
</style>
