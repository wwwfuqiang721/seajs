(function(h){function s(d){for(var e={__KEYS:[]},f=0,c=d.length;f<c;f++)for(var j=d[f].replace("://","__").split("/"),a=e,b=0,g=j.length;b<g;b++){var l=j[b];a[l]||(a[l]={__KEYS:[]},a.__KEYS.push(l));a=a[l]}d=[];f=e.__KEYS;c=0;for(j=f.length;c<j;c++){a=b=f[c];b=e[b];for(g=b.__KEYS;1===g.length;)a+="/"+g[0],b=b[g[0]],g=b.__KEYS;g.length&&d.push([a.replace("__","://"),t(b)])}return d}function t(d){for(var e=[],f=d.__KEYS,c=0,j=f.length;c<j;c++){var a=f[c],b=t(d[a]),g=b.length;if(g)for(var l=0;l<g;l++)e.push(a+
"/"+b[l]);else e.push(a)}return e}function u(d){for(var e=0,f=d.length;e<f;e++){for(var c=d[e],j=c[0]+"/",a=c[1],c=[],b={},g=0,l=a.length;g<l;g++){var k=a[g],h;h=k;var m=h.lastIndexOf(".");(h=0<=m?h.substring(m):"")&&(b[h]||(b[h]=[])).push(k)}a=void 0;for(a in b)b.hasOwnProperty(a)&&c.push(b[a]);b=0;for(a=c.length;b<a;b++)p(j,c[b])}return n}function p(d,e){var f=d+m[0]+e.join(m[1]),c=f.length>q;if(1<e.length&&c){a:{for(var c=q-(d+m[0]).length,f=m[1],j=e[0],a=1,b=e.length;a<b;a++)if(j+=f+e[a],j.length>
c){c=[e.splice(0,a),e];break a}c=void 0}p(d,c[0]);p(d,c[1])}else{if(c)throw Error("The combo url is too long: "+f);c=r.length;r[c]=f;f=0;for(j=e.length;f<j;f++)n[d+e[f]]=c}}var v=h.Module,y=v.STATUS.FETCHING,w=h.cache,k=h.data,n=k.comboHash={},r=k.comboHashValues=[],m=["??",","],q=2E3;h.on("load",function(d){var e=d.length;if(!(2>e)){k.comboSyntax&&(m=k.comboSyntax);k.comboMaxLength&&(q=k.comboMaxLength);for(var f=k.comboExcludes,c=[],j=0;j<e;j++){var a=d[j];if(!n[a]){var b;if(b=(w[a]||(w[a]=new v(a))).status<
y)if(b=!f||!f.test(a)){b=a;var g=k.comboSyntax||["??",","],h=g[0],g=g[1];b=!(h&&0<b.indexOf(h)||g&&0<b.indexOf(g))}b&&c.push(a)}}1<c.length&&u(s(c))}});h.on("fetch",function(d){d.requestUri=r[n[d.uri]]||d.uri});if(k.test){var x=h.test||(h.test={});x.uris2paths=s;x.paths2hash=u}define(h.data.dir+"plugin-combo",[],{})})(seajs);
