import React, { useEffect } from 'react';

// components
import FaqMainContent from '../components/FaqMainContent';

// images
import shop from '../assets/images/svg/shop.svg';
import call from '../assets/images/svg/call.svg';
import sms from '../assets/images/svg/sms.svg';


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* main content */}
            <div className="container">
                <h1 className="text-semibold-36 text-center mb-6 max-768:text-[32px] max-450:text-3xl">Contact Us</h1>

                <div className="grid grid-cols-3 gap-6 max-768:grid-cols-2 max-540:grid-cols-1 mb-12 max-768:mb-10 max-450:mb-8">
                    {/* item */}
                    <div className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center">
                        <img width={32} height={32} src={shop} alt="shop" className="w-8 h-8" />
                        <div className="space-y-2 max-w-[280px]">
                            <h3 className="text-primary-gray-500">Address</h3>
                            <address className='text-regular-16'>120, Chinobod, Andijon, O’zbekiston</address>
                        </div>
                    </div>

                    {/* item */}
                    <div className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center">
                        <img width={32} height={32} src={call} alt="telephone" className="w-8 h-8" />
                        <div className="space-y-2 max-w-[280px]">
                            <h3 className="text-primary-gray-500">Contact us</h3>
                            <a href='tel:+998998745678' target='_blank' className='block text-regular-16'>+998 99 874 56 78</a>
                        </div>
                    </div>

                    {/* item */}
                    <div className="flex-center flex-col p-6 space-y-4 rounded-lg bg-primary-gray-50 text-center max-768:col-start-1 max-768:col-end-3 max-540:col-end-2">
                        <img width={32} height={32} src={sms} alt="email" className="w-8 h-8" />
                        <div className="space-y-2 max-w-[280px]">
                            <h3 className="text-primary-gray-500">Email</h3>
                            <a href='mailto:hello@example.com' target='_blank' className='block text-regular-16'>hello@example.com</a>
                        </div>
                    </div>
                </div>

                {/* send a message */}
                <div className="grid grid-cols-2 gap-6 mb-16 max-1024:mb-14 max-768:mb-10 max-640:grid-cols-1 max-640:flex max-640:flex-col-reverse max-450:mb-8">
                    <form className="contact-page_form">
                        <label className='contact-page_form_input-wrapper'>
                            <span className="contact-page_form_label-text">Full Name</span>
                            <input
                                className='contact-page_form_input'
                                type="text"
                                placeholder='Your Name'
                                name='user name'
                                required
                            />
                        </label>

                        <label className='contact-page_form_input-wrapper'>
                            <span className="contact-page_form_label-text">Email address</span>
                            <input
                                className='contact-page_form_input'
                                type="email"
                                placeholder='Your Email'
                                name='user email'
                                required
                            />
                        </label>

                        <label className='contact-page_form_input-wrapper'>
                            <span className="contact-page_form_label-text">Message</span>
                            <textarea
                                className='contact-page_form_input p-4 h-28 resize-none'
                                placeholder='Your message'
                                name='user message'
                                required
                            >
                            </textarea>
                        </label>
                        <button className='contact-page_form_button'>
                            <span className="text-regular-16">Send Message</span>
                        </button>
                    </form>

                    {/* map */}
                    <iframe
                        className='w-full h-full max-640:h-80'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d859.8233566377858!2d71.97749393807459!3d40.87637480506904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1705252709584!5m2!1sru!2s"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* sub content */}
            <div className="py-14 bg-primary-gray-50">
                <div className="container">
                    <FaqMainContent />
                </div>
            </div>
        </div>
    )
};

export default Contact;