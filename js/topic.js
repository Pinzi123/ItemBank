window.onload = function () {
 var topic = document.getElementsByClassName('topic')[0];
 var icons = document.getElementsByClassName('icon')
 
 bindEvent(topic, 'mouseover', 'radio', function(e){
	 e.target.className = e.target.className + ' checked';
	 e.target.getElementsByClassName('icon')[0].className = e.target.getElementsByClassName('icon')[0].className + ' checked';
 })
 
 bindEvent(topic, 'mouseout', 'radio', function(e){
   e.target.className = e.target.className.replace(" checked","");
   e.target.getElementsByClassName('icon')[0].className = e.target.getElementsByClassName('icon')[0].className.replace(" checked","")
 })
 
 bindEvent(topic, 'click', 'radio', function(e){
	 for(var i = 0; i < icons.length; i++){
		 removeClassName(icons[i],' selected');
	 }
	  e.target.getElementsByClassName('icon')[0].className =  e.target.getElementsByClassName('icon')[0].className + ' selected';
  })
 
 
 
}

// 移除类名
function removeClassName(e, className){
	e.className = e.className.replace(className,"")
}

//事件代理
function bindEvent(elem, type, selector, fn){
	if(fn == null){
		fn = selector
		selector = null
	}
	elem.addEventListener(type, function(e) {
		var target
		if(selector&&e.target !== elem){
			target = e.target
			if(target.className.match(selector)) {
				fn.call(target, e)
			}
		} else {
			fn(e)
		}
	})
}