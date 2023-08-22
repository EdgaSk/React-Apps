import React from 'react';
import './styles/Footer.css'
import Logo from '../assets/logo/nftlogo.png'
import Facebook from '../assets/icons/facebook.png'
import Discord from '../assets/icons/discord.png'

const Footer = () => {
    return(
        <footer className='footerCointainer'>
            <div className='footerbox'>
                <div className='footerImgCointainer'>
                    <img className='footerLogo' src={Logo} alt="" />
                    <div>Join the Commmunity</div>
                    <img className='socialIcon' src={Facebook} alt="" />
                    <img className='socialIcon' src={Discord} alt="" />
                </div>
                <div className='linksCointainer'>
                    <p>Market Place</p>
                    <ul>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </ul>
                </div>
                <div className='linksCointainer'>
                    <p>Resource</p>
                    <ul>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </ul>
                </div>
                <div className='linksCointainer'>
                    <p>Account</p>
                    <ul>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;