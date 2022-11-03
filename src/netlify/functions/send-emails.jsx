import React from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_k6x0k3j', 'template_z1oaq2p', e.target, 'duVaWpFkMJxoVJZ96')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <div>
            <form
                name="contact-form"
                method="post"
                onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Full Name</label> <br/>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label> <br/>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="doe@example.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label> <br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message here!"
                        required
                    />
                </div>
                <div>
                    <input type="submit" className="submit" value="Send Message"/>
                </div>
            </form>
        </div>
    );
}