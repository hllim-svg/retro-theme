(function(){
var n=['sms','sms-bw','sms-clover','sms-bunny','sms-blue','sms-cat','sms-purple'],k=-1,i;
try{k=parseInt(localStorage.getItem('zr'),10);if(isNaN(k))k=-1}catch(e){}
do{i=Math.floor(Math.random()*n.length)}while(i===k&&n.length>1);
try{localStorage.setItem('zr',i)}catch(e){}
var s=document.createElement('script');
s.src='https://hllim-svg.github.io/retro-theme/'+n[i]+'.js?'+Date.now();
document.head.appendChild(s);
})();
