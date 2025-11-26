/**Now dekhenge ki jaise humein pata hai ki javascript mein array hota hai object hota hai
 * ye saari chize hoti hai toh typescript mein hum kaise use karenge ki jaise agar
 * ek object hai Typescript mein ttoh uska kaise Type defined karenge , array hai toh uska
 * kaise type defined karenge
 */
//toh ismein dekhenge how we will define types of Object, Array, Tuple,Enum
//WE WWill see object,Array, Tuple
/*object mein Typescript likhna isliye jaruri hota hai kyunki kahin baar kya hota hai 
ki jab humlog api se data fetch karte hai toh toh humein object k form mein hii data milta
hai json data jo bhi hota hai woh object k form mein hii hota hai */
// const person = {
//     firstname : "patel",
//     age:22
// }
// console.log(person.lastname);//ye typescript mein error dega but javascript mein yeh chal jayega

//now ye upar wale object mein type lagayenge
//toh yeh object Type hai 
// const person: {
//     firstName: string; // ; means ye object ka ttypes hai object nhi hai bcuz object mein , use hota hai
//     age: number;
//     xyz:{
//         address: string;
//         //aise nested object mein bhi Type define kar saktte hai
//     }
//     //so aise object mein bhi Type defined kar sakte hai
// } = {
//     firstName: "patel",
//     age: 22,
//     xyz: {
//         address: "Mumbai kandivali"
//     }
// }

// console.log(person)



// //Now dekhenge Type in Array
// const person: {
//     firstName: string; // ; means ye object ka ttypes hai object nhi hai bcuz object mein , use hota hai
//     age: number;
//     //now dekhenge ki array ka Type kaise define karenge
//     skills: string[];//toh yeh string ka array ho jayega means iss array mein sirf string values hii rahengi
//     //so aise object mein bhi Type defined kar sakte hai
// } = {
//     firstName: "patel",
//     age: 22,
//     skills: ["Reactjs", "NodeJs", ]
//     //so here skills array ye sirf string mein define kari hai toh sirf ismein string aayegai

    
// }

// console.log(person)

//Types in variable
let favouriteLanguage1 : string[]//means string ka array hii sirf iss variable mein jaa saktta hai
 favouriteLanguage1 = ["Hindi","English"]

let favouriteLanguage2 : any[]//any means iss array mein koi bhi type de sakte hai so its loose the powerfull of Typescript
 favouriteLanguage2 = ["Hindi","English", 21, true]//because of any its loose the power of Typescript
 //Toh Typescript use karne ka koi fayada hii nhi agar aap log any use kar rhe hoo toh 

 //Now dekhenge Type in Tuple
 const person1 : {
    name: string;
    age:number;
    skills:string[];
    //Tuple matlab fix length ki array of Types hoti hai
    product:[number, string]//toh array mein pehla element number hoga and doosra element string hoga
    //means fixed array of two types 0 -> number, 1 -> string
 } = {
    name: "patel",
    age: 23,
    skills: ["React", "Node"],
    product:[10, "Macbook M2"]
 }

 //person1.product[1] = 20 //ye error dega because product tuple k type mein 1 index par string hai aur hum 20 number se Replaace kar rhe hai toh error dega
//person1.product = [10, "Macbook M2", "Macbook M2"] //it is also a invalid


//Now dekhenge  enum mein Types
enum Role {ADMIN, AUTHOR, READ_USER_ONLY};//so enum tab use karte hai jab data ko dynamically dikhana hoo
const person3 = {
    name: "aman",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook air m2"],
    role: Role.ADMIN
}

if(person3.role === Role.AUTHOR){
    console.log("Author")
}else if(person3.role === Role.ADMIN){
    console.log("Admin")
}else if(person3.role === Role.READ_USER_ONLY){
    console.log("read user only ")
}