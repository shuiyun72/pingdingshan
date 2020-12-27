<template>
	<view class="orders">
		<view class="tab_list_sy">
			<view class="item" v-for="(item, index) in tabList" :class="{ active: index == tabSel }" @click="selectTab(item, index)">{{ item.text }}</view>
		</view>
		<view class="orders_body">
			<view class="parent_item" v-for="parent in allList" @click.stop="toDetail(parent)">
				<view class="par_title">
					<view class="l">启达西饼蛋糕店</view>
					<view class="code">取餐码 : 2349</view>
				</view>
				<view class="child_item" >
					<view class="item" v-for="(item, index) in parent.rightFoodsList">
						<image src="../../static/img/home/tu5.png" class="food_img" mode=""></image>
						<view class="foods_right">
							<view class="f_title">单人蛋糕单人蛋糕单人蛋糕</view>
							<view class="over_num">{{ item.kg }}</view>
							<view class="f_money_sy">
								<view class="">￥{{ item.price }}.0</view>
								<view class="num_add">
									<view class="n" v-if="item.num > 0">x{{ item.num }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="get_foods">
					<view class="l">
						取餐时间 : 16:30
					</view>
					<view class="r">
						共2份 需付 :<text class="money">50.0元</text>
					</view>
				</view>
				<view class="order_btn" >
					<view class="btn" v-if="parent.state == 1" @click.stop="btnFor(1)"> 确认取餐 </view>
					<view class="btn"  v-if="parent.state == 2" @click.stop="btnFor(2)"> 去评价 </view>
				</view>
			</view>
		</view>
		<!-- <uni-popup type="center" ref="orderPopup1">
			
		</uni-popup> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			allList:[
				{
					state:1,
					rightFoodsList: [
						{
							price: 25,
							num: 1,
							kg: '微甜',
							wd: true
						},
						{
							price: 25,
							kg: '',
							num: 1,
							wd: false
						}
					]
				},
				{
					state:1,
					rightFoodsList: [
						{
							price: 25,
							num: 1,
							kg: '微甜',
							wd: true
						}
					]
				},
				{
					state:2,
					rightFoodsList: [
						{
							price: 25,
							kg: '',
							num: 1,
							wd: false
						}
					]
				}
			],
			
			tabSel: 0,
			tabList: [
				{
					text: '全部',
					type: 0
				},
				{
					text: '待取餐',
					type: 1
				},
				{
					text: '已取餐',
					type: 2
				}
			]
		};
	},
	onLoad(ph) {
		console.log(ph);
	},
	methods: {
		selectTab(el, i) {
			this.tabSel = i;
		},
		toDetail(pItem){
			uni.navigateTo({
				url:'./orderDetail?item='+JSON.stringify(pItem)
			})
		},
		btnFor(el){
			if(el == 1 ){
				uni.showModal({
				    title: '确定取餐',
				    content: '是否确认取餐?',
					confirmColor:"#FEC106",
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}else
			if(el == 2 ){
				console.log("评价")
				uni.navigateTo({
					url:'../home/appraise'
				})
			}
		}
	},
	onShow() {
		let pageTitle = uni.getStorageSync('pageTitle');
		let tabSel = uni.getStorageSync('tabSel');
		console.log(pageTitle);
		if (pageTitle == '蓝楼') {
			uni.removeStorageSync('pageTitle');
			uni.navigateTo({
				url: '../shopDetail/shopDetail'
			});
		}else{
			
		}
		if(tabSel){
			this.tabSel = tabSel;
			uni.setStorageSync('tabSel',"");
		}
	}
};
</script>

<style lang="less" scoped>
.orders {
	font-size: 28upx;
	color: #666;

	.orders_body {
		background-color: #f0f0f0;
		padding: 26upx;
		height: calc( 100vh - 360upx);
		overflow-y: auto;
		.parent_item {
			background-color: #fff;
			padding: 26upx;
			border-radius: 8upx;
			margin-bottom: 26upx;
			.par_title{
				display: flex;
				font-size: 32upx;
				justify-content: space-between;
				padding-bottom: 18upx;
				margin-bottom: 18upx;
				border-bottom: 1upx solid #eee;
				.code{
					color: #F2203F;
				}
			}
			.get_foods{
				display: flex;
				justify-content: space-between;
				.l{
					color: #999;
				}
				.r{
					color: #F2203F;
					.money{
						font-size: 32upx;
						margin-left: 20upx;
					}
				}
			}
			.order_btn{
				display: flex;
				justify-content: flex-end;
				margin-top: 16upx;
				padding-top: 20upx;
				border-top: 1upx solid #eee;
				.btn{
					background-color: #FEC106;
					padding: 18upx 36upx;
					color: #fff;
					border-radius: 40upx;
					font-size: 28upx;
					
				}
			}
		}
	}
	.child_item {
		// height: calc( 100vh - 550upx );
		// overflow-y: auto;
		.item {
			display: flex;
			margin-bottom: 40upx;
			.food_img {
				width: 160upx;
				height: 160upx;
			}
			.foods_right {
				margin-left: 20upx;
				display: inline-flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				.f_title {
					font-size: 34upx;
					font-weight: bold;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 400upx;
				}
				.over_num {
					color: #999;
				}
				.f_money_sy {
					display: inline-flex;
					justify-content: space-between;
					align-items: baseline;
					.red {
						color: #F2203F;
					}
					.num_add {
						display: inline-flex;
						.n {
							width: 50upx;
							text-align: center;
						}
					}
				}
			}
		}
	}
	.tab_list_sy {
		display: flex;
		font-size: 36upx;
		justify-content: space-around;
		background-color: #fff;
		border-top: 2upx solid #eee;

		.item {
			border-bottom: 6upx solid transparent;
			padding: 20upx 0 16upx;

			&.active {
				color: #fec106;
				border-bottom: 6upx solid #fec106;
			}
		}
	}
}
</style>
