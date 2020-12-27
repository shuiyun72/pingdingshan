<template>
	<view class="mine">
		<view class="top_card">
			<view class="xiaoxi" @click="toNav('xiaoxi')">
				<image src="../../static/img/xiaox.png" mode="" class="ling_img"></image>
				<view class="ms">
					消息
				</view>
				<view class="iconfont iconjiantou"></view>
			</view>
			<view class="pt1">
				<view class="name">
					张桂林
				</view>
				<view class="phone">
					1333333333
				</view>
			</view>
			<view class="pt2">
				<view class="item">
					<view class="num">
						300
					</view>
					<view class="text">
						今日收入
					</view>
				</view>
				<view class="item">
					<view class="num">
						300
					</view>
					<view class="text">
						本月收入
					</view>
				</view>
				<view class="item">
					<view class="num">
						300
					</view>
					<view class="text">
						累计收入
					</view>
				</view>
			</view>
		</view>
		<uni-list>
			<uni-list-item title="订单明细" note="" @click="toNav('dingdan')" thumb="../../static/img/wodddmx.png"></uni-list-item>
			<uni-list-item title="佣金明细" note="" @click="toNav('yongjin')" thumb="../../static/img/wdyjmx.png"></uni-list-item>
			<uni-list-item title="意见反馈" note="" @click="toNav('yijian')" thumb="../../static/img/wodyjfk.png"></uni-list-item>
			<uni-list-item title="联系客服" note="" @click="toNav('kefu')" thumb="../../static/img/wdlxkf.png"></uni-list-item>
			<uni-list-item title="设置" note="" @click="toNav('set')" thumb="../../static/img/wdsz.png"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toNav(el){
				if(el == 'xiaoxi'){
					uni.navigateTo({
						url:"./xiaoxi"
					})
				}
				if(el == 'dingdan'){
					uni.switchTab({
						url:"../order/order?selNav=0"
					})
				}
				if(el == 'yongjin'){
					uni.navigateTo({
						url:"./yongjin"
					})
				}
				if(el == 'yijian'){
					uni.navigateTo({
						url:"./fankui"
					})
				}
				if(el == 'kefu'){
					
				}
				if(el == 'set'){
					uni.navigateTo({
						url:"./set"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.mine{
	.top_card{
		background: url(../../static/img/wodbg.png) no-repeat center center;
		background-size: 690upx 320upx;
		height: 320upx;
		width: 690upx;
		margin: 0 auto 40upx;
		box-sizing: border-box;
		padding: 40upx 40upx 30upx;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		.xiaoxi{
			position: absolute;
			top: 70upx;
			right:0;
			display: flex;
			background-image: linear-gradient(to right, rgba(255,255,255,.4), rgba(0,0,0,0));
			padding: 10upx 20upx;
			border-radius: 40upx 0 0 40upx;
			.ms{
				font-size: 28upx;
				padding: 0 20upx 0 10upx;
			}
			.ling_img{
				width: 36upx;
				height: 36upx;
			}
		}
		.pt1{
			.name{
				font-size: 32upx;
				margin-bottom: 6upx;
			}
			.phone{
				color: #f0f0f0;
			}
		}
		.pt2{
			display: inline-flex;
			justify-content: space-between;
			.item{
				text-align: center;
				.num{
					font-size: 32upx;
					margin-bottom: 10upx;
				}
				.text{
					font-size: 32upx;
				}
			}
		}
	}
}
</style>
