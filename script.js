function Calculator1(leftOperand){
 var operand1 = leftOperand;
 this.multiply = function(operand2){
    return operand1*operand2;
  };
  
   this.add = function(operand2){
    return operand1+operand2;
  };
  
   this.subtract = function(operand2){
    return operand1-operand2;
  };
  
   this.divide = function(operand2){
    return operand1/operand2;
  };
}


var calc = new Calculator1(12);
document.write("Калькулятор 1.","<br>","<br>","Результат умножения: ",(calc.multiply(2))); //24
document.write("<br>","<br>","Результат сложения: ",(calc.add(3))); //25
document.write("<br>","<br>","Результат вычитания: ",(calc.subtract(1)));//11
document.write("<br>","<br>","Результат деления: ",(calc.divide(2))) //6


var operand1=1;
var operand2=2;
var result = {
		res: operand1*operand2,
		valueOf: function() { return this.res; }	
	};

console.log(result);


function Calculator2(leftOperand) { 
var operand1 = leftOperand; 

this.multiply = function(operand2){ 
	var result = operand1*operand2;
	return new Calculator2(result); 
}; 

this.add = function(operand2){ 
	var result = operand1+operand2;
	return new Calculator2(result); 
};

this.subtract = function(operand2){ 
	var result = operand1-operand2;
	return new Calculator2(result);
};

this.divide = function(operand2){ 
	var result = operand1/operand2;
	return new Calculator2(result);
};

this.toString = function() { return operand1; }	
} 

var calc = new Calculator2(12);
document.write("<br>","<br>","<br>","Калькулятор 2.","<br>","<br>","Результат: ",(calc.multiply(2).add(3))); //27


function Calculator3(leftOperand){
 this.multiply = function(){
	 var result = leftOperand;
	 for (var i=0; i<arguments.length; i++){
       result=result*arguments[i];
	 }
	 
	 return result;
  };
  
   this.add = function(){
	 var result = leftOperand;
	 for (var i=0; i<arguments.length; i++){
       result=result+arguments[i];
	 }
	 
	 return result;
  };
  
   this.subtract = function(){
	 var result = leftOperand;
	 for (var i=0; i<arguments.length; i++){
       result=result-arguments[i];
	 }
	 
	 return result;
  };
  
   this.divide = function(){
	 var result = leftOperand;
	 for (var i=0; i<arguments.length; i++){
       result=result/arguments[i];
	 }
	 
	 return result;
  };
}

var calc = new Calculator3(1);

document.write("<br>","<br>","<br>", "Калькулятор 3.","<br>","<br>","Результат умножения: ",(calc.multiply(2, 2, 4, 5))); 
document.write("<br>","<br>","Результат сложения: ",(calc.add(3, 1, 2))); 
document.write("<br>","<br>","Результат вычитания: ",(calc.subtract(1, 4, 2, 1)));
document.write("<br>","<br>","Результат деления: ",(calc.divide(2, 6))) 


