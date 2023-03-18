let cl = console.log;


/// userRole >> userRoleNumber >> CAN_SEE_OTHER_CANDIDATE >> CAN_SEE_OTHER_COMP_JOBS >> CAN_SEE_BOTH
/// candidate  >> 1 >> false >> true >> false
// Admin  >> 2 >> true >> flase >> false
/// SuperAdmin >> 3 >> true >> true >> true 


type Tperson ={
    fname: string,
    lname:string,
    age:number,
    hobbies: string[],
    skills:string[]
    nickName?:string

}

  interface Iperson {
    fname: string;
    lname:string;
    age:number;
    hobbies: string[];
    skills:string[];
    nickName?:string;
    role : [number , string]//// tuple / array of fixed length

  }

    
//   class  Person {
//     fname: string;
//     lname:string;
//     age:number;
//     hobbies: string[];
//     skills:string[];
//     nickName?:string;

//   }
  

   let person: Iperson ={
    fname:"jhon",
    lname:"deo",
    age: 30,
    hobbies:["Cricket","coding","chess"],
    skills:["javscript","typesript","Angular"],
    role : [1,"canread"]
}

person.role.push(123);

console.log(person.role);


let hobbies: string[]= ["Cricket","coding","chess"];

for( let hobby of hobbies){
    console.log(hobby.toLocaleLowerCase());
    
}

hobbies.push("100")

person.nickName = "jd";
cl(person.nickName);
