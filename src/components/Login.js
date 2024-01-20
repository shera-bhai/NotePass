import { React, useState, useEffect } from "react";
import './styles/Login.css';
import Navbar from './Navbar';
import Google from './google.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignInButton from "./GoogleSignInButton";
import Validation from "./LoginValidation";
import { auth } from "./firebase";
function Login(){

  const [values, setValues] = useState({

    email: '',
    password: ''

  });
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const navigate = useNavigate();
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  function handleSubmit(event) {
    event.preventDefault();

    // Set the disabled state before checking for errors
    setSubmitButtonDisabled(true);

    setErrors(Validation(values));
  }
  useEffect(() => {
    // Display alerts for each error
    
    if (errors.email) alert(`${errors.email}`);
    if (errors.password) alert(`${errors.password}`);
  }, [errors]);

  useEffect(() => {
    // This effect will be triggered after the errors state has been updated

    // Check if there are no errors and submit the form
    if (errors.email === '' && errors.password === '') {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          setSubmitButtonDisabled(false);
          console.log(res);
          navigate('/');
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          console.log(err);
        });
    } else {
      // If there are errors, enable the button
      setSubmitButtonDisabled(false);
    }
  }, [errors, values.name, values.email, values.password, navigate]);

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
                 <GoogleSignInButton/>
                  
                </div>
              </div>
              <div className="or">
                <div className="empty" />
                <p>or</p>
                <div className="empty" />
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" onChange={handleInput} name="email" required />
                <input type="password" placeholder="Password" onChange={handleInput} name="password" required />
                <div className="submit">
                  <button id="loginbtn" type="submit">Login</button>
                </div>
              </form>
              {/* <div class="checkbox">
                        <input type="checkbox" id="rerm" name="term">
                        <label for="term"> Remember for 30 days</label>
                    </div> */}
              <div className="account">
                <p>Don't Have an Account? <a onClick={() => navigate('/signup')} style={{ color: "darkblue", cursor: "pointer" }}> Sign Up</a></p>
                <Link to={'/forgot'}><a style={{color: "darkblue"}}>Forgot Password?</a></Link>
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

export default Login;