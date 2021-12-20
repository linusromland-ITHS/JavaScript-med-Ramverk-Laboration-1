Vue.createApp({
	data() {
		return { s: '' };
	},
	computed: {
		n: function () {
			return this.s.length;
		}
	}
}).mount('#app');
