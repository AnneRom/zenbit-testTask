import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import css from './Home.module.css';
import axios from 'axios';

const Home = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

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
      <section className={css.itemsSection}>
        <div className={css.itemsSection__container}>
        <h2 className={css.itemsSection__title}>Open Deals</h2>
        <div className={css.itemsSection__content}>
        {properties.map(property => (
    <div className={css.itemsSection__contentItem} key={property.id}>
      <img src={`/images/${property.srcImage}`} alt={property.title} />
      <div className={css.data}>
        <h6 className={css.data__title}>{property.title}</h6>
        <div className={css.data__content}>
          <div className={`${css.data__contentItem} ${css.data__Dhs}`}>{property.price}</div>
          <div className={`${css.data__contentItem} ${css.data__Yield}`}>{property.yield}</div>
          <div className={`${css.data__contentItem} ${css.data__Sold}`}>{property.sold}</div>
          <div className={`${css.data__contentItem} ${css.data__Tiket}`}>{property.ticket}</div>
          <div className={`${css.data__contentItem} ${css.data__Days}`}>{property.daysLeft}</div>
        </div>
      </div>
    </div>
  ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
