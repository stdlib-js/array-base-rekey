"use strict";var j=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var y=j(function(g,h){
var k=require('@stdlib/utils-keys/dist'),l=require('@stdlib/array-base-resolve-getter/dist');function p(v,r){var t,a,f,o,u,c,i,n,e,s;if(i=v.length,i<1)return[];for(t=k(r),n=t.length,a=[],e=0;e<n;e++)a.push(r[t[e]]);for(f=l(v),o=[],e=0;e<i;e++){for(c=f(v,e),u={},s=0;s<n;s++)u[a[s]]=c[t[s]];o.push(u)}return o}h.exports=p
});var q=y();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
