import React from "react";
import './styles/Signup.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Signup(){
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
              <h1 style={{color: "#000", paddingBottom: "10px"}}>Pass My Book</h1>
              <form action="#">
                <input type="text" placeholder="Enter Full Name" required />
                <input type="mail" placeholder="Enter Email Adress" required />
                <input type="number" placeholder="Enter Mobile No" required />
                <input type="password" placeholder="Enter Password" required />
                <div className="submit">
                  <button id="loginbtn" type="submit">Sign Up</button>
                </div>
              </form>
              <div className="account">
                <p>Already Have an Account?<Link to={ '/login' }  style={{ color: "darkblue" }}> Login</Link></p>
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

export default Signup;