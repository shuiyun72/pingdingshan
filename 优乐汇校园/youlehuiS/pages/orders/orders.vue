<template>
	<view class="orders">
		<view class="tab_list_sy">
			<view class="item" v-for="(item, index) in tabList" :class="{ active: index == tabSel }" @click="selectTab(item, index)">{{ item.text }}</view>
		</view>
		<view class="orders_body">
			<view class="foods" v-for="item in foodsList">
				<view class="f_l1">
					<image src="../../static/img/ddt1.png" class="img_k" mode=""></image>
					<view class="info">
						<view class="t1">
							是倒萨的方式
						</view>
						<view class="red">
							￥ {{item.money}}.0
						</view>
					</view>
				</view>
				<view class="f_r1" :class="tabSel?'red':'yellow'" @click="handleL(item,tabSel)">
					<image src="../../static/img/sj.png" class="car_img" mode="" v-if="tabSel"></image>
					<image src="../../static/img/xj.png" class="car_img" mode="" v-if="!tabSel"></image>
					<text>{{tabSel?'上架':'下架'}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabSel: 0,
				tabList: [
					{
						text: '已上架',
						type: 0
					},
					{
						text: '已下架',
						type: 1
					}
				],
				foodsList:[
					{money:18},
					{money:15},
				]
			};
		},
		methods:{
			selectTab(el, i) {
				this.tabSel = i;
			},
			handleL(item,tabSel){
				if(tabSel == 0){
					console.log(item,tabSel)
					uni.showToast({
					    title: '下架成功',
					    duration: 2000
					});
				}
				
			}
		}
	}
</script>

<style lang="less">
	.orders{
		background-color: #f0f0f0;
	}
	.orders_body{
		font-size: 28upx;
		
		padding-top: 104upx;
		.foods{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 26upx;
			align-items: center;
			margin-bottom: 26upx;
			.f_l1{
				display: inline-flex;
				.img_k{
					width: 200upx;
					height: 200upx;
				}
				.info{
					display: inline-flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 20upx 0 20upx 30upx;
					.red{
						color: #f00;
					}
				}
			}
			.f_r1{
				display: inline-flex;
				&.yellow{
					color: #ECC039;
				}
				&.red{
					color: #f00;
				}
				.car_img{
					width: 36upx;
					height: 36upx;
					margin-right: 10upx;
				}
			}
		}
	}
.tab_list_sy {
		display: flex;
		font-size: 36upx;
		justify-content: space-around;
		background-color: #fff;
		position: fixed;
		width: 100vw;
		z-index:2;
		.item {
			border-bottom: 6upx solid transparent;
			padding: 20upx 0 16upx;

			&.active {
				color: #FF3C6A;
				border-bottom: 6upx solid #FF3C6A;
			}
		}
	}
</style>
