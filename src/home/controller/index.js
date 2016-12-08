'use strict';

import Base from './base.js';
import cheerio from 'cheerio';
import request from 'request';
import fs from 'fs';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    console.log('--------------running----------------');
    //auto render template file index_index.html
    request('http://www.suningcloud.com', function (error, response, body) {
      console.log(error);
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var data = $('div').html();
        console.log(data);
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
}