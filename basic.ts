 
let cl = console.log;
 
  
const num1= document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const btn  = document.getElementById("btn")!;
const result = document.getElementById("result")!;


function add(n1:number,n2:number){
    return n1+n2
}


btn.addEventListener("click", function(){
       console.log(add(+num1.value, +num2.value));
       result.innerHTML = "" + add(+num1.value, +num2.value)
}); 



let  x :number = 10;

let y :any;

y = "this is method";

y= 30;


////////////



interface  Iperson{
    fname:"omkar",
    lname:"kakde",
    age:26
}



let p1:Iperson ={
    fname: "omkar",
    lname: "kakde",
    age: 26
}


interface Iperson2 {
  
    fname:string,
    lname:string,
    age:number,
    email:string,
    contact:number,
    skills: string[],
    hobbies:string[]
}


let p2: Iperson2= {
     fname:"omkar",
     lname:"kakde",
     age :27,
     email:"omkaer@lskdls",
     contact:2288552455,
     skills:["HTML","CSS", "JS","TS"],
     hobbies:["coding","cricket","chess"]

}


/////////////////////
//  Infernce 
// if we declared a property  and assign a value to it 
// TS will assign  a datatype  to the dclr 

let z =10 ;

let w : number = 200;



let p : number = 100;


///////////////////////////////////

function adding(n1:number,n2:number , showresult:boolean, phares : string){
    if(showresult === true){
        let result = phares + n1 + n2;
           cl(result)
    } else{
        return n1 + n2
    }  
}

//  cl(adding(200,300,true));


let r = adding(200,600, true, "the addition is ");
cl(r);







/////////////////




















