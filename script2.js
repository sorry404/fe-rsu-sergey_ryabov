$(document).ready(function(){

	$("label").css({"background-color": "#35BAF6",
					"border": "2px solid #03A9F4",
					"border-bottom-left-radius": "6px",
					"border-bottom-right-radius": "6px",
					"color":"white",
					"text-align": "right",
					"font-size": "19px",
					"padding-right": "32px",
					"padding-left": "32px"
	});

	$("span").css({ "background-color": "#35BAF6",
					"color":"white",
					"width": "140px",
					"text-align": "center"
	});
	$("li").css({
			"height": "26px",
			"border" : '2px solid #03A9F4',
			"background-color": "#35BAF6",
			"width" : "140px",
			"position" : 'relative',
  			"list-style-type" :'none',
  			"text-align" : "center"
  	});

	$("a").css({"color":"white",
				"text-decoration":"none",
				"font-size": "19px"
	});
	$("#on").hide();
	$("#off").click(function(){
        $("span").hide();
        $(this).hide();
        $("#on").show();
    });	
    $("#on").click(function(){
        $("span").show();
        $(this).hide();
        $("#off").show();
    });
	$("#off").mouseover(function(){
		$(this).css({"box-shadow": "0 0 10px rgba(3,169,244,0.5)",
  					 "backgroundColor": "#03A9F4"
		});
	});
	$("#off").mouseout(function(){
  		$(this).css({"background-color": "#35BAF6",
  					"box-shadow": "0 0 0 rgba(3,169,244,0.5)"});
	});
	$("#on").mouseover(function(){
		$(this).css({"box-shadow": "0 0 10px rgba(3,169,244,0.5)",
  					 "backgroundColor": "#03A9F4"
		});
	});
	$("#on").mouseout(function(){
  		$(this).css({"background-color": "#35BAF6",
  					"box-shadow": "0 0 0 rgba(3,169,244,0.5)"});
	});	
	$("li").mouseover(function(){
		$(this).css({"box-shadow": "0 0 10px rgba(3,169,244,0.5)",
  					 "backgroundColor": "#03A9F4"
		});
	});
	$("li").mouseout(function(){
  		$(this).css({"background-color": "#35BAF6",
  					"box-shadow": "0 0 0 rgba(3,169,244,0.5)"});
	});
});
