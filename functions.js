//1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
function is_array(mix) {
    return ( mix instanceof Array );
}
console.log(is_array("qwe")); 
console.log(is_array([1, 2, 4, 0]));

//6. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function compareToSort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }

console.log(library.sort(compareToSort));

//13. Write a JavaScript function to convert a string into camel case
camelize = function camelize(str) {  
      return str.replace(/\W+(.)/g, function(match, chr)  
       {  
            return chr.toUpperCase();  
        });  
    }  
  
console.log(camelize("Java Script"));  
console.log(camelize("java-script"));  
console.log(camelize("Java Script Exercises"));

//14. Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire array and calls the given function with the current array element.

function iterateArray(array, callback){
	for(var i = 0; i < array.length;i++){	
		callback(array[i]);
	}
}
var result = 0;

iterateArray([2,4,1,2,4], function(el){
	result += el;//Now result is the sum of all array elements
});
console.log(result);
