window.onload = function () {

 var problem = document.getElementById('problem')
 var options = document.getElementsByClassName('option')
 var pages = document.getElementsByClassName('pages')[0]
 var icons = document.getElementsByClassName('icon')
 var radios = document.getElementsByClassName('radio')
 var subjectList = document.getElementsByClassName('subject-num-list')[0]
 var subjectListA = subjectList.getElementsByTagName('a')
 var subjectListLi = subjectList.getElementsByTagName('li')
 var questionNumber = document.getElementsByClassName('question-number')[0]
 var correctAnswer = document.getElementById('correctAnswer')
 var yourAnswer = document.getElementById('yourAnswer')
 var analysis = document.getElementById('analysis-detail')
 var nowItem = GetQueryString('tid') - 1
 if (nowItem<0) {nowItem = 0}
 var nowRadio = -1
 var itemNum = itemsA.length
 var answer = localStorage.getItem('answer').split(',');
 console.log(answer)
 // 渲染数据
 resetTopic(nowItem,itemsA);
 addClassName(subjectListA[nowItem],'done-hover')
 questionNumber.innerHTML = nowItem + 1

 for(var i = 0; i < itemNum; i++){
     if ( itemsA.content[i].correct == answer[i] ) {
       subjectListLi[i].className = 'correct-order'
     } else {
       subjectListLi[i].className = 'error-order'
     }
     console.log(answer[i])
 }

  //重置题目
  function resetTopic(num,items){
    var content = items.content[num]
	 // 清除样式
	 for(var i = 0; i < icons.length; i++){
		   removeClassName(icons[i],' selected')
	 }
		 addClassName(icons[content.correct], 'selected')
     addClassName(radios[content.correct], 'checked')
     correctAnswer.innerHTML = optionCon[content.correct]
     analysis.innerHTML = content.analysis
     if (answer[num] >= 0){
       yourAnswer.innerHTML = optionCon[answer[num]]
     } else {
       yourAnswer.innerHTML = '空'
     }
	 // 更改题目内容

	problem.innerHTML = content.topic
	//UpdateMath(content.topic)
	 // 更改选项内容
	 for(var i = 0; i < options.length; i++){
		 options[i].innerHTML = content.options[i]
	 }

	 MathJax.Hub.Queue(['Typeset', MathJax.Hub]);

  }

  //选中题目
  function checked(node) {
	 node.className = node.className + " checked"
  }

}
