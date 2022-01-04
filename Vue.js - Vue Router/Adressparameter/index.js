const app = Vue.createApp({});

const index = {
	template: '<h1>Home</h1>'
};
const pages = {
	template: '<h1>Page {{$route.params.number }}</h1>'
};

const routes = [
	{
		component: pages,
		path: '/pages/:number'
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
