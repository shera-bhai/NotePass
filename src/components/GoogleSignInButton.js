// GoogleSignInButton.js
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate('/');
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      
      navigate('/');
    } catch (error) {
      console.error("Google Sign-In failed:", error.message);
    }
  };

  return (
    <button onClick={signInWithGoogle} className='sign-in-with-google'>Continue with Google</button>
  );
};

export default GoogleSignInButton;
