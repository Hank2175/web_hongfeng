AOS.init();

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 150) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 150) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

document.getElementById("close_demo").addEventListener("click",
function(){
    const box = document.getElementById('color_Card');
    box.style.display = "none";
    box.style.top = "8vh";
    $(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
    DIV_Clear("big_Pic");
}
);

document.getElementById("next").addEventListener("click",
function(){
    var current = document.querySelector('.slider-track').style.transform;
    var splits = parseInt((current.split(/(\d+)/))[3]);
    if(splits <= (width * 4)){
		splits += width;
		slideIndex+=1;
		if(splits > (width * 4)){
		    splits = 0;
		    slideIndex = 0;
		}
		//content.style.transform = `translateX(-${splits}px)`;
		document.querySelector('.slider-track').style.transition = 'transform 0.5s';
		document.querySelector('.slider-track').style.transform = `translate3d(-${splits}px, 0px, 0px)`;
    	if(splits===0){
    	    document.getElementById('pic_name').innerHTML = "實景圖";
    	}
    	else{
    	    document.getElementById('pic_name').innerHTML = "VDS場景圖";
    	}
    }
}
);

document.getElementById("prev").addEventListener("click",
function(){
    var current = document.querySelector('.slider-track').style.transform;
    var splits = parseInt((current.split(/(\d+)/))[3]);
    if(splits >= 0){
		splits -= width;
		slideIndex -=1;
		if(splits < 0){
		    splits = (width * 4);
		    slideIndex = 4;
		}
		//content.style.transform = `translateX(-${splits}px)`;
		document.querySelector('.slider-track').style.transition = 'transform 0.5s';
		document.querySelector('.slider-track').style.transform = `translate3d(-${splits}px, 0px, 0px)`;
		if(splits===0){
	    document.getElementById('pic_name').innerHTML = "實景圖";
    	}
    	else{
    	    document.getElementById('pic_name').innerHTML = "VDS場景圖";
    	}
	}
}
);