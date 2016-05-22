
$(document).ready(function(){
    $("td").css({"border": "8px solid #9FDED0", "border-radius": "8px"});
    $("#header").css({"background-color": "#FFCB00",
								"font-size": "24px",
								"position": "relative",
								"padding": "10px",
								"font-family": "Arial, serif"});
    $("#body").css({"background-color": "#EDECDE",
							"color":"#647988",
							"position": "relative",
							"padding": "10px",
							"font-family": "Arial, serif"});
    
var newEl = '';
	$("span").after(newEl).css({
  		"display": "inline-block",
  		"position": "absolute",
  		"left": "50px",
  		"top": "0px",
  		"border": "10px solid transparent",
  		"border-top-color": "#FFCB00",
  		"width": "0px"
	});
});