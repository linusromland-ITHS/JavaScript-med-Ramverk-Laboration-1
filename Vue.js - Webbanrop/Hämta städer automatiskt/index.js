Vue.createApp({
	data() {
		return {
			cities: null
		};
	},
	methods: {
		fetchCities() {
			fetch('https://avancera.app/cities/')
				.then((response) => response.json())
				.then((data) => {
					this.cities = data;
				});
		}
	},
	mounted() {
		this.fetchCities();
	}
}).mount('#app');
