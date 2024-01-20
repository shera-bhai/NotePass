import { React, useState } from "react";
import './styles/Login.css';
import Navbar from './Navbar';
import Google from './google.svg';
import { auth, googleProvider } from './firebase';
import { Link, useNavigate } from 'react-router-dom';

function Login(){

    const Navigate = useNavigate();

    const GoogleLoginButton = () => {
      const handleGoogleLogin = async () => {
        try {
          const result = await auth.signInWithPopup(googleProvider);
          console.log(result.user);
        } catch (error) {
          console.error(error.message);
        }
      };

    return(
        <>
        <Navbar/>
        <div className="container">
        <section className="header">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
        </section>
        <section className="login">
        <div className="rowA">
          <div className="colA">
            <div className="login_card">
              <div className="img">
              </div>
              <h1 style={{color: "#000"}}>Pass My Book</h1>
              <div className="one_tap_login">
                <div className="google">
                  <img src={ Google } alt="" style={{mixBlendMode: 'multiply'}} />
                  <button onClick={GoogleLoginButton}>Continue with Google</button>
                </div>
              </div>
              <div className="or">
                <div className="empty" />
                <p>or</p>
                <div className="empty" />
              </div>
              <form action="#">
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <div className="submit">
                  <button id="loginbtn" type="submit">Login</button>
                </div>
              </form>
              {/* <div class="checkbox">
                        <input type="checkbox" id="rerm" name="term">
                        <label for="term"> Remember for 30 days</label>
                    </div> */}
              <div className="account">
                <p>Don't Have an Account? <a onClick={() => Navigate('/signup')} style={{ color: "darkblue", cursor: "pointer" }}> Sign Up</a></p>
                <Link to={'./'}><a style={{color: "darkblue"}}>Forgot Password?</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
          <div>
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">affiliate program</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">shipping</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">payment options</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="books.html">Buy Books</a></li>
                  <li><a href="https://forms.gle/4PG2bsPxTYpgJuBd7" target="_blank">Sell Books</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-instagram" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
    </>
    );
  }
}

export default Login;