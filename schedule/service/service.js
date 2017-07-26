const request = require('request');
const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');

const url = 'https://nanjing.anjuke.com/';

let options = {
    url: url,
    headers: {
        'User-Agent': ''
    }
}

//获取区的列表
let getQu = () => {
    https.get(url,(res)=>{
        console.log(res.statusCode);
        res.on('data',(d)=>{
            console.log(d);
        })
    })
    // request(options, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         let $ = cheerio.load(body);
    //         let list = $('.buy-house .clearfix .details .areas')[0] && $('.buy-house .clearfix .details .areas')[0].children;
    //         let result = '';
    //         for (let i = 0; list && i < list.length; i++) {
    //             result = result + list[i].title + '=' + list[i].href + ';';
    //         }
    //         fs.writeFile('qu.txt', result, function (err) {
    //             if (err) {
    //             } else { }
    //         })
    //     } else {
    //         console.log('获取区列表出错');
    //         console.log(error);
    //         fs.writeFile('response.txt', JSON.stringify(response), function (err) {
    //             if (err) {
    //                 console.log('写入文件出错');
    //             } else { }
    //         })
    //     }
    // })

};

//获取区的地点列表
let getArea = () => {

}

//获取售价列表
let getPrice = () => {

}

//获取面积列表
let getSize = () => {

}

//获取房型列表
let getfangxing = () => {

}

//处理

module.exports = { getArea, getfangxing, getPrice, getQu, getSize };