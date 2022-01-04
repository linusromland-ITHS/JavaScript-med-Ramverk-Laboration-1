const app = Vue.createApp({});

const index = {
	template: '<h1>Home</h1><input type="button" @click="goToPage1">Click me</input>',
	methods: {
		goToPage1: function () {
			this.$router.push('page-1');
		}
	}
};
const p1 = { template: '<h1>Page 1</h1>' };
const p2 = { template: '<h1>Page 2</h1>' };

const routes = [
	{
		component: p1,
		path: '/page-1'
	},
	{
		component: p2,
		path: '/page-2'
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
