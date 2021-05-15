function matchPassword() {
    let pw1 = document.getElementById("pwd");
    let pw2 = document.getElementById("pwd2");
    if (pw1 != pw2) {
        alert("Passwords did not match");
    } else {
        alert("Password created successfully");
    }
}

function verifyPassword() {
    let pw = document.getElementById("pwd").value;
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
};