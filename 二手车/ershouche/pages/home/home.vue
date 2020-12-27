<template>
	<view class="home">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="3000" :duration="500"
			 :indicator-color="'#fff'" :indicator-active-color="'#31C5AF'">
				<swiper-item v-for="item in lunboUrls" @click="nativeTo(item)">
					<view class="swiper-item uni-bg-red">
						<image :src="'../../static/img/'+item.img" mode="" class="swiper_img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="pay_cars">
			<view class="car_title">
				<view class="l">
					车辆信息
				</view>
				<view class="r" @click="showPopupC">
					更多...
				</view>
			</view> 
			<view class="car_info" v-for=" item in carList" @click="detailCar(item)">
				<view class="part1">
					<image :src="'../../static/img/'+item.imageList[0]" class="car_img"></image>
					<view class="info">
						<view class="title ell">
							中型牵引车头 375马力
						</view>
						<view class="ac ell">
							2018年10月 / 国五 
						</view>
						<view class="money">
							<text class="num">20.00</text>万
						</view>
					</view>
				</view>
<!-- 				<view class="part2">
					<view class="btn" @click="detailCar(i)">
						详情
					</view>
					<view class="btn" @click="downCar(i)">
						下架
					</view>
				</view> -->
			</view>
		</view>
		<view class="fabu" @click="addCar" v-if="user == 1">
			<view class="">
				我要
			</view>
			<view class="">
				卖车
			</view>
		</view>
<!-- 		<uni-popup type="top" ref="selectCar">
			<view class="popup_sel">
				cscdsds
			</view>
		</uni-popup> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lunboUrls: [{
					img: "dt1.jpg",
					url: "",
					text: ""
				}, {
					img: "dt2.jpg",
					url: "",
					text: ""
				}, {
					img: "dt3.jpg",
					url: "",
					text: ""
				}, {
					img: "dt4.jpg",
					url: "",
					text: ""
				}, {
					img: "dt5.jpg",
					url: "",
					text: ""
				}],
				indicatorDots: true,
				autoplay: true,
				carList: [{
					carShopIndex: 0,
					pinpai: "东风",
					licheng:80000,
					multiIndex:[10,5],
					mali:"30",
					carPaifangIndex:2,
					fadongji:"好发动机",
					carRYIndex:0,
					carQDIndex:0,
					carBXIndex:0,
					miaoshu:"刚开了1个月,出售",
					carGCIndex:0,
					guachechangdu:"20",
					guachekuandu:"2",
					guachegaodu:"2",
					carZIndex:0,
					jiage:"50",
					imageList: ['dt2.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
				},
				{
					carShopIndex: 0,
					pinpai: "朗逸",
					licheng:60000,
					multiIndex:[10,5],
					mali:"30",
					carPaifangIndex:2,
					fadongji:"好发动机",
					carRYIndex:0,
					carQDIndex:0,
					carBXIndex:0,
					miaoshu:"刚开了1个月,出售",
					carGCIndex:0,
					guachechangdu:"20",
					guachekuandu:"2",
					guachegaodu:"2",
					carZIndex:0,
					jiage:"50",
					imageList: ['dt5.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
				},
				{
					carShopIndex: 0,
					pinpai: "宝马",
					licheng:40000,
					multiIndex:[10,5],
					mali:"30",
					carPaifangIndex:2,
					fadongji:"好发动机",
					carRYIndex:0,
					carQDIndex:0,
					carBXIndex:0,
					miaoshu:"刚开了1个月,出售",
					carGCIndex:0,
					guachechangdu:"20",
					guachekuandu:"2",
					guachegaodu:"2",
					carZIndex:0,
					jiage:"50",
					imageList: ['dt1.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
				}]
			}
		},
		mounted() {
			
		},
		computed:{
			user(){
				return this.$store.state.user;
			}
		},
		onShow() {
			this.$getApi("/api/shop/slidelist", {}, res => {
				console.log(res)
				
			})
		},
		methods: {
			nativeTo(item) {
				console.log(item)
			},
			detailCar(item) {
				console.log(item)
				let this_ = this;
				uni.navigateTo({
					url: "../car/car?carInfo=" + JSON.stringify(item)
				})
			},
			downCar(item) {
				uni.showModal({
					title: '提示',
					content: '是否确认下架?',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				console.log(item)
			},
			addCar() {
				uni.navigateTo({
					url: "../car/car"
				})
			},
			showPopupC(){
				// this.$refs.selectCar.open() 
				uni.navigateTo({
					url:"../car/carList"
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.home {
		.popup_sel{
			background-color: #fff;
		}
		.fabu {
			width: 120upx;
			height: 120upx;
			position: fixed;
			right: 30upx;
			bottom: 160upx;
			background-color: $uni-or;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #fff;
			flex-direction: column;
			letter-spacing: 10upx;
			padding-left: 10upx;
			box-sizing: border-box;
		}

		.pay_cars {
			padding: 26upx 26upx;
			.car_title{
				display: flex;
				justify-content: space-between;
				padding-bottom: 20upx;
				align-items: baseline;
				.l{
					font-weight: bold;
					font-size: 34upx;
					color: #333;
				}
				.r{
					color: $uni-bl;
				}
			}
			.car_info {
				margin-bottom: 30upx;
				padding: 30upx 10upx 10upx 0upx;
				border-radius: 10upx;
				&.car_info{
					border-top: 1upx solid #ddd;
				}
				.part2 {
					display: flex;
					justify-content: space-between;

					.btn {
						width: 48%;
						background-color: $uni-bl;
						border-radius: 60upx;
						text-align: center;
						padding: 14upx 0;
						color: #fff;
						margin-top: 20upx;
					}
				}

				.part1 {
					display: flex;

					.car_img {
						width: 260upx;
						height: 160upx;
					}

					.info {
						display: inline-flex;
						flex-direction: column;
						justify-content: space-around;
						margin-left: 26upx;
						padding: 4upx 0;
						.ac{
							color: #666;
						}
						.ell {
							flex:1;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}

						.title {
							font-size: 34upx;
							font-weight: bold;
							color: #333;
						}

						.money {
							color: $uni-red;
							
							.num{
								font-size: 32upx;
								font-weight: bold;
								padding-right: 6upx;
							}
						}
					}
				}
			}
		}
	}

	.uni-margin-wrap {
		width: 750rpx;


		.swiper {
			height: 300rpx;
		}

		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;

			.swiper_img {
				width: 750upx;
				height: 300upx;
			}
		}

		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}

		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}

		.info {
			position: absolute;
			right: 20rpx;
		}

		.uni-padding-wrap {
			width: 550rpx;
			padding: 0 100rpx;
		}
	}
</style>
