//////////// function return type


// function add(n1:number, n2:number) : number{
//     return  n1+ n2
// }

function combine( str1 , str2): string{
    return `${str1} ${str2}`
}


function  add2(n1:number, n2:number): void  {
    console.log(n1+n2);
    // return undefinded
}



function printObj() : {fname : string , lname:string}{
       
    return ({
        fname : "jhon",
        lname: "DEO",
       

    })
}



function added(n1, n2){
    return n1+n2
}

function subs(n1, n2){
 return n1-n2
}


function mul(n1,n2){
    return n1* n2
}



 