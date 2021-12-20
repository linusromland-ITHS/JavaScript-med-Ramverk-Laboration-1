Vue.createApp({
	data() {
		return { message: null, userName: '' };
	},
	methods: {
		onSubmit: function (e) {
			e.preventDefault();
			this.message = `Välkommen, ${this.userName}!`;
		}
	}
}).mount('#app');
