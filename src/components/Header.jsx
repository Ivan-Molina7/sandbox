import { Link } from 'react-router-dom';
import logo from '../assets/LogoSandBox.png'
import { useEffect, useRef, useState } from 'react';
import { HashLink as LinkSmooth } from 'react-router-hash-link';

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const hamMenuRef = useRef(null)
    const navRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isOpen &&
                navRef.current &&
                hamMenuRef.current &&
                !navRef.current.contains(event.target) &&
                !hamMenuRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }

        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    }, [isOpen])


    return (
        <header className="header max-width-section" id='home'>

            <Link to="/" className='header__thumbnail'>
                <img src={logo} alt="logo sandbox" className='header__logo' />
            </Link>

            <nav className={`nav ${isOpen ? 'open' : ''}`} ref={navRef}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <LinkSmooth smooth to="/#home" className="nav__link" >Home</LinkSmooth>
                    </li>
                    <li className="nav__item">
                         <LinkSmooth smooth to="/#whatwedo" className="nav__link" >What we do</LinkSmooth>
                      </li>
                    <li className="nav__item">
                         <LinkSmooth smooth to="/#strategy" className="nav__link" >Strategy</LinkSmooth></li>
                    <li className="nav__item">
                         <LinkSmooth smooth to="/#chooseUs" className="nav__link" >Choose us</LinkSmooth></li>
                    <li className="nav__item">
                         <LinkSmooth smooth to="/#faq" className="nav__link" >Faq</LinkSmooth></li>
                </ul>
            </nav>


            <div
                className={`ham-menu ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                ref={hamMenuRef}
                role="button"
                tabIndex={0}
                aria-label="Abrir menú"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleMenu();
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;