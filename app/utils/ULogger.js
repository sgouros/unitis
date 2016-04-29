///////////////   ULogger.js   //////////////

function debug(callerInfo,whatToLog,message=""){
    let pre='%c';
    let loggerPrefix='[D]';
    let d = new Date();
    let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
    let callerClass = '[' + setupCaller(callerInfo) + ']';
    let outputFormat='color: green; font-size:13px;';

    console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message + ' ' + whatToLog, outputFormat);
  }

function info(callerInfo,whatToLog,message=""){
    let pre='%c';
    let loggerPrefix='[I]';
    let d = new Date();
    let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
    let caller = '[' + setupCaller(callerInfo) + ']';
    let outputFormat='color: green; font-size:11px;';

    console.log(pre + loggerPrefix + currentDate + currentTime + caller +  ': ' + message + ' ' + whatToLog, outputFormat);
  }

function warn(callerInfo,whatToLog,message=""){
  let pre='%c';
  let loggerPrefix='[W]';
  let d = new Date();
  let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
  let callerClass = '[' + setupCaller(callerInfo) + ']';
  let outputFormat='color: orange; font-size:11px;';

  console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message + ' ' + whatToLog, outputFormat);
}

function error(callerInfo,whatToLog,message=""){
  let pre='%c';
  let loggerPrefix='[E]';
  let d = new Date();
  let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
  let callerClass = '[' + setupCaller(callerInfo) + ']';
  let outputFormat='color: red; font-size:11px;';

  console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message + ': ' + whatToLog, outputFormat);
}

function setupCaller(callerInfo){
  if(callerInfo){
    return callerInfo.toString().match(":(.*)::")[1];
  }
  else{
  //  use the following code to only keep the funcion name
  //  let trace = (getStackTrace()[2]);
  //  let regex = /at (\w+)/;
  //  let caller;
  //  caller = trace.match(regex);
  //  return caller[1];
    let trace = (getStackTrace()[2]);
    return trace.slice(3); // remove "at" at the beginning
  }
}

function getStackTrace () {
  let stack = new Error().stack || '';
  stack = stack.split('\n').map(function (line) { return line.trim(); });
  return stack.splice(stack[0] == 'Error' ? 2 : 1);
}



export {debug,info,warn,error};
