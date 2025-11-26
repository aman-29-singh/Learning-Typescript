function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 200;
var n2 = 30;
//now we see the boolean
var printResult = true;
var someText = "Sum of two numbers is =  ";
add(n1, n2, printResult, someText);
//console.log(ans);
/**tsc is a command of typescript which compiles typescript code convert into javscript code
 * Typescript ye bolta hai ki hum har ek variable ka ek type define kar denge, har ek object, function
 * ka type define kar denge so agar typescript use nhi karenge to above case mein aap dekh rahe hoo
 * ki n1="20" ye string hai toh ye string hii function add() mein pass ho jaa rha hai but humein
 * toh number pass karna hai function mein toh isssi chiz ko handle karne k liye typescript use hota
 * hai agar typescript use nhi karenge toh humein extra condition use karna padta hai
 * like if(typeof num1 === "number" && typeof num2 === "number") aise condition lagana padega agar
 * typescriptt nhi hoga toh
 * Note core types of ttypescript are -- number, string, boolean jyada yahi use krte hai
 * Note - Typescript shows run time error means jab hum code likh rahe hote hai tabhi hii error
 * show kar deta hai so isse run time error bhi bol sakte hai
 * and compile time error woh error hote hai jo ki jab hum code likh rahe hote hai tab error
 * show nhi hote but jab hum code ko compile karte hai toh then humein console mein error show
 * hota hai so isse compile time error bolte hai lekin Typescript kya karta hai jab aap
 * code likhoge tabhi bata dega ki see here error hai taki jab hum application ko develop
 * kar rahe hai tabhi hum error ko figure out karle ki taki production mein daalne se application
 * code fatte na
 */
