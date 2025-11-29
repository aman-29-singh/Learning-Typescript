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

interface Person { //so interface cannot be intialize means interface properties ko value  nhi assign kr skte
    name: string;//like here we are not intialized a name means name mein koi bhi value nhi hai name ka sirf type define hai
    age: number;//like here age ka sirf type define hai  age ko initialize nhi kiye means age mein value nhi h
    greet(text: string): void;
}
// class Person2 {
//     name: string = "patel";
//     //so here class mein intialize kr skte hai like here humne inittialize kiya name ko
// }
let user: Person;
/*toh abb iss user k andar hum empty object nhi rakh sakte because ye user point kr rha hai interface Person 
ko toh jo bhi interface Person k andar jo bhi apne pass properties hai jaise interface Person k andar
properties hai name,age,greet()  ttoh ye teeno chize honi chaiye user object k andar i.er user ka type
interface person hai ttoh jo bhi properties interface Person k andar hoga woh sab properties user object
k andar hona chaiye*/
user = {
    name: "patel",
    age: 26,
    greet(aman): void {
        console.log(`hello ${aman} meet mr ${this.name}`);
    }
    /*Notte- ye 3 properties hii add kar skte hai user  object mein bcoz interface Person mein 
    define hai ye 3 properties so isse jyada koi extra properties nhi add kr skte user objectt mein*/
}
console.log(user);
user.greet("hello there is ")

/**so now question is arises that when we have to use type and when we have  to use interface
 * because dono mostly same hai toh kab kya use krna chaiye so 
 * so interface generally tab use karte hai jab bhi humein kuch class type chize likhni hoti hai
 * toh interface use krte hai aur jab bhi humein union wagera jaise type Combinable hai i.e
 * type Combinable = string | number; toh ye union | hai toh jab bhi hum union means | ye use karte
 * hai means multiple matlab ek se jyada type rakhte hai toh generally hum type use krte hai
 * aur jab bhi humein object ki Representation banani hai toh uss case mein humlog mostly prefer
 * krte hai intterface use karein  aur iss interface ko hum kisi class mein bhi implement kar skte hai
 */
//so now we will see that  how we can use interface  properties in class 
//and we will see how we can use multiple interface in a  class
interface Greetable {
    name: string;
    greet(text: string): void;//interface mein sirf type define hotta hai butt we cannot initialize the value
}
class Person2 implements Greetable {//toh idhar class mein Greetable interface ko implement kiye
    /**so hum class mein kisi bhi interface k propertties ko access kar sakte hai using implements
     * keyword so here we access the Greetable interface inside a person2 class means Greetable
     * interface ki properties like name,greet() function ko access kr sakte in this class person2 aur
     * multiple interface ko bhi hum use kar skte hai inside a class Person2 using comma , in implements 
     */
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(text: string) {
        console.log(`${text} ,${this.name}`);
    }
}

const p1 = new Person2("mangal")
p1.greet("hii there i am ")

/**now we will see the readonly means ye readonly sirf class mein hii use nhi hotta but also 
 * ye readonly ye interface and type mein bhi use hota hai so interface ya type mein hum kisi
 * bhi properties ko readonly kar sakte hai
 */
interface Greetable2 {
    readonly name: string;
    greet(text: string): void;
    /**so ye readonly ko hii sirf hum use  kar sakte hai interface and type mein but 
     * AccessModifiers like private, public, protected ye sirf use hota hai class mein 
     * toh readonly ye sirf use hota hai interface and type mein aur AccessModifiers like private,
     * public,protected ye use hota hai sirf class mein ye AccessModifiers use hota hai class mein 
     */
    /**now what is meant by readonly so itt means ki jaise readonly name toh ye name mein jaise humne
     * ek baar initialize kar diya value like in class Person3 k constructor mein like this.name = n karke
     * toh ek baar isse readonly name ko initialize kar diya toh doobara isse initialize nhi kar sktte 
     * sirf ye name ko Read kar sakte hai 
     */
}

class Person3 implements Greetable2 {
    name: string;
    constructor(n: string) {
        this.name = n;//this name is readonly toh isko ek baar inittailize kar diye abb doobara isse initialize nhi kar skte
        /**now what is meant by readonly so itt means ki jaise readonly name toh ye name mein jaise humne
     * ek baar initialize kar diya value like in class Person3 k constructor mein like this.name = n karke
     * toh ek baar isse readonly name ko initialize kar diya toh doobara isse initialize nhi kar sktte 
     * sirf ye name ko Read kar sakte hai 
     */
    }
    greet(text: string): void {
        console.log(`${text}, ${this.name}`);//so here we initailize this  greet function
    }
}
//so abb hum dekhenge ki in interface Greetable2 what is truly meaaning of readonly i.e
let user1: Greetable2;//so let isliye use krte hai because we want to reintialize 
user1 = new Person3("ankush")//so constructor k n mein ankush gya and readonly name intialize hogya
/*so interface Greetable2 ka name  initialize hogya so kyunki ye readonly hai ttoh ye name doobara
//initialize nhi hoga  */
//user1.name = "mern sttack "//so ye readonly name ko doobara initialize kar rhe hai isliye error aaraha hai 
//so  ye Cannot assign to 'name' because it is a read-only property.
/*so readonly k properties  mein sirf ek hii baar value ko initialize kar sakte hai jo ki humne already 
kar diya hai class Person3 k andar
 constructor(n : string){
        this.name = n;  
        */

//Now dekhenge Extending interface 
//toh jis tarah se hum class ko extend kar rhe thee ussi tarah se hum interface to interface bhi extend kr skte hai
//Extended interface
interface Address {
    readonly address: string;
}

interface Greetable3 extends Address {
    greet3(text: string): void;
    //so hum iss Greetable3 interface mein Address interface ko bhi extend kr rhe h
    //toh iss Greetable3 intterface mein Address interface k bhi properties aayenge   
}
//Now humlog iss Greetable3 interface ko class Person4 mein implement krenge
/*so class Person4 mein implement krne ka mtlb hai ki hum interface Greetable3 ki properties
 ko class Person4 mein access ya use kr sakte hai */
class Person4 implements Greetable3 {
    address: string;
    /**abb kyunki address yeh intterface Address mein declare tha and interface Greetable3 ye extend
     * kar rha tha interface Address ko means interface Greetable3 mein automatically address property 
     * aajayegi and kyunki interface Greetable4 ko hum implement kar rhe hai class Person4 mein
     * so issi class Person4 mein humein interface Address k address ko initialize krna padega
     * so humlog issi class Person4 mein constructor k through address ko initialize krenge 
     * aur abb kyunki in interface Address mein address ye readonly hai isliye ek baar agar iss
     * class Person4 k constructor mein humne address ko initialize kardiya phir doobara hum
     * address ko kabhi bhi initialize nhi kar payenge because address is readonly 
     */

    constructor(n: string) {
        this.address = n;//so this readonly property address is initialised  now for 1st time
    }
    greet3(text : string): void{
        console.log(`${text} and its address is ${this.address}`);
        
    }
}

let person4 : Greetable3//so ye person4 object mein Greetable4 interface ko define kiya
//so ye person4 object ko let se isliye declare kiya because we have to reinitialise this person4 object
//so let ka use kar ke humlog person4 ko reinitialise kr skte hai
 person4 = new Person4("malad")//ye "malad" constructor k parameter k liye hai as an argument hum pass kr rhe h
 console.log(person4)//yaha tak filhal constructor hii chalega so output console mein malad aayega
 person4.greet3("this is aman")//itt is for greet3() function k liye in class Person4 
 //this is aman and its address is malad output aayega iska -> person4.greet3("this is aman")

 /**Now hum dekhenge ki function ka  type hum kis tarah se interface k andar define kr skte hai ye
  * dekhenge means function ka type lkis tarah se interface mein provide kr skte hai
  * so humlog type mein aise karte thee functtion ka type define :-
  * type addFun = (a: number, b: number) => number; so aise functtion ka type define krte thee using in type
  */
 //type addFun = (a: number, b: number) => number;//idhar => use kiye toh real function mein bhi => use krna h
 //toh ye toh type ka use krke function addFun ka type define kiye now interface ka use karke type define krnge
 //now interface ka use karke type define krnge
 interface addFun{
    (a: number, b: number): number
    //so aise interface ka use krke bhi hum function ka type define kr skte h
    //toh idhar humne => arrow  ka use nhi kiya means : number karke function ka return type diya
    //so intterface mein hum => arrow ka use nhi krte
    //so ye (a: number, b: number): number ek ttarah se anonomous function h
    //anonomous function means idhar function ka naam lnhi diye
 }
 let add : addFun;
 //toh abb ye add variable k andar issi addFun type ka function hii aa sakta hai
 add = (n1: number, n2: number) => {//so here => ye arrow use krna hai because type addFun  mein bhi h
    return n1 + n2;
 }
 console.log(add(10,20))//toh yahan 30 aayega
 //so aise hum intterface ka use krke function ka type define krte h

 //Now dekhte hai optional(?) kya hota hai
 interface Named{
    readonly name : string;
    outputName  ? : string//so ye ? optional hai means outputName ho bhi skta hai nhi bhi ho skta hai
    //so ye outputName optional h means agar ye outputName nhi provide karoge toh error nhi aayega
 }
 class Person5 implements Named{
    name : string;
    //outputName : string ye optional hai in Named interface isliye idhar error nhi aaraha hai

    constructor( n : string){
        this.name = n;//here readonly name of Named interface ko initialized kr diye
    }
 }