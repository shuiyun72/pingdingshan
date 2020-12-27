<template>
	<view class="add_foot">
		<uni-list>
			<sy-list-item title="商品分类" :showArrow="true" :point="true" @click="handleClassify" :clickable="true">
				<template v-slot:right="">
					<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray"
					 class="picker_cc">
						<view class="peisong_timje" :class="calcText == '选择商品分类'?'isno':''">{{calcText}}</view>
					</picker>
				</template>
			</sy-list-item>
			<sy-list-item title="商品名称" :point="true">
				<template v-slot:right="">
					<input type="text" v-model="footName" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="商品售价" :point="true">
				<template v-slot:right="">
					<input type="text" v-model="footPrice" maxlength="6" placeholder="请输入商品售价(元)" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="商品库存" :point="true">
				<template v-slot:right="">
					<input type="text" v-model="footNum" maxlength="6" placeholder="请输入商品库存数量" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="商品标语" :point="true">
				<template v-slot:right="">
					<input type="text" v-model="footTitle" maxlength="16" placeholder="请输入商品标语,最多16个字" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="商品轮播主图" :point="true" note="最低3张最多6张,图片为等比例大小尺寸(750x750)"></sy-list-item>
			<view class="photo_list">
				<view class="photo_btn t1" @click="upImg('list1')">
					<image src="../../static/img/shangcxqt.png" class="img_photp" mode=""></image>
					<view class="text">
						上传主图
					</view>
				</view>
				<view class="photo_btn" v-for="(item,index) in imgList1">
					<image :src="item" class="img_photp" mode=""></image>
					<view class="iconfont iconyduicuowushixin" @click="delList(index,'list1')"></view>
				</view>
			</view>
			<sy-list-item title="商品详情图" :point="true" note="最低3张,图片为等比例大小尺寸(750x750)"></sy-list-item>
			<view class="photo_list">
				<view class="photo_btn" @click="upImg('list2')">
					<image src="../../static/img/shangcxqt.png" class="img_photp" mode=""></image>
					<view class="text">
						上传详情图
					</view>
				</view>
				<view class="photo_btn" v-for="(item,index) in imgList2">
					<image :src="item" class="img_photp" mode=""></image>
					<view class="iconfont iconyduicuowushixin" @click="delList(index,'list2')"></view>
				</view>
			</view>
		</uni-list>
		<view class="sub_top m26">
			<button class="btn  ms" @click="next">提交</button>
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
				footName: "",
				footPrice: "",
				footNum: "",
				footTitle: "",
				multiIndex: [0, 0, -1],
				multList1: [],
				multList2: [],
				multList3: [],
				mult1: [],
				mult2: [],
				mult3: [],
				imgList1: [],
				imgList2: [],
				phFootId:-1
			};
		},
		onLoad(ph) {
			if(ph.footId){
				uni.setNavigationBarTitle({
					title: "编辑商品"
				})
				console.log("来自编辑")
			}
		},
		onShow() {
			this.clacMut1();
		},
		computed: {
			multiArray() {
				return [this.mult1, this.mult2, this.mult3]
			},
			calcText() {
				console.log(this.multiIndex)
				if (this.multiArray[0][this.multiIndex[0]] && this.multiArray[1][this.multiIndex[1]] && this.multiArray[2][this.multiIndex[
						2]]) {
					return this.multiArray[0][this.multiIndex[0]] + "-" + this.multiArray[1][this.multiIndex[1]] + "-" + this.multiArray[
						2][this.multiIndex[2]]
				} else {
					return "选择商品分类"
				}
			}
		},
		methods: {
			handleClassify() {
				console.log("1212")
			},
			next(){
				let dataL = {
					footName:this.footName,
					footPrice: this.footPrice,
					footNum: this.footNum,
					footTitle:this.footTitle,
					calcText:this.calcText,
					imgList1:this.imgList1,
					imgList2:this.imgList2
				}
				console.log(dataL)
				uni.navigateBack({
					delta:1
				})
			},
			delList(index, el) {
				let this_ = this;
				if (el == "list1") {
					this_.imgList1.splice(index, 1);
					this_.imgList1 = this_.imgList1;
					console.log(this_.imgList1)
				}
				if (el == "list2") {
					this_.imgList2.splice(index, 1);
					this_.imgList2 = this_.imgList2;
				}
			},
			upImg(el) {
				let this_ = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						var imgFiles = res.tempFilePaths[0]
						console.log(imgFiles)
						if (el == "list1") {
							this_.imgList1.push(imgFiles);
						}
						if (el == "list2") {
							this_.imgList2.push(imgFiles);
						}
						// 上传图片
						// 做成一个上传对象
						// var uper = uni.uploadFile({
						// 	// 需要上传的地址
						// 	url: 'http://demo.hcoder.net/index.php?c=uperTest',
						// 	// filePath  需要上传的文件
						// 	filePath: imgFiles,
						// 	name: 'file',
						// 	success(res1) {
						// 		// 显示上传信息
						// 		console.log(res1)
						// 	}
						// });
						// uper.onProgressUpdate(function(res) {
						// 	// 进度条等于 上传到的进度
						// 	_self.percent = res.progress
						// 	console.log('上传进度' + res.progress)
						// 	console.log('已经上传的数据长度' + res.totalBytesSent)
						// 	console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend)
						// })
					}
				})
			},
			async clacMut1() {
				this.$getApi("/App/Goods/getCategory", {}, res1 => {
					console.log(res1.data, "获取一级菜单")
					this.multList1 = res1.data;
					let mult1 = []
					_.map(this.multList1, item => {
						mult1.push(item.name)
					})
					this.mult1 = mult1;
					this.multiArray[this.multiIndex[0]] = mult1;
					this.clacMut2(this.multList1[this.multiIndex[0]].id)
				})
			},
			async clacMut2(id) {
				this.$getApi("/App/Public/getNextCategory", {
					id
				}, res2 => {
					console.log(res2.data.data_list, "获取2级菜单")
					this.multList2 = res2.data.data_list;

					let mult2 = []
					_.map(this.multList2, item => {
						mult2.push(item.name)
					})
					this.multiArray[1] = mult2;
					this.mult2 = mult2

					this.clacMut3(this.multList2[this.multiIndex[1]].name)
				})
			},
			async clacMut3(id) {
				this.$getApi("/App/Goods/getGoodsListByCate", {
					keyword: id,
					p: 1
				}, res3 => {
					console.log(res3.data, "获取3级菜单")
					this.multList3 = res3.data;
					let mult3 = []
					_.map(this.multList2, item => {
						mult3.push(item.name)
					})
					this.multiArray[2] = mult3;
					this.mult3 = mult3;
					console.log("3333")

				})
			},
			bindMultiPickerColumnChange: function(el) {
				console.log(el)
				if (el.detail.column == 0) {
					this.multiIndex[0] = el.detail.value;
					this.multiIndex.splice(1, 1, 0)
					this.multiIndex.splice(2, 1, 0)
					this.clacMut2(this.multList1[el.detail.value].id)

				}
				if (el.detail.column == 1) {
					this.multiIndex[1] = el.detail.value;
					this.multiIndex.splice(2, 1, 0)
					this.clacMut3(this.multList2[el.detail.value].name)
				}
				if (el.detail.column == 2) {
					this.multiIndex[2] = el.detail.value;
					this.multiIndex.splice(2, 1, el.detail.value)
				}
				this.$forceUpdate()
			},
		}
	}
</script>

<style lang="scss">
	.add_foot {
		.sub_top {
			margin-top: 60upx;
			padding-bottom: 80upx;
			.btn{
				background-color: $uni-bl;
				color: #fff;
			}
		}
		.photo_list {
			display: flex;
			flex-wrap: wrap;
			padding: 20upx 0upx 20upx 26upx;

			.photo_btn {
				width: 160upx;
				height: 160upx;
				margin:0 20upx 20upx 0;
				position: relative;

				.text {
					width: 160upx;
					position: absolute;
					text-align: center;
					bottom: 30upx;
					color: #999;
					transform: scale(.9);
				}

				.iconyduicuowushixin {
					position: absolute;
					top: 0;
					right: 0;
					color: $uni-bl;
				}

				.img_photp {
					width: 160upx;
					height: 160upx;
				}
			}
		}

		.picker_cc {
			flex: 1;
		}

		.addr_input {
			color: $uni-bl;
			font-size: 26upx;
			flex: 1;
		}

		.peisong_timje {
			color: $uni-bl;
			font-size: 26upx;

			&.isno {
				color: #777;
			}
		}
	}
</style>
