"use strict";const f=require("./_commonjsHelpers-6763f629.cjs"),Y=require("./index-ecef3a12.cjs");var p={exports:{}};(function(a,y){(function(i,s){a.exports=s(Y.requireDayjs_min())})(f.commonjsGlobal,function(i){function s(_){return _&&typeof _=="object"&&"default"in _?_:{default:_}}var d=s(i),m="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),M="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),c=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function t(_,e,u){var n,r;return u==="m"?e?"хвилина":"хвилину":u==="h"?e?"година":"годину":_+" "+(n=+_,r={ss:e?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:e?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:e?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[u].split("_"),n%10==1&&n%100!=11?r[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?r[1]:r[2])}var o=function(_,e){return c.test(e)?m[_.month()]:M[_.month()]};o.s=M,o.f=m;var l={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:t,hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return d.default.locale(l,null,!0),l})})(p);const h=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));exports.uk=h;