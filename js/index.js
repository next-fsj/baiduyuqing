$(function(){
	$("#fullPage").fullpage({
		navigation:true,
		navigationTooltips:['登陆百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
		// onLeave:function(index,next,dir){
		// 		if(next===1){
  //                   $('#denglu').removeClass('xianshi');
		// 			$('#denglu').addClass('yincang');
		// 		}else if(index===1){
		// 			 $('#denglu').removeClass('yincang');
		// 			 $('#denglu').addClass('xianshi');
		// 		}
	 //   }			
	  afterLoad:function(name,index){
	  	if(index===1){
	  		  $('#denglu').removeClass('xianshi');
   			  $('#denglu').addClass('yincang');
	  	}else{
	  		 $('#denglu').removeClass('yincang');
		      $('#denglu').addClass('xianshi');
	  	}
	  }
	})
})
