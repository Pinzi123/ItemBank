window.onload = function () {
   var topic1 = document.getElementById('jsChosen');
   var topic2 = document.getElementById('jsOther');
   
   
   /** 绑定事件 **/
   bindEvent(topic1, 'click', function(e) {
	  window.location.href="topic.html"
   })
   
   bindEvent(topic2, 'click', function(e) {
	  window.location.href="topic.html"
   })
   
   
   /** 内置函数 **/
}