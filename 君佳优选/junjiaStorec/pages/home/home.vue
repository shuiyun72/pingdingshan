<template>
	<view class="home">
		<view class="guodu_header" :style="{'padding-top':SystemInfoL.menu.top+'px'}">
			<view class="h_set">
				<view class="tit">
					待配货
				</view>
				<view class="right">
					<image src="../../static/img/xiaox.png" class="xiaoxi" mode="" @click="toNav('xiaoxi')"></image>
					<view class="iconfont iconshezhi" @click="toNav('set')">

					</view>
				</view>
			</view>
		</view>
		<view class="home_body">
			<view class="order_item_sy" v-for="orderItem in orderList">
				<view class="o_title">
					<view class="time_or">
						剩余08:15分钟
					</view>
					<view class="last_time">
						最晚完成时间{{orderItem.time}}
					</view>
				</view>
				<view class="o_it" v-for="item in orderItem.olist">
					<view class="content">
						{{item.content}}
					</view>
					<view class="num">
						x{{item.num}}
					</view>
				</view>
				<view class="code_text">
					订单编号 : {{orderItem.code}}
				</view>
				<view class="btn_grow">
					<view class="btn blue round sm" @click="dayin(orderItem)">
						确认配送
					</view>
				</view>
			</view>
		</view>
		<uni-popup type="center" ref="peisongPop">
			<view class="order_item_sy pop">
				<view class="o_title">
					<view class="time_or">
						正在配货
					</view>
					<view class="last_time">
						剩余08:15分钟
					</view>
				</view>
				<view class="o_it" v-for="(item,index) in orderItemSel.olist" @click.stop="selItem(item,index)">
					<view class="content">
						{{item.content}}
					</view>
					<view class="num">
						x{{item.num}}
					</view>
					<view class="iconfont" :class="item.sel == 1?'iconyduizhengqueshixin':'iconyk_yuanquan'">
						
					</view>
				</view>
				<view class="code_text">
					订单编号 : {{orderItemSel.code}}
				</view>
				<view class="btn_grow">
					<view class="btn round sm" :class="canDatin?'blue':''" @click="dayinTrue">
						完成打印
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[
					{
						id:1,
						time:"10-21 15:48",
						code:"456456456465456465",
						olist:[
							{
								content:"放松放松范德萨放松放松范德萨放松放松范德萨",
								num:1,
								sel:1
							},
							{
								content:"放松放松范德萨",
								num:2,
								sel:0
							},
							{
								content:"放松放松范德萨",
								num:1,
								sel:1
							}
						]
					},
					{
						id:2,
						time:"10-21 15:48",
						code:"456456456465456465",
						olist:[
							{
								content:"放松放松范德萨",
								num:1,
								sel:1
							},
							{
								content:"放松放松范德萨",
								num:2,
								sel:1
							},
							{
								content:"放松放松范德萨",
								num:1,
								sel:1
							}
						]
					}
				],
				orderItemSel:""
			}
		},
		computed: {
			canDatin(){
				if(this.orderItemSel != ""){
					let pd = _.filter(this.orderItemSel.olist,item=>{
						return item.sel == 0
					})
					if(pd.length > 0){
						return false
					}else{
						return true
					}
				}else{
					return false
				}
			},
			SystemInfoL() {
				// #ifdef MP
				return JSON.parse(this.SystemInfo)
				// #endif
				// #ifndef MP
				return {
					'barHeight': 64,
					'menu': {
						'bottom': 58,
						'height': 32,
						'left': 263,
						'right': 350,
						'top': 26,
						'width': 87
					},
					'statusBarHeight': 20
				}
				// #endif

			}
		},
		onHide() {
			this.$refs.peisongPop.close();
		},
		methods: {
			dayin(item){
				this.orderItemSel  = item;
				this.$refs.peisongPop.open();
			},
			selItem(item,index){
				console.log(item,index,this.orderItemSel)
				if(item.sel == 1){
					this.$set(this.orderItemSel.olist[index],"sel",0)
				}else{
					this.$set(this.orderItemSel.olist[index],"sel",1)
				}
			},
			dayinTrue(){
				if(this.canDatin){
					this.$refs.peisongPop.close();
					this.$msg('完成打印')
				}else{
					this.$msg('请选择全部商品')
				}
			},
			toNav(el){
				if(el == 'xiaoxi'){
					uni.navigateTo({
						url:"../msg/msg"
					})
				}
				if(el == 'set'){
					uni.navigateTo({
						url:"../set/set"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		position: relative;
		background-color: #f0f0f0;
		height: 100vh;
		.home_body {
			position:absolute;
			width: 690upx;
			top: 160upx;
			
			
			left: 50%;
			margin-left: -345upx;

			height: calc( 100vh - 280upx );
			overflow-y: auto;
			
		}
		.order_item_sy{
			padding: 26upx;
			font-size: 30upx;
			color: #666;
			margin-bottom: 20upx;
			background-color: #fff;
			border-radius: 20upx;
			&.pop{
				width: 640upx;
			}
			.o_title{
				display: flex;
				justify-content: space-between;
				border-bottom: 1upx solid #f0f0f0;
				padding-bottom: 10upx;
				margin-bottom: 10upx;
				.time_or{
					color: $uni-or;
				}
			}
			.o_it{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 0;
				.content{
					min-width: 500upx;
				}
				.num{
					width: 60upx;
					text-align: right;
					flex-shrink: 0;
				}
				.iconfont{
					font-size: 42upx;
					width: 50upx;
					flex-shrink: 0;
					margin-left: 20upx;
				}
				.iconyduizhengqueshixin{
					color: #0f0;
				}
			}
			.code_text{
				padding: 20upx 0;
				color: #999;
				border-bottom: 1upx solid #f0f0f0;
			}
			.btn_grow{
				display: flex;
				justify-content: flex-end;
				padding-top: 20upx;
				.btn{
					border: 1upx solid #999;
					background-color: #999;
					color: #fff;
					&.blue{
						background-color: #007AFF;
						border: 1upx solid #007AFF;
					}
				}
			}
		}
		.guodu_header {
			background-color: $uni-bl;
			border-radius: 0 0 10% 10%;
			height: 26vh;
			box-sizing: border-box;

			.h_set {
				display: flex;
				padding: 20upx 26upx;
				color: #fff;
				justify-content: space-between;
				align-items: center;

				.tit {
					font-size: 40upx;
				}

				.right {
					display: inline-flex;
					align-items: center;

					.xiaoxi {
						width: 60upx;
						height: 60upx;
					}

					.iconshezhi {
						font-size: 50upx;
						margin-left: 50upx;
					}
				}
			}
		}
	}
</style>
