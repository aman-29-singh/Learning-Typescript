//1. Type Guards
// what is  type Guards and what is need of type Guards
type Combinable = string | number;//here we define custom types i.e Combinable
type Numeric = number | boolean;

/**In TypeScript | -> symbol is called union in Typescript and this &-> symbol is called interSection
 * in TypeScript
 */
type universal = Combinable & Numeric;
/*so universal mein jo Combinable Type mein hai woh toh hona hii chaiye 
 saath mein jo bhi Numeric Type mein h woh bhi hona chaiye because of intersection & */
//toh abb universal ek type bann chuka hai

function add(a: Combinable, b: Combinable) {
    //return a + b
    //Operator '+' cannot be applied to types 'Combinable' and 'Combinable'. aisa error dega
    /**so ye jo function mein a : Combinable hai n ye custom type hai jo humne above define kiya hai
     * toh ye Combinable ye string bhi ho skta  ya toh number bhi ho skta hai so agar lets suppose 
     * ye a : Combinable hua tab toh ye return a + b aisa add ho sktta hai but agar a : Combinable so
     * agar ye a string hua toh ye directly  aise add nhi ho skta i.e return a+b aise nhi hoga bcoz
     * ye a , b Combinable k string hai isliye becauase above we define this Combinable type
     * type Combinable = string | number; aise define kiye 
     */
    //so yahin par use aatta hai Type Guard ka so add Type Guard
    //so ye Type Guard humara jo simple javascript hota hai n wahi h ye Type Guard
    if (typeof a === 'string' || typeof b === "string") {
        /**so we konow above mein humne type Combinable ko define kiya hai 
         * i.e type Combinable = string | number; so ye type Combinable ya toh string ho skta hai
         * ya toh number ho skta hai toh agar ye Combinable  string hua toh iske liye  humlog 
         * Type Guard ka use karenge toh yahi yeh condition hai 
           */
        /**so function add(a,b) k a,b mein se koi ek bhi parameter agar string hua toh ye
         * wala return a.toString() + b.toString(); Type Guard chalega means niche jana hii nhi hai
         * so yahi  Type Guard ka use hota  hai
          */
        return a.toString() + b.toString();//so aise type Guard humne add kar diya
        /*so function add(a: Combinable, b: Combinable) mein agar koi ek bhi parameter
        from a ,b mein se koi ek bhi parameter string hua toh hum ye wala
        if(typeof a === 'string' || typeof b === "string") type Guard use karenge
         */
    }//toh ye ek type Guard hua 
    /**ye upar jo humne Type Guard lagaya n ye Type Guard ek tarike ka nahi hota means ye dikhne mein
     * same tarike ka nhi hota aur alag alag Type Guards bhi ho skte hai toh woh jo alag alag tarike
     * k Type Guards hote hai n  usko hum niche dekhenge baad mein
     */

    return a + b;
}
console.log(add(20, 40))
//so Type  Guard ki wajah se agar function add() mein string pass karenge toh usko bhi handle kar lega
console.log(add(40, "40")) //so string pass kiye "40" toh 4040  aayega

//Now  ek aur problem se Type Guard dekhenge 
//2
type Admin = {
    name: string;
    privilages: string[]; //array of string
}
type Employee = {
    name: string;
    startDate: Date;
    /**toh ye Date ye humara TypeScript ka hii ek Type hota hai jo ki humara javascript ka new date()
     * hota hai n toh woh jo new date() return krta hai jo time return krta hai uska type ye Date hota
     * hai 
     */
}
type ElevatedEmployee = Admin & Employee//so intersection & se ismein dono type hona chaiye means Admin & Employee
type UnknownEmployee = Employee | Admin;//yahan union | ka use kiye

const emp1: ElevatedEmployee = {//ye object create kiye of type ElevatedEmployee
    name: "patelMernStack",
    privilages: ["create-server"],
    startDate: new Date(),
}
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name :", emp.name)

    /**Property 'privilages' does not exist on type 'UnknownEmployee'.
    Property 'privilages' does not exist on type 'Employee'. ye error dega means humne type 
    define kiya hai i.e type UnknownEmployee = Employee | Admin; aise define kiya h type
    toh UnknownEmployee ye inka union mhai Employee | Admin means ye ya toh Employee ho skta hai
    ya toh Admin bhi ho skta hai toh agar UnknownEmployee  ye Employee hua toh Employee k andar name and startDate
    hai so hum name and startDate ko access kar skte hai lekin agar ye UnknownEmployee ye Employee nhi hota
    agar ye sirf Admin hota toh hum sirf iss UnknownEmployee se Admin k andar se sirf name and privilages
    ko access kar sktte hai  
   */
    //console.log("Priviliges : ", emp.privilages)
    /**so idhar jab hum emp.privilages krtte hai toh idhar ye sure nhi hai ki ye jo emp hai ye kahan se
     * aaraha hai means ye sure nhi hai ki ye emp ye Employee | Admin means ye emp kahan se aaraha hai
     * ki ye emp ye Employee se aaraha hai ya Admin se aaraha hai toh ye iss emp ko pata hii nhi hai
     * kyunki agar ye emp agar Employee se aaraha hoga tab ttoh Employee mein toh privilages toh hai hii nhi
     * tog agar koi chiz hai hii nhi toh uska .privilages nikalenge toh error hii aayge i.e emp.privilages
     * aur agar ye emp.privilages agar ye privilages ye type Admin se aaraha hoga tab toh sahi hai means
     * tab toh emp.privilages ye print hona chaiye lekin idhar (emp : UnknownEmployee) ye UnknownEmployee
     * ye UnknownEmployee ko pata hii nhi hai ki ye type Employee hai ya Admin hai ye iss UnknownEmployee ko
     * pata hii nhi hai so isliye console.log("Priviliges : ", emp.privilages) idhar error show ho rha h
     * so iss kcase mein iss scenario mein Type Guard use karte hai simple
     * so we gonna use Type Guard
     */
    //add Type Guard
    /*   if(typeof emp === "object"){//ye wrong code hai 
    //     console.log(emp.privilages)
    //     so here typeof emp === "object" so ye object kuch bhi ho skta hai like empty{} object etc
    //     aise kuch bhi object ho skta hai so that's whuy it is wrong code 
       } */

    //Now javascript mein IN keyword hota hai i.e in means use in keyword that build in javascript
    //toh javascript mein ek in keyword built kiya gya hai jiska use krke hum bohatt easily Type Guard add kr skte h
    if ('privilages' in emp) {
        /**so humne check laga diya ki ye condition ttabhi chalegi jab iss emp k andar "privilages" hogi
         * aur iss emp k andar "privilages" kab hoga jab iss emp: UnknownEmployee means jab ye UnknownEmployee
         * ka type Admin hoga because Admin k andar privilages hai so iss tarah se Type Guard add kr skte hai 
         
         */


        console.log(emp.privilages);

    }
    /* toh ye hogya privilages k liye abb maan lo muje emp.startDate bhi chaiye toh iske liye bhi hum 
    condition add kr sakte hai */
    if('startDate' in emp){
        console.log(emp.startDate)
    }
}
printEmployeeInformation(emp1);//here emp1 is object jo upar define kiye hai
printEmployeeInformation({name: "Aman", startDate: new Date()});
//toh abhi toh Type Guards ko function k saath dekha 

//Now abb hum Type Guards ko class k saath dekhenge 
//Type Guards in class
class Car{
    drive(){
        console.log("Driving a car")
    }
}
class Truck{
    drive(){
        console.log("Driving a truck...")
    }
    loadCargo(amount : number){
        console.log("Loading cargo...", amount)
    }
}

type Vechile = Car | Truck;

//Now object banayenge
const v1 = new Car();
const v2 = new Truck();

function useVechile(vechile : Vechile){
    vechile.drive();
    //vechile.loadCargo(500)
    /**here ye error de raha hai iske liye vechile.loadCargo(500) because function useVechile(vechile: Vechile)
     * so here function useVechile() mein  Vechile ko pata hii nhi hai ki  type Vechile = Car | Truck; ki
     * Vechile iska type kya hai means Vechile ko pata hii nhi hai ki ye Car hai ya Truck hai so
     * function useVechile(vechile: Vechile) mein ye vechile ko pata hii nhi hai ki vechile ye Car hai ya Truck
     * hai bas itna pata hai ki ye vechile ya Toh Car hoga ya Truck hoga so agar ye vechile Truck hoga
     * tabhi function useVechile(){mein vechile.loadCargo(500) exist krega }
     * but here function useVechile(vechile: Vechile) mein ye vechile sure hii nhi hai ki ye vechile 
     * Car hai ya Truck agar Truck hoga tabhi ye vechile.loadCargo(500) exist karega  so isliye 
     * hum yahan par vechile.loadCargo(500) ko aise directly call nhi kar sakte hai 
     * so hum yahan par use karenge Type Guard ka 
     */
    //so use Type Guard
    if('loadCargo' in vechile){//so here we had use IN keyword
        /**so agar vechile mein 'loadCargo' hota hai ttabhi hum samaj jayenge ki vechile ye Truck ko
         * point kar rha hai means vechile mein Truck hai agar vechile mein loadCargo hoga i.e
         * if('loadCargo' in vechile) 
        */
       vechile.loadCargo(500)
    }
    //ek aur tarika hota hai instanceof keyword ka use krke
    /**if(vechile instanceof Truck) so instanceof ka matlab hota hai object means agar vechile ye object
     * hua Truck ka i.e agar ye vechile ye object hua Truck ka so yahi mattlab hai instanceof 
     * i.e means agar ye vechile jo hai ye  object hoga iss Truck class ka matlab ye jo Truck class hai
     * iska object vechile hoga toh hum samja jayenge ki acha Truck class ka object banaya hai vechile
     * toh iss Truck class mein loadCargo() hai  
     */
    if(vechile instanceof Truck){
        vechile.loadCargo(7999)
        /**so ye  bhi same hai iske jaisa if('loadCargo' in vechile) same work krega  */
    }
}
//now function ko call arenge aur iss function mein object ko pass krenge
useVechile(v1);
useVechile(v2);


//Now dekhenge -- type casting/ type assertion
//const userInput = document.getElementById('user-input');
/*so typescript ye inference kar rha hai-> const userInput: HTMLElement | null
so TypeScript ye inference kr rha hai const userInput: HTMLElement | null so inference krna matlab
TypeScript ye anumaan lag rha hai ki ye userInput ya toh HTMLElement hoga ya toh null hoga aisa 
TypeScript Anumaan lga rha hai humne index.html mein se 'user-input  ko fetch kiya hai using 
document.getElementById('user-input') to TypeScript jo infered kr rha hai toh ye const userInput
ye null toh hoo hii nhi skta because null tab hoga jab in index.html mein 
ye exist hii nhi krega <input type="text" id="user-input"> aur ismein humm iss id="user-input"
ko access krne ki koshish kr rhe hai but ye toh <input type="text" id="user-input"> exist kar
rha hai toh null hoo hii nhi skta toh iss case mein hum kya krenge toh hum ! ka use krenge
const userInput = document.getElementById('user-input')! aise ! lagane ka matlab hai
ki hum sure hai ki ye jo input field hai  ye null nhi hai toh jo inference humein ye Typescript
de rha hai toh iss inference mein ye jo null de rha hai ye wrong hai toh ye ! exclamatory dene
se Typescript ye inference mein se null hatta dega means abb jo Type scriptt humein inference 
dega usmein ye null nhi aaye sirf HTML element aayega
 */
//const userInput = document.getElementById('user-input')!//aise  ! laga diye const userInput: HTMLElement so here inference mein null nhi aayega
/*now here above ye userInput mein value ka access nhi hai means userInput.value nhi hai
so iske liye  */
//userInput.value = "hii  tthere is aman"
/**Property 'value' does not exist on type 'HTMLElement'. so aisa error aaraha hai 
 * so  abb yahin par  kaam aata hai TypeCasting/Type assertion  ka  so iske liye we added
 * <HTMLINPUTELEMENT>
 */
const userInput = <HTMLInputElement> document.getElementById('user-input')!
userInput.value = "hii tthere is aman " //toh abb aajayega browser k input mein ye value
//so ye toh ek trika tha type assertion ya type casting ka 

//now doosra tarika dekhte  hai typecasting ka without using <HTMLInputElement>
//matlab end mein HTMLInputElement> ka use krenga
const productInput =  document.getElementById('product-input')! as HTMLInputElement;
//so here humne productInput ka type casting kiye using as HTMLInputElement keyword
//so yeh doosra tarika hai type-casting ya type-assertion ka 
productInput.value = "cricket products from mumbai"

