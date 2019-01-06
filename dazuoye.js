
window.onload=function(){

	var cover =document.getElementsByClassName('dadakuang')[0];
	window.onscroll=function(){

		var st =document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){//滑动满180时，固定
			cover.style.position='fixed'
		}else{//不用固定定位了

			cover.style.position ='static'
		}


	}


      var gonggao=document.getElementsByClassName("gonggao");
        var gonggao1=document.getElementById("gonggao1");
        var gonggao2=document.getElementById("gonggao2");
        gonggao2.innerHTML=gonggao1.innerHTML;
        function roll() {
             if(gonggao2.offsetHeight-gonggao[0].scrollTop<= 0) {
                 gonggao[0].scrollTop-=gonggao.offsetHeight;
                 gonggao[0].scrollTop=0;
              }else {
                gonggao[0].scrollTop++;
             }
        }
        var StopRoll=setInterval(roll, 50);
        gonggao[0].onmouseover=function() {
            clearInterval(StopRoll);
        }
        gonggao[0].onmouseout=function () {
            StopRoll=setInterval(roll, 50);
        }










        var box = document.getElementById('box');
        var oNavlist = document.getElementById('nav').children;
        var slider = document.getElementById('slider');
        var left = document.getElementById('left');
        var right = document.getElementById('right');
        var index = 1;
        var timer;
        var isMoving = false;
        box.onmouseover = function(){
            animate(left,{opacity:50})
            animate(right,{opacity:50})
            clearInterval(timer)
        }
        box.onmouseout = function(){
            animate(left,{opacity:0})
            animate(right,{opacity:0})
            timer = setInterval(next, 3000);
        }
        right.onclick = next;
        left.onclick = prev;
        for( var i=0; i<oNavlist.length; i++ ){
            oNavlist[i].index = i;
            oNavlist[i].onclick = function(){
                index = this.index+1;
                navmove();
                animate(slider,{left:-800*index});
            }
        }
        function next(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index++;
            navmove();
            animate(slider,{left:-800*index},function(){
                if(index==7){
                    slider.style.left = '-800px';
                    index = 1;
                }
                isMoving = false;
            });
        }
        function prev(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index--;
            navmove();
            animate(slider,{left:-800*index},function(){
                if(index==0){
                    slider.style.left = '-6400px';
                    index = 7;
                }
                isMoving = false;
            });
        }
        function navmove(){
            for( var i=0; i<oNavlist.length; i++ ){
                oNavlist[i].className = "";
            }
            if(index >7 ){
                oNavlist[0].className = "active";
            }else if(index<=0){
                oNavlist[4].className = "active";
            }else {
                oNavlist[index-1].className = "active";
            }
        }
        timer = setInterval(next, 2000);

        var ce1=document.getElementsByClassName('ce1');
        ce1[0].onmouseover=function(){
            animate(ce1[0],{right:-30});
            
        }
        ce1[0].onmouseout=function(){
            animate(ce1[0],{right:-105});
            
        }
        ce1[1].onmouseover=function(){
            animate(ce1[1],{right:-30});
        }
        ce1[1].onmouseout=function(){
            animate(ce1[1],{right:-105});
        }
        var x=0
        ce1[2].onmouseover=function(){
            if(x==1){
                return;
            }
            animate(ce1[2],{right:-30});
            this.removeChild(this.lastElementChild)
            var img=document.createElement('img')
            img.src='img/erwei.png'
            img.style.marginTop='-8px'
            img.style.marginLeft='12px'
            this.append(img)
            x=1
        }
        ce1[2].onmouseout=function(){
            animate(ce1[2],{right:-105});
            this.removeChild(this.lastElementChild)
            var img=document.createElement('img')
            img.src='img/serwei.png'
            img.id='serwei'
            img.style='margin-left: 10px;margin-top: 40px;'
            this.append(img)
        }
        ce1[3].onmouseover=function(){
            animate(ce1[3],{right:-30});    
        }
        ce1[3].onmouseout=function(){
            animate(ce1[3],{right:-105});
            
        }






	

}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}











		