const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log("logging clicked");
  
    if (email && password) {
        console.log("logging in:", email, password);
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name-signup').value.trim();
  const lastName = document.querySelector('#last-name-signup').value.trim();
  const officeStarter = document.querySelector('#office-signup').value.trim();
  const office = parseInt(officeStarter);
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && email && password && office) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, office }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('login-btn').addEventListener('click', loginFormHandler);

document.getElementById('newLogin').addEventListener('click', signupFormHandler);

