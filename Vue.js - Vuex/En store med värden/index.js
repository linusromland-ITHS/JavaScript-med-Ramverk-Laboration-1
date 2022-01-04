const app = Vue.createApp({});

const state = {
	stringValue: 'temp',
	intValue: 1,
	boolValue: false
};

const store = Vuex.createStore({ state });
app.use(store);

app.mount('#app');
