const app = Vue.createApp({
	data() {
		return {
			cities: []
		};
	},
	methods: {
		getCities() {
			fetch('https://avancera.app/cities')
				.then((response) => response.json())
				.then((data) => {
					this.cities = data;
				});
		}
	},
	mounted() {
		this.getCities();
	}
});

const index = {
	template: '<h1>Home</h1>'
};
const cityInfo = {
	template: '<h1>{{cityName}}</h1><p>{{cityPopulation}}</p>',
	data() {
		return {
			cityName: '',
			cityPopulation: ''
		};
	},
	mounted() {
		fetch('https://avancera.app/cities/' + this.$route.params.cityID)
			.then((response) => response.json())
			.then((data) => {
				this.cityName = data.name;
				this.cityPopulation = data.population;
			});
	}
};

const routes = [
	{
		component: cityInfo,
		path: '/:cityID'
	},

	{
		component: index,
		path: '/'
	}
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes: routes
});

app.use(router);

app.mount('#app');
