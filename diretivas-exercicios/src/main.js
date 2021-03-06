import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
	bind(el, binding, vnode){
	//el.style.backgroundColor='lightgreen'
if(binding.arg === 'fundo') {
	el.style.backgroundColor=bind.value	
}else{
	el.style.color=bind.value
}
}
})
new Vue({
	render: h => h(App),
}).$mount('#app')
