import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import css from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка для входу
    if (email === 'test@test.com' && password === 'password') {
      login();
      navigate('/');
    } else {
      alert('Невірні дані');
    }
  };

  return (
    <div className={css.pageContainer}>
     
      <header className={css.header}></header>

      <div className={css.contentContainer}>
        
        <div className={css.backgroundImage}>
            <img src="/public/images/imageLogin.png" alt="LoginImage"/>
        </div>

        <div className={css.wrapper}>
        <div className={css.loginContainer}>
          <form onSubmit={handleSubmit} className={css.loginForm}>
            <h2 className={css.loginTitle}>Login</h2>
            
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={css.input}
            />
            
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={css.input}
            />

            <Link to="/forgot-password" className={css.forgotPassword}>
              Forgot password?
            </Link>
            
            <button type="submit" className={css.loginButton}>
              Sign In
            </button>
            
            <p className={css.signupText}>
              Don’t have an account?{' '}
              <Link to="/signup" className={css.signupLink}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
