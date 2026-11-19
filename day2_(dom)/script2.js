 // DOM Manipulation
// // updating Elements

const title = document.querySelector("#heading");
//console.log(title);
title.style.color = "red";
title.textContent = "Things WEEEE like to do";
console.log(title);

const items = document.querySelectorAll(".item-list");

console.log(items);


// approach1
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
//   items[i].style.color = "blue";
//  }

//approach 2
items.forEach((item) => {
  item.style.fontWeight = "normal";
});