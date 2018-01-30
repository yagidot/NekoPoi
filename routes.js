/**
	Menetapkan penangan untuk semua rute berbeda yang mungkin diminta oleh klien
       aplikasi - aplikasi ekspres
       config - object yang berisi konfigurasi di config.json
*/
function attachHandlers(app, config) {
	// index
	app.get('/', function (request, response) {
		console.log('[-] Received a request for ' + request.url);
		response.render('home.jade');
	});
}

exports.attachHandlers = attachHandlers;
