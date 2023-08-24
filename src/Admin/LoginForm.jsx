import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../Router';

const LoginForm = (props, { onLogin }) => {
  const { fetchProfile } = props
  const navigate = useNavigate()
  const [error, setError] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const verification = async (event) => {
    event.preventDefault()
    const userData = {
      email,
      password
    }

    setError([]);
    const newError = [];
    const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(userData.email)) {
      newError.push('email');
    }

    if (!userData.password) {
      newError.push('password');
    }

    setError(newError);


    if (newError.length > 0) {
      return;
    }

    const response = await useApi.user.SignIn(userData);

    console.log(response)

    if (response && response.token) {

      localStorage.setItem("accessToken", response.token);
      useApi.updateAccessToken(response.token);
      const profileResponse = await props.fetchProfile();

      if (profileResponse) {
        navigate("/AdminArticles");

        setEmail("");
        setPassword("");
      }

    } else {
      if (response.archived) {
        navigate("/AdminPage");
      } else {
        console.log('error', 'E-mail ou mot de passe incorrect');
      }
    }
  }

  return (
    <form method='post' onSubmit={(event) => verification(event)}>
      <fieldset className='form'>
        <div>
          <input
            type="Email"
            name='Email'
            placeholder="Email"
            id='emailinput'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          {
            error.includes("email") && <label htmlFor='emailinput'> C'est pas le bon mail</label>
          }
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name='Password'
            id='Passwordinput'
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          {
            error.includes("Password") && <label htmlFor='Passwordinput'> C'est pas le bon mot de passe</label>

          }
        </div>
        <button type="submit">Login</button>
      </fieldset>
    </form>

  );
};

export default LoginForm;