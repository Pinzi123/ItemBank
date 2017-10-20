/** 全局函数 **/

// 移除类名
function removeClassName(e, className){
	if(e.className){
	  e.className = e.className.replace(className,"")
	}
}
// 添加类名
function addClassName(e, className){
	e.className = e.className + ' ' + className
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
			if(target.className.match(selector) || target.nodeName.match(selector)) {
				fn.call(target, e)
			}
		} else {
			fn(e)
		}
	})
}