Vue.createApp({
	data() {
		return { value: 1 };
	},
	methods: {
		increase: function (i) {
			this.value = this.value + i;
		}
	}
}).mount('#app');
