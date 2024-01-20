import Navbar from './Navbar';
import React from 'react';
import './styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact () {
    return (
        <>
        <Navbar/>
        <div>
        <div className="background">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
        </div>
        <div className="mainframe">
          <div className="info_frame">
            <h1 className="info_heading">Contact Information</h1>
            <p className="info_tagline">Get in contact with us!</p>
            <ul className="info_ul">
              <li className="info_li"><FontAwesomeIcon icon="fa-solid fa-phone" /><a className="mobileno">+91XXXXX-XXXXX</a></li>
              <li className="info_li"><FontAwesomeIcon icon="fa-solid fa-envelope" /><a className="mail">contactourteam@mail.com</a></li>
              <li className="info_li"><FontAwesomeIcon icon="fa-solid fa-location-dot" /><a className="loc">123, UIET, MDU, Rohtak</a></li>
              <li className="info_li_contact"></li>
            </ul>
          </div>
          
          <form className="list-group" action="https://formsubmit.co/d289ee363aabcb7ee34c1b7c32e24a93" method="POST">
            <div class="ul-div">
            <div>
            <ul>
              <li><FontAwesomeIcon icon="fa-solid fa-phone" /><input type="text" name="Name" placeholder="Enter Your Name" className="form_name" required /></li><br></br>
              <li><FontAwesomeIcon icon="fa-solid fa-envelope" /><input type="email" name="Mail" placeholder="Enter Your Mail" className="form_mail" required /></li><br></br>
              <li><FontAwesomeIcon icon="fa-solid fa-location-dot" /><input type="number" name="Mobile" placeholder="Enter Your Mobile No" className="form_mobile" required /></li><br></br>
              <li><textarea name="Subject" id="form_subject" cols={30} rows={3} placeholder="Write Your Message (200 Words)" maxLength={200} required defaultValue={""} /></li>
              <li><button className="btn" type="submit">Send<i id="submit" className="fa-solid fa-paper-plane fa-lg"><a href /></i></button></li>
            </ul>
            </div>
            </div>
          </form>
        </div>
      </div>
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
                  <li><a href="upload.html">Sell Books</a></li>
                  <li><a href="test.html">Online Test</a></li>
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
    </>
    );
}

export default Contact;