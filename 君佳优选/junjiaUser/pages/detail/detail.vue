<template>
	<view class="detail">
		<view class="swiper_box">
			<swiper :autoplay="false" :interval="3000" :duration="1000" class="h_lunbo" @change="detailSw">
				<swiper-item v-for="item in itemFoot.imgs">
					<view class="swiper-item">
						<image src="../../static/img/car/gouwc2.png" mode="" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="show_bi_num">
				<view class="cbc">
					{{imgsIndex+1}}/{{itemFoot.imgs.length}}
				</view>
			</view>
		</view>
		<view class="detail_info">
			<view class="money_num">
				<view class="left">
					<view class="red">
						<text>￥</text>
						<text class="m_n">4.8</text>
					</view>
					<view class="old_m">
						￥6.9
					</view>
					<view class="all_num">
						剩余398件
					</view>
				</view>
				<view class="right">
					<image src="../../static/img/liucheng/sp-fenx.png" mode="" class="liucheng_img"></image><text>推荐给好友</text>
				</view>
			</view>
			<view class="t_title">
				南非进口夏橙390-440g/份
			</view>
		</view>
		<view class="bgf20"></view>
		<uni-list>
			<uni-list-item title="商品评价(88)" note="" rightText="查看全部" @click="showAllRate"></uni-list-item>
		</uni-list>
		<view class="pingjia_box_sy">
			<view class="pingjia_user">
				<view class="left">
					<image src="../../static/img/liucheng/sp-pjtx.png" class="img" mode=""></image>
					<view class="name shengluehao">
						dsadsadd
					</view>
				</view>
				<view class="time">
					2020-08-01
				</view>
			</view>
			<view class="rate_pj">
				<uni-rate color="#bbb" active-color="#F59005" :readonly="true" :size="18" v-model="value" ></uni-rate>
			</view>
			
			<view class="wa_text">
				橘子很甜,很好吃
			</view>
			<swiper :interval="3000" :duration="1000" class="pingjia_img_box" display-multiple-items=3>
				<swiper-item v-for="item in itemFoot.pingjiaImg" >
					<view class="img_item" :style="'background-image: url(../../static/img/liucheng/'+item.img+')'"></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bgf20"></view>
		<!-- 本周上新 -->
		<view class="weke_new">
			<view class="weke_new_header_sy  m26">
				<view class="left">
					<image src="../../static/img/home/icon-bzsx.png" mode="" class="t_img"></image>
					<view class="title1">
						一起买
					</view>
					<view class="title2">
						更多精品好物一起购买吧
					</view>
				</view>
				<view class="right">
					<!-- <view class="">
						更多
					</view>
					<view class="iconfont iconjiantou"></view> -->
				</view>
			</view>
			<sy-scroll-x class="p26">
				<view class="weke_box_item" v-for="item in 10" @click="itemClick(item)">
					<image src="../../static/img/car/gouwc1.png" class="t_img" mode=""></image>
					<view class="title1 shengluehao">
						陆地枸杞9打开拉肚肚
					</view>
					<view class="zhuijia">
						<view class="money red">
							￥<text class="m">12.8</text>
						</view>
						<view class="iconfont iconjia1"></view>
					</view>
					
				</view>
		
			</sy-scroll-x>
		</view>
		<view class="xingqing_title">
			<view class="v"></view>
			<view class="t">
				商品详情
			</view>
			<view class="v"></view>
		</view>
		<view class="img_bg_box">
			<view class="img_c" v-for="item in itemFoot.imgs2">
				<image :src="'../../static/img/liucheng/'+item.img" class="img" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import _ from "../../until/lodash";
	export default {
		data() {
			return {
				value:5,
				itemId: 0,
				itemFoot: {
					imgs: [{
						img: "gouwc2.png"
					}, {
						img: "gouwc2.png"
					}, {
						img: "gouwc2.png"
					}, {
						img: "gouwc2.png"
					}, {
						img: "gouwc2.png"
					}, {
						img: "gouwc2.png"
					}],
					imgs2: [{
						img: "sp-czxq1.png"
					}, {
						img: "sp-czxq2.png"
					}, {
						img: "sp-czxq3.png"
					}, {
						img: "sp-czxq4.png"
					}, {
						img: "sp-czxq5.png"
					}, {
						img: "sp-czxq6.png"
					}, {
						img: "sp-czxq7.png"
					}, {
						img: "sp-czxq8.png"
					}, {
						img: "sp-czxq9.png"
					}, {
						img: "sp-czxq10.png"
					}],
					pingjiaImg:[{
						img: "img-pingj1.png"
					}, {
						img: "img-pingj2.png"
					}, {
						img: "img-pingj3.png"
					}]
				},
				imgsIndex: 0
			};
		},
		onLoad(ph) {
			this.itemId = ph.itemId;
		},
		methods: {
			detailSw(el) {
				this.imgsIndex = el.detail.current;
			},
			showAllRate(){
				console.log("dsd")
				uni.navigateTo({
					url:"./allRate"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pingjia_box_sy{
		padding: 0 26upx;
		.pingjia_user{
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #666;
			padding-right: 20upx;
			.left{
				display: inline-flex;
				align-items: center;
				
				.img{
					width: 80upx;
					height: 80upx;
				}
				.name{
					font-size: 30upx;
					margin-left: 20upx;
					max-width: 420upx;
				}
			}
		}
		.rate_pj{
			padding: 30upx 0 30upx;
		}
		.wa_text{
			font-size: 30upx;
			color: #666;
			padding-bottom: 20upx;
		}
		.pingjia_img_box{
			// padding: 0 26upx;
			height: 230upx;
			padding-bottom: 30upx;
			.img_item{
				width: 226upx;
				height: 226upx;
				background: no-repeat center center;
				background-size: 262upx auto;
			}
		}
	}
	.detail {
		font-size: 26upx;

		.bgf20 {
			width: 750upx;
			height: 20upx;
			background-color: #f0f0f0;
		}

		.detail_info {
			padding: 0 26upx;

			.money_num {
				display: flex;
				justify-content: space-between;

				.left {
					display: inline-flex;
					align-items: baseline;

					.red {
						display: inline-flex;
						align-items: baseline;

						.m_n {
							font-weight: bold;
							font-size: 38upx;
						}
					}

					.old_m {
						text-decoration: line-through;
						color: #999;
						margin: 0 30upx;
					}

					.all_num {
						color: #999;
					}
				}

				.right {
					background-color: $uni-bl-bg;
					color: $uni-bl;
					padding: 8upx 20upx 0;
					border-radius: 30upx;
					display: inline-block;
					transform: scale(.9);

					.liucheng_img {
						width: 20upx;
						height: 20upx;
						margin-right: 10upx;
					}
				}
			}

			.t_title {
				font-size: 36upx;
				color: #666;
				padding: 20upx 0 40upx;
			}
		}

		.xingqing_title {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 26upx 0;
			background-color: #f0f0f0;

			.v {
				width: 100upx;
				height: 2upx;
				background-color: #999;
			}

			.t {
				padding: 0 30upx;
				color: #666;
				font-size: 32upx;
			}
		}

		.swiper_box {
			position: relative;

			.show_bi_num {
				display: flex;
				justify-content: flex-end;
				padding: 0 26upx;
				position: absolute;
				bottom: 0;
				right: 0upx;

				.cbc {
					background-color: #999;
					padding: 6upx 30upx 8upx;
					border-radius: 40upx;
					color: #fff;
					transform: scale(.8);
					font-size: 32upx;
				}
			}
		}


		.h_lunbo {
			margin-bottom: 20upx;
			height: 700upx;

			.swiper-item {
				text-align: center;

				.img {
					width: 700upx;
					height: 700upx;
				}
			}
		}

		.img_bg_box {
			.img_c {
				line-height: inherit;

				.img {
					line-height: initial;
					width: 750upx;
					vertical-align: bottom
				}
			}
		}
		.weke_new {
			padding: 30upx 0 10upx;
			.weke_new_header_sy {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 10upx;
		
				.left {
					display: inline-flex;
					align-items: center;
		
					.t_img {
						width: 30upx;
						height: 30upx;
					}
		
					.title1 {
						font-size: 30upx;
						margin: 0 20upx;
						font-weight: bold;
					}
		
					.title2 {
						color: #999;
					}
				}
		
				.right {
					display: inline-flex;
					align-items: center;
					color: #999;
				}
			}
		
		
			.weke_box_item {
				width: 170upx;
				margin-right: 20upx;
				.t_img {
					width: 170upx;
					height: 170upx;
				}
		
				.title1 {
					color: #666;
					padding: 12upx 0 4upx;
				}
				.zhuijia{
					display: flex;
					justify-content: space-between;
					padding: 10upx 0;
					.m {
						font-weight: bold;
					}
					.iconjia1{
						color: $uni-bl;
					}
				}
				
			}
		
		}
		
	}
</style>
