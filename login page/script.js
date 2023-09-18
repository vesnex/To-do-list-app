var btn = document.querySelector("#btn")
var body = document.querySelector("#bg1")
var text = document.querySelector("#bg")

flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        body.style.backgroundColor = "black"
        text.style.color = "yellow"
        btn.style.color = "yellow"
        btn.style.backgroundColor = "black"
        flag = 1
    }
    else{
        body.style.backgroundColor = "#f3f4f6"
        text.style.color = "black"
        btn.style.backgroundColor = "#f3f4f6"
        btn.style.color = "black"
        btn.style.fontSize = "30px"
        flag = 0
    }

})
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const signupButton = document.getElementById('signupButton');

// Add an event listener to the "Sign Up" button
signupButton.addEventListener('click', function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
})
const username = document.getElementById('usernameSignup').value;
const password = document.getElementById('passwordSignup').value;
const confirmPassword = document.getElementById('confirmPasswordSignup').value;
const confirmButton = document.querySelector("#confirmButton");

confirmButton.addEventListener("click",function(){
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match. Please try again.");
    } else {
        alert("Your response is recorded. You can sign in now.");
        // You can add code here to handle the sign-up process and navigation to the login page.
    }
})
    

