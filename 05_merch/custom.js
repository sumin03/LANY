// JavaScript Document
$(document).ready(function(e) {
       $(window).scroll(function(){
		var a = $(this).scrollTop();
		
		if(a>100){
			$(".top>img").css("display","block");
		}else{
			$(".top>img").css("display","none");	
		}
	});
	//버튼 눌렀을경우 맨 위로 돌아오는 
	$(".top>img").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});
	
	
	$("section").on("mousewheel DOMMouseScroll",function(){
		var scroll = $(window).scrollTop();
		console.log(scroll);
		
		var secTop = $(this).scrollTop()+800;
		
		if(scroll > secTop){
			$(".row-2 li>.box").addClass("on");
			$(".row-3, .row4, .row-5").css("display","block");	
		}
	});
	
	$("section").on("mousewheel DOMMouseScroll",function(){
		var scroll = $(window).scrollTop();
		console.log(scroll);
		
		var secTop = $(this).scrollTop()+800;
		
		if(scroll > secTop){
			
			$("#t>.row-3").css("display","block");	
		}
	});
	
	$(".all").click(function(){
		$(".menu button").css("color","#928a97");
		$("#content > .wrap > div").css("display" , "none");
		$("#all").css("display", "block");	
	});
	
	$(".new").click(function(){
		$(".menu button").css("color","#928a97");
		$(".new").css("color","#f85f73");
		$("#content > .wrap > div").css("display" , "none");
		$("#new").css("display", "block");	
	});
	
	$(".t").click(function(){
		$(".menu button").css("color","#928a97");
		$(".t").css("color","#f85f73");
		$("#content > .wrap > div").css("display" , "none");
		$("#t").css("display", "block");	
	});
	
	$(".h").click(function(){
		$(".menu button").css("color","#928a97");
		$(".h").css("color","#f85f73");
		$("#content > .wrap > div").css("display" , "none");
		$("#h").css("display", "block");	
	});
	$(".e").click(function(){
		$(".menu button").css("color","#928a97");
		$(".e").css("color","#f85f73");
		$("#content > .wrap > div").css("display" , "none");
		$("#e").css("display", "block");	
	});
	
});