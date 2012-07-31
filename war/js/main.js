function appendResults(text) {
	var results = document.getElementById('results');
	results.appendChild(document.createElement('P'));
	results.appendChild(document.createTextNode(text));
}

function makeRequest() {
	var request = gapi.client.urlshortener.url.get({
		'shortUrl' : 'http://goo.gl/fbsS'
	});
	request.execute(function(response) {
		appendResults(response.longUrl);
	});
}

function load() {
	alert("hello");
	gapi.client.setApiKey('YOUR API KEY');
	gapi.client.load('urlshortener', 'v1', makeRequest);
}
