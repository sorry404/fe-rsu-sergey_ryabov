//4. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
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
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];  
result = removeDuplicates(Mynum);  
console.log(Mynum);  
console.log(result);
//5. Write a JavaScript program to shuffle an array
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
    var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  
    console.log(shuffle(myArray)); 
//15. Write a JavaScript program to get the length of an JavaScript object
Object.objsize = function(Myobj) {  
    var osize = 0, key;  
    for (key in Myobj) {  
        if (Myobj.hasOwnProperty(key)) osize++;  
    }  
    return osize;  
}; 
var testObject = {
  p1 : "HALK",
  p2 : "Dolphin",
  p3 : 13 
};  

var objsize = Object.objsize(testObject);  
console.log('Size of the current object : '+objsize); 