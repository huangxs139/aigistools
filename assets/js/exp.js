webpackJsonp([3],{0:function(t,e,i){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){return j[t]?j[t][e-1]||0:0}function o(t,e,i,o){for(var s=i,r=e+1;o>r;r++)s+=n(t,r);return s}function s(e){if("object"!=typeof e){var i=e;e=O["default"].reduce(function(t,e){return t=e.id==i?e:t},null)}if(!e)throw new Error("preset was empty");v.empty();for(var n=e.minLevel;n<=e.maxLevel;n++)t("<option />").val(n).text(n).appendTo(v);for(b.empty(),n=e.minLevel;n<=e.maxLevel;n++)t("<option />").val(n).text(n).appendTo(b);var o=_.data("ionRangeSlider");L=!0,o.update({min:e.minLevel,max:e.maxLevel,step:.001,min_interval:1,from:e.minLevel,to:e.maxLevel}),L=!1,m.select2("val",e.id),g.val(e.rarityId),v.val(e.defaultCurrentLevel),y.val(e.defaultCurrentRemainExp),b.val(e.defaultTargetLevel),r(),h()}function r(){var t=g.val(),e=parseInt(v.val()),i=parseInt(b.val());e>i&&b.val(e);var o=n(t,e);y.trigger("touchspin.updatesettings",{min:o?1:0,max:o}),c()}function a(){c()}function l(){var t=g.val(),e=E.data("breeding_plan_id"),i=N["default"].find(R["default"],function(t){return t.id==e}),o=m.val(),s=N["default"].find(O["default"],function(t){return t.id==o});v.val([i.currentLevel]),y.val(n(t,i.currentLevel)),b.val([Math.min(i.targetLevel,s.maxLevel)]),c()}function c(){var t=g.val(),e=parseInt(v.val()),i=parseInt(y.val())||0,o=n(t,e),s=1+e-i/o,r=parseInt(b.val()),a=r,l=_.data("ionRangeSlider");L=!0,l.update({from:s,to:a}),L=!1}function u(){var t=g.val(),e=_.data("from"),i=parseInt(e),o=n(t,i),s=o-Math.floor(o*(e-i)),r=Math.floor(_.data("to"));v.val([i]),y.val(s),b.val([r]),y.trigger("touchspin.updatesettings",{min:0,max:o})}function h(){k&&clearTimeout(k),k=setTimeout(p,z)}function p(){var e=g.val(),i=parseInt(v.val()),n=parseInt(y.val())||0,s=parseInt(b.val()),r=o(e,i,n,s);x.text(r.toLocaleString());var a=C.val(),l=P["default"].reduce(function(t,e){return t=e.id==a?e:t});if(!l)throw new Error("Experience unit does not have experience point.");var c=t('<tr><td class="unit"><span data-ph="unit"></span> セット</td><td class="exp"><span class="diff" data-ph="exp"></span></td></tr>');w.empty();for(var u=l.exp,h=r,p=10;p>0&&h>=0;h-=u,p--){var d=Math.ceil(h/u),f=u*d-r,m=0===f?"diff-eq":f>0?"diff-plus":"diff-minus",_=0===f?"0":(f>0?"+":"")+f.toLocaleString();c.clone().find('[data-ph="unit"]').text(d.toLocaleString()).end().find('[data-ph="exp"]').addClass(m).text(_).end().appendTo(w)}}function d(e){var i=N["default"].find(O["default"],function(t){return t.id==e.id});return t("<div />").append(t("<i />").addClass("icon icon-"+i.icon)).append(t("<span />").text(i.name)).html()}function f(e){m=e.find("select[name=preset_id]").select2({formatSelection:d,formatResult:d}).change(function(){s(t(this).val()),h()}),O["default"].forEach(function(e){t("<option />").val(e.id).text(e.name).appendTo(m)}),x=e.find('[data-ph="total-required-exp"]'),w=e.find('[data-ph="required-exp-unit"]'),C=e.find("select[name=exp_unit_id]").change(function(){h()}),P["default"].forEach(function(e){t("<option />").val(e.id).text(e.name).appendTo(C)}),g=e.find("input[name=rarity_id]"),v=e.find("select[name=current_level]").change(function(){r(),h()}),y=e.find("input[name=current_remain_exp]").click(function(){this.select()}).TouchSpin().change(function(){a(),h()}).keyup(function(){a(),h()}),b=e.find("select[name=target_level]").change(function(){c(),h()});var i;_=e.find("input[name=breeding_span]").ionRangeSlider({type:"double",grid:!0,prefix:"Lv ",prettify:function(t){return Math.floor(t)},decorate_both:!0,values_separator:" → ",onFinish:function(t){var e=Math.floor(t.to);setTimeout(function(){L=!0,i.update({to:e}),L=!1})}}).change(function(){L||(u(),h())}),i=_.data("ionRangeSlider"),E=e.find('[data-ph="breeding_plan_id"]').empty().on("click","button",function(e){e.preventDefault(),E.data("breeding_plan_id",t(e.target).val()),l(),h()}),R["default"].forEach(function(e){t('<button type="button" class="btn btn-default btn-sm" />').text(e.name).val(e.id).appendTo(E)})}var m,g,v,y,b,_,x,w,C,E,k,D=i(191),N=e(D),T=i(192),S=e(T),I=i(193),O=e(I),M=i(194),P=e(M),A=i(195),R=e(A),F={presetId:3},L=!1,z=50,j=S["default"].sort(function(t,e){return 1e3*(t.rarity-e.rarity)+(t.level-e.level)}).reduce(function(t,e){var i=t[e.rarity]||(t[e.rarity]=[]);return i.push(e.next),t},{});t(function(){f(t("#app")),s(F.presetId)})}).call(e,i(2))},191:function(t,e,i){var n,o;(function(){function i(t){function e(e,i,n,o,s,r){for(;s>=0&&r>s;s+=t){var a=o?o[s]:s;n=i(n,e[a],a,e)}return n}return function(i,n,o,s){n=C(n,s,4);var r=!I(i)&&w.keys(i),a=(r||i).length,l=t>0?0:a-1;return arguments.length<3&&(o=i[r?r[l]:l],l+=t),e(i,n,o,r,l,a)}}function s(t){return function(e,i,n){i=E(i,n);for(var o=S(e),s=t>0?0:o-1;s>=0&&o>s;s+=t)if(i(e[s],s,e))return s;return-1}}function r(t,e,i){return function(n,o,s){var r=0,a=S(n);if("number"==typeof s)t>0?r=s>=0?s:Math.max(s+a,r):a=s>=0?Math.min(s+1,a):s+a+1;else if(i&&s&&a)return s=i(n,o),n[s]===o?s:-1;if(o!==o)return s=e(f.call(n,r,a),w.isNaN),s>=0?s+r:-1;for(s=t>0?r:a-1;s>=0&&a>s;s+=t)if(n[s]===o)return s;return-1}}function a(t,e){var i=R.length,n=t.constructor,o=w.isFunction(n)&&n.prototype||h,s="constructor";for(w.has(t,s)&&!w.contains(e,s)&&e.push(s);i--;)s=R[i],s in t&&t[s]!==o[s]&&!w.contains(e,s)&&e.push(s)}var l=this,c=l._,u=Array.prototype,h=Object.prototype,p=Function.prototype,d=u.push,f=u.slice,m=h.toString,g=h.hasOwnProperty,v=Array.isArray,y=Object.keys,b=p.bind,_=Object.create,x=function(){},w=function(t){return t instanceof w?t:this instanceof w?void(this._wrapped=t):new w(t)};"undefined"!=typeof t&&t.exports&&(e=t.exports=w),e._=w,w.VERSION="1.8.3";var C=function(t,e,i){if(void 0===e)return t;switch(null==i?3:i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)};case 4:return function(i,n,o,s){return t.call(e,i,n,o,s)}}return function(){return t.apply(e,arguments)}},E=function(t,e,i){return null==t?w.identity:w.isFunction(t)?C(t,e,i):w.isObject(t)?w.matcher(t):w.property(t)};w.iteratee=function(t,e){return E(t,e,1/0)};var k=function(t,e){return function(i){var n=arguments.length;if(2>n||null==i)return i;for(var o=1;n>o;o++)for(var s=arguments[o],r=t(s),a=r.length,l=0;a>l;l++){var c=r[l];e&&void 0!==i[c]||(i[c]=s[c])}return i}},D=function(t){if(!w.isObject(t))return{};if(_)return _(t);x.prototype=t;var e=new x;return x.prototype=null,e},N=function(t){return function(e){return null==e?void 0:e[t]}},T=Math.pow(2,53)-1,S=N("length"),I=function(t){var e=S(t);return"number"==typeof e&&e>=0&&T>=e};w.each=w.forEach=function(t,e,i){e=C(e,i);var n,o;if(I(t))for(n=0,o=t.length;o>n;n++)e(t[n],n,t);else{var s=w.keys(t);for(n=0,o=s.length;o>n;n++)e(t[s[n]],s[n],t)}return t},w.map=w.collect=function(t,e,i){e=E(e,i);for(var n=!I(t)&&w.keys(t),o=(n||t).length,s=Array(o),r=0;o>r;r++){var a=n?n[r]:r;s[r]=e(t[a],a,t)}return s},w.reduce=w.foldl=w.inject=i(1),w.reduceRight=w.foldr=i(-1),w.find=w.detect=function(t,e,i){var n;return n=I(t)?w.findIndex(t,e,i):w.findKey(t,e,i),void 0!==n&&-1!==n?t[n]:void 0},w.filter=w.select=function(t,e,i){var n=[];return e=E(e,i),w.each(t,function(t,i,o){e(t,i,o)&&n.push(t)}),n},w.reject=function(t,e,i){return w.filter(t,w.negate(E(e)),i)},w.every=w.all=function(t,e,i){e=E(e,i);for(var n=!I(t)&&w.keys(t),o=(n||t).length,s=0;o>s;s++){var r=n?n[s]:s;if(!e(t[r],r,t))return!1}return!0},w.some=w.any=function(t,e,i){e=E(e,i);for(var n=!I(t)&&w.keys(t),o=(n||t).length,s=0;o>s;s++){var r=n?n[s]:s;if(e(t[r],r,t))return!0}return!1},w.contains=w.includes=w.include=function(t,e,i,n){return I(t)||(t=w.values(t)),("number"!=typeof i||n)&&(i=0),w.indexOf(t,e,i)>=0},w.invoke=function(t,e){var i=f.call(arguments,2),n=w.isFunction(e);return w.map(t,function(t){var o=n?e:t[e];return null==o?o:o.apply(t,i)})},w.pluck=function(t,e){return w.map(t,w.property(e))},w.where=function(t,e){return w.filter(t,w.matcher(e))},w.findWhere=function(t,e){return w.find(t,w.matcher(e))},w.max=function(t,e,i){var n,o,s=-(1/0),r=-(1/0);if(null==e&&null!=t){t=I(t)?t:w.values(t);for(var a=0,l=t.length;l>a;a++)n=t[a],n>s&&(s=n)}else e=E(e,i),w.each(t,function(t,i,n){o=e(t,i,n),(o>r||o===-(1/0)&&s===-(1/0))&&(s=t,r=o)});return s},w.min=function(t,e,i){var n,o,s=1/0,r=1/0;if(null==e&&null!=t){t=I(t)?t:w.values(t);for(var a=0,l=t.length;l>a;a++)n=t[a],s>n&&(s=n)}else e=E(e,i),w.each(t,function(t,i,n){o=e(t,i,n),(r>o||o===1/0&&s===1/0)&&(s=t,r=o)});return s},w.shuffle=function(t){for(var e,i=I(t)?t:w.values(t),n=i.length,o=Array(n),s=0;n>s;s++)e=w.random(0,s),e!==s&&(o[s]=o[e]),o[e]=i[s];return o},w.sample=function(t,e,i){return null==e||i?(I(t)||(t=w.values(t)),t[w.random(t.length-1)]):w.shuffle(t).slice(0,Math.max(0,e))},w.sortBy=function(t,e,i){return e=E(e,i),w.pluck(w.map(t,function(t,i,n){return{value:t,index:i,criteria:e(t,i,n)}}).sort(function(t,e){var i=t.criteria,n=e.criteria;if(i!==n){if(i>n||void 0===i)return 1;if(n>i||void 0===n)return-1}return t.index-e.index}),"value")};var O=function(t){return function(e,i,n){var o={};return i=E(i,n),w.each(e,function(n,s){var r=i(n,s,e);t(o,n,r)}),o}};w.groupBy=O(function(t,e,i){w.has(t,i)?t[i].push(e):t[i]=[e]}),w.indexBy=O(function(t,e,i){t[i]=e}),w.countBy=O(function(t,e,i){w.has(t,i)?t[i]++:t[i]=1}),w.toArray=function(t){return t?w.isArray(t)?f.call(t):I(t)?w.map(t,w.identity):w.values(t):[]},w.size=function(t){return null==t?0:I(t)?t.length:w.keys(t).length},w.partition=function(t,e,i){e=E(e,i);var n=[],o=[];return w.each(t,function(t,i,s){(e(t,i,s)?n:o).push(t)}),[n,o]},w.first=w.head=w.take=function(t,e,i){return null==t?void 0:null==e||i?t[0]:w.initial(t,t.length-e)},w.initial=function(t,e,i){return f.call(t,0,Math.max(0,t.length-(null==e||i?1:e)))},w.last=function(t,e,i){return null==t?void 0:null==e||i?t[t.length-1]:w.rest(t,Math.max(0,t.length-e))},w.rest=w.tail=w.drop=function(t,e,i){return f.call(t,null==e||i?1:e)},w.compact=function(t){return w.filter(t,w.identity)};var M=function(t,e,i,n){for(var o=[],s=0,r=n||0,a=S(t);a>r;r++){var l=t[r];if(I(l)&&(w.isArray(l)||w.isArguments(l))){e||(l=M(l,e,i));var c=0,u=l.length;for(o.length+=u;u>c;)o[s++]=l[c++]}else i||(o[s++]=l)}return o};w.flatten=function(t,e){return M(t,e,!1)},w.without=function(t){return w.difference(t,f.call(arguments,1))},w.uniq=w.unique=function(t,e,i,n){w.isBoolean(e)||(n=i,i=e,e=!1),null!=i&&(i=E(i,n));for(var o=[],s=[],r=0,a=S(t);a>r;r++){var l=t[r],c=i?i(l,r,t):l;e?(r&&s===c||o.push(l),s=c):i?w.contains(s,c)||(s.push(c),o.push(l)):w.contains(o,l)||o.push(l)}return o},w.union=function(){return w.uniq(M(arguments,!0,!0))},w.intersection=function(t){for(var e=[],i=arguments.length,n=0,o=S(t);o>n;n++){var s=t[n];if(!w.contains(e,s)){for(var r=1;i>r&&w.contains(arguments[r],s);r++);r===i&&e.push(s)}}return e},w.difference=function(t){var e=M(arguments,!0,!0,1);return w.filter(t,function(t){return!w.contains(e,t)})},w.zip=function(){return w.unzip(arguments)},w.unzip=function(t){for(var e=t&&w.max(t,S).length||0,i=Array(e),n=0;e>n;n++)i[n]=w.pluck(t,n);return i},w.object=function(t,e){for(var i={},n=0,o=S(t);o>n;n++)e?i[t[n]]=e[n]:i[t[n][0]]=t[n][1];return i},w.findIndex=s(1),w.findLastIndex=s(-1),w.sortedIndex=function(t,e,i,n){i=E(i,n,1);for(var o=i(e),s=0,r=S(t);r>s;){var a=Math.floor((s+r)/2);i(t[a])<o?s=a+1:r=a}return s},w.indexOf=r(1,w.findIndex,w.sortedIndex),w.lastIndexOf=r(-1,w.findLastIndex),w.range=function(t,e,i){null==e&&(e=t||0,t=0),i=i||1;for(var n=Math.max(Math.ceil((e-t)/i),0),o=Array(n),s=0;n>s;s++,t+=i)o[s]=t;return o};var P=function(t,e,i,n,o){if(!(n instanceof e))return t.apply(i,o);var s=D(t.prototype),r=t.apply(s,o);return w.isObject(r)?r:s};w.bind=function(t,e){if(b&&t.bind===b)return b.apply(t,f.call(arguments,1));if(!w.isFunction(t))throw new TypeError("Bind must be called on a function");var i=f.call(arguments,2),n=function(){return P(t,n,e,this,i.concat(f.call(arguments)))};return n},w.partial=function(t){var e=f.call(arguments,1),i=function(){for(var n=0,o=e.length,s=Array(o),r=0;o>r;r++)s[r]=e[r]===w?arguments[n++]:e[r];for(;n<arguments.length;)s.push(arguments[n++]);return P(t,i,this,this,s)};return i},w.bindAll=function(t){var e,i,n=arguments.length;if(1>=n)throw new Error("bindAll must be passed function names");for(e=1;n>e;e++)i=arguments[e],t[i]=w.bind(t[i],t);return t},w.memoize=function(t,e){var i=function(n){var o=i.cache,s=""+(e?e.apply(this,arguments):n);return w.has(o,s)||(o[s]=t.apply(this,arguments)),o[s]};return i.cache={},i},w.delay=function(t,e){var i=f.call(arguments,2);return setTimeout(function(){return t.apply(null,i)},e)},w.defer=w.partial(w.delay,w,1),w.throttle=function(t,e,i){var n,o,s,r=null,a=0;i||(i={});var l=function(){a=i.leading===!1?0:w.now(),r=null,s=t.apply(n,o),r||(n=o=null)};return function(){var c=w.now();a||i.leading!==!1||(a=c);var u=e-(c-a);return n=this,o=arguments,0>=u||u>e?(r&&(clearTimeout(r),r=null),a=c,s=t.apply(n,o),r||(n=o=null)):r||i.trailing===!1||(r=setTimeout(l,u)),s}},w.debounce=function(t,e,i){var n,o,s,r,a,l=function(){var c=w.now()-r;e>c&&c>=0?n=setTimeout(l,e-c):(n=null,i||(a=t.apply(s,o),n||(s=o=null)))};return function(){s=this,o=arguments,r=w.now();var c=i&&!n;return n||(n=setTimeout(l,e)),c&&(a=t.apply(s,o),s=o=null),a}},w.wrap=function(t,e){return w.partial(e,t)},w.negate=function(t){return function(){return!t.apply(this,arguments)}},w.compose=function(){var t=arguments,e=t.length-1;return function(){for(var i=e,n=t[e].apply(this,arguments);i--;)n=t[i].call(this,n);return n}},w.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},w.before=function(t,e){var i;return function(){return--t>0&&(i=e.apply(this,arguments)),1>=t&&(e=null),i}},w.once=w.partial(w.before,2);var A=!{toString:null}.propertyIsEnumerable("toString"),R=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];w.keys=function(t){if(!w.isObject(t))return[];if(y)return y(t);var e=[];for(var i in t)w.has(t,i)&&e.push(i);return A&&a(t,e),e},w.allKeys=function(t){if(!w.isObject(t))return[];var e=[];for(var i in t)e.push(i);return A&&a(t,e),e},w.values=function(t){for(var e=w.keys(t),i=e.length,n=Array(i),o=0;i>o;o++)n[o]=t[e[o]];return n},w.mapObject=function(t,e,i){e=E(e,i);for(var n,o=w.keys(t),s=o.length,r={},a=0;s>a;a++)n=o[a],r[n]=e(t[n],n,t);return r},w.pairs=function(t){for(var e=w.keys(t),i=e.length,n=Array(i),o=0;i>o;o++)n[o]=[e[o],t[e[o]]];return n},w.invert=function(t){for(var e={},i=w.keys(t),n=0,o=i.length;o>n;n++)e[t[i[n]]]=i[n];return e},w.functions=w.methods=function(t){var e=[];for(var i in t)w.isFunction(t[i])&&e.push(i);return e.sort()},w.extend=k(w.allKeys),w.extendOwn=w.assign=k(w.keys),w.findKey=function(t,e,i){e=E(e,i);for(var n,o=w.keys(t),s=0,r=o.length;r>s;s++)if(n=o[s],e(t[n],n,t))return n},w.pick=function(t,e,i){var n,o,s={},r=t;if(null==r)return s;w.isFunction(e)?(o=w.allKeys(r),n=C(e,i)):(o=M(arguments,!1,!1,1),n=function(t,e,i){return e in i},r=Object(r));for(var a=0,l=o.length;l>a;a++){var c=o[a],u=r[c];n(u,c,r)&&(s[c]=u)}return s},w.omit=function(t,e,i){if(w.isFunction(e))e=w.negate(e);else{var n=w.map(M(arguments,!1,!1,1),String);e=function(t,e){return!w.contains(n,e)}}return w.pick(t,e,i)},w.defaults=k(w.allKeys,!0),w.create=function(t,e){var i=D(t);return e&&w.extendOwn(i,e),i},w.clone=function(t){return w.isObject(t)?w.isArray(t)?t.slice():w.extend({},t):t},w.tap=function(t,e){return e(t),t},w.isMatch=function(t,e){var i=w.keys(e),n=i.length;if(null==t)return!n;for(var o=Object(t),s=0;n>s;s++){var r=i[s];if(e[r]!==o[r]||!(r in o))return!1}return!0};var F=function(t,e,i,n){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;t instanceof w&&(t=t._wrapped),e instanceof w&&(e=e._wrapped);var o=m.call(t);if(o!==m.call(e))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;case"[object Date]":case"[object Boolean]":return+t===+e}var s="[object Array]"===o;if(!s){if("object"!=typeof t||"object"!=typeof e)return!1;var r=t.constructor,a=e.constructor;if(r!==a&&!(w.isFunction(r)&&r instanceof r&&w.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in e)return!1}i=i||[],n=n||[];for(var l=i.length;l--;)if(i[l]===t)return n[l]===e;if(i.push(t),n.push(e),s){if(l=t.length,l!==e.length)return!1;for(;l--;)if(!F(t[l],e[l],i,n))return!1}else{var c,u=w.keys(t);if(l=u.length,w.keys(e).length!==l)return!1;for(;l--;)if(c=u[l],!w.has(e,c)||!F(t[c],e[c],i,n))return!1}return i.pop(),n.pop(),!0};w.isEqual=function(t,e){return F(t,e)},w.isEmpty=function(t){return null==t?!0:I(t)&&(w.isArray(t)||w.isString(t)||w.isArguments(t))?0===t.length:0===w.keys(t).length},w.isElement=function(t){return!(!t||1!==t.nodeType)},w.isArray=v||function(t){return"[object Array]"===m.call(t)},w.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},w.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){w["is"+t]=function(e){return m.call(e)==="[object "+t+"]"}}),w.isArguments(arguments)||(w.isArguments=function(t){return w.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(w.isFunction=function(t){return"function"==typeof t||!1}),w.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},w.isNaN=function(t){return w.isNumber(t)&&t!==+t},w.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===m.call(t)},w.isNull=function(t){return null===t},w.isUndefined=function(t){return void 0===t},w.has=function(t,e){return null!=t&&g.call(t,e)},w.noConflict=function(){return l._=c,this},w.identity=function(t){return t},w.constant=function(t){return function(){return t}},w.noop=function(){},w.property=N,w.propertyOf=function(t){return null==t?function(){}:function(e){return t[e]}},w.matcher=w.matches=function(t){return t=w.extendOwn({},t),function(e){return w.isMatch(e,t)}},w.times=function(t,e,i){var n=Array(Math.max(0,t));e=C(e,i,1);for(var o=0;t>o;o++)n[o]=e(o);return n},w.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},w.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},z=w.invert(L),j=function(t){var e=function(e){return t[e]},i="(?:"+w.keys(t).join("|")+")",n=RegExp(i),o=RegExp(i,"g");return function(t){return t=null==t?"":""+t,n.test(t)?t.replace(o,e):t}};w.escape=j(L),w.unescape=j(z),w.result=function(t,e,i){var n=null==t?void 0:t[e];return void 0===n&&(n=i),w.isFunction(n)?n.call(t):n};var H=0;w.uniqueId=function(t){var e=++H+"";return t?t+e:e},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var V=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},U=/\\|'|\r|\n|\u2028|\u2029/g,$=function(t){return"\\"+W[t]};w.template=function(t,e,i){!e&&i&&(e=i),e=w.defaults({},e,w.templateSettings);var n=RegExp([(e.escape||V).source,(e.interpolate||V).source,(e.evaluate||V).source].join("|")+"|$","g"),o=0,s="__p+='";t.replace(n,function(e,i,n,r,a){return s+=t.slice(o,a).replace(U,$),o=a+e.length,i?s+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'":n?s+="'+\n((__t=("+n+"))==null?'':__t)+\n'":r&&(s+="';\n"+r+"\n__p+='"),e}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var r=new Function(e.variable||"obj","_",s)}catch(a){throw a.source=s,a}var l=function(t){return r.call(this,t,w)},c=e.variable||"obj";return l.source="function("+c+"){\n"+s+"}",l},w.chain=function(t){var e=w(t);return e._chain=!0,e};var B=function(t,e){return t._chain?w(e).chain():e};w.mixin=function(t){w.each(w.functions(t),function(e){var i=w[e]=t[e];w.prototype[e]=function(){var t=[this._wrapped];return d.apply(t,arguments),B(this,i.apply(w,t))}})},w.mixin(w),w.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=u[t];w.prototype[t]=function(){var i=this._wrapped;return e.apply(i,arguments),"shift"!==t&&"splice"!==t||0!==i.length||delete i[0],B(this,i)}}),w.each(["concat","join","slice"],function(t){var e=u[t];w.prototype[t]=function(){return B(this,e.apply(this._wrapped,arguments))}}),w.prototype.value=function(){return this._wrapped},w.prototype.valueOf=w.prototype.toJSON=w.prototype.value,w.prototype.toString=function(){return""+this._wrapped},n=[],o=function(){return w}.apply(e,n),!(void 0!==o&&(t.exports=o))}).call(this)},192:function(t,e){t.exports=[{rarity:1,level:1,next:32},{rarity:1,level:2,next:33},{rarity:1,level:3,next:35},{rarity:1,level:4,next:35},{rarity:1,level:5,next:37},{rarity:1,level:6,next:39},{rarity:1,level:7,next:39},{rarity:1,level:8,next:41},{rarity:1,level:9,next:42},{rarity:1,level:10,next:85},{rarity:1,level:11,next:88},{rarity:1,level:12,next:92},{rarity:1,level:13,next:95},{rarity:1,level:14,next:98},{rarity:1,level:15,next:102},{rarity:1,level:16,next:105},{rarity:1,level:17,next:108},{rarity:1,level:18,next:112},{rarity:1,level:19,next:115},{rarity:1,level:20,next:170},{rarity:1,level:21,next:176},{rarity:1,level:22,next:183},{rarity:1,level:23,next:190},{rarity:1,level:24,next:197},{rarity:1,level:25,next:203},{rarity:1,level:26,next:210},{rarity:1,level:27,next:217},{rarity:1,level:28,next:224},{rarity:1,level:29,next:230},{rarity:1,level:30,next:0},{rarity:2,level:1,next:35},{rarity:2,level:2,next:37},{rarity:2,level:3,next:38},{rarity:2,level:4,next:39},{rarity:2,level:5,next:40},{rarity:2,level:6,next:43},{rarity:2,level:7,next:43},{rarity:2,level:8,next:45},{rarity:2,level:9,next:46},{rarity:2,level:10,next:94},{rarity:2,level:11,next:97},{rarity:2,level:12,next:101},{rarity:2,level:13,next:104},{rarity:2,level:14,next:108},{rarity:2,level:15,next:112},{rarity:2,level:16,next:116},{rarity:2,level:17,next:119},{rarity:2,level:18,next:123},{rarity:2,level:19,next:126},{rarity:2,level:20,next:187},{rarity:2,level:21,next:194},{rarity:2,level:22,next:201},{rarity:2,level:23,next:209},{rarity:2,level:24,next:217},{rarity:2,level:25,next:223},{rarity:2,level:26,next:231},{rarity:2,level:27,next:239},{rarity:2,level:28,next:246},{rarity:2,level:29,next:253},{rarity:2,level:30,next:312},{rarity:2,level:31,next:323},{rarity:2,level:32,next:336},{rarity:2,level:33,next:347},{rarity:2,level:34,next:361},{rarity:2,level:35,next:373},{rarity:2,level:36,next:385},{rarity:2,level:37,next:398},{rarity:2,level:38,next:409},{rarity:2,level:39,next:424},{rarity:2,level:40,next:0},{rarity:3,level:1,next:38},{rarity:3,level:2,next:40},{rarity:3,level:3,next:42},{rarity:3,level:4,next:42},{rarity:3,level:5,next:44},{rarity:3,level:6,next:47},{rarity:3,level:7,next:47},{rarity:3,level:8,next:49},{rarity:3,level:9,next:51},{rarity:3,level:10,next:102},{rarity:3,level:11,next:105},{rarity:3,level:12,next:111},{rarity:3,level:13,next:114},{rarity:3,level:14,next:117},{rarity:3,level:15,next:123},{rarity:3,level:16,next:126},{rarity:3,level:17,next:129},{rarity:3,level:18,next:135},{rarity:3,level:19,next:138},{rarity:3,level:20,next:204},{rarity:3,level:21,next:211},{rarity:3,level:22,next:219},{rarity:3,level:23,next:228},{rarity:3,level:24,next:237},{rarity:3,level:25,next:243},{rarity:3,level:26,next:252},{rarity:3,level:27,next:261},{rarity:3,level:28,next:269},{rarity:3,level:29,next:276},{rarity:3,level:30,next:339},{rarity:3,level:31,next:353},{rarity:3,level:32,next:366},{rarity:3,level:33,next:379},{rarity:3,level:34,next:394},{rarity:3,level:35,next:407},{rarity:3,level:36,next:420},{rarity:3,level:37,next:434},{rarity:3,level:38,next:446},{rarity:3,level:39,next:462},{rarity:3,level:40,next:678},{rarity:3,level:41,next:705},{rarity:3,level:42,next:732},{rarity:3,level:43,next:759},{rarity:3,level:44,next:788},{rarity:3,level:45,next:812},{rarity:3,level:46,next:841},{rarity:3,level:47,next:868},{rarity:3,level:48,next:895},{rarity:3,level:49,next:922},{rarity:3,level:50,next:0},{rarity:4,level:1,next:42},{rarity:4,level:2,next:43},{rarity:4,level:3,next:45},{rarity:4,level:4,next:46},{rarity:4,level:5,next:48},{rarity:4,level:6,next:50},{rarity:4,level:7,next:51},{rarity:4,level:8,next:53},{rarity:4,level:9,next:55},{rarity:4,level:10,next:110},{rarity:4,level:11,next:115},{rarity:4,level:12,next:119},{rarity:4,level:13,next:124},{rarity:4,level:14,next:127},{rarity:4,level:15,next:133},{rarity:4,level:16,next:136},{rarity:4,level:17,next:141},{rarity:4,level:18,next:145},{rarity:4,level:19,next:150},{rarity:4,level:20,next:221},{rarity:4,level:21,next:229},{rarity:4,level:22,next:238},{rarity:4,level:23,next:247},{rarity:4,level:24,next:256},{rarity:4,level:25,next:264},{rarity:4,level:26,next:273},{rarity:4,level:27,next:282},{rarity:4,level:28,next:291},{rarity:4,level:29,next:299},{rarity:4,level:30,next:368},{rarity:4,level:31,next:382},{rarity:4,level:32,next:397},{rarity:4,level:33,next:410},{rarity:4,level:34,next:427},{rarity:4,level:35,next:440},{rarity:4,level:36,next:455},{rarity:4,level:37,next:471},{rarity:4,level:38,next:484},{rarity:4,level:39,next:500},{rarity:4,level:40,next:735},{rarity:4,level:41,next:763},{rarity:4,level:42,next:793},{rarity:4,level:43,next:823},{rarity:4,level:44,next:852},{rarity:4,level:45,next:881},{rarity:4,level:46,next:911},{rarity:4,level:47,next:940},{rarity:4,level:48,next:970},{rarity:4,level:49,next:998},{rarity:4,level:50,next:1102},{rarity:4,level:51,next:1146},{rarity:4,level:52,next:1189},{rarity:4,level:53,next:1235},{rarity:4,level:54,next:1278},{rarity:4,level:55,next:1322},{rarity:4,level:56,next:1365},{rarity:4,level:57,next:1411},{rarity:4,level:58,next:1454},{rarity:4,level:59,next:1498},{rarity:4,level:60,next:1469},{rarity:4,level:61,next:1527},{rarity:4,level:62,next:1588},{rarity:4,level:63,next:1644},{rarity:4,level:64,next:1705},{rarity:4,level:65,next:1762},{rarity:4,level:66,next:1822},{rarity:4,level:67,next:1879},{rarity:4,level:68,next:1940},{rarity:4,level:69,next:1998},{rarity:4,level:70,next:1836},{rarity:4,level:71,next:1909},{rarity:4,level:72,next:1983},{rarity:4,level:73,next:2057},{rarity:4,level:74,next:2130},{rarity:4,level:75,next:2204},{rarity:4,level:76,next:2276},{rarity:4,level:77,next:2350},{rarity:4,level:78,next:2424},{rarity:4,level:79,next:2497},{rarity:4,level:80,next:0},{rarity:5,level:1,next:45},{rarity:5,level:2,next:46},{rarity:5,level:3,next:49},{rarity:5,level:4,next:49},{rarity:5,level:5,next:52},{rarity:5,level:6,next:54},{rarity:5,level:7,next:55},{rarity:5,level:8,next:57},{rarity:5,level:9,next:59},{rarity:5,level:10,next:119},{rarity:5,level:11,next:123},{rarity:5,level:12,next:129},{rarity:5,level:13,next:133},{rarity:5,level:14,next:137},{rarity:5,level:15,next:143},{rarity:5,level:16,next:147},{rarity:5,level:17,next:151},{rarity:5,level:18,next:157},{rarity:5,level:19,next:161},{rarity:5,level:20,next:238},{rarity:5,level:21,next:247},{rarity:5,level:22,next:256},{rarity:5,level:23,next:266},{rarity:5,level:24,next:276},{rarity:5,level:25,next:284},{rarity:5,level:26,next:294},{rarity:5,level:27,next:304},{rarity:5,level:28,next:313},{rarity:5,level:29,next:322},{rarity:5,level:30,next:396},{rarity:5,level:31,next:412},{rarity:5,level:32,next:427},{rarity:5,level:33,next:442},{rarity:5,level:34,next:460},{rarity:5,level:35,next:474},{rarity:5,level:36,next:490},{rarity:5,level:37,next:507},{rarity:5,level:38,next:521},{rarity:5,level:39,next:539},{rarity:5,level:40,next:791},{rarity:5,level:41,next:822},{rarity:5,level:42,next:854},{rarity:5,level:43,next:886},{rarity:5,level:44,next:918},{rarity:5,level:45,next:948},{rarity:5,level:46,next:981},{rarity:5,level:47,next:1013},{rarity:5,level:48,next:1044},{rarity:5,level:49,next:1075},{rarity:5,level:50,next:1187},{rarity:5,level:51,next:1234},{rarity:5,level:52,next:1281},{rarity:5,level:53,next:1330},{rarity:5,level:54,next:1376},{rarity:5,level:55,next:1424},{rarity:5,level:56,next:1470},{rarity:5,level:57,next:1519},{rarity:5,level:58,next:1566},{rarity:5,level:59,next:1613},{rarity:5,level:60,next:1582},{rarity:5,level:61,next:1645},{rarity:5,level:62,next:1710},{rarity:5,level:63,next:1771},{rarity:5,level:64,next:1835},{rarity:5,level:65,next:1898},{rarity:5,level:66,next:1962},{rarity:5,level:67,next:2024},{rarity:5,level:68,next:2089},{rarity:5,level:69,next:2152},{rarity:5,level:70,next:1977},{rarity:5,level:71,next:2056},{rarity:5,level:72,next:2135},{rarity:5,level:73,next:2215},{rarity:5,level:74,next:2295},{rarity:5,level:75,next:2373},{rarity:5,level:76,next:2451},{rarity:5,level:77,next:2531},{rarity:5,level:78,next:2610},{rarity:5,level:79,next:2689},{rarity:5,level:80,next:2769},{rarity:5,level:81,next:2879},{rarity:5,level:82,next:2990},{rarity:5,level:83,next:3101},{rarity:5,level:84,next:3210},{rarity:5,level:85,next:3323},{rarity:5,level:86,next:3432},{rarity:5,level:87,next:3544},{rarity:5,level:88,next:3654},{rarity:5,level:89,next:3766},{rarity:5,level:90,next:0},{rarity:6,level:1,next:48},{rarity:6,level:2,next:50},{rarity:6,level:3,next:52},{rarity:6,level:4,next:53},{rarity:6,level:5,next:55},{rarity:6,level:6,next:59},{rarity:6,level:7,next:58},{rarity:6,level:8,next:62},{rarity:6,level:9,next:63},{rarity:6,level:10,next:127},{rarity:6,level:11,next:132},{rarity:6,level:12,next:138},{rarity:6,level:13,next:143},{rarity:6,level:14,next:147},{rarity:6,level:15,next:153},{rarity:6,level:16,next:157},{rarity:6,level:17,next:162},{rarity:6,level:18,next:168},{rarity:6,level:19,next:173},{rarity:6,level:20,next:255},{rarity:6,level:21,next:264},{rarity:6,level:22,next:274},{rarity:6,level:23,next:285},{rarity:6,level:24,next:296},{rarity:6,level:25,next:304},{rarity:6,level:26,next:315},{rarity:6,level:27,next:326},{rarity:6,level:28,next:336},{rarity:6,level:29,next:345},{rarity:6,level:30,next:424},{rarity:6,level:31,next:441},{rarity:6,level:32,next:458},{rarity:6,level:33,next:474},{rarity:6,level:34,next:492},{rarity:6,level:35,next:508},{rarity:6,level:36,next:525},{rarity:6,level:37,next:543},{rarity:6,level:38,next:558},{rarity:6,level:39,next:578},{rarity:6,level:40,next:847},{rarity:6,level:41,next:881},{rarity:6,level:42,next:915},{rarity:6,level:43,next:949},{rarity:6,level:44,next:984},{rarity:6,level:45,next:1016},{rarity:6,level:46,next:1051},{rarity:6,level:47,next:1085},{rarity:6,level:48,next:1119},{rarity:6,level:49,next:1152},{rarity:6,level:50,next:1272},{rarity:6,level:51,next:1321},{rarity:6,level:52,next:1373},{rarity:6,level:53,next:1425},{rarity:6,level:54,next:1474},{rarity:6,level:55,next:1526},{rarity:6,level:56,next:1575},{rarity:6,level:57,next:1627},{rarity:6,level:58,next:1679},{rarity:6,level:59,next:1728},{rarity:6,level:60,next:1695},{rarity:6,level:61,next:1762},{rarity:6,level:62,next:1832},{rarity:6,level:63,next:1897},{rarity:6,level:64,next:1967},{rarity:6,level:65,next:2034},{rarity:6,level:66,next:2101},{rarity:6,level:67,next:2169},{rarity:6,level:68,next:2238},{rarity:6,level:69,next:2306},{rarity:6,level:70,next:2118},{rarity:6,level:71,next:2203},{rarity:6,level:72,next:2288},{rarity:6,level:73,next:2373},{rarity:6,level:74,next:2458},{rarity:6,level:75,next:2543},{rarity:6,level:76,next:2626},{rarity:6,level:77,next:2712},{rarity:6,level:78,next:2796},{rarity:6,level:79,next:2882},{rarity:6,level:80,next:2967},{rarity:6,level:81,next:3084},{rarity:6,level:82,next:3204},{rarity:6,level:83,next:3322},{rarity:6,level:84,next:3440},{rarity:6,level:85,next:3559},{rarity:6,level:86,next:3678},{rarity:6,level:87,next:3797},{rarity:6,level:88,next:3915},{rarity:6,level:89,next:4035},{rarity:6,level:90,next:2965},{rarity:6,level:91,next:3086},{rarity:6,level:92,next:3202},{rarity:6,level:93,next:3323},{rarity:6,level:94,next:3441},{rarity:6,level:95,next:3559},{rarity:6,level:96,next:3677},{rarity:6,level:97,next:3798},{rarity:6,level:98,next:3915},{rarity:6,level:99,next:0},{rarity:7,level:1,next:45},{rarity:7,level:2,next:46},{rarity:7,level:3,next:49},{rarity:7,level:4,next:49},{rarity:7,level:5,next:52},{rarity:7,level:6,next:54},{rarity:7,level:7,
next:55},{rarity:7,level:8,next:57},{rarity:7,level:9,next:59},{rarity:7,level:10,next:119},{rarity:7,level:11,next:123},{rarity:7,level:12,next:129},{rarity:7,level:13,next:133},{rarity:7,level:14,next:137},{rarity:7,level:15,next:143},{rarity:7,level:16,next:147},{rarity:7,level:17,next:151},{rarity:7,level:18,next:157},{rarity:7,level:19,next:161},{rarity:7,level:20,next:238},{rarity:7,level:21,next:247},{rarity:7,level:22,next:256},{rarity:7,level:23,next:266},{rarity:7,level:24,next:276},{rarity:7,level:25,next:284},{rarity:7,level:26,next:294},{rarity:7,level:27,next:304},{rarity:7,level:28,next:313},{rarity:7,level:29,next:322},{rarity:7,level:30,next:396},{rarity:7,level:31,next:412},{rarity:7,level:32,next:427},{rarity:7,level:33,next:442},{rarity:7,level:34,next:460},{rarity:7,level:35,next:474},{rarity:7,level:36,next:490},{rarity:7,level:37,next:507},{rarity:7,level:38,next:521},{rarity:7,level:39,next:539},{rarity:7,level:40,next:791},{rarity:7,level:41,next:822},{rarity:7,level:42,next:854},{rarity:7,level:43,next:886},{rarity:7,level:44,next:918},{rarity:7,level:45,next:948},{rarity:7,level:46,next:981},{rarity:7,level:47,next:1013},{rarity:7,level:48,next:1044},{rarity:7,level:49,next:1075},{rarity:7,level:50,next:1187},{rarity:7,level:51,next:1234},{rarity:7,level:52,next:1281},{rarity:7,level:53,next:1330},{rarity:7,level:54,next:1376},{rarity:7,level:55,next:1424},{rarity:7,level:56,next:1470},{rarity:7,level:57,next:1519},{rarity:7,level:58,next:1566},{rarity:7,level:59,next:1613},{rarity:7,level:60,next:1582},{rarity:7,level:61,next:1645},{rarity:7,level:62,next:1710},{rarity:7,level:63,next:1771},{rarity:7,level:64,next:1835},{rarity:7,level:65,next:1898},{rarity:7,level:66,next:1962},{rarity:7,level:67,next:2024},{rarity:7,level:68,next:2089},{rarity:7,level:69,next:2152},{rarity:7,level:70,next:1977},{rarity:7,level:71,next:2056},{rarity:7,level:72,next:2135},{rarity:7,level:73,next:2215},{rarity:7,level:74,next:2295},{rarity:7,level:75,next:2373},{rarity:7,level:76,next:2451},{rarity:7,level:77,next:2531},{rarity:7,level:78,next:2610},{rarity:7,level:79,next:2689},{rarity:7,level:80,next:2769},{rarity:7,level:81,next:2879},{rarity:7,level:82,next:2990},{rarity:7,level:83,next:3101},{rarity:7,level:84,next:3210},{rarity:7,level:85,next:0}]},193:function(t,e){t.exports=[{id:1,name:"アイロン",rarityId:1,minLevel:1,maxLevel:30,defaultCurrentLevel:1,defaultCurrentRemainExp:32,defaultTargetLevel:30,icon:"iron-sprit"},{id:2,name:"ブロンズ",rarityId:2,minLevel:1,maxLevel:40,defaultCurrentLevel:1,defaultCurrentRemainExp:35,defaultTargetLevel:40,icon:"bronze-sprit"},{id:3,name:"シルバー",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:50,icon:"silver-sprit"},{id:8,name:"覚醒素材用30CC銀",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:30,icon:"silver-sprit"},{id:4,name:"ゴールド",rarityId:4,minLevel:1,maxLevel:80,defaultCurrentLevel:1,defaultCurrentRemainExp:42,defaultTargetLevel:60,icon:"gold-sprit"},{id:5,name:"プラチナ",rarityId:5,minLevel:1,maxLevel:90,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:70,icon:"platinum-sprit"},{id:6,name:"ブラック",rarityId:6,minLevel:1,maxLevel:99,defaultCurrentLevel:1,defaultCurrentRemainExp:48,defaultTargetLevel:80,icon:"black-sprit"},{id:7,name:"サファイア",rarityId:7,minLevel:1,maxLevel:85,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:65,icon:"time-sprit"}]},194:function(t,e){t.exports=[{id:1,name:"プラチナアーマー8倍",exp:8e3,icon:"platinum-armer"},{id:7,name:"プラチナアーマー4.5倍",exp:4500,icon:"platinum-armer"},{id:2,name:"プラチナアーマー3.375倍",exp:3375,icon:"platinum-armer"},{id:3,name:"団長8倍",exp:4e4,icon:"black-armer"},{id:4,name:"ハッピー",exp:15e4,icon:"happy"},{id:5,name:"ヨジロウ4人 (風神Lv27)",exp:920,icon:"yojiro"},{id:6,name:"ハシム4人 (拠点後Lv20)",exp:780,icon:"hashim"}]},195:function(t,e){t.exports=[{id:1,name:"1→30",currentLevel:1,targetLevel:30},{id:2,name:"1→50",currentLevel:1,targetLevel:50},{id:3,name:"1→60",currentLevel:1,targetLevel:60},{id:4,name:"1→80",currentLevel:1,targetLevel:80},{id:7,name:"1→85",currentLevel:1,targetLevel:80},{id:5,name:"1→90",currentLevel:1,targetLevel:90},{id:6,name:"1→99",currentLevel:1,targetLevel:99}]}});