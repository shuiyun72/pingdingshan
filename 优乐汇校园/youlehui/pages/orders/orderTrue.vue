<template>
	<view class="order_true">
		<view class=" mc26">
			<view class="shop_title_p1">
				<image src="../../static/img/dp.png" class="o_img" mode=""></image>
				<view class="tit">启达西饼蛋糕店</view>
			</view>
			<view class="order_foods_info">
				<view class="item" v-for="(item, index) in rightFoodsList">
					<image src="../../static/img/home/tu5.png" class="food_img" mode=""></image>
					<view class="foods_right">
						<view class="f_title">单人蛋糕单人蛋糕单人蛋糕</view>
						<view class="over_num">{{ item.kg }}</view>
						<view class="f_money_sy">
							<view class="red">￥{{ item.price }}.0</view>
							<view class="num_add">
								<view class="n" v-if="item.num > 0">x{{ item.num }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="selsct_h_sy" @click="gBeizhu">
			<view class="left_s">备注</view>
			<view class="right_s">
				<view>{{Kw?Kw:'请填写备注'}}</view>
				<view class="iconfont iconjiantou"></view>
			</view>
		</view>
		<view class="bd22"></view>
		<view class="order_t_title">取餐方式</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="selsct_l_sy" v-for="(item, index) in itemsType1">
					<view class="left_s">{{ item.name }}</view>
					<view><radio :value="item.value" :checked="index === current" color="#FF3152" style="transform:scale(0.7)" /></view>
				</label>
			</radio-group>
		</view>
		<view class="bd22"></view>
		<view class="selsct_h_sy">
			<view class="left_s">取餐时间</view>

				<view class="right_s flex">
					<!-- <view>16:30</view> -->
					<picker mode="time" :value="time" start="08:00" end="23:00" @change="bindTimeChange" class="time_picker">
						<view class="uni-input">{{ time ? time : '请选择时间' }}</view>
					</picker>
					<view class="iconfont iconjiantou"></view>
				</view>

		</view>
		<view class="bd22"></view>
		<view class="order_t_title">支付方式</view>
		<view class="uni-list">
			<radio-group @change="payChange">
				<label class="selsct_l_sy" v-for="(item, index) in payType">
					<view class="left_s">
						<image :src="'../../static/img/' + item.img" class="pay_img" mode=""></image>
						<view class="info_pay">
							<view class="t">{{ item.name }}</view>
							<view class="i" v-if="item.money">可用余额 : ￥{{ item.money }}元</view>
						</view>
					</view>
					<view><radio :value="item.value" :checked="index === payCurrent" color="#FF3152" style="transform:scale(0.7)" /></view>
				</label>
			</radio-group>
		</view>
		<view class="pay_fixed_bottom_sy">
			<view class="l">
				共2件商品 实付 :
				<text class="red_b">￥50.0</text>
			</view>
			<view class="btn" @click="payMsg">立即支付</view>
		</view>
		<uni-popup type="center" ref="addAddress">
			<view class="add_address_p_sy">
				<view class="close iconfont iconguanbi" @click="$refs.addAddress.close()"></view>
				<view class="title_p">配送地址</view>
				<view class="t">楼号:</view>
				<input type="text" v-model="house1" class="p_input" placeholder="请填写楼号" />
				<view class="t">宿舍号:</view>
				<input type="text" v-model="house2" class="p_input" placeholder="请填写宿舍号" />
				<view class="add_car_btn"><view class="btn" @click="addressPopup">确认</view></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '../components/uni-popup/uni-popup.vue';
import { mapState } from "vuex";
export default {
	mounted() {},
	components: {
		uniPopup
	},
	data() {
		return {
			house1: '',
			house2: '',
			time: '',
			itemsType: [
				{
					value: 'A',
					name: '打包带走'
				},
				{
					value: 'B',
					name: '餐厅就餐'
				}
			],
			itemsType1: [
				{
					value: 'A',
					name: '到店自提'
				},
				{
					value: 'B',
					name: '配送'
				}
			],
			current: 0,
			// 商品list
			rightFoodsList: [
				{
					price: 25,
					num: 1,
					kg: '微甜',
					wd: true
				},
				{
					price: 25,
					kg: '',
					num: 1,
					wd: false
				}
			],
			payType: [
				{
					value: 'A1',
					name: '余额支付',
					img: 'yezf.png',
					money: 100
				},
				{
					value: 'B1',
					name: '微信支付',
					img: 'weixin.png',
					money: ''
				}
			],
			payCurrent: 1,
			kw:"",//口味
		};
	},
	computed:{
		...mapState(["Kw"])
	},
	methods: {
		radioChange(el) {
			console.log(el);
			this.current = el;
			if (el.detail.value == 'B') {
				this.$refs.addAddress.open();
			}
		},
		payChange(el) {
			console.log(el);
			this.payCurrent = el;
		},
		payMsg() {
			uni.navigateTo({
				url: '../home/msg?pageType=1'
			});
			this.$store.commit('setKw',"")
		},
		addressPopup() {
			console.log(this.house1, this.house2);
			this.$refs.addAddress.close();
		},
		bindTimeChange(el) {
			console.log(el);
			this.time = el.detail.value;
		},
		//备注
		gBeizhu(){
			uni.navigateTo({
				url:"./remark"
			})
		}
	}
};
</script>

<style lang="less" scoped>
.add_address_p_sy {
	background-color: #fff;
	width: 600upx;
	position: relative;
	padding: 30upx 26upx 40upx;
	.close {
		border: 1upx solid #888;
		color: #888;
		position: absolute;
		padding: 6upx 8upx;
		top: 10upx;
		right: 10upx;
		transform: scale(0.8);
		font-size: 28upx;
		border-radius: 50%;
	}
	.title_p {
		font-size: 36upx;
		text-align: center;
		color: #333;
		margin-bottom: 10upx;
	}
	.t {
		padding: 20upx 0 12upx 16upx;
	}
	.p_input {
		font-size: 28upx;
		background-color: #f0f0f0;
		padding: 14upx 26upx;
		border-radius: 12upx;
	}
	.add_car_btn {
		padding: 50upx 30upx 20upx;
		.btn {
			background-color: #fec40b;
			text-align: center;
			color: #fff;
			padding: 20upx 0;
			border-radius: 60upx;
		}
	}
}
.selsct_h_sy {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	padding: 16upx 26upx 24upx;
	border-top: 1upx solid #f0f0f0;
	.left_s {
		font-size: 36upx;
	}
	.right_s {
		display: inline-flex;
		
		color: #999;
		&.flex{
			flex:1;
		}
		.iconjiantou {
			color: #999;
		}
		.time_picker{
			flex:1;
			text-align: right;
		}
	}
}
.selsct_l_sy {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16upx 26upx 24upx;
	.left_s {
		font-size: 36upx;
		display: inline-flex;
		align-items: center;
		.pay_img {
			width: 50upx;
			height: 50upx;
		}
		.info_pay {
			margin-left: 20upx;
			.t {
				font-size: 32upx;
			}
			.i {
				font-size: 28upx;
				color: #999;
			}
		}
	}
}
.pay_fixed_bottom_sy {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	background-color: #fff;

	.l {
		flex: 1;
		padding: 0upx 26upx;
		.red_b {
			color: #f00;
			font-size: 36upx;
		}
	}
	.btn {
		width: 260upx;
		text-align: center;
		background-color: #fec106;
		padding: 30upx 0;
		color: #fff;
		font-size: 36upx;
	}
}
.order_true {
	font-size: 28upx;
	color: #666;
	padding-bottom: 200upx;
	.order_t_title {
		padding: 26upx;
		color: #999;
	}
	.shop_title_p1 {
		display: flex;
		align-items: center;
		padding-bottom: 20upx;
		.o_img {
			width: 36upx;
			height: 36upx;
		}
		.tit {
			font-size: 34upx;
			margin-left: 10upx;
		}
	}
	.order_foods_info {
		flex: 1;
		// height: calc( 100vh - 550upx );
		// overflow-y: auto;
		.item {
			display: flex;
			margin-bottom: 40upx;
			.food_img {
				width: 160upx;
				height: 160upx;
			}
			.foods_right {
				margin-left: 20upx;
				display: inline-flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				.f_title {
					font-size: 34upx;
					font-weight: bold;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 500upx;
				}
				.over_num {
					color: #999;
				}
				.f_money_sy {
					display: inline-flex;
					justify-content: space-between;
					align-items: baseline;
					.red {
						color: #f00;
					}
					.num_add {
						display: inline-flex;
						.n {
							width: 50upx;
							text-align: center;
						}
						.iconfont {
							padding: 6upx 8upx;
							border-radius: 50%;
						}
						.iconjian {
							background-color: #f0f0f0;
						}
						.iconjia {
							background-color: #fec40b;
							color: #fff;
						}
					}
				}
			}
		}
	}
}
</style>
