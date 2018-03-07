$(function(){
	//banner
	var oDiv = $('.nav_right');
	var oUl = $('.bannar_list');
	var oLi = $('.bannar_list li');
	var oSpan = $('.bannar_nav span');
	var timer = null;
	var iNow = 0;
	var oneWidth = oLi.eq(0).width();
	
	oDiv.hover(function(){
				clearInterval(timer);
			},autoPlay);
		
	oSpan.click(function(){
		var me = $(this);
		var index = me.index();
		iNow = index;
		oSpan.removeClass('active');
		me.addClass('active');
		oUl.css({
			"left":-oneWidth * iNow
		})
		
	})
	autoPlay();
	function autoPlay(){
		timer = setInterval(function(){
		iNow++;
		if(iNow>oSpan.length-1){
			iNow = 0;
		}
		oSpan.eq(iNow).trigger('click');
	},2000);
	}
	
	var oTopa = $('.top_nav a');
	oTopa.hover(function(){
		var me = $(this);
		var index = me.index();
		
		oTopa.removeClass('active');
		me.addClass('active');
	})
	
	var aLi = $('.bannar_group li');
	aLi.hover(function(){
		var me = $(this);
		
		aLi.removeClass('teLi');
		me.addClass('teLi');
	},function(){
		aLi.removeClass('teLi');
	})
	
	//list_show
	var aDiv = $('.list_show');
	var aUl = $('.list_show ul');
	var bLi = $('.nav_left li');
	
	bLi.hover(function(){
		var me = $(this);
		var index = me.index();
		aUl.eq(index).show().siblings().hide();	
	})
	aDiv.mouseleave(function(){
		aUl.hide();
	})
	
	
})
