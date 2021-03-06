import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(
        () => {
            showButton();
            return () => {
                showButton();
            }
        }, []
    );

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    JS tour <i className="fas fa-plane" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            홈
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                            서비스
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                            상품
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            로그인
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">로그인</Button>}
            </div>
        </nav>
    )
}

export default NavBar;
