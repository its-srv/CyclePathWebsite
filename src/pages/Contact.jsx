import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', subscribe: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'info@cyclepath2life.com',
      link: 'mailto:info@cyclepath2life.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      value: 'United States',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Mail size={60} className="hero-icon" />
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Drop us a line with any questions or comments!
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card glass-card">
              <h2 className="form-title">Send us a Message</h2>

              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    <span>Sign up for our email list for updates, promotions, and more.</span>
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>

              <p className="recaptcha-notice">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card glass-card">
              <h3 className="info-title">Get in Touch</h3>
              <p className="info-description">
                Have questions about CyclePath? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="contact-item"
                    onClick={(e) => !item.link && e.preventDefault()}
                  >
                    <div className="contact-icon gradient-text">{item.icon}</div>
                    <div className="contact-text">
                      <div className="contact-label">{item.title}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
