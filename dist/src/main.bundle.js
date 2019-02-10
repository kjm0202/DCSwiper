!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{dbs:[],setting:{autoRefresh:null,removeLimit:10},version:"0.5.2"}}},function(e,t,n){var r,o;
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
!function(i){"use strict";var s,a={};a.VERSION="1.7.0-next";var l={},c=function(e,t){return function(){return t.apply(e,arguments)}},u=function(){var e,t,n=arguments,r=n[0];for(t=1;t<n.length;t++)for(e in n[t])e in r||!n[t].hasOwnProperty(e)||(r[e]=n[t][e]);return r},d=function(e,t){return{value:e,name:t}};a.TRACE=d(1,"TRACE"),a.DEBUG=d(2,"DEBUG"),a.INFO=d(3,"INFO"),a.TIME=d(4,"TIME"),a.WARN=d(5,"WARN"),a.ERROR=d(8,"ERROR"),a.OFF=d(99,"OFF");var f=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};f.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var t=this.context.filterLevel;return e.value>=t.value},trace:function(){this.invoke(a.TRACE,arguments)},debug:function(){this.invoke(a.DEBUG,arguments)},info:function(){this.invoke(a.INFO,arguments)},warn:function(){this.invoke(a.WARN,arguments)},error:function(){this.invoke(a.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(a.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(a.TIME,[e,"end"])},invoke:function(e,t){s&&this.enabledFor(e)&&s(t,u({level:e},this.context))}};var g,h=new f({filterLevel:a.OFF});(g=a).enabledFor=c(h,h.enabledFor),g.trace=c(h,h.trace),g.debug=c(h,h.debug),g.time=c(h,h.time),g.timeEnd=c(h,h.timeEnd),g.info=c(h,h.info),g.warn=c(h,h.warn),g.error=c(h,h.error),g.log=g.info,a.setHandler=function(e){s=e},a.setLevel=function(e){for(var t in h.setLevel(e),l)l.hasOwnProperty(t)&&l[t].setLevel(e)},a.getLevel=function(){return h.getLevel()},a.get=function(e){return l[e]||(l[e]=new f(u({name:e},h.context)))},a.createDefaultHandler=function(e){(e=e||{}).formatter=e.formatter||function(e,t){t.name&&e.unshift("["+t.name+"]")};var t={},n=function(e,t){Function.prototype.apply.call(e,console,t)};return"undefined"==typeof console?function(){}:function(r,o){r=Array.prototype.slice.call(r);var i,s=console.log;o.level===a.TIME?(i=(o.name?"["+o.name+"] ":"")+r[0],"start"===r[1]?console.time?console.time(i):t[i]=(new Date).getTime():console.timeEnd?console.timeEnd(i):n(s,[i+": "+((new Date).getTime()-t[i])+"ms"])):(o.level===a.WARN&&console.warn?s=console.warn:o.level===a.ERROR&&console.error?s=console.error:o.level===a.INFO&&console.info?s=console.info:o.level===a.DEBUG&&console.debug?s=console.debug:o.level===a.TRACE&&console.trace&&(s=console.trace),e.formatter(r,o),n(s,r))}},a.useDefaults=function(e){a.setLevel(e&&e.defaultLevel||a.DEBUG),a.setHandler(a.createDefaultHandler(e))},void 0===(o="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o)}()},function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NAME=0]="NAME",e[e.TITLE=2]="TITLE",e[e.IP=1]="IP",e[e.ID=3]="ID"}(r||(r={})),t.DBDATA_CONDITIONTARGET=r,function(e){e[e.STRING=0]="STRING",e[e.REGEX=1]="REGEX"}(o||(o={})),t.DBDATA_CONDITIONTYPE=o},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(0)),i=r(n(4)),s=r(n(1));t.default=class{constructor(e=s.default){this._logger=e}set(e,t,n=(()=>{})){const r="id : "+Math.floor(5e4*Math.random());this._logger.debug("데이터 저장 시도",r,e,t),chrome.storage.sync.set({["Swiper_"+t]:e},()=>{s.default.debug("데이터 저장 성공",r),n()})}load(e,t){e="Swiper_"+e,chrome.storage.sync.get(e,n=>{let r=n[e];null==r&&(r=o.default()),r=i.default(r),t(r)})}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(0));t.default=function e(t){const n=t.version,r=(t=function(e){switch(e.version+="",e.version){case"0.5":case"0.5.1":e.version="0.5.2",null==e.setting.autoRefresh&&(e.setting.autoRefresh=null),null==e.setting.removeLimit&&(e.setting.removeLimit=null)}return e}(t)).version,i=o.default().version;return n===r?t:n!==r&&r!==i?e(t):n===r&&n!==i?(console.error("db데이터의 버전 업그레이드 지원 필요"),t):t}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(6)),i=r(n(7)),s=r(n(8)),a=r(n(1)),l=r(n(3)),c=a.default;c.useDefaults({defaultLevel:a.default.DEBUG,formatter:function(e,t){e.unshift((new Date).toUTCString())}}),function(){const e=new URL(location.href).searchParams.get("id");(new l.default).load(e,function(e){const t=new o.default,n=new i.default(e,c),r=new s.default(t,e,n,c).start();n.doAlert(r);const a=e.setting.autoRefresh;null!==a&&setTimeout(()=>{location=location},10*a)})}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);t.default=class{constructor(){this._datas=this._parse()}_parse(){const e=this._getJqueryArrayFromDOM();return this._parseDOMToObject(e)}_getJqueryArrayFromDOM(){return $(".gall_list tbody > tr").filter((e,t)=>!["설문","이슈","공지"].includes($(t).find(".gall_num").text()))}_parseDOMToObject(e){return e.map((e,t)=>{const n=e=>$(t).find(e).text(),r=0===$(t).find(".ip").length;let o={user:{name:n(".nickname"),isLogin:r},title:n(".gall_tit a"),id:parseInt($(t).find(".gall_num").text()),$dom:$(t)};return r?(o.user.isRightNick="http://nstatic.dcinside.com/dc/w/images/nik.gif"!=$(t).find(".writer_nikcon img").attr("src"),o.user.id=$(t).find(".gall_writer").data("uid")):o.user.ip=$(t).find(".gall_writer").data("ip"),o}).toArray()}inspect(e){const t=[];return this._datas.forEach(n=>{this._inspectSingle(n,e)&&t.push(n)}),t}_inspectSingle(e,t){return t.every(t=>{let n=(e=>{let t="";switch(e.type){case r.DBDATA_CONDITIONTYPE.REGEX:t=new RegExp(e.test);break;case r.DBDATA_CONDITIONTYPE.STRING:t=e.test}return t})(t),o=((e,t)=>{let n=null;switch(e){case r.DBDATA_CONDITIONTARGET.IP:t.user.isLogin||(n=t.user.ip);break;case r.DBDATA_CONDITIONTARGET.NAME:n=t.user.name;break;case r.DBDATA_CONDITIONTARGET.TITLE:n=t.title;break;case r.DBDATA_CONDITIONTARGET.ID:t.user.isLogin&&(n=t.user.id)}return n})(t.target,e);return null!=o&&null!=o.match(n)})}getBoardDatas(){return this._datas}}},function(e,t,n){"use strict";function r(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.WARNING="hsl(61, 100%, 87%)",e.ERROR="hsl(0, 100%,87%)"}(o||(o={}));t.default=class{constructor(e,t){this._logging=t.get("CleanerGUI")}_getPostTrElement(e){return $(`.ub-content[data-no=${e}]`)}_isSignificantPost(e){const t=this._getPostTrElement(e).find(".gall_num").text();return!!["공지","설문"].includes(t)}check(e,t=!0){e instanceof Array?e.forEach(e=>this.check(e)):this._isSignificantPost(e)||(this._getPostTrElement(e).find("list_chkbox")[0].checked=t)}getAllIds(){return $(".gall_list tr").toArray().map(e=>$(e).data("no")).filter(e=>void 0!==e)}checkAll(e){const t=this.getAllIds();this.check(t,e)}clickBlock(e,t=(e=>{}),n=(e=>{})){const o=[e.id].map(e=>e+""),i={ci_t:r("ci_c"),id:$("#gallery_id").val(),nos:o,avoid_hour:e.length,avoid_reason:"0",parent:"",avoid_reason_txt:e.reason};this._logging.debug("차단작업 수행 폼 데이터",i),$.ajax({type:"POST",dataType:"json",cache:!1,url:"/ajax/minor_manager_board_ajax/update_avoid_list",data:i,success:e=>t(e),error:e=>n(e)})}clickRemove(e,t=(e=>{}),n=(e=>{})){var o=e.map(e=>e.id);0!==o.length&&(this._logging.debug("삭제작업 수행 폼 데이터",o),$.ajax({type:"POST",url:"/ajax/minor_manager_board_ajax/delete_list",data:{ci_t:r("ci_c"),id:$("#gallery_id").val(),nos:o},dataType:"json",success:e=>t(e),error:e=>n(e)}))}_getAlertList(e){const t=[];return e.remove.forEach(e=>{t.push({$dom:e.$dom,classType:o.WARNING,detail:"삭제됨 "})}),e.block.forEach(e=>{t.push({$dom:e.$dom,classType:o.ERROR,detail:`${e.reason}로 ${e.length}시간 차단됨 `})}),t}_alertToDom(e){e.forEach(e=>{e.$dom.css("background-color",e.classType).find(".gall_tit").append(`<small>${e.detail}</small>`)})}doAlert(e){const t=this._getAlertList(e);this._alertToDom(t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t,n,r){this._dcBoard=e,this._allDatas=t,this._datas=t.dbs,this._gui=n,this._logging=r.get("cleaner")}_getProblemList(e){const t=[];return e.forEach(e=>{const n=this._dcBoard.inspect(e.condition);0!=n.length&&n.forEach(n=>{t.push({board:n,dbData:e})})}),t}_getRemoveList(e){return e.filter(e=>e.dbData.isRemove).map(e=>({id:e.board.id,$dom:e.board.$dom}))}_getBlockList(e){return e.filter(e=>e.dbData.block.isBlock).map(e=>({id:e.board.id,length:e.dbData.block.length,reason:e.dbData.block.reason,$dom:e.board.$dom}))}conductBlock(e){return e.forEach(e=>{this._gui.clickBlock(e)}),e}conductRemove(e){return this._gui.clickRemove(e),e}isLimitCountOver(e){return null!==this._allDatas.setting.removeLimit&&e.length>=this._allDatas.setting.removeLimit}start(){const e=this._datas,t=this._getProblemList(e);this._logging.debug("삭제 혹은 차단의 대상이 되는 요소",t);const n=this._getRemoveList(t),r=this._getBlockList(t);if(!this.isLimitCountOver(n)){const e=this.conductBlock(r);return{remove:this.conductRemove(n),block:e}}return{remove:[],block:[]}}}}]);
//# sourceMappingURL=main.bundle.js.map