import './styles/Buy.css';
import React, {useEffect, useState} from "react";
import Navbar from './Navbar';
import Navaft from './Navaft';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
function Buy(){
  const [User,setUser] = useState(null);
  useEffect(() => {
    
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user.displayName);
      }
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

    return(
        <>
        {User ?<Navaft/> : <Navbar/>}
      <div className="container">
        <section className="header">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
        </section>
        <br /><br /><br />
        <table className="_table">
          <tbody><tr className="table_row">
              <td className="table_data" data-tilt>
                <a href="./buy1.html"><img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668024447/counting-the-cost-9781668024447_hr.jpg" alt="Book" /></a>
                <h3>Counting the Cost</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data2" data-tilt>
                <a href="./buy2.html"><img src="https://m.media-amazon.com/images/I/71+vQyk44IL._AC_UF1000,1000_QL80_.jpg" alt="Book2" /></a>
                <h3>Happy Place</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data3" data-tilt>
                <a href="./buy3.html"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666994927l/61431922.jpg" alt="Book2" /></a>
                <h3>Fourth Wing</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data4" data-tilt>
                <a href="./buy4.html"><img src="https://m.media-amazon.com/images/I/71jte84ADvL._AC_UF1000,1000_QL80_.jpg" alt="Book2" /></a>
                <h3>Verity</h3>
                <h4>Check our Price</h4>
              </td>
            </tr><tr className="table_row2">
              <td className="table_data5" data-tilt>
                <a href="./buy5.html"><img src="https://m.media-amazon.com/images/I/71zwHcw-D7L._AC_UF1000,1000_QL80_.jpg" alt="Book" /></a>
                <h3>I Will Teach You to Be Rich</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data6" data-tilt>
                <a href="./buy6.html"><img src="https://m.media-amazon.com/images/I/71E8VNPC1dL._AC_UF1000,1000_QL80_.jpg" alt="Book2" /></a>
                <h3>Ugly Love</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data7" data-tilt>
                <a href="./buy7.html"><img src="https://m.media-amazon.com/images/I/619qA4KTwcL.jpg" alt="Book2" /></a>
                <h3>Things We Never Get Over</h3>
                <h4>Check our Price</h4>
              </td>
              <td className="table_data8" data-tilt>
                <a href="./buy8.html"><img src="https://m.media-amazon.com/images/I/81FummIc2eL._AC_UF1000,1000_QL80_.jpg" alt="Book2" /></a>
                <h3>It Starts with us</h3>
                <h4>Check our Price</h4>
              </td>
            </tr></tbody></table>
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

export default Buy;