<template>
	<view class="order_true">
		<uni-list>
			<sy-list-item title="请选择地址" note="" @click="selItem('dizhi')" thumb="../../static/img/icon-dingddz.png"></sy-list-item>
			<sy-list-item title="送达时间" note="" @click="selItem('time')">
				<template v-slot:right="">
					<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
						<view class="peisong_timje">{{timeText}}</view>
					</picker>
				</template>
			</sy-list-item>
		</uni-list>
		<view class="h20"></view>
		<view class="order_msg">
			<view class="title">
				<view class="left">
					商品
				</view>
				<view class="num">
					4件
				</view>
			</view>
			<view class="i_item" v-for="i in 4">
				<view class="left">
					<image src="../../static/img/order/dingd4.png" class="img_m" mode=""></image>
					<view class="info_cc">
						<view class="in1 shengluehao">
							地瓜才450g地瓜才450g
						</view>
						<view class="in2">
							x <text>7.9</text> 
						</view>
					</view>
				</view>
				<view class="right">
					x1
				</view>
			</view>
			<view class="last_calc">
				共4件商品 小计￥:<text class="num">23.88</text>
			</view>
		</view>
		<view class="h20"></view>
		<uni-list>
			<sy-list-item title="优惠券" note="" @click="selItem('youhuiquan')">
				<template v-slot:right="">
					<view class="list_youhuiquan">
						请选择优惠券
					</view>
				</template>
			</sy-list-item>
			<sy-list-item title="备注" note="" @click="selItem('beizhu')" :showArrow="false">
				<template v-slot:right="">
				
						<input type="text" class="beizhu_input_text" v-model="beizhuC" placeholder="请填写备注"/>
					
				</template>
			</sy-list-item>
		</uni-list>
		<view class="h20">
			
		</view>
		<view class="">
			<uni-list>
				<sy-list-item title="支付方式" :showArrow="false"></sy-list-item>
			</uni-list>
			<radio-group class="block" @change="RadioChange">
				<label class="cu-form-group">
					<view class="item">
						<image style="width: 44rpx;height: 44rpx;" src="../../static/img/weixin.png" mode=""></image><text class="margin-left-xs">微信支付</text>
					</view>
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A" class="radio" :color="'#18B357'"></radio>
				</label>
				<label class="cu-form-group">
					<view class="item">
						<image style="width: 44rpx;height: 44rpx;" src="../../static/img/zhifb.png" mode=""></image><text class="margin-left-xs">支付宝支付</text>
					</view>
					<view>
						<radio :class="radio=='B'?'checked':''" :checked="radio=='C'?true:false" value="B" class="radio" :color="'#18B357'"></radio>
					</view>
				</label>
		
			</radio-group>
			<view class="dikou" @click="isDikouC">
				<view class="iconfont " :class="isDikou?'iconyduizhengqueshixin':'iconyk_yuanquan'" ></view>
				<view class="">
					使用金币抵扣
				</view>
			</view>
		</view>
		
		<view class="h20"></view>
		<uni-list>
			<uni-list-item title="总价" note="" :rightText="'￥'+money" :showArrow="false"></uni-list-item>
			<uni-list-item title="配送费" note="" :rightText="'￥'+peisongM" :showArrow="false"></uni-list-item>
			<uni-list-item title="合计" note="" :rightText="'￥'+allMoney" :showArrow="false"></uni-list-item>
		</uni-list>
		<view class="h20"></view>
		<view class="tishi">
			订单满28元免配送费
		</view>
		<view class="h120">
			
		</view>
		<view class="bottom_btn_zu_sy">
			<view class="btn1">
				<view>合计 :</view>
				<view class="red">
					￥<text class="big">23.88</text>
				</view>
			</view>
			<view class="btn_b bl" @click="toNav('pay')">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				beizhuC:"",
				radio: "A",
				money:23.88,
				peisongM:0,
				allMoney:23.88,
				isDikou:true,
				multiArray: [
					[],
					[]
				],
				multiIndex: [0,0],
				timeText:""
			};
		},
		computed:{
			
		},
		mounted() {
			let newD = new Date();
			let toData =  newD.setTime(newD.getTime()+24*60*60*1000);
			let newTime ="今天-"+this.$getDate("","月-号");
			let tomorrowTime ="明天-"+ this.$getDate(toData,"月-号")
			this.multiArray = [[newTime,tomorrowTime],["尽快送达","13:30-14:00","14:00-14:30"]]
			this.timeTextM();
		},
		methods:{
			timeTextM(){
				console.log(this.multiIndex,"ccc")
				if(this.multiArray[1][this.multiIndex[1]] == '尽快送达'){
					this.timeText =  "尽快送达 预计14:58送达"
				}else{
					this.timeText = this.multiArray[0][this.multiIndex[0]]+" "+this.multiArray[1][this.multiIndex[1]]
				}
			},
			isDikouC(){	
				if(this.isDikou){
					this.isDikou = false
				}else{
					this.isDikou = true
				}
			},
			selItem(el){
				// 'dizhi'
				console.log(el)
				if(el == 'dizhi'){
					uni.navigateTo({
						url:"../mine/address?title=地址选择"
					})
				}
				if(el == 'time'){
					// this.$refs.songTime.open()
				}
			},
			RadioChange(el){
				console.log(el)
			},
			toNav(el){
				if(el == 'pay'){
					uni.navigateTo({
						url:"./orderPay?title=购买成功"
					})
				}
			},
			bindMultiPickerColumnChange: function(el) {
				console.log(el)
				let newD = new Date();
				let toData =  newD.setTime(newD.getTime()+24*60*60*1000);
				let newTime ="今天-"+this.$getDate("","月-号");
				let tomorrowTime ="明天-"+ this.$getDate(toData,"月-号")
				
				if(el.detail.column == 0 ){
					this.multiIndex[0] = el.detail.value
					if(el.detail.value == 0){
						this.multiArray = [[newTime,tomorrowTime],["尽快送达","13:30-14:00","14:00-14:30"]]
					}else
					if(el.detail.value == 1){
						this.multiArray = [[newTime,tomorrowTime],["13:30-14:00","14:00-14:30"]]
					}
				}else
				if(el.detail.column == 1 ){
					console.log("cccccccccccccc")
					this.multiIndex[1] = el.detail.value;
					console.log(this.multiIndex)
					this.timeTextM()
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.order_true{
	.h120{
		height: 120upx;
		background-color: #f0f0f0;
	}
	.bottom_btn_zu_sy{
		display: flex;
		position:fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		align-items: center;
		.btn1{
			flex:1;
			display: inline-flex;
			padding-left: 26upx;
			align-items: center;
			color: #666;
			.big{
				font-size: 36upx;
			}
		}
		.btn_b{
			width: 230upx;
			color: #fff;
			text-align: center;
			font-size: 34upx;
			padding: 30upx 0;
			&.or{
				background-color: $uni-or;
			}
			&.bl{
				background-color: $uni-bl;
			}
		}
	}
	.peisong_timje{
		background-color: $uni-bl;
		color: #fff;
		padding: 0 20upx 3upx;
		border-radius: 20upx;
	}
	.dikou{
		display: flex;
		color: #666;
		background-color: #f0f0f0;
		padding: 10upx 26upx;
		.iconyduizhengqueshixin{
			color: $uni-bl;
			margin-right: 10upx;
		}
		.iconyk_yuanquan{
			color: #666;
			margin-right: 10upx;
		}
	}
	.list_youhuiquan{
		color: #666;
		font-size: 30upx;
	}
	.beizhu_input_text{
		text-align: right;
	}
	.tishi{
		background-color: $uni-or;
		padding: 10upx 26upx;
		color: #fff;
	}
	.order_msg{
		background-color: #fff;
		margin-top: 20upx;
		padding: 20upx 26upx;
		.last_calc{
			text-align: right;
			color: #666;
			.num{
				font-size: 32upx;
			}
		}
		.title{
			display: flex;
			justify-content: space-between;
			font-size: 32upx;
			color: #333;
			margin-bottom: 10upx;
		}
		.i_item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #666;
			padding: 20upx 0;
			.left{
				display: inline-flex;
				align-items: center;
				.img_m{
					width: 90upx;
					height: 90upx;
				}
				.info_cc{
					margin-left: 20upx;
					display: inline-flex;
					flex-direction: column;
					justify-content: space-between;
					.in1{
						width: 540upx;
						margin-bottom: 10upx;
					}
				}
			}
		}
	}
	.cu-form-group {
		display: flex;
		justify-content: space-between;
		padding: 16upx 26upx;
		background-color: #fff;
		border-top: 1upx solid #f0f0f0;
	
		.item {
			display: inline-flex;
			align-items: center;
	
			.margin-left-xs {
				margin-left: 10upx;
				font-size: 28upx;
				color: #666;
			}
		}
	
		.radio {
			transform: scale(.8);
		}
	}
}
</style>
