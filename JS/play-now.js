function reset() {
    document.getElementById("nickname").value = ""
    document.getElementsByName("gender").checked = false
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("checkbox").checked = false
}

function validate() {
    var nick = document.getElementById("nickname").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("password").value
    var checkbox = document.getElementById("checkbox").checked

    var gender
    if(document.getElementById("Male").checked) gender = "Male"
    else if(document.getElementById("Female").checked) gender = "Female"
    else gender = ""

    if(nick == "") {
        alert("Nickname must be filled!")
        return false
    }
    else if(nick.includes(" ")) {
        alert("Nickname must not contain SPACE!")
        reset()
        return false
    }

    if(gender == "") {
        alert("Gender must be choosen!")
        reset()
        return false
    }

    if(email == "") {
        alert("Email must be filled!")
        reset()
        return false
    }
    else if(email.startsWith(".") || !email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".co.id"))) {
        alert("Email is not valid!")
        reset()
        return false
    }

    if(password == "") {
        alert("Password must be filled!")
        reset()
        return false
    }
    else if(password.length < 5) {
        alert("Pass must be more than 4 character!!")
        reset()
        return false
    }

    if(!checkbox) {
        alert("You must agree with terms and conditions!")
        reset()
        return false
    }

    alert("Register Successfully!\nReturning to the Home Screen..")
    return true
}