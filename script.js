let s = skrollr.init()

$(window).scroll(function(evt){
 if($(window).scrollTop()>0) {
   $(".navbar").removeClass("navbar-top");
 }else{
   $(".navbar").addClass("navbar-top")
 }
  
})

let surfing_audio=new Audio("https://drive.google.com/uc?id=14ryuiTPKCNNR0ocY1FqIuX5XSiAsuzCm&export=download");

$(".music").click(function(){
  surfing_audio.play()
})

$(".pic1").click(function(){
  window.open("https://goo.gl/maps/1yJUazmyiwDSyxhx6");
})

$(".pic2").click(function(){
  window.open("https://g.page/gcoolsurf?share");
})

$(".pic3").click(function(){
  window.open("https://goo.gl/maps/E5E37Z79tzbLJUz38");
})


$(".mailto").click(function(){
  window.open("mailto:denniseasycard@gmail.com");
})