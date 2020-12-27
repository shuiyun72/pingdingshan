<template>
	<view class="add_address">
		<uni-nav-bar color="#333333" background-color="#ffffff"
		:status-bar="true" left-icon="arrowleft" title="新增配送地址" @clickLeft="back" />
		<uni-list>
			<sy-list-item title="收货地址" note="" @click="showMap">
				<template v-slot:right="">
					{{address1}}
				</template>
			</sy-list-item>
			<sy-list-item title="详细地址" note="" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="address2" placeholder="请输入详细楼层 门牌 房间号" class="addr_input"/>
				</template>
			</sy-list-item>
		</uni-list>
		<view class="h20">
			
		</view>
		<uni-list>
			<sy-list-item title="联系人" note="" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="name" placeholder="联系人姓名" class="addr_input"/>
				</template>
			</sy-list-item>
			<sy-list-item title="联系电话" note="" :showArrow="false">
				<template v-slot:right="">
					<input type="text" v-model="phone" placeholder="联系人电话" class="addr_input"/>
				</template>
			</sy-list-item>
		</uni-list>
		<view class="sub_top">
			<button class="btn blue ms round vx_login" @click="submit">
				
				 <text>保存</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address1:"定位收货地址",
				address2:"",
				name:"",
				phone:"",
				fromTitle:""
			};
		},
		onLoad(ph) {
			if(ph.fromTitle){
				this.fromTitle = ph.fromTitle
			}
		},
		onShow() {
			let this_ = this;
			uni.getLocation({
			    type: 'wgs84',
				altitude:true,
			    success: function (res) {
					this_.address1 = res.address
			        console.log('当前位置的经度：' + res);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			});
		},
		methods:{
			back(){
				uni.switchTab({
					url:"../mine/mine"
				})  
				return true;
			},
			showMap(){
				console.log("map")
				let this_ = this;
				uni.chooseLocation({
					success: (res) => {
						console.log(res)
						this_.address1 = res.address
						// this.setLocation(res)
						// this.location = formatLocation(res.longitude, res.latitude),
						// this.locationAddress = res.address
					}
				})
			},
			submit(){
				if(this.fromTitle == '地址选择'){
					uni.navigateBack({
						delta:2
					})
				}else{
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.add_address{
	min-height: 100vh;
	background-color: #f0f0f0;
	color: #666;
	.addr_input{
		font-size: 28upx;
		width: 90%;
		text-align: right;
	}
	.sub_top{
		margin: 200upx 36upx 10upx;
	}
}
</style>
