webpackJsonp([10],{360:function(t,a){t.exports=[{id:"20160428",periods:[["2016/04/28 15:00:00","2016/05/06 10:00:00"],["2016/05/06 15:00:00","2016/05/12 10:00:00"]],objectives:{25:"レシアが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50",1620:"+ 黒聖霊",1665:"+ ゴールドアーマー",1710:"+ 黒聖霊",1755:"+ プラチナアーマー",1800:"+ 虹聖霊"},prizes:[],maps:[{name:"疾風のダブルショット",charisma:20,stamina:1,expectation:2,drops:[{name:"英霊の魂",icon:"soldier-soul-1",set:2},{name:"花束",icon:"flower"}],experience:140,gold:900},{name:"飛来する尖鋭弾",charisma:30,stamina:2,expectation:3,drops:[{name:"英霊の魂",icon:"soldier-soul-1",set:3},{name:"パーシス",icon:"persis"},{name:"魔水晶",icon:"demon-crystal-1"}],experience:180,gold:1200},{name:"怒涛の滅多打ち",charisma:40,stamina:4,expectation:6,drops:[{name:"英霊の魂3",icon:"soldier-soul-3",set:1},{name:"英霊の魂5",icon:"soldier-soul-1",set:3},{name:"ベルナール",icon:"bernard"},{name:"ヴァレリー",icon:"valerie"}],experience:240,gold:1800},{name:"神速のトリプルショット",charisma:50,stamina:7,expectation:16,drops:[{name:"英霊の魂5",icon:"soldier-soul-5",set:2},{name:"英霊の魂3",icon:"soldier-soul-3",set:2},{name:"カズハ",icon:"kazuha"},{name:"白銀の聖霊",icon:"platinum-sprit"}],experience:300,gold:2100},{name:"王の爆砲とカボチャの魔法剣士",charisma:80,stamina:9,expectation:15,drops:[{name:"英霊の魂5",icon:"soldier-soul-5",set:3},{name:"リカルド",icon:"ricard"},{name:"プラチナアーマー",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}],experience:370,gold:2700},{name:"氷結のコキュートス",charisma:40,stamina:5,expectation:9,drops:[{name:"英霊の魂3",icon:"treasure-fragment2-3",set:3},{name:"グラディス",icon:"gladys"},{name:"ネーニャ",icon:"nenya"},{name:"白バケツ",icon:"platinum-bucket"}],experience:260,gold:1950},{name:"瞬刻の影月七連矢",charisma:70,stamina:8,expectation:13,drops:[{name:"英霊の魂5",icon:"treasure-fragment2-5",set:2},{name:"英霊の魂3",icon:"treasure-fragment2-3"},{name:"ルナール",icon:"renard"},{name:"ルビー",icon:"ruby"}],experience:350,gold:2550},{name:"仮初の必殺剣",charisma:90,stamina:12,expectation:26,drops:[{name:"英霊の魂5",icon:"treasure-fragment2-5",set:4},{name:"英霊の魂3",icon:"treasure-fragment2-3",set:2},{name:"虹聖霊",icon:"rainbow-sprit"}],experience:400,gold:3e3},{name:"守護者たちの試練",charisma:100,stamina:2,expectation:0,drops:[{name:"金聖霊",icon:"gold-sprit"},{name:"白聖霊",icon:"platinum-sprit"},{name:"黒聖霊",icon:"black-sprit"},{name:"虹聖霊",icon:"rainbow-sprit"}],experience:200,gold:1800}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}]}]},695:function(t,a,e){"use strict";(function(t){function a(t){return t&&t.__esModule?t:{default:t}}function n(t){return 27+(t<=100?3*t:300+t-100)}function i(t){return 12+(t<=100?0:Math.floor((t-100)/20)+1)}function r(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var e=t.toFixed(a).split("."),n=parseInt(e[0]);return n.toLocaleString()+(1===e.length?"":"."+e[1])}function o(){if(q){var a=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,a){return t+a},0);t("input[name=current]").val(a).trigger("change")}}function s(){var a=void 0;try{a=JSON.parse(t.cookie(j+"_storage"))}catch(t){console.warn(t),a=R}return a}function c(a){t.cookie(j+"_storage",JSON.stringify(a),{expires:30})}function u(a){var e=void 0;try{e=JSON.parse(t.cookie(j+a.active))}catch(t){console.warn(t),e={}}return t.extend(!0,O,e)}function p(a){t.cookie(j+N.active,JSON.stringify(a),{expires:30})}function m(){if(E){var a=45,e=7,n=parseInt(S.val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),r=i.attr("data-amount")-n;if(r<-a)i.hide();else if(r<0)i.css("opacity",.5).show();else if(r<a)i.addClass("active").css("opacity",1).show();else if(r<a*e){var o=1-Math.floor(r/a)*a/(a*(e+1));i.show().css("opacity",o)}else i.hide();var s=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",c=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(s).text(c)})}}function l(){if("exchange"===T){var a=parseInt(S.val());w.forEach(function(e){for(var n=t('[data-prize="'+e.unit+'"]').empty(),i=0;i<a;i+=e.value){var r=t("<i />").addClass("icon icon-"+e.unit),o=25*Math.min(a-i,e.value)/e.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-o})).append(r.clone().css({width:o+"px"})).appendTo(n)}})}}function d(){var a=t("[name=expectation]:input").val(),e=1/0,n=0,i="drop"===a?null:a,o=C.map(function(t){var a=t.expectation/(i&&t[i]||1);return e=0,n=Math.max(n,a),a}),s=i?3:2;C.forEach(function(a,i){var c=t("[data-chart="+i+"]"),u=o[i],p=u/(n-e),m=120*p+240;c.find("span.barchart-label").text(r(u,s)+"個"),c.find("span.barchart").css({width:100*p+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"})})}function f(){var a=parseInt(A.val()),e=parseInt(S.val()),n=Math.max(a-e,0);C.forEach(function(a,e){var i=t("[data-chart="+e+"]"),o=n?Math.ceil(n/a.expectation):0;i.find("span.marathon").text("残り"+r(o)+"周")})}function v(){var a=parseInt(S.val()),e=parseInt(A.val()),o=C[parseInt(t("[name=estimate_map]:input").val())],s=Math.max(e-a,0),c=Math.ceil(s/o.expectation);t("#estimate_required_marathon").text(r(c));var u=(new Date).getTime(),p=y.reduce(function(t,a){return t+Math.max(a[1],u)-Math.max(a[0],u)},0),m=0+t("[name=estimate_natural_recovery]:input").prop("checked"),l=Math.floor(p/18e4)*m,d=Math.floor(p/36e5)*m,f=parseInt(t("[name=estimate_rank]").val()),v=n(f),h=i(f),g=Math.ceil(o.charisma*c),x=Math.ceil(o.stamina*c),b=t("[name=estimate_use_crystal]:input").val(),_=0+("both"===b||"charisma"===b),k=0+("both"===b||"stamina"===b),M=_?g:l,w=k?x:d,I=Math.floor(Math.min(M/o.charisma,w/o.stamina));t("#estimate_available_marathon").text(r(I));var T=Math.ceil(Math.max(o.charisma*I-l,0)/v),E=Math.ceil(Math.max(o.stamina*I-d,0)/h),j=T+E;t("#estimate_required_crystal").text(r(j));var D=0===T?"diff-eq":T>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",D).text(r(T)),D=0===E?"diff-eq":E>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",D).text(r(E));var z=I-c;D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus";var q=(z>=0?"+":"")+r(z);t("#estimate_available_marathon_diff").attr("class",D).text(q);var N=o.charisma*I;t("#estimate_using_charisma").text(r(N)),z=N-g,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",q=(z>=0?"+":"")+r(z),t("#estimate_using_charisma_diff").attr("class",D).text(q);var O=Math.ceil(o.stamina*I);t("#estimate_using_stamina").text(r(O)),z=O-x,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",q=(z>=0?"+":"")+r(z),t("#estimate_using_stamina_diff").attr("class",D).text(q);var R=a+Math.floor(o.expectation*I);t("#estimate_result_collection").text(r(R)),z=R-e,D=0===z?"diff-eq":z>0?"diff-plus":"diff-minus",q=(z>=0?"+":"")+r(z),t("#estimate_result_collection_diff").attr("class",D).text(q);var J=Math.floor(o.experience*I);q=(J>0?"+":"")+r(J),t("#estimate_experience").text(q);var L=j?J/j:0;q=(L>0?"+":"")+r(L),t("#estimate_avg_experience").text(q);var H=Math.floor(o.gold*I);q=(H>0?"+":"")+r(H),t("#estimate_gold").text(q);var U=j?H/j:0;q=(U>0?"+":"")+r(U),t("#estimate_avg_gold").text(q)}function h(){var a=parseInt(S.val()),e=parseInt(A.val()),n=(new Date).getTime(),i=y.reduce(function(t,a){return t+Math.max(a[1],n)-Math.max(a[0],n)},0),o=Math.max(e-a,0),s=i/864e5,c=o/Math.max(s,1),u=i/36e5,p=o/Math.max(u,1),m=i/18e5,l=o/Math.max(m,1),d=r(c,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(p,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(l,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(r(s,0)),t("#remains_hours").text(r(u,0)),t("#remains_minutes").text(r(60*u,0));var f=100*Math.min(a,e),v=parseInt(f/e)||0,h=M-i,g=parseInt(100*h/M)||0,x=void 0;x=100===v?"progress-bar-success":v>=g?"progress-bar-success":v>.7*g?"progress-bar-info":v>.4*g?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(x).children("span").text(v+"%達成"),t("#period_progress > .progress-bar").width(g+"%").children("span").text(g+"%経過");var b=a*M/h;t("#prediction_collection").text(r(Math.floor(b)));var _=Math.min(b/e,1),k=t("#objective_progress").width(),w=k*_-47;t(".pointer").css("left",w+"px");var C=k-w<230?-250:0;t(".pointer-label").css("margin-left",C+"px");var I="";if(a<e&&b>=e){var T=void 0,E=void 0;y.forEach(function(t){T=T||t[0],E=E||t[1]});var j=e/b*M,D=y.reduce(function(t,a){if(t)return t;var e=a[1]-a[0];return e<j?(j-=e,null):new Date(a[0]+j)},null),z=D.getMonth(),q=D.getDate(),N=D.getHours(),O=D.getMinutes(),R=z+1+"/"+q+" "+(N<10?"0"+N:N)+":"+(O<10?"0"+O:O);I=R+"頃に目標達成できそうよ。"}t("#prediction_completion_date").text(I)}function g(){var t="animated bounce",a="",e="Webkit Moz O ms Khtml".split(" "),n="",i=document.createElement("div");if(void 0!==i.style.animationName)return!0;for(var r=0;r<e.length;r++)if(void 0!==i.style[e[r]+"AnimationName"])return n=e[r],t=n+"Animation",a="-"+n.toLowerCase()+"-",!0;return!1}function x(){S=t("[name=current]:input"),A=t("[name=objective]:input");var a=(new Date).getTime(),e=t("#period_dates");if(y.forEach(function(n){var i=n[1]-n[0],r=100*i/M+"%",o=new Date(n[0]),s=new Date(n[1]-1),c=o.getMonth()+1+"/"+o.getDate()+"-"+(s.getMonth()+1)+"/"+s.getDate(),u=a>=n[0]&&a<n[1],p=a>=n[1],m=u?"progress-bar-active":p?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(c).addClass(m).appendTo(e)}),t('[data-objective-mode="'+T+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+T+'"]').remove(),S.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),"achievement"===T)t.each(k.objectives,function(a,e){t("<option />").attr("value",a).text(e+" ("+a+"個)").appendTo(A)});else{t("select[name=objective]").click(function(){this.select()});var h=t("#increse_objective_list");w.forEach(function(a){t('<button class="btn btn-default" name="add"  type="button" />').val(a.value).attr("title",a.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+a.unit)).appendTo(h)})}t("button[name=add]").click(function(a){a.preventDefault();var e=parseInt(t(this).val()),n=parseInt(A.val());A.val(n+e).trigger("change")}),t("button[name=reset]").click(function(t){t.preventDefault(),A.val(0).trigger("change")}),t("[name=expectation]:input").change(function(){d(),f()}).val(D);var x=t("#prize_list");w.forEach(function(a){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(a.name).append(t('<span class="prize-value" />').text("@"+a.value))).append(t('<div class="prize-list-body" />').attr("data-prize",a.unit)).appendTo(x)});var b=C.reduce(function(t,a){return Math.max(t,a.drops.length)},0);N=s();var _=u(N);_.maps.forEach(function(t,a){C[a].expectation=t.expectation}),q=_.syncCurrentEnabled;var O=void 0,R=function(){O&&clearTimeout(O),setTimeout(function(){var a=t("#map");C.forEach(function(t,e){var n=a.find("tr[data-map="+e+"]"),i=Math.max(parseInt(n.find("input[name=num_laps]").val())||0,0),o=Math.max(parseInt(n.find("input[name=num_drops]").val())||0,0),s=n.find("input[name=actual_expectation]"),c=Math.max(parseFloat(s.val())||0,0);"aggregate"===z&&(c=o/i||0,s.val(c));var u=Math.floor(c);n.find("button[name=increase]").val(u).text("+"+r(u)),_.maps[e].numLaps=i,_.maps[e].numDrops=o,t.expectation=_.maps[e].expectation=c}),p(_),v(),d(),f()},100)},J=t("#map").on("keyup","input[type=number]",function(){R(),o()}).on("change","input[type=number]",function(){R(),o()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(a){a.preventDefault();var e=t(this).closest("tr"),n=e.find("input[name=num_laps]"),i=parseInt(n.val())+1;n.val(i);var r=e.find("input[name=num_drops]"),o=parseInt(r.val())+parseInt(this.value);r.val(o),r.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){z=t(this).val(),_.expectationInputMode=z,p(_),J.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===z).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===z).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===z),R()}).on("click","input[name=sync]",function(){_.syncCurrentEnabled=q=this.checked,p(_),o()}),L=J.find("tbody");if(C.forEach(function(a,e){var n=_.maps[e],i=t("<td />").attr("data-chart",e).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",e).append(t("<th />").text(a.name)).append(t("<td />").text(""+a.charisma+"/"+a.stamina)).append(function(){for(var e=a.drops.map(function(a){var e=a.icon?t("<i />").attr("title",a.name).addClass("icon icon-"+a.icon):t("<span />").text(a.name),n=a.set?t('<span class="badge" />').text("x"+a.set):null;return t("<td />").append(e).append(n)}),n=a.drops.length;n<b;n++)e.push(t("<td />"));return e}).append(function(){var a=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">1周の期待値</span>')).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(n.expectation)),e=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">周回</span>')).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(n.numLaps)).append(t('<span class="input-group-addon">ドロップ</span>')).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(n.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(e).append(a)}).append(i).prependTo(L)}),t("#map thead th.drops").attr("colspan",b),E){var H=t("#rewards tbody");I.forEach(function(a){var e=t('<span class="icon" />').addClass("icon-"+a.unit);t("<tr />").attr("data-amount",a.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+a.amount)).append(t("<td />").html(e)).appendTo(H)})}var U=t("[name=estimate_map]:input").change(function(){v(),_.estimateMap=parseInt(t(this).val()),p(_)});C.forEach(function(a,e){t("<option />").val(e).text(a.name+" ("+a.charisma+"/"+a.stamina+")").prependTo(U)});for(var F=t("[name=estimate_rank]:input").change(function(){v(),_.estimateRank=parseInt(t(this).val()),p(_)}),K=1;K<=200;K++){var W=n(K),B=i(K),G=""+K+" ("+W+"/"+B+")";t("<option />").val(K).text(G).appendTo(F)}var P=t("[name=estimate_use_crystal]").change(function(){v(),_.estimateUseCrystal=t(this).val(),p(_)}),Q=t("[name=estimate_natural_recovery]:input").change(function(){v(),_.estimateNaturalRecovery=this.checked,p(_)});t("*[title]").tooltip(),S.val(_.current),"exchange"===T?A.val(_.objective):A.val([_.objective]),t("[name=current]:input, [name=objective]:input").change(function(){_[this.name]=t(this).val(),p(_),m(),l(),f(),v()}),U.val(_.estimateMap),F.val(_.estimateRank),P.val(_.estimateUseCrystal),Q.prop("checked",_.estimateNaturalRecovery),"exchange"===T&&l(),E&&m(),J.find("input[name=sync]").prop("checked",q).end().find('input[name=expectation_input_mode][value="'+_.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(j),t.removeCookie(j+"_storage"),window.location.reload()});var V=g(),X=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");t("#estimate_tutorial").on("click","a",function(a){t("#map .expectation").each(function(){var a=t(this);V&&a.addClass("animated flash").one(X,function(){a.removeClass("animated flash")})})}).on("click","button",function(a){_.estimateTutorialHidden=!0,p(_),t(a.delegateTarget).each(function(){var a=t(this);V?a.addClass("animated zoomOutRight").one(X,function(){a.hide()}):a.hide()})}).toggle(!_.estimateTutorialHidden).each(function(){var a=t(this),e=a.find(".anna");a.on("mouseenter",function(){e.addClass("animated bounce")}).on("mouseleave",function(){e.removeClass("animated bounce")})});var Y=t("[name=slot]").change(function(){N.active=t(this).val(),c(N),window.location.reload()});t.map(N.slots,function(a,e){var n=e===N.active;t("<option />").val(e).text(a+(n?" *":"")).attr("selected",n).appendTo(Y)})}var b=e(360),_=a(b),k=_.default[0],y=k.periods.map(function(t){return t.map(Date.parse)}),M=y.reduce(function(t,a){return t+a[1]-a[0]},0);k.maxObjective=null===k.maxObjective?1/0:k.maxObjective;var w=k.prizes,C=k.maps,I=k.rewards,T="achievement",E=!0,j="soldier-soul-timer",D="stamina",z="direct",q=!0,N=void 0,O={current:20,objective:1500,estimateMap:7,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:z,syncCurrentEnabled:q,maps:C.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),estimateTutorialHidden:!1,version:1},R={active:"",slots:{"":"データ1",_2:"データ2",_3:"データ3"}},S=void 0,A=void 0;t(function(){x(),setInterval(h,1e3)})}).call(a,e(3))}},[695]);