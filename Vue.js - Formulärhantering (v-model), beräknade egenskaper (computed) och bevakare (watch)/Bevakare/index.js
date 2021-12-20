Vue.createApp({
	data() {
		return {
			s: ''
		};
	},
	watch: {
		s(i) {
			console.log(i);
		}
	}
}).mount('#app');
