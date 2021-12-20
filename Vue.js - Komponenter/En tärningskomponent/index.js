const app = Vue.createApp({});

app.component('dice', {
	data() {
		return {
			randomNum: 1
		};
	},
	methods: {
		roll() {
			this.randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
		}
	},
	mounted() {
		this.roll();
	},
	template: '<input type="button" @click="roll()" :value=randomNum>'
});

app.mount('#app');
