import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
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
        </div>


    )
}

export default ContactForm;