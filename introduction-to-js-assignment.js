//Task 1:
// Write a JavaScript function that accepts a number 
// as a parameter and checks whether the number is positive 
// or not

function check(x){
    if (x>0)
        console.log(x+ " is postive");
    else if (x<0)
        console.log(x+" is negative");
    else 
        console.log("zero");
}

check(10);
check(0);
check(-4);

//Task 2:
// Write a JavaScript function to find the largest number in 
// an array given as the parameter. (Use arrow function).

var arr=[1,2,7,4,5];
const large =(arr)=>{
    max=0;
    for(i=0;i<arr.length;i++){
        if (max<arr[i]){
            max=arr[i];
        }
        }
        console.log("the largeset is " +max);
}
large(arr);

//Task 3:
// Write a program to find the area of a cylinder using 
// JavaScript objects (radius, height and the area
//function should be in the object). 
// (Area of a Cylinder= pi*r^2*h)

function calculateareacylinder(){
   return(3.14*this.radius*this.height);  
}

let cylinder={
    radius:20,
    height:50,
    area:calculateareacylinder
}
console.log("the  area cylinder is " +cylinder.area());

//Task 4:
// Write a program to find the area of a square and 
// a rectangle using JavaScript objects with a common 
// area function. (Use this keyword). 
// (Area of a Rectangle/Square = length * breadth)

function calculatearea(){
    return( this.Length*this.breadth);
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

console.log("the rectangle area is " +rect.area());
console.log("the square area is " +square.area());