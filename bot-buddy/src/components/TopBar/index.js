import './index.scss'
// import LogoAB from '../../assets/logos/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faGit,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faPerson,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faFolderOpen,
  faBriefcase,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { app, auth } from '../../firebase.js';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const [showNav, setShowNav] = useState(false);

    const navigate = useNavigate('');

    const handleClick = () => {
        setShowNav(false)
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
    <div className='navBar'>
        <Link className='logo' to='/'>
            {/* <img src = {LogoAB} alt='logo' /> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/Home"
            onClick={handleClick}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/Chat"
            onClick={handleClick}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="work-link" 
            to="/Settings"
            onClick={handleClick}>
                <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
            </NavLink>

            <FontAwesomeIcon
            onClick={handleClick} 
            icon={faClose}
            color="#D2B48C"
            size="3x"
            className="close-icon" />
        </nav>



        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars} 
        color="#D2B48C" 
        size="3x" 
        className="hamburger-icon" />
    </div>

    );
};

export default TopBar;
