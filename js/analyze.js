window.onload = function () {


 var problem = document.getElementById('problem')
 var options = document.getElementsByClassName('option')
 var pages = document.getElementsByClassName('pages')[0]
 var icons = document.getElementsByClassName('icon')
 var nowItem = 0
 var nowRadio = -1
 var itemNum = itemsA.length
 // 渲染数据
 resetTopic(nowItem,itemsA);
 resetPages(itemNum)

 // 绑定事件



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
	//UpdateMath(content.topic)
	 // 更改选项内容
	 for(var i = 0; i < options.length; i++){
		 options[i].innerHTML = content.options[i]
	 }

	 MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
	 progressNums.innerHTML =  (nowItem + 1)+ '/' + itemNum
	 progressBar.style.width = (nowItem + 1)/itemNum*100 + '%'
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
