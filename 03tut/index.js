const {format }= require('date-fns');
const {v4: uuid} = require('uuid');
console.log("hello world");
console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
console.log(uuid());
console.log(uuid());
