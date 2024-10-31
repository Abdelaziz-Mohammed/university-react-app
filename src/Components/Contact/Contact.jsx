import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  return (
    <div className="contact">
        <div className="left">
            <h3>
                <img src={msg_icon} alt="..." />
                Send us a message
            </h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive to 
                provide exceptional service to our university community.
            </p>
            <div className="mail">
                <img src={mail_icon} alt="..." />
                <span>Contact@ContactUs.info</span>
            </div>
            <div className="phone">
                <img src={phone_icon} alt="..." />
                <span>+1 123-456-7890</span>
            </div>
            <div className="location">
                <img src={location_icon} alt="..." />
                <div>
                    <span>77 Massachusetts Ave, Cambridge</span>
                    <span>MA 02139, United States</span>
                </div>
            </div>
        </div>
        <div className="right">
            <form>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Enter Your Name' />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" placeholder='Enter Your Phone Number' />
                </div>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div>
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea id="message" placeholder='Enter Your Message' ></textarea>
                </div>
                <button className='custom-btn'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact