import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth, db} from './firebase';
import Navbar from './Navbar';
import { addDoc,collection} from 'firebase/firestore';

function Signup(){

  const [values,setValues] = useState({
    name: '',
    email: '',
    password: '',
    mobile_no: ''
    
});
const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:event.target.value}))
}
const navigate = useNavigate();
const [SubmitButtonDisabled,setSubmitButtonDisabled] = useState(false);
const [errors, setErrors] = useState({});

const usersCollectionRef = collection(db,'users')
const signup = async () => {
  await addDoc(usersCollectionRef,{
    Name:values.name,
    Email:values.email,
    Mobile_no: values.mobile_no
  })
  console.log("signed in!!")
}
function handleSubmit(event) {
    event.preventDefault();
  
    // Set the disabled state before checking for errors
    setSubmitButtonDisabled(true);
  
    setErrors(Validation(values));

    signup();

  }
  useEffect(() => {
    // Display alerts for each error
    if (errors.name) alert(`${errors.name}`);
    if (errors.email) alert(`${errors.email}`);
    if (errors.mobile_no) alert(`${errors.mobile_no}`);
    if (errors.password) alert(`${errors.password}`);
  }, [errors]);
  
  useEffect(() => {
    // This effect will be triggered after the errors state has been updated
  
    // Check if there are no errors and submit the form
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
          setSubmitButtonDisabled(false);
          console.log(res);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name
            })
            
          
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
  }, [errors,values.name, values.email, values.password, navigate]);

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
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Full Name" onChange={handleInput} name='name' required />
                <input type="mail" placeholder="Enter Email Adress" onChange={handleInput} name='email' required />
                <input type="tel" placeholder="Enter Mobile No" onChange={handleInput} name='mobile_no' required />
                <input type="password" placeholder="Enter Password" onChange={handleInput} name='password' required />
                <div className="submit">
                  <button id="loginbtn" type="submit" disabled={SubmitButtonDisabled} >Sign Up</button>
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