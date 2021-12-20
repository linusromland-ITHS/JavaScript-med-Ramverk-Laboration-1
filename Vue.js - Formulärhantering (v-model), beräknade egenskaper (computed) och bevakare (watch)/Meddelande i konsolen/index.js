Vue.createApp({
	data() {
		return { userName: '' };
	},
	methods: {
		onClick: function () {
			console.log(this.userName);
		}
	}
}).mount('#app');
