const app = Vue.createApp({});

const state = {
	stringValue: 'temp',
	intValue: 1,
	boolValue: false
};

const store = Vuex.createStore({ state });
app.use(store);

app.component('some-component', {
	template: '<h1>{{$store.state.intValue}}</h1>'
});

app.mount('#app');
