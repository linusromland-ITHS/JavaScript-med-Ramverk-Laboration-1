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
		addCity() {
			fetch('https://avancera.app/cities/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: this.name,
					population: this.population
				})
			})
				.then((response) => response.json())
				.then((data) => {
					this.fetchCities();
				});
		}
	},
	mounted() {
		this.fetchCities();
	}
}).mount('#app');
