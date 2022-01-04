const app = Vue.createApp({});

app.component('greet', {
	props: {
		name: {
			type: String
		}
	},
	data() {
		return {
			msg: 'hello'
		};
	},
	template: `<div>Välkommen, {{name}}!</div>`
});

app.mount('#app');
