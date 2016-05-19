//modul!!!111 

var worker = (function(){
	//private
	var mas = [];

	//function add massive
	function arrayHelpers(addMas){
		worker.mas=addMas;
	};

	//2. Write a JavaScript function to deep clone an array using recursion.
	arrayClone = function(arra1) {  
    	return arra1.slice(0);  
	}; 
	//3. Write a JavaScript function to find the most frequent item of an array.
    function theMostFrequent(){
		var mf = 1;
		var m = 0;
		var item;
		for (var i = 0; i < worker.mas.length; i++) {
	  		for (var j = i; j < worker.mas.length; j++) {
	    		if (worker.mas[i] == worker.mas[j]) m++;
    			if (mf < m) {
	      			mf = m;
	      			item = worker.mas[i];
	    		}
	  		}
	  		m = 0;
		}
		return item;
	}
	//7. Write a JavaScript function to merge two arrays and removes all duplicates elements
	function mergeAndRemoveDuplicates(array2) {  
    	var result_array = [];  
    	var arr = worker.mas.concat(array2);  
    	var len = arr.length;  
    	var assoc = {};  
    	while(len--) {  
        	var item = arr[len];  
        	if(!assoc[item])   
        	{   
            	result_array.unshift(item);  
            	assoc[item] = true;  
        	}  
    	} 
    	return result_array;  
	} 
	//8. Write a JavaScript function to remove a specific element from an array
	function removeArrayElement(array, n) {  
    	var index = array.indexOf(n);  
    	if (index > -1) {  
     		array.splice(index, 1);  
    	}  
    	return array;  
	}
	//9. Write a JavaScript function to get a random item from an array 
	function getRandom() {     
		return worker.mas[Math.floor(Math.random()*worker.mas.length)];        
	}  
    //10. Write a JavaScript function to move an array element from one position to another
    function move(arr, old_index, new_index) {  
        while (old_index < 0) {  
            old_index += arr.length;  
        }  
        while (new_index < 0) {  
            new_index += arr.length;  
        }  
        if (new_index >= arr.length) {  
            var k = new_index - arr.length;  
            while ((k--) + 1) {  
                arr.push(undefined);  
            }  
        }  
         arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);    
       return arr;  
    }  
	//11. Write a JavaScript function to split a string and convert it into an array of words
	stringToArray = function (str) {  
	    return str.trim().split(" ");  
	};
	//12. Write a JavaScript function to capitalize the first letter of a string
	capitalize = function(str1){  
  		return str1.charAt(0).toUpperCase() + str1.slice(1);  
	}
    // возвращаем
  	return {
  		arrayHelpers:arrayHelpers,
  		arrayClone:arrayClone,								//2
		theMostFrequent: theMostFrequent,					//3

		mergeAndRemoveDuplicates: mergeAndRemoveDuplicates,	//7
		removeArrayElement:removeArrayElement,				//8
		getRandom:getRandom,								//9
		move:move, 											//10
		stringToArray:stringToArray,						//11
		capitalize:capitalize,								//12
	};
})();

//Модуль используется следующим образом:
worker.arrayHelpers([1, 323, 45, 656, 1, 1]);

var frequent = worker.theMostFrequent(); // 1
console.log(frequent);

var merged = worker.mergeAndRemoveDuplicates([1, 2]); // 1, 323, 45, 656, 2 
console.log(merged);

var random = worker.getRandom(); // Some random value
console.log(random);



