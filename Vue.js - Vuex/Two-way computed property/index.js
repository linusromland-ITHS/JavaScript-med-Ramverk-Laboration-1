const app = Vue.createApp({});

const state = {
	stringValue: 'Test'
};
const mutations = {
	updateText(state, value) {
		state.stringValue = value;
	}
};

const store = Vuex.createStore({ mutations, state, strict: true });
app.use(store);

app.component('some-component', {
	template: '{{valueThing}}<textarea v-model="valueThing"></textarea>',
	computed: {
		valueThing: {
			get() {
				return this.$store.state.stringValue;
			},
			set(value) {
				this.$store.commit('updateText', value);
			}
		}
	},
	watch: {
		valueThing(newValue) {
			this.$store.commit('updateText', newValue);
		},
		storeValue(newValue) {
			this.valueThing = newValue;
		}
	}
});

app.mount('#app');
