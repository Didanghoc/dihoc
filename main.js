function validateForm(){
    let x = document.getElementById("Name").value;
    let y = document.getElementById("Email").value;
    let z = document.getElementById("Message").value;
    if (x== "" || y== ""|| z== ""){
        alert("form must be filled out");
        return false;
    }

}