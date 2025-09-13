import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_h43ouq8', 'template_cb8sueh', form.current, 'sA5LPEX_Im63VLmCD')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log('Email failed:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
