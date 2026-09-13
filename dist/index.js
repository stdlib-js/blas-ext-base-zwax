"use strict";var j=function(a,v){return function(){try{return v||a((v={exports:{}}).exports,v),v.exports}catch(x){throw (v=0, x)}};};var l=j(function(U,d){
var _=require('@stdlib/strided-base-reinterpret-complex128/dist'),C=require('@stdlib/complex-float64-real/dist'),D=require('@stdlib/complex-float64-imag/dist'),F=require('@stdlib/blas-base-zcopy/dist').ndarray,o=require('@stdlib/complex-float64-base-mul/dist').assign,c=5;function G(a,v,x,f,m,u,p,R){var e,s,n,t,r,i,z,w,y,q;if(a<=0)return u;if(n=C(v),t=D(v),n===1&&t===0)return F(a,x,f,m,u,p,R);if(e=_(x,0),s=_(u,0),r=m*2,i=R*2,z=f*2,w=p*2,f===1&&p===1){if(y=a%c,y>0)for(q=0;q<y;q++)o(n,t,e[r],e[r+1],s,1,i),r+=z,i+=w;if(a<c)return u;for(q=y;q<a;q+=c)o(n,t,e[r],e[r+1],s,1,i),o(n,t,e[r+2],e[r+3],s,1,i+2),o(n,t,e[r+4],e[r+5],s,1,i+4),o(n,t,e[r+6],e[r+7],s,1,i+6),o(n,t,e[r+8],e[r+9],s,1,i+8),r+=c*2,i+=c*2;return u}for(q=0;q<a;q++)o(n,t,e[r],e[r+1],s,1,i),r+=z,i+=w;return u}d.exports=G
});var O=j(function(V,M){
var E=require('@stdlib/strided-base-stride2offset/dist'),H=l();function I(a,v,x,f,m,u){return H(a,v,x,f,E(a,f),m,u,E(a,u))}M.exports=I
});var A=j(function(Y,k){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=O(),K=l();J(b,"ndarray",K);k.exports=b
});var L=require("path").join,P=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),S=A(),g,B=P(L(__dirname,"./native.js"));Q(B)?g=S:g=B;module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
