// Add your code here
function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify({name, email})
    })
    .then(res => res.json())
    .then(object => {document.body.textContent = object["id"];})
    .catch(error => {document.body.textContent = error.message})
}

// const configurationObject = {
// }


// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (object){
//         console.log(object);
//     })
//     .catch(function(error){
//         alert("Bad things!");
//         console.log(error.message)
//     })