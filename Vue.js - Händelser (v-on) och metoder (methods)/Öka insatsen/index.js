Vue.createApp({
	data() {
		return { value: 1 };
	},
	methods: {
		increase: function () {
			this.value++;
		}
	}
}).mount('#app');
