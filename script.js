//1.	Write a JavaScript program to display the current day and time in the following format. 
//Sample Output: Today is: Friday.

var date = new Date();
var options = {
  weekday: 'long'
};
console.log("1. Сегодня: ", date.toLocaleString("ru", options)); 

//2.	Write a JavaScript program to get the current date. 

var date = new Date();
var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
console.log("2. Текущая дата: ", date.toLocaleString("ru", options));

//3.	Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
console.log("3. "); 
for (var year = 2014; year <= 2050; year++)  
    {  
    var d = new Date(year, 0, 1);  
    if ( d.getDay() === 0 )  
        console.log("   1st January is being a Sunday  "+year);  
    }  

//4.	Write a JavaScript program to calculate days left until next New Year.
var one = new Date("January 01 2017 00:00:00"); // дата, до которой считаем.
var two = Date.now(); // текущее время
var remaining = one - two; // миллисекунды до даты

remaining /= 1000; 	// секунды до даты
remaining /= 60;    // минуты до даты
remaining /= 60;    // часы до даты
remaining /= 24;    // дни до даты
var a=Math.floor(remaining);
console.log("4. До НГ осталось: ", a, " дн.");

//5.	Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
function is_array(mix) {
    return ( mix instanceof Array );
}
console.log("5.",is_array("qwe")); 
console.log("  ",is_array([1, 2, 4, 0]));

//6.	Write a JavaScript function to clone an array
function copyMass(mass){
	var result = mass.slice();
	return result;
}
var b=[1, 2, 1, 0, 1];
console.log("6. Исходный массив:", b ,". Копия: ", copyMass(b));

//7.	Write a JavaScript function to find the most frequent item of an array.
    function theMostFrequent(mas){
		var mf = 1;
		var m = 0;
		var item;
		for (var i = 0; i < mas.length; i++) {
	  		for (var j = i; j < mas.length; j++) {
	    		if (mas[i] == mas[j]) m++;
    			if (mf < m) {
	      			mf = m;
	      			item = mas[i];
	    		}
	  		}
	  		m = 0;
		}
		return item;
	}
	console.log("7. Наиболее встречающийся элемент: ", theMostFrequent(b));
//8.	Write a JavaScript function that inverts the case of the letters of the given string and returns new string
var a="привет";
function invertS(str){
	return str.split("").reverse().join("");
}
console.log("8. Исходная строка : ", a);
console.log("   Строка : ", invertS(a));

//9.	Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)

    function removeDuplicates(num) {  
      var x,  
          len=num.length,  
          out=[],  
          obj={};  
       
      for (x=0; x<len; x++) {  
        obj[num[x]]=0;  
      }  
      for (x in obj) {  
        out.push(x);  
      }  
      return out;  
    }  
    var Mynum = ['h', 'e', 'l', 'e', 'p'];  
    result = removeDuplicates(Mynum);  
    console.log("9. Исходный массив:",Mynum);  
    console.log("   Результат:",result);  
 
//10.	Write a JavaScript program to shuffle an array
function shuffle(arra1) {  
    var ctr = arra1.length, temp, index;   
    while (ctr > 0) {  
        index = Math.floor(Math.random() * ctr);    
        ctr--;   
        temp = arra1[ctr];  
        arra1[ctr] = arra1[index];  
        arra1[index] = temp;  
    }  
    return arra1;  
    }  

// b объявлен выше
console.log("10. Исходный массив:",b);
console.log("    Перетасованный массив:",shuffle(b));
//11.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function delEl(mass) {
	var arr=mass;
	
    for (var i = 0; i < arr.length-1; i++) {
		for (var j = 0; j < arr.length-1; j++){
			if (isNaN(arr[j])){
				arr.splice(j, 1);
			}
			else if (arr[j]==null)	{
				arr.splice(j, 1);
			}
				else if (arr[j]==0){
					arr.splice(j, 1);  
				}
					else if(arr[j]=='""'){
					arr.splice(j, 1);  	
					}
						else if (arr[j]==undefined){
							arr.splice(j, 1);  	
						}
							else if (arr[j]==false){
								arr.splice(j, 1);  	
						    }
    	}
	}
    return arr;
}
var m=[NaN,1,2,3,undefined,4,false,0,NaN,null,"",19];
console.log("11. Исходный массив: ",m);
console.log("    Результат: ", delEl(m));

//12.	Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method

function compareToSort(x,y)   
 {  
  if (x.title < y.title)  
    return -1;  
  if (x.title > y.title)  
    return 1;  
  return 0;  
 }  

var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
console.log("12. ",library.sort(compareToSort)); 

//13.	Write a JavaScript function to merge two arrays and removes all duplicates elements
  
function delEl2(m1,m2) {
	var newarr=m1.concat(m2);
	var result = [];
  nextInput:
    for (var i = 0; i < newarr.length; i++) {
      var str = newarr[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue nextInput; // если да, то следующий
      }
      result.push(str);
    }
  return result;
}
var m=[1,2,"b",4];
var b=["a","b","c","d",1];
console.log("13. Исходныe массивы: ",m,", ",b);
console.log("    Результат: ", delEl2(m,b));

// 14.	Write a JavaScript function to remove a specific element from an array
function removeArrayElement(array, n) {  
   	var index = array.indexOf(n);  
   	if (index > -1) {  
    array.splice(index, 1);  
	}  
   return array;  
}
var MyMassive=[3,5,9,'qwe',1];  
console.log("14. Исходный массив:",MyMassive);
console.log("    Результат:",removeArrayElement(MyMassive,1));

//15.	Write a JavaScript function to get a random item from an array
function Rand(m1) {
	var rand = Math.floor(Math.random() * m1.length);
    return m1[rand];
}
console.log("15. Случайный элемент: ", Rand(b));

//16.	Write a JavaScript function to move an array element from one position to another

function moveIndex(array, from, to) {
  if( to === from ) return;

  var target = array[from];                         
  var increment = to < from ? -1 : 1;

  for(var k = from; k != to; k += increment){
    array[k] = array[k + increment];
  }
  array[to] = target;
  return array;
}

console.log("16. Исходный массив: ", b);
console.log("    Результат: ",moveIndex(b,0,1)); 
//17.	Write a JavaScript function to get difference between two dates in days
var dateDiffIndays = function(date1, date2) {  
dt1 = new Date(date1);  
dt2 = new Date(date2);  
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));  
}  
console.log("17. Разница: ",dateDiffIndays('04/02/2014', '11/04/2014'));  

//18.	Write a JavaScript function to get the maximum date from an array of dates
function max_date(all_dates) {  
var max_dt = all_dates[0],  
  max_dtObj = new Date(all_dates[0]);  
all_dates.forEach(function(dt, index)  
  {  
  if ( new Date( dt ) > max_dtObj)  
  {  
  max_dt = dt;  
  max_dtObj = new Date(dt);  
  }  
  });  
 return max_dt;  
  }  
console.log("18. Максимальную дата из массива дат:",max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
//19.	Write a JavaScript function to split a string and convert it into an array of words
    stringToArray = function (str) {  
         return str.trim().split(" ");  
    };  
    console.log("19. Исходная строка: 'Robin Singh', результат:",stringToArray("Robin Singh"));  
//20.	Write a JavaScript function to capitalize the first letter of a string
    capitalize = function(str1){  
      return str1.charAt(0).toUpperCase() + str1.slice(1);  
    }  
          
     console.log("20. Исходная строка:'js string exercises', результат:",capitalize('js string exercises'));  
//21.	Write a JavaScript function to convert a string into camel case
	function camelize(str) {
  		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, 
  		function(letter, index) {
    		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  		}).replace(/\s+/g, '');
	}
	console.log("21. ");
	console.log(camelize("Java Script")); 
	console.log(camelize("java-script")); 
	console.log(camelize("Java Script Exercises"));

//22.	Write a JavaScript function to find the highest value in an array
function max(input) {  
     if (toString.call(input) !== "[object Array]")    
       return false;  
  return Math.max.apply(null, input);  
    }  
  
console.log("22. Максимальное значение в массиве [12,34,56,1] :",max([12,34,56,1]));
//23.	Write a JavaScript function to find the lowest value in an array
function min(input) {  
    if (toString.call(input) !== "[object Array]")    
       return false;  
  	return Math.min.apply(null, input);  
    }  
  
console.log("23. Минимальное значение в массиве [12,34,56,1] :",min([12,34,56,1])); 
//24.	Write a JavaScript function to check to check whether a variable is numeric or not
function isNumeric(num) {  
  return !isNaN(parseFloat(num)) && isFinite(num);  
}  
console.log("24. 12 ",isNumeric(12));  
console.log("    abcd ",isNumeric('abcd')); 
//25.	Write a JavaScript function to calculate the sum of values in an array
function sum(input){  
               
 if (toString.call(input) !== "[object Array]")  
    return false;  
        
            var total =  0;  
            for(var i=0;i<input.length;i++)  
              {                    
                if(isNaN(input[i])){  
                continue;  
                 }  
                  total += Number(input[i]);  
               }  
             return total;  
            }

console.log("25. Сумма значений элементов массива",sum([1,2,3]));
//26.	Write a JavaScript program to get the length of a JavaScript object
Object.objsize = function(Myobj) {  
    var osize = 0, key;  
    for (key in Myobj) {  
        if (Myobj.hasOwnProperty(key)) osize++;  
    }  
    return osize;  
};  
  
var MyObj = {   
p1 : "HALK",   
p2 : "Dolphin",   
p3 : 12 };  
  
var objsize = Object.objsize(MyObj);  
console.log('26. Size of the current object : '+objsize); 
//27.	Write a JavaScript program to list the properties of a JavaScript object
function listTheProperties(obj)   
 {  
    if (!isObject(obj)) return [];  
    if (Object.keys) return Object.keys(obj);  
    var keys = [];  
    for (var key in obj) if (_.has(obj, key)) keys.push(key);  
    return keys;  
  }  
function isObject(obj)   
{  
    var type = typeof obj;  
    return type === 'function' || type === 'object' && !!obj;  
  }  
console.log("27. ",listTheProperties(MyObj));