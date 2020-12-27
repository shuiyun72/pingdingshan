<template>
	<view class="add_money">
		<view class="m_ti">
			充值金额
		</view>
		<view class="mondy_box">
			<view class="item" v-for="(item,index) in moneyList" :class="{'active':index == monetSel}" @click="avticeL(item,index)">
				<view class="n1">
					<text class="nx">{{item.num1}}</text>元
				</view>
				<view class="n2">
					售价 : {{item.num2}}元
				</view>
			</view>
		</view>
		<view class="bd22">
			
		</view>
		<view class="m_ti">
			充值方式
		</view>
		<label class="selsct_l_sy" v-for="(item, index) in payType">
			<view class="left_s">
				<image :src="'../../static/img/' + item.img" class="pay_img" mode=""></image>
				<view class="info_pay">
					<view class="t">{{ item.name }}</view>
					<view class="i" v-if="item.money">可用余额 : ￥{{ item.money }}元</view>
				</view>
			</view>
			<view><radio :value="item.value" :checked="index === payCurrent" color="#FEC106" style="transform:scale(0.7)" /></view>
		</label>
		<view class="bh160">
			
		</view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo">充值</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moneyList:[
					{num1:100,num2:98},
					{num1:300,num2:295},
					{num1:500,num2:490},
					{num1:1000,num2:970},
					{num1:2000,num2:1930},
					{num1:5000,num2:4800},
				],
				monetSel:0,
				payType: [
					{
						value: 'B1',
						name: '微信支付',
						img: 'weixin.png',
						money: ''
					}
				],
				payCurrent: 0,
			};
		},
		methods:{
			avticeL(item,index){
				this.monetSel = index;
			},
			nativeTo(){
				console.log("充值")
				uni.navigateTo({
					url:"../home/msg?pageType=3"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.add_money{
	background-color: #f0f0f0;
	font-size: 28upx;
	color: #666;
	/* #ifdef MP */
	min-height: 100vh;
	/* #endif */
	/* #ifndef MP */
	min-height: 92vh;
	/* #endif */
	.m_ti{
		font-size: 36upx;
		color: #333;
		padding: 26upx;
		background-color: #fff;
	}
	.mondy_box{
		padding: 0 26upx 40upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #fff;
		.item{
			background-color: #FFF5D6;
			color: #FEC106;
			width: 31%;
			text-align: center;
			padding: 20upx 0 24upx;
			margin-bottom: 20upx;
			border-radius: 10upx;
			&.active{
				color: #fff;
				background-color: #FEC106;
			}
		}
	}
	.selsct_l_sy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16upx 26upx 24upx;
		background-color: #fff;
		.left_s {
			font-size: 36upx;
			display: inline-flex;
			align-items: center;
			.pay_img {
				width: 50upx;
				height: 50upx;
			}
			.info_pay {
				margin-left: 20upx;
				.t {
					font-size: 32upx;
				}
				.i {
					font-size: 28upx;
					color: #999;
				}
			}
		}
	}
	.bg_btn_sub_sy {
		padding: 0 52upx;
		.btn {
			background-color: #fec106;
			color: #fff;
			padding: 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
}
</style>
