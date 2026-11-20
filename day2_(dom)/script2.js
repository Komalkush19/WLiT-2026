const ul = document.querySelector("ul");
console.log(ul);

// const li = document.querySelector("li");
// console.log(li);

const li = document.createElement("li");
console.log(li);

ul.append(li);
li.innerText="texting";
li.setAttribute("id","heading"); 
li.remove("id")
