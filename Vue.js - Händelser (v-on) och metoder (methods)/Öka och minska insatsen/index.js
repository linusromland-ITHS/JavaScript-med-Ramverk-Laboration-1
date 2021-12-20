Vue.createApp({
	data() {
		return { value: 1 };
	},
	methods: {
		increase: function () {
			this.value++;
		},
		decrease: function () {
			this.value--;
		}
	}
}).mount('#app');
