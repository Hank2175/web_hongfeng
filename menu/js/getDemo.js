function DIV_Clear(ID) {
    const beRemoved = document.querySelector('.big_Pic');
    while(beRemoved.firstChild)
        beRemoved.removeChild(beRemoved.lastChild);
}

var content = "";
var width = "";

var slider = "";
var sliderList = "";
var sliderTrack = "";
var slides = "";
var arrows = "";
var prev = "";
var next = "";
var lastTrf = "";

function getPic(path){
    $.ajax({
            type:"POST", 
            url:"../php/getColor.php", 
            data: path, 
            cache:false,
            success:function(data){
                //回傳資料
                //alert(data);
                document.querySelector('.big_Pic').innerHTML+=data;
                const box = document.getElementById('color_Card');
                box.style.position = "absolute";
                box.style.display = "block";
                box.style.top = (window.pageYOffset + (window.innerHeight/80))+"px";
                //box.style.top = "10vh" + window.pageYOffset + "px";
                $('body').css({'overflow':'hidden'});
                document.getElementById('pic_name').innerHTML = "實景圖";
                content = document.querySelector('.picture_container');
                width = document.querySelector('.slide').offsetWidth;
                slider = document.querySelector('.big_Pic');
                sliderList = slider.querySelector('.slider-list');
                sliderTrack = slider.querySelector('.slider-track');
                slides = document.querySelectorAll('.slide');
                arrows = document.querySelector('.slider-arrows');
                prev = arrows.children[0];
                next = arrows.children[1];
                lastTrf = --slides.length * width;

                sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
                
                sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
                slider.addEventListener('touchstart', swipeStart);
                slider.addEventListener('mousedown', swipeStart);
            }
        });
}


var slideIndex = 0;


let posInit = 0,
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
posThreshold = width * 0.35,
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
    sliderTrack.style.transform = `translate3d(-${slideIndex * width}px, 0px, 0px)`;
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
},
swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {
        swipeStartTime = Date.now();
        
        transition = true;
        
        nextTrf = (slideIndex + 1) * -width;
        prevTrf = (slideIndex - 1) * -width;
        
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
    
      // запрет ухода вправо на последнем слайде
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
            if(slideIndex === 0){
                document.getElementById('pic_name').innerHTML = "實景圖";
            }
            else{
                document.getElementById('pic_name').innerHTML = "VDS場景圖";
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

window.addEventListener("resize", displayWindowSize);
//slide resize fix
var sectionHeight = window.innerHeight;
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = window.innerWidth;
    var h = window.innerHeight;
    width = document.querySelector('.slide').offsetWidth;
    
    //sectionHeight = h;
    document.querySelector('.slider-track').style.transform = `translate3d(-${slideIndex * width}px, 0px, 0px)`;
    const box = document.getElementById('color_Card');
    box.style.top = (window.pageYOffset + (window.innerHeight/80))+"px";
}