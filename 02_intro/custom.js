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
	
	//history .under 이용해서  바꾸기 
	$(".under>li").click(function(){
		$(".under>li").removeClass("on");
		$(this).addClass("on");
		
		var i = $(this).index();
		var sum = i*-1200;
		
		$(".slide_box").animate({"left":sum},300);
		
	})
});