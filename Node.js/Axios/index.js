const axios = require('axios');

axios('https://avancera.app/cities/').then((response) => {
	console.log(response.data.length);
});
