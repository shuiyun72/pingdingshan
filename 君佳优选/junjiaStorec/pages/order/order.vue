<template>
	<view>
		<uni-nav-bar color="#333333" background-color="#ffffff" :status-bar="true"  title="发货管理" right-icon="search"
		 @clickRight="search" />
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="home_body">
			<view class="order_item_sy" v-for="orderItem in orderList">
				<view class="o_title">
					<view class="time_l">
						已配货
					</view>
					<view class="code_text1" v-if="orderItem.state == 1">
						取货码: 4032
					</view>
					<view class="code_text2" v-if="orderItem.state == 3">
						用户取消
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
				<view class="code_text">
					配货完成时间 : {{orderItem.code}}
				</view>
				<view class="code_text">
					配货员 : {{orderItem.code}}
				</view>
				<view class="code_text">
					取件码 : {{orderItem.code}}
				</view>
				<view class="">
					<view class="code_text">
						送货员 : {{orderItem.code}}
					</view>
					<view class="code_text">
						取件时间 : {{orderItem.code}}
					</view>
				</view>
				
				<!-- <view class="btn_grow">
					<view class="btn blue round sm" @click="dayin(orderItem)">
						确认配送
					</view>
				</view> -->
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
						text: "已配货",
						type: 1
					}, {
						text: "已取走",
						type: 2
					},
					{
						text: "已取消",
						type: 3
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
						state:1,
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
		methods: {
			selectTab(el, i) {
				this.tabSel = i;
				// this.getOrder(el.type);
			},
			search(){
				uni.navigateTo({
					url:"./footSearch"
				})
			}
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
			// border-bottom: 1upx solid #f0f0f0;
		}

		.btn_grow {
			display: flex;
			justify-content: flex-end;
			padding-top: 20upx;

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
</style>
