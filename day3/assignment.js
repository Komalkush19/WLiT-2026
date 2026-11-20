console.log("1");
setTimeout(()=>console.log("20"),0);
Promise.resolve().then(()=>console.log("3"));
console.log("4");
