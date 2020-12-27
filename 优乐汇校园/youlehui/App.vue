<script>
import Vue from 'vue';
export default {
	onLaunch: function() {
		// #ifdef MP
		uni.getSystemInfo({
			//获取手机的状态栏高度单位px
			success: function(e) {
				Vue.prototype.statusHeight = e.statusBarHeight;
				let menu = wx.getMenuButtonBoundingClientRect(); //获取获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。（top表示上边框到手机顶部的距离 bottom是下边框到手机顶部的距离）
				Vue.prototype.menu = menu;
				Vue.prototype.barHeight = menu.bottom + menu.top - e.statusBarHeight;
				console.log(Vue.prototype.barHeight);
			}
		});
		// #endif
		
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="less">

.mc26 {
	padding: 0 26upx;
}
.bd22 {
	background-color: #f0f0f0;
	height: 22upx;
}
.bd160 {
	background-color: #f0f0f0;
	height: 160upx;
}
.bh160 {
	height: 160upx;
}
.btn {
	line-height: 1;
	font-size: 28upx;
	&.round {
		border-radius: 80upx;
	}
	&.orange {
		// background-color: $uni-or;
		color: #fff;
		// border: 2upx solid $uni-or;
	}
	&.orange_n {
		background-color: #fff;
		// color: $uni-or;
		// border: 2upx solid $uni-or;
	}
	&.default_n {
		background-color: #fff;
		border: 2upx solid #ddd;
		color: #aaa;
		&.active {
			background-color: #fff;
			// color: $uni-or;
			// border: 2upx solid $uni-or;
		}
	}
	&.mini {
		padding: 2upx 10upx;
	}
	&.sm {
		padding: 16upx 20upx;
	}
	&.sy {
		padding: 16upx 20upx;
	}
	&.ms {
		padding: 26upx 30upx;
	}
	&.lg {
		padding: 20upx 30upx;
	}
}
</style>
