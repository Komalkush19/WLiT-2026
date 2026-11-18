// let x=15;
// console.log(x);

// console.log(null== undefined)
// console.log(null=== undefined)
// hoisting

// var y=dosomthing()


// function dosomthing(){
// var x=15
// console.log(x);
// return x;
// }


// var  x=20
// console.log(x)

//unary operators
// for (i=0;i<10;i++){
//     console.log(i)
// }

// console.log("hello world");

// let grade =80;
// if(grade>=90){
//     console.log("grade: A");
// }
// else if(grade>=70){
//     console.log("grade: B");
// }
// else if(grade>=60){
//     console.log("grade: c");
// }

// let x=4;
// switch(x) {
//     case 1:
//         console.log("printed 1");
//         break;
//     case 2:
//         console.log("printed 2");
//         break;
//      case 3:
//         console.log("printed 3");
//         break;
//      default:
//         console.log("more than 3");
//         break;
    
// }

// function multiply(x,y){
//    // console.log(x*y);
//    return(x*y);
// }
// multiply(5,4)

// var x=()=>{console.log("this is using arrow function")}
// x();

// var dosomthing=()=>{console.log("this function  did something")}
// dosomthing();


// function check(x){
//     if (x>0)
//         console.log("postive");
//     else if (x<0)
//         console.log("negative");
//     else
//         console.log("zero");
// }

// check(2);

// }

// var x=[1,2,3,4,5];
// const large=(x)=>{ 
//     let y=0;
//     for(i=0;i<x.length;i++)
//     {
//         if(x[i]>y)
//         y=x[i];

//     }
//     console.log(y);
// }
// large(x)

//spread operator


//const multiply =(num)=>num* 10

// let person={
//     name:"komal",
//     age:"20",
//     isstudent:true
// };
//  person.gender="female";
//  console.log(person);


//  person.isstudent=false;
//  console.log(person)

function calculatearea(){
    console.log( this.Length*this.breadth)

}

let rect={
    Length:10,
    breadth:20,
    area:calculatearea
}

let square={
    Length:10,
    breadth:10,
    area:calculatearea

}

console.log(rect.area());
console.log(square.area());