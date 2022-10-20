// Function to sign in

async function fetchPostSignIn(data) {
  let response = {};
  let error = {};
  const { email, password } = data;
  const url = `${process.env.REACT_APP_BACKEND}/auth/logIn`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await res.json();

    response = json;
  } catch (error1) {
    error = { error1 };
  }

  return { response, error };
}

export default fetchPostSignIn;
