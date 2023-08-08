// import "./ContactFormStyles.css";

// function ContactForm() {
    
//     return(
//         <div className="form-container">
//             <h1>Send a message to us!</h1>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input type="text" id="name" placeholder="Enter your name" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" placeholder="Enter your email" />
//                 </div>
                
//                 <div className="form-group">
//                     <label htmlFor="subject">Subject</label>
//                     <input type="text" id="subject" placeholder="Enter your subject" />
//                 </div>


//                 <div className="form-group">
//                     <label htmlFor="message">Message</label>
//                     <textarea id="message" placeholder="Enter your message"></textarea>
//                 </div>
//                 <button type="submit">Send</button>
//             </form>
//         </div>


//     )
// }

// export default ContactForm;

import React, { useState } from 'react';
import './ContactFormStyles.css';

function ContactForm() {
    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic goes here

        // For demonstration purposes, let's simulate a submission delay
        setTimeout(() => {
            setNotification('Message sent successfully!');
        }, 1000); // You can adjust the delay as needed
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Enter your subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            {notification && <p className="notification">{notification}</p>}
        </div>
    );
}

export default ContactForm;
