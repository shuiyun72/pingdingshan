<template>
	<view class="login">
		<view class="mine_l">
			<image src="../../static/img/logo.png" class="mine_logo" mode="widthFix"></image>
		</view>
		<view class="icon_input_sy">
			<view class="iconfont icon19"></view>
			<input class="input" type="text" v-model="phone" placeholder="请输入手机号" />
		</view>
		<view class="icon_input_sy">
			<view class="iconfont iconjiesuo"></view>
			<input class="input" type="password" v-model="psd" placeholder="请输入密码" />
		</view>
		<!-- <view class="icon_input_sy">
			<view class="iconfont iconyanzhengma2"></view>
			<input class="input" type="text" v-model="yzm" placeholder="请输入验证码" />
			<text class="iconfont iconshouye_shugang_shijiantixing"></text>
			<text class="yzm" @click="getYZM" v-if="timeout<0">发送验证码</text>
			<text class="yzm" v-if="timeout>=0">{{timeout}}s 重新获取</text>
		</view> -->
		<view class="btn_sel">
			<view class="find_psd" @click="reSetPsd">
				找回密码
			</view>
			<checkbox-group @change="rememberChange">
				<label class="remember">
					<view class="mm">记住密码</view>
					<checkbox value="cd" :checked="rChecked" />
				</label>
			</checkbox-group>
		</view>
		
		<view class="sub_top">
			<button class="btn blue ms round" @click="loginIn">登录</button>
		</view>
		<view class="sub_top2">
			<button class="btn or ms round" @click="loginAdd">注册</button>
		</view>
		<!-- <view class="s_bz">
			登录即代表同意塑贝电商平台<text class="blue">《用户协议》</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				psd: "",
				yzm: "",
				timeout: -1,
				rChecked: true
			};
		},
		onShow() {
			let rememberUser = uni.getStorageSync("rememberUser");
			console.log(rememberUser)
			if(rememberUser){
				this.phone = rememberUser.phone;
				this.psd = rememberUser.psd;
			}
		},
		methods: {
			rememberChange(el) {
				console.log(el.detail.value)
				if(el.detail.value.length > 0){
					this.rChecked = true
				}else{
					this.rChecked = false
				}
				console.log(this.rChecked)
			},
			loginIn() {
				this.$getApi('/api/common/login', {
					phone: this.phone,
					password:this.psd
				}, res => {
					this.$store.commit("login",res.data)
					if(this.rChecked){
						uni.setStorage({
							key:"rememberUser",
							data:{
								phone:this.phone,
								psd:this.psd
							}
						})
					}else{
						uni.clearStorage("rememberUser")
					}
					uni.switchTab({
						url: '../home/home'
					})
				},'false')
			},
			loginAdd() {
				uni.navigateTo({
					url: "./loginAdd"
				})
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
			reSetPsd(){
				uni.navigateTo({
					url:"./loginFind"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 40upx 60rpx 0 60rpx;
		.btn_sel{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx 0rpx 0 0;
			.find_psd{
				color: $uni-bl;
			}
			.remember {
				display: inline-flex;
				align-items: center;
				justify-content: flex-end;
				
			
				.mm {
					margin-right: 16rpx;
			
				}
			}
		}
		

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
</style>
