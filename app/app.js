import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;


Ember.Logger.i = function(caller,message){

  let i=caller.toString().match(":(.*)::");
  let d=new Date();
  let date= '['+d.getDate()+'.'+d.getMonth()+'.'+d.getFullYear()+'_';
  let time= d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds()+']';

  console.log('%c'+'[I]' +date+ time+ '['+i[1]+']' +': '+message, 'color: green; font-size:13px;');


};


App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

