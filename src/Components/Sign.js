import React, { useState } from "react";
import "../assets/sign/Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";

import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <>
      <div className="container-div-navbar">
        <NavBar />
      </div>
      <div className="Main-ss">
        <div className="body-ss">
          <div
            className={`container-ss ${isSignUp ? "active-ss" : ""}`}
            id="container-ss"
          >
            <div className="form-container-ss sign-up-ss">
              <form>
                <h1>Create Account</h1>
                <div className="social-icons-ss">
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                  <a href="#" className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="button">Register</button>
              </form>
            </div>
            <div className="form-container-ss sign-in-ss">
              <form>
                <h1>Sign In</h1>
                <div className="social-icons-ss">
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="icon-ss">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forget Your Password?</a>
                <button type="button">Sign In</button>
              </form>
            </div>
            <div className="toggle-container-ss">
              <div className="toggle-ss">
                <div className="toggle-panel-ss toggle-left-ss">
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all of site features</p>
                  <button className="hidden-ss" onClick={handleSignInClick}>
                    Sign In
                  </button>
                </div>
                <div className="toggle-panel-ss toggle-right-ss">
                  <h1>Hello, Friend!</h1>
                  <p>
                    Register with your personal details to use all of site
                    features
                  </p>
                  <button className="hidden-ss" onClick={handleSignUpClick}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sign;
