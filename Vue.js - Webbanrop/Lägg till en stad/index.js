Vue.createApp({
	data() {
		return {
			cities: null,
			name: '',
			population: ''
		};
	},
	methods: {
		fetchCities() {
			fetch('https://avancera.app/cities/')
				.then((response) => response.json())
				.then((data) => {
					this.cities = data;
				});
		},
		async addCity() {
			const city = {
				name: this.name,
				population: parseInt(this.population)
			};
			const req = await fetch('https://avancera.app/cities/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(city)
			});
			this.cities = await req.json();
		}
	},
	mounted() {
		this.fetchCities();
	}
}).mount('#app');
