///////////////   ULogger.js   //////////////

import Ember from 'ember';

function i(caller,message){

    let g = caller.toString().match(":(.*)::");
    let d = new Date();
    let date = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';

    console.log('%c' + '[I]' + date + time + '[' + g[1] + ']' + ': ' + message, 'color: green; font-size:13px;');

  };

function w(caller,message){
  let g = caller.toString().match(":(.*)::");
  let d = new Date();
  let date = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';

  console.log('%c' + '[W]' + date + time + '[' + g[1] + ']' + ': ' + message, 'color: orange; font-size:13px;');

};


export {i,w};
