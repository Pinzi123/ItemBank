window.onload = function () {
   var canvas1 = document.getElementById('circle')
   var circle = canvas1.getContext('2d')
   var canvas2 = document.getElementById('polygon')
   var polygon = canvas2.getContext('2d')
   
   /** 画圆 **/

      
   var startR = 15
   var x = 150
   var y = 100
   Circle(circle,"#A8A8A8",1,x,y,15,0,Math.PI*2,true)
   for(var i = 0; i < 4; i++){
	   if(i%2){
		   startR=startR+7
		   Circle(circle,"#F0F0F0",10,x,y,startR,0,Math.PI*2,true)
		   startR=startR+7
           Circle(circle,"#A8A8A8",1,x,y,startR,0,Math.PI*2,true)
	   } else{
		   startR=startR+14
           Circle(circle,"#A8A8A8",1,x,y,startR,0,Math.PI*2,true)
	   }
   }
   
    
}

/** 全局函数 **/
function Circle(circle,color,lineWidth,x,y,r,sAngle,eAngle,counterclockwise){
   circle.strokeStyle=color;
   circle.lineWidth=lineWidth;
   circle.beginPath();
   circle.arc(x,y,r,sAngle,eAngle,counterclockwise);
   circle.stroke();
}