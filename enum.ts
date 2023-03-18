//// ENUMS


// CANDIDATE , HR_ADMIN, SUPER_ADMIN

enum  Role {CANDIDATE = 'C', HR_ADMIN= 'HD',SUPER_ADMIN='SA'}


let Person = {
    fname:"jhon",
    lname:"deo",
    email:"jhon@.com",
    role: Role.HR_ADMIN
}

if(Person.role=== Role.HR_ADMIN){
    console.log(`redirect to HR admin dashboard`);
    
}