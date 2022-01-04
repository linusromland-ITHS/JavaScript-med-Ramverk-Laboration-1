const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String
		}
	},

	template: `<div>Välkommen, {{playerName}}!</div>`
});

app.mount('#app');
