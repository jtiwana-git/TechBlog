const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      console.log(username, password)
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

 

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);