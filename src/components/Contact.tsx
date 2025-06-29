import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [statusType, setStatusType] = useState<'success' | 'error' | 'sending' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setStatusType('sending');

    try {
      const response = await fetch('https://formspree.io/f/mblywlwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setStatusType('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
        setStatusType('error');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      setStatusType('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions about our team or want to support us? Send us a message and we'll get back to you as soon as possible.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> <a href="mailto:contact@10988.org">contact@10988.org</a></p>
            </div>
          </div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
              {status && <p className={`form-status ${statusType ? `status-${statusType}` : ''}`}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
