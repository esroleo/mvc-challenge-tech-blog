async function signupFormHandler(event) {
  event.preventDefault();
  console.log("button clicked")
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
     // console.log(response);.
         // check the response status
      if (response.ok) {
          //console.log(`this is the response ${response}`)
          
          console.log('success');
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
    }

  // if (username && email && password) {
  //     await fetch('/api/users', {
  //       method: 'post',
  //       body: JSON.stringify({
  //         /*this is what stringify is translating the data into.
  //          {username: "esroleo", email: "esroleo@gmail.com", password: "test"}
  //         email: "esroleo@gmail.com"
  //         password: "test"
  //         username: "esroleo"
  //         */
  //         username,
  //         email,
  //         password
  //       }),
  //       headers: { 'Content-Type': 'application/json' }
  //     }).then((response) => {console.log(response)})
  //   }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);