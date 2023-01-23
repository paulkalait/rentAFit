import React from "react";
import Animation from "../../components/Animation/Animation";
import "./style/home.css";
import shoes from "../../assets/dazzle-white-shoe-and-stars.svg";
import phoneAnimation from "../../assets/dazzle-online-shop-in-phone.json";
import dazzleReview from "../../assets/dazzle-speech-bubble-1.svg";
import dazzleMoney from "../../assets/dazzle-man-holding-coin-and-piggy-bank-1.svg";
import dazzleWoman from "../../assets/dazzle-woman-puts-likes-on-the-phone.svg";
import sallyHeadShot from "../../assets/pexels-arina-krasnikova-5951325.jpg"
import johnHeadShot from "../../assets/pexels-andrea-piacquadio-762020.jpg"
import paulHeadShot from "../../assets/headshot.JPG"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section data-testid="top-container" className="top-container">
        <div className="left-side">
          <div className="left-side-text-box" data-testid="left-side-text-box">
            <img src={shoes} alt="shoes" />
            <h1>Make a statement in the fashion industry </h1>
            <p>
              secure your financial future with a website that allows you to
              rent & sell your own unique apparel .
            </p>
            <Link
              to="/signup"
              className="join-button"
              data-testid="join-button"
            >
              Join
            </Link>
          </div>
        </div>
        <div className="right-side">
          <Animation
            animationJSON={phoneAnimation}
            classStyle="animation"
            data-testid="animation"
          />
        </div>
      </section>
      <section data-testid="center-container" className="center-container">
        <div className="process-container">
          <div className="process-container-boxes">
            <img alt="postimage" src={dazzleWoman} />
            <h3>Share</h3>
            <p>with others your wardrobe</p>
          </div>
          <div className="process-container-boxes">
            <img alt="Earn-money" src={dazzleMoney} />
            <h3>Earn</h3>
            <p>income day by the day</p>
          </div>
          <div className="process-container-boxes">
            <img alt="review" src={dazzleReview} id="speech-pic" />
            <h3>Review</h3>
            <p>other products and interact with people</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="testimonial-section-container">
          <div className="join-our-community-section">
            <h1>Join our Community</h1>
            <h5>see what others have to say</h5>
          </div>

          <div className="testimonials">
            {/* Testimonial one div */}
            <div className="each-testimonials">
              <div className="testimonial-container">
                <div className="testimonial-container-title-img">
                  <img  src={johnHeadShot}/>
                  <h5>John</h5>
                </div>
                <span className="seller-span">Seller</span>
              </div>
              <p>Life changing! I started using it a couple months ago. it has allowed me to earn extra side income</p>
            </div>
            {/* Testimonial two div */}
            <div className="each-testimonials">
              <div className="testimonial-container">
                <div className="testimonial-container-title-img">
                  <img src={paulHeadShot}/>
                  <h5>Paul</h5>
                </div>
                <span className="owner-span">owner</span>
              </div>
              <p>An app designed for people to connect, share, and earn income</p>
            </div>
            {/* Testimonial three div */}
            <div className="each-testimonials">
              <div className="testimonial-container">
                <div className="testimonial-container-title-img">
                  <img src={sallyHeadShot}/>
                  <h5>Sally</h5>
                </div>
                <span  className="shopper-span">Shopper</span>
              </div>
              <p>This app is great. I started using it a couple months ago. it has allowed me to save on big named fasion brands</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
