webpackJsonp([5],{0:function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){return J[e]?J[e][t-1]||0:0}function n(e,t,r,n){for(var a=r,i=t+1;i<n;i++)a+=l(e,i);return a}function a(t){if("object"!==("undefined"==typeof t?"undefined":c(t))){var r=t;t=k["default"].reduce(function(e,t){return e=t.id==r?t:e},null)}if(!t)throw new Error("preset was empty");L.empty();for(var l=t.minLevel;l<=t.maxLevel;l++)e("<option />").val(l).text(l).appendTo(L);for(h.empty(),l=t.minLevel;l<=t.maxLevel;l++)e("<option />").val(l).text(l).appendTo(h);var n=b.data("ionRangeSlider");D=!0,n.update({min:t.minLevel,max:t.maxLevel,step:.001,min_interval:1,from:t.minLevel,to:t.maxLevel}),D=!1,m.select2("val",t.id),s.val(t.rarityId),L.val(t.defaultCurrentLevel),g.val(t.defaultCurrentRemainExp),h.val(t.defaultTargetLevel),i(),d()}function i(){var e=s.val(),t=parseInt(L.val()),r=parseInt(h.val());r<t&&h.val(t);var n=l(e,t);g.trigger("touchspin.updatesettings",{min:n?1:0,max:n}),y()}function v(){y()}function x(){var e=s.val(),t=T.data("breeding_plan_id"),r=Array.find(j["default"],function(e){return e.id==t}),n=m.val(),a=Array.find(k["default"],function(e){return e.id==n});L.val([r.currentLevel]),g.val(l(e,r.currentLevel)),h.val([Math.min(r.targetLevel,a.maxLevel)]),y()}function y(){var e=s.val(),t=parseInt(L.val()),r=parseInt(g.val())||0,n=l(e,t),a=1+t-r/n,i=parseInt(h.val()),v=i,x=b.data("ionRangeSlider");D=!0,x.update({from:a,to:v}),D=!1}function u(){var e=s.val(),t=b.data("from"),r=parseInt(t),n=l(e,r),a=n-Math.floor(n*(t-r)),i=Math.floor(b.data("to"));L.val([r]),g.val(a),h.val([i]),g.trigger("touchspin.updatesettings",{min:0,max:n})}function d(){E&&clearTimeout(E),E=setTimeout(o,F)}function o(){var t=s.val(),r=parseInt(L.val()),l=parseInt(g.val())||0,a=parseInt(h.val()),i=n(t,r,l,a);C.text(i.toLocaleString());var v=_.val(),x=q["default"].reduce(function(e,t){return e=t.id==v?t:e});if(!x)throw new Error("Experience unit does not have experience point.");var y=e('<tr><td class="unit"><span data-ph="unit"></span> セット</td><td class="exp"><span class="diff" data-ph="exp"></span></td></tr>');I.empty();for(var u=x.exp,d=i,o=10;o>0&&d>=0;d-=u,o--){var f=Math.ceil(d/u),p=u*f-i,c=0===p?"diff-eq":p>0?"diff-plus":"diff-minus",m=0===p?"0":(p>0?"+":"")+p.toLocaleString();y.clone().find('[data-ph="unit"]').text(f.toLocaleString()).end().find('[data-ph="exp"]').addClass(c).text(m).end().appendTo(I)}}function f(t){var r=Array.find(k["default"],function(e){return e.id==t.id});return e("<div />").append(e("<i />").addClass("icon icon-"+r.icon)).append(e("<span />").text(r.name)).html()}function p(t){m=t.find("select[name=preset_id]").select2({formatSelection:f,formatResult:f}).change(function(){a(e(this).val()),d()}),k["default"].forEach(function(t){e("<option />").val(t.id).text(t.name).appendTo(m)}),C=t.find('[data-ph="total-required-exp"]'),I=t.find('[data-ph="required-exp-unit"]'),_=t.find("select[name=exp_unit_id]").change(function(){d()}),q["default"].forEach(function(t){e("<option />").val(t.id).text(t.name).appendTo(_)}),s=t.find("input[name=rarity_id]"),L=t.find("select[name=current_level]").change(function(){i(),d()}),g=t.find("input[name=current_remain_exp]").click(function(){this.select()}).TouchSpin().change(function(){v(),d()}).keyup(function(){v(),d()}),h=t.find("select[name=target_level]").change(function(){y(),d()});var r;b=t.find("input[name=breeding_span]").ionRangeSlider({type:"double",grid:!0,prefix:"Lv ",prettify:function(e){return Math.floor(e)},decorate_both:!0,values_separator:" → ",onFinish:function(e){var t=Math.floor(e.to);setTimeout(function(){D=!0,r.update({to:t}),D=!1})}}).change(function(){D||(u(),d())}),r=b.data("ionRangeSlider"),T=t.find('[data-ph="breeding_plan_id"]').empty().on("click","button",function(t){t.preventDefault(),T.data("breeding_plan_id",e(t.target).val()),x(),d()}),j["default"].forEach(function(t){e('<button type="button" class="btn btn-default btn-sm" />').text(t.name).val(t.id).appendTo(T)})}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};r(2);var m,s,L,g,h,b,C,I,_,T,E,R=r(513),S=t(R),M=r(514),k=t(M),w=r(515),q=t(w),A=r(516),j=t(A),z={presetId:3},D=!1,F=50,J=S["default"].sort(function(e,t){return 1e3*(e.rarity-t.rarity)+(e.level-t.level)}).reduce(function(e,t){var r=e[t.rarity]||(e[t.rarity]=[]);return r.push(t.next),e},{});e(function(){p(e("#app")),a(z.presetId)})}).call(t,r(1))},513:function(e,t){e.exports=[{rarity:1,level:1,next:32},{rarity:1,level:2,next:33},{rarity:1,level:3,next:35},{rarity:1,level:4,next:35},{rarity:1,level:5,next:37},{rarity:1,level:6,next:39},{rarity:1,level:7,next:39},{rarity:1,level:8,next:41},{rarity:1,level:9,next:42},{rarity:1,level:10,next:85},{rarity:1,level:11,next:88},{rarity:1,level:12,next:92},{rarity:1,level:13,next:95},{rarity:1,level:14,next:98},{rarity:1,level:15,next:102},{rarity:1,level:16,next:105},{rarity:1,level:17,next:108},{rarity:1,level:18,next:112},{rarity:1,level:19,next:115},{rarity:1,level:20,next:170},{rarity:1,level:21,next:176},{rarity:1,level:22,next:183},{rarity:1,level:23,next:190},{rarity:1,level:24,next:197},{rarity:1,level:25,next:203},{rarity:1,level:26,next:210},{rarity:1,level:27,next:217},{rarity:1,level:28,next:224},{rarity:1,level:29,next:230},{rarity:1,level:30,next:0},{rarity:2,level:1,next:35},{rarity:2,level:2,next:37},{rarity:2,level:3,next:38},{rarity:2,level:4,next:39},{rarity:2,level:5,next:40},{rarity:2,level:6,next:43},{rarity:2,level:7,next:43},{rarity:2,level:8,next:45},{rarity:2,level:9,next:46},{rarity:2,level:10,next:94},{rarity:2,level:11,next:97},{rarity:2,level:12,next:101},{rarity:2,level:13,next:104},{rarity:2,level:14,next:108},{rarity:2,level:15,next:112},{rarity:2,level:16,next:116},{rarity:2,level:17,next:119},{rarity:2,level:18,next:123},{rarity:2,level:19,next:126},{rarity:2,level:20,next:187},{rarity:2,level:21,next:194},{rarity:2,level:22,next:201},{rarity:2,level:23,next:209},{rarity:2,level:24,next:217},{rarity:2,level:25,next:223},{rarity:2,level:26,next:231},{rarity:2,level:27,next:239},{rarity:2,level:28,next:246},{rarity:2,level:29,next:253},{rarity:2,level:30,next:312},{rarity:2,level:31,next:323},{rarity:2,level:32,next:336},{rarity:2,level:33,next:347},{rarity:2,level:34,next:361},{rarity:2,level:35,next:373},{rarity:2,level:36,next:385},{rarity:2,level:37,next:398},{rarity:2,level:38,next:409},{rarity:2,level:39,next:424},{rarity:2,level:40,next:0},{rarity:3,level:1,next:38},{rarity:3,level:2,next:40},{rarity:3,level:3,next:42},{rarity:3,level:4,next:42},{rarity:3,level:5,next:44},{rarity:3,level:6,next:47},{rarity:3,level:7,next:47},{rarity:3,level:8,next:49},{rarity:3,level:9,next:51},{rarity:3,level:10,next:102},{rarity:3,level:11,next:105},{rarity:3,level:12,next:111},{rarity:3,level:13,next:114},{rarity:3,level:14,next:117},{rarity:3,level:15,next:123},{rarity:3,level:16,next:126},{rarity:3,level:17,next:129},{rarity:3,level:18,next:135},{rarity:3,level:19,next:138},{rarity:3,level:20,next:204},{rarity:3,level:21,next:211},{rarity:3,level:22,next:219},{rarity:3,level:23,next:228},{rarity:3,level:24,next:237},{rarity:3,level:25,next:243},{rarity:3,level:26,next:252},{rarity:3,level:27,next:261},{rarity:3,level:28,next:269},{rarity:3,level:29,next:276},{rarity:3,level:30,next:339},{rarity:3,level:31,next:353},{rarity:3,level:32,next:366},{rarity:3,level:33,next:379},{rarity:3,level:34,next:394},{rarity:3,level:35,next:407},{rarity:3,level:36,next:420},{rarity:3,level:37,next:434},{rarity:3,level:38,next:446},{rarity:3,level:39,next:462},{rarity:3,level:40,next:678},{rarity:3,level:41,next:705},{rarity:3,level:42,next:732},{rarity:3,level:43,next:759},{rarity:3,level:44,next:788},{rarity:3,level:45,next:812},{rarity:3,level:46,next:841},{rarity:3,level:47,next:868},{rarity:3,level:48,next:895},{rarity:3,level:49,next:922},{rarity:3,level:50,next:0},{rarity:4,level:1,next:42},{rarity:4,level:2,next:43},{rarity:4,level:3,next:45},{rarity:4,level:4,next:46},{rarity:4,level:5,next:48},{rarity:4,level:6,next:50},{rarity:4,level:7,next:51},{rarity:4,level:8,next:53},{rarity:4,level:9,next:55},{rarity:4,level:10,next:110},{rarity:4,level:11,next:115},{rarity:4,level:12,next:119},{rarity:4,level:13,next:124},{rarity:4,level:14,next:127},{rarity:4,level:15,next:133},{rarity:4,level:16,next:136},{rarity:4,level:17,next:141},{rarity:4,level:18,next:145},{rarity:4,level:19,next:150},{rarity:4,level:20,next:221},{rarity:4,level:21,next:229},{rarity:4,level:22,next:238},{rarity:4,level:23,next:247},{rarity:4,level:24,next:256},{rarity:4,level:25,next:264},{rarity:4,level:26,next:273},{rarity:4,level:27,next:282},{rarity:4,level:28,next:291},{rarity:4,level:29,next:299},{rarity:4,level:30,next:368},{rarity:4,level:31,next:382},{rarity:4,level:32,next:397},{rarity:4,level:33,next:410},{rarity:4,level:34,next:427},{rarity:4,level:35,next:440},{rarity:4,level:36,next:455},{rarity:4,level:37,next:471},{rarity:4,level:38,next:484},{rarity:4,level:39,next:500},{rarity:4,level:40,next:735},{rarity:4,level:41,next:763},{rarity:4,level:42,next:793},{rarity:4,level:43,next:823},{rarity:4,level:44,next:852},{rarity:4,level:45,next:881},{rarity:4,level:46,next:911},{rarity:4,level:47,next:940},{rarity:4,level:48,next:970},{rarity:4,level:49,next:998},{rarity:4,level:50,next:1102},{rarity:4,level:51,next:1146},{rarity:4,level:52,next:1189},{rarity:4,level:53,next:1235},{rarity:4,level:54,next:1278},{rarity:4,level:55,next:1322},{rarity:4,level:56,next:1365},{rarity:4,level:57,next:1411},{rarity:4,level:58,next:1454},{rarity:4,level:59,next:1498},{rarity:4,level:60,next:1469},{rarity:4,level:61,next:1527},{rarity:4,level:62,next:1588},{rarity:4,level:63,next:1644},{rarity:4,level:64,next:1705},{rarity:4,level:65,next:1762},{rarity:4,level:66,next:1822},{rarity:4,level:67,next:1879},{rarity:4,level:68,next:1940},{rarity:4,level:69,next:1998},{rarity:4,level:70,next:1836},{rarity:4,level:71,next:1909},{rarity:4,level:72,next:1983},{rarity:4,level:73,next:2057},{rarity:4,level:74,next:2130},{rarity:4,level:75,next:2204},{rarity:4,level:76,next:2276},{rarity:4,level:77,next:2350},{rarity:4,level:78,next:2424},{rarity:4,level:79,next:2497},{rarity:4,level:80,next:0},{rarity:5,level:1,next:45},{rarity:5,level:2,next:46},{rarity:5,level:3,next:49},{rarity:5,level:4,next:49},{rarity:5,level:5,next:52},{rarity:5,level:6,next:54},{rarity:5,level:7,next:55},{rarity:5,level:8,next:57},{rarity:5,level:9,next:59},{rarity:5,level:10,next:119},{rarity:5,level:11,next:123},{rarity:5,level:12,next:129},{rarity:5,level:13,next:133},{rarity:5,level:14,next:137},{rarity:5,level:15,next:143},{rarity:5,level:16,next:147},{rarity:5,level:17,next:151},{rarity:5,level:18,next:157},{rarity:5,level:19,next:161},{rarity:5,level:20,next:238},{rarity:5,level:21,next:247},{rarity:5,level:22,next:256},{rarity:5,level:23,next:266},{rarity:5,level:24,next:276},{rarity:5,level:25,next:284},{rarity:5,level:26,next:294},{rarity:5,level:27,next:304},{rarity:5,level:28,next:313},{rarity:5,level:29,next:322},{rarity:5,level:30,next:396},{rarity:5,level:31,next:412},{rarity:5,level:32,next:427},{rarity:5,level:33,next:442},{rarity:5,level:34,next:460},{rarity:5,level:35,next:474},{rarity:5,level:36,next:490},{rarity:5,level:37,next:507},{rarity:5,level:38,next:521},{rarity:5,level:39,next:539},{rarity:5,level:40,next:791},{rarity:5,level:41,next:822},{rarity:5,level:42,next:854},{rarity:5,level:43,next:886},{rarity:5,level:44,next:918},{rarity:5,level:45,next:948},{rarity:5,level:46,next:981},{rarity:5,level:47,next:1013},{rarity:5,level:48,next:1044},{rarity:5,level:49,next:1075},{rarity:5,level:50,next:1187},{rarity:5,level:51,next:1234},{rarity:5,level:52,next:1281},{rarity:5,level:53,next:1330},{rarity:5,level:54,next:1376},{rarity:5,level:55,next:1424},{rarity:5,level:56,next:1470},{rarity:5,level:57,next:1519},{rarity:5,level:58,next:1566},{rarity:5,level:59,next:1613},{rarity:5,level:60,next:1582},{rarity:5,level:61,next:1645},{rarity:5,level:62,next:1710},{rarity:5,level:63,next:1771},{rarity:5,level:64,next:1835},{rarity:5,level:65,next:1898},{rarity:5,level:66,next:1962},{rarity:5,level:67,next:2024},{rarity:5,level:68,next:2089},{rarity:5,level:69,next:2152},{rarity:5,level:70,next:1977},{rarity:5,level:71,next:2056},{rarity:5,level:72,next:2135},{rarity:5,level:73,next:2215},{rarity:5,level:74,next:2295},{rarity:5,level:75,next:2373},{rarity:5,level:76,next:2451},{rarity:5,level:77,next:2531},{rarity:5,level:78,next:2610},{rarity:5,level:79,next:2689},{rarity:5,level:80,next:2769},{rarity:5,level:81,next:2879},{rarity:5,level:82,next:2990},{rarity:5,level:83,next:3101},{rarity:5,level:84,next:3210},{rarity:5,level:85,next:3323},{rarity:5,level:86,next:3432},{rarity:5,level:87,next:3544},{rarity:5,level:88,next:3654},{rarity:5,level:89,next:3766},{rarity:5,level:90,next:0},{rarity:6,level:1,next:48},{rarity:6,level:2,next:50},{rarity:6,level:3,next:52},{rarity:6,level:4,next:53},{rarity:6,level:5,next:55},{rarity:6,level:6,next:59},{rarity:6,level:7,next:58},{rarity:6,level:8,next:62},{rarity:6,level:9,next:63},{rarity:6,level:10,next:127},{rarity:6,level:11,next:132},{rarity:6,level:12,next:138},{rarity:6,level:13,next:143},{rarity:6,level:14,next:147},{rarity:6,level:15,next:153},{rarity:6,level:16,next:157},{rarity:6,level:17,next:162},{rarity:6,level:18,next:168},{rarity:6,level:19,next:173},{rarity:6,level:20,next:255},{rarity:6,level:21,next:264},{rarity:6,level:22,next:274},{rarity:6,level:23,next:285},{rarity:6,level:24,next:296},{rarity:6,level:25,next:304},{rarity:6,level:26,next:315},{rarity:6,level:27,next:326},{rarity:6,level:28,next:336},{rarity:6,level:29,next:345},{rarity:6,level:30,next:424},{rarity:6,level:31,next:441},{rarity:6,level:32,next:458},{rarity:6,level:33,next:474},{rarity:6,level:34,next:492},{rarity:6,level:35,next:508},{rarity:6,level:36,next:525},{rarity:6,level:37,next:543},{rarity:6,level:38,next:558},{rarity:6,level:39,next:578},{rarity:6,level:40,next:847},{rarity:6,level:41,next:881},{rarity:6,level:42,next:915},{rarity:6,level:43,next:949},{rarity:6,level:44,next:984},{rarity:6,level:45,next:1016},{rarity:6,level:46,next:1051},{rarity:6,level:47,next:1085},{rarity:6,level:48,next:1119},{rarity:6,level:49,next:1152},{rarity:6,level:50,next:1272},{rarity:6,level:51,next:1321},{rarity:6,level:52,next:1373},{rarity:6,level:53,next:1425},{rarity:6,level:54,next:1474},{rarity:6,level:55,next:1526},{rarity:6,level:56,next:1575},{rarity:6,level:57,next:1627},{rarity:6,level:58,next:1679},{rarity:6,level:59,next:1728},{rarity:6,level:60,next:1695},{rarity:6,level:61,next:1762},{rarity:6,level:62,next:1832},{rarity:6,level:63,next:1897},{rarity:6,level:64,next:1967},{rarity:6,level:65,next:2034},{rarity:6,level:66,next:2101},{rarity:6,level:67,next:2169},{rarity:6,level:68,next:2238},{rarity:6,level:69,next:2306},{rarity:6,level:70,next:2118},{rarity:6,level:71,next:2203},{rarity:6,level:72,next:2288},{rarity:6,level:73,next:2373},{rarity:6,level:74,next:2458},{rarity:6,level:75,next:2543},{rarity:6,level:76,next:2626},{rarity:6,level:77,next:2712},{rarity:6,level:78,next:2796},{rarity:6,level:79,next:2882},{rarity:6,level:80,next:2967},{rarity:6,level:81,next:3084},{rarity:6,level:82,next:3204},{rarity:6,level:83,next:3322},{rarity:6,level:84,next:3440},{rarity:6,level:85,next:3559},{rarity:6,level:86,next:3678},{rarity:6,level:87,next:3797},{rarity:6,level:88,next:3915},{rarity:6,level:89,next:4035},{rarity:6,level:90,next:2965},{rarity:6,level:91,next:3086},{rarity:6,level:92,next:3202},{rarity:6,level:93,next:3323},{rarity:6,level:94,next:3441},{rarity:6,level:95,next:3559},{rarity:6,level:96,next:3677},{rarity:6,level:97,next:3798},{rarity:6,level:98,next:3915},{rarity:6,level:99,next:0},{rarity:7,level:1,next:45},{rarity:7,level:2,next:46},{rarity:7,level:3,next:49},{rarity:7,level:4,next:49},{rarity:7,level:5,next:52},{rarity:7,level:6,next:54},{rarity:7,level:7,next:55},{rarity:7,level:8,next:57},{rarity:7,level:9,next:59},{rarity:7,level:10,next:119},{rarity:7,level:11,next:123},{rarity:7,level:12,next:129},{rarity:7,level:13,next:133},{rarity:7,level:14,next:137},{rarity:7,level:15,next:143},{rarity:7,level:16,next:147},{rarity:7,level:17,next:151},{rarity:7,level:18,next:157},{rarity:7,level:19,next:161},{rarity:7,level:20,next:238},{rarity:7,level:21,next:247},{rarity:7,level:22,next:256},{rarity:7,level:23,next:266},{rarity:7,level:24,next:276},{rarity:7,level:25,next:284},{rarity:7,level:26,next:294},{rarity:7,level:27,next:304},{rarity:7,level:28,next:313},{rarity:7,level:29,next:322},{rarity:7,level:30,next:396},{rarity:7,level:31,next:412},{rarity:7,level:32,next:427},{rarity:7,level:33,next:442},{rarity:7,level:34,next:460},{rarity:7,level:35,next:474},{rarity:7,level:36,next:490},{rarity:7,level:37,next:507},{rarity:7,level:38,next:521},{rarity:7,level:39,next:539},{rarity:7,level:40,next:791},{rarity:7,level:41,next:822},{rarity:7,level:42,next:854},{rarity:7,level:43,next:886},{rarity:7,level:44,next:918},{rarity:7,level:45,next:948},{rarity:7,level:46,next:981},{rarity:7,level:47,next:1013},{rarity:7,level:48,next:1044},{rarity:7,level:49,next:1075},{rarity:7,level:50,next:1187},{rarity:7,level:51,next:1234},{rarity:7,level:52,next:1281},{rarity:7,level:53,next:1330},{rarity:7,level:54,next:1376},{rarity:7,level:55,next:1424},{rarity:7,level:56,next:1470},{rarity:7,level:57,next:1519},{rarity:7,level:58,next:1566},{rarity:7,level:59,next:1613},{rarity:7,level:60,next:1582},{rarity:7,level:61,next:1645},{rarity:7,level:62,next:1710},{rarity:7,level:63,next:1771},{rarity:7,level:64,next:1835},{rarity:7,level:65,next:1898},{rarity:7,level:66,next:1962},{rarity:7,level:67,next:2024},{rarity:7,level:68,next:2089},{rarity:7,level:69,next:2152},{rarity:7,level:70,next:1977},{rarity:7,level:71,next:2056},{rarity:7,level:72,next:2135},{rarity:7,level:73,next:2215},{rarity:7,level:74,next:2295},{rarity:7,level:75,next:2373},{rarity:7,level:76,next:2451},{rarity:7,level:77,next:2531},{rarity:7,level:78,next:2610},{rarity:7,level:79,next:2689},{rarity:7,level:80,next:2769},{rarity:7,level:81,next:2879},{rarity:7,level:82,next:2990},{rarity:7,level:83,next:3101},{rarity:7,level:84,next:3210},{rarity:7,level:85,next:0}]},514:function(e,t){e.exports=[{id:1,name:"アイロン",rarityId:1,minLevel:1,maxLevel:30,defaultCurrentLevel:1,defaultCurrentRemainExp:32,defaultTargetLevel:30,icon:"iron-sprit"},{id:2,name:"ブロンズ",rarityId:2,minLevel:1,maxLevel:40,defaultCurrentLevel:1,defaultCurrentRemainExp:35,defaultTargetLevel:40,icon:"bronze-sprit"},{id:3,name:"シルバー",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:50,icon:"silver-sprit"},{id:8,name:"覚醒素材用30CC銀",rarityId:3,minLevel:1,maxLevel:50,defaultCurrentLevel:1,defaultCurrentRemainExp:38,defaultTargetLevel:30,icon:"silver-sprit"},{id:4,name:"ゴールド",rarityId:4,minLevel:1,maxLevel:80,defaultCurrentLevel:1,defaultCurrentRemainExp:42,defaultTargetLevel:60,icon:"gold-sprit"},{id:5,name:"プラチナ",rarityId:5,minLevel:1,maxLevel:90,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:70,icon:"platinum-sprit"},{id:6,name:"ブラック",rarityId:6,minLevel:1,maxLevel:99,defaultCurrentLevel:1,defaultCurrentRemainExp:48,defaultTargetLevel:80,icon:"black-sprit"},{id:7,name:"サファイア",rarityId:7,minLevel:1,maxLevel:85,defaultCurrentLevel:1,defaultCurrentRemainExp:45,defaultTargetLevel:65,icon:"time-sprit"}]},515:function(e,t){e.exports=[{id:1,name:"プラチナアーマー8倍",exp:8e3,icon:"platinum-armer"},{id:7,name:"プラチナアーマー4.5倍",exp:4500,icon:"platinum-armer"},{id:2,name:"プラチナアーマー3.375倍",exp:3375,icon:"platinum-armer"},{id:3,name:"団長8倍",exp:4e4,icon:"black-armer"},{id:4,name:"ハッピー",exp:15e4,icon:"happy"},{id:5,name:"ヨジロウ4人 (風神Lv27)",exp:920,icon:"yojiro"},{id:6,name:"ハシム4人 (拠点後Lv20)",exp:780,icon:"hashim"}]},516:function(e,t){e.exports=[{id:1,name:"1→30",currentLevel:1,targetLevel:30},{id:2,name:"1→50",currentLevel:1,targetLevel:50},{id:3,name:"1→60",currentLevel:1,targetLevel:60},{id:4,name:"1→80",currentLevel:1,targetLevel:80},{id:7,name:"1→85",currentLevel:1,targetLevel:80},{id:5,name:"1→90",currentLevel:1,targetLevel:90},{id:6,name:"1→99",currentLevel:1,targetLevel:99}]}});