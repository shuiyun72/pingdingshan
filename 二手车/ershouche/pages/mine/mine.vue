<template>
	<view class="mine">
		<view class="top_mine">
			<view class="iconfont iconxiaoxi1 active" @click="toMsg"></view>
			<view class="pt1">
				<image src="../../static/img/toux.png" class="top_img"></image>
				<view class="top_info">
					<view class="name">
						苍穹
					</view>
					<view class="phone">
						18236363653
					</view>
					<view class="sm_t1">
						<image src="../../static/img/hyvip.png" class="t1_img"></image>
						会员
					</view>
				</view>
			</view>
			<view class="pt2" v-if="user == 1">
				<view class="">
					上架车辆: 0 辆
				</view>
				<view class="">
					下架车辆: 0 辆
				</view>
			</view>
		</view>
		<view class="set">
			<view class="mine_evm">
				<view class="div_evm">
					<image src="../../static/img/evm.png" mode="" class="img_evm"></image>
				</view>
				<view class="text">
					app下载
				</view>
			</view>
			<uni-list>
				<!-- <uni-list-item title="修改手机号" @click="nativeTo('edit')"></uni-list-item> -->
				<!-- <uni-list-item title="未定" rightText="未定" @click="nativeTo('wx')"></uni-list-item> -->
				<uni-list-item title="申请会员" @click="nativeTo('vip')" :rightText="'会员剩余'+dayNum+'天'"></uni-list-item>
				<uni-list-item title="版本更新" rightText="V1.0.0" :showArrow="false"></uni-list-item>
			</uni-list>
			
			<view class="sub_top">
				<button class="btn red ms round" @click="loginOut">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dayNum:0
			};
		},
		computed:{
			user(){
				return this.$store.state.user;
			}
		},
		methods:{
			toMsg(){
				setTimeout(()=>{
					uni.switchTab({
						url:"../msg/msg"
					})
				},500)
			},
			loginOut(){
				uni.showModal({
				    title: '提示',
				    content: '是否确认退出登录?',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							uni.reLaunch({
								url:"../login/login"
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			nativeTo(el){
				if(el == 'vip'){
					uni.navigateTo({
						url:"../home/charge"
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		padding-bottom: 100upx;
		.mine_evm{
			.div_evm{
				display: flex;
				justify-content: center;
				padding-top: 20upx;
				.img_evm{
					width: 400upx;
					height: 400upx;
					padding: 10upx;
					border: 1upx solid #ddd;
					border-radius: 10upx;
				}
			}	
			.text{
				text-align: center;
				font-size: 34upx;
				color: $uni-or;
			}
		}
		.sub_top {
			margin-top: 60upx;
			padding: 0 40upx;
		}
		.top_mine {
			background: #f0f0f0 url(../../static/img/wdbg.png) no-repeat top center;
			height: 400upx;
			background-size: 750upx 420upx;
			position: relative;
			.iconxiaoxi1{
				position: absolute;
				top: 26upx;
				right: 26upx;
				padding: 12upx;
				border-radius: 50%;
				color: #fff;
				&.active{
					background-color:$uni-or;
				}
			}
			.pt2{
				padding: 80upx 26upx 20upx;
				display: flex;
				justify-content: space-around;
				font-size: 32upx;
				color: #fff;
			}
			.yqm_r {
				position: absolute;
				top: 90upx;
				right: 0;
				background-color: #1BB09A;
				padding: 12upx 12upx 12upx 24upx;
				color: #fff;
				border-radius: 30upx 0 0 30upx;
			}

			.pt1 {
				display: flex;
				padding: 60upx 26upx 0;

				.top_img {
					width: 140upx;
					height: 140upx;
				}

				.top_info {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					color: #fff;
					margin-left: 16upx;

					.name {
						font-size: 36upx;
					}

					.phone {
						margin-bottom: 6upx;
					}

					.sm_t1 {
						background-color: #fff;
						color: #FFA200;
						padding: 4upx 20upx;
						border-radius: 20upx;
						transform: scale(.9);
						text-align: center;
						width: 110upx;

						.t1_img {
							margin-right: 6upx;
							width: 40upx;
							height: 30upx;

						}
					}

				}
			}

			.order_bar {
				background-color: #fff;
				width: 698upx;
				box-sizing: border-box;
				padding: 26upx;
				border-radius: 12upx;
				margin: 0 26upx;
				color: #666;
				box-shadow: 0 0 1upx 2upx #eee;
				margin-top: 40upx;

				.pt2 {
					display: flex;
					justify-content: space-between;

					.l {
						font-size: 34upx;
					}
				}

				.p2_list {
					display: flex;
					justify-content: space-around;
					padding: 20upx 0 20upx;
					border-top: 1upx solid #eee;
					margin-top: 16upx;

					.item {
						.order_img {
							width: 80upx;
							height: 80upx;
						}
					}
				}
			}

		}


	}
</style>
