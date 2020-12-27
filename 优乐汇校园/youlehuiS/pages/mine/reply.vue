<template>
	<view class="replay">
		<view class="texta">
			<textarea v-model="texta" placeholder="请填写回复~"  class="textarea_l"/>
			</view>
			<view class="bh160">
				
			</view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="next">确定</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				texta:""
			};
		},
		methods:{
			next(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="less">
	.replay{
		font-size: 28upx;
	}
	.texta{
		padding: 26upx;
		.textarea_l{
			background-color: #f0f0f0;
			font-size: 28upx;
			padding: 26upx;
			width: 100%;
			box-sizing: border-box;
			
		}
	}
.bg_btn_sub_sy {
		padding: 0 52upx;
		.btn {
			background-color: #FF3152;
			color: #fff;
			padding:16upx 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
</style>
