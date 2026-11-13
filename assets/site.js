(function(){
  var b=document.querySelector('.navtoggle'),n=document.getElementById('primary-nav');
  if(!b||!n){return;}
  b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
    document.documentElement.style.overflow=o?'hidden':'';
  });
})();
