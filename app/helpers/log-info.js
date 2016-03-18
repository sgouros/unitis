import Ember from 'ember';
import {debug,info,warn,error} from 'unitis/utils/ULogger';

export function logInfo(params) {
  let message=params[0];
  let caller=this;
  let pre='%c';
  let loggerPrefix='[I]';
  let d = new Date();
  let currentDate = '[' + d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + '_';
  let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds() + ']';
  let callerClass = '[' + this.toString()+ ']';
  let outputFormat='color: green; font-size:11px;';

  console.log(pre + loggerPrefix + currentDate + currentTime +  callerClass + ': ' + message, outputFormat);

  return params;
}

export default Ember.Helper.helper(logInfo);
