function authenticate() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const correctUsername = 'ak';
    const correctPassword = '123';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        window.location.href = 'ak.html'; 
    } else {
        // Change the background color to red for incorrect credentials
        document.body.style.backgroundColor = 'red';
        
        // Display the error message
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Incorrect username or password';
        messageElement.style.color = 'white'; // Change text color to be visible against red
    }
}
