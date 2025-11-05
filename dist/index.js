"use strict";var j=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var y=j(function(g,h){
var k=require('@stdlib/utils-keys/dist'),l=require('@stdlib/array-base-resolve-getter/dist');function p(t,e){var s,a,f,o,u,c,i,n,r,v;if(i=t.length,i<1)return[];for(s=k(e),n=s.length,a=[],r=0;r<n;r++)a.push(e[s[r]]);for(f=l(t),o=[],r=0;r<i;r++){for(c=f(t,r),u={},v=0;v<n;v++)u[a[v]]=c[s[v]];o.push(u)}return o}h.exports=p
});var q=y();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
