<template>
	<view class="">
		
		<view class="" v-if="isClassify" class="search_box_sy">
			<view class="part1">
				<view class="show_item" v-for="item in search1">
					<view class="text">
						{{item.name}}
					</view>
					<view class="iconfont iconshangxia"></view>
				</view>
			</view>
			<view class="part2">
				<view class="fenlei_item" :class="{'active':index==search2Sel}" v-for="(item,index) in search2" @click="search2Show(index)">
					{{item.name}}
				</view>
			</view>
			
		</view>
		<view class="foot_list_show">
			<view class="buy_car iconfont icongouwuche" @click="toShopCar">
				<view class="text" v-if="carShowNum>0">
					{{carShowNum}}
				</view>
			</view>
			<view class="">
				<view class="rec_body_sy">
					<sy-foot2 v-for="(item,index) in shopList" :item="item" @click="foot2Click" :isPaihang="isPaihang" :itemIndex="index">
						<view class="num_add_sy" v-if="item.state != 3">
							<view class="iconfont iconjian" v-if="item.num > 0" @click.stop="foot2Jian(item)"></view>
							<view class="n" v-if="item.num > 0">{{ item.num }}</view>
							<view class="iconfont iconjia show" @click.stop="foot2Jia(item)"></view>
						</view>
						<view class="btn_qiang" v-if="item.state == 3" @click.stop="foot2Jia(item)">
							立即抢
						</view>
					</sy-foot2>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	import _ from "../../until/lodash";
	export default {
		onLoad(ph) {
			// 来自分类
			if (ph.fromType == 'classify') {
				uni.setNavigationBarTitle({
					title: ph.searchName
				})
				this.isClassify = true
			}else
			//sgTop10 来自水果排行
			if (ph.fromType == 'sgTop10') {
				uni.setNavigationBarTitle({
					title: '本周水果前十'
				})
				this.isPaihang = true
			}
			if(ph.fromType == 'home'){
				uni.setNavigationBarTitle({
					title: ph.searchName
				})
			}
			if(ph.fromType == 'shoucang'){
				uni.setNavigationBarTitle({
					title: ph.searchName
				})
			}
			//search 来自搜索
			
			
			_.map(this.shopList, itemL => {
				_.map(this.shopCar, itemC => {
					if (itemL.id == itemC.id) {
						itemL.num = itemC.num
					}
				})
			})
		},
		data() {
			return {
				search1:[
					{name:"有货",ins:false},
					{name:"新品",ins:false},
					{name:"折扣",ins:false},
					{name:"筛选",ins:false}
				],
				search2:[
					{name:"全部"},
					{name:"桔"},
					{name:"柠"},
					{name:"柚"},
					{name:"柠檬"}
				],
				search2Sel:0,
				classifyNav: [{
						name: "水果"
					},
					{
						name: "蔬菜"
					},
					{
						name: "肉禽"
					},
					{
						name: "海鲜水产"
					},
					{
						name: "粮油调料"
					}
				],
				classifyIndex: 0,
				shopList: [{
						id: 1,
						price: 7.9,
						num: 0,
						zhe:"",
						sel: 1,
						state:5,
						state2:1
					},
					{
						id: 2,
						price: 7.9,
						num: 0,
						jian:"2.1",
						sel: 1,
						state2:1
					},
					{
						id: 222,
						price: 7.9,
						num: 0,
						chu:60,
						zong:100,
						state:3,
						sel: 1
					},
					{
						id: 221,
						price: 7.9,
						num: 0,
						sel: 1
					},
					{
						id: 229,
						price: 7.9,
						num: 0,
						chu:6,
						zong:200,
						state:3,
						sel: 1
					},
					{
						id: 226,
						price: 7.9,
						num: 0,
						sel: 1
					}
				],
				isClassify: false,
				isPaihang:false
			};
		},
		onPageScroll() {

		},
		watch:{
			shopCar: {
				handler: function(newVal, oldVal) {
					let numb = 0;
					_.map(this.shopCar, item => {
						numb += item.num
					})
					if (numb > 0) {
						let numbStr = numb.toString();
						uni.setTabBarBadge({
							index: 3,
							text: numbStr
						})
					} else {
						uni.removeTabBarBadge({
							index: 3
						})
					}
				},
				deep: true,
				immediate: true
			}
		},
		computed: {
			...mapState(["httpp", "SystemInfo", "userInfo", "shopCar"]),
			carShowNum() {
				let carShowNum = 0;
				_.map(this.shopCar, itemC => {
					carShowNum += itemC.num
				})
				return carShowNum;
			}
		},
		
		methods: {
			...mapMutations(["jiaCar", "jianCar"]),
			search2Show(index2){
				this.search2Sel = index2
			},
			toShopCar() {
				uni.switchTab({
					url: "../shopCar/shopCar"
				})
			},
			foot2Click(item) {
				console.log(item)
				uni.navigateTo({
					url:"../detail/detail?id="+item.id
				})
			},
			foot2Jia(item) {
				console.log("111111111")
				_.map(this.shopList, fil => {
					console.log(item)
					if (fil.id == item.id) {
						item.num++;
						this.jiaCar(item)
					}
				})
			},
			foot2Jian(item) {
				console.log("2222222222")
				console.log(item)
				_.map(this.shopList, fil => {
					if (fil.id == item.id) {
						item.num--;
						this.jianCar(item)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search_box_sy{
		padding: 0 0 20upx;
		.part1{
			display: flex;
			justify-content: space-between;
			padding: 10upx 26upx;
			color: #666;
			.show_item{
				display: inline-flex;
				align-items: center;
				padding: 6upx 20upx 10upx;
				.text{
					font-size: 30upx;
				}
				.iconshangxia{
					font-size: 26upx;
					color: #999;
					transform: scale(.8);
				}
			}
		}
		.part2{
			display: flex;
			padding: 10upx 26upx;
			flex-wrap: wrap;
			.fenlei_item{
				padding: 6upx 26upx 12upx;
				margin-right: 20upx;
				margin-bottom: 20upx;
				background-color: #f0f0f0;
				border-radius: 30upx;
				color: #666;
				&.active{
					color: $uni-bl;
					background-color: $uni-bl-bg;
				}
			}
		}
	}
	.foot_list_show {
		background-color: #f0f0f0;
		min-height: 100vh;
		padding: 20upx 26upx 200upx;

		.num_add_sy {
			display: inline-flex;

			.n {
				width: 50upx;
				text-align: center;
				position: relative;
				top: 8upx;
			}

			.iconfont {
				padding: 6upx 8upx;
				border-radius: 50%;
			}

			.iconjian {
				// background-color: #f0f0f0;
				// color: #666;
				background-color: $uni-bl;
				color: #fff;
			}

			.iconjia {
				background-color: #f0f0f0;
				color: #666;

				&.show {
					background-color: $uni-bl;
					color: #fff;
				}
			}
		}

		.buy_car.icongouwuche {
			position: fixed;
			bottom: 40upx;
			right: 40upx;
			font-size: 70upx;
			background-color: $uni-bl;
			color: #fff;
			width: 120upx;
			height: 120upx;
			text-align: center;
			line-height: 120upx;
			border-radius: 50%;

			.text {
				background-color: $uni-or;
				position: absolute;
				top: 16upx;
				right: 16upx;
				font-size: 26upx;
				width: 36upx;
				height: 36upx;
				line-height: 36upx;
				border-radius: 50%;
				transform: scale(.8);
			}
		}

		.rec_body_sy {
			background-color: #fff;
			border-radius: 12upx;
			padding: 10upx 26upx;
		}
	}
</style>
