function rstudio(){var P='bootstrap',Q='begin',R='gwt.codesvr.rstudio=',S='gwt.codesvr=',T='rstudio',U='startup',V='DUMMY',W=0,X=1,Y='iframe',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='aria-hidden',ab='true',bb='CSS1Compat',cb='<!doctype html>',db='',eb='<html><head><\/head><body><\/body><\/html>',fb='undefined',gb='readystatechange',hb=10,ib='Chrome',jb='eval("',kb='");',lb='script',mb='javascript',nb='moduleStartup',ob='moduleRequested',pb='Failed to load ',qb='head',rb='meta',sb='name',tb='rstudio::',ub='::',vb='gwt:property',wb='content',xb='=',yb='gwt:onPropertyErrorFn',zb='Bad handler "',Ab='" for "gwt:onPropertyErrorFn"',Bb='gwt:onLoadErrorFn',Cb='" for "gwt:onLoadErrorFn"',Db='#',Eb='?',Fb='/',Gb='img',Hb='clear.cache.gif',Ib='baseUrl',Jb='rstudio.nocache.js',Kb='base',Lb='//',Mb='locale',Nb='en',Ob='LOCALE=',Pb=';',Qb=7,Rb='__gwt_Locale',Sb='_',Tb='Unexpected exception in locale detection, using default: ',Ub=2,Vb='rstudio.desktop',Wb='Electron',Xb='QtWebEngine',Yb='false',Zb='rstudio.electron',$b='rstudio.remoteDesktop',_b='RStudio Remote Desktop',ac='rstudio.useNativeDialogs',bc='WEBDIALOG',cc='user.agent',dc='webkit',ec='safari',fc='msie',gc=11,hc='ie10',ic=9,jc='ie9',kc=8,lc='ie8',mc='gecko',nc='gecko1_8',oc=3,pc=4,qc='selectingPermutation',rc='rstudio.devmode.js',sc='default',tc='6745C6D7ECD79730567690541DB159CC',uc=':1',vc=':10',wc=':11',xc=':12',yc=':13',zc=':14',Ac=':15',Bc=':16',Cc=':17',Dc=':18',Ec=':19',Fc=':2',Gc=':20',Hc=':21',Ic=':22',Jc=':23',Kc=':24',Lc=':25',Mc=':26',Nc=':27',Oc=':28',Pc=':29',Qc=':3',Rc=':30',Sc=':31',Tc=':32',Uc=':33',Vc=':34',Wc=':35',Xc=':36',Yc=':37',Zc=':38',$c=':39',_c=':4',ad=':40',bd=':41',cd=':42',dd=':43',ed=':44',fd=':45',gd=':46',hd=':47',jd=':48',kd=':49',ld=':5',md=':50',nd=':51',od=':52',pd=':53',qd=':54',rd=':55',sd=':56',td=':57',ud=':58',vd=':59',wd=':6',xd=':60',yd=':61',zd=':62',Ad=':63',Bd='fr',Cd=':64',Dd=':65',Ed=':66',Fd=':67',Gd=':68',Hd=':69',Id=':7',Jd=':70',Kd=':71',Ld=':72',Md=':73',Nd=':74',Od=':75',Pd=':76',Qd=':77',Rd=':78',Sd=':79',Td=':8',Ud=':80',Vd=':81',Wd=':82',Xd=':83',Yd=':84',Zd=':85',$d=':86',_d=':87',ae=':88',be=':89',ce=':9',de=':90',ee=':91',fe=':92',ge=':93',he=':94',ie=':95',je=':',ke='.cache.js',le='loadExternalRefs',me='end',ne='http:',oe='file:',pe='_gwt_dummy_',qe='__gwtDevModeHook:rstudio',re='Ignoring non-whitelisted Dev Mode URL: ',se=':moduleBase';var p=window;var q=document;s(P,Q);function r(){var a=p.location.search;return a.indexOf(R)!=-1||a.indexOf(S)!=-1}
function s(a,b){if(p.__gwtStatsEvent){p.__gwtStatsEvent({moduleName:T,sessionId:p.__gwtStatsSessionId,subSystem:U,evtGroup:a,millis:(new Date).getTime(),type:b})}}
rstudio.__sendStats=s;rstudio.__moduleName=T;rstudio.__errFn=null;rstudio.__moduleBase=V;rstudio.__softPermutationId=W;rstudio.__computePropValue=null;rstudio.__getPropMap=null;rstudio.__installRunAsyncCode=function(){};rstudio.__gwtStartLoadingFragment=function(){return null};rstudio.__gwt_isKnownPropertyValue=function(){return false};rstudio.__gwt_getMetaProperty=function(){return null};var t=null;var u=p.__gwt_activeModules=p.__gwt_activeModules||{};u[T]={moduleName:T};rstudio.__moduleStartupDone=function(e){var f=u[T].bindings;u[T].bindings=function(){var a=f?f():{};var b=e[rstudio.__softPermutationId];for(var c=W;c<b.length;c++){var d=b[c];a[d[W]]=d[X]}return a}};var v;function w(){A();return v}
function A(){if(v){return}var a=q.createElement(Y);a.id=T;a.style.cssText=Z+$;a.tabIndex=-1;a.setAttribute(_,ab);q.body.appendChild(a);v=a.contentWindow.document;v.open();var b=document.compatMode==bb?cb:db;v.write(b+eb);v.close()}
function B(k){function l(a){function b(){if(typeof q.readyState==fb){return typeof q.body!=fb&&q.body!=null}return /loaded|complete/.test(q.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(q.removeEventListener){q.removeEventListener(gb,d,false)}if(e){clearInterval(e)}}}
if(q.addEventListener){q.addEventListener(gb,d,false)}var e=setInterval(function(){d()},hb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=w();var f=e.body;var g;if(navigator.userAgent.indexOf(ib)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(jb));for(var i=W;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(X,j.length-X)))}h.appendChild(e.createTextNode(kb));g=e.createElement(lb);g.language=mb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=W;i<c.length;i++){g=e.createElement(lb);g.language=mb;g.text=c[i];f.appendChild(g);d(f,g)}}}
rstudio.onScriptDownloaded=function(a){l(function(){m(a)})};s(nb,ob);var n=q.createElement(lb);n.src=k;if(rstudio.__errFn){n.onerror=function(){rstudio.__errFn(T,new Error(pb+code))}}q.getElementsByTagName(qb)[W].appendChild(n)}
rstudio.__startLoadingFragment=function(a){return F(a)};rstudio.__installRunAsyncCode=function(a){var b=w();var c=b.body;var d=b.createElement(lb);d.language=mb;d.text=a;c.appendChild(d);c.removeChild(d)};function C(){var c={};var d;var e;var f=q.getElementsByTagName(rb);for(var g=W,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(sb),k;if(j){j=j.replace(tb,db);if(j.indexOf(ub)>=W){continue}if(j==vb){k=i.getAttribute(wb);if(k){var l,m=k.indexOf(xb);if(m>=W){j=k.substring(W,m);l=k.substring(m+X)}else{j=k;l=db}c[j]=l}}else if(j==yb){k=i.getAttribute(wb);if(k){try{d=eval(k)}catch(a){alert(zb+k+Ab)}}}else if(j==Bb){k=i.getAttribute(wb);if(k){try{e=eval(k)}catch(a){alert(zb+k+Cb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};t=d;rstudio.__errFn=e}
function D(){function e(a){var b=a.lastIndexOf(Db);if(b==-1){b=a.length}var c=a.indexOf(Eb);if(c==-1){c=a.length}var d=a.lastIndexOf(Fb,Math.min(c,b));return d>=W?a.substring(W,d+X):db}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=q.createElement(Gb);b.src=a+Hb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ib);if(a!=null){return a}return db}
function h(){var a=q.getElementsByTagName(lb);for(var b=W;b<a.length;++b){if(a[b].src.indexOf(Jb)!=-1){return e(a[b].src)}}return db}
function i(){var a=q.getElementsByTagName(Kb);if(a.length>W){return a[a.length-X].href}return db}
function j(){var a=q.location;return a.href==a.protocol+Lb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==db){k=h()}if(k==db){k=i()}if(k==db&&j()){k=e(q.location.href)}k=f(k);return k}
function F(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return rstudio.__moduleBase+a}
function G(){var h=[];var i=W;function j(a,b){var c=h;for(var d=W,e=a.length-X;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var k=[];var l=[];function m(a){var b=l[a](),c=k[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(t){t(a,d,b)}throw null}
l[Mb]=function(){var b=null;var c=Nb;try{if(!b){var d=q.cookie;var e=d.indexOf(Ob);if(e>=W){var f=d.indexOf(Pb,e);if(f<W){f=d.length}b=d.substring(e+Qb,f)}}if(!b){b=p[Rb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Mb,b)){var g=b.lastIndexOf(Sb);if(g<W){b=null;break}b=b.substring(W,g)}}catch(a){alert(Tb+a)}p[Rb]=c;return b||Nb};k[Mb]={'default':W,'en':X,'fr':Ub};l[Vb]=function(){if(window.desktop)return ab;return window.navigator.userAgent.indexOf(Wb)>W||window.navigator.userAgent.indexOf(Xb)>W?ab:Yb};k[Vb]={'false':W,'true':X};l[Zb]=function(){return window.navigator.userAgent.indexOf(Wb)>W?ab:Yb};k[Zb]={'false':W,'true':X};l[$b]=function(){if(window.remoteDesktop)return ab;return window.navigator.userAgent.indexOf(_b)>W?ab:Yb};k[$b]={'false':W,'true':X};l[ac]=function(){try{if(window.navigator.userAgent.indexOf(Wb)>W){var b=window.document.cookie.split(Pb);for(var c=W;c<b.length;c++){var d=b[c].split(xb);if(bc===d[W].trim().toUpperCase()){return Yb}}}}catch(a){console.error(a)}return ab};k[ac]={'false':W,'true':X};l[cc]=function(){var a=navigator.userAgent.toLowerCase();var b=q.documentMode;if(function(){return a.indexOf(dc)!=-1}())return ec;if(function(){return a.indexOf(fc)!=-1&&(b>=hb&&b<gc)}())return hc;if(function(){return a.indexOf(fc)!=-1&&(b>=ic&&b<gc)}())return jc;if(function(){return a.indexOf(fc)!=-1&&(b>=kc&&b<gc)}())return lc;if(function(){return a.indexOf(mc)!=-1||b>=gc}())return nc;return db};k[cc]={'gecko1_8':W,'ie10':X,'ie8':Ub,'ie9':oc,'safari':pc};__gwt_isKnownPropertyValue=function(a,b){return b in k[a]};rstudio.__getPropMap=function(){var a={};for(var b in k){if(k.hasOwnProperty(b)){a[b]=m(b)}}return a};rstudio.__computePropValue=m;p.__gwt_activeModules[T].bindings=rstudio.__getPropMap;s(P,qc);if(r()){return F(rc)}var n;try{j([sc,Yb,Yb,Yb,Yb,nc],tc);j([sc,Yb,Yb,Yb,Yb,ec],tc+uc);j([sc,Yb,ab,Yb,ab,nc],tc+vc);j([sc,Yb,ab,Yb,ab,ec],tc+wc);j([sc,Yb,ab,ab,Yb,nc],tc+xc);j([sc,Yb,ab,ab,Yb,ec],tc+yc);j([sc,Yb,ab,ab,ab,nc],tc+zc);j([sc,Yb,ab,ab,ab,ec],tc+Ac);j([sc,ab,Yb,Yb,Yb,nc],tc+Bc);j([sc,ab,Yb,Yb,Yb,ec],tc+Cc);j([sc,ab,Yb,Yb,ab,nc],tc+Dc);j([sc,ab,Yb,Yb,ab,ec],tc+Ec);j([sc,Yb,Yb,Yb,ab,nc],tc+Fc);j([sc,ab,Yb,ab,Yb,nc],tc+Gc);j([sc,ab,Yb,ab,Yb,ec],tc+Hc);j([sc,ab,Yb,ab,ab,nc],tc+Ic);j([sc,ab,Yb,ab,ab,ec],tc+Jc);j([sc,ab,ab,Yb,Yb,nc],tc+Kc);j([sc,ab,ab,Yb,Yb,ec],tc+Lc);j([sc,ab,ab,Yb,ab,nc],tc+Mc);j([sc,ab,ab,Yb,ab,ec],tc+Nc);j([sc,ab,ab,ab,Yb,nc],tc+Oc);j([sc,ab,ab,ab,Yb,ec],tc+Pc);j([sc,Yb,Yb,Yb,ab,ec],tc+Qc);j([sc,ab,ab,ab,ab,nc],tc+Rc);j([sc,ab,ab,ab,ab,ec],tc+Sc);j([Nb,Yb,Yb,Yb,Yb,nc],tc+Tc);j([Nb,Yb,Yb,Yb,Yb,ec],tc+Uc);j([Nb,Yb,Yb,Yb,ab,nc],tc+Vc);j([Nb,Yb,Yb,Yb,ab,ec],tc+Wc);j([Nb,Yb,Yb,ab,Yb,nc],tc+Xc);j([Nb,Yb,Yb,ab,Yb,ec],tc+Yc);j([Nb,Yb,Yb,ab,ab,nc],tc+Zc);j([Nb,Yb,Yb,ab,ab,ec],tc+$c);j([sc,Yb,Yb,ab,Yb,nc],tc+_c);j([Nb,Yb,ab,Yb,Yb,nc],tc+ad);j([Nb,Yb,ab,Yb,Yb,ec],tc+bd);j([Nb,Yb,ab,Yb,ab,nc],tc+cd);j([Nb,Yb,ab,Yb,ab,ec],tc+dd);j([Nb,Yb,ab,ab,Yb,nc],tc+ed);j([Nb,Yb,ab,ab,Yb,ec],tc+fd);j([Nb,Yb,ab,ab,ab,nc],tc+gd);j([Nb,Yb,ab,ab,ab,ec],tc+hd);j([Nb,ab,Yb,Yb,Yb,nc],tc+jd);j([Nb,ab,Yb,Yb,Yb,ec],tc+kd);j([sc,Yb,Yb,ab,Yb,ec],tc+ld);j([Nb,ab,Yb,Yb,ab,nc],tc+md);j([Nb,ab,Yb,Yb,ab,ec],tc+nd);j([Nb,ab,Yb,ab,Yb,nc],tc+od);j([Nb,ab,Yb,ab,Yb,ec],tc+pd);j([Nb,ab,Yb,ab,ab,nc],tc+qd);j([Nb,ab,Yb,ab,ab,ec],tc+rd);j([Nb,ab,ab,Yb,Yb,nc],tc+sd);j([Nb,ab,ab,Yb,Yb,ec],tc+td);j([Nb,ab,ab,Yb,ab,nc],tc+ud);j([Nb,ab,ab,Yb,ab,ec],tc+vd);j([sc,Yb,Yb,ab,ab,nc],tc+wd);j([Nb,ab,ab,ab,Yb,nc],tc+xd);j([Nb,ab,ab,ab,Yb,ec],tc+yd);j([Nb,ab,ab,ab,ab,nc],tc+zd);j([Nb,ab,ab,ab,ab,ec],tc+Ad);j([Bd,Yb,Yb,Yb,Yb,nc],tc+Cd);j([Bd,Yb,Yb,Yb,Yb,ec],tc+Dd);j([Bd,Yb,Yb,Yb,ab,nc],tc+Ed);j([Bd,Yb,Yb,Yb,ab,ec],tc+Fd);j([Bd,Yb,Yb,ab,Yb,nc],tc+Gd);j([Bd,Yb,Yb,ab,Yb,ec],tc+Hd);j([sc,Yb,Yb,ab,ab,ec],tc+Id);j([Bd,Yb,Yb,ab,ab,nc],tc+Jd);j([Bd,Yb,Yb,ab,ab,ec],tc+Kd);j([Bd,Yb,ab,Yb,Yb,nc],tc+Ld);j([Bd,Yb,ab,Yb,Yb,ec],tc+Md);j([Bd,Yb,ab,Yb,ab,nc],tc+Nd);j([Bd,Yb,ab,Yb,ab,ec],tc+Od);j([Bd,Yb,ab,ab,Yb,nc],tc+Pd);j([Bd,Yb,ab,ab,Yb,ec],tc+Qd);j([Bd,Yb,ab,ab,ab,nc],tc+Rd);j([Bd,Yb,ab,ab,ab,ec],tc+Sd);j([sc,Yb,ab,Yb,Yb,nc],tc+Td);j([Bd,ab,Yb,Yb,Yb,nc],tc+Ud);j([Bd,ab,Yb,Yb,Yb,ec],tc+Vd);j([Bd,ab,Yb,Yb,ab,nc],tc+Wd);j([Bd,ab,Yb,Yb,ab,ec],tc+Xd);j([Bd,ab,Yb,ab,Yb,nc],tc+Yd);j([Bd,ab,Yb,ab,Yb,ec],tc+Zd);j([Bd,ab,Yb,ab,ab,nc],tc+$d);j([Bd,ab,Yb,ab,ab,ec],tc+_d);j([Bd,ab,ab,Yb,Yb,nc],tc+ae);j([Bd,ab,ab,Yb,Yb,ec],tc+be);j([sc,Yb,ab,Yb,Yb,ec],tc+ce);j([Bd,ab,ab,Yb,ab,nc],tc+de);j([Bd,ab,ab,Yb,ab,ec],tc+ee);j([Bd,ab,ab,ab,Yb,nc],tc+fe);j([Bd,ab,ab,ab,Yb,ec],tc+ge);j([Bd,ab,ab,ab,ab,nc],tc+he);j([Bd,ab,ab,ab,ab,ec],tc+ie);n=h[m(Mb)][m(Vb)][m(Zb)][m($b)][m(ac)][m(cc)];var o=n.indexOf(je);if(o!=-1){i=parseInt(n.substring(o+X),hb);n=n.substring(W,o)}}catch(a){}rstudio.__softPermutationId=i;return F(n+ke)}
function H(){if(!p.__gwt_stylesLoaded){p.__gwt_stylesLoaded={}}s(le,Q);s(le,me)}
C();rstudio.__moduleBase=D();u[T].moduleBase=rstudio.__moduleBase;var I=G();if(p){var J=!!(p.location.protocol==ne||p.location.protocol==oe);p.__gwt_activeModules[T].canRedirect=J;function K(){var b=pe;try{p.sessionStorage.setItem(b,b);p.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(J&&K()){var L=qe;var M=p.sessionStorage[L];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(M)){if(M&&(window.console&&console.log)){console.log(re+M)}M=db}if(M&&!p[L]){p[L]=true;p[L+se]=D();var N=q.createElement(lb);N.src=M;var O=q.getElementsByTagName(qb)[W];O.insertBefore(N,O.firstElementChild||O.children[W]);return false}}}H();s(P,me);B(I);return true}
rstudio.succeeded=rstudio();