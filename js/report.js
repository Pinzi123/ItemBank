window.onload = function () {
   var canvas1 = document.getElementById('circle')
   var circle = canvas1.getContext('2d')
   var canvas2 = document.getElementById('polygon')
   var polygon = canvas2.getContext('2d')
   var mathAttr = [{name:"集合和函数",rank:3},
                   {name:"三角函数",rank:2},
                   {name:"数列",rank:2},
                   {name:"立体几何",rank:4},
                   {name:"排列组合",rank:3}]

   /** 画圆 **/
   var startR = 15
   var x = 150
   var y = 100
   var rArr = []
   rArr.push(startR)
   strokeCircle(circle,"#A8A8A8",1,x,y,15,0,Math.PI*2,true)
   for(var i = 0; i < 4; i++){
	   if(i%2){
		   startR=startR+7
		   strokeCircle(circle,"#F0F0F0",10,x,y,startR,0,Math.PI*2,true)
		   startR=startR+7
       strokeCircle(circle,"#A8A8A8",1,x,y,startR,0,Math.PI*2,true)
        rArr.push(startR)
	   } else {
		   startR=startR+14
       strokeCircle(circle,"#A8A8A8",1,x,y,startR,0,Math.PI*2,true)
       rArr.push(startR)
	   }
   }


   circle.save()

   /** 定点 **/
   drawPointInCircle(circle,x,y,startR,0)
   drawPolygon(polygon,x,y,circle,rArr,mathAttr)

}

/** 全局函数 **/

/** 画圆 **/
function strokeCircle(circle,color,lineWidth,x,y,r,sAngle,eAngle,counterclockwise){
   circle.strokeStyle=color;
   circle.lineWidth=lineWidth;
   circle.beginPath();
   circle.arc(x,y,r,sAngle,eAngle,counterclockwise);
   circle.stroke();
}

/** 画多边形
    绘制文字
 **/
 function drawPolygon(polygon,x,y,text,rArr,mathAttr){
   polygon.beginPath()
   polygon.strokeStyle = '#989898'
   polygon.fillStyle = '#808080'
   polygon.globalAlpha = 0.4
   polygon.lineWidth=1
   text.font = '12px arial, STHeiti, "Microsoft YaHei", 宋体'
   var ponit = {}
   var textPonit = {}
   for(var i =0; i < mathAttr.length; i++){
     var radian = (Math.PI*2/5)*i
     ponit = pointInCircle(x,y,rArr[mathAttr[i].rank],radian)
     textPonit = pointInCircle(x - 20,y + 5 ,rArr[rArr.length - 1] + 25,radian)
     if ( i == 0 ) {
       polygon.moveTo(ponit.x, ponit.y)
     } else {
       polygon.lineTo(ponit.x, ponit.y)
     }
     // 绘制文字
     if(radian > Math.PI && radian < 3*Math.PI/2){
           text.fillText(mathAttr[i].name,textPonit.x - 20, textPonit.y)
     } else if (radian < Math.PI/2){
          text.fillText(mathAttr[i].name,textPonit.x + 5, textPonit.y )
       } else {
      text.fillText(mathAttr[i].name,textPonit.x , textPonit.y)
    }
   }
   polygon.closePath()
   polygon.fill()
   polygon.stroke()
 }

/** 在圆上画点 **/
function drawPointInCircle(circle,x,y,r,radian,color){
  if (color) {
    circle.strokeStyle = color
  } else {
    circle.strokeStyle = '#000000'
  }
  circle.lineWidth=2;
  circle.beginPath();
  circle.arc(x,y,r,radian,radian+0.002,false);
  circle.stroke();
}

/** 根据圆点（x,y)求出圆上点的坐标 **/
function pointInCircle(x,y,r,radian) {
  var point = {x:0,y:0}
  point.x = x + r * Math.cos(radian)
  point.y = y + r * Math.sin(radian)
  return point
}
