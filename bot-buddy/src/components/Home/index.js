import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // If you need authentication
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase app
const firebaseConfig = {
    apiKey: 'your-api-key',
    authDomain: 'your-auth-domain',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id',
    measurementId: 'your-measurement-id' // Optional, only if you're using Firebase Analytics
};

const app = initializeApp(firebaseConfig);

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
                <ChatButton isAuthenticated={isAuthenticated} />
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

const ChatButton = ({ isAuthenticated }) => {
    const handleClick = () => {
        if (isAuthenticated) {
            window.location.href = '/chat';
        } else {
            window.location.href = '/login';
        }
    };

    return (
        <button className="chat-button" onClick={handleClick}>
            Chat Now!
        </button>
    );
};

export default Home;