"use strict";
//interface
/**now abb kyu hum interface use karte hai?
 * toh jaise koi bhi object hota hai n toh uss object ka basically Representation likhte hai
 * interface k andar means woh object dikhega kaise
 * jaise let user: toh iss variable user mein jo object aayega toh woh object dikhega kaise usko hum
 * interface k andar define krte hai so basically interface k andar hum kya krte hai ki interface k
 * andar hum kisi bhi object ko woh dikhega kaise uska  blueprint type ka hum likhte hai so like
 * interface Person {
 *  name : string;
 * age : number;
 * greet(text: string): void; toh idhar ; semicolon hai toh yeh semicolon object mein nhi hota hai object mein , comma
 * se separate krte hai toh ye last mein semicolon ; se pehchanege ki ye object nhi hai because object
 * is separated by comma ,
 * Note - toh ye ttoh class mein bhi hota tha same like class but in class we can initialize the name,
 * string,age means class mein hum name,age greet() ye sab ko initialize means ye sab ko value de skte
 * hai but in interface {} mein hum ye name, age, greet() functtion ko intialize nhi kar skte so it
 * is the main difference bettween class and interface
 * so class mein intializer  hota hai means hum intialize kr sktte hai but interface mein intializer
 * nhi  hota hai  toh interface mein hum inttialize nhi kr skte
 * and Note -- typeScript mein jo type hota hai n woh bhi same tarike se hii kaam krta hai
 * so type and intterface dono same  hii hota hai like
 * type Person = { //so idhar = use hua
 * name : string;
 * age: number;
 * greet(text: string): void
 * } so only differnce between type and interface is type mein = use hota hai  and interface mein nhi like
 * interface Person{ //so idhar =  use nhi hua
 * name: string;
 * age: number;
 * greet(text: string): void
 * }
 *
 */
// type Person = {
//     name : string;
//     age: number;
//     greet(text: string): void
// }
//so agar interface ko  comment kar denge toh ye above type Person se bhi same resultt aayega
//so there is not much difference between type and interface only difference is = ye
// class Person2 {
//     name: string = "patel";
//     //so here class mein intialize kr skte hai like here humne inittialize kiya name ko
// }
let user;
/*toh abb iss user k andar hum empty object nhi rakh sakte because ye user point kr rha hai interface Person
ko toh jo bhi interface Person k andar jo bhi apne pass properties hai jaise interface Person k andar
properties hai name,age,greet()  ttoh ye teeno chize honi chaiye user object k andar i.er user ka type
interface person hai ttoh jo bhi properties interface Person k andar hoga woh sab properties user object
k andar hona chaiye*/
user = {
    name: "patel",
    age: 26,
    greet(aman) {
        console.log(`hello ${aman} meet mr ${this.name}`);
    }
    /*Notte- ye 3 properties hii add kar skte hai user  object mein bcoz interface Person mein
    define hai ye 3 properties so isse jyada koi extra properties nhi add kr skte user objectt mein*/
};
console.log(user);
user.greet("hello there is ");
class Person2 {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} ,${this.name}`);
    }
}
const p1 = new Person2("mangal");
p1.greet("hii there i am ");
class Person3 {
    constructor(n) {
        this.name = n; //this name is readonly toh isko ek baar inittailize kar diye abb doobara isse initialize nhi kar skte
        /**now what is meant by readonly so itt means ki jaise readonly name toh ye name mein jaise humne
     * ek baar initialize kar diya value like in class Person3 k constructor mein like this.name = n karke
     * toh ek baar isse readonly name ko initialize kar diya toh doobara isse initialize nhi kar sktte
     * sirf ye name ko Read kar sakte hai
     */
    }
    greet(text) {
        console.log(`${text}, ${this.name}`); //so here we initailize this  greet function
    }
}
//so abb hum dekhenge ki in interface Greetable2 what is truly meaaning of readonly i.e
let user1; //so let isliye use krte hai because we want to reintialize 
user1 = new Person3("ankush"); //so constructor k n mein ankush gya and readonly name intialize hogya
//Now humlog iss Greetable3 interface ko class Person4 mein implement krenge
/*so class Person4 mein implement krne ka mtlb hai ki hum interface Greetable3 ki properties
 ko class Person4 mein access ya use kr sakte hai */
class Person4 {
    /**abb kyunki address yeh intterface Address mein declare tha and interface Greetable3 ye extend
     * kar rha tha interface Address ko means interface Greetable3 mein automatically address property
     * aajayegi and kyunki interface Greetable4 ko hum implement kar rhe hai class Person4 mein
     * so issi class Person4 mein humein interface Address k address ko initialize krna padega
     * so humlog issi class Person4 mein constructor k through address ko initialize krenge
     * aur abb kyunki in interface Address mein address ye readonly hai isliye ek baar agar iss
     * class Person4 k constructor mein humne address ko initialize kardiya phir doobara hum
     * address ko kabhi bhi initialize nhi kar payenge because address is readonly
     */
    constructor(n) {
        this.address = n; //so this readonly property address is initialised  now for 1st time
    }
    greet3(text) {
        console.log(`${text} and its address is ${this.address}`);
    }
}
let person4; //so ye person4 object mein Greetable4 interface ko define kiya
//so ye person4 object ko let se isliye declare kiya because we have to reinitialise this person4 object
//so let ka use kar ke humlog person4 ko reinitialise kr skte hai
person4 = new Person4("malad"); //ye "malad" constructor k parameter k liye hai as an argument hum pass kr rhe h
console.log(person4); //yaha tak filhal constructor hii chalega so output console mein malad aayega
person4.greet3("this is aman"); //itt is for greet3() function k liye in class Person4 
let add;
//toh abb ye add variable k andar issi addFun type ka function hii aa sakta hai
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 20)); //toh yahan 30 aayega
class Person5 {
    //outputName : string ye optional hai in Named interface isliye idhar error nhi aaraha hai
    constructor(n) {
        this.name = n; //here readonly name of Named interface ko initialized kr diye
    }
}
