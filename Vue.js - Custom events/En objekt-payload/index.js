app.component('controls', {
	template: '<input v-model="textField"></input><input type="button" @click="onClick">Click me</input>',
	data() {
		return {
			textField: ''
		};
	},
	emits: ['start-game'],
	methods: {
		onClick() {
			this.$emit('start-game', {
				userName: this.textField,
				credits: 100
			});
		}
	}
});
