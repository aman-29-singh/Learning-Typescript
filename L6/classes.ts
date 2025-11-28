// //console.log("this is a normal classes")
// /**Note -- humein alag alag karke ts k file ko compile karna padta hai like tsc file.ts aise karke
//  * toh jab hum bade project par kaam karenge toh udhar bohat saare ts k file honge aur unn sab 
//  * files ko aise ek ek karke manually compile karna possible nhi hai isliye isko avoid karne k liye
//  * ek hum package means ek hum file banayenge jo ki jitna poora TypeScript ki file hai jitni bhi
//  * woh sab Typescriprt ki files uss ek package ya file mein atttach rahega means and sab ts file ko
//  * ek saath mein compile karega so humein alag se tsc file.ts karne ki jarurat nhi padegi toh matlab 
//  * hum ek bundle banayenge aise samaj sakte hai so for this we have to run tsc --init ye likhne se
//  * ek tsconfig.json file bankar aajayegi phir hum terminal mein L6 k andar jab tsc --watch likhenge
//  * toh isse L6 folder k andar jitne bhi ts file hongi unn sab files ko ye compile kar dega
//  */

//Basic class
// class Department {
//     //classes have property i.e variable and methods i.e functions
//     name : string;
//     constructor(n : string){
//         this.name = n
//         /**so constructor kya hota hai aur constructor kab call hota hai jab hum iss Department class
//      * ka koi bhi ek naya instance banayenge you can say object banayenge means jaise hii object
//      * banayaenge iss class Department ka waise hii ye constructor call ho jayega and iss name mein jo bhi
//      * string chahiye because we had define type of name as string toh constructor n bhi string define karne 
//      * padega agar name mein constructor k parameter ki value chaiye toh 
//      */
    
//     }
//     describe(){
//         console.log("Department", this.name)
//     }
    
// }
// //now Department class ka hum ek naya object banayenge so object banayenge simply using new keyword
// const accounting = new Department("Accounting")//ye "Accounting" string chaiye for constructor k liye means constructor automatically call ho jayega
// accounting.describe()

// //now lets say muje ye jo maine naya object i.e accounting create kiya hai muje iska ek naya copy banana hai
// //toh iss accounting object ka copy kaise create karenge toh humlog simply ek variable accountingCopy mein copy karenge object accounting ko
// const accountingCopy = {
//     describe : accounting.describe
// }
// console.log(accountingCopy);
// accountingCopy.describe()//Department undefined aayega undefined isliye aayega because this koi name ko pint nhi kr paa rha
// /*so describe() function jo ki Department class ka hai toh ye describe() functtion Department class mein 
// this ko use karta tha toh Department class mein this ko name mil jata tha i.e this.name but jab humne 
// describe ko copy karke accountingCopy mein laye toh describe() function k this ko koi bhi name nhi mila
// in accountingCopy{} class mein isliye console mein Department undefined isliye aaraha hai undefined
// isliye aaraha hai because this ko koi bhi name nhi mila */



//private, public access modifiers learning
// class Department {
//     //classes have property i.e variable and methods i.e functions
//     //name : string; // ye by default public  hota hai
//     //private employee : string[] ;
//     constructor(public name : string,  private employee : string[] ){//shorthand
//         // this.name = n;//initialize the name with n intialize karna matlab value assign karna
//         // this.employee = []; //inittialize this employee with empty array
//     }
//     describe(){
//         console.log("Department", this.name)
//     }

//     addEmployee(emp: string){
//         this.employee.push(emp)//toh employee array mein emp ko store kar rhe hai means push kar rhe hai
//     }

//     printEmployeeInformation(){
//         console.log("Number of emp : ", this.employee.length)
//         console.log(this.employee);
//     }
    
// }
//now Department class ka hum ek naya object banayenge so object banayenge simply using new keyword
// const accounting = new Department("Accounting", [])//ye "Accounting" string chaiye for constructor k liye means constructor automatically call ho jayega
// accounting.describe()
// accounting.addEmployee("aman");
// accounting.addEmployee("aarav");
// accounting.printEmployeeInformation();
//accounting.employee = ["xyz"]
/*so here class Department k method employee ko hum yahan se access kr paa rhe hai ye nhi chaiye
so iske liye we use private access modifiers so fir here accounting.employee = ["xyz"] mein error
aayega i.e Property 'employee' is private and only accessible within class 'Department'.ye error aayega*/
//accounting.printEmployeeInformation();

//issi tarah se humare pass ek aur access modifier hotta hai ReadOnly
//read only access modifier
// class Department {
//     public name : string;
//     private employee : string[];
//     private readonly id : string;//so readonly wale ko hum sirf ek hii baar initialize kr saktte hai id ko
//         constructor(n : string){//shorthand
//         this.name = n;
//         this.id = "d1";//only once you can initialize so idhar id ko intialize kar diya
//         this.employee = [];
//     }
//     describe(){
//         //this.id = "d2";//error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
//         //error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
//         console.log("Department", this.name)
//     }

//     addEmployee(emp: string){
//         this.employee.push(emp)//toh employee array mein emp ko store kar rhe hai means push kar rhe hai
//     }

//     printEmployeeInformation(){
//         console.log("Number of emp : ", this.employee.length)
//         console.log(this.employee);
//     }
    
// }


//Now we will see the Inheritance
/**so inheritance means ye jo class  hai Department iski properties  anf methods ko hum doosre
 * class mein leke jaa sktte hai inherit kar sakte hai toh yahi hota haai humara inheritance
 */
class Department {
    public name : string;
    protected employee : string[];
    private readonly id : string;//so readonly wale ko hum sirf ek hii baar initialize kr saktte hai id ko
        constructor(id: string, n : string){//shorthand
        this.name = n;
        this.id = id;//only once you can initialize so idhar id ko intialize kar diya
        this.employee = [];
    }
    describe(){
        //this.id = "d2";//error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
        //error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
        console.log(`Department ${this.id} and ${this.name}`)
    }

    addEmployee(emp: string){
        this.employee.push(emp)//toh employee array mein emp ko store kar rhe hai means push kar rhe hai
    }

    printEmployeeInformation(){
        console.log("Number of emp : ", this.employee.length)
        console.log(this.employee);
    }
    
}

class AccountingDepartment extends Department {
    /**toh ye jo AccountingDepartment hai iske andar ye jo Department class k jitne  bhi methods ya properties
     * hai jaise name,employee,id,constructor,describe, addEmployee,printEmployeeInformation ye saari 
     * property metthods iss AccountingDepartment class k andar aagaye hai kyunki humne extends kar liya
     * Department class ki jo bhi properties and methods thee unko extend kar liya AccountingDepartment class mein
     *so ye Department class ki kjitni bhi propertties and methods hai ye iss AccountingDepartment ne
     access kar liya with the help of inheritance i.e extends Department
     now humm ye AccountingDepartment ka  khudka bhi properties  and methods define krenge 
       */
    //   reports: string[] = [];//we intialize this array of string
    constructor(id: string , private reports: string[] ){
    /**ye jo constructor humne banaya tha upar so ye constructor humne iss class AccountingDepartment
     * ka banaya tha isko humne call kar diya in object accDep("d1",[]) se but jo base class
     * means jo Department class hai toh iss Department class ka constructor toh humne  call hii nhi 
     * kiya hai so iss Department class k  constructor ko call karne  k liye we have a super keyword
     * super() toh aise jab bhi hum  super() keyword call krte hai toh ye kya karta hai jo bhi apna 
     * parent class means jo bhi apna base class jaise Department apna parent  class hogya toh ye jo
     * parent class ka constructor  hua usko  call krta hai apna super() keyword toh jaise humare
     * parent  Department class ka  constructor k parameter mein constructor(id: string, n : string)
     * pass ho  rha tha waise  hii agar humein super k through parent class Department k constructor
     * ko call karna hai so we will use super key wor aur super() keyword mein argument mein hum
     * parent class Department k paramenter i.e constructor(id: string, n : string) k jaise
     * pass karenge argument 
     */
    super(id, "Accounting");
    }
    //now iss class ka methods banayenge
    addReports(text : string){
        this.reports.push(text);
    }
    printReports(){
        console.log(this.reports);
        
    }

    //now will see the Override properties & protected access modifier
    // so addEmployee() method ko override krenge jo ki same hai in Department class
    addEmployee(emp: string): void{
        if(emp === "patel"){
            return;//means agar emp patel hua toh return ho jana
        }
        //this.employee.push(emp)
        // error dega Property 'employee' is private and only accessible within class 'Department'
        //so employee property Department class ka private hai isliye error dega so iske liye
        //humlog employee property of class Department ko protected krenge so it can access in our this AccountingDepartment class
        this.employee.push(emp)//so abb error nhi dega bcuz humne employee property ko protected kr diya from private se in Departtment class
        /**so addEmployee() jo method tha huamara in Department class k andar ye bhi abb Override hogya hai */
    }

    //Now we will see what is setter and getter method 
    //iske andar getter and setter banayenge to getter banane k liye we have a keyword get
    get getReports(){//ye hogya getter method get krne k liye
        if(this.reports.length > 0){
            return this.reports;
        }
        throw new Error("Report not found")
    }

    //now setter method banayenge using keyword set
    set setReports(value : string){
        if(!value){
            throw new Error("Please pass valid value")
        }
        this.reports.push(value);
    }

}

const accDep = new AccountingDepartment("d1", [])
/*mere ko ye value Accounting pass krni hai because of contructor in base 
 class Department of AccountingDepartment means humne ye object banaya accDep ye object banaya
 AccountingDepartment ka toh ismein argument pass kiye ("Accounting") ka but AccounttingDepartment
 toh poori empty hai phir humne  argument kyu pass kiya because ye AccountingDepartment extends the
 properties and methods of its base  class Department aur Department mein we have constructor(n: string*)
 so we have to pass the string argument in AccountingDepartment("Accounting")  */
 //accDep.describe();
 accDep.addReports("Bugs");
 // accDep.printReports();

 accDep.addEmployee("patel");
 accDep.printEmployeeInformation()
 /*so ye patel add hii nhi hoaga bcuz humne condition daala h in class AccountingDepartment mein
  addEmployee() function k andar aur iss addEmployee() function ko overRide kiya h*/ 

 accDep.addEmployee("abhay");//ye print  hoga bcuz we Override the addEmployee() function in class AccountingDepartment 
 accDep.printEmployeeInformation()

 //now iske use karne ka tarika thoda sa alag hota hai setter & getter
 accDep.getReports//so iss getter methods ko call karne ki jarurat nhi padti inhe  sirf aise hii likh skte h
 console.log("getter -> ",accDep.getReports) //aise getter -> ['Bugs'] aayega
//now setter methods ka dekhenge
accDep.setReports = "code review error"
console.log("getter -> ",accDep.getReports)//result aayega getter ->  (2) ['Bugs', 'code review error'] aisa aayega

//Now  humlog static methods dekhenge
class Department2 {
    public name : string;
    protected employee : string[];
    private readonly id : string;//so readonly wale ko hum sirf ek hii baar initialize kr saktte hai id ko
        constructor(id: string, n : string){//shorthand
        this.name = n;
        this.id = id;//only once you can initialize so idhar id ko intialize kar diya
        this.employee = [];
    }
    describe(){
        //this.id = "d2";//error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
        //error dega because ye ek baar intialize hoo chuka h Cannot assign to 'id' because it is a read-only property.
        console.log(`Department2 ${this.id} and ${this.name}`)
    }

    addEmployee(emp: string){
        this.employee.push(emp)//toh employee array mein emp ko store kar rhe hai means push kar rhe hai
    }

    printEmployeeInformation(){
        console.log("Number of emp : ", this.employee.length)
        console.log(this.employee);
    }

    //now static ka dekhenge
    static getSalary(){//toh ye method simple return kar rha  hai ek object jismein salary hai 5lakh
        return {salary : 500000}
    }
    //Note static method ko hum directly access kar sakte hai yah
    
}
/*Note static method ko hum directly access kar sakte hai yahan par object banane ki jarurat nhi
//  padti h jaise pehle hum new keyword ka use karke object banate thee class ka phir then uss object
// k through access karte thee kisi bhi method ko lekin yahan par jo bhi method humara static hota hai 
// usse hai hum ye jo huamara Department2 naam ka class hai usko hii use karke iss static method ko
// directly access kar sakte hai means object mein new  banane ki koi  jarurat nhi */
const salary = Department2.getSalary()//so here humne new keyword ka use nhi kiya 
//toh yahan par new keyword ka use nhi kiya means hum object k through nhi balki class k through access karenge static method ko
console.log(salary)//toh salary 500000 aajayega
//toh static access karne k liye humein ek naya object new karke karne ki jarurat nhi hoti
//sttatic ko hum directly class k through bhi  access  kar sakte hai 
//so without creating object we can access static method by its class name


//Now we will see the abstarct classes
/**so abstarct classes ka matlab hota hai ki bhai koi  aisa  method  i mean koi aisa function jiski
 * sirf declaration hoti hai uska implementation nhi hota hai so declaration ka matlab hota hai
 * ek function ko tum declare  kaise krte hoo like hum Declaration3 class k andar aise declare 
 * karenge function ko uising abstarct  keyword
 * abstarct describe(this: Department3) : void aur class Department3 bhi abstarctt hoga 
 * abstract class Department3 means abstract class mein hii abstract function hoga i.e abstract  describe()
 * so absttarction kya hotta hai ki koi bhi method ya koi bhi function jiska sirf declaration hota hai 
 * par uska implementation nhi hota hai toh usse abstaction bolte  toh 
 * iska implementaion  abstarcat describe(this: Department3): void iska implentation iske subclass mein hoga
 * i.e class Subclass extends Department {iske andar implementation hoga abstract describe ka implementation
 * hoga  }  
 */

abstract class Department3 {
    public name : string;
    protected employee : string[]= [];
    protected readonly id : string;

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    abstract describe(this: Department3): void;//so it is abstract function idhar bas declartion hua h
    //aur iska abstract describe() ka implementation Department3 k subClass  mein hoga
    //now ek aur abstract functtion ka declaration karenge
    abstract displayName(): void;
}

class Subclass extends Department3{
    constructor(id: string, private reports : string[]){
        super(id, "Accounting");//ye isse Department3 ka constructor iss super keyword  se hii call hoga 
    }
    /**Non-abstract class 'Subclass' does not implement inherited abstract member describe
     *  from class 'Department3'.ts(2515) aisa error aaraha tha
     * so abstract describe() function ko Department3 mein declare kiye hai toh abb iss class mein humein
     * iss describe() function ka implementation karna hai   */
    describe(): void {//so idhar abstract describe function ka humne implementation kr diya yahan pr
        console.log("Department", this.id)
    }
    displayName(): void {//idhar ek  aur  abstract function ka implmentation kiye
        console.log(this.name)
    }
}
//now ye Subclass() ka object bana lete hai
const subClass = new Subclass("D1", []);
subClass.describe();//means object k through describe() function ko call kiye