document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');
    const successMessage = document.getElementById('success-message');

    const inputs = [fullName, email, password, phone];

    // Regular expressions for validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Function to show/hide error messages
    const showError = (input, message) => {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.classList.add('invalid');
        input.classList.remove('valid');
    };

    const hideError = (input) => {
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.style.display = 'none';
        input.classList.remove('invalid');
        input.classList.add('valid');
    };

    // Validation functions
    const validateFullName = () => {
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full Name is required.');
            return false;
        }
        hideError(fullName);
        return true;
    };

    const validateEmail = () => {
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email.');
            return false;
        }
        hideError(email);
        return true;
    };

    const validatePassword = () => {
        if (!passwordRegex.test(password.value)) {
            showError(password, 'Password must be at least 8 characters long, and include a special character.');
            return false;
        }
        hideError(password);
        return true;
    };

    const validatePhone = () => {
        if (!phoneRegex.test(phone.value)) {
            showError(phone, 'Please enter a valid 10-digit phone number.');
            return false;
        }
        hideError(phone);
        return true;
    };

    // Add event listeners for real-time validation
    fullName.addEventListener('input', validateFullName);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    phone.addEventListener('input', validatePhone);

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Run all validations on submit
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPhoneValid = validatePhone();

        // Check if all fields are valid
        if (isFullNameValid && isEmailValid && isPasswordValid && isPhoneValid) {
            form.reset(); // Clear the form
            inputs.forEach(input => input.classList.remove('valid', 'invalid')); // Clear validation styles
            successMessage.style.display = 'block'; // Show success message
            
            // Hide success message after a few seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000); 
        } else {
            successMessage.style.display = 'none'; // Hide success message if validation fails
        }
    });
});