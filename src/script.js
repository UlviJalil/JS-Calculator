// let tableBody = document.querySelector("tbody")

// fetch("http://localhost:8080/invoices")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);

// })

// let btn = document.querySelector("#btn");

// let count = 0;

// btn.addEventListener("click",()=>{
//     count++
//     console.log(count)
// })


// let today = new Date();
// console.log(today.getHours())
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getDay());
// console.log(today.getMonth());
// console.log(today.getFullYear());


// document.querySelector("button").addEventListener("click",()=>{
//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(response=>response.json())
//    .then(json=>console.log(json))
//    .catch(err=>console.log(err))
// });

// let obj = {
//    address:{
//       city:"salam",
//       address:"h2",
//       country:"baku"
//    },
//    surname:"Surname"
// }

// console.log(obj.address.city);


// const tbody = document.querySelector("#tbody")

// fetch('https://northwind.vercel.app/api/suppliers')
// .then(response=>response.json())
// .then(data=> data.map((item) => {
//    console.log(item);
//    tbody.innerHTML += `
//         <tr>
//             <td>${item.id}</td>
//             <td>${item.companyName}</td>
//             <td>${item.contactName}</td>
//             <td>${item.contactTitle}</td>
//             <td>${item.address.street}</td>
//             <td>${item.address.city}</td>
//             <td>${item.address.country}</td>

//         </tr>
//    `
// }))
// .catch(err=>console.log(err))





// Function Declaration:

// function sayHi() {
//    console.log("Salam Ulvi bey","Ve Nicat bey","Necesiz");
// }

// sayHi();


// Function Expression:

// const sayBye = function() {

//    console.log("Bye");
   
// }

// sayBye();


// function say(ulvi) {
//    console.log(ulvi);
// }

// say("log1");
// say("log2");
// say("log3");
// say("log4");
// say("log5");

// function multiply(a,b) {
//    if (a>10) {
//       return ("This is hard!");
//    }
//   return a*b
// }

// multiply(2,4);

// let name = "Tahir"
// let surname = "Jalil"

// if (!(name === "Ulvi") && surname === "Jalil" ) {
//    alert("Hi Ulvi Jalil")
// }else{
//    alert("I don't know you")
// }


// let point = prompt("Enter your point");

// if (point>50) {
// alert("Sen qebul olundun")
// }else{
//    alert("Sen qebul olunmadin")
// }


function calculate() {
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    
    let operation = document.getElementById("check").value;

    if (operation == '+') {
     document.getElementById("resulti").value = num1 + num2;

    }else if (operation == '-') {
        document.getElementById("resulti").value = num1 - num2;
        
    }else if (operation == '*') {
        document.getElementById("resulti").value = num1 * num2;
        
    }else if (operation == "/") {
        document.getElementById("resulti").value = num1 / num2;
        
    }
}

calculate();