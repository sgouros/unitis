///////////////   ULogger.js   //////////////

function d(caller,message){
    let pre='%c';
    let loggerPrefix='[D]';
    let d = new Date();
    let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
    let callerClass = '[' + caller.toString().match(":(.*)::")[1] + ']';
    let outputFormat='color: blue; font-size:13px;';

    console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message, outputFormat);
  }

function i(caller,message){
    let pre='%c';
    let loggerPrefix='[I]';
    let d = new Date();
    let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
    let callerClass = '[' + caller.toString().match(":(.*)::")[1] + ']';
    let outputFormat='color: green; font-size:11px;';

    console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message, outputFormat);
  }

function w(caller,message){
  let pre='%c';
  let loggerPrefix='[W]';
  let d = new Date();
  let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
  let callerClass = '[' + caller.toString().match(":(.*)::")[1] + ']';
  let outputFormat='color: orange; font-size:11px;';

  console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message, outputFormat);
}

function e(caller,message){
  let pre='%c';
  let loggerPrefix='[E]';
  let d = new Date();
  let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
  let callerClass = '[' + caller.toString().match(":(.*)::")[1] + ']';
  let outputFormat='color: red; font-size:11px;';

  console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message, outputFormat);
}


export {d,i,w,e};
