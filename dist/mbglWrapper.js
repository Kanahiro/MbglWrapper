!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports={clear(e){e.setStyle({version:8,sources:{},layers:[]},{diff:!1})}}},function(e,t){e.exports={defaultLayerId:function(e,t){let o=0;for(;!r(e,t+String(o));)o+=1;return t+String(o)},cleanOptions:function(e,t){let r=o(t);for(key in e)r[key]=e[key];return r},waitForLoading:function(e,t,r){let o=setInterval((function(){e.isStyleLoaded()&&(clearInterval(o),r())}),t)}};let r=function(e,t){return void 0===e.getLayer(t)},o=function(e){switch(e){case"MultiPolygon":case"Polygon":return{type:"fill",paint:{"fill-color":n(),"fill-opacity":.8}};case"MultiLineString":case"String":return{type:"line",paint:{"line-color":n(),"line-opacity":.8,"line-width":3}};case"Point":return{type:"circle",paint:{"circle-color":n(),"circle-opacity":.8,"circle-radius":5,"circle-stroke-color":"#ffffff","circle-stroke-width":1}};case"raster":return{tileSize:256,attribution:"",minzoom:0,maxzoom:22,paint:{}};case"vector":return{tileSize:512,attribution:"",minzoom:0,maxzoom:22,paint:{}}}},n=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)}},function(e,t,r){let o=r(3),n=r(4),i=r(5),a=r(0);class l{constructor(e){this.map=e}clear(){a.clear(this.map)}addVector(e,t={}){o.add(this.map,e,t)}addRaster(e,t={}){n.add(this.map,e,t)}addGeojson(e,t={}){i.add(this.map,e,t)}}e.exports=l,"undefined"!=typeof window&&(window.MbglWrapper=l)},function(e,t,r){let o=r(0),n=r(1);e.exports={add:function(e,t,r={}){let i=r.id;void 0===i&&(i=n.defaultLayerId(e,"vector"));let a=e.getStyle(),l=a.sources,c=a.layers;e.setStyle(t,{diff:!1}),n.waitForLoading(e,100,(function(){let t=e.getStyle(),r=t.sources,n=t.layers;console.log(t),o.clear(e);let i={};for(key in l)i[key]=l[key];for(key in r)i[key]=r[key];let a={version:8,sources:i,layers:c.concat(n)};null!=t.glyphs&&(a.glyphs=t.glyphs),null!=t.sprite&&(a.sprite=t.sprite),e.setStyle(a,{diff:!1})}))}}},function(e,t,r){r(0);let o=r(1);e.exports={add:function(e,t,r={}){let n=r.id;void 0===n&&(n=o.defaultLayerId(e,"raster"));let i=o.cleanOptions(r,"raster");o.waitForLoading(e,100,(function(){e.addSource(n,{type:"raster",tiles:[t],tileSize:i.tileSize,attribution:i.attribution}),e.addLayer({id:n,type:"raster",source:n,minzoom:i.minzoom,maxzoom:i.maxzoom,paint:i.paint})}))}}},function(e,t,r){r(0);let o=r(1);e.exports={add:function(e,t,r={}){let i=r.id;void 0===i&&(i=o.defaultLayerId(e,"geojson"));let a=n(t),l=o.cleanOptions(r,a);o.waitForLoading(e,100,(function(){e.addSource(i,{type:"geojson",data:t}),e.addLayer({id:i,type:l.type,source:i,layout:{},paint:l.paint})}))}};let n=function(e){return"FeatureCollection"===e.type?e.features[0].geometry.type:e.geometry.type}}]);