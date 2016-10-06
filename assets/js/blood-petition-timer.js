webpackJsonp([0],{0:function(t,a,e){(function(t){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function n(a){y["default"].init({lng:a,resources:I["default"]},function(a,e){a&&console.error(a),j=e,E["default"].init(y["default"],t,{}),t("body").localize()})}function i(t){return 27+(t<=100?3*t:300+t-100)}function o(t){return 12+(t<=100?0:Math.floor((t-100)/20)+1)}function r(t){var a=arguments.length<=1||void 0===arguments[1]?0:arguments[1];if(isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var e=t.toFixed(a).split("."),n=parseInt(e[0]);return n.toLocaleString()+(1===e.length?"":"."+e[1])}function s(){if(J&&"direct"!==U){var a=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,a){return t+a},0);t("input[name=current]").val(a).trigger("change")}}function l(){var a=void 0;try{a=JSON.parse(t.cookie(L+"_storage"))}catch(e){console.warn(e),a=F}return a}function u(a){t.cookie(L+"_storage",JSON.stringify(a),{expires:30})}function c(a){var e=void 0;try{e=JSON.parse(t.cookie(L+a.active))}catch(n){console.warn(n),e={}}return t.extend(!0,B,e)}function p(a){t.cookie(L+H.active,JSON.stringify(a),{expires:30})}function m(){if(A){var a=45,e=7,n=parseInt(G.val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),o=i.attr("data-amount")-n;if(o<-a)i.hide();else if(o<0)i.css("opacity",.5).show();else if(o<a)i.addClass("active").css("opacity",1).show();else if(o<a*e){var r=1-Math.floor(o/a)*a/(a*(e+1));i.show().css("opacity",r)}else i.hide();var s=0===o?"diff-eq":o>0?"diff-plus":"diff-minus",l=0===o?"":(o>0?"+":"")+o;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(s).text(l)})}}function d(){if("exchange"===O){var a=parseInt(G.val());z.forEach(function(e){for(var n=t('[data-prize="'+e.unit+'"]').empty(),i=0;i<a;i+=e.value){var o=t("<i />").addClass("icon icon-"+e.unit),r=25*Math.min(a-i,e.value)/e.value;t('<div class="prize-gage" />').append(o.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-r})).append(o.clone().css({width:r+"px"})).appendTo(n)}})}}function f(){var a=t("[name=expectation]:input").val(),e=1/0,n=0,i="drop"===a?null:a,o=q.map(function(t){var a=t.expectation/(i&&t[i]||1);return e=0,n=Math.max(n,a),a}),s=i?3:2;q.forEach(function(a,i){var l=t("[data-chart="+i+"]"),u=o[i],c=u/(n-e),p=120*c+240;l.find("span.barchart-label").text(j("{{amount}}個",{amount:r(u,s)})),l.find("span.barchart").css({width:100*c+"%",backgroundColor:"hsla("+p+", 80%, 50%, 0.5)"})})}function v(){var a=parseInt(K.val()),e=parseInt(G.val()),n=Math.max(a-e,0);q.forEach(function(a,e){var i=t("[data-chart="+e+"]"),o=n?Math.ceil(n/a.expectation):0;i.find("span.marathon").text(j("残り{{lap}}周",{lap:r(o)}))}),t("#expectation_drop_total").text(r(e))}function h(){var a=parseInt(G.val()),e=parseInt(K.val()),n=q[parseInt(t("[name=estimate_map]:input").val())],s=Math.max(e-a,0),l=Math.ceil(s/n.expectation);t("#estimate_required_marathon").text(r(l));var u=(new Date).getTime(),c=R.reduce(function(t,a){return t+Math.max(a[1],u)-Math.max(a[0],u)},0),p=0+t("[name=estimate_natural_recovery]:input").prop("checked"),m=Math.floor(c/18e4)*p,d=Math.floor(c/36e5)*p,f=parseInt(t("[name=estimate_rank]").val()),v=i(f),h=o(f),g=Math.ceil(n.charisma*l),b=Math.ceil(n.stamina*l),x=t("[name=estimate_use_crystal]:input").val(),_=0+("both"===x||"charisma"===x),k=0+("both"===x||"stamina"===x),y=_?g:m,M=k?b:d,w=Math.floor(Math.min(y/n.charisma,M/n.stamina));t("#estimate_available_marathon").text(r(w));var C=Math.ceil(Math.max(n.charisma*w-m,0)/v),I=Math.ceil(Math.max(n.stamina*w-d,0)/h),S=C+I;t("#estimate_required_crystal").text(r(S));var E=0===C?"diff-eq":C>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",E).text(r(C)),E=0===I?"diff-eq":I>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",E).text(r(I));var j=w-l;E=0===j?"diff-eq":j>0?"diff-plus":"diff-minus";var T=(j>=0?"+":"")+r(j);t("#estimate_available_marathon_diff").attr("class",E).text(T);var D=n.charisma*w;t("#estimate_using_charisma").text(r(D)),j=D-g,E=0===j?"diff-eq":j>0?"diff-plus":"diff-minus",T=(j>=0?"+":"")+r(j),t("#estimate_using_charisma_diff").attr("class",E).text(T);var z=Math.ceil(n.stamina*w);t("#estimate_using_stamina").text(r(z)),j=z-b,E=0===j?"diff-eq":j>0?"diff-plus":"diff-minus",T=(j>=0?"+":"")+r(j),t("#estimate_using_stamina_diff").attr("class",E).text(T);var N=a+Math.floor(n.expectation*w);t("#estimate_result_collection").text(r(N)),j=N-e,E=0===j?"diff-eq":j>0?"diff-plus":"diff-minus",T=(j>=0?"+":"")+r(j),t("#estimate_result_collection_diff").attr("class",E).text(T);var O=Math.floor(n.experience*w);T=(O>0?"+":"")+r(O),t("#estimate_experience").text(T);var A=S?O/S:0;T=(A>0?"+":"")+r(A),t("#estimate_avg_experience").text(T);var L=Math.floor(n.gold*w);T=(L>0?"+":"")+r(L),t("#estimate_gold").text(T);var P=S?L/S:0;T=(P>0?"+":"")+r(P),t("#estimate_avg_gold").text(T)}function g(){var a=parseInt(G.val()),e=parseInt(K.val()),n=(new Date).getTime(),i=R.reduce(function(t,a){return t+Math.max(a[1],n)-Math.max(a[0],n)},0),o=Math.max(e-a,0),s=i/864e5,l=o/Math.max(s,1),u=i/36e5,c=o/Math.max(u,1),p=i/18e5,m=o/Math.max(p,1),d=r(l,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(c,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(m,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(j("残り{{days}}日",{days:r(s,0)})),t("#remains_hours").text(j("残り{{hours}}時間",{hours:r(u,0)})),t("#remains_minutes").text(j("残り{{minutes}}分",{minutes:r(60*u,0)}));var f=100*Math.min(a,e),v=parseInt(f/e)||0,h=D-i,g=parseInt(100*h/D)||0,b=void 0;b=100===v?"progress-bar-success":v>=g?"progress-bar-success":v>.7*g?"progress-bar-info":v>.4*g?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(b).children("span").text(j("{{percentage}}%達成",{percentage:v})),t("#period_progress > .progress-bar").width(g+"%").children("span").text(j("{{percentage}}%経過",{percentage:g}));var x=a*D/h;t("#prediction_label").empty().append(j("このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。",{result:r(Math.floor(x))}));var _=Math.min(x/e,1),k=t("#objective_progress").width(),y=k*_-47;t(".pointer").css("left",y+"px");var M=k-y<230?-250:0;t(".pointer-label").css("margin-left",M+"px"),a<e&&x>=e&&!function(){var a=void 0,n=void 0;R.forEach(function(t){a=a||t[0],n=n||t[1]});var i=e/x*D,o=R.reduce(function(t,a){if(t)return t;var e=a[1]-a[0];return e<i?(i-=e,null):new Date(a[0]+i)},null),r=o.getMonth(),s=o.getDate(),l=o.getHours(),u=o.getMinutes(),c=r+1+"/"+s+" "+(l<10?"0"+l:l)+":"+(u<10?"0"+u:u),p=j("<strong>{{date}}</strong>頃に目標達成できそうよ",{date:c});t("#prediction_label").append("<span> </span>").append(t("<span />").html(p))}()}function b(){var t="animated bounce",a="",e="Webkit Moz O ms Khtml".split(" "),n="",i=document.createElement("div");if(void 0!==i.style.animationName)return!0;for(var o=0;o<e.length;o++)if(void 0!==i.style[e[o]+"AnimationName"])return n=e[o],t=n+"Animation",a="-"+n.toLowerCase()+"-",!0;return!1}function x(a){var e=T.objectives.find(function(t){return t.value==a.id});return t("<div />").append(t("<i />").addClass("icon icon-"+e.icon)).append(t("<span />").text(" ")).append(t("<span />").text(j(e.title))).append(t("<span />").text(" ")).append(t('<span class="label label-default" />').text(e.value)).html()}function _(){H=l();var a=c(H);n(a.language),G=t("[name=current]:input");var e=(new Date).getTime(),g=t("#period_dates");R.forEach(function(a){var n=a[1]-a[0],i=100*n/D+"%",o=new Date(a[0]),r=new Date(a[1]-1),s=o.getMonth()+1+"/"+o.getDate()+"-"+(r.getMonth()+1)+"/"+r.getDate(),l=e>=a[0]&&e<a[1],u=e>=a[1],c=l?"progress-bar-active":u?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(i).text(s).addClass(c).appendTo(g)}),t('[data-objective-mode="'+O+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+O+'"]').remove(),G.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),K=t("[name=objective]:input"),"achievement"===O?(T.objectives.map(function(a){t("<option />").attr("value",a.value).text(a.title+" ("+a.value+"個)").appendTo(K)}),K.select2({formatSelection:x,formatResult:x})):!function(){t("select[name=objective]").click(function(){this.select()});var a=t("#increse_objective_list");z.forEach(function(e){t('<button class="btn btn-default" name="add"  type="button" />').val(e.value).attr("title",e.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+e.unit)).appendTo(a)})}(),t("button[name=add]").click(function(a){a.preventDefault();var e=parseInt(t(this).val()),n=parseInt(K.val());K.val(n+e).trigger("change")}),t("button[name=reset]").click(function(t){t.preventDefault(),K.val(0).trigger("change")}),t("[name=expectation]:input").change(function(){f(),v()}).val(P);var _=t("#prize_list");z.forEach(function(a){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(a.name).append(t('<span class="prize-value" />').text("@"+a.value))).append(t('<div class="prize-list-body" />').attr("data-prize",a.unit)).appendTo(_)});var k=q.reduce(function(t,a){return Math.max(t,a.drops.length)},0);a.maps.forEach(function(t,a){q[a].expectation=t.expectation}),J=a.syncCurrentEnabled;var y=void 0,M=function(){y&&clearTimeout(y),setTimeout(function(){var e=t("#map");q.forEach(function(t,n){var i=e.find("tr[data-map="+n+"]"),o=Math.max(parseInt(i.find("input[name=num_laps]").val())||0,0),s=Math.max(parseInt(i.find("input[name=num_drops]").val())||0,0),l=i.find("input[name=actual_expectation]"),u=Math.max(parseFloat(l.val())||0,0);"aggregate"===U&&(u=s/o||0,l.val(u));var c=Math.floor(u);i.find("button[name=increase]").val(c).text("+"+r(c)),a.maps[n].numLaps=o,a.maps[n].numDrops=s,t.expectation=a.maps[n].expectation=u}),p(a),h(),f(),v()},100)},w=t("#map").on("keyup","input[type=number]",function(){M(),s()}).on("change","input[type=number]",function(){M(),s()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(a){a.preventDefault();var e=t(this).closest("tr"),n=e.find("input[name=num_laps]"),i=parseInt(n.val())+1;n.val(i);var o=e.find("input[name=num_drops]"),r=parseInt(o.val())+parseInt(this.value);o.val(r),o.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){U=t(this).val(),a.expectationInputMode=U,p(a),w.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===U).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===U).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===U),M()}).on("click","input[name=sync]",function(){a.syncCurrentEnabled=J=this.checked,p(a),s()}),C=w.find("tbody");q.forEach(function(e,n){var i=a.maps[n],o=t("<td />").attr("data-chart",n).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",n).append(t("<th />").text(e.name)).append(t("<td />").text(""+e.charisma+"/"+e.stamina)).append(function(){for(var a=e.drops.map(function(a){var e=a.icon?t("<i />").attr("title",a.name).addClass("icon icon-"+a.icon):t("<span />").text(a.name),n=a.set?t('<span class="badge" />').text("x"+a.set):null;return t("<td />").append(e).append(n)}),n=e.drops.length;n<k;n++)a.push(t("<td />"));return a}).append(function(){var a=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon"></span>').text(j("1周の期待値"))).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(i.expectation)),e=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon"></span>').text(j("周回"))).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(i.numLaps)).append(t('<span class="input-group-addon"></span>').text(j("ドロップ"))).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(i.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(e).append(a)}).append(o).prependTo(C)}),t("#map thead th.drops").attr("colspan",k),A&&!function(){var a=t("#rewards tbody");N.forEach(function(e){var n=t('<span class="icon" />').addClass("icon-"+e.unit);t("<tr />").attr("data-amount",e.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+e.amount)).append(t("<td />").html(n)).appendTo(a)})}();var S=t("[name=estimate_map]:input").change(function(){h(),a.estimateMap=parseInt(t(this).val()),p(a)});q.forEach(function(a,e){t("<option />").val(e).text(a.name+" ("+a.charisma+"/"+a.stamina+")").prependTo(S)});for(var E=t("[name=estimate_rank]:input").change(function(){h(),a.estimateRank=parseInt(t(this).val()),p(a)}),B=1;B<=200;B++){var F=i(B),Q=o(B),W=""+B+" ("+F+"/"+Q+")";t("<option />").val(B).text(W).appendTo(E)}var X=t("[name=estimate_use_crystal]").change(function(){h(),a.estimateUseCrystal=t(this).val(),p(a)}),V=t("[name=estimate_natural_recovery]:input").change(function(){h(),a.estimateNaturalRecovery=this.checked,p(a)});t("*[title]").tooltip(),G.val(a.current),"exchange"===O?K.val(a.objective):K.select2("val",a.objective),t("[name=current]:input, [name=objective]:input").change(function(){a[this.name]=t(this).val(),p(a),m(),d(),v(),h()}),S.val(a.estimateMap),E.val(a.estimateRank),X.val(a.estimateUseCrystal),V.prop("checked",a.estimateNaturalRecovery),"exchange"===O&&d(),A&&m(),w.find("input[name=sync]").prop("checked",J).end().find('input[name=expectation_input_mode][value="'+a.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(L),t.removeCookie(L+"_storage"),window.location.reload()});var Y=b(),Z=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");t("#estimate_tutorial").on("click","a",function(a){t("#map .expectation").each(function(){var a=t(this);Y&&a.addClass("animated flash").one(Z,function(){a.removeClass("animated flash")})})}).on("click","button",function(e){a.estimateTutorialHidden=!0,p(a),t(e.delegateTarget).each(function(){var a=t(this);Y?a.addClass("animated zoomOutRight").one(Z,function(){a.hide()}):a.hide()})}).toggle(!a.estimateTutorialHidden).each(function(){var a=t(this),e=a.find(".anna");a.on("mouseenter",function(){e.addClass("animated bounce")}).on("mouseleave",function(){e.removeClass("animated bounce")})});var $=t("[name=slot]").change(function(){H.active=t(this).val(),u(H),window.location.reload()});t.map(H.slots,function(a,e){var n=e===H.active;t("<option />").val(e).text(a+(n?" *":"")).attr("selected",n).appendTo($)});var tt=t("[name=lang]:input").change(function(){a.language=t(this).val(),p(a),window.location.reload()});t.each(I["default"],function(a){t("<option />").val(a).text(j(a)).appendTo(tt)}),tt.val(a.language)}e(2);var k=e(299),y=a(k),M=e(315),w=a(M),C=e(316),I=a(C),S=e(319),E=a(S),j=void 0,T=w["default"][0],R=T.periods.map(function(t){return t.map(Date.parse)}),D=R.reduce(function(t,a){return t+a[1]-a[0]},0);T.maxObjective=null===T.maxObjective?1/0:T.maxObjective;var z=T.prizes,q=T.maps,N=T.rewards,O="achievement",A=!0,L="sealing-talisman2-timer",P="stamina",U="direct",J=!0,H=void 0,B={current:20,objective:1400,estimateMap:4,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:U,syncCurrentEnabled:J,maps:q.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),estimateTutorialHidden:!1,version:1,language:window.navigator.language||window.navigator.userLanguage},F={active:"",slots:{"":1,_2:2,_3:3}},G=void 0,K=void 0;t(function(){_(),setInterval(g,1e3)})}).call(a,e(1))},315:function(t,a){t.exports=[{id:"20160812",periods:[["2016/10/06 15:00:00","2016/10/13 10:00:00"],["2016/10/13 15:00:00","2016/10/20 10:00:00"]],objectives:[{value:25,title:"シノが仲間になる",icon:"blood-petition-1"},{value:30,title:"スキルレベル2",icon:"blood-petition-1"},{value:50,title:"初期レベル10",icon:"blood-petition-1"},{value:100,title:"スキルレベル3",icon:"blood-petition-1"},{value:150,title:"出撃コスト-1",icon:"blood-petition-1"},{value:200,title:"スキルレベル4",icon:"blood-petition-1"},{value:250,title:"出撃コスト-2",icon:"blood-petition-1"},{value:300,title:"スキルレベル5",icon:"blood-petition-1"},{value:400,title:"初期レベル20",icon:"blood-petition-1"},{value:500,title:"スキルレベル6",icon:"blood-petition-1"},{value:600,title:"出撃コスト-3",icon:"blood-petition-1"},{value:700,title:"スキルレベル7",icon:"blood-petition-1"},{value:800,title:"初期レベル30",icon:"blood-petition-1"},{value:855,title:"絆のニナ",icon:"bonds-nina"},{value:900,title:"スキルレベル8",icon:"blood-petition-1"},{value:1e3,title:"出撃コスト-4",icon:"blood-petition-1"},{value:1100,title:"初期レベル40",icon:"blood-petition-1"},{value:1125,title:"絆のセリア",icon:"bonds-celia"},{value:1200,title:"スキルレベル9",icon:"blood-petition-1"},{value:1300,title:"出撃コスト-5",icon:"blood-petition-1"},{value:1395,title:"絆のフローリカ",icon:"bonds-frorica"},{value:1400,title:"スキルレベル10",icon:"blood-petition-1"},{value:1500,title:"初期レベル50",icon:"blood-petition-1"},{value:1530,title:"プラチナアーマー",icon:"platinum-bucket"},{value:1575,title:"結晶のカケラ",icon:"crystal-fragment"},{value:1665,title:"ゴールドアーマー",icon:"gold-bucket"},{value:1710,title:"黒聖霊",icon:"black-sprit"},{value:1755,title:"プラチナアーマー",icon:"platinum-bucket"},{value:1800,title:"虹聖霊",icon:"rainbow-sprit"}],prizes:[],maps:[{name:"女と妖怪",charisma:20,stamina:1,expectation:2,drops:[{name:"封印の札",icon:"blood-petition-1",set:2},{name:"花束",icon:"flower"}],experience:140,gold:900},{name:"河童と血判状",charisma:30,stamina:2,expectation:3,drops:[{name:"封印の札",icon:"blood-petition-1",set:3},{name:"クレイブ",icon:"grave"},{name:"魔水晶",icon:"demon-crystal-1"}],experience:180,gold:1200},{name:"再来する河童",charisma:40,stamina:4,expectation:6,drops:[{name:"封印の札3",icon:"blood-petition-3",set:1},{name:"封印の札5",icon:"blood-petition-1",set:3},{name:"サイゾウ",icon:"saizou"},{name:"カズハ",icon:"kazuha"}],experience:240,gold:1800},{name:"総大将の試練",charisma:50,stamina:7,expectation:16,drops:[{name:"封印の札5",icon:"blood-petition-5",set:2},{name:"封印の札3",icon:"blood-petition-3",set:2},{name:"ジョバンニ",icon:"giovanni"},{name:"白銀の聖霊",icon:"platinum-sprit"}],experience:300,gold:2100},{name:"風と雷の物の怪",charisma:80,stamina:9,expectation:15,drops:[{name:"封印の札5",icon:"blood-petition-5",set:3},{name:"アリサ",icon:"arisa"},{name:"プラチナアーマー",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}],experience:370,gold:2700}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"bonds-nina"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"bonds-celia"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"bonds-frorica"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}]}]},316:function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(317),o=n(i),r=e(318),s=n(r);a["default"]={ja:o["default"],"en-US":s["default"]}},317:function(t,a){t.exports={translation:{ja:"日本語","en-US":"英語 (Engrish)"}}},318:function(t,a){t.exports={translation:{"データ{{no}}":"Slot #{{no}}","残り{{lap}}周":"{{lap}} laps remain","{{amount}}個":"{{amount}}","{{percentage}}%経過":"{{percentage}}% elapsed","{{percentage}}%達成":"{{percentage}}% completed","現在の血判状":"Current","目標":"Objective","イベント期間":"Event period","このペースなら最終日までに <strong>{{result}}</strong> 個集まるわ。":"Expected result <strong>{{result}}</strong> at the current pace.","<strong>{{date}}</strong>頃に目標達成できそうよ":"Completion date is <strong>{{date}}</strong>.","周回MAP":"Map","見積り":"Estimate","ランク":"Rank","結晶回復":"Use crystal for","カリスマ＆スタミナ":"Charisma & Stamina","カリスマのみ":"Charisma","スタミナのみ":"Stamina","使用しない":"N/A","自然回復を計算に含める":"Take normal time recovers into calc.","消費結晶":"Required crystals","個":"","カリスマ":"Charisma","スタミナ":"Stamina","到達収集数":"Expected result","対目標数":"Objective","周回数":"Laps","消費カリスマ":"Consumed charisma","対要求":"Requirement","消費スタミナ":"Consumed stamina","獲得EXP":"Got exp","獲得ゴールド":"Got gold","対要求周回":"Requirement","1パリン":"per crystal","アンナさんからのアドバイス":"Advice from Anna","見積りをご利用する際は":"If estimate required crystals, must ","マップの期待値":"fill drop rate","を入力してください":"of maps","わかった":"OK","追加報酬":"Rewards","収集数":"Achived","報酬":"Reward","交換":"Exchange","ノルマ":"Quota","1時間当たり":"Per hour","30分当たり":"Per 30 minutes","1日当たり":"Per day","残り{{days}}日":"Remain {{days}} days","残り{{hours}}時間":"Remain {{hours}} hours","残り{{minutes}}分":"Remain {{minutes}} minutes","ドロップ":"Drop","ドロップ÷周回数で期待値を算出":"Rate = Drop / Laps","期待値を直接入力":"Rate = Input","謎の期待値":"Per lap","カリスマ1当たり":"Per charisma","スタミナ1当たり":"Per stamina","ドロップの合計を現在の収集数へ反映させる":"Reflect total to current items","データの保存先":"Save to","動かなくなったとき":"Trouble shooting","設定とデータを初期化する":"Initialize settings and saved data","カリスタ":"Ch/St","言語":"Language","1周の期待値":"Drop rate","周回":"Lap","周":"","ドロップ合計":"Drop Σ","ヒバリが仲間になる":"Available Hibari","スキルレベル2":"Skill level 2","初期レベル10":"Initial level 10","スキルレベル3":"Skill level 3","出撃コスト-1":"Cost -1","スキルレベル4":"Skill level 4","出撃コスト-2":"Cost -2","スキルレベル5":"Skill level 5","初期レベル20":"Initial level 20","スキルレベル6":"Skill level 6","出撃コスト-3":"Cost -3","スキルレベル7":"Skill level 7","初期レベル30":"Initial level 30","絆のニナ":"Bond Nina","スキルレベル8":"Skill level 8","出撃コスト-4":"Cost -4","初期レベル40":"Initial level 40","絆のセリア":"Bond Ceria","スキルレベル9":"Skill level 9","出撃コスト-5":"Cost -5","絆のフローリカ":"Bond Florika","スキルレベル10":"Skill level 10","初期レベル50":"Initial level 50","プラチナアーマー":"Platinum armor","結晶のカケラ":"Fragment of crystal","ゴールドアーマー":"Gold armor","黒聖霊":"Spirit of Black","虹聖霊":"Spirit of Rainbow",ja:"Japanese","en-US":"English (Engrish)"}}}});