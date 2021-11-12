const claimButton = document.querySelector("button");

function validateForm(){
    let x = document.forms["fname"].value;
    if(x==""){
        alert("Name must be filled out");
        return;
    }
}