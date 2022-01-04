const Jimp = require('jimp');

Jimp.read('image.jpeg', (err, file) => {
	if (err) throw err;
	file.resize(300, 200).write('image-modified.jpeg');
});
