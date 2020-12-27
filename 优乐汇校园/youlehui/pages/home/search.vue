<template>
	<view class="search">
		<view class="sh1_sy">
			<view class="left">
				<view class="iconfont iconsousuo1"></view>

				<input type="text" class="input_s" v-model="seInput" placeholder="请输入店铺名称" />

				<view class="iconfont iconguanbi" @click="clearInput"></view>
			</view>
			<view class="right" @click="next">搜索</view>
		</view>
		<view class="search_title">
			热门搜索
		</view>
		<view class="s_list">
			<view class="item" v-for="item in hotList" @click="searchItem(item.title)">
				{{item.title}}
			</view>
		</view>
		<view class="search_title">
			历史记录
		</view>
		<view class="history">
			<view class="item" v-for="item in hotList" @click="searchItem(item.title)">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			seInput: '',
			hotList:[
				{
					title:"德克士"
				},
				{
					title:"黄焖鸡"
				},
				{
					title:"面条"
				}
			]
		};
	},
	methods: {
		searchItem(item){
			this.seInput = item;
		},
		clearInput(){
			this.seInput = "";
		},
		next(){
			console.log(this.seInput)
			uni.navigateTo({
				url:"./searchResult"
			})
		}
	}
};
</script>

<style lang="less" scoped>
.search {
	font-size: 28upx;
	padding: 20upx 26upx;
	color: #333;
	.search_title{
		font-size: 32upx;
		color: #999;
		padding-top: 30upx;
	}
	.s_list{
		padding-top: 30upx;
		display: flex;
		.item{
			margin-right: 40upx;
			font-size: 32upx;
		}
	}
	.history{
		.item{
			font-size: 32upx;
			padding-top: 26upx;
		}
	}
	.sh1_sy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			display: inline-flex;
			align-items: center;
			flex:1;
			background-color: #f0f0f0;
			border-radius: 60upx;
			padding: 6upx 12upx 6upx 20upx;
			.input_s{
				display: block;
				font-size: 28upx;
				flex:1;
				padding: 0 20upx 0 30upx;
			}
			.iconsousuo1{
				font-size: 32upx;
			}
			.iconguanbi{
				font-size: 28upx;
				color: #fff;
				padding: 12upx 16upx;
				transform: scale(.6);
				border-radius: 50%;
				background-color: #ccc;
			}
		}
		.right{
			width: 60upx;
			margin-left: 20upx;
		}
	}
}
</style>
