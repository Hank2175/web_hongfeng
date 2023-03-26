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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

document.getElementById("home_read_more").addEventListener("click",
function(){
    //document.getElementById("home").style.display = "none";
    Swal.fire({
        title: '德國 <a style="color:#d30b2c">EGGER</a> <br>超耐磨木地板',
        confirmButtonText: '關閉',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        html: "<h4>美好的生活空間以及生活場域</h4><h5 style='text-align: right;'>with <a style='color:#d30b2c'>EGGER</a> &emsp;&emsp;&emsp;&emsp;</h5><hr>\
                讓人們在家中感到舒適溫暖<br>一直是 <a style='color:#d30b2c'>EGGER</a> 所追求的。<br><hr><a style='color:#d30b2c'>EGGER</a> 地板<br>有許多創新的設計以及不同的樣式<br>且安裝工序簡單方便又快速。<br><br><br>\
                <a href='https://www.egger.com/shop/en_TW/about-us' target='_blank' id='read_more_egger' class='button'>了解 EGGER</a>&emsp;&emsp;&emsp;\
                <a href='https://reurl.cc/LM0xka' target='_blank' id='read_more_egger' class='button'>來自德國</a>"

    });
}
);

setInterval(function(){
    slideIndex++;
    sliderTrack.style.transition = 'transform 1.5s';
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
    if(slideIndex == 4){
        slideIndex = 0;
        sliderTrack.style.transform = `translate3d(-${0}px, 0px, 0px)`;
    }
    else{
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    }
}, 10000);


let slider = document.querySelector('.slider'),
    sliderList = slider.querySelector('.slider-list'),
    sliderTrack = slider.querySelector('.slider-track'),
    slides = slider.querySelectorAll('.slide'),
    arrows = slider.querySelector('.slider-arrows'),
    prev = arrows.children[0],
    next = arrows.children[1],
    slideWidth = slides[0].offsetWidth,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    swipeStartTime,
    swipeEndTime,
    getEvent = function() {
        return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
        if (transition) {
            sliderTrack.style.transition = 'transform 1s';
        }
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === --slides.length);
    },
    swipeStart = function() {
        let evt = getEvent();

        if (allowSwipe) {
            swipeStartTime = Date.now();
      
            transition = true;

            nextTrf = (slideIndex + 1) * -slideWidth;
            prevTrf = (slideIndex - 1) * -slideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;
            
            sliderTrack.style.transition = '';
            
            document.addEventListener('touchmove', swipeAction);
            document.addEventListener('mousemove', swipeAction);
            document.addEventListener('touchend', swipeEnd);
            document.addEventListener('mouseup', swipeEnd);
            
            sliderList.classList.remove('grab');
            sliderList.classList.add('grabbing');
        }
    },
    swipeAction = function() {
        let evt = getEvent(),
            style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        if (!isSwipe && !isScroll) {
            let posY = Math.abs(posY2);
            if (posY > 7 || posX2 === 0) {
                isScroll = true;
                allowSwipe = false;
            } else if (posY < 7) {
                isSwipe = true;
            }
        }

        if (isSwipe) {
            if (slideIndex === 0) {
                if (posInit < posX1) {
                setTransform(transform, 0);
                return;
                } else {
                    allowSwipe = true;
                }
            }
    
            if (slideIndex === --slides.length) {
                if (posInit > posX1) {
                    setTransform(transform, lastTrf);
                    return;
                } else {
                    allowSwipe = true;
                }
            }
    
            if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
                reachEdge();
                return;
            }
            
            sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }

    },
    swipeEnd = function() {
        posFinal = posInit - posX1;

        isScroll = false;
        isSwipe = false;

        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);

        sliderList.classList.add('grab');
        sliderList.classList.remove('grabbing');

        if (allowSwipe) {
            swipeEndTime = Date.now();
            if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
                if (posInit < posX1) {
                    slideIndex--;
                } else if (posInit > posX1) {
                    slideIndex++;
                }
            }
            
            if (posInit !== posX1) {
                allowSwipe = false;
                slide();
            } else {
                allowSwipe = true;
            }
    
        } else {
            allowSwipe = true;
        }

    },
    setTransform = function(transform, comapreTransform) {
        if (transform >= comapreTransform) {
            if (transform > comapreTransform) {
                sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
            }
        }
        allowSwipe = false;
    },
    reachEdge = function() {
        transition = false;
        swipeEnd();
        allowSwipe = true;
    };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

document.getElementById("next").addEventListener("click",
function(){
    slideIndex++;
    if(slideIndex === 4){
        slideIndex = 0;
    }
    slide();
});

document.getElementById("prev").addEventListener("click",
function(){
    slideIndex--;
    if(slideIndex === -1){
        slideIndex = 3;
    }
    slide();
});

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

//slide resize fix
var sectionHeight = window.innerHeight;
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = window.innerWidth;
    var h = window.innerHeight;
    slideWidth = w;
    sectionHeight = h;
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
}

window.addEventListener("resize", displayWindowSize);

//nav bar change color
document.addEventListener('scroll', function(e) {
    var r = document.querySelector(':root');
    document.getElementById('header').style.transition = '0.5s'; //.nav__link
    if(window.pageYOffset < window.innerHeight){
        document.getElementById('header').style.backgroundColor = "transparent";
        r.style.setProperty('--nav-text-color', '#D3D3D3');
    }
    else{
        document.getElementById('header').style.backgroundColor = "var(--body-color)";
        r.style.setProperty('--nav-text-color', '#707070');
    }
});