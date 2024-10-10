document.getElementById('emailid').addEventListener('input', (e) => {
    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById('email-error');

    if (!emailformat.test(e.target.value)) {
    
        errorMessage.textContent = 'Please enter a valid email address.';
        e.target.style.borderColor = 'red'; // Add red border for invalid input
    } else {
      
        errorMessage.textContent = ''; // Clear the error message
        e.target.style.borderColor = 'green'; // Add green border for valid input
    }
});
document.getElementById('pass').addEventListener('input', (e) => {
    const errormsg = document.getElementById('pass-error');
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!passw.test(e.target.value)) {
     
        errormsg.textContent = 'Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        e.target.style.borderColor = 'red';
    } else {
     
        errormsg.textContent = '';
        e.target.style.borderColor = 'green';
    }
});