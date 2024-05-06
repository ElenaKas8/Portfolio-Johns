import React from 'react';
import css from '../ContactPage/ContactPage.module.css'; // Подключаем CSS файл с стилями

const ContactPage = () => {
  return (
    <section className={css.contact}>
      <h1>Contact Us</h1>
      <form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className={css.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default ContactPage;
