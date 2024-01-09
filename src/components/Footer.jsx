import React from 'react';
import { Link } from 'react-router-dom';

// images
import logoImg from '../assets/images/other/logo.png';
import googlePlayMarketLogo from '../assets/images/svg/google-play.svg';
import facebookLogo from '../assets/images/svg/facebook.svg';
import twitterLogo from '../assets/images/svg/twitter.svg';
import youtubeLogo from '../assets/images/svg/youtube.svg';

const Footer = () => {
    return (
        <footer className='text-regular-16 bg-primary-black-800 py-8 text-white'>
            <div className="container">
                <div className="flex-start-between">
                    {/* logo wrapper */}
                    <div className="flex flex-col">
                        <Link to="/" className='inline-block mb-4'>
                            <img src={logoImg} width={152} height={83} alt="logo image" className="w-[152px] h-[83px]" />
                        </Link>
                        <span>Copyright 2023 © All rights reserved</span>
                    </div>

                    {/* company */}
                    <ul className="space-y-2">
                        <li>
                            <Link>Mening profilim</Link>
                        </li>
                        <li>
                            <Link>Sozlamlar</Link>
                        </li>
                        <li>
                            <Link>Aloqa</Link>
                        </li>
                        <li>
                            <Link>Ommaviy offerta</Link>
                        </li>
                    </ul>

                    {/* contact */}
                    <div className="flex flex-col space-y-2">
                        <div>Aloqa uchun:</div>
                        <a href="tel:+998998765432" target='_blank'>+998 99 876 54 32</a>
                        <a href="mailto:example@gmail.com" target='_blank'>example@gmail.com</a>
                        <ul className="flex space-x-2.5">
                            <li>
                                <a href="https://play.google.com/store/apps?hl=ru&gl=US" target='_blank' aria-label='google play market link'>
                                    <img width={24} height={24} src={googlePlayMarketLogo} alt="logo" className="w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target='_blank' aria-label='facebook link'>
                                    <img width={24} height={24} src={facebookLogo} alt="logo" className="w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com" target='_blank' aria-label='twitter link'>
                                    <img width={24} height={24} src={twitterLogo} alt="logo" className="w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target='_blank' aria-label='youtube link'>
                                    <img width={24} height={24} src={youtubeLogo} alt="logo" className="w-6 h-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;