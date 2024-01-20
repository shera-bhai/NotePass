import React from "react";
import './styles/Sell.css';
import Navbar from './Navbar';

function Sell(){
    return(
        <>
        <Navbar/>
        <div>
        <div className="container">
          <section className="header">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
          </section>
          <div className="main_heading">
            <h1>UPLOAD DETAILS FOR BOOK</h1><br /><hr /><br /><br />
            <div className="form-div">
              <div>
                <form action="https://formsubmit.co/fce0a1ac3e14be0a3e3a0887066535f4" method="POST"><p /><ol>
                    <br /><br />
                    <li className="book_details">Name of the Book&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="Book Name" className="book_name" required /></li>
                    <li className="book_details">Author of the Book&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="Book Author" className="book_author" required /></li>
                    <li className="book_details">Actual Price of the Book&nbsp;&nbsp;<input type="number" name="Actual Price" className="book_actprice" required /></li>
                    <li className="book_details">Selling Price of the Book&nbsp;&nbsp;<input type="number" name="Sell Price" className="book_sellprice" required /></li>
                    <li className="book_details">Condition of the Book&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="Book Condition" className="book_cond" required /></li>
                    <li className="book_details">Description of the Book&nbsp;&nbsp;<input type="text" name="Book Description" className="book_desc" required /></li>
                    <li className="book_details">Upload Image of the Book&nbsp;&nbsp;<figure className="image-container"><img id="chosen-image"/><figcaption className="file-name" /></figure><input type="file" name="Book Image" id="upload-button" accept="image/*" required /><div id="display-image" /><label htmlFor="upload-button" className="book_btn"><i className="fas fa-upload" /> &nbsp; Choose a Photo</label></li>
                  </ol><p />
                  <button type="submit" className="submit-btn">SUBMIT</button><br /><br /><br />
                </form>
              </div>
            </div>
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
      </div>
    </>
    );
}

export default Sell;