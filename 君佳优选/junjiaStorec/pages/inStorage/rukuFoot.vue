<template>
	<view class="ruku_foot">
		<view class="foot_detail">
			<image src="../../static/img/shangpt.png" class="foot_img" mode=""></image>
			<view class="right">
				<view class="t1">
					<view class="name">
						商品货号 :
					</view>
					<view class="text">
						1212121212
					</view>
				</view>
				<view class="t1">
					<view class="name">
						商品名称 :
					</view>
					<view class="text">
						1212121212
					</view>
				</view>
				<view class="t1">
					<view class="name">
						商品规格 :
					</view>
					<view class="text">
						1212121212
					</view>
				</view>
				<view class="t1">
					<view class="name">
						商品产地 :
					</view>
					<view class="text">
						1212121212
					</view>
				</view>
				<view class="t1">
					<view class="name">
						供应商名称 :
					</view>
					<view class="text">
						1212121212
					</view>
				</view>
			</view>
		</view>
		<view class="ctrl">
			<view class="title">
				入库操作
			</view>
			<input type="number" placeholder="请输入商品数量" v-model="num" class="f_input"/>
		</view>
		<view class="sub_top">
			<button class="btn  ms round" @click="rukuTrue">确认入库</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:"",
				
			};
		},
		methods:{
			rukuTrue(){
				let contentText = "这是一个模态弹窗\r\n这是一个模态弹窗";
				uni.showModal({
				    title: '确认入库',
				    content: contentText,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							uni.reLaunch({
								url:"./kuMsg"
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>
<style>
page{
	background-color: #f0f0f0;
}
</style>
<style lang="scss" scoped>
.ruku_foot{
	padding: 20upx 26upx;
	color: #666;
	font-size: 30upx;
	.sub_top {
		margin-top: 80upx;
		padding: 0 30upx;
		.btn{
			background-color: $uni-bl;
			color: #fff;
		}
	}
	.foot_detail{
		display: flex;
		background-color: #fff;
		align-items: center;
		padding: 20upx 0;
		border-radius: 20upx;
		margin-bottom: 20upx;
		.foot_img{
			width: 200upx;
			height: 200upx;
			flex-shrink: 0;
		}
		.right{
			margin-left: 30upx;
			.t1{
				display: flex;
				.name{
					width: 180upx;
					flex-shrink: 0;
				}
			}
		}
	}
	.ctrl{
		padding: 20upx 26upx 100upx;
		background-color: #fff;
		.title{
			font-size: 32upx;
			margin-bottom: 60upx;
		}
		.f_input{
			background-color: #f0f0f0;
			padding: 20upx;
		}
	}
}
</style>
