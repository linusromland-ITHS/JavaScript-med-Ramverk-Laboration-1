const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			default: 'Anonym',
			validator(value) {
				return value !== '';
			}
		}
	},

	template: `<div>Välkommen, {{playerName}}!</div>`
});

app.mount('#app');
