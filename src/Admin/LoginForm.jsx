import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../Router';

const LoginForm = (props, { onLogin }) => {
  const { fetchProfile } = props
  const navigate = useNavigate()
  const [error, setError] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const verification = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password
    };

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


    if (response && response.token) {

      localStorage.setItem("accessToken", response.token);
      useApi.updateAccessToken(response.token);

      const profileResponse = await fetchProfile();

      if (profileResponse) {
        navigate("/AdminArticles");
        setEmail("");
        setPassword("");
      }
    } else {
      setIncorrectCredentials(true);
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
            id='emailInput'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          {error.includes('email') && <label htmlFor='emailInput'>Veuillez renseigner un e-mail valide</label>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name='Password'
            id='passwordInput'
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          {error.includes('password') && <label htmlFor='passwordInput'>Veuillez renseigner un mot de passe</label>}
        </div>
        {incorrectCredentials && <p>Email ou mot de passe incorrect</p>}
        <button type="submit">Login</button>
      </fieldset>
    </form>

  );
};

export default LoginForm;