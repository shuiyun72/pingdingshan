<template>
	<view class="shop_store">
		<view class="header_t">
			<image :src="logoImg" class="h_img" mode="" @click="upImg('logo')"></image>
			<view class="text" v-if="noEdit">
				李小胖生鲜蔬菜
			</view>
			<view class="text"  v-if="!noEdit">
				上传批发商logo或门头照
			</view>
		</view>
		<view class="m26_title_sy">
			<view class="iconfont iconaishenghuo-shanghuzhongxin"> <text class="cc">批发商信息 </text></view>
		</view>
		<uni-list>
			<sy-list-item title="商家名称">
				<template v-slot:right="">
					<input :disabled="noEdit" type="text" v-model="shopName" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="商家地址" :showArrow="true">
				<template v-slot:right="">
					<view class="addr_input">
						{{shopAddress}}
					</view>
				</template>
			</sy-list-item>
			<sy-list-item title="商家宣传语">
				<template v-slot:right="">
					<input :disabled="noEdit" type="text" v-model="shopText" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			
			<sy-list-item title="商品详情图" :point="true" note="请确保证件完整,<text style='color:#FF8F3B'>编号</text>,<text style='color:#FF8F3B'>印章</text>,<text style='color:#FF8F3B'>文字</text>,照片均清晰可见 (一张)"></sy-list-item>
			<view class="photo_list">
				<view class="photo_btn" @click="upImg('zhengjian')" v-if="!noEdit">
					<image src="../../static/img/shangc.png" class="img_photp" mode=""></image>
					<view class="text">
						上传照片
					</view>
				</view>
				<view class="photo_btn" v-if="zhengjianImg != ''">
					<image :src="zhengjianImg" class="img_photp" mode=""></image>
					<view class="iconfont iconyduicuowushixin" @click="delList(index,'list2')"></view>
				</view>
			</view>
		</uni-list>
		<view class="m26_title_sy">
			<view class="iconfont iconpersonnone"> <text class="cc">店主信息 </text></view>
		</view>
		<uni-list>
			<sy-list-item title="店主姓名">
				<template v-slot:right="">
					<input :disabled="noEdit" type="text" v-model="userName" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="手机号码">
				<template v-slot:right="">
					<input :disabled="noEdit" type="text" v-model="userPhone" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			<sy-list-item title="身份证号码">
				<template v-slot:right="">
					<input :disabled="noEdit" type="text" v-model="userShenfen" maxlength="16" placeholder="请输入商品名称" class="addr_input" />
				</template>
			</sy-list-item>
			
			<sy-list-item title="身份证" :point="true" note="请确保证件完整,<text style='color:#FF8F3B'>上传正反两面</text>,身份证照片 (两张)"></sy-list-item>
			<view class="photo_list">
				<view class="photo_btn" @click="upImg('shenfen')" v-if="!noEdit">
					<image src="../../static/img/shenfz.png" class="img_photp" mode=""></image>
					<view class="text">
						上传身份证照片
					</view>
				</view>
				<view class="photo_btn" v-for="(item,index) in imgList2">
					<image :src="item" class="img_photp" mode=""></image>
					<view class="iconfont iconyduicuowushixin" @click="delList(index,'list2')"></view>
				</view>
			</view>
		</uni-list>
		<view class="sub_top m26">
			<button class="btn  ms" @click="next" v-if="noEdit">编辑店铺</button>
			<button class="btn  ms" @click="next" v-if="!noEdit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noEdit:true,
				logoImg:"../../static/img/ment.png",
				shopName:"李小胖生鲜蔬菜",
				shopAddress:"没权县小小王楼",
				shopText:"主营新鲜水果蔬菜保证品质",
				zhengjianImg:"",
				imgList2:[],
				userName:"张明成",
				userPhone:"13154567545",
				userShenfen:"411322128451242134"
			};
		},
		methods:{
			upImg(el) {
				if(!this.noEdit){
				let this_ = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						//因为有一张图片， 输出下标[0]， 直接输出地址
						var imgFiles = res.tempFilePaths[0]
						console.log(imgFiles)
						if (el == "logo") {
							this_.logoImg = imgFiles;
						}
						if (el == "zhengjian") {
							this_.zhengjianImg = imgFiles;
						}
						if (el == "shenfen") {
							this_.imgList2.push(imgFiles);
						}
					}
				})
				}
			},
			next(){
				if(this.noEdit){
					this.noEdit = false;
				}else{
					// this.noEdit = true;
					uni.reLaunch({
						url:"../home/msg?title=完成"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f0f0f0;
	}
	.m26_title_sy{
		margin: 0 26upx;
		padding: 20upx 0;
		.iconfont{
			font-size: 30upx;
			color: #666;
			.cc{
				margin-left: 10upx;
			}
		}
	}
.shop_store{
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
			width: 300upx;
			height: 160upx;
			margin:0 20upx 20upx 0;
			position: relative;
	
			.text {
				width: 300upx;
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
				width: 300upx;
				height: 160upx;
			}
		}
	}
	.addr_input{
		flex:1;
		text-align: right;
		font-size: 28upx;
		color: #777;
	}
	.header_t{
		background-color: $uni-bl;
		padding: 30upx 0;
		text-align: center;
		color: #f0f0f0;
		.h_img{
			width: 140upx;
			height: 140upx;
		}
		.text{
			font-size: 30upx;
			padding-top: 10upx;
		}
	}
	
}
</style>
