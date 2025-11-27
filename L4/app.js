// console.log("Lets learn functions...")
//so idhar functions sikhne wale hai
//function return type
function add(num1, num2) {
    return num1 + num2; //30 aayega return mein toh 30 ye ek number hai 
}
// console.log(add(10,20));//answer mein 30 aayega
function greet(name) {
    console.log("Hii, ".concat(name));
}
// console.log(greet("aman"))
// let combineFunction : Function; //so ye variable k andar sirf function hii daal skte hai
// //combineFunction = 20 //ye error dega bcoz hum iss combineFunction variable k andar sirf Function hii daal skte h
// //combineFunction = function(){}//ye valid hai 
// /**but ye aise type functtion define nhi karne ka let combineFunction : Function; bcoz humein pata hii
//  * nhi ki ye function kaisa hai like empty function hai kaisa hai like humein object k baare mein jaise nhi
//  * pata tha so object ko type hum alag tarah se dete tthee similarly wittyh function toh function ko bhi
//  * type doosre way se define karneka because aise let combineFunction : Function; humein pata nhi chalega ki
//  * ye kaun sa function hai kitna paramaeter hai kya return kar rha hai kya nhi kar rha kuch nhi nhi pata  
//  */
// combineFunction = add //ye valid hai because add is a function and we define type Function for variable combineFunction
// combineFunction = greet
//console.log(combineFunction(2,3))//toh answer 5 aana chaiye but nhi aayega
//so it is not a good practice to define type for a function
/**Note-
 * let combineFunction : Function; aise kisi k variable k andar agar humein koi functoin daalne hai
 * toh aise Type define nhi karne ka becuz isse kuch pata nhi chalta hai ki function KAISA hai kitna
 * parameter lega kya return krega etc
 */
//Good practice
var combineFunction;
//so isse hum combineFunction k andar sirf aisa (a: number , b: number) => number function hii assign kr skte hai
combineFunction = add; //so add function match kar rha hai isse (a: number , b: number) => number isliye error nhi de rha h
console.log(combineFunction(100, 200));
//Function type & callbacks
//function addHandle(num1: number, num2:number, cb)//so here cb is callback function
//toh jab hum iss addHandle() function ko invoke krenge toh 3 argument bhejene i.e num1,num2,cb
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result); //callback function ko invoke kar rhe hai idhar
}
addHandle(10, 20, function (result) {
    console.log(result);
});
