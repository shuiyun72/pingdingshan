<template>
	<view class="recommend">
		<view class="buy_car iconfont icongouwuche" @click="toShopCar">
			<view class="text" v-if="carShowNum>0">
				{{carShowNum}}
			</view>
		</view>
		<view class="posi_img">
			<image src="../../static/img/img-zhut3.png" mode="" class="img"></image>

		</view>
		<view class="scroll_fixed" :class="{'fixed':isFixed}">
			<view class="classify_nav">
				<view class="item" v-for="(item,index) in classifyNav" :class="{'active':index == classifyIndex}" @click="erNav(item,index)">
					{{item.name}}
				</view>
			</view>
			<view class="scroll_foots" ref="scrollFoots" :style="{'height':isFixed?'1140upx':'920upx'}">
				<view v-for="t in ceshi">
					<view class="title_recommend">
						<view class="text_query_ng" ref="titleName">
							{{t==1?'水果':t==2?'蔬菜':'肉禽'}}
						</view>
					</view>
					<view class="rec_body_sy">
						<sy-foot2 v-for="item in shopList" :item="item" @click="foot2Click">
							<view class="num_add_sy">
								<view class="iconfont iconjian" v-if="item.num > 0" @click.stop="foot2Jian(item)"></view>
								<view class="n" v-if="item.num > 0">{{ item.num }}</view>
								<view class="iconfont iconjia show" @click.stop="foot2Jia(item)"></view>
							</view>
						</sy-foot2>
					</view>
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
			if (ph.title == '新品推荐') {
				uni.setNavigationBarTitle({
					title: ph.title
				})
			}
			if (ph.title == '本周上新') {
				uni.setNavigationBarTitle({
					title: ph.title
				})
			}
			if (ph.title == '买一送一') {
				uni.setNavigationBarTitle({
					title: ph.title
				})
			}
			if (ph.title == '团购产品') {
				uni.setNavigationBarTitle({
					title: ph.title
				})
			}
		},
		data() {
			return {
				ceshi:[1,2,3],
				itddd:0,
				isFixed:false,
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
						sel: 1
					},
					{
						id: 2,
						price: 7.9,
						num: 0,
						sel: 1
					},
					{
						id: 3,
						price: 7.9,
						num: 0,
						sel: 1
					}
				]
			};
		},
		watch:{
			itddd:{
				handle:function(){
					console.log(this.$refs.itddd)
				},
				deep:true
			}
		},
		onPageScroll(res) {
			// console.log(res.scrollTop)
			if(res.scrollTop>115){
				this.isFixed = true;
			}else{
				this.isFixed = false;
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
		onShow() {
			_.map(this.shopList, itemL => {
				_.map(this.shopCar, itemC => {
					if (itemL.id == itemC.id) {
						itemL.num = itemC.num
					}
				})
			})
		},
		methods: {
			...mapMutations(["jiaCar", "jianCar"]),
			erNav(item,index){
				this.classifyIndex = index;
				console.log(item.name)
				console.log(this.$refs.titleName)
				document.getElementsByClassName("")
				let titleNames = this.$refs.titleName;
				_.map(titleNames,itemL=>{
					if(item.name == itemL.$el.innerText){
						console.log(itemL.$el.offsetTop)
						this.$refs.scrollFoots.$el.scrollTop = itemL.$el.offsetTop-56
					}
				})
				return false;
				let this_ = this;
				let query =  wx.createSelectorQuery();
				query.selectAll(".text_query_ng").boundingClientRect();
				query.exec(function(res){
					console.log(this_.$refs.scrollFoots)
					// this_.$refs.scrollFoots.$el.scrollTop = res[0][index].top-167
					// for(let i;i<res[0].length;i++){
					// 	if(item.name == res[0][i].innerText){
					// 		this_.$refs.scrollFoots.$el.scrollTop = res[0][i].top-167
					// 	}
						
					// }
				})
			
			},
			toShopCar() {
				uni.switchTab({
					url: "../shopCar/shopCar"
				})
			},
			foot2Click(item) {
				console.log(item)
				uni.navigateTo({
					url: "../detail/detail?id=" + item.id
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
		z-index:10;
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

	.recommend {
		background-color: #f0f0f0;
		min-height: 100vh;
		padding-bottom: 200upx;
		.scroll_fixed{
			padding: 0 26upx;
			position: relative;
			top:-60upx;
			width: 698upx;
			&.fixed{
				position: fixed;
				top: 100upx;
				left: 0;
			}
			.scroll_foots{
				overflow-y: auto;
				// max-height: calc( 100vh - 400upx );
			}
		}
		.posi_img {
			width: 750upx;
			height: 290upx;
			
			.img {
				width: 750upx;
				height: 290upx;
			}
		}

		.classify_nav {
			display: flex;
			justify-content: space-between;
			background-color: rgba(255, 255, 255, .9);
			padding: 26upx 10upx 26upx;
			border-radius: 30upx 30upx 0 0;
			box-sizing: border-box;

			.item {
				padding: 4upx 30upx 8upx;
				border-radius: 20upx;

				&.active {
					background-color: $uni-bl;
					color: #fff;
				}
			}
		}

		.title_recommend {
			display: flex;
			justify-content: center;
			color: $uni-bl;
			font-weight: bold;
			font-size: 28upx;
			padding: 26upx 0;

			.text_query_ng {
				display: inline-flex;
				align-items: center;
			}

			.text_query_ng::before {
				display: block;
				content: "";
				width: 14px;
				height: 1px;
				background-color: $uni-bl-t;
				position: relative;
				left: -20upx;
			}

			.text_query_ng::after {
				display: block;
				content: "";
				width: 14px;
				height: 1px;
				background-color: $uni-bl-t;
				position: relative;
				right: -20upx;
			}
		}
	}

	.rec_body_sy {
		background-color: #fff;
		border-radius: 12upx;
		padding: 10upx 26upx;

	}
</style>
