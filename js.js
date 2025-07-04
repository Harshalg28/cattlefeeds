// JavaScript for validating the form
function validateForm(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
 
    // Simple validation rules
    if (userId === 'admin' && password === 'asdf@123') {
     window.location.href = 'main.html';
    } else {
        errorMessage.style.color = 'red';
        errorMessage.innerText = 'Invalid User ID or Password!';
    }
 }
 