<template>
	<view>
		<uni-list>
			<view class="">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" @touchstart="touchIt($event,'canvasColumn')"></canvas>
			</view>
			<uni-list-item title="发布类型">
				<template v-slot:right="">
					<picker @change="bindPickerChangeFB" :value="carShopIndex" :range="carShopArray" range-key="name" :disabled="isEdit">
						<view class="uni-input">{{carShopArray[carShopIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="出售价格" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="jiage" placeholder="请输入出售价格( 万元 )" class="add_car_input" :disabled="isEdit?(isEditMoney?false:true):false" />
				</template>
			</uni-list-item>
			<uni-list-item title="车辆品牌" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="pinpai" placeholder="请输入车辆品牌" class="add_car_input" :disabled="isEdit" />
				</template>
			</uni-list-item>
			<uni-list-item title="行驶里程" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="licheng" placeholder="请输入行驶里程( 公里 )" class="add_car_input" :disabled="isEdit" />
				</template>
			</uni-list-item>
			<!-- 挂车类型 -->
			<view v-if="carShopIndex == 1">
				<uni-list-item title="挂车类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeGC" :value="carGCIndex" :range="carGCArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carGCArray[carGCIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="挂车长度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachechangdu" placeholder="请输入长度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="外廓宽度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachekuandu" placeholder="请输入外廓宽度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="车厢高度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachegaodu" placeholder="请输入车厢高度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="轴类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeZ" :value="carZIndex" :range="carZArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carZArray[carZIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
			</view>
			<!-- 挂车类型 end-->

			<!-- 6.8米单车 -->
			<view v-if="carShopIndex == 2">
				<uni-list-item title="车厢类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCX" :value="carCXIndex" :range="carCXArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCXArray[carCXIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
			</view>

			<!-- 6.8米单车 end-->
			<!-- 7.7米单车 -->
			<view v-if="carShopIndex == 3">
				<uni-list-item title="车桥类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCQ" :value="carCQIndex" :range="carCQArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCQArray[carCQIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="车厢类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCX" :value="carCXIndex" :range="carCXArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCXArray[carCXIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="挂车长度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachechangdu" placeholder="请输入长度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="外廓宽度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachekuandu" placeholder="请输入外廓宽度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="车厢高度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachegaodu" placeholder="请输入车厢高度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
			</view>

			<!-- 7.7米单车 end-->
			<!-- 9.6米单车 -->
			<view v-if="carShopIndex == 4">
				<uni-list-item title="车桥类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCQ" :value="carCQIndex" :range="carCQArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCQArray[carCQIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="车厢类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCX" :value="carCXIndex" :range="carCXArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCXArray[carCXIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="挂车长度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachechangdu" placeholder="请输入长度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="外廓宽度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachekuandu" placeholder="请输入外廓宽度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="车厢高度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachegaodu" placeholder="请输入车厢高度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
			</view>
			<!-- 9.6米单车 end-->
			<!-- 手续 -->
			<view v-if="carShopIndex == 5">
				<uni-list-item title="车桥类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCQ" :value="carCQIndex" :range="carCQArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCQArray[carCQIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="车厢类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeCX" :value="carCXIndex" :range="carCXArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carCXArray[carCXIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
				<uni-list-item title="挂车长度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachechangdu" placeholder="请输入长度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="外廓宽度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachekuandu" placeholder="请输入外廓宽度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="车厢高度" :showArrow="false">
					<template v-slot:right="">
						<input type="text" v-model="guachegaodu" placeholder="请输入车厢高度(米)" class="add_car_input" :disabled="isEdit" />
					</template>
				</uni-list-item>
				<uni-list-item title="轴类型">
					<template v-slot:right="">
						<picker @change="bindPickerChangeZ" :value="carZIndex" :range="carZArray" range-key="name" :disabled="isEdit">
							<view class="uni-input">{{carZArray[carZIndex].name}}</view>
						</picker>
					</template>
				</uni-list-item>
			</view>
			<!-- 手续 end-->
			<uni-list-item title="出厂年月">
				<template v-slot:right="">
					<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray"
					 :disabled="isEdit">
						<view class="uni-input">{{multiArray[0][multiIndex[0]]}}年{{multiArray[1][multiIndex[1]] < 10 ? '0'+multiArray[1][multiIndex[1]]:multiArray[1][multiIndex[1]]}}月</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="马力" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="mali" placeholder="请输入马力" class="add_car_input" :disabled="isEdit" />
				</template>
			</uni-list-item>
			<uni-list-item title="排放标准">
				<template v-slot:right="">
					<picker @change="bindPickerChangePF" :value="carPaifangIndex" :range="carPaifangArray" range-key="name" :disabled="isEdit">
						<view class="uni-input">{{carPaifangArray[carPaifangIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="发动机" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="fadongji" placeholder="请输入发动机" class="add_car_input" :disabled="isEdit" />
				</template>
			</uni-list-item>
			<uni-list-item title="燃油类型">
				<template v-slot:right="">
					<picker @change="bindPickerChangeRY" :value="carRYIndex" :range="carRYArray" range-key="name" :disabled="isEdit">
						<view class="uni-input">{{carRYArray[carRYIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="驱动">
				<template v-slot:right="">
					<picker @change="bindPickerChangeQD" :value="carQDIndex" :range="carQDArray" range-key="name" :disabled="isEdit">
						<view class="uni-input">{{carQDArray[carQDIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="保险">
				<template v-slot:right="">
					<picker @change="bindPickerChangeBX" :value="carBXIndex" :range="carBXArray" range-key="name" :disabled="isEdit">
						<view class="uni-input">{{carBXArray[carBXIndex].name}}</view>
					</picker>
				</template>
			</uni-list-item>
			<uni-list-item title="车辆照片" point="true" rightText="" :showArrow="false"></uni-list-item>
			<view class="photo_list">
				<view class="img_p" @click="chooseImage">
					<image src="../../static/img/shangczp.png" mode="widthFix" class="img"></image>
				</view>
				<block v-for="(image,index) in imageList" :key="index">
					<view class="img_p">
						<image class="img_show" :src="image" :data-src="image" @tap="previewImage" mode="widthFix"></image>
						<view class="iconfont iconshanchu" @click="deleteImg(index)" v-if="!isEdit"></view>
					</view>
				</block>
				<view class="img_p" v-if="oldImg">
					<image class="img" :src="httpp+oldImg" mode="widthFix"></image>
				</view>
			</view>

			<uni-list-item title="车辆描述" :showArrow="false">
				<template v-slot:right="">
					<textarea v-model="miaoshu" placeholder="请输入车辆描述信息" class="add_car_textarea" :disabled="isEdit" />
					</template>
			</uni-list-item>
		</uni-list>
		<view class="sub_top">
			<button class="btn blue ms round" @click="submitFabu('fabu')" v-if="!isEdit">确定发布</button>
		</view>
		<view class="sub_top" v-if="isEditMoney && isEdit && user == 1">
			<button class="btn blue ms round" @click="submitFabu('edit')" >确定修改</button>
		</view>
		<view class="sub_top" v-if="!isEditMoney && isEdit && user == 1">
			<button class="btn blue ms round" @click="editCarBtn" >修改出售金额</button>
		</view>
		<view class="sub_top" v-if="!isEditMoney && isEdit && user == 2">
			<button class="btn blue ms round" @click="callUser" >联系卖家</button>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				isEdit:false,
				isEditMoney:false,
				carShop: "牵引车",
				carShopArray: [{
					name: '牵引车头'
				}, {
					name: '挂车'
				}, {
					name: '6.8米单车'
				}, {
					name: '7.7米单车'
				}, {
					name: '9.6米单车'
				}, {
					name: '手续'
				}],
				jiage:"",
				licheng:"",
				carShopIndex: 0,
				pinpai:"",
				multiArray: [
					['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
					['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',]
				],
				multiIndex: [5, 0],
				mali:"",
				carPaifangArray: [{
					name: '国三'
				}, {
					name: '国四'
				}, {
					name: '国五'
				}, {
					name: '国六'
				}],
				carPaifangIndex:0,
				fadongji:"",
				carRYArray: [{
					name: '油车'
				}, {
					name: '天然气车'
				}],
				carRYIndex:0,
				carQDArray: [{
					name: '单驱'
				}, {
					name: '双驱'
				}],
				carQDIndex:0,
				carBXArray: [{
					name: '带强险'
				}, {
					name: '带商业险'
				}, {
					name: '无保险'
				}],
				carBXIndex:0,
				miaoshu:"",
				imageList: [],
				upimageList:[],
				oldImg:"",
				//挂车
				carGCArray:[{
					name: '仓栏式直板'
				}, {
					name: '仓栏式高低板'
				}, {
					name: '下翻门直板'
				}, {
					name: '下翻门高低板'
				}, {
					name: '60标箱'
				}, {
					name: '60标箱侧翻'
				}, {
					name: '后翻挂'
				}, {
					name: '爬梯挂'
				}, {
					name: '平板式'
				}, {
					name: '厢式'
				}, {
					name: '集装箱'
				}, {
					name: '骨架'
				}],
				carGCIndex:0,
				guachechangdu:"",
				guachekuandu:"",
				guachegaodu:"",
				carZArray:[{
					name: '厂轴'
				}, {
					name: '富华'
				}, {
					name: 'WBP'
				}, {
					name: '其他'
				}],
				carZIndex:0,
				//6.8米单车
				carCXArray:[{
					name: '高栏'
				}, {
					name: '箱车'
				}, {
					name: '平板'
				}, {
					name: '飞翼'
				}, {
					name: '拉猪车'
				}, {
					name: '其他'
				}],
				carCXIndex:0,
				//7.7米单车
				carCQArray:[{
					name: '前四后四'
				}, {
					name: '前四后八'
				}],
				carCQIndex:0,
				cWidth: '',
				cHeight: '',
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 30, //x轴单屏数据密度

			};
		},
		onReady() {
			// this.getServerData();
			_self.fillData();
		},
		onLoad(ph) {
			if(ph.carInfo){
				uni.setNavigationBarTitle({
					title: "车辆详情"
				})
				this.isEdit = true;
				let carInfo = JSON.parse(ph.carInfo);
				console.log(carInfo)
				this.carShopIndex =carInfo.carShopIndex;
				this.pinpai=carInfo.pinpai;
				this.multiIndex=carInfo.multiIndex;
				this.mali=carInfo.mali;
				this.licheng = carInfo.licheng+' 公里';
				this.carPaifangIndex=carInfo.carPaifangIndex;
				this.fadongji=carInfo.fadongji;
				this.carRYIndex=carInfo.carRYIndex;
				this.carQDIndex=carInfo.carQDIndex;
				this.carBXIndex=carInfo.carBXIndex;
				this.miaoshu=carInfo.miaoshu;
				this.carGCIndex=carInfo.carGCIndex;
				this.guachechangdu=carInfo.guachechangdu;
				this.guachekuandu=carInfo.guachekuandu;
				this.guachegaodu=carInfo.guachegaodu;
				this.carZIndex=carInfo.carZIndex;
				this.imageList=carInfo.imageList;
				this.jiage=carInfo.jiage+'万元';
			}
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(400);
		
			//this.fillData(Data);
		},
		computed:{
			moneyData(){
				if(this.carShopIndex == 0){
					return [15.5,25,100,61,52,30]
				}else
				if(this.carShopIndex == 1){
					return [100,61,52,15.5,25,30]
				}else
				if(this.carShopIndex == 2){
					return [75.5,125,90,61,52,30]
				}else
				if(this.carShopIndex == 3){
					return [65.5,25,70,61,52,30]
				}else
				if(this.carShopIndex == 4){
					return [45,25,30,81,52,30]
				}else
				if(this.carShopIndex == 5){
					return [100,61,52,15.5,25,30]
				}
			},
			user(){
				return this.$store.state.user;
			}
		},
		methods: {
			callUser(){
				uni.showModal({
					title: '提示',
					content: '卖家暂无信息?',
					success: function(res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			editCarBtn(){
				this.isEditMoney = true;
			},
			submitFabu(el){
				if(el=='fabu'){
				uni.showModal({
					title: '提示',
					content: '发布成功,是否返回首页?',
					success: function(res) {
						if (res.confirm) {
							uni.switchTab({
								url:"../home/home"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				}else
				if(el=='edit'){
					uni.showModal({
						title: '提示',
						content: '修改成功,是否返回首页?',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url:"../home/home"
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
				
			},
			bindPickerChangeFB: function(e) {
				
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carShopIndex = e.detail.value;
				_self.fillData()
			},
			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value;
				if(e.detail.column == 0){
					this.multiIndex.splice(e.detail.value, this.multiIndex[1])
				}else
				if(e.detail.column == 1){
					this.multiIndex.splice( this.multiIndex[1],e.detail.value)
				}
				this.$forceUpdate()
			},
			bindPickerChangePF: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carPaifangIndex = e.detail.value
			},
			bindPickerChangeRY: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carRYIndex = e.detail.value
			},
			bindPickerChangeQD: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carQDIndex = e.detail.value
			},
			bindPickerChangeBX: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carBXIndex = e.detail.value
			},
			bindPickerChangeZ: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carZIndex = e.detail.value
			},
			bindPickerChangeCX: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carCXIndex = e.detail.value
			},
			bindPickerChangeGC: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carGCIndex = e.detail.value
			},
			bindPickerChangeCQ: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.carCQIndex = e.detail.value
			},
			chooseImage(){
				if(this.isEdit == false){
				let this_ = this;
				this_.isTrueImg = false;
				let token = 'ccc' ;	
				uni.chooseImage({
					count: 5,
					sizeType:['copressed'],
				    success: (res) => {
				        this.imageList = this.imageList.concat(res.tempFilePaths);
						for(let i=0;i<res.tempFilePaths.length;i++){
							uni.uploadFile({
								url:this_.$apiUrl + '/api/common/uploadimg',
								filePath: res.tempFilePaths[i],
								name: 'file',
								success(res1) {
									console.log(res1)
									this_.$msg("图片上传成功")
									// 显示上传信息
									this_.upimageList.push(res1.data)
									this_.isTrueImg = true;
								}
							});
						}
				    }
				});
				}
			},
			previewImage: function(e) {
				
				var current = e.target.dataset.src;
				let imageListShow = [];
				
				for(let i=0;i<this.imageList.length;i++){
					imageListShow.push(this.imageList[i]);
				}
				uni.previewImage({
					current: current,
					urls: imageListShow
				})
			},
			deleteImg(i) {
				this.imageList.splice(i, 1);
				this.upimageList.splice(i, 1);
				if(this.upimageList.length > 0){
					this.isTrueImg  = true;
				}else{
					this.isTrueImg = false;
				}
			},
			getServerData() {
				// uni.showLoading({
				// 	title: "正在加载数据..."
				// })
				// uni.request({
				// 	url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
				// 	data: {},
				// 	success: function(res) {
				// 		console.log(res.data)
				// 		_self.fillData(res.data);
				// 	},
				// 	fail: () => {
				// 		_self.tips = "网络错误，小程序端请检查合法域名";
				// 	},
				// 	complete() {
				// 		uni.hideLoading();
				// 	}
				// });
			},
			showColumn(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						format: (val) => {
							return val.toFixed(0) + '万元'
						}
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
			},
			fillData(data) {
				this.serverData = data;
				this.tips = "";
				let Column = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = ['2012','2013','2014','2015','2016','2017'];
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Column.series = [{
					color: "#1890ff",
					data:_self.moneyData,
					name: "市场价格参照图",
					pointShape: "circle",
					type: "column",
					legendShape: "rect"
				}];
				//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
				this.showColumn("canvasColumn", Column);
			},
			touchIt(e, id) {
				canvasObj[id].touchLegend(e, {
					animation: false
				});
				// canvasObj[id].showToolTip(e, {
				// 	format: function(item, category) {
				// 		if (typeof item.data === 'object') {
				// 			return category + ' ' + item.name + ':' + item.data.value
				// 		} else {
				// 			return category + ' ' + item.name + ':' + item.data
				// 		}
				// 	}
				// });
			},
		}
	}
</script>

<style lang="scss">
.add_car_input {
		font-size: 26upx;
		text-align: right;
		color: #333;
	}
.add_car_textarea{
	font-size: 26upx;
	color: #333;
	width: 500upx;
}
.photo_list {
		padding: 20upx 26upx;
		display: flex;
		flex-wrap: wrap;

		.img_p {
			margin: 0 30upx 30upx 0;
			position: relative;

			.iconshanchu {
				position: absolute;
				top: -16upx;
				right: -16upx;
				color: $uni-or;
			}
			.img_show{
				width: 140upx;
				height: 140upx;
			}
			.img {
				width: 140upx;
				height: 140upx;
			}
		}
	}
	.charts {
		width: 750rpx;
		height: 400rpx;
		background-color: #FFFFFF;
	}
	.sub_top {
		padding: 20upx 26upx 100upx;
	}
</style>