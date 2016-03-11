import Ember from 'ember';

export default Ember.Object.extend({

  asd(caller,message){

    let g = caller.toString().match(":(.*)::");
    let d = new Date();
    let date = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';

    console.log('%c' + '[I]' + date + time + '[' + g[1] + ']' + ': ' + message, 'color: green; font-size:13px;');

  }

});

