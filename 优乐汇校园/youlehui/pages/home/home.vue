<template>
	<view class="home">
		<view class="logo_text_sy">优乐汇校园</view>
		<view class="mc26">
			<view class="mc26">
				<view class="search_input_sy" @click="handleSearch">
					<view class="iconfont iconsousuo1"></view>
					<view class="text">请输入商品名称</view>
				</view>
			</view>
			<view class="swiper-box_sy">
				<uni-swiper-dot :info="infoList" :current="current" mode="round" :dots-styles="dotsStyles">
					<swiper class="swiper-box" @change="lunboSwiperChange" :autoplay="true">
						<swiper-item v-for="(item, index) in infoList" :key="index">
							<view class="swiper-item"><image class="img" :src="item.img" mode="aspectFill" /></view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
			<view class="home_nav">
				<view class="item" v-for="item in homeNav" @click="shopsSel(item.text)">
					<image :src="item.img" mode="" class="img"></image>
					<view class="text">{{ item.text }}</view>
				</view>
			</view>
		</view>
		<view class="bd22"></view>
		<view class="mc26">
			<view class="home_title_sy" @click="shopsSel('食惠平院')">
				<view class="title">食惠平院</view>
				<view class="more">
					查看更多
					<text class="iconfont iconjiantou"></text>
				</view>
			</view>

			<view class="food_list_sy">
				<view class="item" v-for="item in foodList">
					<image :src="item.img" class="img" mode=""></image>
					<view class="text1">{{ item.text1 }}</view>
					<view class="text2">已售{{ item.text2 }}件</view>
				</view>
			</view>
			<view class="home_title_sy"><view class="title">热门推荐</view></view>
			<view class="hot_body">
				<view class="item_shu_food_sy" v-for="item in hotFoodsList">
					<image class="img" src="../../static/img/home/tu4.png" mode=""></image>
					<view class="right">
						<view class="">
							<view class="title">的的山顶上</view>
							<view class="rate_sy">
								<view class="rate_i_sy">
									<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(item.star)"></view>
									<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - item.star)"></view>
								</view>
								<view class="right">{{ item.star }}.0</view>
							</view>
						</view>
						<view class="over_num" v-if="item.witch == 1">
							<view class="icon blue">蓝楼</view>
							<view class="text">已售960</view>
						</view>
						<view class="over_num" v-if="item.witch == 2">
							<view class="icon red">红楼</view>
							<view class="text">已售960</view>
						</view>
						<view class="over_num" v-if="item.witch == 3">
							<view class="icon yel">白楼</view>
							<view class="text">已售960</view>
						</view>
					</view>
				</view>
				<view class="loading_more_sy">加载更多</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniSwiperDot from '../components/uni-swiper-dot/uni-swiper-dot.vue';
export default {
	components: {
		uniSwiperDot
	},
	data() {
		return {
			hotFoodsList: [
				{
					img: '../../static/img/home/tu4.png',
					title: '骐达西饼蛋糕店',
					star: 5,
					witch: 1,
					num: 960
				},
				{
					img: '../../static/img/home/tu4.png',
					title: '骐达西饼蛋糕店',
					star: 4,
					witch: 1,
					num: 960
				},
				{
					img: '../../static/img/home/tu4.png',
					title: '骐达西饼蛋糕店',
					star: 5,
					witch: 2,
					num: 960
				},
				{
					img: '../../static/img/home/tu4.png',
					title: '骐达西饼蛋糕店',
					star: 4,
					witch: 3,
					num: 960
				}
			],
			foodList: [
				{
					img: '../../static/img/home/tu1.png',
					text1: '山西面馆',
					text2: '689'
				},
				{
					img: '../../static/img/home/tu2.png',
					text1: '山西面馆',
					text2: '689'
				},
				{
					img: '../../static/img/home/tu3.png',
					text1: '山西面馆',
					text2: '689'
				}
			],
			infoList: [
				{
					img: '../../static/img/home/banner.png',
					url: '内容 A'
				},
				{
					img: '../../static/img/home/banner.png',
					url: '内容 B'
				},
				{
					img: '../../static/img/home/banner.png',
					url: '内容 C'
				}
			],
			homeNav: [
				{
					img: '../../static/img/home/ls.png',
					text: '蓝楼餐厅',
					url: '内容 A'
				},
				{
					img: '../../static/img/home/hs.png',
					text: '红楼餐厅',
					url: '内容 A'
				},
				{
					img: '../../static/img/home/bs.png',
					text: '白楼餐厅',
					url: '内容 A'
				}
			],
			current: 0,
			dotsStyles: {
				backgroundColor: '#fff',
				border: '1px #FEC40D solid',
				color: '#fff',
				selectedBackgroundColor: '#FEC40D',
				selectedBorder: '1px #FEC40D solid'
			}
		};
	},
	methods: {
		//选择餐厅
		shopsSel(item) {
			console.log(item);
			uni.navigateTo({
				url: '../shops/shops?pageTitle='+item
			});
		},
		lunboSwiperChange(e) {
			this.current = e.detail.current;
		},
		calcNum(num) {
			let arrayL = [];
			for (let i = 0; i < num; i++) {
				arrayL.push(i);
			}
			return arrayL;
		},
		handleSearch() {
			uni.navigateTo({
				url: './search'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.home {
	.loading_more_sy {
		text-align: center;
		padding: 30upx 0 60upx;
		color: #999;
	}
	.rate_sy {
		display: flex;
		.rate_i_sy {
			display: inline-flex;
			.iconxingxing {
				color: #ccc;
				font-size: 28upx;
				margin-right: 12upx;
				&.yellow {
					color: #fec40b;
				}
			}
		}
		.right {
			color: #999;
			font-size: 28upx;
		}
	}
	.item_shu_food_sy {
		display: flex;
		margin-bottom: 40upx;
		.img {
			width: 190upx;
			height: 190upx;
		}
		.right {
			margin-left: 26upx;
			display: inline-flex;
			justify-content: space-between;
			flex-direction: column;
			.title {
				font-size: 36upx;
				margin-bottom: 16upx;
			}
			.over_num {
				display: inline-flex;
				align-items: center;
				.text {
					font-size: 28upx;
				}
				.icon {
					padding: 4upx 10upx;
					transform: scale(0.9);
					margin-right: 12upx;
					&.blue {
						background-color: #d4e9ff;
						color: #459ffe;
					}
					&.red {
						background-color: #ffd1be;
						color: #f00;
					}
					&.yel {
						background-color: #fee9aa;
						color: #fec106;
					}
				}
			}
		}
	}
	.food_list_sy {
		display: flex;
		justify-content: space-between;
		.item {
			.img {
				width: 220upx;
				height: 220upx;
			}
			.text1 {
				font-size: 32upx;
				color: #333;
				padding: 10upx 0;
			}
			.text2 {
				color: #ccc;
			}
		}
	}
	.search_input_sy {
		background-color: #fff;
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
	.swiper-box_sy {
		padding-top: 24upx;
		.swiper-box {
			height: 300upx;
			border-radius: 20upx;
			overflow: hidden;
		}
		.swiper-item {
			/* #ifndef APP-NVUE */
			/* #endif */
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #999;
			color: #fff;
			.img {
				width: 700upx;
				height: 300upx;
			}
		}
	}
	.home_title_sy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0;
		.title {
			font-weight: bold;
			font-size: 36upx;
			color: #333;
		}
	}
	.logo_text_sy {
		z-index: 10;
		color: #fff;
		padding: 22upx 26upx 10upx;
		font-size: 40upx;
		position: fixed;
		top: 0;
		left: 0;
		width: 750upx;
		box-sizing: border-box;
		background-color: #fec209;
	}

	background: url(../../static/img/home/bg.png) no-repeat center top;
	background-size: 750upx auto;
	color: #666;
	font-size: 28upx;
	padding-top: 90upx;

	.home_nav {
		display: flex;
		justify-content: space-between;
		padding: 40upx 40upx 30upx;
		.item {
			.img {
				width: 110upx;
				height: 110upx;
			}
			text-align: center;
		}
	}
}
</style>
