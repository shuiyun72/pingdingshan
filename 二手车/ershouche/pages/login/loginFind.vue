<template>
	<view>
		<view class="login">
			<view class="icon_input_sy">
				<view class="iconfont icon19"></view>
				<input class="input" type="text" v-model="phone" placeholder="请输入手机号" />
			</view>
			<view class="icon_input_sy">
				<view class="iconfont iconyanzhengma2"></view>
				<input class="input" type="text" v-model="yzm" placeholder="请输入验证码" />
				<text class="iconfont iconshouye_shugang_shijiantixing"></text>
				<text class="yzm" @click="getYZM" v-if="timeout<0">发送验证码</text>
				<text class="yzm" v-if="timeout>=0">{{timeout}}s 重新获取</text>
			</view>
			<view class="icon_input_sy">
				<view class="iconfont iconjiesuo"></view>
				<input class="input" type="password" v-model="psd" placeholder="请输入密码" />
			</view>
			<view class="icon_input_sy">
				<view class="iconfont iconjiesuo"></view>
				<input class="input" type="password" v-model="rpsd" placeholder="请确认密码" />
			</view>
			<view class="sub_top">
				<button class="btn blue ms round" @click="loginIn">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				car: "",
				address: "",
				name:"",
				yzm:"",
				psd:"",
				rpsd:"",
				tabC: [ {
					name: "中介用户",
					num: 0
				},{
					name: "商家用户",
					num: 1
				}],
				tabCS: 0,
				timeout:-1,
				geocodeL:[]
			}
		},
		mounted() {
			let this_ = this;
			uni.getLocation({
				type: 'wgs84',
				geocode:true,
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude, res);
					console.log('当前位置的纬度：' + res.latitude);
					this_.geocodeL = res;
					this_.address = res.address ? res.address : "";
				}
			});
		},
		methods: {
			loginSeach(el) {
				this.tabCS = el;
			},
			getYZM() {
				if (this.timeout < 0) {
					this.timeout = 59;
					let timer = setInterval(() => {
						if (this.timeout < 0) {
							clearInterval(timer)
						} else {
							this.timeout--
						}
					}, 1000)
				}
			},
			loginIn(){
				uni.showToast({
				    title: '密码修改成功',
				    duration: 2000
				});
				setTimeout(()=>{
					uni.switchTab({
						url: '../home/home'
					})
				},1500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 60upx 60rpx 0 60rpx;
	
		.iconshouye_shugang_shijiantixing {
			font-size: 38upx;
			color: #999;
		}
	
		.yzm {
			font-size: 25upx;
			color: $uni-bl;
		}
	
		.s_bz {
			padding-top: 10upx;
			color: #999;
			transform: scale(.9);
			text-align: center;
		}
	
		.mine_l_t {
			text-align: center;
	
			.t {
				padding: 100upx 0 50upx;
			}
	
			.wx {
				width: 80upx;
			}
		}
	
		.mine_l {
			text-align: center;
			margin-bottom: 50upx;
	
			.mine_logo {
				width: 230upx;
			}
		}
	
		.sub_top {
			margin-top: 160upx;
		}
	
		.sub_top2 {
			margin-top: 30upx;
		}
	
		.login_wjmm {
			font-size: 20upx;
			color: #999;
			padding: 20upx 0 90upx;
	
			&.b {
				color: #333;
			}
		}
	}

	.login_tab {
		display: flex;

		.tab_l {
			width: 50%;
			background-color: $uni-def;
			text-align: center;
			padding: 18upx 0;

			&.active {
				background-color: $uni-bl;
				color: #fff;
			}
		}
	}
</style>
