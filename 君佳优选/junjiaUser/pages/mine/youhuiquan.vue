<template>
	<view>
		<view class="tab_list_sy">
			<view class="item" v-for="(item,index) in tabList" :class="{'active':index == tabSel}" @click="selectTab(item,index)">{{item.text}}</view>
		</view>
		<view class="bg10_f"></view>
		<view class="coupon">
			<view class="item_card" v-for="item in juan1ListType">
				<image src="../../static/img/mine/youhj.png" mode="widthFix" class="img" v-show="tabSel == 0"></image>
				<image src="../../static/img/mine/youhjh.png" mode="widthFix" class="img" v-show="tabSel != 0"></image>
				<view class="info_img">
					<image src="../../static/img/mine/yishiy.png" mode="" class="sm_img" v-show="tabSel == 1"></image>
				</view>
				<view class="info_img">
					<image src="../../static/img/mine/yigq.png" mode="" class="sm_img" v-show="tabSel == 2"></image>
				</view>
				
				<view class="item_ab">
					<view class="left" :class="{'long':tabSel != 0}">
						<view class="p1">
						<!-- 	{{item}} -->
							<text>￥</text>
							<text class="t">{{Number(item.money)}}</text>
							
						</view>
						<view class="p2">
							满减券
						</view>
					</view>
					<view class="right" :class="{'long':tabSel != 0}">
						<view class="p3">
							{{item.title}}
						</view>
						<view class="p4">
							有效期 {{item.created_at && item.created_at.split(" ")[0]}}
								-
								{{item.end_time && item.end_time.split(" ")[0]}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
						text: "待使用",
						type: 0
					},
					{
						text: "已使用",
						type: 1
					},
					{
						text: "已过期",
						type: 2
					}
				],
				tabSel:0,
				juan1ListType :[{
					money:"20",
					title:"满20元件1元",
					created_at:"202001 10:10:00",
					end_time:"202001 10:10:00"
				},{
					money:"20",
					title:"满20元件1元",
					created_at:"202001 10:10:00",
					end_time:"202001 10:10:00"
				}]
			};
		},
		computed:{

		},
		mounted() {
			this.getInit(0);
		},
		methods:{
			getInit(type){
				// this.$getApi("/api/user/coupon/lists",{type:type},ress=>{
				// 	this.juan1ListType = ress.data.data
				// 	console.log(this.juan1ListType )
				// })
			},
			selectTab(el, i) {
				this.tabSel = i;
				this.getInit(el.type);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.bg10_f{
		height: 20upx;
		background-color: #f0f0f0;
	}
.tab_list_sy {
		display: flex;
		font-size: 36upx;
		justify-content: space-around;
		background-color: #fff;
		border-top: 2upx solid #eee;

		.item {
			border-bottom: 6upx solid transparent;
			padding: 20upx 0 16upx;

			&.active {
				color: $uni-bl;
				border-bottom: 6upx solid $uni-bl;
			}
		}
	}
	.coupon {
		// min-height: 100vh;
		background-color: #f0f0f0;
		height: calc( 100vh - 260upx );
		padding:10upx 26upx 36upx;
	
		.item_card {
			position: relative;
			margin-bottom: 20upx;
			.info_img{
				position: absolute;
				top: 30upx;
				right: 50upx;
				width: 80upx;
				z-index:2;
				.sm_img{
					width: 98upx;
					height: 75upx;
				}
			}
			.item_ab {
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				padding-top: 30upx;
	
				.left {
					width: 260upx;
					text-align: center;
					// &.long{
					// 	.p1{
					// 		color: #999;
					// 	}
					// 	.p2{
					// 		color: #999;
					// 	}
					// }
					.p1 {
						color: #fff;
						font-weight: bold;
						margin-bottom: 6upx;
						.t {
							padding-right: 10upx;
							font-size: 56upx;
						}
					}

					.p2 {
						font-size: 22upx;
						// transform: scale(.8);
						color: #fff;
					}

				}

				.right {
					&.long{
						.p3{
							color: #999;
						}
					}
					.p3 {
						font-size: 36upx;
						margin-bottom: 30upx;
						padding-top: 10upx;
					}

					.p4 {
						font-size: 28upx;
						color: #999;
						white-space: nowrap;
						// transform: scale(.7) translateX(-90upx);

					}
				}
			}
	
			.img {
				width: 100%;
			}
		}
	
	}
</style>
