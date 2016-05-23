var worker = (function() {

document.getElementById("button").onclick = function show_confirm()
{
var r=confirm("Are you sure want to add nev ToDo item: "+document.getElementById('iputToDo').value+"?");
if (r==true)
{
addText();
}
else
{}
}

var count = 0; // счетчик
function addText(){ 
	var textItem = document.getElementById('iputToDo').value;
	
	var list = document.getElementById("list");				//берем элемент list
	var item = document.createElement('li');				//создаем item
	list.appendChild(item);									//добавляем item в list

	var input = document.createElement('input');			//создаем input
	input.type="checkbox";									//присваемваем тип checkbox
	input.className= "check"
	var div = document.createElement('div');				//создаем див
	div.className="str";									//присваемваем class str
	
	item.appendChild(input);								//добавляем input 	
	item.appendChild(div);									//добавляем div 
	document.getElementsByClassName("str")[count].innerHTML+=textItem; 	//пишем в div с id = str текст textItem
	console.log(count++);
}

}());
