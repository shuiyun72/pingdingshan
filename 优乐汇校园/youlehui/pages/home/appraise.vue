<template>
	<view class="appraise">
		<view class="pt_p1">
			<view class="t1">订单已完成</view>
			<view class="t2">请评价一下吧</view>
		
			<view class="t3">评价订单</view>
			<view class="rate_bg_sy">
				<view class="rate_i_sy">
					<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(star)" @click="selStat(ra)"></view>
					<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 - star)"  @click="selStat(star+ra)"></view>
				</view>
				<!-- <view class="right">{{ star }}.0</view> -->
			</view>
		</view>
		<view class="mc26">
			<textarea v-model="textT" class="textarea_t" placeholder="请写下对订单的评价" />
		</view>
		<view class="bh160">
			
		</view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo">提交</view></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			star:1,
			textT:""
		};
	},
	methods:{
		calcNum(num) {
			let arrayL = [];
			for (let i = 0; i < num; i++) {
				arrayL.push(i);
			}
			return arrayL;
		},
		selStat(star){
			console.log(star)
			this.star = star+1
		},
		nativeTo(){
			uni.navigateTo({
				url:'./msg?pageType=2&tabSel=2'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.appraise {
	font-size: 28upx;
	color: #666;
	.bg_btn_sub_sy {
		padding: 0 52upx;
		.btn {
			background-color: #fec106;
			color: #fff;
			padding: 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
	.textarea_t{
		font-size: 28upx;
		padding: 26upx;
		border: 1upx solid #ccc;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10upx;
	}
	.rate_bg_sy {
		display: flex;
		.rate_i_sy {
			display: flex;
			justify-content: space-around;
			flex:1;
			.iconxingxing {
				color: #ccc;
				font-size: 50upx;
				
				&.yellow {
					color: #fec40b;
				}
			}
		}
		.right {
			color: #999;
			font-size: 28upx;
		}
	}
	.pt_p1{
		padding: 60upx 160upx;
		text-align: center;
		.t1{
			font-size: 44upx;
			margin-bottom: 20upx;
			color: #333;
		}
		.t2{
			border-bottom: 1upx dashed #999;
			padding-bottom: 40upx;
			margin-bottom: 40upx;
		}
		.t3{
			color: #999;
			margin-bottom: 30upx;
		}
	}
}
</style>
