<template>
	<view class="search">
		<sy-search-bar placeholder="请输入商品名称" clearButton="always" cancelButton="always" @cancel="search" class="m26cc"></sy-search-bar>
		<view class="se_title m26">
			<view class="left">
				热门搜索
			</view>
			<view class="right"></view>
		</view>
		<view class="se_box m26">
			<view class="item" v-for="item in hotList" @click="searchName(item.name)">
				{{item.name}}
			</view>
		</view>
		<view class="se_title m26">
			<view class="left">
				历史记录
			</view>
			<view class="right iconfont iconqingkongshanchu" @click="clearS"></view>
		</view>
		<view class="se_box m26">
			<view class="item" v-for="item in hisList" @click="searchName(item.name)">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotList:[{name:"奶油单购",id:1},{name:"奶油",id:1},{name:"奶油单购",id:1},{name:"奶油单购",id:1},{name:"奶油单",id:1},{name:"奶油单购单购",id:1}],
				hisList:[{name:"奶油单购",id:1},{name:"奶油",id:1}]
			};
		},
		methods:{
			search(el){
				this.searchName(el)
				this.hisList.push({name:el})
			},
			searchName(name){
				console.log(name)
				uni.showLoading()
				setTimeout(function () {
				    uni.hideLoading();
					uni.navigateTo({
						url:"./searchResult?searchName="+name+'&fromType=search'
					})
				}, 2000);
				
			},
			clearS(){
				this.hisList = []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search{
		.m26cc{
			margin: 0 10upx 30upx;
		}
		.se_title{
			font-size: 32upx;
			color: #999;
			display: flex;
			justify-content: space-between;
			margin-bottom: 30upx;
		}
		.se_box{
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 50upx;
			.item{
				min-width: 150upx;
				text-align: center;
				box-sizing: border-box;
				padding: 8upx 20upx 12upx;
				background-color: #f0f0f0;
				margin:0 20upx 30upx 0;
				color: #666;
				border-radius: 10upx;
			}
		}
	}

</style>
