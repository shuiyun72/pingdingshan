<template>
	<view class="mine" :style="{ 'padding-top': menuVX.top + 'px' }">
		<view class="">
			<view class="header_title" :style="{ 'line-height': menuVX.height + 'px' }">个人中心</view>
			<view class="user_info">
				<image src="../../static/img/mine/brtx.png" class="user_img" mode=""></image>
				<view class="name">长空无极</view>
			</view>
		</view>
		<view class="mine_body">
			<view class="mine_nav">
				<view class="item" v-for="item in mineNav" @click="navTo(item)">
					<image :src="'../../static/img/mine/' + item.img" mode="" class="img"></image>
					<view class="text">{{ item.text }}</view>
				</view>
			</view>
			<view class="change_list_box">
				<view class="m_item" v-for="item in changeList" @click="navTo(item)">
					<view class="l">
						<text class="iconfont" :class="item.icon"></text>
						{{item.text}}
					</view>
					<view class="iconfont iconjiantou"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			menuVX: {
				bottom: 56,
				height: 32,
				left: 223,
				right: 310,
				top: 0,
				width: 87
			},
			mineNav: [{ img: 'qb.png', text: '我的钱包', url: 'wdqb' }, { img: 'sc.png', text: '我的收藏', url: 'wdsc' }, { img: 'pl.png', text: '我的评价', url: 'wdpj' }],
			changeList:[
				{icon:"iconshouji1",text:"更换手机",url:"ghsj"},
				{icon:"iconbianji",text:"意见反馈",url:"yjfk"},
				{icon:"icontuandui1",text:"关于我们",url:"gywm"},
				{icon:"iconkefu",text:"联系客服",url:"lxkf"}
			]
		};
	},
	mounted() {
		// #ifdef MP
		this.menuVX = this.menu;
		console.log(this.menu);
		// #endif
	},
	methods: {
		navTo(item) {
			console.log(item);
			if(item.url == 'wdqb'){
				uni.navigateTo({
					url:'./money'
				})
			}else
			if(item.url == 'wdsc'){
				uni.navigateTo({
					url:'./shoucang'
				})
			}else
			if(item.url == 'wdpj'){
				uni.navigateTo({
					url:'./pingjia'
				})
			}else
			if(item.url == 'ghsj'){
				uni.navigateTo({
					url:'./editPhone'
				})
			}else
			if(item.url == 'yjfk'){
				uni.navigateTo({
					url:'./returnMsg'
				})
			}else
			if(item.url == 'gywm'){
				uni.navigateTo({
					url:'./aboutMine'
				})
			}else
			if(item.url == 'lxkf'){
				uni.makePhoneCall({
				    phoneNumber: '15515810682' //仅为示例
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.mine {
	background-color: #f6b900;
	/* #ifdef MP */
	min-height: calc(100vh - 100upx);
	/* #endif */
	/* #ifndef MP */
	min-height: calc(100vh - 160upx);
	/* #endif */
	font-size: 32upx;
	color: #333;
	display: flex;
	flex-direction: column;
	.mine_body {
		background-color: #fff;
		flex: 1;
		border-radius: 40upx 40upx 0 0;
		.change_list_box{
			padding: 0 26upx 0 32upx;
		.m_item{
			display: flex;
			justify-content: space-between;
			padding: 24upx 0;
			&+.m_item{
				border-top: 1upx solid #f0f0f0;
			}
			.l{
				color: #666;
				.iconfont{
					margin-right: 20upx;
				}
			}
			.iconjiantou{
				color: #ccc;
			}
		}
		}
		.mine_nav {
			display: flex;
			justify-content: space-around;
			padding: 60upx 0;
			.item {
				text-align: center;
				.img {
					width: 80upx;
					height: 80upx;
				}
			}
		}
	}
	.header_title {
		text-align: center;
		color: #fff;
		font-size: 36upx;
	}
	.user_info {
		display: flex;
		align-items: center;
		padding: 60upx 40upx;
		.user_img {
			width: 120upx;
			height: 120upx;
		}
		.name {
			font-size: 46upx;
			color: #fff;
			margin-left: 30upx;
		}
	}
}
</style>
