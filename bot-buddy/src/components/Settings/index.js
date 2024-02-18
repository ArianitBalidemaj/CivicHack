import React from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.js'; // Import your Firebase auth object

const Settings = () => {
  const navigate = useNavigate(); // Get the navigate function from the useNavigate hook

  const handleChangePassword = () => {
    // Placeholder for change password functionality
    alert('Change Password clicked');
  };

  const handleDeleteAccount = () => {
    // Placeholder for delete account functionality
    alert('Delete Account clicked');
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Sign-out successful.
        navigate('/Login'); // Use the navigate function to redirect
        console.log('User signed out');
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    <div className="settings">
      <div className="text1">Settings</div>
      <div className="underline"></div>
      <ul>
        <li>
          <button onClick={handleChangePassword}>Change Password</button>
        </li>
        <li>
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </li>
        <li>
          <button onClick={handleLogout}>Log Out</button>
        </li>
        <li2>
          <Link to="/Home">Back to Home</Link>
        </li2>
      </ul>
    </div>
  );
};

export default Settings;
