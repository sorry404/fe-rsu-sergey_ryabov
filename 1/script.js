var a = "нажмите ок!";
var b = "вы нажали 'ок'";
alert(a); 
document.write("<h1 align='center'>",b, "</h1>"); 

 document.write("<br>","<br>","Инкремент-это увеличение числа на единицу. Существует префиксная и постфиксная запись.", "<br>",
 "Постфиксная запись выглядит так: x++. например: х=1.  y=x++. Результат: сначала y=x, затем x=1+1. т.е. y=1, x=2 ","<br>",
 "Префиксная запись выглядит так: ++x. например: х=1.  y= ++x. Результат: сначала x=1+1, затем y=x. т.е. y=x=2");

//площадь треугольника 
 function square(a, b, c) {
    return Math.sqrt(((a+b+c)/2)*(((a+b+c)/2)-a)*(((a+b+c)/2)-b)*(((a+b+c)/2)-c));
};

 document.write("<br>","<br>","Площадь треугольника: ",square(3,4,5),".")

 //факториал числа
 function Factorial(X) {
   if (X == 0 || X == 1) return 1;
   else return (X * Factorial (X - 1));
}
document.write("<br>","<br>","Факториал числа: ",Factorial(2),"."); 
 
 //переворот массива 1
var myarray = [1, 2, 3]; 
 
function rev1(array) {
    array.reverse();
	document.write("<br>","<br>","Вывод массива 1: ");
	for(var i = 0; i < array.length; i++){
      document.write(array[i]);
    }
}
rev1(myarray);

myarray = [1, 2, 3];
//переворот массива 2
function rev2(array) {
    array.reverse();
	document.write("<br>","<br>","Вывод массива 2: ");
	var i=0;
	while (i < array.length){
      document.write(array[i]);
	  i++;
    }
}
rev2(myarray);


myarray = [1, 2, 3];
//переворот массива 3
function rev3(array) {
    array.reverse();
	document.write("<br>","<br>","Вывод массива 3: ");
	var i=0;
	do{
      document.write(array[i]);
	  i++;
    }while (i < array.length);
}
rev3(myarray);


//сравнение чисел
 function number(X) {
   if (X == 0){
	   document.write("<br>","<br>","Заданное число ",X);
   } else if (X<0) {
       document.write("<br>","<br>","Число ",X, "  отрицательное");
   }  else {
	    document.write("<br>","<br>","Число ",X, " положительное"); 
   }		
}

number(0); 
number(1);
number(-1);