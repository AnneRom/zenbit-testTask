import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import css from './Home.module.css';

const Home = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className={css.pageContainer}>
      <header className={css.header}>
        <div className={css.header__wrapper}>
        {isAuthenticated ? (
          <button onClick={logout} className={`${css.button} ${css.gold__button}`}>Sign Out</button>
        ) : (
          <div className={css.buttonGroup}>
            <button onClick={() => navigate('/login')} className={`${css.button} ${css.login__button}`}>Log In</button>
            <button onClick={() => navigate('/signup')} className={`${css.button} ${css.gold__button}`}>Sign Up</button>
          </div>
        )}
        </div>
      </header>

      <section className={css.mainSection}>
        <div className={css.mainSection__wrapper}>
            <div className={css.mainSection__heading}>
                <h1 className={css.heading__title}>The chemical  negatively charged</h1>
                <p className={css.heading__text}>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
            </div>
            <div className={css.mainSection__buttonStarted}>
                <button className={`${css.button} ${css.button__started}`} onClick={() => {}}>Get Started</button>
            </div>
        </div>
        <div className={css.mainSection__image}>
            <img src="/public/images/image-bg.png" alt="BackgroundImage"/>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
