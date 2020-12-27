<template>
	<view class="search">
		<sy-search-bar placeholder="请输入订单编号" clearButton="always" cancelButton="always" @cancel="search" class="m26cc"></sy-search-bar>
		<view class="se_title m26">
			<view class="left">
				历史记录
			</view>
			<view class="right iconfont iconqingkongshanchu" @click="clearS"></view>
		</view>
		<view class="se_box m26">
			<view class="item" v-for="item in hisList" @click="searchName(item)">
				订单编号 : {{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotList:[{name:"奶油单购",id:1},{name:"奶油",id:1},{name:"奶油单购",id:1},{name:"奶油单购",id:1},{name:"奶油单",id:1},{name:"奶油单购单购",id:1}],
				hisList:["12121212121212","12121212121212"]
			};
		},
		onShow() {
			// this.$getApi("/App/Goods/getSearchLog", {}, res => {
			// 	console.log(res.data,"ccccc3")
			// 	this.hisList = res.data.data_list;
			// })
		},
		methods:{
			search(el){
				if(el != ""){
					console.log(el)
					uni.navigateTo({
						url:"./searchResult"
					})
				}else{
					this.$msg('请输入搜索内容')
				}

				
			},
			searchName(name){
				this.search(name)
			},
			clearS(){
				this.$getApi("/App/Goods/dropSearchLog", {}, res => {
					this.hisList = [];
				})
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
			padding-bottom: 50upx;
			.item{
				min-width: 150upx;
				box-sizing: border-box;
				padding: 8upx 20upx 8upx 0;
				color: #666;
				border-radius: 10upx;
				font-size: 32upx;
			}
		}
	}

</style>
