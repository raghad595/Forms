document.getElementById("submitButton").addEventListener("click", Register);
function Register() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    document.getElementById("result").innerText = "Full Name: "+firstName+" "+middleName+" "+lastName;
};
