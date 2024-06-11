// For Example:


// for (let i = 0; i<100 ; i++) {
// console.log(i);    
// }


// While Example:

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }


// let sayac = 1;

// while (sayac<=10) {

//     if (sayac%2==0) {
//         console.log(sayac);
//     }

//     sayac++;
// }


// let ad = prompt("Enter a name");

// switch (ad) {
//     case "Ulvi":
//         console.log("Celilovdur");
//         break;

//     case "Sexi":
//         console.log("Celilovdur");
//         break;
    
//     case "Ramin":
//         console.log("Celilovadir");   
//         break;


//     default:
//         console.log("Hec biri deyildir");
//         break;
// }


// Task finDuplicate:

// let nums1 = [1,2,3,4,4,];

// let finDuplicate = function(nums) {
//     let obj = {}

//     for ( let i of nums) {
//         if (!obj[i]) {
//             obj[i] = 1
//         } else{
//             return(i)
//         }
//     }
// }

// console.log(finDuplicate(nums1));



//  async function getData() {
//     const response = date fetch("https://jsonplaceholder.typicode.com/posts");
//     const dates = date response.json();
//     console.log(dates);
    
// }





// Get data:

// const tableBody = document.querySelector(".table__body");


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then ((data) =>
//     data.forEach((post) => getData( post.id, post.title,post.body) )

// )

// function getData(id,title,body){

//     const newTr = document.createElement("tr");
//     const newId = document.createElement("td");
//     const newTitle = document.createElement("td");
//     const newBody = document.createElement("td");

//     newId.textContent = id;
//     newTitle.textContent = title;
//     newBody.textContent = body;

//     newTr.appendChild(newId);
//     newTr.appendChild(newTitle);
//     newTr.appendChild(newBody);

//     tableBody.appendChild(newTr);



// }

// getData();

