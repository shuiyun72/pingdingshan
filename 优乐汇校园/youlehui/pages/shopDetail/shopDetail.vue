<template>
	<view class="shop_detail">
		<view class="shop_foods_detail_sy mc26">
			<view class="left_left_info">
				<image :src="shopDetailInfo.img" class="title_img" mode=""></image>
				<view class="sh_right">
					<view class="p1_left">
						<view class="">
							<view class="c_title">启达西饼蛋糕店</view>
							<view class="rate_sy">
								<view class="rate_i_sy">
									<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(shopDetailInfo.star)"></view>
									<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - shopDetailInfo.star)"></view>
								</view>
								<view class="right">{{ shopDetailInfo.star }}.0</view>
							</view>

							<view class="over_num" v-if="shopDetailInfo.witch == 1">
								<view class="icon blue">蓝楼</view>
								<view class="text">已售960</view>
							</view>
							<view class="over_num" v-if="shopDetailInfo.witch == 2">
								<view class="icon red">红楼</view>
								<view class="text">已售960</view>
							</view>
							<view class="over_num" v-if="shopDetailInfo.witch == 3">
								<view class="icon yel">白楼</view>
								<view class="text">已售960</view>
							</view>
						</view>
					</view>
					<view class="phone" @click="telPhone('13256756565')">
						<text class="iconfont icondianhua"></text>
						13256756565
					</view>
				</view>
			</view>

			<view class="shoucang_sy" :class="{ yellow: shopDetailInfo.shoucang }" @click="handleShoucang">
				<view class="iconfont iconshoucang"></view>
				<view class="">
					<text v-if="shopDetailInfo.shoucang == 0">收藏</text>
					<text v-if="shopDetailInfo.shoucang == 1">已收藏</text>
				</view>
			</view>
		</view>
		<view class="show_address">
			<view class="iconfont iconlocation"></view>
			<view class="">6号楼6号楼6号楼6号楼6号楼6号楼6号楼</view>
		</view>
		<view class="bd22"></view>
		<!-- 切换 -->
		<view class="tab_title">
			<view class="item" v-for="(item, index) in tabTitle" :class="{ yellow: index == tabTitleSel }" @click="handleTabTitle(index)">{{ item.text }}</view>
		</view>
		<!-- 商品信息 -->
		<view class="shop_info_list" v-if="tabTitleSel == 0">
			<view class="left_nav">
				<view class="item" v-for="(item, index) in leftNavItemList" @click="leftNavItem(index)" :class="{ yellow: index == leftNavItemListSel }">{{ item.text }}</view>
			</view>
			<view class="right_foods">
				<view class="item" v-for="(item, index) in rightFoodsList">
					<image src="../../static/img/home/tu5.png" class="food_img" mode=""></image>
					<view class="foods_right">
						<view class="f_title">单人蛋糕单人蛋糕单人蛋糕</view>
						<view class="over_num">已售90单</view>
						<view class="f_money_sy">
							<view class="red">￥{{ item.price }}.0</view>
							<view class="num_add">
								<view class="iconfont iconjian" v-if="item.num > 0" @click="removeNum(item, index)"></view>
								<view class="n" v-if="item.num > 0">{{ item.num }}</view>
								<view class="iconfont iconjia" @click="addNum(item, index)"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 用户评论 -->
		<view class="user_tell" v-if="tabTitleSel == 1">
			<view class="user_comment mc26">
				<view class="user_comment_item_sy" v-for="item in commentList">
					<view class="p_c1">
						<view class="p_c1_l">
							<image :src="'../../static/img/'+item.img" class="pc_img" mode=""></image>
							<view class="ccccll">
								<view class="name">
									仲裁老宝宝
								</view>
								<view class="rate_sy">
									<view class="rate_i_sy">
										<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(item.star)"></view>
										<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - item.star)"></view>
									</view>
									<view class="right">{{ item.star }}.0</view>
								</view>
							</view>
					
						</view>
						<view class="p_c1_r">
							2020-08-02
						</view>
					</view>
					<view class="p_c2">
						第二次第二次第二次第二次第二次第二次
					</view>
					<view class="p_c3" v-if="item.call">
						店家回复 : {{item.call}}
					</view>
				</view>
			</view>
		</view>
		<!-- 商品信息 -->
		<uni-popup type="center" ref="selectTaste">
			<view class="select_popup_sy">
				<view class="close iconfont iconguanbi" @click="$refs.selectTaste.close()"></view>
				<view class="title_p">选择</view>
				<view class="text_t">味道 :</view>
				<view class="taste_list_box">
					<view class="item" :class="{ yellow: index == tasteListSel }" v-for="(item, index) in tasteList" @click="selTaste(item, index)">{{ item.text }}</view>
				</view>
				<view class="add_car_btn"><view class="btn" @click="addCarPopup">确认加入购物车</view></view>
			</view>
		</uni-popup>
		<view class="public_carts_sy_full" v-if="isCarShow" @click.stop="isCarShow = false"></view>
		<view class="public_carts_sy" v-if="tabTitleSel == 0">
			<view class="is_show_car" v-if="isCarShow">
				<view class="pu_title">
					<view class="l">已选商品</view>
					<view class="r">
						<text class="iconfont iconshanchu1"></text>
						清空购物车
					</view>
				</view>
				<view class="foods_box_p">
					<view class="item" v-for="(item, index) in carFoodsList">
						<image src="../../static/img/home/tu5.png" class="food_img" mode=""></image>
						<view class="foods_right">
							<view class="f_title">单人蛋糕单人蛋糕单人蛋糕</view>
							<view class="f_money_sy">
								<view class="red">￥{{ item.price }}.0</view>
								<view class="num_add">
									<view class="iconfont iconjian" v-if="item.num > 0" @click="removeNumCar(item, index)"></view>
									<view class="n" v-if="item.num > 0">{{ item.num }}</view>
									<view class="iconfont iconjia" @click="addNumCar(item, index)"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="car mc26">
				<view class="car_l" @click="showCar">
					<view class="iconl">
						<image src="../../static/img/gwc.png" mode="" class="c_img"></image>
						<view class="p_num">2</view>
					</view>
					<view class="money_box">
						<view class="money">￥50.0</view>
						<view class="sm">支持自提/支持到店就餐</view>
					</view>
				</view>
				<view class="car_r" @click="orderPay">去结算</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniPopup from '../components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			tabTitleSel: 0,  //商品信息用户评论切换
			isCarShow: false,//是否为购物车添加
			isCarPopup:false,//是否显示购物车
			tasteList: [{ text: '不甜' }, { text: '微甜' }, { text: '特甜' }],
			tasteListSel: 0,
			// 商品list
			rightFoodsList: [
				{
					price: 25,
					num: 1,
					wd: true
				},
				{
					price: 25,
					num: 1,
					wd: false
				},
				{
					price: 25,
					num: 0,
					wd: false
				},
				{
					price: 25,
					num: 0,
					wd: false
				}
			],
			rightFoodsListSel: -1,
			// 购物车list
			carFoodsList: [
				{
					price: 25,
					num: 1,
					wd: true
				},
				{
					price: 25,
					num: 1,
					wd: false
				}
			],
			carFoodsListSel: -1,
			// 评论list
			commentList:[
				{
					img:"tx1.png",
					star:5,
					call:""
				},
				{
					img:"tx2.png",
					star:4,
					call:""
				},
				{
					img:"tx3.png",
					star:4,
					call:"是的,欢迎订餐"
				}
			],
			leftNavItemList: [{ text: '新品' }, { text: '蛋糕' }, { text: '酸奶' }, { text: '饮料' }, { text: '零食' }, { text: '超级美味' }],
			leftNavItemListSel: 0,
			shopDetailInfo: {
				img: '../../static/img/home/tu4.png',
				title: '骐达西饼蛋糕店',
				star: 5,
				witch: 1,
				num: 960,
				shoucang: false
			},
			tabTitle: [{ text: '商品信息' }, { text: '用户评论' }],
			
		};
	},
	methods: {
		showCar(){
			this.isCarShow = !this.isCarShow;
		},
		addCarPopup() {
			if(this.isCarPopup){
				this.addNumCar(this.carFoodsList[this.carFoodsListSel], this.carFoodsListSel, true);
			}else{
				this.addNum(this.rightFoodsList[this.rightFoodsListSel], this.rightFoodsListSel, true);
			}
			this.$refs.selectTaste.close();
		},
		selTaste(item, index) {
			this.tasteListSel = index;
		},
		leftNavItem(index) {
			this.leftNavItemListSel = index;
		},
		calcNum(num) {
			let arrayL = [];
			for (let i = 0; i < num; i++) {
				arrayL.push(i);
			}
			return arrayL;
		},
		telPhone(tel) {
			uni.makePhoneCall({
				phoneNumber: tel
			});
		},
		handleTabTitle(index) {
			this.tabTitleSel = index;
		},
		handleShoucang() {
			this.shopDetailInfo.shoucang = !this.shopDetailInfo.shoucang;
		},
		removeNum(item, index) {
			if (this.rightFoodsList[index].num > 0) {
				this.rightFoodsList[index].num--;
			}
		},
		addNum(item, index, isTrue) {
			if (isTrue) {
				this.rightFoodsList[index].num++;
			} else {
				this.rightFoodsListSel = index;
				if (item.wd) {
					this.isCarPopup = false;
					this.$refs.selectTaste.open();
					
				} else {
					this.rightFoodsList[index].num++;
				}
			}
		},
		removeNumCar(item, index) {
			if (this.carFoodsList[index].num > 0) {
				this.carFoodsList[index].num--;
			}
		},
		addNumCar(item, index, isTrue) {
			if (isTrue) {
				this.carFoodsList[index].num++;
			} else {
				this.carFoodsListSel = index;
				if (item.wd) {
					this.isCarPopup = true;
					this.$refs.selectTaste.open();
				} else {
					this.carFoodsList[index].num++;
				}
			}
		},
		orderPay(){
			uni.navigateTo({
				url:"../orders/orderTrue"
			})
		}
	}
};
</script>

<style lang="less" scoped>
.public_carts_sy_full {
	z-index: 19;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.public_carts_sy {
	z-index: 20;
	padding: 26upx;
	font-size: 28upx;
	border-radius: 30upx 30upx 0 0;
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #fff;
	.pu_title {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40upx;
		.iconshanchu1 {
			font-size: 32upx;
			margin-right: 6upx;
		}
	}
	.foods_box_p {
		padding-bottom: 30upx;
		max-height: 60vh;
		overflow-y: auto;
		.item {
			display: flex;
			margin-bottom: 40upx;
			.food_img {
				width: 120upx;
				height: 120upx;
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
					width: 550upx;
				}
				.over_num {
					color: #999;
				}
				.f_money_sy {
					display: inline-flex;
					justify-content: space-between;
					align-items: baseline;
					.red {
						color: #f00;
					}
					.num_add {
						display: inline-flex;
						.n {
							width: 50upx;
							text-align: center;
						}
						.iconfont {
							padding: 6upx 8upx;
							border-radius: 50%;
						}
						.iconjian {
							background-color: #f0f0f0;
						}
						.iconjia {
							background-color: #fec40b;
							color: #fff;
						}
					}
				}
			}
		}
	}
	.car {
		display: flex;
		width: 644upx;
		.car_l {
			display: inline-flex;
			background-color: #333;
			flex: 1;
			border-radius: 60upx 0 0 60upx;
			padding: 10upx 0 10upx 40upx;
			align-items: center;
			.iconl {
				position: relative;
				.c_img {
					width: 56upx;
					height: 56upx;
				}
				.p_num {
					position: absolute;
					top: -16upx;
					right: -20upx;
					background-color: #f00;
					color: #fff;
					width: 40upx;
					height: 40upx;
					line-height: 40upx;
					text-align: center;
					border-radius: 50%;
					transform: scale(0.8);
				}
			}
			.money_box {
				.money {
					font-size: 38upx;
					color: #fefefe;
					padding-left: 20upx;
				}
				.sm {
					transform: scale(0.8);
					color: #ccc;
				}
			}
		}
		.car_r {
			background-color: #fec106;
			font-weight: bold;
			width: 230upx;
			border-radius: 0 60upx 60upx 0;
			align-items: center;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-size: 36upx;
		}
	}
}
.select_popup_sy {
	background-color: #fff;
	width: 600upx;
	position: relative;
	padding: 30upx 26upx 40upx;
	.close {
		border: 1upx solid #888;
		color: #888;
		position: absolute;
		padding: 6upx 8upx;
		top: 10upx;
		right: 10upx;
		transform: scale(0.8);
		font-size: 28upx;
		border-radius: 50%;
	}
	.title_p {
		font-size: 36upx;
		text-align: center;
		color: #333;
		margin-bottom: 20upx;
	}
	.taste_list_box {
		display: flex;
		padding-top: 20upx;
		.item {
			border: 1upx solid #ccc;
			border-radius: 8upx;
			padding: 8upx 26upx;
			margin-right: 30upx;
			&.yellow {
				border: 1upx solid #fec40b;
				color: #fec40b;
			}
		}
	}
	.add_car_btn {
		padding: 80upx 30upx 20upx;
		.btn {
			background-color: #fec40b;
			text-align: center;
			color: #fff;
			padding: 20upx 0;
			border-radius: 60upx;
		}
	}
}
.user_comment_item_sy{
	padding: 10upx 0 20upx;
	.p_c1{
		display: flex;
		justify-content: space-between;
		.p_c1_l{
			display: inline-flex;
			align-items: center;
			.pc_img{
				width: 80upx;
				height: 80upx;
			}
			.ccccll{
				margin-left: 30upx;
				.name{
					font-size: 32upx;
					margin-bottom: 12upx;
				}
			}
		}
		.p_c1_r{
			color: #999;
		}
	}
	.p_c2{
		padding: 20upx 0;
	}
	.p_c3{
		background-color: #f0f0f0;
	}
}
.shop_detail {
	font-size: 28upx;
	color: #666;
	padding-top: 10upx;
	padding-bottom: 160upx;
	.shop_info_list {
		display: flex;
		padding: 0 26upx;
		.left_nav {
			width: 190upx;
			background-color: #f0f0f0;
			box-sizing: border-box;
			padding: 30upx 16upx;
			margin-right: 26upx;
			.item {
				font-size: 32upx;
				margin-bottom: 36upx;
				font-weight: bold;
				&::before {
					content: '';
					display: inline-block;
					width: 8upx;
					height: 34upx;
					background-color: transparent;
					margin-right: 16upx;
					position: relative;
					top: 6upx;
				}
				&.yellow {
					color: #fec40b;
					&::before {
						background-color: #fec40b;
					}
				}
			}
		}
		.right_foods {
			flex: 1;
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
						width: 300upx;
					}
					.over_num {
						color: #999;
					}
					.f_money_sy {
						display: inline-flex;
						justify-content: space-between;
						align-items: baseline;
						.red {
							color: #f00;
						}
						.num_add {
							display: inline-flex;
							.n {
								width: 50upx;
								text-align: center;
							}
							.iconfont {
								padding: 6upx 8upx;
								border-radius: 50%;
							}
							.iconjian {
								background-color: #f0f0f0;
							}
							.iconjia {
								background-color: #fec40b;
								color: #fff;
							}
						}
					}
				}
			}
		}
	}
	.tab_title {
		display: flex;
		padding: 26upx;
		.item {
			font-size: 36upx;
			margin-right: 50upx;
			border-bottom: 6upx solid transparent;
			padding-bottom: 4upx;
			transition: 0.6s all;
			&.yellow {
				color: #fec40b;
				border-bottom: 6upx solid #fec40b;
			}
		}
	}
	.show_address {
		display: flex;
		padding: 20upx 26upx 30upx;
	}
	.shop_foods_detail_sy {
		display: flex;
		.shoucang_sy {
			text-align: center;
			width: 90upx;
			&.yellow {
				color: #fec106;
			}
		}
		.left_left_info {
			display: inline-flex;
			flex: 1;
			.sh_right {
				display: inline-flex;
				justify-content: space-between;
				flex-direction: column;
				margin-left: 20upx;
				.phone {
					.icondianhua {
						font-size: 26upx;
						margin-right: 10upx;
					}
				}
				.c_title {
					font-size: 36upx;
					margin-bottom: 6upx;
					color: #333;
				}
				.over_num {
					display: inline-flex;
					align-items: center;
					margin-top: 6upx;
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
		.title_img {
			width: 220upx;
			height: 220upx;
		}
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
}
</style>
