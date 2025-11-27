var firstname;
var age;
firstname = "patel";
age = 22;
// const person : object = { 
//     //so aise : object karke Type define nhi krte because ye object kuch bhi ho sakta hai like {} empty object bhi ho skta hai
//     firstname : "patel",
//     age : 23
// }
// console.log(person.firstname)//ye error dega because :object aise object ka Type define nhi krtte
//isliye object ko :{} aise iske andar hii Type define krte hai
// const person : {
//     firstName : string;
//     age : number;
// } = {
//     firstName : "patel",
//     age : 45
// }
// console.log(person.firstName);//ye valid hai because idhar objectt ko :{} aise Type diye hai
/**here we will learn
 * UNION, LITERAL TYPES , TYPE ALIAS/SURTOM TYPES
 */
//Now dekhenge UNION now what is union and union ki need kyu padi
//UNION, | -> pipe in Typescript
// function combine(num1 : number | string, num2 : number | string){
//     /**so | iss union ki wajah se num1 mein number bhi aasakta hai and string bhi aasakta hai
//      * because of union | iski wajah se but return num1+num2 aise nhi kar sakte because 
//      * string+string idhar aise + operator use nhi kar sakte isliye condition lagayenge
//      */
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         result = num1 + num2;
//         //so agar num1 and num2 number hotta hai ttoh iss case mein hum directly add kar sakte num1+num2 aise
//     }else{
//         //ye condition tabhi chlegi jab num1 num2 ye string hoga bcoz humne ubion use kiya h | aise
//         result = num1.toString() + num2.toString()
//     }
//     return result;
// }
// /**so humlog UNION tab use krte hai jab humlog ko 2 ya 3 ya jyada option rakhna hoo for for variable
//  * in function means jab kisi variable k liye 2 ya jyada opttion rakhna hoo dataType k liye tab 
//  * union ka use karte hai
//  */
// const sum = combine(10,20); //30 
// const combineName = combine("patel", "mernStack"); // patel mernStack
// console.log(sum)
// console.log(combineName)
// console.log(sum, combineName)
// LITERAL TYPES
/**literal type ismein bhi hum again ye | pipe wala symbol use karte hai ye acttual mein union se hii
 * bana hotta haijo literal type hota hai toh literal ttype mein hum apna khud ka Type rakhte hai
 *
 */
// function combine(num1 : number | string, num2 : number | string, conversionType: "as-number" | "as-string"){
//     /**so | iss union ki wajah se num1 mein number bhi aasakta hai and string bhi aasakta hai
//      * because of union | iski wajah se but return num1+num2 aise nhi kar sakte because 
//      * string+string idhar aise + operator use nhi kar sakte isliye condition lagayenge
//      */
//     /**LITERAL TYPE matlab hii hota hai ki hum yahan par int,boolean,number na likh kar khud ka ek type
//      * banate hai jaise humne "as-number" "as-string" naam ka khud ka ek Type banaya hai aise
//      * so function combine ye 3rd parameter mein "as-number" ya "as-string" argument expect karta hai
//      * aur ye "as-number" ya "as-string" ye humara hii banaya hua dataType hai so "as-strings" ye bhi pass nhi
//      * kAR SAKTTE BECAUSE SPELLING WRONG AS "as-string" hona chaiye spellingg exact same
//      */
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number"){
//         result = +num1 + +num2;//ismein se agar koi ek value bhi string hui toh usko hum number mein convert kar denge
//         //so agar num1 and num2 number hotta hai ttoh iss case mein hum directly add kar sakte num1+num2 aise
//     }else{
//         //ye condition tabhi chlegi jab num1 num2 ye string hoga bcoz humne ubion use kiya h | aise
//         result = num1.toString() + num2.toString()
//     }
//     return result;
// }
/**so humlog UNION tab use krte hai jab humlog ko 2 ya 3 ya jyada option rakhna hoo for for variable
 * in function means jab kisi variable k liye 2 ya jyada opttion rakhna hoo dataType k liye tab
 * union ka use karte hai
 */
var sum1 = combine("10", "20", "as-number"); //30 
/**so yahn par toh hum "10" "20" means string bhej rhe hai toh answer mein 30 kaise aaya because
 * humari if{}else{} condition mein OR || KARKE humne conversionType === "as-number" diya hai
 * so || mein agar koi bhi condition true hotti hai toh woh chalti hai so isliye 1st condittion chalegi
 * because typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number" here
 *  typeof num1 === "number" && typeof num2 === "number" ye false hai sum1("10","20") argument mein
 * but "as-number" ye ttoh true hai isliye yeh condittion chalegi i.e result = +num1 + +num2;
 */
var sum2 = combine(10, 50, "as-number"); // 60 aayega
var combinedName = combine("patel", "mernStack", "as-string"); // patelmernStack aayegaa answer
console.log(sum1); //so answer 30 aayega because if{}else{} mein pehli wali condition meet ho rhi hai
console.log(sum2);
console.log(combinedName);
console.log(sum1, sum2, combinedName);
function combine(num1, num2, conversionType) {
    /**so idhar upar hum dekh rhe hai ki number | string ye Repeat ho rha hai num1: & num2 mein so ye Repeat
     * ko stop karne k liye hum iss poore chiz ko number | string ko ek chota sa naam dedenge aur iss chote se
     * naam ko hum yahan num1 & num2 mein use karlenge jaise number | string ko hum ek variable mein rakhenge
     * aur uss variable ko num1: and num2: mein use karlenge toh issi problem ko solve karta hai type toh
     * Type alias ek type keyword hota hai jiski help se hum type define karte hai kisi bhi variable,object
     * kisi bhi chiz ka ttum type define kar sakte hoo using tthis type keyword toh isko hum Type Alias bolte hai
     * type Combinable = number | string
      *type ConversionType = "as-number" | "as-string"
      * jaise idhar humne Combinable and ConversionType use kiya hai so its a custom type
      */
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2; //ismein se agar koi ek value bhi string hui toh usko hum number mein convert kar denge
        //so agar num1 and num2 number hotta hai ttoh iss case mein hum directly add kar sakte num1+num2 aise
    }
    else {
        //ye condition tabhi chlegi jab num1 num2 ye string hoga bcoz humne ubion use kiya h | aise
        result = num1.toString() + num2.toString();
    }
    return result;
}
var user = {
    name: "patel ",
    age: 34,
    skills: ["React", "Node"]
};
//so idhar User type use kiye hai object user k liye not a string,int etc 
function greet(user) {
    console.log("hi i am ".concat(user.name));
}
greet(user);
