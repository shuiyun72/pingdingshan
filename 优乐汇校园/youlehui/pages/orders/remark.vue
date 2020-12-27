<template>
	<view class="remark">
		<view class="rem_title">
			口味备注
		</view>
		<view class="ke_list">
			<view class="item" v-for="(item,index) in kwList" @click="selKw(item,index)" :class="{'yellow':item.sel}">
				{{item.title}}
			</view>
		</view>
		<view class="mc26">
			<textarea v-model="textKw" class="text_ar" placeholder="请输入口味 偏好等要求~" />
		</view>
		<view class="bh160">
			
		</view>
		<view class="bg_btn_sub_sy"><view class="btn" @click="returnP">确定</view></view>
	</view>
</template>

<script>
	import _ from "../../modules/lodash";
	export default {
		data() {
			return {
				kwList:[
					{title:"不放辣",sel:false},
					{title:"少放辣",sel:false},
					{title:"多放辣",sel:false},
					{title:"不吃蒜",sel:false},
					{title:"不吃葱",sel:false},
					{title:"不吃香菜",sel:false}
				],
				textKw:""
			};
		},
		mounted() {
			
		},
		methods:{
			selKw(item,index){
				this.kwList[index].sel = !this.kwList[index].sel;
				if(index == 0 || index == 1 || index == 2 ){
					if(this.kwList[index].sel == true){
						let arrL = [0,1,2];
						arrL.splice(index,1);
						for(let i=0 ;i<arrL.length;i++){
							this.kwList[arrL[i]].sel = false;
						}
					}
				}
				let arrKg = [];
				_.map(_.filter(this.kwList,item=>{
					return item.sel == true;
				}),text=>{
					arrKg.push(text.title)
				})
				this.textKw = arrKg.join(" , ");
			},
			returnP(){
				this.$store.commit("setKw",this.textKw)
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style lang="less" scoped>
.remark{
	font-size: 28upx;
	color: #666;
	.rem_title{
		color: #333;
		padding: 26upx;
		font-size: 32upx;
	}
	.ke_list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 26upx;
		.item{
			border: 1upx solid #ccc;
			border-radius: 6upx;
			padding: 7upx 16upx 9upx;
			margin:0 32upx 20upx 0;
			&.yellow{
				color: #fff;
				background-color: #FEC106;
				border: 1upx solid #FEC106;
				
			}
		}
	}
	.text_ar{
		font-size: 28upx;
		padding: 26upx;
		background-color: #f0f0f0;
		width: 100%;
		box-sizing: border-box;
	}
	.bg_btn_sub_sy {
		padding: 0 52upx;
		&.pt160{
			padding-top: 160upx;
		}
		.btn {
			background-color: #fec106;
			color: #fff;
			padding: 32upx;
			text-align: center;
			border-radius: 60upx;
		}
	}
}
</style>
