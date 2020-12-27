<template>
	<view class="shops">
		<view class="swiper-box_sy">
			<uni-swiper-dot :info="infoList" :current="current" mode="round" :dots-styles="dotsStyles">
				<swiper class="swiper-box" @change="lunboSwiperChange" :autoplay="true">
					<swiper-item v-for="(item, index) in infoList" :key="index">
						<view class="swiper-item"><image class="img" :src="item.img" mode="aspectFill" /></view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 切换 -->
		<view class="tab_title_s">
			<view class="item" v-for="(item, index) in tabTitle" :class="{ yellow: index == tabTitleSel }" @click="handleTabTitle(index)">{{ item.text }}</view>
		</view>
		<view class="shops_body mc26">
			<view class="item_shu_food_sy" v-for="item in hotFoodsList" @click="shopDetail(item)">
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
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from '../components/uni-swiper-dot/uni-swiper-dot.vue';
export default {
	components: {
		uniSwiperDot
	},
	onLoad(ph) {
		if(ph.pageTitle){
			uni.setNavigationBarTitle({
				title:ph.pageTitle
			})
		}
	},
	data() {
		return {
			current: 0,
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
			dotsStyles: {
				backgroundColor: '#fff',
				border: '1px #FEC40D solid',
				color: '#fff',
				selectedBackgroundColor: '#FEC40D',
				selectedBorder: '1px #FEC40D solid'
			},
			tabTitle: [{ text: '销量最高' }, { text: '评分最高' }],
			tabTitleSel: 0,
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
			]
		};
	},
	methods: {
		lunboSwiperChange(e) {
			this.current = e.detail.current;
		},
		handleTabTitle(index) {
			this.tabTitleSel = index;
		},
		calcNum(num) {
			let arrayL = [];
			for (let i = 0; i < num; i++) {
				arrayL.push(i);
			}
			return arrayL;
		},
		shopDetail(item){
			console.log(item)
			uni.navigateTo({
				url:"../shopDetail/shopDetail"
			})
		}
	}
};
</script>

<style lang="less" scoped>
.shops {
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
	.tab_title_s {
		display: flex;
		padding: 26upx;
		.item {
			font-size: 36upx;
			// border-bottom: 1upx solid transparent;
			padding-bottom: 4upx;
			transition: 0.6s all;
			flex: 1;
			text-align: center;
			&.yellow {
				color: #fec40b;
				// border-bottom: 1upx solid #fec40b;
			}
			& + .item {
				border-left: 1upx solid #f0f0f0;
			}
		}
	}
	.swiper-box_sy {
		.swiper-box {
			height: 300upx;
			// border-radius: 20upx;
			overflow: hidden;
		}
		.swiper-item {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #999;
			color: #fff;
			.img {
				width: 760upx;
				height: 300upx;
			}
		}
	}
	.shops_body{
		padding-bottom: 60upx;
	}
}
</style>
