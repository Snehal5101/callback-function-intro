// function present(){
// const myPromise = new Promise(() =>{
//     resolve(document.getElementById("resolvename").innerHTML);
// })
// myPromise.then((value) =>{
//     document.getElementById("presentname").innerHTML=value;

// }).catch((err) =>{
//     console.log("err");
// })
// }

// const myPromise = new Promise(() =>{
//     resolve("Student is present");
// });
// myPromise.then((value) =>{
//     document.getElementById("presentname").innerHTML=value;

// }).catch((err) =>{ console.log("err");})

function popup() {
    setTimeout(function(){
        alert("Welcome To My Site");
    },5000);
}