var color=generateRandomColors();
var square=document.querySelectorAll(".square");
var pickedcolor=pickColor();
   var btn=document.getElementById("new");//reset colors
   btn.addEventListener("click",function(){
 	  color=generateRandomColors();
	  pickedcolor=pickColor();
	  document.getElementById("check").textContent=pickedcolor;
   	for(var i=0;i<square.length;i++){
   		square[i].style.background=color[i];
   	}


  
   });
document.getElementById("check").textContent=pickedcolor;
for(var i=0;i<square.length;i++){
	square[i].style.background=color[i];
	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(pickedcolor===clickedcolor){
			alert("Correct Answer");
			for(var i=0;i<square.length;i++){
				square[i].style.background=pickedcolor;
			}
		}
		else{
			 this.style.background="black";
			}
	});
}
function pickColor(){
	var rand=Math.floor(Math.random()*square.length);
	return color[rand];
}
function generateRandomColors(){
	var randomcolor=[];
	for(var i=0;i<6;i++){
		var rcolor=generatecolor();
		randomcolor.push(rcolor);
	}
	return randomcolor;
}
function generatecolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+","+" "+g+","+" "+b+")";
}