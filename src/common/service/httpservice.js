'use strict';
/**
 * httpservice 提供由node服务端向java端发送的请求
 * 包括http协议的请求、tcp协议的请求等
 */

import rp from 'request-promise';
async function httpClient(options = {}, fullResults) {
    options.json = options.json !== false;
    options.method = options.method || 'POST';
    let worker = process.env.pm_id ? `=>worker_${process.env.pm_id}` : '';
    let results;
    try {
        let date1 = Date.now();
        results = await rp(options);
        console.log((Date.now() - date1) + 'ms-time:' + options.uri);
        logger.debug('-- HttpService: set request ' + worker + ': --', options, '-- HttpService: get response: --', results);
    } catch (e) {
        let errMsn = `\r\n-- HttpService: error: --
errorName:${e.name},
errorMessage:${e.message},
error:${e.error}`;
        logger.error('-- HttpService: request ' + worker + ': --', options, errMsn);
        return Promise.reject(e);
    }
    if (fullResults) {
        return results;
    } else {
        return results.success ? results.data : Promise.reject({
            results,
            options
        });
    }
}

function socketClient(url, data, socketOptions) {
    var promise = new Promise(function (resolve, reject) {
        var net = require('net');
        var result = '';
        var client = net.connect({
            port: 8362,
            path: url
        }, function () {
            // 'connect' listener
            // logger.log('connected to server!');
            client.write('world!\r\n');
        });
        client.on('data', function (data) {
            // logger.log(data.toString());
            // client.end();
            result += data;
        });
        client.on('end', function () {
            resolve(result);
            logger.info('disconnected from server');
        });
    });
    return promise;
}

// socketLiveClient 用于发起tcp协议的长连接请求
// 返回对象为event

export default {
    remote: httpClient,
    http: httpClient,
    socket: socketClient
}