const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			default: 'Anonym'
		}
	},

	template: `<div>Välkommen, {{playerName}}!</div>`
});

app.mount('#app');
