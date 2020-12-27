<template>
	<view class="all_order">
		<view class="all_top1">
			<view class="search_input_sy" @click="handleSearch">
				<view class="iconfont iconsousuo1"></view>
				<view class="text">请输入商品名称</view>
			</view>
		</view>
		<view class="all_order_body">
			<view class="item_box" v-for="parent in shopList">
				<view class="i1">
					订单编号 : 15564545314232545
				</view>
				<view class="item" v-for="item in parent.children">
					<image src="../../static/img/ddt1.png" class="i_img" mode=""></image>
					<view class="info">
						<view class="p1">
							单人单人单人单人单人单人
						</view>
						<view class="p2">
							<view class="money_c">
								￥ {{item.num}}.0
							</view>
							<view class="">
								x 1
							</view>
						</view>
					</view>
				</view>
				<view class="i2">
					<view class="">
						手机号:13633333333
					</view>
					<view class="">
						共2份 实付 : <text class="big">50.0 元</text>
					</view>
				</view>
				<view class="i3">
					<text class="m">取餐时间 :</text>  16:00
				</view>
				<view class="i3">
					<text class="m">取件方式 :</text>  到店自提
				</view>
				<view class="i3">
					<text class="m">取件码 :</text>2349
				</view>
				<view class="i3">
					<text class="m">备注 :</text> 请尽快做好
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopList:[
					{
						children:[{num:25},{num:20}]
					},
					{
						children:[{num:20}]
					},
					{
						children:[{num:25},{num:20}]
					}
				]
			};
		}
	}
</script>

<style lang="less">
	.all_order {
		font-size: 28upx;
		color: #666;
		background-color: #f0f0f0;
		.all_top1 {
			padding: 26upx;
			position: fixed;
			width: 100vw;
			box-sizing: border-box;
			background-color: #fff;
			z-index:2;
			.search_input_sy {
				background-color: #f0f0f0;
				display: flex;
				font-size: 28upx;
				padding: 12upx 30upx;
				border-radius: 60upx;
				align-items: center;

				.iconsousuo1 {
					font-size: 30upx;
					margin-right: 20upx;
				}
			}
		}
		.all_order_body{
			padding:140upx 26upx 26upx;
			.item_box{
				background-color: #fff;
				padding: 26upx;
				margin-bottom: 26upx;
				border-radius: 16upx;
				.i1{
					margin-bottom: 20upx;
					color: #333;
					font-size: 34upx;
				}
				.i2{
					display: flex;
					justify-content: space-between;
					margin-bottom: 20upx;
					.big{
						font-size: 32upx;
						margin-left: 10upx;
					}
				}
				.i3{
					line-height: 46upx;
					color: #333;
					.m{
						color: #999;
						margin-right: 20upx;
						width: 140upx;
						display: inline-block;
					}
				}
				.item{
					display: flex;
					margin-bottom: 20upx;
					.i_img{
						width: 200upx;
						height: 200upx;
					}
					.info{
						display: inline-flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 20upx;
						flex:1;
						padding: 10upx 0;
						.p2{
							display: inline-flex;
							justify-content: space-between;
						}
					}
				}
			}
		}
	}
</style>
