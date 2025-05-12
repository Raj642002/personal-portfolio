import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="1b686d12-d15e-43ad-9374-a7d781f8ccee" />
        
        <label>Your Name</label>
        <input type="text" name="name" className="contact-inputs" required />
        
        <label>Email</label>
        <input type="email" name="email" className="contact-inputs" required />
        
        <label>Subject</label>
        <input type="text" name="subject" className="contact-inputs" required />
        
        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" required />
        
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
