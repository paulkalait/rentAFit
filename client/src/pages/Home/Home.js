import React from 'react'
import Animation from '../../components/Animation/Animation';
import "./style/home.css"
import shoes from '../../assets/dazzle-white-shoe-and-stars.svg';
import phoneAnimation from '../../assets/dazzle-online-shop-in-phone.json';

const Home = () => {
  return (
    <div>
       <section  data-testid="top-container" className='top-container'>
            <div className='left-side'>
                <div className='left-side-text-box' data-testid="left-side-text-box">
                <img src={shoes} alt="shoes"/>
                <h1>Make a statement in the fashion industry </h1>
                <p>
                secure your financial future with a website that allows you to sell your own unique designs.
                </p>
                <button data-testid="join-button">Join</button>
                </div>
            </div>
            <div className='right-side'>
                <Animation  animationJSON={phoneAnimation} classStyle="animation" data-testid="animation"/> 
            </div>
       </section>

    </div>
  )
}

export default Home;