AOS.init();

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function passForm() {
    var passName = document.getElementById("pass_name").value;
    var passTel = document.getElementById("pass_tel").value;
    var passPhone = document.getElementById("pass_phone").value;
    var passEmail = document.getElementById("pass_mail").value;
    var passMsg = document.getElementById("pass_msg").value;
    var check = true;
    if(passName === ""){
        $('.vcode_hint1').html(" × 請填寫名字").css("color","red");
        check = false;
    }
    var checkWord = /^0\d{8,9}$/;
    if(passTel === ""){
        $('.vcode_hint2').html(" × 請填寫聯絡電話").css("color","red");
        check = false;
    }
    if(!checkWord.test(passTel)){
        $('.vcode_hint2').html(" × 電話格式(0XXXXXXXXX 或 0XXXXXXXX)").css("color","red");
        check = false;
    }
    var checkWord = /^09\d{8}$/;
    if(!checkWord.test(passPhone) && passPhone !== ""){
        $('.vcode_hint5').html(" × 手機號碼格式(09XXXXXXXX)").css("color","red");
        check = false;
    }
    if(passEmail === ""){
        $('.vcode_hint3').html(" × 請填寫E-MAIL").css("color","red");
        check = false;
    }
    if(passMsg === ""){
        $('.vcode_hint4').html(" × 請填寫留言").css("color","red");
        check = false;
    }
    if(check){
        $.ajax({
            type:"POST", 
            url:"assets/php/sendmail.php", 
            data:"passName="+passName+"&passTel="+passTel+"&passPhone="+passPhone+"&passEmail="+passEmail+"&passMsg="+passMsg+"&action=sendForm", 
            cache:false,
            success:function(data){
                //回傳資料
                var someText = data;
                if (someText.indexOf('OK') !== -1) {
                    Swal.fire({
                        title: '已收到您的表單',
                        icon: "success",
                        showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                        },
                        html: "<h4>我們會儘快聯絡您</h4>"
                    });
                }else{
                    alert(data);
                }
            }
        });
    }
    return check;
}

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
});

var validateCode = false;

document.getElementById("contactus").addEventListener("click",
function(){
    Swal.fire({
        title: '聯繫鴻蘴',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: '送出表單',
        cancelButtonText: '取消',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        preConfirm: function(){
            var test = false;
            if(validateCode){
                if(passForm()){
                    document.getElementById("pass_name").value = "";
                    document.getElementById("pass_tel").value = "";
                    document.getElementById("pass_phone").value = "";
                    document.getElementById("pass_mail").value = "";
                    document.getElementById("pass_msg").value = "";
                    document.getElementById("inputCode").value = "";
                    test = true;
                }
            }
            else{
                $('.reg_vcode').css("border","2px solid red");
                document.getElementById("inputCode").value = "";
            }
            if(!test){
                Swal.showValidationMessage(
                  `資訊遺漏`
                );
            }
        },
        html: '<form method="POST" id="reg_form_checksum">\
    				<ul class="contact_form form">\
    					<li>\
    						<div class="form__insert"><span class="vcode_hint1"></span><br><input type="text" name="pass_name" id="pass_name" class="noborder" placeholder="客戶名稱"></div>\
    					</li>\
    					<li>\
    						<div class="form__insert"><span class="vcode_hint2"></span><br><input type="text" name="pass_tel" id="pass_tel" class="noborder" maxlength="10" required="required" pattern="0\d{8,9}" placeholder="聯絡電話"></div>\
    					</li>\
    					<li>\
    						<div class="form__insert"><span class="vcode_hint5"></span><br><input type="text" name="pass_phone" id="pass_phone" class="noborder" maxlength="10" placeholder="手機電話"></div>\
    					</li>\
    					<li>\
    						<div class="form__insert"><span class="vcode_hint3"></span><br><input type="text" name="pass_mail" id="pass_mail" class="noborder" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="電子信箱"></div>\
    					</li>\
    					<li>\
    						<div class="form__insert"><span class="vcode_hint4"></span><br><textarea name="pass_msg" id="pass_msg" cols="20" rows="8" class="noborder" placeholder="咨詢内容" style="height: 120px"></textarea><br>\
    						</div>\
    					</li>\
    					<li>\
                            <p>驗證碼 ( 點擊圖片更換)<br></p>\
                            <div id="checkCode" class="code"  onclick="refresh()" ></div>\
                            <p><input type="text" id="inputCode" name="vcode" value="" placeholder="輸入左方圖形驗證碼" class="form-control form-control-user reg_vcode noborder" id="reg_vcode"\
                            style="width:40%;"><span class="vcode_hint"></span> </p>\
					    </li>\
                    </ul>\
                </form>'
    });
    createCode(4);
    refresh();
})

function refresh(){
    verifiable.renderArr.length=0;
    verifiable.draw();
}

function createCode(length) {
    var box = document.getElementById('checkCode');
    var codeInput = document.getElementById('inputCode');
    verifiable.init(box,codeInput);
}

var verifiable = new Verifiable();
function Verifiable(){
	this.renderArr=[];
	this.code='';//生成的驗證碼
}

Verifiable.prototype.init=function(el,codeInput){
	if(!el) return ;
	this.el=el;
	this.codeInput=codeInput;
	
	var canvas = document.createElement('canvas');
	canvas.style.cssText="background:#ffffff;";
	var buffer = document.getElementById("reg_form_checksum").offsetWidth;
	var W = canvas.width = (buffer / 3); 
	var H = canvas.height = 40;
	
	el.appendChild(canvas);//添加到指定的dom对象中
	this.ctx = canvas.getContext('2d');
	this.ctx.strokeStyle ='green';
	this.canvas=canvas;
	this.w=W;
	this.h=H;
	
	this.draw();
	
	codeInput.addEventListener('input',this.inputValid.bind(this,codeInput))
}

var try_input_count = 0;

//生成結果
Verifiable.prototype.result=function(result){
	var codeInput = this.codeInput;
	var stateImg = this.stateImg;
    if(result==0){//成功
		codeInput.value = "驗證碼正確，已鎖定";
		$('.reg_vcode').css("border","2px solid green");
		codeInput.style.color = "green";
		codeInput.readOnly = true;
		validateCode = true;
	}else {//失败
	    try_input_count += 1;
		codeInput.readOnly = false;
		codeInput.value = "";
		$('.reg_vcode').css("border","2px solid red");
		this.renderArr.length = 0;
		this.draw();
	}
}

//input checker
Verifiable.prototype.inputValid=function(input){
    var codeInput = this.codeInput;
    if(try_input_count >= 11){
        codeInput.value = "錯誤次數過多，已鎖定";
        $('.reg_vcode').css("border","2px solid red");
        codeInput.style.color = "red";
	    codeInput.readOnly = true;
	    return;
    }
	var val = input.value;
	if(val.length<4) return ;
	if(this.code==val){
		this.result(0);
	}else{
		this.result(1);
	}
}

//繪圖入口處
Verifiable.prototype.draw=function(){
	this.drawText();
	this.interfering();
	this.render();//渲染
}

//繪文字
Verifiable.prototype.drawText=function(){
	var that = this;
	var count = 4;//四個字
	var textW = 40;
	var code = this.code = this.randomWord(count);
	var codeArr = code.split("");
	var text, x ;
	codeArr.forEach(function(c,i){
		x = that.w/count*i+textW/2;
		//繪製文字
		text = new Text({
			x:x,
			y:textW-10,
			text:c,
			font:'28px DynaPuff',
			textAlign:'center',
			fill:true,
			fillStyle:'#d30b2c'
		});
		that.renderArr.push(text);
	})		
}

//根據指定長度生成隨機字母數字
Verifiable.prototype.randomWord=function(range){
    var str = "", pos, arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c',
      'd','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x',
      'y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R',
      'S','T','U','V','W','X','Y','Z'];
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

//繪製干擾線
Verifiable.prototype.interfering=function(){
	var count = this.lineCount=20, line, ctx = this.ctx;
	var startX, startY, endX, endY, color;
		
	for(var i=0;i<count;i++){
		//隨機開始座標，結束座標、顏色
		var buffer = document.getElementById("reg_form_checksum").offsetWidth;
		startX = _.getRandom(0,buffer/3);
		startY = _.getRandom(0,40);
		endX = _.getRandom(0,buffer/3);
		endY = _.getRandom(0,40);
		color = _.getRandomColor();
		//定義一條直線
		line = new Line(ctx,{
			x:0,
			y:0,
			startX:startX,
			startY:startY,
			endX:endX,
			endY:endY,
			strokeStyle:color
		})
		
		this.renderArr.push(line);
	}
}

Verifiable.prototype.render=function(){
	var context=this.ctx;
	this.clearCanvas();	
	_.each(this.renderArr,function(item){
		item && item.render(context);
	});
}
 
Verifiable.prototype.clearCanvas=function() {
	this.ctx.clearRect(0,0,parseInt(this.w),parseInt(this.h));
}

function Text(o){
	this.x = 0,
	this.y = 0,
	this.text = '',
	this.font = 'DynaPuff';
	this.textAlign = null;
	this.init(o);
}

Text.prototype.init=function(o){
	for(var key in o){
		this[key]=o[key];
	}
}
Text.prototype.render=function(context){
	this.ctx=context;
	innerRender(this);
		
	function innerRender(obj){
		var ctx=obj.ctx;
		ctx.save()
		ctx.beginPath();
		ctx.translate(obj.x,obj.y);
		
		if(obj.font){
			ctx.font=obj.font;
		}
		if(obj.textAlign){
			ctx.textAlign=obj.textAlign;
		}
		if(obj.fill){//是否填充
			obj.fillStyle?(ctx.fillStyle=obj.fillStyle):null;
			ctx.fillText(obj.text,0,0);
		}
	  	ctx.restore();
	}
  	return this;
}


//直綫構造
function Line(ctx,o){
	this.x=0,
	this.y=0,
	this.startX=0,
	this.startY=0, 
	this.endX=0,
	this.endY=0;
	this.thin=false;
	this.ctx=ctx;
	this.init(o);
}
Line.prototype.init=function(o){
	for(var key in o){
		this[key]=o[key];
	}
}
Line.prototype.render=function(){
	innerRender(this);
	
	function innerRender(obj){
		var ctx=obj.ctx;
		ctx.save()
		ctx.beginPath();
		ctx.translate(obj.x,obj.y);
		if(obj.thin){
			ctx.translate(0.5,0.5);
		}
		if(obj.lineWidth){//綫寬度
			ctx.lineWidth=obj.lineWidth;
		}
		if(obj.strokeStyle){
			ctx.strokeStyle=obj.strokeStyle;
		}
		//劃綫
	  	ctx.moveTo(obj.startX, obj.startY);
	  	ctx.lineTo(obj.endX, obj.endY);
	  	ctx.stroke();
	  	ctx.restore();
	}
  	
  	return this;
}
 
var _= util = {
	getStyle:function (obj, prop) {
		var prevComputedStyle = document.defaultView ? document.defaultView.getComputedStyle( obj, null ) : obj.currentStyle;
		return prevComputedStyle[prop];
	},
	getRandom:function(min,max){
		return parseInt(Math.random()*(max-min)+min);
	},
	getRandomColor:function(){
		return '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
	},
	getOffset:function(e){
		return {
				x:e.offsetX,
				y:e.offsetY
			};
	},
	each:function(arr,fn){
		var len = arr.length;
		for(var i=0;i<len;i++){
			fn(arr[i],i);
		}
	},
	getDecimals:function(value){
		return (value!=Math.floor(value))?(value.toString()).split('.')[1].length:0;
	}
	
}

var class2type={};	
_.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(name) {
	class2type[ "[object " + name + "]" ] = name;
});

function getType( obj ) {
	return obj == null ?
		String( obj ) :
		class2type[ Object.prototype.toString.call(obj) ] || "undefined";
}
