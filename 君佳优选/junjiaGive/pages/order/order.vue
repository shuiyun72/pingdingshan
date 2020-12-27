<template>
	<view>
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="home_body">
			<view class="order_item_sy" v-for="orderItem in orderList">
				<view class="o_title">
					<view class="time_l" v-if="orderItem.state == 1">
						待取件
					</view>
					<view class="time_l" v-if="orderItem.state == 2">
						运送中
					</view>
					<view class="time_l" v-if="orderItem.state == 4">
						已取消
					</view>
					<view class="time_l" v-if="orderItem.state == 3">
						已完成
					</view>
					<view class="code_text2" v-if="orderItem.state == 1 || orderItem.state == 2">
						剩余28:26分钟
					</view>
					<view class="code_text2" v-if="orderItem.state == 4">
						用户已取消
					</view>
				</view>
				
				<view class="code_text">
					<view class="name">
						送达时间 :
					</view>
					<view class="text">
						10-21 16:00
					</view>
				</view>
				<view class="code_text">
					<view class="name">
						送达地址 :
					</view>
					<view class="text">
						<view class="">
						郑州高新郑州高新
						</view>
						<view class="iconfont iconzhifeiji"></view>
					</view>
				</view>
				<view class="code_text">
					<view class="name">
						姓名
					</view>
					<view class="text">
						张海洋
					</view>
				</view>
				<view class="code_text">
					<view class="name">
						电话
					</view>
					<view class="text">
						<view class="">
							136333333
						</view>
						<view class="iconfont iconweibiaoti-"></view>
					</view>
				</view>
				<view class="code_text">
					<view class="name">
						备注 :
					</view>
					<view class="text">
						备注备注备注备注备注备注
					</view>
				</view>
				<view class="code_text">
					<view class="name">
						订单编号 :
					</view>
					<view class="text">
						4545454578454544
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
				<view class="code_text" v-if="orderItem.state == 1 || orderItem.state == 3">
					<view class="name">
						取件时间
					</view>
					<view class="text">
						10-21 15:28
					</view>
				</view>
				<view class="code_text" v-if="orderItem.state == 3">
					<view class="name">
						完成时间
					</view>
					<view class="text">
						10-21 15:28
					</view>
				</view>
				<view class="btn_grow" v-if="orderItem.state == 1">
					<view class="btn blue round sm" @click="orderTo('qujian')">
						确认取件
					</view>
					<view class="text_or">
						取件码 : 4032
					</view>
				</view>
				<view class="btn_grow" v-if="orderItem.state == 2">
					<view class="btn blue round sm" @click="orderTo('songda')">
						确认送达
					</view>
					
				</view>
			</view>
		</view>
		<uni-popup ref="orderSongdapop" type="dialog">
		  <view class="order_songda_pop">
		  	<view class="input_box">
		  		<input type="text" placeholder="请输入用户取件码" v-model="orderSongda" class="input"/>
		  	</view>
			<view class="true_btn">
				<view class="quxiao btn" @click="songdaHandle('quxiao')">
					取消
				</view>
				<view class="queren btn" @click="songdaHandle('queren')">
					确认
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
				orderSongda:"",
				tabList: [{
						text: "待取件",
						type: 1
					}, {
						text: "运送中",
						type: 2
					},
					{
						text: "已完成",
						type: 3
					},
					{
						text: "已取消",
						type: 4
					}, {
						text: "全部",
						type: 0
					}
				],
				tabSel: 0,
				orderList: [{
						id: 1,
						time: "10-21 15:48",
						code: "456456456465456465",
						state:1,
						olist: [{
								content: "放松放松范德萨放松放松范德萨放松放松范德萨",
								num: 1,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 2,
								sel: 0
							},
							{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							}
						]
					},
					{
						id: 2,
						time: "10-21 15:48",
						code: "456456456465456465",
						state:2,
						olist: [{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 2,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							}
						]
					},
					{
						id: 2,
						time: "10-21 15:48",
						code: "456456456465456465",
						state:3,
						olist: [{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 2,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							}
						]
					},
					{
						id: 2,
						time: "10-21 15:48",
						code: "456456456465456465",
						state:4,
						olist: [{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 2,
								sel: 1
							},
							{
								content: "放松放松范德萨",
								num: 1,
								sel: 1
							}
						]
					}
				],
			};
		},
		onHide() {
			this.$refs.orderSongdapop.close()
		},
		mounted() {
			// this.$refs.orderSongdapop.open()
		},
		methods: {
			selectTab(el, i) {
				this.tabSel = i;
				// this.getOrder(el.type);
			},
			songdaHandle(el){
				if(el == "quxiao"){
					this.$refs.orderSongdapop.close()
				}
				if(el == "queren"){
					this.$refs.orderSongdapop.close()
					console.log(this.orderSongda)
				}
			},
			search(){
				uni.navigateTo({
					url:"./footSearch"
				})
			},
			orderTo(el){
				if(el == 'qujian'){
					uni.showModal({
					    title: '确认取件',
					    content: '是否确认取件?',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
				if(el=='songda'){
					this.$refs.orderSongdapop.open()
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tab_list_sy {
		display: flex;
		font-size: 32upx;
		justify-content: space-around;
		background-color: #fff;
		border-top: 2upx solid #eee;
		color: #999;

		.item {
			border-bottom: 6upx solid transparent;
			padding: 20upx 0 16upx;

			&.active {
				color: $uni-bl;
				border-bottom: 6upx solid $uni-bl;
			}
		}
	}

	.home_body {
		height: calc(100vh - 320upx);
		overflow-y: auto;
		padding: 20upx 26upx;
		background-color: #f0f0f0;
	}

	.order_item_sy {
		padding: 26upx;
		font-size: 30upx;
		color: #666;
		margin-bottom: 20upx;
		background-color: #fff;
		border-radius: 20upx;

		&.pop {
			width: 640upx;
		}

		.o_title {
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #f0f0f0;
			padding-bottom: 10upx;
			margin-bottom: 10upx;

			.time_l {
				color: #333;
			}
			.code_text1{
				color: #0f0;
			}
			.code_text2{
				color: $uni-or;
			}
		}

		.o_it {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10upx 0;

			.content {
				min-width: 500upx;
			}

			.num {
				width: 60upx;
				text-align: right;
				flex-shrink: 0;
			}

			.iconfont {
				font-size: 42upx;
				width: 50upx;
				flex-shrink: 0;
				margin-left: 20upx;
			}

			.iconyduizhengqueshixin {
				color: #0f0;
			}
		}

		.code_text {
			padding: 10upx 0;
			color: #999;
			display: flex;
			.name{
				width: 200upx;
				flex-shrink: 0;
			}
			.text{
				display: inline-flex;
				align-items: center;
				.iconfont{
					margin-left: 10upx;
					color: $uni-bl;
				}
			}
			// border-bottom: 1upx solid #f0f0f0;
		}

		.btn_grow {
			display: flex;
			justify-content: space-between;
			padding-top: 20upx;
			flex-direction: row-reverse;
			align-items: center;
			.text_or{
				color: $uni-or;
			}
			.btn {
				border: 1upx solid #999;
				background-color: #999;
				color: #fff;

				&.blue {
					background-color: #007AFF;
					border: 1upx solid #007AFF;
				}
			}
		}
	}
	.order_songda_pop{
		background-color: #fff;
		width: 600upx;
		box-sizing: border-box;
		padding: 26upx 26upx 0;
		border-radius: 10upx;
		.input_box{
			padding: 30upx 6upx 50upx;
			.input{
				background-color: #f0f0f0;
				padding: 10upx 0;
				text-align: center;
			}
		}
		.true_btn{
			display: flex;
			border-top: 1upx solid #f0f0f0;
			padding: 10upx 0;
			.btn{
				width: 49%;
				text-align: center;
				padding: 20upx 0;
				
			}
			.queren{
				border-left: 1upx solid #ddd;
				color: $uni-bl;
			}
		}
	}
</style>
