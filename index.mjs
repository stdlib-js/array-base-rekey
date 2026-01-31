// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function r(r,s){var n,i,o,d,l,f,h,m,p,u;if((h=r.length)<1)return[];for(m=(n=e(s)).length,i=[],p=0;p<m;p++)i.push(s[n[p]]);for(o=t(r),d=[],p=0;p<h;p++){for(f=o(r,p),l={},u=0;u<m;u++)l[i[u]]=f[n[u]];d.push(l)}return d}export{r as default};
//# sourceMappingURL=index.mjs.map
