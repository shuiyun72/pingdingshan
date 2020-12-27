import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log(uni.getStorageSync("userInfo"))
let hasLogin = (uni.getStorageSync("userInfo") && uni.getStorageSync("userInfo").token) ? true :false;
console.log("111",hasLogin)
const store = new Vuex.Store({
	state: {
		hasLogin: hasLogin,
		userInfo:{}

	},
	mutations: {
		login(state, provider) {
			console.log("change login")
			state.userInfo = provider;
			uni.setStorageSync('userInfo',JSON.stringify(provider))
			state.hasLogin = true; 
		},
		logout(state) {
			state.hasLogin = false;
			uni.clearStorageSync('userInfo')
		},
		setUser(state,el) {
			state.user = el;
		},

	},
	actions: {
		
	}
})

export default store
