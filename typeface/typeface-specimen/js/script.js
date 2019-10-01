$(document).ready(function() {

var ahover=0;
var bhover=0;
var chover=0;
var dhover=0;
var ehover=0;
var fhover=0;
var ghover=0;
var hhover=0;
var ihover=0;
var jhover=0;
var lhover=0;
var khover=0;
var mhover=0;
var nhover=0;
var ohover=0;
var phover=0;
var qhover=0;
var rhover=0;
var shover=0;
var thover=0;
var uhover=0;
var vhover=0;
var whover=0;
var xhover=0;
var yhover=0;
var zhover=0;
  


var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var x = e.pageX;
    var y = e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";  
})


  
  
//*-----A-----*//
  
$('#a').mouseover('click touchstart', function() {
  var ahover = 1;
  if(ahover<=1){
  var acircle = anime({
  targets: '.a-circle-bottom-left',
  scale: 1,
  translateY: -19,
  translateX: 3,
  easing: 'easeInOutSine',
  duration: 300,
})
  var acircle = anime({
  targets: '.a-trapezoid-bottom-left',
  scale: 1,
  translateX: 1,
  easing: 'easeInOutSine',
  duration: 300,
})
  var acircle = anime({
  targets: '.a-vertical-right',
  scale: 1,
  rotate: 23,
  height: 222,
  left: 37,
  easing: 'easeInOutSine',
  duration: 300,
})
  var acircle = anime({
  targets: '.a-horizontal',
  scale: 1,
  width: 106,
  rotate: 180,
  left: 31,
  duration: 1200,
})
  var acircle = anime({
  targets: '.a-vertical-left',
  rotate: -23,
  easing: 'easeInOutSine',
  duration: 300,
  top:34,
  height: 273,
})
  var acircle = anime({
  targets: '.a-trapezoid-bottom-right',
  translateX: 3,
  easing: 'easeInOutSine',
  duration: 300,
})
  var acircle = anime({
  targets: '.a-trapezoid-top',
  translateX: -4,
  easing: 'easeInOutSine',
  duration: 300,
})
}
})
  
  
$('#a').mouseover('click touchstart', function() {
  ahover += 1;
  console.log(ahover);
    if(ahover>3){
      var bLine = anime({
          targets: '.a-circle-2',
          scale: 1,
          top:207,
          left: -18,
          duration: 900,
      })
      var bLine = anime({
          targets: '.a-vertical-right',
          height: 170,
          rotate: 22,
          top: 40,
          left: 45,
          duration: 900,
      })
    }
})
  
$('#a').mouseenter('click touchstart', function() {
  ahover += 1;
    if(ahover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#a').mouseleave('click touchstart', function() {
  ahover += 1;
    if(ahover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
$('#a').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.a-circle-bottom-left',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.a-circle-2',
          scale: 0.2,
          delay: 50,
      })
})
  
$('#a').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.a-circle-bottom-left',
          scale: 1,
      })
     var bLine = anime({
          targets: '.a-circle-2',
          scale: 1,
          delay: 50,
          transformOrigin: "center",
      })
})

  
//----B----//
  
$('#b').mouseover('click touchstart', function() {
  var bhover = 1;
    if(bhover<=1){
      var bLine = anime({
        targets: '.b-rectangle',
        scale: 1,
        top: 44,
        duration: 600,
      })
      var bLine = anime({
        targets: '.b-vertical-left',
        height: 223,
        top: 73,
        duration: 600,
    })
  }
})
  
$('#b').mouseover('click touchstart', function() {
  bhover += 1;
    if(bhover>2){
      var bLine = anime({
          targets: '.b-circle-1',
          scale: 1,
          top:71,
          duration: 900,
      })
      var bLine = anime({
          targets: '.b-vertical-left',
          height: 176,
          rotate: 180,
          top: 120,
          duration: 900,
      })
    }
})
  
$('#b').mouseover('click touchstart', function() {
  bhover += 1;
    if(bhover>3){
      var bLine = anime({
          targets: '.b-circle-2',
          scale: 1,
          top:252,
          duration: 900,
      })
      var bLine = anime({
          targets: '.b-vertical-left',
          height: 128,
          rotate: 180,
          duration: 900,
      })
    }
})
  
  
$('#b').mouseenter('click touchstart', function() {
  bhover += 1;
    if(bhover>4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#b').mouseleave('click touchstart', function() {
  bhover += 1;
    if(bhover>4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#b').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.b-circle-1',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.b-circle-2',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.b-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#b').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.b-circle-1',
          scale: 1,
      })
     var bLine = anime({
          targets: '.b-circle-2',
          scale: 1,
      })
     var bLine = anime({
          targets: '.b-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})
  

  
//*-----C-----*//   
  
  
$('#c').mouseover('click touchstart', function() {
  var ahover = 1;
    if(ahover<=1){
      var bLine = anime({
        targets: '.c-circle-1',
        scale: 1,
        top: 44,
        duration: 900,
      })
      var bLine = anime({
        targets: '.c-vertical-left',
        height: 204,
        top: 93,
        duration: 300,
      })
}
})

$('#c').mouseover('click touchstart', function() {
  chover += 1;
    if(chover>2){
      var bLine = anime({
          targets: '.c-circle-2',
          scale: 1,
          top:92,
          duration: 900,
      })
      var bLine = anime({
          targets: '.c-vertical-left',
          height: 156,
          rotate: 180,
          top: 140,
          duration: 900,
      })
    }
})
  
$('#c').mouseover('click touchstart', function() {
  chover += 1;
    if(chover>4){
      var bLine = anime({
          targets: '.c-circle-3',
          scale: 1,
          top:140,
          duration: 900,
      })
      var bLine = anime({
          targets: '.c-vertical-left',
          height: 108,
          rotate: 180,
          top: 188,
          duration: 900,
      })
    }
})
  
$('#c').mouseenter('click touchstart', function() {
  chover += 1;
    if(chover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#c').mouseleave('click touchstart', function() {
  chover += 1;
    if(chover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})

  
$('#c').mousedown('click touchstart', function() {
  chover += 1;
    if(chover>=4){
     var bLine = anime({
          targets: '.c-circle-1',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.c-circle-2',
          scale: 0.2,
          delay: 50,
      })
     var bLine = anime({
          targets: '.c-circle-3',
          scale: 0.2,
          delay: 100,
      })
  }
})
  
$('#c').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.c-circle-1',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.c-circle-2',
          scale: 0.2,
          delay: 50,
      })
     var bLine = anime({
          targets: '.c-circle-3',
          scale: 0.2,
          delay: 100,
      })
})








// Letter D //
  
$('#d').mouseover('click touchstart', function() {
  var dhover = 1;
    if(dhover<=1){
      var bLine = anime({
      targets: '.d-circle-left',
      top:44,
      duration: 900,
      scale: 1,
    })
var bLine = anime({
      targets: '.d-vertical-left',
      top: 93,
      height: 204,
      duration: 600,
      scale: 1,
    })
  }
})
  
  
$('#d').mouseover('click touchstart', function() {
  dhover += 1;
    if(dhover>2){
      var bLine = anime({
          targets: '.d-rectangle',
          scale: 1,
          top:272,
          duration: 900,
      })
      var bLine = anime({
          targets: '.d-vertical-left',
          height: 175,
          rotate: 180,
          duration: 900,
      })
    }
})
  
$('#d').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.d-circle-left',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.d-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#d').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.d-circle-left',
          scale: 1,
      })
     var bLine = anime({
          targets: '.d-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})
  
  
$('#d').mouseenter('click touchstart', function() {
  dhover += 1;
    if(dhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#d').mouseleave('click touchstart', function() {
  dhover += 1;
    if(dhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
// Letter E//
  
$('#e').mouseover('click touchstart', function() {
var ehover = 1;
if(ehover<=1){
var bLine = anime({
  targets: '.e-circle-1',
  top: 253,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.e-vertical-left',
  height: 204,
  top: 44,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.e-horizontal-center',
  rotate: 180,
  duration: 1500,
  scale: 1,
})
}
})

$('#e').mouseover('click touchstart', function() {
  ehover += 1;
    if(ehover>=3){
      var bLine = anime({
          targets: '.e-circle-2',
          top:206,
          scale: 1,
          duration: 900,
      })
       var bLine = anime({
          targets: '.e-vertical-left',
          height: 157,
          duration: 900,
      })
    }
})
  
$('#e').mouseenter('click touchstart', function() {
  ehover += 1;
    if(ehover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#e').mouseleave('click touchstart', function() {
  ehover += 1;
    if(ehover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  

$('#e').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.e-circle-1',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.e-circle-2',
          scale: 0.2,
          delay: 50,
      })
})
  
$('#e').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.e-circle-1',
          scale: 1,
      })
     var bLine = anime({
          targets: '.e-circle-2',
          delay: 50,
          scale: 1,
      })
})

//*-----F-----*//
  
$('#f').mouseover('click touchstart', function() {
var fhover = 1;
   if(fhover<=1){
    fhover += 1;
      var bLine = anime({
        targets: '.f-rectangle',
        top: 272,
        duration: 900,
        scale: 1,
      })
      var bLine = anime({
        targets: '.f-vertical-left',
        height: 222,
        duration: 1500,
      })
      }
})
  
$('#f').mouseover( function() {
  fhover +=1;
    if(fhover>=2){
      var bLine = anime({
          targets: '.f-circle',
          top:44,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.f-vertical-left',
          top: 93,
          height: 175,
          duration: 900,
      })
       var bLine = anime({
          targets: '.f-horizontal-center',
          rotate: 180,
          duration: 1500,
          scale: 1,
      })
    }
})
  
$('#f').mouseenter('click touchstart', function() {
  fhover += 1;
    if(fhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#f').mouseleave('click touchstart', function() {
  fhover += 1;
    if(fhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#f').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.f-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.f-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#f').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.f-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.f-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})

  
  
//------G------//
  
$('#g').mouseover('click touchstart', function() {
  
var ghover = 1;
  ghover += 1;
      var bLine = anime({
        targets: '.g-circle-bottom-right',
        top: 252,
        duration: 900,
        scale: 1,
        loop:false,
      })
var bLine = anime({
  targets: '.g-vertical-right-bottom',
  top: 174,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.g-horizontal-center',
  rotate: 180,
  duration: 1500,
})
})

$('#g').mouseover('click touchstart', function() {
  ghover += 1;
    if(ghover>3){
      var bLine = anime({
          targets: '.g-rectangle',
          top:272,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.g-vertical-right-bottom',
          height: 93,
          duration: 900,
      })
       var bLine = anime({
          targets: '.g-circle-bottom-right',
          top: 225,
          duration: 900,
          scale: 1,
      })
    }
})
  
$('#g').mouseover('click touchstart', function() {
  ghover += 1;
    if(ghover>5){
      var bLine = anime({
          targets: '.g-circle',
          top:44,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.g-vertical-left',
          height: 203,
        top: 93,
          duration: 900,
      })
    }
})
  
$('#g').mouseenter('click touchstart', function() {
  ghover += 1;
    if(ghover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#g').mouseleave('click touchstart', function() {
  ghover += 1;
    if(ghover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#g').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.g-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.g-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#g').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.g-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.g-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})
  
  
//------H------//
  
$('#h').mouseover('click touchstart', function() {
var hhover = 1;
if(hhover<=1){
var bLine = anime({
  targets: '.h-rectangle',
  top: 45,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.h-vertical-left',
  height: 223,
  top: 73,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.h-vertical-right',
  duration: 1500,
})
}
})
  
  
  
$('#h').mouseover('click touchstart', function() {
  hhover += 1;
  console.log(hhover);
    if(hhover>2){
      var bLine = anime({
          targets: '.h-trapezoid-2',
          top:276,
          duration: 900,
      })
      var bLine = anime({
          targets: '.h-vertical-right',
          height: 228,
          duration: 900,
      })
    }
})

$('#h').mouseover('click touchstart', function() {
  hhover += 1;
  console.log(hhover);
    if(hhover>5){
      var bLine = anime({
          targets: '.h-trapezoid-3',
          top:252,
          duration: 900,
      })
      var bLine = anime({
          targets: '.h-vertical-right',
          height: 203,
          duration: 900,
      })
    }
})
  
  
$('#h').mouseenter('click touchstart', function() {
  hhover += 1;
    if(hhover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#h').mouseleave('click touchstart', function() {
  hhover += 1;
    if(hhover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
$('#h').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.h-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
     var bLine = anime({
          targets: '.h-trapezoid-2',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
     var bLine = anime({
          targets: '.h-trapezoid-3',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#h').mouseup('click touchstart', function() {
     
     var bLine = anime({
          targets: '.h-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      }) 
     var bLine = anime({
          targets: '.h-trapezoid-2',
          rotate: 0,
          delay: 50,
          duration: 1500,
      })
     var bLine = anime({
          targets: '.h-trapezoid-3',
          rotate: 0,
          delay: 50,
          duration: 1500,
      })
})
  
  
//------I------//
  
$('#i').mouseover('click touchstart', function() {
var ihover = 1;
var bLine = anime({
  targets: '.i-circle',
  top: 252,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.i-vertical-left',
  height: 203,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.i-trapezoid-top-left',
  rotate: 360,
  duration: 1500,
  scale: 1,
})
})
  
$('#i').mouseover('click touchstart', function() {
  ihover += 1;
  console.log(ihover);
    if(ihover>=3){
      var bLine = anime({
          targets: '.i-circle-1',
          top:205,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.i-vertical-left',
          height: 156,
          duration: 900,
      })
    }
})

$('#i').mouseover('click touchstart', function() {
  ihover += 1;
  console.log(ihover);
    if(ihover>=5){
      var bLine = anime({
          targets: '.i-circle-2',
          top:158,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.i-vertical-left',
          height: 111,
          duration: 900,
      })
    }
})
  
$('#i').mouseover('click touchstart', function() {
  ihover += 1;
  console.log(ihover);
    if(ihover>=7){
      var bLine = anime({
          targets: '.i-circle-3',
          top:111,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.i-vertical-left',
          height: 63,
          duration: 900,
      })
    }
})
  
$('#i').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.i-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.i-circle-1',
          scale: 0.2,
          delay: 50,
      })
     var bLine = anime({
          targets: '.i-circle-2',
          scale: 0.2,
          delay: 100,
      })
      var bLine = anime({
          targets: '.i-circle-3',
          scale: 0.2,
          delay: 150,
      })
})
$('#i').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.i-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.i-circle-1',
          scale: 1,
          delay: 50,
      })
      var bLine = anime({
          targets: '.i-circle-2',
          scale: 1,
          delay: 100,
      })
     var bLine = anime({
          targets: '.i-circle-3',
          scale: 1,
          delay: 150,
      })
})
  

$('#i').mouseenter('click touchstart', function() {
  ihover += 1;
  console.log(ihover);
    if(ihover>=8){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#i').mouseleave('click touchstart', function() {
  ihover += 1;
  console.log(ihover);
    if(ihover>=8){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
// if(ihover>1){  
//   anime({
//      targets: '.i-circle',
//      scale: 0.2,
//      duration: 5000,
//      loop:true,
//      easing: 'easeInOutQuad',
//     }) 
//   }
  
//------J------//
  
$('#j').mouseover('click touchstart', function() {
var jhover = 1;
var bLine = anime({
  targets: '.j-rectangle',
  top: 249,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.j-vertical-left',
  height: 43,
  top: 277,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.j-horizontal-bottom',
  rotate: 180,
  duration: 900,
  scale: 1,
})
})
  
$('#j').mouseover('click touchstart', function() {
  jhover += 1;
  console.log(jhover);
    if(jhover>3){
      var bLine = anime({
          targets: '.j-circle',
          top:252,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.j-vertical-right',
          height: 203,
          duration: 900,
      })
    }
})
  
$('#j').mouseenter('click touchstart', function() {
  jhover += 1;
  console.log(jhover);
    if(jhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#j').mouseleave('click touchstart', function() {
  jhover += 1;
  console.log(jhover);
    if(jhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#j').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.j-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.j-rectangle',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
})
  
$('#j').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.j-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.j-rectangle',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})


  
//------K------//
  
$('#k').mouseover('click touchstart', function() {
var khover=1;
var bLine = anime({
  targets: '.k-circle',
  top: 44,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.k-vertical-left',
  height: 203,
  top: 93,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.k-angle-bottom',
  rotate: 336,
  duration: 1500,
  scale: 1,
})
})

$('#k').mouseover('click touchstart', function() {
  khover += 1;
  console.log(khover);
    if(khover>=3){
      var bLine = anime({
          targets: '.k-circle-2',
          top:92,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.k-vertical-left',
          height: 155,
          top: 140,
          duration: 900,
      })
    }
})
  
$('#k').mouseenter('click touchstart', function() {
  khover += 1;
  console.log(khover);
    if(khover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#k').mouseleave('click touchstart', function() {
  khover += 1;
  console.log(khover);
    if(khover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#k').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.k-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.k-circle-2',
          scale: 0.2,
      })
     
})
  
$('#k').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.k-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.k-circle-2',
          scale: 1,
      })
})


//------L------//
  
$('#l').mouseover('click touchstart', function() {
var hover = 1;
var bLine = anime({
  targets: '.l-circle',
  top: 252,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.l-vertical-bottom-right',
  height: 30,
  top: 218,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.l-trapezoid-bottom-right',
  rotate: 360,
  duration: 1500,
})
})

$('#l').mouseover('click touchstart', function() {
  lhover += 1;
  console.log(lhover);
    if(lhover>3){
      var bLine = anime({
          targets: '.l-rectangle-left',
          top:271,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.l-vertical-left',
          height: 223,
          duration: 900,
      })
    }
})
$('#l').mouseover('click touchstart', function() {
  lhover += 1;
  console.log(lhover);
    if(lhover>5){
      var bLine = anime({
          targets: '.l-circle-left',
          top:223,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.l-vertical-left',
          height: 174,
          duration: 900,
      })
    }
})
  
  
$('#l').mouseenter('click touchstart', function() {
  lhover += 1;
  console.log(lhover);
    if(lhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#l').mouseleave('click touchstart', function() {
  lhover += 1;
  console.log(lhover);
    if(lhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#l').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.l-circle',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.l-circle-left',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.l-rectangle-left',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
     
})
  
$('#l').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.l-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.l-circle-left',
          scale: 1,
      })
      var bLine = anime({
          targets: '.l-rectangle-left',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
})
  
  
//------M------//
  
$('#m').mouseover('click touchstart', function() {
var hover = 1;
var bLine = anime({
  targets: '.m-rectangle-left',
  top: 44,
  duration: 900,
  scale: 1,
})
var bLine = anime({
  targets: '.m-rectangle-right',
  top: 272,
  duration: 1500,
  scale: 1,
  rotate: 180,
})
var bLine = anime({
  targets: '.m-vertical-left',
  height: 224,
  top:73,
  duration: 1500,
})
var bLine = anime({
  targets: '.m-angle-left',
  height: 248,
  rotate: -26,
  top:60,
  left: 33,
  duration: 1500,
})
var bLine = anime({
  targets: '.m-vertical-right',
  height: 222,
  top:46,
  duration: 900,
})
})
  
  
$('#m').mouseover('click touchstart', function() {
  mhover += 1;
  console.log(mhover);
    if(mhover>2){
      var bLine = anime({
          targets: '.m-circle-right',
          top:224,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.m-vertical-right',
          height: 174,
          duration: 900,
      })
    }
})
  
$('#m').mouseover('click touchstart', function() {
  mhover += 1;
  console.log(mhover);
    if(mhover>4){
      var bLine = anime({
          targets: '.m-circle-right',
          top:224,
          scale: 1,
          duration: 900,
      })
    }
})

  
$('#m').mouseenter('click touchstart', function() {
  mhover += 1;
    if(mhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#m').mouseleave('click touchstart', function() {
  mhover += 1;
    if(mhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#m').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.m-circle-right',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.m-rectangle-left',
          rotate: 180,
          delay: 50,
          duration: 1500,
      })
      var bLine = anime({
          targets: '.m-rectangle-right',
          rotate: -180,
          delay: 50,
          duration: 1500,
      })
     
})
  
$('#m').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.m-circle-right',
          scale: 1,
      })
      var bLine = anime({
          targets: '.m-rectangle-left',
          rotate: 360,
          delay: 50,
          duration: 1500,
      })
      var bLine = anime({
          targets: '.m-rectangle-right',
          rotate: -360,
          delay: 50,
          duration: 1500,
      })
})

  
  
//------N------//
  
$('#n').mouseover('click touchstart', function() {
var nhover = 1;
if(nhover<=1){
  var bLine = anime({
  targets: '.n-circle',
  top: 44,
  duration: 900,
  scale: 1,
})

var bLine = anime({
  targets: '.n-vertical-right',
  height: 200,
  rotate: 180,
  top:94,
  duration: 1500,
})

var bLine = anime({
  targets: '.n-trapezoid-top-right',
  top:21,
  duration: 1500,
})
}
})
  

$('#n').mouseover('click touchstart', function() {
  nhover += 1;
  console.log(nhover);
    if(nhover>=2){
      var bLine = anime({
          targets: '.n-rectangle-left',
          top:271,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.n-vertical-left',
          height: 222,
          duration: 900,
      })
    }
})

  
  
  
$('#n').mouseenter('click touchstart', function() {
  nhover += 1;
    if(nhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#n').mouseleave('click touchstart', function() {
  nhover += 1;
    if(nhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
$('#n').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.n-circle',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.n-rectangle-left',
          rotate: 180,
          duration: 1500,
      })    
})
  
$('#m').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.n-circle',
          scale: 1,
      })
      var bLine = anime({
          targets: '.n-rectangle-left',
          rotate: 360,
          duration: 1500,
      })
})
  
  
  
//------O------//
  
$('#o').mouseover('click touchstart', function() {
var nhover = 1;
if(nhover<=2){
var bLine = anime({
  targets: '.o-circle',
  scale: 1,
  top: 252,
  duration: 900,
})
var bLine = anime({
  targets: '.o-vertical-right',
  height: 204,
  duration: 900,
})
}
})
  

$('#o').mouseover('click touchstart', function() {
  ohover += 1;
  console.log(ohover);
    if(ohover>2){
      var bLine = anime({
          targets: '.o-rectangle',
          top:271,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.o-vertical-left',
          height: 222,
          duration: 900,
      })
      var bLine = anime({
          targets: '.o-trapezoid-top-left',
          rotate: 360,
          duration: 1500,
      })
    }
})

$('#o').mouseover('click touchstart', function() {
  ohover += 1;
  console.log(ohover);
    if(ohover>4){
      var bLine = anime({
          targets: '.o-circle-1',
          top:204,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.o-vertical-right',
          rotate: 180,
          height: 156,
          duration: 1500,
      })
      
    }
})
  
$('#o').mouseover('click touchstart', function() {
  ohover += 1;
  console.log(ohover);
    if(ohover>6){
      var bLine = anime({
          targets: '.o-circle-2',
          top:156,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.o-vertical-right',
          rotate: 180,
          height: 107,
          duration: 1500,
      })
      
    }
})
 
$('#o').mouseenter('click touchstart', function() {
  ohover += 1;
    if(ohover>=6){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#o').mouseleave('click touchstart', function() {
  mhover += 1;
    if(ohover>=6){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#o').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.o-circle',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.o-circle-1',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.o-circle-2',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.o-rectangle',
          rotate: 180,
          duration: 1500,
      })    
})
  
$('#o').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.o-circle',
          scale: 1,
      })
     var bLine = anime({
          targets: '.o-circle-1',
          scale: 1,
      })
     var bLine = anime({
          targets: '.o-circle-2',
          scale: 1,
      })
      var bLine = anime({
          targets: '.o-rectangle',
          rotate: 360,
          duration: 1500,
      })
})
  
//------P------//
  
$('#p').mouseover('click touchstart', function() {
var phover = 1;
if(phover<=2){
var bLine = anime({
  targets: '.p-rectangle',
  scale: 1,
  top: 45,
  duration: 900,
})
var bLine = anime({
  targets: '.p-vertical-left',
  height: 224,
  top: 73,
  duration: 900,
})
var bLine = anime({
  targets: '.p-horizontal-center',
  rotate: 180,
  duration: 1500,
})
}
})
  

$('#p').mouseover('click touchstart', function() {
  phover += 1;
  console.log(phover);
    if(phover>3){
      var bLine = anime({
          targets: '.p-circle',
          top:251,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.p-vertical-left',
          height: 174,
          rotate:180,
          duration: 1500,
      })
    }
})
  
$('#p').mouseenter('click touchstart', function() {
  phover += 1;
    if(phover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#p').mouseleave('click touchstart', function() {
  phover += 1;
    if(phover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  

$('#p').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.p-circle',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.p-rectangle',
          rotate: 180,
          duration: 1500,
      })    
})
$('#p').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.p-circle',
          scale: 1,
      })
      var bLine = anime({
          targets: '.p-rectangle',
          rotate: 360,
          duration: 1500,
      })
})
  
//------Q------//
  
$('#q').mouseover('click touchstart', function() {
  var qhover = 1;
    if(qhover<=2){
      var bLine = anime({
        targets: '.q-trapezoid-bottom-2',
        scale: 1,
        rotate: -45,
        duration: 900,
      })
      var bLine = anime({
        targets: '.q-angle',
        top: 224,
        height: 63,
        duration: 900,
      })
      var bLine = anime({
        targets: '.q-vertical-right',
        rotate: 180,
        duration: 1500,
      })
    }
})
  
$('#q').mouseenter('click touchstart', function() {
  qhover += 1;
    if(qhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#q').mouseleave('click touchstart', function() {
  qhover += 1;
    if(qhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  

// $('#q').mouseover('click touchstart', function() {
//   qhover += 1;
//   console.log(qhover);
//     if(qhover>3){
//       var bLine = anime({
//           targets: '.q-trapezoid-bottom-3',
//           scale: 1,
//           rotate:-45,
//           duration: 900,
//       })
//       var bLine = anime({
//           targets: '.q-angle',
//           top: 238,  
//           height: 25,
//           duration: 1500,
//       })
//        var bLine = anime({
//           targets: '.q-angle-bottom-right',
//           top: 280,  
//           height: 40,
//           left: 147,
//           duration: 1500,
//       })
//       var bLine = anime({
//           targets: '.q-vertical-right',
//           height: 170,
//           duration: 900,
//       })
//     }
// })

  
  
  
//------R------//
  
$('#r').mouseover('click touchstart', function() {
var rhover = 1;
if(rhover<=2){
var bLine = anime({
  targets: '.r-rectangle-right-bottom',
  scale: 1,
  top: 272,
  rotate: 180,
  duration: 900,
})
var bLine = anime({
  targets: '.r-vertical-right-bottom',
  height: 103,
  duration: 900,
  rotate: -26,
})
var bLine = anime({
  targets: '.p-horizontal-center',
  rotate: 180,
  duration: 1500,
})
}
})
  

$('#r').mouseover('click touchstart', function() {
  rhover += 1;
  console.log(rhover);
    if(rhover>3){
      var bLine = anime({
          targets: '.r-circle-left-top',
          top:44,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.r-vertical-left',
          top: 92,
          height: 204,
          rotate:180,
          duration: 1500,
      })
    }
})
  
$('#r').mouseover('click touchstart', function() {
  rhover += 1;
  console.log(rhover);
    if(rhover>5){
      var bLine = anime({
          targets: '.r-circle-right-bottom',
          top:225,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.r-vertical-right-bottom',
          height: 55,
          duration: 1500,
      })
    }
})
  
$('#r').mouseenter('click touchstart', function() {
  rhover += 1;
    if(rhover>=6){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#r').mouseleave('click touchstart', function() {
  rhover += 1;
    if(rhover>=6){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
$('#r').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.r-circle-left-top',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.r-circle-right-bottom',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.r-rectangle-right-bottom',
          rotate: 180,
          duration: 1500,
      })    
})
  
$('#r').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.r-circle-left-top',
          scale: 1,
      })
     var bLine = anime({
          targets: '.r-circle-right-bottom',
          scale: 1,
      })
      var bLine = anime({
          targets: '.r-rectangle-right-bottom',
          rotate: 360,
          duration: 1500,
      })
})
  

//------S------//
  
$('#s').mouseover('click touchstart', function() {
  var shover = 1;
    if(shover<=2){
      var bLine = anime({
        targets: '.s-circle-right-bottom',
        scale: 1,
        top: 252,
        duration: 900,
      })
      var bLine = anime({
        targets: '.s-vertical-bottom-right',
        height: 88,
        duration: 900,
        rotate: 180,
      })
  }
})
  

$('#s').mouseover('click touchstart', function() {
  shover += 1;
  console.log(shover);
    if(shover>3){
      var bLine = anime({
          targets: '.s-circle-right-bottom-2',
          top:205,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.s-vertical-bottom-right',
          height: 41,
          rotate:180,
          duration: 1500,
      })
    }
})
  
$('#s').mouseenter('click touchstart', function() {
  shover += 1;
    if(shover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#s').mouseleave('click touchstart', function() {
  shover += 1;
    if(shover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#s').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.s-circle-right-bottom-2',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.s-circle-right-bottom',
          scale: 0.2,
      })   
})
  
$('#s').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.s-circle-right-bottom',
          scale: 1,
      })
     var bLine = anime({
          targets: '.s-circle-right-bottom-2',
          scale: 1,
      })
})
  
//------T------//
  
$('#t').mouseover('click touchstart', function() {
var thover = 1;
      var bLine = anime({
          targets: '.t-circle-1',
          top:252,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.t-vertical-left',
          height: 219,
          duration: 900,
      })
})
  
$('#t').mouseover('click touchstart', function() {
  thover += 1;
  console.log(thover);
    if(thover>=3){
      var bLine = anime({
          targets: '.t-circle-2',
          top:205,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.t-vertical-left',
          height: 171,
          duration: 900,
      })
    }
})

$('#t').mouseover('click touchstart', function() {
  ihover += 1;
  console.log(thover);
    if(thover>=5){
      var bLine = anime({
          targets: '.t-circle-4',
          top:158,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.t-vertical-left',
          height: 125,
          duration: 900,
      })
    }
})
  
$('#t').mouseover('click touchstart', function() {
  thover += 1;
  console.log(thover);
    if(thover>=9){
      var bLine = anime({
          targets: '.t-circle-3',
          top:111,
          scale: 1,
          duration: 900,
      })
      
      var bLine = anime({
          targets: '.t-vertical-left',
          height: 77,
          duration: 900,
      })
    }
})
  
  
$('#t').mouseenter('click touchstart', function() {
  thover += 1;
    if(thover>=9){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#t').mouseleave('click touchstart', function() {
  thover += 1;
    if(thover>=9){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
$('#t').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.t-circle-1',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.t-circle-2',
          scale: 0.2,
        delay: 50,
      })   
      var bLine = anime({
          targets: '.t-circle-3',
          scale: 0.2,
        delay: 150,
      }) 
      var bLine = anime({
          targets: '.t-circle-4',
          scale: 0.2,
        delay: 100,
      }) 
})
  
$('#s').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.t-circle-1',
          scale: 1,
      })
     var bLine = anime({
          targets: '.t-circle-2',
          scale: 1,
       delay: 50,
      })
     var bLine = anime({
          targets: '.t-circle-3',
          scale: 1,
       delay: 150,
      })
     var bLine = anime({
          targets: '.t-circle-4',
          scale: 1,
       delay: 100,
      })
})

  
  
//------U------//
  
$('#u').mouseover('click touchstart', function() {
  var uhover = 1;
    if(uhover<=2){
      var bLine = anime({
        targets: '.u-rectangle-left',
        scale: 1,
        top: 44,
        duration: 900,
      })
      var bLine = anime({
        targets: '.u-vertical-left',
        top: 73,
        height: 189,
        duration: 900,
        rotate: 180,
      })
  }
})
  

$('#u').mouseover('click touchstart', function() {
  uhover += 1;
  console.log(uhover);
    if(uhover>2){
      var bLine = anime({
          targets: '.u-rectangle-right',
          top:44,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.u-vertical-right',
          height: 189,
          top: 73,
          rotate:180,
          duration: 1500,
      })
    }
})
  
$('#u').mouseover('click touchstart', function() {
  uhover += 1;
  console.log(uhover);
    if(uhover>5){
      var bLine = anime({
          targets: '.u-circle-left',
          top:72,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.u-vertical-left',
          height: 142,
          top: 120,
          rotate:180,
          duration: 1500,
      })
    }
})

  
$('#u').mouseenter('click touchstart', function() {
  uhover += 1;
    if(uhover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#u').mouseleave('click touchstart', function() {
  uhover += 1;
    if(uhover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#u').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.u-circle-left',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.u-rectangle-right',
          rotate: 180,
          duration: 1500,
      })   
      var bLine = anime({
          targets: '.u-rectangle-left',
          rotate: 180,
          duration: 1500,
      })  
})
  
$('#u').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.u-circle-left',
          scale: 1,
      })
      var bLine = anime({
          targets: '.u-rectangle-right',
          rotate: 360,
          duration: 1500,
      })
      var bLine = anime({
          targets: '.u-rectangle-left',
          rotate: 360,
          duration: 1500,
      })
})
  
  
  
//------V------//
  
$('#v').mouseover('click touchstart', function() {
  var vhover = 1;
    if(vhover<=2){
      var bLine = anime({
        targets: '.v-rectangle',
        scale: 1,
        top: 272,
        duration: 900,
      })
      var bLine = anime({
        targets: '.v-angle-left',
        height: 241,
        duration: 900,
        left: 30,
      })
      var bLine = anime({
        targets: '.v-angle-right',
        height: 241,
        duration: 900,
        left: 147
      })
  }
})
  

$('#v').mouseover('click touchstart', function() {
  vhover += 1;
  console.log(vhover);
    if(vhover>2){
      var bLine = anime({
          targets: '.v-circle',
          top:44,
          left:-30,
          scale: 1,
          duration: 900,
      })
      var bLine = anime({
          targets: '.v-angle-left',
          height: 192,
          left: 37,
          top: 83,
          rotate:158,
          duration: 1500,
      })
      var bLine = anime({
          targets: '.v-trapezoid-top-left',
          left: -45,
          duration: 1500,
      })
    }
})
  
  
$('#v').mouseenter('click touchstart', function() {
  vhover += 1;
    if(vhover>=2){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#v').mouseleave('click touchstart', function() {
  vhover += 1;
    if(vhover>=2){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
$('#v').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.v-circle',
          scale: 0.2,
      })
      var bLine = anime({
          targets: '.v-rectangle',
          rotate: 180,
          duration: 1500,
      })   
})
  
$('#v').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.v-circle',
          scale: 1,
      })
      var bLine = anime({
          targets: '.v-rectangle',
          rotate: 360,
          duration: 1500,
      })
})
  
  
//------W------//
  
$('#w').mouseover('click touchstart', function() {
  var whover = 1;
    if(whover<=2){
      var bLine = anime({
        targets: '.w-rectangle-left',
        scale: 1,
        top: 44,
        duration: 900,
      })
      var bLine = anime({
        targets: '.w-angle-left',
        top: 67,
        height: 235,
        left: 25,
        duration: 900,
      })
  }
})
  

$('#w').mouseover('click touchstart', function() {
  whover += 1;
  console.log(whover);
    if(whover>2){
      var bLine = anime({
          targets: '.w-rectangle-center',
          scale: 1,
          top: 44,
          duration: 900,
      })
      var bLine = anime({
        targets: '.w-angle-left-2',
        top: 67,
        height: 235,
        left: 191,
        duration: 900,
      })
       var bLine = anime({
        targets: '.w-angle-right',
        top: 67,
        height: 235,
        left: 103,
        duration: 900,
      })
    }
})
  
$('#w').mouseover('click touchstart', function() {
  whover += 1;
  console.log(whover);
    if(whover>5){
      var bLine = anime({
          targets: '.w-rectangle-right',
          scale: 1,
          top: 44,
          duration: 900,
      })
      var bLine = anime({
        targets: '.w-angle-right-2',
        top: 67,
        height: 235,
        duration: 900,
      })
    }
})

  
$('#w').mouseenter('click touchstart', function() {
  whover += 1;
    if(whover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#w').mouseleave('click touchstart', function() {
  whover += 1;
    if(whover>=5){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  $('#w').mousedown('click touchstart', function() {
     
      var bLine = anime({
          targets: '.w-rectangle-left',
          rotate: 180,
          duration: 1500,
      })   
      var bLine = anime({
          targets: '.w-rectangle-center',
          rotate: 180,
          duration: 1500,
          delay:50,
      })  
      var bLine = anime({
          targets: '.w-rectangle-right',
          rotate: 180,
          duration: 1500,
                  delay:100,

      })
})
  
$('#w').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.w-rectangle-left',
          rotate: 360,
          duration: 1500,
          delay: 50,
      })
      var bLine = anime({
          targets: '.w-rectangle-center',
          rotate: 360,
          duration: 1500,
          delay: 50,
      })
      var bLine = anime({
          targets: '.w-rectangle-right',
          rotate: 360,
          duration: 1500,
          delay: 100,
      })
})
  
  

//------X------//
  
$('#x').mouseover('click touchstart', function() {
  var xhover = 1;
    if(xhover<=2){
      var bLine = anime({
        targets: '.x-rectangle-right-bottom',
        scale: 1,
        top: 272,
        duration: 900,
      })
      var bLine = anime({
        targets: '.x-angle-left-top',
        height: 270,
        rotate: -38,
        top: 21,
        left: 80,
        duration: 900,
      })
  }
})
  
  
  

//------Y------//
  
$('#y').mouseover('click touchstart', function() {
  var yhover = 1;
    if(yhover<=2){
      var bLine = anime({
        targets: '.y-circle-1',
        scale: 1,
        top: 253,
        duration: 900,
      })
      var bLine = anime({
        targets: '.y-vertical',
        height: 78,
        duration: 900,
      })
  }
})
  
$('#y').mouseover('click touchstart', function() {
  yhover += 1;
  console.log(yhover);
    if(yhover>2){
      var bLine = anime({
        targets: '.y-circle-2',
        scale: 1,
        top: 206,
        duration: 900,
      })
      var bLine = anime({
        targets: '.y-vertical',
        height: 32,
        duration: 900,
      })
    }
})
  
$('#y').mouseover('click touchstart', function() {
  yhover += 1;
  console.log(yhover);
    if(yhover>4){
      var bLine = anime({
        targets: '.y-circle-3',
        scale: 1,
        top: 159,
        duration: 900,
      })
      var bLine = anime({
        targets: '.y-vertical',
        height: 0,
        duration: 900,
      })
      var bLine = anime({
        targets: '.y-angle-left-top',
        rotate: -34,
        height: 134,
        top: 34,
        left: 40,
        duration: 900,
      })
       var bLine = anime({
        targets: '.y-angle-right-top',
        rotate: 34,
        height: 134,
        top: 34,
        left: 141,
        duration: 900,
      })
    }
})

$('#y').mouseenter('click touchstart', function() {
  yhover += 1;
    if(yhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#y').mouseleave('click touchstart', function() {
  yhover += 1;
    if(yhover>=4){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  
$('#y').mousedown('click touchstart', function() {
     var bLine = anime({
          targets: '.y-circle-1',
          scale: 0.2,
      })
     var bLine = anime({
          targets: '.y-circle-2',
          scale: 0.2,
          delay: 50,
      })
     var bLine = anime({
          targets: '.y-circle-3',
          scale: 0.2,
          delay: 100,
      })
        
})
  
$('#y').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.y-circle-1',
          scale: 1,
      })
     var bLine = anime({
          targets: '.y-circle-2',
          scale: 1,
          delay: 50,
      })
     var bLine = anime({
          targets: '.y-circle-3',
          scale: 1,
          delay: 100,
      })
})

  
  
//------Z------//
  
$('#z').mouseover('click touchstart', function() {
  var zhover = 1;
    if(zhover<=2){
      var bLine = anime({
        targets: '.z-rectangle-1',
        scale: 1,
        top: 44,
        duration: 900,
      })
      var bLine = anime({
        targets: '.z-angle',
        height: 280,
        top: 44,
        rotate: 38,
        duration: 900,
      })
  }
})
  
$('#z').mouseover('click touchstart', function() {
  zhover += 1;
  console.log(zhover);
    if(zhover>2){
      var bLine = anime({
        targets: '.z-rectangle-2',
        scale: 1,
        top: 272,
        duration: 900,
      })
      var bLine = anime({
        targets: '.z-angle',
        height: 257,
        rotate: 42,
        top:42,
        duration: 900,
      })
    }
})

  
$('#z').mouseenter('click touchstart', function() {
  zhover += 1;
    if(zhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 0.5,
          duration: 900,
      })
    }
})
$('#z').mouseleave('click touchstart', function() {
  zhover += 1;
    if(zhover>=3){
      var bLine = anime({
          targets: '#cursor',
          scale: 1,
          duration: 900,
      })
    }
})
  
  
  $('#z').mousedown('click touchstart', function() {
     
      var bLine = anime({
          targets: '.z-rectangle-1',
          rotate: 180,
          duration: 1500,
      })   
      var bLine = anime({
          targets: '.z-rectangle-2',
          rotate: 180,
          duration: 1500,
          delay:50,
      })  
})
  
$('#z').mouseup('click touchstart', function() {
     var bLine = anime({
          targets: '.z-rectangle-1',
          rotate: 360,
          duration: 1500,
          delay: 50,
      })
      var bLine = anime({
          targets: '.z-rectangle-2',
          rotate: 360,
          duration: 1500,
          delay: 50,
      })
})
  
  
//Closes document ready
})
  
