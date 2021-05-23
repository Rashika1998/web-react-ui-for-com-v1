import React from 'react'
import {Button} from './Button';
import './Footer.css';

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
        </div>
    )
}

export default Footer
