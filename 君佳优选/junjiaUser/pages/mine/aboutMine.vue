<template>
	<view class="page">
		<view class="hezuo_img">
			<image src="../../static/img/logo.png" mode="widthFix" class="img"></image>
		</view>
		<view class="text_p1" v-html="swMsg">
			<!-- {{swMsg.content}} -->
		</view>
		<view class="text_p1">
			关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
		</view>
		<view class="h20">
			
		</view>
		<uni-list>
			<uni-list-item title="商务合作电话" note="" rightText="400-888888" :showArrow="false"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swMsg:""
			};
		},
		mounted() {
			// this.$getApi("/api/user/my/about",{},res=>{
			// 	let swM = res.data.content;
			// 	this.phone = res.data.tel;
			// 	// const regex = new RegExp('<img[\s\S]+?', 'gi')
			// 	// swM = swM.replace(regex, `<img style="width:100%;height:auto;display:block;margin:10px 0;"`);
			// 	this.swMsg = this.formatRichText(res.data.content);
			// })
		},
		methods: {
			formatRichText(html) { //控制小程序中图片大小
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					console.log(match.search(/style=/gi));
					
					if(match.search(/style=/gi) == -1){
						match = match.replace(/\<img/gi,'<img style=""');
					}
					return match;
				});
				
				newContent = newContent.replace(/style="/gi, '$& max-width:100% !important; ');
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				return newContent;
			}
		}
	}
</script>

<style lang="scss" scoped>
.page{
	background-color: #f0f0f0;
	min-height: 100vh;
}
.p10_l{
	margin: 20upx 0;
}
.hezuo_img{
	text-align: center;
	padding: 50upx 0 30upx;
	background-color: #fff;
	.img{
		width: 200upx;
	}
}
.text_p1{
	background-color: #fff;
	padding: 20upx 36upx;
	line-height: 80upx;
	font-size: 30upx;
	color: #666;
}
</style>
