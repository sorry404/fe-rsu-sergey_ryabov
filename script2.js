
	(function() {
		var label = document.getElementsByTagName('label'),
			style_label1=label[0].style,
			style_label2=label[1].style;


			style_label1.backgroundColor = '#35BAF6';
			style_label1.border = '2px solid #03A9F4';
			style_label1.borderBottomLeftRadius = '6px';
			style_label1.borderBottomRightRadius = '6px';
			style_label1.color = 'white';
			style_label1.textAlign = 'right';
			style_label1.fontSize = '19px';
			style_label1.paddingRight = '32px';
			style_label1.paddingLeft = '32px';

			style_label2.backgroundColor = '#35BAF6';
			style_label2.border = '2px solid #03A9F4';
			style_label2.borderBottomLeftRadius = '6px';
			style_label2.borderBottomRightRadius = '6px';
			style_label2.color = 'white';
			style_label2.textAlign = 'right';
			style_label2.fontSize = '19px';
			style_label2.paddingRight = '32px';
			style_label2.paddingLeft = '32px';

		var span = document.getElementsByTagName('span'),
			style = span[0].style;

			style.color = "white";
			style.width = "140px";

			style.display= "none";
  			style.displaylistStyleType="none";




		var a1 = document.getElementsByTagName('a'),
			style=a1[0].style;
			style.color ="white";
			style.textDecoration ="none";
			style.fontSize = "19px";

		var a2 = document.getElementsByTagName('a'),
			style=a2[1].style;
			style.color ="white";
			style.textDecoration ="none";
			style.fontSize = "19px";

		var a3 = document.getElementsByTagName('a'),
			style=a3[2].style;
			style.color ="white";
			style.textDecoration ="none";
			style.fontSize = "19px";

		var a4 = document.getElementsByTagName('a'),
			style=a4[3].style;
			style.color ="white";
			style.textDecoration ="none";
			style.fontSize = "19px";

		var a5 = document.getElementsByTagName('a'),
			style=a5[4].style;
			style.color ="white";
			style.textDecoration ="none";
			style.fontSize = "19px";




  		var li_1 = document.getElementsByTagName('li'),
			style=li_1[0].style;
			style.border = '2px solid #03A9F4';
			style.backgroundColor= "#35BAF6";
			style.width = "140px";
			style.height = "26px";
			style.position = 'relative';
  			style.listStyleType ='none';
  			style.textAlign = "center";

  		var li_2 = document.getElementsByTagName('li'),
			style=li_2[1].style;
			style.border = '2px solid #03A9F4';
			style.backgroundColor= "#35BAF6";
			style.width = "140px";
			style.height = "26px";
			style.position = 'relative';
  			style.listStyleType ='none';
  			style.textAlign = "center";

  		var li_3 = document.getElementsByTagName('li'),
			style=li_3[2].style;
			style.border = '2px solid #03A9F4';
			style.backgroundColor= "#35BAF6";
			style.width = "140px";
			style.height = "26px";
			style.position = 'relative';
  			style.listStyleType ='none';
  			style.textAlign = "center";

  		var li_4 = document.getElementsByTagName('li'),
			style=li_4[3].style;
			style.border = '2px solid #03A9F4';
			style.backgroundColor= "#35BAF6";
			style.width = "140px";
			style.height = "26px";
			style.position = 'relative';
  			style.listStyleType ='none';
  			style.textAlign = "center";

  		var li_5 = document.getElementsByTagName('li'),
			style=li_5[4].style;
			style.border = '2px solid #03A9F4';
			style.backgroundColor = "#35BAF6";
			style.width = "140px";
			style.height = "26px";
			style.position = 'relative';
  			style.listStyleType ='none';
  			style.textAlign = "center";

		var input = document.getElementById('p1'),
			style=input.style;

			style.display = "none";
  			style.displaylistStyleType = "none";

  		var mylabel = document.getElementById('off')
  			style=mylabel.style;

  			style.display= "none";
  			style.displaylistStyleType="none";

		document.getElementById("on").onclick = function(){
  		var mylabel = document.getElementById('off')
  			style=mylabel.style;
  			style.display = "inline";

  		var span = document.getElementsByTagName('span'),
			style = span[0].style;
			style.display = "block";
			
  		var mylabel = document.getElementById('on'),
  			style=mylabel.style;

  			style.display= "none";
  			style.displaylistStyleType="none";

  		}
  		document.getElementById("off").onclick = function(){
  		var mylabel = document.getElementById('off'),
  			style=mylabel.style;
  			
  			style.display= "none";
  			style.displaylistStyleType="none";

  		var span = document.getElementsByTagName('span'),
			style = span[0].style;
			style.display = "none";
			
  		var mylabel = document.getElementById('on'),
  			style=mylabel.style;

  			style.display= "inline";
  			style.displaylistStyleType="none";

  		}
  		//тень
  		document.getElementById("off").onmouseover  = function(){
  		var mylabel = document.getElementById('off'),
  			style=mylabel.style;
  			style.boxShadow="0 0 10px rgba(3,169,244,0.5)";
  			style.backgroundColor= "#03A9F4";
  		}
  		document.getElementById("on").onmouseover  = function(){  		
  		var mylabel = document.getElementById('on'),
  			style=mylabel.style;
  			style.boxShadow= "0 0 10px rgba(3,169,244,0.5)";
  			style.backgroundColor= "#03A9F4";
  		}
  		document.getElementById("el_1").onmouseover  = function(){  		
  		var li = document.getElementById('el_1'),
  			style=li.style;
  			style.backgroundColor= "#03A9F4";

  		}
  		document.getElementById("el_2").onmouseover  = function(){  		
  		var li = document.getElementById('el_2'),
  			style=li.style;
  			style.backgroundColor= "#03A9F4";

  		}
  		document.getElementById("el_3").onmouseover  = function(){  		
  		var li = document.getElementById('el_3'),
  			style=li.style;
  			style.backgroundColor= "#03A9F4";

  		}
  		document.getElementById("el_4").onmouseover  = function(){  		
  		var li = document.getElementById('el_4'),
  			style=li.style;
  			style.backgroundColor= "#03A9F4";

  		}
  		document.getElementById("el_5").onmouseover  = function(){  		
  		var li = document.getElementById('el_5'),
  			style=li.style;
  			style.backgroundColor= "#03A9F4";

  		}

//111
  		document.getElementById("el_1").onmouseout  = function(){  		
  		var li = document.getElementById('el_1'),
  			style=li.style;
  			style.backgroundColor= "#35BAF6";

  		}
  		document.getElementById("el_2").onmouseout  = function(){  		
  		var li = document.getElementById('el_2'),
  			style=li.style;
  			style.backgroundColor= "#35BAF6";

  		}
  		document.getElementById("el_3").onmouseout = function(){  		
  		var li = document.getElementById('el_3'),
  			style=li.style;
  			style.backgroundColor= "#35BAF6";

  		}
  		document.getElementById("el_4").onmouseout  = function(){  		
  		var li = document.getElementById('el_4'),
  			style=li.style;
  			style.backgroundColor= "#35BAF6";

  		}
  		document.getElementById("el_5").onmouseout  = function(){  		
  		var li = document.getElementById('el_5'),
  			style=li.style;
  			style.backgroundColor= "#35BAF6";

  		}
  		document.getElementById("off").onmouseout  = function(){  		
  		var off = document.getElementById('off'),
  			style=off.style;
  			style.backgroundColor= "#35BAF6";
  			style.boxShadow= "0 0 0 rgba(3,169,244,0.5)";

  		}
  		document.getElementById("on").onmouseout  = function(){  		
  		var on = document.getElementById('on'),
  			style=on.style;
  			style.backgroundColor= "#35BAF6";
  			style.boxShadow= "0 0 0 rgba(3,169,244,0.5)";

  		}

	})();

