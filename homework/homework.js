
 /*
  setInterval(test,1000); 
  var array = new Array(); 
  var index = 0; 
  var array = new Array("image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg"); 
  function test() { 
   var myimg=document.getElementById("imgs"); 
   if(index==array.length-1) 
   { index=0; }else{ index++; } 
   myimg.src=array[index]; 
  } 
*/    


var circle1 = document.querySelector('#circle1');
 		
		var left = document.querySelector('#left');
		
	   circle1.addEventListener('click',function(){
					
			left.style.backgroundImage="url(img/1.jpg)";
			circle1.style.background ="#fff";
				
 	});

var circle1 = document.querySelector('#circle2');
 		
		var left = document.querySelector('#left');
		
	   circle2.addEventListener('click',function(){
					
			left.style.backgroundImage="url(img/13.jpg)";
			circle2.style.background ="#fff";
				
 	});

var circle1 = document.querySelector('#circle3');
 		
		var left = document.querySelector('#left');
		
	   circle3.addEventListener('click',function(){
					
			left.style.backgroundImage="url(img/15.jpg)";
			circle3.style.background ="#fff";
				
 	});
