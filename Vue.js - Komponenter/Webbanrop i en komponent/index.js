const app = Vue.createApp({});

app.component('cities', {
	data() {
		return { cities: [] };
	},
	methods: {
		async getCities() {
			const req = await fetch('https://avancera.app/cities/');
			const cities = await req.json();
			this.cities = cities;
		}
	},
	mounted() {
		this.getCities();
	},
	template: '<li v-for="city in cities">{{ city.name }}</li>'
});

app.mount('#app');
