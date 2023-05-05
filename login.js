
function valForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please enter your email and password.");
        return false;
    } else{
        alert("Submit Successful!")
    }
}