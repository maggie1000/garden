var str = "omg.txt";
//var patt = new RegExp(/hello/g);
var patt = new RegExp(/\.txt$/g);
var result = patt.test(str);
console.log("result: " + result);
