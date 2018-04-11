$(function(){
	//滚动时顶边栏变色
	$(window).resize(function(){
		if(screen.availWidth<768){
			$(".top-nav").css({
				"backgroundColor":'rgba(0,0,0,.85)',				
			});
		}		
	})
	$(window).scroll(function(){
		if(screen.availWidth>768){			
			if(window.pageYOffset>100){
				$(".top-nav").css({
					"padding-top":"0px",
					"padding-bottom":"0px",
					"backgroundColor":'rgba(0,0,0,.85)',				
				});
			}else{
				$(".top-nav").css({
					"padding-top":"20px",
					"padding-bottom":"20px",
					"backgroundColor":'rgba(0,0,0,0)',				
				});	
			}
		}
	})

	//容器元素背景满屏宽
	fullWidth(".tank-margin",".tank");
	$(window).resize(function(){
		fullWidth(".tank-margin",".tank");
	});

	//导航栏下拉交互效果
	var navLi = $('.nav-li');
	for(var i=0;i<navLi.length;i++){
		$(navLi[i]).mouseover(function(){
			$(this).children('ul').show();			
		}).mouseout(function(){
			$(this).children('ul').hide();
		})
	}

})



// container子无素背景宽为屏宽100%,
function fullWidth(value1,value2){
		var paddingValue = parseInt($(value1).css("margin-left"))+15+"px";
		$(value2).css({
			"margin-left" : ("-"+paddingValue),
			"margin-right": ("-"+paddingValue),
			"padding-left": paddingValue,
			"padding-right": paddingValue,
		}); 		
	}