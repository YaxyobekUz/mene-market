import React, { useState } from 'react';

// images
import logo from '../assets/images/other/logo.png';
import chair from '../assets/images/other/chair.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordInput, setPasswordInput] = useState(true);
    return (
        <div className="flex-center justify-center grow container p-0 max-w-[1480px] h-full">
            <div className="grid grid-cols-2 h-screen w-full max-768:grid-cols-1">
                {/* img wrapper */}
                <div
                    className="flex justify-center w-full h-full bg-center bg-cover bg-no-repeat max-768:hidden"
                    style={{ backgroundImage: `url(${chair})` }}
                >
                    {/* logo */}
                    <Link to='/' className='mt-16'>
                        <img width={96} height={48} src={logo} alt="mene market logo image" className="w-24 h-12" />
                    </Link>
                </div>

                {/* main content, login form */}
                <div className="flex justify-center px-20 py-8 h-screen overflow-y-auto max-1024:px-14 max-860:p-10 max-768:h-auto max-768:overflow-y-visible max-450:px-5 scroll_hidden">
                    <div className='max-w-[456px] w-full my-auto'>
                        {/* title */}
                        <h1 className="mb-6">Sign up</h1>
                        <p className="text-regular-16 text-primary-gray-500 mb-8">Already have an account? <Link to='/login' className='text-primary-blue-700 mb-8'>Sign in</Link></p>

                        {/* form */}
                        <form className="register-form">
                            <input
                                type="text"
                                className="register-form_input"
                                name='user nickname'
                                placeholder='Your name'
                                required
                            />
                            <input
                                type="text"
                                className="register-form_input"
                                name='user name'
                                placeholder='Username'
                                required
                            />
                            <input
                                type="email"
                                className="register-form_input"
                                name='user email'
                                placeholder='Email address'
                                required
                            />
                            <div className="register-form_password-input-wrapper">
                                <input
                                    type={`${passwordInput ? 'password' : 'text'}`}
                                    className="register-form_input"
                                    name='user password'
                                    placeholder='Password'
                                    required
                                />
                                <button
                                    className='register-form_password-input-wrapper-button'
                                    type='button'
                                    onClick={() => setPasswordInput(!passwordInput)}
                                >
                                    {
                                        passwordInput
                                            ?
                                            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z" stroke="#949494" strokeWidth="1.5" />
                                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#949494" strokeWidth="1.5" />
                                            </svg>
                                            :
                                            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z" stroke="#949494" strokeWidth="1.5" />
                                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#949494" strokeWidth="1.5" />
                                                <path d="M4 20L20 4" stroke="#949494" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                    }
                                </button>
                            </div>
                            <label className="register-form_privacy-policy-wrapper">
                                <input
                                    type="checkbox"
                                    className="register-form_input-checkbox"
                                    name='user consent'
                                    required
                                />
                                <span className='register-form_privacy-policy-wrapper_text'>
                                    <span>I agree with </span>
                                    <Link to='/public-offer#maxfiylik-siyosati'>Privacy Policy </Link>
                                    <span>and </span>
                                    <Link to='/public-offer#foydalanish-shartlari'>Terms of Use</Link>
                                </span>
                            </label>
                            <button className="register-form_submit-btn">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;