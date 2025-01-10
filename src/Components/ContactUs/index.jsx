import "./index.css";
import { Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className='container' >
        <h1>Contact Us</h1>
        <div className='line'>
          <Phone/>
          <h4>Email: </h4>
          <p>bwlogistics.usa@gmail.com</p>
        </div>
        <div className='line'>
          <Mail/>
          <h4>Contact Number: </h4>
          <p>+1 310-696-9907</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;