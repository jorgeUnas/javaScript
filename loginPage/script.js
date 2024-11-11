document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with your own logic)
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red';
    }
});