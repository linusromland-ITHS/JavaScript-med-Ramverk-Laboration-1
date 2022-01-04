app.component('controls', {
	template: '<input type="button" @click="onClick">Click me</input>',
	methods: {
		onClick() {
			this.$emit('start-game');
		}
	}
});
