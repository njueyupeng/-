'use strict';

import Base from './base.js';
import cheerio from 'cheerio';
import request from 'request';
import fs from 'fs';

export default class extends Base {
  httpService = think.service('httpservice');
  baseUrl = 'https://nanjing.anjuke.com/';
  indexAction() {
    console.log('--------------running----------------');
    request('http://www.suningcloud.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var data = $('div').html();
        fs.writeFile('output.txt', data, function (err) {
          if (err) {
          } else { }
        })
      } else {
        console.log('请求出错');
      }
    })
    // return this.display();
  }

  getareaAction() {
    console.log('^^^^^^^^^^^^^^^^^^^^^');
    request(this.baseUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var data = $('div').html();
        fs.writeFile('output.txt', data, function (err) {
          if (err) {
          } else { }
        })
      } else {
        console.log(error);
        console.log(response);
      }
    })
}


}