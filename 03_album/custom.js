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
	
	
	
	
	
	
	
	
	
	
	
	
	//앨범 슬라이드
	$("#right").click(function(){
		
		var now = $(".slide_box li").first();
		$(".slide_box")	.stop().animate({"right":"1920px"},200,function(){
			
			$(this).children(".img").append(now).css("right",0);
		})	
	});
	
	$("#left").click(function(){
		var last = $(".slide_box li").last();
		$(".slide_box").stop().animate({"right":"-1920px"},200,function(){
			$(this).children(".img").prepend(last).css("right",0);
		})	
	});
	
	
	$("#make_out").click(function(){
		$(".de>div").css("display","none");
		$(".make_out").css("display","block");
	});
	$("#kinda").click(function(){
		$(".de>div").css("display","none");
		$(".kinda").css("display","block");
	});
	$("#LANY").click(function(){
		$(".de>div").css("display","none");
		$(".LANY").css("display","block");
	});
	$("#nights").click(function(){
		$(".de>div").css("display","none");
		$(".nights").css("display","block");
	});
	$("#LANY").click(function(){
		$(".de>div").css("display","none");
		$(".LANY").css("display","block");
	});
	$("#okay").click(function(){
		$(".de>div").css("display","none");
		$(".okay").css("display","block");
	});
	$("#mean").click(function(){
		$(".de>div").css("display","none");
		$(".mean").css("display","block");
	});
	$("#mama").click(function(){
		$(".de>div").css("display","none");
		$(".mama").css("display","block");
	});
	
	
	
	
	
	
	
	
});

	
		