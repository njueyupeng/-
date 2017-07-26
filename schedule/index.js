let  schedule = require('node-schedule');
let service = require('./service/service');
let rule  = new schedule.RecurrenceRule();
let time = [];
service.getQu();
// for(let i = 1;i<60;i++){
//     time.push(i);
// }
// rule.second = time;
// let c= 0;
// schedule.scheduleJob(rule,function(){
//     // c++;
//     console.log('定时执行',c);
// });
// console.log('pppp');
// setTimeout(function(){
//     c ='w';
// },5000);
// c = 'p';