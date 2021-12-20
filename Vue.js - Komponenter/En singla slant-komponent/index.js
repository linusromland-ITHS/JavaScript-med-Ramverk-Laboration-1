const app = Vue.createApp({});

app.component('coin-toss', {
	data() {
		return { oneOrZero: Math.round(Math.random()) };
	},
	template: '<a>{{ oneOrZero == 1 ? "Krona" : "Klave" }}</a>'
});

app.mount('#app');
