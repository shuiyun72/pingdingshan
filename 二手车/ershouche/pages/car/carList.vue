<template>
	<view class="home_car">
		<view class="position_r">
			<view class="screen_box">
				<view class="screen_c tit">
					筛选 :
				</view>
				<view class="screen_c" v-for="(item,index) in screenBox" @click="showPopup(item,index)">
					<view class="">
						{{item.name}}
					</view>
					<view class="iconfont iconai-arrow-down"></view>
				</view>
			</view>
			<view class="screen_result" v-if="resultList.length > 0 ">
				<view class="show_list">
					<view class="result" v-for="(ritem,index) in resultList" @click="delScn(ritem,index)">
						<view class="iconfont iconguanbi"></view>
						<view class="n_w">
							{{ritem.name}}
						</view>
					</view>
				</view>
				<view class="re_new" @click="chongzhi">
					重置
				</view>
			</view>
		</view>
		<view class="pay_cars">
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
			</view>
		</view>
		<uni-popup type="center" ref="screenPop">
			<view class="popup_s">
				<view class="popup_title">
					<view class="q1" @click="popQueren">
						确定
					</view>
					<view class="q2" @click="popQuxiao">
						取消
					</view>
				</view>
				<view class="popup_body">
					<radio-group @change="radioChange">
						<label class="radio_select" v-for="(item, index) in selectArray">
							<view>
								<radio :value="item.name" :checked="index === selectIndex" class="radio_sc"/>
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carPaifangArray: [{
					name: '国三'
				}, {
					name: '国四'
				}, {
					name: '国五'
				},{
					name: '国六'
				}],
				carBXArray: [{
					name: '带强险'
				}, {
					name: '带商业险'
				}, {
					name: '无保险'
				}],
				carNewArray: [{
					name: '最新发布'
				}, {
					name: '由低到高(价格)'
				}, {
					name: '由高到低(价格)'
				}],
				//动态选项集
				selectArray:[],
				//记录选中index
				selectArrayI:[],
				//当前选中index
				selectArrayIndex:-1,
				//选中结果
				selectIndex:-1,
				//选中结果集
				resultList: [],
				screenBox: [
					{
						name: "排行",
						num: 0
					},
					{
						name: "出厂年份",
						num: 0
					},
					{
						name: "排放标准",
						num: 0
					},{
						name: "品牌",
						num: 0
					},
					{
						name: "挂车类型",
						num: 0
					},
					{
						name: "保险",
						num: 0
					}
				],
				carList: [{
						carShopIndex: 0,
						pinpai: "东风",
						licheng: 80000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt2.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					},
					{
						carShopIndex: 0,
						pinpai: "朗逸",
						licheng: 60000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt5.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					},
					{
						carShopIndex: 0,
						pinpai: "宝马",
						licheng: 40000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt1.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					},
					{
						carShopIndex: 0,
						pinpai: "东风",
						licheng: 80000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt2.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					},
					{
						carShopIndex: 0,
						pinpai: "朗逸",
						licheng: 60000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt5.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					},
					{
						carShopIndex: 0,
						pinpai: "宝马",
						licheng: 40000,
						multiIndex: [10, 5],
						mali: "30",
						carPaifangIndex: 2,
						fadongji: "好发动机",
						carRYIndex: 0,
						carQDIndex: 0,
						carBXIndex: 0,
						miaoshu: "刚开了1个月,出售",
						carGCIndex: 0,
						guachechangdu: "20",
						guachekuandu: "2",
						guachegaodu: "2",
						carZIndex: 0,
						jiage: "50",
						imageList: ['dt1.jpg', 'img2.png', 'img3.png', 'img4.png', 'img5.png']
					}
				],
				thisContent:""
			}
		},
		mounted() {

		},
		onShow() {
			this.$getApi("/api/shop/carpinpailist", {}, res => {
				console.log(res)
				
			})
		},
		methods: {
			popQueren(){
				console.log(this.selectArrayI,this.selectArrayIndex)
				let hasIndex = _.indexOf(this.selectArrayI,this.selectArrayIndex)
				console.log(hasIndex)
				if(hasIndex > -1){
					this.selectArrayI.splice(hasIndex,1)
					this.resultList.splice(hasIndex,1)
					console.log("001",this.resultList)
					this.resultList.push({
						name:this.thisContent
					})
					console.log("002",this.resultList)
					this.selectArrayI.push(this.selectArrayIndex);
					this.$refs.screenPop.close();
				}else{
					this.resultList.push({
						name:this.thisContent
					})
					this.selectArrayI.push(this.selectArrayIndex);
					this.$refs.screenPop.close();
				}
			},
			popQuxiao(){
				this.$refs.screenPop.close();
			},
			radioChange(el){
				console.log(el)
				this.thisContent = el.detail.value;
			},
			showPopup(item,index) {
				console.log(item)
				this.selectArrayIndex = -1;
				this.selectIndex = -1;
				this.selectArrayIndex = index;
				if(item.name == "排行"){
					this.selectArray = this.carNewArray;
					this.$refs.screenPop.open();
				}else
				if(item.name == "排放标准"){
					this.selectArray = this.carPaifangArray;
					this.$refs.screenPop.open();
				}else
				if(item.name == "保险"){
					this.selectArray = this.carBXArray;
					this.$refs.screenPop.open();
				}
			},
			delScn(item, index) {
				console.log(index)
				this.resultList.splice(index, 1);
				this.selectArrayI.splice(index, 1);
				console.log(this.resultList,this.selectArrayI)
			},
			chongzhi(){
				this.selectArrayIndex = -1;
				this.selectIndex = -1;
				this.selectArrayI = [];
				this.resultList = [];
			},
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
			showPopupC() {
				// this.$refs.selectCar.open() 
				uni.navigateTo({
					url: "../car/carList"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.home_car {
		color: #333;
		position:relative;
		
		.popup_s{
			background-color: #fff;
			width: 750upx;
			height: 60vh;
			.popup_title{
				display: flex;
				justify-content: space-between;
				padding: 20upx 26upx 10upx;
				font-size: 32upx;
				.q1{
					color: $uni-bl;
				}
				.q2{
					color: $uni-red;
				}
			}
			.popup_body{
				padding: 0 26upx;
				height: calc(60vh - 66upx);
				overflow-y: auto;
				.radio_select{
					display: flex;
					padding: 20upx 0upx;
					align-items: center;
					.radio_sc{
						transform: scale(.8);
					}
					&+.radio_select{
						border-top: 1upx solid #ccc;
					}
				}
			}
		}
		.position_r {
			background-color: #fff;
			z-index: 100;
			padding-bottom: 10upx;
		}

		.screen_result {
			display: flex;
			justify-content: space-between;
			padding-left: 26upx;

			.show_list {
				display: inline-flex;
				width: 600upx;
				overflow-x: auto;

				.result {
					display: inline-flex;
					background-color: #333;
					color: #fff;
					align-items: baseline;
					justify-content: center;
					margin-right: 8upx;
					border-radius: 6upx;
					padding: 0 0 0 4upx;

					.iconguanbi {
						font-size: 28upx;
						margin-right: 4upx;
						transform: scale(.8);
					}

					.n_w {
						width: 140upx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						text-align: center;

					}
				}
			}

			.re_new {
				width: 100upx;
			}
		}

		.screen_box {
			display: flex;
			padding: 0 20upx;
			flex-flow: row wrap;

			.screen_c {
				border: 1upx solid #ccc;
				color: #666;
				border-radius: 6upx;
				padding: 2upx 16upx 4upx;
				margin-right: 20upx;
				margin-bottom: 16upx;
				display: inline-flex;
				align-items: center;

				&.tit {
					border: 1upx solid transparent;
					padding: 2upx 10upx 4upx 0upx;
					font-weight: bold;
					color: #666;
				}

				.iconai-arrow-down {
					font-size: 28upx;
					transform: scale(.8);
					color: #999;
					margin-left: 6upx;
					position: relative;
					top: 4upx;
				}
			}
		}

		.popup_sel {
			background-color: #fff;
		}
		.pay_cars {
			padding: 10upx 26upx;
			height: calc(100vh - 300upx);
			overflow-y: auto;
			.car_title {
				display: flex;
				justify-content: space-between;
				padding-bottom: 20upx;
				align-items: baseline;

				.l {
					font-weight: bold;
					font-size: 34upx;
					color: #333;
				}

				.r {
					color: $uni-bl;
				}
			}

			.car_info {
				margin-bottom: 30upx;
				padding: 30upx 10upx 10upx 0upx;
				border-radius: 10upx;

				&.car_info {
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

						.ac {
							color: #666;
						}

						.ell {
							flex: 1;
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

							.num {
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
</style>
