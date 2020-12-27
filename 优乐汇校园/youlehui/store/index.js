import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
		Kw:""  //口味
	},
	mutations: {
		setToken(state,el){
			state.token = el;
		},
		setKw(state,el){
			state.Kw = el;
		},
	},
	actions: {
		
	}
})

export default store
