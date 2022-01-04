const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function main() {
	const request = await fetch('https://avancera.app/cities/');
	const data = await request.json();
	console.log(data.length);
}
main();
