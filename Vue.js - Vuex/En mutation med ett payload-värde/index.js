const app = Vue.createApp({});

const state = {
	stringValuie: '',
	intValue: 1,
	boolewANVALUE: true
};
const mutations = {
	changeNumber(state, amount) {
		state.intValue += amount;
	}
};

const store = Vuex.createStore({ mutations, state });
app.use(store);

app.component('some-component', {
	template: '{{$store.state.intValue}}<input type="text" v-model="valueThing" placeholder="valöue"><input type="button" @click="click">',
	data() {
		return {
			valueThing: ''
		};
	},
	methods: {
		click() {
			console.log(this.$store.state.intValue);
			const num = parseInt(this.valueThing) || 1;
			this.$store.commit('changeNumber', num);
		}
	}
});

app.mount('#app');
