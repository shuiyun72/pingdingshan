<template>
	<view class="item_pl_sy"  @click.stop="itemClick">
		<view class="it_img">
			<view class="it_img_case" v-if="moneyText == '新人价'">
				新人
			</view>
			<image src="../../static/img/home/or.png" class="img" mode=""></image>
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="t2">
			打算的撒都是
		</view>
		<view class="ctrl">
			<view class="left">
				<view class="m1 red">
					<text v-if="moneyText">{{moneyText}}</text>￥<text class="m">16.9</text>
				</view>
				<view class="m2">
					￥<text>18.9</text>
				</view>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:["item","moneyText"],
		methods:{
			itemJian(){
				this.$emit('clickJian',this.item)
			},
			itemJia(){
				console.log("51jj")
				this.$emit('clickJia',this.item)
			},
			itemClick(){
				this.$emit('click',this.item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item_pl_sy {
		background-color: #fff;
		padding: 10upx 20upx 20upx;
		margin-bottom: 20upx;
		width: 303upx;
		border-radius: 12upx;

		.it_img {
			text-align: center;
			position:relative;
			.it_img_case{
				position: absolute;
				top: 0;
				left: 0;
				z-index: 11;
				background-color: #0077AA;
				color: #fff;
				border-radius: 0 20upx 20upx 20upx ;
				padding: 0 16upx;
			}
			.img {
				width: 280upx;
				height: 280upx;
			}
		}

		.title {
			font-size: 32upx;
			color: #444;
		}

		.t2 {
			color: #999;
		}

		.ctrl {
			display: flex;
			justify-content: space-between;
			align-items: baseline;

			.left {
				display: inline-flex;
				align-items: baseline;

				.m {
					font-size: 30upx;
					font-weight: bold;
				}

				.m2 {
					text-decoration: line-through;
					color: #999;
				}
			}

			.iconjia1 {
				font-size: 46upx;
				color: $uni-bl;
			}
		}
		
	}
</style>
