<template>
	<view class="classify">
		<searchSy @click="searchCom" :placeholder="'请输入商品名称'"></searchSy>
		<view class="body">
			<view class="left_classify">
				<view class="item" :class="{'active':index == classifySel}" v-for="(item,index) in classifyList" @click="selClass(item,index)">
					<view class="border">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="right_show">
				<view class="img_show" @click="toSearchR"> 
					<image src="../../static/img/xuanct.png" class="img" mode=""></image>
				</view>
				<view class="shop_list">
					<view class="item" v-for="item in footList" @click="toClassify(item)">
						<image src="../../static/img/home/or.png" class="img" mode=""></image>
						<view class="text">
							{{item.name}}
						</view>
					</view>
					<view class="item"  @click="toClassify(allFoot)">
						<image src="../../static/img/shuigqb.png" class="img" mode=""></image>
						<view class="text">
							全部水果
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchSy from "../sycom/searchSy.vue";
	import _ from "../../until/lodash";
	import {
		mapState,
		mapMutations
	} from "vuex";
	export default {
		components: {
			searchSy
		},
		computed: {
			...mapState(['classify',"shopCar"])
		},
		watch:{
			shopCar: {
				handler: function(newVal, oldVal) {
					this.initShopCar()
				},
				deep: true,
				immediate: true
			}
		},
		onShow() {
			this.initShopCar()
			console.log(this.classify)
			let classifySelindex = _.findIndex(this.classifyList, item => {
				return item.name == this.classify.name
			})
			console.log(classifySelindex)
			if (classifySelindex > 0) {
				this.classifySel = classifySelindex
			}
		},
		data() {
			return {
				allFoot:{
					name:"全部水果"
				},
				footList:[{
					name: "柚子"
				}, {
					name: "水果1"
				}, {
					name: "橘子"
				}, {
					name: "水果3"
				}, {
					name: "水果水果4"
				}, {
					name: "干枝"
				}, {
					name: "水果6"
				},{
					name: "水果6"
				},{
					name: "水果6"
				},{
					name: "水果6"
				}, {
					name: "水果7"
				}],
				classifyList: [{
					name: "水果0"
				}, {
					name: "水果1"
				}, {
					name: "水果2"
				}, {
					name: "水果3"
				}, {
					name: "水果水果4"
				}, {
					name: "水果5"
				}, {
					name: "水果6"
				}, {
					name: "水果7"
				}, {
					name: "水果8"
				}, {
					name: "水果9"
				}, {
					name: "水果10"
				}],
				classifySel: 0
			};
		},
		methods: {
			initShopCar(){
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
			searchCom() {
				console.log("ccc")
				uni.navigateTo({
					url:'../home/search'
				})
			},
			selClass(item, index) {
				this.classifySel = index;
				console.log(item)
			},
			toClassify(item){
				uni.navigateTo({
					url:"../home/searchResult?searchName="+item.name+'&fromType=classify'
				})
			},
			
			toSearchR(){
				uni.navigateTo({
					url:"../home/searchResult?fromType=sgTop10"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.classify {
		.body {
			display: flex;
			padding-top: 20upx;

			.left_classify {
				background-color: #f0f0f0;
				/* #ifdef MP */
				height: calc(100vh);
				/* #endif */
				/* #ifndef MP */
				height: calc(100vh - 310upx);
				/* #endif */
				overflow-y: auto;
				width: 180upx;
				box-sizing: border-box;

				.item {
					padding: 26upx 0 26upx 14upx;
					font-weight: bold;
					color: #666;

					.border {
						border-left: 8upx solid transparent;
						width: 160upx;
						text-align: center;
						line-height: 28upx;
					}

					&.active {
						background-color: #fff;

						.border {
							border-left: 8upx solid $uni-bl;
							color: $uni-bl;
						}
					}

				}
			}

			.right_show {
				padding: 0 26upx 0 10upx;
				flex: 1;
				/* #ifdef MP */
				height: calc(100vh);
				/* #endif */
				/* #ifndef MP */
				height: calc(100vh - 310upx);
				/* #endif */
				overflow-y: auto;
				box-sizing: border-box;

				.img_show {
					text-align: center;
					.img {
						width: 520upx;
						height: 140upx;
					}
				}

				.shop_list {
					display: flex;
					flex-wrap: wrap;
					padding: 0 0upx 20upx 0upx;

					.item {
						width: 28%;
						text-align: center;
						margin-left: 20upx;
						padding: 26upx 0;

						.img {
							width: 100upx;
							height: 100upx;
						}

						.text {
							color: #333;
							padding-top: 6upx;
						}
					}
				}
			}
		}
	}
</style>
