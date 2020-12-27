<template>
	<view class="withdraw_money">
		<view class="withd_item">
			<view class="l">
				提现金额
			</view>
			<view class="c">
				<input type="text" v-model="money" class="input"/>
			</view>
			<view class="rl">
				元
			</view>
		</view>
		<view class="bd26"></view>
		<view class="withd_item">
			<view class="l">
				姓名
			</view>
			<view class="r">
				<input type="text" v-model="name" class="input" placeholder="请填写您的真实姓名"/>
			</view>
		</view>
		<view class="withd_item">
			<view class="l">
				账号
			</view>
			<view class="r">
				<input type="text" v-model="num" class="input" placeholder="请填写银行卡账号"/>
			</view>
		</view>
		<view class="withd_item">
			<view class="l">
				开户行
			</view>
			<view class="r">
				<input type="text" v-model="fromL" class="input" placeholder="请填写开户行"/>
			</view>
		</view>
		<view class="save">
			<view class="btn"  @click="save">
				保存信息
			</view>
		</view>
		<view class="sm_text">
			<view class="t">
				提现说明
			</view>
			<view class="t">
				工作日1~3天内处理提现申请 , 提现金额必须500元起 , 申请后将转您的账户 .
			</view>
			<view class="bd26"></view>
			<view class="t">
				注意事项
			</view>
			<view class="t">
				由于转账信息过多 , 转账时间会有所延迟 , 请填写好您的信息 , 以便于我们及时转账 , 如有疑问可致电咨询400 - 6000554
			</view>
		</view>
		<view class="bh160"> </view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="next">确定</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:2800,
				name:"",
				num:"",
				fromL:""
			};
		},
		methods:{
			save(){
				
			},
			next(){
				uni.navigateTo({
					url:'./msg'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
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
.withdraw_money{
	background-color: #f0f0f0;
	font-size: 28upx;
	color: #333;
	height: 100vh;
	.bd26{
		height: 26upx;
		background-color: #f0f0f0;
	}
	.save{
		text-align: right;
		padding: 26upx;
		.btn{
			display: inline-block;
			background-color: #FF3152;
			color: #fff;
			border-radius: 60upx;
			padding: 10upx 30upx;
		}
	}
	.sm_text{
		padding: 26upx;
		.t{
			color: #666;
			margin-bottom: 6upx;
		}
	}
	.withd_item{
		background-color: #fff;
		display: flex;
		padding: 26upx 26upx;
		&+.withd_item{
			border-top: 1upx solid #f0f0f0;
		}
		.c{
			flex:1;
		}
		.r{
			flex:1;
		}
		.input{
			font-size: 28upx;
			text-align: right;
			padding-right: 6upx;
		}
	}
}
</style>
