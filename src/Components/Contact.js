import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! If you have any questions, suggestions, or feedback, please feel free to get in touch with us.</p>
      <p>You can reach us via email, phone, or by filling out the contact form below:</p>

      <h2>Contact Information</h2>
      <ul>
        <li>Email:  sahyadri@sahyadri.edu.in</li>
        <li>Phone:   + 91 824 2277222/333</li>
        <div class="card-footer ">
                       
                       <a href="https://sahyadri.edu.in/p" class="btn btn-outline-primary">Sahyadri College Of Engineering and Management, Adyar, Mangalore-575007</a>
                       
                   </div>
      </ul>

      <h2>Contact Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
