function sendXhr(url, cb) {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', cb);
	xhr.open('GET', url);
	xhr.send();
}

module.exports = sendXhr;
