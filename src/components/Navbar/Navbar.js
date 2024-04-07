import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Hamburger from '../Hamburger/Hamburger';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const toggleHamburgerMenu = (el) => {
        /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
        const navItems = document.getElementsByClassName('nav-items');
        const navItem = navItems[0];

        const navLanguages = document.getElementsByClassName('btn-lang-container');
        const navLanguage = navLanguages[0];

        if (navItem.style.display === "block") {
            navItem.style.display = "none";
            navLanguage.style.display = "none";
        } else {
            navItem.style.display = "block";
            navLanguage.style.display = "block";
        }

    };

    const selectActivePage = (el) => {
        document.querySelectorAll(".nav-section li a").forEach(element =>
            element.classList.remove('active')
        );

        el.classList.add('active');

    };

    const onLogoClick = () => {
        const homeItem = document.querySelector('.nav-section li .home-item');
        selectActivePage(homeItem);
    }

    return (

        <div className='nav'>
            <div className='nav-section'>
                <div className='logo-line'>
                    <a href='#hero-section' className='active' onClick={() => onLogoClick()}>
                        <img className='logo' src={require('../../assets/img/logo_byrdy_new.jpg')} alt='logo' />
                    </a>
                </div>

                <ul className='nav-items'>
                    <li><a href='#hero-section' className='active home-item' onClick={(e) => selectActivePage(e.target)}>{t('navbar.home')}</a></li>
                    <li><a href='#about-section' onClick={(e) => selectActivePage(e.target)}>{t('navbar.about')}</a></li>
                    <li><a href='#disc' onClick={(e) => selectActivePage(e.target)}>{t('navbar.discography')}</a></li>
                    <li><a href='#media' onClick={(e) => selectActivePage(e.target)}>{t('navbar.media')}</a></li>
                    <li><a href='#news' onClick={(e) => selectActivePage(e.target)}>{t('navbar.news')}</a></li>
                    <li><a href='#contact' onClick={(e) => selectActivePage(e.target)}>{t('navbar.contact')}</a></li>

                    <div className='btn-lang-container'>
                        <button className='btn-lang' onClick={() => handleChangeLanguage("en")}>EN</button>
                        <button className='btn-lang' onClick={() => handleChangeLanguage("pl")}>PL</button>
                        <button className='btn-lang' onClick={() => handleChangeLanguage("de")}>DE</button>
                    </div>
                </ul>
                <button class="hamburger-menu" onClick={() => toggleHamburgerMenu()}>
                    <FontAwesomeIcon icon={faBars} className='hamburger-icon' />
                </button>
            </div>
        </div>


    )
};

export default Navbar;

//<Hamburger className='hamburger-menu' />