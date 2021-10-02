'use strict'

var sendRequest = function (method, url, data) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json'
        xhr.send(data);

        xhr.onload = function () {
            if (xhr.status < 400) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }

        xhr.onerror = function () {
            reject("Something is wrong")
        }
    });
}

