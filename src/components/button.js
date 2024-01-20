// GoogleLoginButton.js
import React from 'react';
import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';
import { auth, firebaseConfig, googleProvider } from './firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    googleProvider
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const GoogleLoginButton = () => {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return isSignedIn ? (
            <div>
              <p>Hello {user.displayName}!</p>
              <p>You have successfully signed in with {providerId}.</p>
            </div>
          ) : (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};

export default GoogleLoginButton;