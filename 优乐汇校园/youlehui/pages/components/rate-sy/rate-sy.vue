<template>
	<view class="rate_sy">
		<view class="rate_i_sy">
			<view class="rate_i iconfont iconxingxing yellow" v-for="ra in calcNum(item.star)"></view>
			<view class="rate_i iconfont iconxingxing" v-for="ra in calcNum(5 -item.star)"></view>
		</view>
		<view class="right">
			{{item.star}}.0
		</view>
	</view>
</template>

<script>
	export default {
		name: "UniRate",
		props: {
			color: {
				// 星星的颜色
				type: String,
				default: "#ececec"
			},
			activeColor: {
				// 星星选中状态颜色
				type: String,
				default: "#ffca3e"
			},
			size: {
				// 星星的大小
				type: [Number, String],
				default: 24
			},
			value: {
				// 当前评分
				type: [Number, String],
				default: 0
			},
			margin: {
				// 星星的间距
				type: [Number, String],
				default: 0
			},
			disabled: {
				// 是否可点击
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				valueSync: ""
			};
		},
		computed: {
			
		},
		created() {
			
		},
		methods: {
			
		}
	};
</script>

<style lang="less">
.rate_sy {
	display: flex;
	.rate_i_sy {
		display: inline-flex;
		.iconxingxing {
			color: #ccc;
			font-size: 28upx;
			margin-right: 12upx;
			&.yellow {
				color: #fec40b;
			}
		}
	}
}
</style>