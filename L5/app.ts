let userInput : unknown;
let userName : string;
let userInfo : any;

userInput = 10;//iske andar kuch bhi dataType ka value rakh skte hai like any
//iske andar kuch bhi dataType ka value rakh skte hai like any to unknown ka fayda hii kya hai 
//toh any hii rakh lo userInput mein userInput : unknown
userName = "aman"

//userName = userInput; //toh error aayega because of unknown dataType userInput ka isliye error aayega
userName = userInfo; //it is valid error nhi aayega because userInfo is any dataType
//so it is major difference between unknown and any
//toh any matlab kuch bhi kaun sa bhi dataType daalo aur unknown matlab tum kuch bhi nahi daale ye bhi ho skta hai

//so iske liye userName = userInput; we have to give condition
if(typeof userInput === "string"){
    userName = userInput;
}

//Now function mein humne return Type dekha tha toh function ka return type ek never bhi hota hai
//Now we will see the never return Type
function generateError(message: string, code : number): never{
    throw {message: message, statusCode: code}
    //toh ye toh patta hii nhi chal rha ki ye function kuch retturn kr rha hai ya message print kr rha h
    //so iss function ka return type humein pata nhi chal rha hai so issi ka return type never hota hai
    //so agar ye function kuch return nhi karta sirf message print krta to return type void likhte
    //but iss function mein throw krke aaraha hai means isko void nhi bol sakte aur nahi koi normal datatype jaise intt etc
    //toh iska return type never hota hai toh ye kuch return krta hii nhi
    //toh iss function mein return use nhi kar sakte hai because ismein throw use hua hai
    //toh jaise hii function mein throw ye line executte hoga toh poora function kill ho jayegga 
    //toh throw line jaise hii execute hoga poora fuiunction kill ho jayega matlab function terminate ho jayega yahin se niche jayega hii nhi  
}
const res = generateError("Internal server error", 500);
console.log(res);