import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
// Import the firebase from the js file
import { app, auth } from '../../firebase.js';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = getAuth(app).onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='home-box'>
            <div className="home-content">
                <h1 className="h1">BotBuddy</h1>
                <About />
                <ChatButton />

            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="about">
            <h2 className="h2">The Mental Health App Designed To Connect:</h2>
            <p className="p2">Everyone deals with problems in their life, and many people unfortunately have the feeling that they don't have the opportunity to talk to others. In fact, a study done in 2019 by the New York Post stated that "1 in 4 Americans feel like they have no one to confide in." This website was created in order to help people dealing with mental health struggles connect with other people. We want BotBuddy users to create meaningful connections safely and securely by connecting anonymously.</p>
        </div>
    )
}

const ChatButton = () => {

    // Check if the user is authenticated and logged in
    const navigate = useNavigate('');

    const handleClick = () => {
        const user = auth.currentUser;
        console.log(user);
        if (user) {
            navigate('/Chat');
            console.log("User is signed in");
        } else {
            navigate('/Login');
            console.log("User is not signed in");
        }
    }
    

    return (
        <button className="chat-button" onClick={handleClick}>
            Chat Now!
        </button>
    );
};



export default Home;