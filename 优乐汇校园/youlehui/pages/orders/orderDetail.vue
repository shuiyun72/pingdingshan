<template>
	<view class="order_detail">
		<view class="o_d_p1">
			<view class="code nover">2349</view>
			<view class="tex">取餐码</view>
		</view>
		<view class="bd22"></view>
		<view class="o_d_p2">
			<view class="p2_t">
				<image src="../../static/img/xdp.png" mode="" class="img"></image>
				<view class="t">启达西饼蛋糕店</view>
			</view>
			<view class="p2_x">
				<text class="iconfont icondianhua"></text>
				13633356356
			</view>
			<view class="p2_x">
				<text class="iconfont iconlocation"></text>
				6号楼蓝餐厅楼蓝餐厅楼蓝餐厅楼
			</view>
		</view>
		<view class="bd22"></view>
		<view class="o_d_p3">
			<view class="code_n">订单编号 : 1911523154514254</view>
			<view class="child_item">
				<view class="item" v-for="(item, index) in currentItem.rightFoodsList">
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
				<view class="l"></view>
				<view class="r">
					共2份 需付 :
					<text class="money">50.0元</text>
				</view>
			</view>
		</view>
		<view class="bd22"></view>
		
		<!-- 订单明细 -->
		<view class="o_d_t">订单明细</view>
		<view class="o_d_t2">
			<view class="name">订单总价:</view>
			<view class="v">50元</view>
		</view>
		<view class="o_d_t2">
			<view class="name">数量:</view>
			<view class="v">2个</view>
		</view>
		<view class="o_d_t2">
			<view class="name">实付金额:</view>
			<view class="v">50元</view>
		</view>
		<view class="bd22"></view>
		
		<!-- 订单信息 -->
		<view class="o_d_t">订单信息</view>
		<view class="o_d_t2">
			<view class="name">订单编号:</view>
			<view class="v">1231454651452145245</view>
		</view>
		<view class="o_d_t2">
			<view class="name">下单时间:</view>
			<view class="v">2019-12-02 14:30</view>
		</view>
		<view class="o_d_t2">
			<view class="name">取餐时间:</view>
			<view class="v">16:30</view>
		</view>
		<view class="o_d_t2">
			<view class="name">就餐方式:</view>
			<view class="v">到店就餐</view>
		</view>
		<!-- <view class="o_d_t2">
			<view class="name">地址:</view>
			<view class="v">8号楼宿舍宿舍宿舍</view>
		</view> -->
		<view class="o_d_t2">
			<view class="name">支付方式:</view>
			<view class="v">微信支付</view>
		</view>
		<view class="o_d_t2">
			<view class="name">备注:</view>
			<view class="v">备注备注备注备注备注备注备注</view>
		</view>
		<view class="o_d_t2">
			<view class="name">联系方式:</view>
			<view class="v">13566635365</view>
		</view>
		<view class="bd160"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentItem: ''
		};
	},
	onLoad(ph) {
		this.currentItem = JSON.parse(ph.item);
		console.log(this.currentItem);
		if (this.currentItem.state == 1) {
			uni.setNavigationBarTitle({
				title: '待取餐订单详情'
			});
		} else if (this.currentItem.state == 2) {
			uni.setNavigationBarTitle({
				title: '已取餐订单详情'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.order_detail {
	font-size: 28upx;
	color: #666;
	.get_foods {
		display: flex;
		justify-content: space-between;
		.l {
			color: #999;
		}
		.r {
			color: #f2203f;
			.money {
				font-size: 32upx;
				margin-left: 20upx;
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
						color: #f2203f;
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
	.o_d_p1 {
		text-align: center;
		padding: 40upx 0 70upx;
		.code {
			&.nover{
				color: #f00;
			}
			color: #999;
			font-size: 38upx;
			font-weight: bold;
			margin-bottom: 6upx;
		}
		.tex {
			color: #999;
		}
	}
	.o_d_p2 {
		padding: 30upx 26upx 60upx;
		.p2_t {
			display: flex;
			align-items: center;
			padding-bottom: 10upx;
			color: #333;
			.img {
				width: 30upx;
				height: 30upx;
				margin-right: 20upx;
			}
		}
		.p2_x {
			padding-top: 16upx;
			color: #999;
			.iconfont {
				font-size: 36upx;
				margin-right: 20upx;
			}
		}
	}
	.o_d_p3 {
		padding: 26upx;
		.code_n {
			padding-bottom: 26upx;
			font-weight: bold;
		}
	}
	.o_d_t{
		font-weight: bold;
		font-size: 34upx;
		padding: 26upx 26upx 16upx;
	}
	.o_d_t2{
		padding:22upx 26upx;
		display: flex;
		.name{
			width: 180upx;
			color: #999;
		}
	}
}
</style>
