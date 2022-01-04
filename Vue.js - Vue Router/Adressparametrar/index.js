const app = Vue.createApp({});

const index = {
	template: '<h1>Home</h1>'
};
const pages = {
	template: '<h1>Page {{$route.params.number }}</h1>'
};

const words = {
	template: '<h1>{{$route.params.word1 +  $route.params.word2}}</h1>'
};

const routes = [
	{
		component: pages,
		path: '/pages/:number'
	},
	{
		component: words,
		path: '/:word1/:word2'
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
