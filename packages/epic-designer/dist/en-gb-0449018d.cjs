"use strict";const s=require("./_commonjsHelpers-6763f629.cjs"),d=require("./index-3b5d59db.cjs");var m={exports:{}};(function(o,y){(function(a,t){o.exports=t(d.requireDayjs_min())})(s.commonjsGlobal,function(a){function t(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=t(a),_={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}};return u.default.locale(_,null,!0),_})})(m);const i=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));exports.enGb=i;