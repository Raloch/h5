function doMove(obj, attr, dir, target, endFn){  //元素移动定时器
	dir = parseFloat(getStyle( obj, attr )) < target ? dir : -dir;
	clearInterval( obj.timer );
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle( obj, attr )) + dir;
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
	}, 20);
}
function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];}

function toLeft(){		//图片向左移动
	oPie.style.backgroundColor = '#ff695c';
	oPie.style.color = '#fff';
	oBar.style.backgroundColor = '#fff';
	oBar.style.color = '#98a0ad';
	aLi[0].style.backgroundColor = '#ff695c';
	aLi[1].style.backgroundColor = '#ededed';
	doMove(oPichange,'left',30,0);
}
function toRight(){   //图片向右移动
	oPie.style.backgroundColor = '#fff';
	oPie.style.color = '#98a0ad';
	oBar.style.backgroundColor = '#ff695c';
	oBar.style.color = '#fff';
	aLi[0].style.backgroundColor = '#ededed';
	aLi[1].style.backgroundColor = '#ff695c';
	 var oW = parseInt(document.documentElement.clientWidth);
	if(oW>750){
		oW = 750;
	}
	doMove(oPichange,'left',30,-oW*0.872);
}


function timeConverse(sec){     //秒转化成日期
	var date = new Date(sec*1000),
	month = date.getMonth() + 1,
	day = date.getDate();
	return month+'月'+day+'月';
}

function RMBConverse(rmb){     //给money添加点号和逗号分隔符
	if(rmb.toString().length<3){
		return rmb.toString();
	}else{
		var a = rmb.toString().split('').reverse();
		a.splice(2,0,'.');
		if(rmb.toString().length<9&&rmb.toString().length>5){
			a.splice(6,0,',');
		}else if(rmb.toString().length<12&&rmb.toString().length>8){
			a.splice(6,0,',');
			a.splice(10,0,',');
		}
		a.reverse();
		var output = a.join('');
		return output;
	}
}

function percent(per){         //百分比判断正负并+%
	if(per>0){
		oImpro.className = '';
	}else{
		oImpro.className = 'rotate';
		oAvgPercent.style.color = 'green';
	}
	return per + '%';
}

function save(money){          //比其它人多省/花多少
	if(money>=0){
		return '多省' + '<br/>' + money.toString();
	}else{
		return '多花' + '<br/>' + money*(-1).toString();
	}
}

function getJArray(pos,arr){   //获取json属性名及其属性
	var index = 0;
	for(i in arr){
		if(index == pos){
			return i + '<br/>' + RMBConverse(arr[i]);
		}
		index += 1;
	}
}

