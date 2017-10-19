window.onload = function () {
 //请求数据,可以下载一个模拟http的插件
 /**
 var xhr = new XMLHttpRequest()

 xhr.open("GET","./data/items.js",false); 
 
 xhr.onreadystatechange = function () {
	 if (xhr.readyState == 4){
		 if (xhr.status ==200) {
			 alert("OK")
		 }
	 }
 }
 xhr.send();**/
 
 var topic = document.getElementsByClassName('topic')[0];
 var icons = document.getElementsByClassName('icon')
 var problem = document.getElementById('problem')
 var options = topic.getElementsByClassName('option')
 var pages = document.getElementById('pages')
 var pageSpan
 var submitDiv = document.getElementsByClassName('submit')[0].getElementsByTagName("div")
 var nowItem = 0
 var nowRadio = -1
 var itemNum = itemsA.length
 // 渲染数据
 resetTopic(nowItem,itemsA);
 resetPages(itemNum)

 // 绑定事件
 bindEvent(topic, 'mouseover', 'radio', function(e){
	 e.target.className = e.target.className + ' checked';
	 e.target.getElementsByClassName('icon')[0].className = e.target.getElementsByClassName('icon')[0].className + ' checked';
 })
 
 bindEvent(topic, 'mouseout', 'radio', function(e){
   e.target.className = e.target.className.replace(" checked","");
   e.target.getElementsByClassName('icon')[0].className = e.target.getElementsByClassName('icon')[0].className.replace(" checked","")
 })
 
 bindEvent(topic, 'click', 'radio', function(e){
	 var nowselect = e.target.getElementsByClassName('icon')[0]
	 for(var i = 0; i < icons.length; i++){
		 removeClassName(icons[i],' selected');
		 if(nowselect == icons[i]){
			 nowRadio = i
			 answer[nowItem] = nowRadio
		 }
	 }
	  nowselect.className =  nowselect.className + ' selected';
	  nowselect.setAttribute('checked', 'true')
	  console.log(nowselect.getAttribute('checked'));
	
  })
  
  bindEvent(pages, 'click', 'SPAN', function(e) {
	 for(var i = 0; i < pageSpan.length; i++){
		 if(answer[i]<0){
		  removeClassName(pageSpan[i],' checked');
		 }
		 if(e.target == pageSpan[i]){
			 checked(e.target)
	         resetTopic(i,itemsA)
			 nowItem = i
		 }
	 }
  })
  
  bindEvent(submitDiv[1], 'click', function(e) {
	  if(nowItem < (itemNum-1)){
	    if(answer[nowItem]<0){
		  removeClassName(pageSpan[i],' checked');
		 }
	    nowItem = nowItem + 1
	    resetTopic(nowItem,itemsA)
		checked(pageSpan[nowItem])
		if(nowItem == (itemNum-1)){
			submitDiv[1].innerHTML = '交卷'
			submitDiv[0].style.display = 'none'
		}
		
	  } else {
		  alert('等待算分！')
	  }
  })
  
  
  
  
  /** 内置函数 **/
  
  //重置题目
  function resetTopic(num,items){
	 // 清除样式
	 for(var i = 0; i < icons.length; i++){
		   removeClassName(icons[i],' selected')
	 } 
	 if (answer[num]>0){
		 addClassName(icons[answer[num]], 'selected')
	 }
	 // 更改题目内容
	 var content = items.content[num]
	 problem.innerHTML = content.topic
	 // 更改选项内容
	 for(var i = 0; i < options.length; i++){
		 options[i].innerHTML = content.options[i]
	 }
  }
  
  // 设置题目数
  function resetPages(len) {
	  for(var i=0; i<len; i++){
		  var span = document.createElement("span");
		  var node=document.createTextNode(i+1);
          span.appendChild(node);
		  pages.appendChild(span);
	  }
	  pageSpan = pages.getElementsByTagName("span")
	  console.log(pageSpan.length)
	  checked(pageSpan[0])
  }
  
  //选中题目
  function checked(node) {
	 node.className = node.className + " checked"
  }
}


/** 全局函数 **/

// 移除类名
function removeClassName(e, className){
	e.className = e.className.replace(className,"")
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