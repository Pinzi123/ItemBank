var itemsA = {
	"errNo":"0",
	"content": [
	    {
			"topic":"求`x^2+3x-4=0`中x的值：",
			"type":"radio",
			"options":["4","-4","4和-1","-4和1"],
			"correct":"3"
		},
		{
		    "topic":"设事件A,B相互独立，且已知`P(A)=0,P(A\cupB)=0.7`，则P(B) = ( )",
			"type":"radio",
			"options":["1/16","1/4","1/10","4/10"],
			"correct":"3"
		},	
		{
		    "topic":"求` sum _ { i = 0 } ^ { 10 }i^2`的值",
			"type":"radio",
			"options":["10","110","55","285"],
			"correct":"3"
		},
		{
		    "topic":"已知函数`f(x)=\ frac { 3-x} { 4x+1}`,求f(x)的值域",
			"type":"radio",
			"options":["`{y|y!=\ frac { 1 } { 4 }}`","`{y|y!=\ frac { 1 } { 2 }}`","`{y|y!=\ frac { 1 } { 8 }}`","`{y|y!=1}`"],
			"correct":"1"	
			
		}
	],
	"length":4
}

var answer = []
for(var i = 0; i < itemsA.length; i++){
	answer[i]=-1
}