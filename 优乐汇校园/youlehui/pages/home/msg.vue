<template>
	<view class="msg">
		<view class="wc_img"><image src="../../static/img/wc.png" class="img" mode=""></image></view>
		<!-- 订单购买成功 -->
		<view v-if="pageType == 1">
			<view class="msg_t">
				<view class="title">购买成功</view>
				<view class="get_num">取餐码 : 2349</view>
			</view>
			<view class="bh160"></view>
			<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo('orders')">查看我的订单</view></view>
		</view>
		<!-- 评价成功 -->
		<view v-if="pageType == 2">
			<view class="msg_t">
				<view class="title">评价成功</view>
				
			</view>
			<view class="bh160"></view>
			<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo('orders')">返回订单</view></view>
		</view>
		<!-- 充值 -->
		<view v-if="pageType == 3">
			<view class="msg_t">
				<view class="title">已充值成功</view>
				
			</view>
			<view class="bh160"></view>
			<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo('money')">返回钱包</view></view>
		</view>
		
		<!-- 充值 -->
		<view v-if="pageType == 4">
			<view class="msg_t">
				<view class="title">提交成功</view>
				
			</view>
			<view class="bh160"></view>
			<view class="bg_btn_sub_sy"><view class="btn" @click="nativeTo('mine')">返回个人中心</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pageType:"",
			tabSel:""
		};
	},
	methods: {
		nativeTo(el) {
			if (el == 'orders') {
				uni.setStorageSync("tabSel",this.tabSel)
				uni.switchTab({
					url: '../orders/orders'
				});
			}else
			if(el == "money"){
				uni.navigateBack({
					delta:2
				})
			}else
			if(el == "mine"){
				uni.switchTab({
					url:"../mine/mine"
				})
			}
		}
	},
	onLoad(ph) {
		if (ph.pageType) {
			this.pageType = ph.pageType;
		}
		if(ph.tabSel){
			this.tabSel = ph.tabSel
		}
		if (this.pageType == 1) {
			uni.setNavigationBarTitle({
				title: '购买成功'
			});
		} else if (this.pageType == 2) {
			uni.setNavigationBarTitle({
				title: '评价成功'
			});
		} else if (this.pageType == 3) {
			uni.setNavigationBarTitle({
				title: '充值完成'
			});
		} else if (this.pageType == 4) {
			uni.setNavigationBarTitle({
				title: '提交成功'
			});
		}
	}
};
</script>

<style lang="less">
.msg {
	font-size: 36upx;
	color: #666;
	.wc_img {
		padding: 120upx 0 40upx;
		display: flex;
		justify-content: center;
		.img {
			width: 130upx;
			height: 130upx;
		}
	}
	.msg_t {
		text-align: center;
		.get_num {
			color: #f00;
			padding-top: 20upx;
		}
	}

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
}
</style>
