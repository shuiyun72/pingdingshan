<template>
	<view class="find">
		<sy-scroll-x class="p26">
			<view class="find_auto">
				<view class="find_nav_box" :class="{'active':index == itemIndex}" v-for="(item,index) in findList" @click="itemClick(item)">
					{{item.name}}
				</view>
			</view>
		</sy-scroll-x>
		<view class="pubuliu m26">
			<view class="left_box">
				<sy-pubuli :item='item' v-for="(item,index) in arrtL" @click="foot2Click">
					<view class="num_add_sy1">
						<view class="iconfont iconjian" v-if="item.num > 0" @click.stop="foot2JianJs(item)"></view>
						<view class="n" v-if="item.num > 0">{{ item.num }}</view>
						<view class="iconfont iconjia show" @click.stop="foot2JiaJs(item)"></view>
					</view>
				</sy-pubuli>
			</view>
			<view class="right_box">
				<sy-pubuli :item='item' v-for="(item,index) in arrtR" @click="foot2Click">
					<view class="num_add_sy1">
						<view class="iconfont iconjian" v-if="item.num > 0" @click.stop="foot2JianJs(item)"></view>
						<view class="n" v-if="item.num > 0">{{ item.num }}</view>
						<view class="iconfont iconjia show" @click.stop="foot2JiaJs(item)"></view>
					</view>
				</sy-pubuli>
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
		data() {
			return {
				itemIndex:0,
				findList:[{name:"全部",sel:0},{name:"轻视食谱",sel:1},{name:"轻视食1",sel:2},{name:"轻视食谱",sel:3},{name:"轻视食2",sel:4},{name:"轻视食谱",sel:5}],
				arrtL: [],
				arrtR: [],
				footPb: [{
					id: 1001,
					title: "1新品推荐新品",
					num: 0,
					price: 7.9,
					sel: 1
				}, {
					id: 1002,
					title: "2新品推荐新品推荐新品新品推荐新品",
					num: 0,
					price: 7.9,
					sel: 1
				}, {
					id: 1003,
					title: "2新品推荐新品推荐新品新品推荐新品",
					num: 0,
					price: 7.9,
					sel: 1
				}],
				
				
			};
		},
		mounted() {
			
			this.footPbL()
			
		},
		onShow() {
			_.map(this.footPb, itemL => {
				_.map(this.shopCar, (itemC, index) => {
					if (itemL.id == itemC.id) {
						// this.shopList[index].num = itemC.num
						this.$set(this.footPb[index], "num", itemC.num)
					}
				})
			})
		},
		beforeDestroy() {
			
		},
		computed:{
			...mapState(["httpp", "SystemInfo", "userInfo", "shopCar", "location"]),
		},
		methods:{
			...mapMutations(["jiaCar", "jianCar", "setLocation","setClassify"]),
			footPbL(type) {
				let arrtL = [];
				let arrtR = [];
				_.map(this.footPb, (item, index) => {
					console.log(item, index)
					if (index % 2 == 0) {
						arrtL.push(item)
					} else {
						arrtR.push(item)
					}
				})
				this.arrtL = arrtL;
				this.arrtR = arrtR;
				console.log(arrtL)
				console.log(arrtR)
			},
			foot2Click(item) {
				console.log(item)
				uni.navigateTo({
					url: '../detail/detail?id=' + item.id
				})
			},
			foot2JianJs(item) {
				this.foot2JianItem(item, 3)
			},
			foot2JiaJs(item) {
				this.foot2JiaItem(item, 3)
			},
			foot2JiaItem(item, el) {
				let list = [];
				if (el == 1) {
					list = this.shopList
				} else
				if (el == 2) {
					list = this.shopList2
				}else
				if (el == 3) {
					list = this.footPb
				}
				_.map(list, fil => {
					if (fil.id == item.id) {
						item.num++;
						this.jiaCar(item)
					}
				})
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
			foot2JianItem(item, el) {
				let list = [];
				if (el == 1) {
					list = this.shopList
				} else
				if (el == 2) {
					list = this.shopList2
				}else
				if (el == 3) {
					list = this.footPb
				}
				_.map(list, fil => {
					if (fil.id == item.id) {
						item.num--;
						this.jianCar(item)
					}
				})
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
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.find_auto{
		display: flex;
		
		.find_nav_box{
			flex-shrink: 0;
			padding: 6upx 20upx 10upx;
			background-color: #f0f0f0;
			border-radius: 26upx;
			margin-right: 20upx;
			letter-spacing:4upx;
			&.active{
				background-color: $uni-bl-bg;
				color: $uni-bl;
			}
		}
		
	}
	.pubuliu {
		display: flex;
	
		justify-content: space-between;
		.num_add_sy1 {
			display: inline-flex;
		
			.n {
				width: 30upx;
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
				transform: scale(.8);
			}
		
			.iconjia {
				background-color: #f0f0f0;
				color: #666;
				transform: scale(.8);
		
				&.show {
					background-color: $uni-bl;
					color: #fff;
				}
			}
		}
	}
</style>