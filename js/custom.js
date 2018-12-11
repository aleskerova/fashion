var aa = document.getElementById('menuOpen');
document.getElementById('open').addEventListener("click", function(){aa.style.transform = "translateX(0%)";aa.style.transition = ".6s linear"});
document.getElementById('close').addEventListener("click", function(){aa.style.transform = "translateX(-500px)";aa.style.transition = ".6s linear"});

var ab = document.getElementById('second-slides');
document.getElementById('btn-next').addEventListener("click", function(){ab.style.marginLeft = "-100%";});
document.getElementById('btn-prev').addEventListener("click", function(){ab.style.marginLeft = "0%";});

var ac = document.getElementById('btn-next');
document.getElementById('btn-next').addEventListener("click", function(){ac.style.opacity = ".3";});
document.getElementById('btn-prev').addEventListener("click", function(){ac.style.opacity = "1";});

var ad = document.getElementById('btn-prev');
document.getElementById('btn-next').addEventListener("click", function(){ad.style.opacity = "1";});
document.getElementById('btn-prev').addEventListener("click", function(){ad.style.opacity = ".3";});

var ae = document.getElementById('sudmenu1');
document.getElementById('plus1').addEventListener("click", function(){ae.style.transform = "translateX(-40px)";ae.style.position = "static";ae.style.transition = ".4s linear"});
document.getElementById('minus1').addEventListener("click", function(){ae.style.transform = "translateX(-500px)";ae.style.position = "absolute";ae.style.transition = ".4s linear"});

var af = document.getElementById('sudmenu2');
document.getElementById('plus2').addEventListener("click", function(){af.style.transform = "translateX(-40px)";af.style.position = "static";af.style.transition = ".4s linear"});
document.getElementById('minus2').addEventListener("click", function(){af.style.transform = "translateX(-500px)";af.style.position = "absolute";af.style.transition = ".4s linear"});

var ag = document.getElementById('sudmenu3');
document.getElementById('plus3').addEventListener("click", function(){ag.style.transform = "translateX(-40px)";ag.style.position = "static";ag.style.transition = ".4s linear"});
document.getElementById('minus3').addEventListener("click", function(){ag.style.transform = "translateX(-500px)";ag.style.position = "absolute";ag.style.transition = ".4s linear"});

var ah = document.getElementById('sudmenu4');
document.getElementById('plus4').addEventListener("click", function(){ah.style.transform = "translateX(-40px)";ah.style.position = "static";ah.style.transition = ".4s linear"});
document.getElementById('minus4').addEventListener("click", function(){ah.style.transform = "translateX(-500px)";ah.style.position = "absolute";ah.style.transition = ".4s linear"});

var ai = document.getElementById('sudmenu5');
document.getElementById('plus5').addEventListener("click", function(){ai.style.transform = "translateX(-40px)";ai.style.position = "static";ai.style.transition = ".4s linear"});
document.getElementById('minus5').addEventListener("click", function(){ai.style.transform = "translateX(-500px)";ai.style.position = "absolute";ai.style.transition = ".4s linear"});




function getCookie(name){var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined}
function setCookie(name,value,props){props=props||{};var exp=props.expires;if(typeof exp=="number"&&exp){var d=new Date;d.setTime(d.getTime()+exp*1E3);exp=props.expires=d}if(exp&&exp.toUTCString)props.expires=exp.toUTCString();value=encodeURIComponent(value);var updatedCookie=name+"="+value;for(var propName in props){updatedCookie+="; "+propName;var propValue=props[propName];if(propValue!==true)updatedCookie+="="+propValue}document.cookie=updatedCookie}
function deleteCookie(name){setCookie(name,null,{expires:-1})};
 
$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes").html(num_div);
  $("#i2").click(function(){
  var s = $("#likes").text();
  $("#likes").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes").html());
  });
});
 
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes").html(num_div1);
  $("#i1").click(function(){
  var s = $("#likes").text();
  $("#likes").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes").html());
  });
});





$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes2").html(num_div);
  $("#i4").click(function(){
  var s = $("#likes2").text();
  $("#likes2").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes2").html());
  });
});
   
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes2").html(num_div1);
  $("#i3").click(function(){
  var s = $("#likes2").text();
  $("#likes2").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes2").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes3").html(num_div);
  $("#i6").click(function(){
  var s = $("#likes3").text();
  $("#likes3").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes3").html());
  });
});
     
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes3").html(num_div1);
  $("#i5").click(function(){
  var s = $("#likes3").text();
  $("#likes3").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes3").html());
  });
});





$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes4").html(num_div);
  $("#i8").click(function(){
  var s = $("#likes4").text();
  $("#likes4").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes4").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes4").html(num_div1);
  $("#i7").click(function(){
  var s = $("#likes4").text();
  $("#likes4").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes4").html());
  });
});




$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes5").html(num_div);
  $("#i10").click(function(){
  var s = $("#likes5").text();
  $("#likes5").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes5").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes5").html(num_div1);
  $("#i9").click(function(){
  var s = $("#likes5").text();
  $("#likes5").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes5").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes6").html(num_div);
  $("#i12").click(function(){
  var s = $("#likes6").text();
  $("#likes6").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes6").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes6").html(num_div1);
  $("#i11").click(function(){
  var s = $("#likes6").text();
  $("#likes6").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes6").html());
  });
});




$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes7").html(num_div);
  $("#i14").click(function(){
  var s = $("#likes7").text();
  $("#likes7").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes7").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes7").html(num_div1);
  $("#i13").click(function(){
  var s = $("#likes7").text();
  $("#likes7").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes7").html());
  });
});




$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes8").html(num_div);
  $("#i16").click(function(){
  var s = $("#likes8").text();
  $("#likes8").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes8").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes8").html(num_div1);
  $("#i15").click(function(){
  var s = $("#likes8").text();
  $("#likes8").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes8").html());
  });
});




$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes9").html(num_div);
  $("#i18").click(function(){
  var s = $("#likes9").text();
  $("#likes9").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes9").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes9").html(num_div1);
  $("#i17").click(function(){
  var s = $("#likes9").text();
  $("#likes9").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes9").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes10").html(num_div);
  $("#i20").click(function(){
  var s = $("#likes10").text();
  $("#likes10").html(1+parseInt(s)+'&nbsp;likes');
  setCookie("num_div", $("#likes10").html());
  });
});
       
$(function(){
  num_div1=parseInt(getCookie("num_div"));
  if(num_div>0) $("#likes10").html(num_div1);
  $("#i19").click(function(){
  var s = $("#likes10").text();
  $("#likes10").html(parseInt(s)-1+'&nbsp;likes');
  setCookie("num_div", $("#likes10").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy1").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy2").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy3").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy4").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy5").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy6").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy7").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy8").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy9").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});




$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy10").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy11").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});



$(function(){
  num_div=parseInt(getCookie("num_div"));
  if(num_div>0) $("#purchase").html(num_div);
  $("#buy12").click(function(){
  var s = $("#purchase").text();
  $("#purchase").html(1+parseInt(s));
  setCookie("num_div", $("#purchase").html());
  });
});


//плавная навигация по сайту
$(document).ready(function(){
  $("p a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});

// $(document).ready(function(){
//   $("p a").click(function () {
//     elementClick = $(this).attr("href");
//     destination = $(elementClick).offset().top;
//     $("body,html").animate({scrollTop: 0 }, 800);
//   });
// });