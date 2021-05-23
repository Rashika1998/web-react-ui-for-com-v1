import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join with us to get our best services.
                </p>
                <p className="footer-subscription-text">
                    or you can just take a look.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="enter your e-mail" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Sample 001</Link>
                        <Link to='/sign-up'>Sample 002</Link>
                        <Link to='/sign-up'>Sample 003</Link>
                        <Link to='/sign-up'>Sample 004</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Sample 001</Link>
                        <Link to='/sign-up'>Sample 002</Link>
                        <Link to='/sign-up'>Sample 003</Link>
                        <Link to='/sign-up'>Sample 004</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Sample 001</Link>
                        <Link to='/sign-up'>Sample 002</Link>
                        <Link to='/sign-up'>Sample 003</Link>
                        <Link to='/sign-up'>Sample 004</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Sample 001</Link>
                        <Link to='/sign-up'>Sample 002</Link>
                        <Link to='/sign-up'>Sample 003</Link>
                        <Link to='/sign-up'>Sample 004</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Hello <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Hello 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
