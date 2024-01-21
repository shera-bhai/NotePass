import './components/styles/App.css'
import React, { useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import Navaft from './components/Navaft';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
function App() {
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



    return (
    <>
    {User ?<Navaft/> : <Navbar/>}
    
    <div className="container">
        <sec className="header">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
        </sec>
    </div>
    <div>
    <section className="text-box">
        <h1>Pass My Book - Unlock the Gateway to Knowledge</h1>
        <p>
        Pass My Book is a great platform where you can Grow Emotionally and Mentally .  Book  is an effective way of boosting your memory and enhancing&nbsp;your&nbsp;focus.<br /><br />Books help to inspire students to do hard work with courage and hope. They enrich the experience of students and sharpen their&nbsp;intellect.</p>
        <a href="books.html" className="visit-btn" id="visit-1"> Buy Books</a>
        <a href="https://forms.gle/4PG2bsPxTYpgJuBd7" target="_blank" className="visit-btn" id="visit-2"> Sell Books</a>
    </section>
    <div className="About-bkg">
        <section className="Aboutus">
            <br />
            <h1 className="Aboutus-heading">WHY CHOOSE BOOKS OVER EBOOKS?</h1>
            <br /><hr /><br />
            <p>Books offer a multitude of advantages that make them an irreplaceable medium of knowledge, entertainment, and personal growth.</p>
            <p>Books are reservoirs of knowledge, providing information on a wide range of subjects. They serve as valuable educational tools, allowing us to learn about history, science, philosophy, culture, and countless other topics. Books can be instrumental in expanding our understanding of the world, fostering curiosity, and promoting lifelong learning.</p>
            <p>Emotional Connection: Books have the power to evoke a wide range of emotions. They can make us laugh, cry, empathize, and experience a multitude of feelings. By connecting us to fictional characters and their journeys, books offer a profound emotional connection, enabling us to explore the depths of human experiences and emotions.</p>
            <p>Books enrich our lives, broaden our horizons, and leave lasting impressions. They are gateways to knowledge, imagination, and personal growth. In a world of ever-evolving technology, books remain steadfast in their ability to captivate, inspire, and touch our souls.</p><br />
        </section>
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

export default App;
