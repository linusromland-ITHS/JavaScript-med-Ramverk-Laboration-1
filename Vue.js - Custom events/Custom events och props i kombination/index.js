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

app.component('game', {
	template: '<div v-if="userName">{{userName}}</div><div v-else>Anonym</div>',
	props: {
		userName: {
			type: String,
			default: 'Anonym'
		},
		credits: {
			type: Number
		}
	}
});
