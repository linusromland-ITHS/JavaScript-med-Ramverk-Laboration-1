const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			required: true
		}
	},

	template: `<div>Välkommen, {{playerName}}!</div>`
});

app.mount('#app');
