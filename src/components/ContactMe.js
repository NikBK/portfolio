import "../compoStyle/contactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
    return (
        <div id="contactpage">
            <h2 className="title">Get In Touch</h2>
            <div className="contact-container">
                <div className="thanks">
                    <div className="thanks-box">
                        <FontAwesomeIcon icon={faHandshake} size="5x" />
                        <h3>Thank You</h3>
                        <div>Any Queries ?</div>
                    </div>
                </div>
                <form method="post" action="https://formspree.io/f/xzbqwnyq" >
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@gmail.com" name="email" required />
                    </div>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Your Name" name="name" required />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea type="text" placeholder="Hey Nikhil" name="message" required />
                    </div>
                    <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
