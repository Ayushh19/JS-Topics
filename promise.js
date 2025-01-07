function async1 () {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      console.log("message 1");
      resolve("success");
    },3000);
  });
}
function async2 () {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      console.log("message 2");
      resolve("success");
    },3000);
  });
}

console.log("Getting Message One")
let p1 = async1();
p1.then((res)=>{
  console.log(res);
  console.log("Getting Message two")
  let p2 = async2();
  p2.then((res)=>{
   console.log(res);
  });
})