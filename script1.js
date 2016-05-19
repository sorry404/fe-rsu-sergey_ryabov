document.getElementById('td_border').style.border = '8px solid #9FDED0';
document.getElementById('td_border').style.borderRadius = '8px';

document.getElementById("header").style.background ="#FFCB00";
document.getElementById("header").style.fontZize = "24px";
document.getElementById("header").style.fontFamily = "Arial, serif";
document.getElementById("header").style.padding = "10px";

document.getElementById("body").style.background ="#EDECDE";
document.getElementById("body").style.color="#647988";
document.getElementById("body").style.padding=" 10px";
document.getElementById("body").style.fontFamily= "Arial";

var s = {
  display: 'inline-block',
  position: 'absolute',
  left: '50px',
  top: '50px',
  border: '10px solid transparent',
  borderTopColor:  '#FFCB00',
  width: '0px'
}
var newEl = document.createElement('body');
newEl.innerHTML = ' ';
for(var key in s){
  newEl.style[key] = s[key];
}

var demo = document.getElementById('body');
demo.appendChild(newEl);