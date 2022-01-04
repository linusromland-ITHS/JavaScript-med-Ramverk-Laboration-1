const app = Vue.createApp({});

const state = {
	stringValuie: '',
	intValue: 1,
	boolewANVALUE: true
};
const mutations = {
	changeNumber(state) {
		state.intValue += 1;
	}
};

const store = Vuex.createStore({ mutations, state });
app.use(store);

app.component('some-component', {
	template: '{{$store.state.intValue}}<input type="button" @click="click">',
	methods: {
		click() {
			console.log(this.$store.state.intValue);
			this.$store.commit('changeNumber');
		}
	}
});

app.mount('#app');
