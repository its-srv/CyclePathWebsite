import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Mail, Phone, Book, Wrench, Users, ChevronDown, ChevronUp, Send } from 'lucide-react';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    alert('Thank you for contacting support! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const supportOptions = [
    {
      icon: <Book size={32} />,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive guides and tutorials',
      link: '#'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Troubleshooting',
      description: 'Find solutions to common issues',
      link: '#'
    },
    {
      icon: <Users size={32} />,
      title: 'Community',
      description: 'Connect with other CyclePath users',
      link: '#'
    },
    {
      icon: <Mail size={32} />,
      title: 'Contact Support',
      description: 'Get personalized help from our team',
      link: '#contact-form'
    }
  ];

  const faqs = [
    {
      question: 'How do I connect my CyclePath bike to my smartphone?',
      answer: 'Enable Bluetooth on your smartphone, power on your CyclePath bike, and select "CyclePath" from the available Bluetooth devices. The bike will automatically sync with your phone.'
    },
    {
      question: 'What fitness bands are compatible with CyclePath?',
      answer: 'CyclePath is compatible with most popular fitness bands including Fitbit, Apple Watch, and Garmin devices. Our proprietary fitness band is also included with your purchase.'
    },
    {
      question: 'Can I charge my phone while riding?',
      answer: 'Yes! CyclePath generates energy as you pedal. Simply connect your phone to the USB port on the bike to charge it while you exercise.'
    },
    {
      question: 'How do I download CyclePath games?',
      answer: 'Games can be downloaded from the App Store or Google Play Store. Search for "CyclePath" to find our growing library of games.'
    },
    {
      question: 'What is the warranty on CyclePath?',
      answer: 'CyclePath comes with a 1-year standard warranty. Extended warranty options are available for purchase in our shop.'
    },
    {
      question: 'Is CyclePath suitable for physical therapy?',
      answer: 'Yes, CyclePath is designed to be user-friendly for individuals with medical needs, including post-surgery physical therapy. Always consult with your healthcare provider before starting any exercise program.'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="support"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="support-hero">
        <div className="support-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="support-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HelpCircle size={60} className="hero-icon" />
          <h1 className="support-hero-title">Support</h1>
          <p className="support-hero-subtitle">
            We're here to help you get the most out of your CyclePath experience
          </p>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="support-options">
        <motion.div
          className="support-options-grid grid-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {supportOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.link}
              className="support-option-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="support-option-icon gradient-text">{option.icon}</div>
              <h3 className="support-option-title">{option.title}</h3>
              <p className="support-option-description">{option.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common questions
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="support-contact-section">
        <div className="support-contact-container">
          <motion.div
            className="contact-info-card glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-info-title">Still need help?</h2>
            <p className="contact-info-description">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={24} className="method-icon" />
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">support@cyclepath2life.com</div>
                </div>
              </div>

              <div className="contact-method">
                <Phone size={24} className="method-icon" />
                <div>
                  <div className="method-label">Phone</div>
                  <div className="method-value">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="support-hours">
              <h4>Support Hours</h4>
              <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
              <p>Saturday - Sunday: 10:00 AM - 6:00 PM EST</p>
            </div>
          </motion.div>

          <motion.div
            className="support-form-card glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="form-title">Submit a Support Request</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
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
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
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

              <button type="submit" className="submit-btn">
                <Send size={20} />
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Support;
