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
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';


const TopBar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
    <div className='navBar'>
        <Link className='logo' to='/Portfolio'>
            {/* <img src = {LogoAB} alt='logo' /> */}
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/Portfolio"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faPerson} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="project-link" 
            to="/projects"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="work-link" 
            to="/work"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)} 
            icon={faClose}
            color="#D2B48C"
            size="3x"
            className="close-icon" />
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arianit-balidemaj-126b031ab/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/ArianitBalidemaj">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>

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
