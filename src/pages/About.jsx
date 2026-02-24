import { motion } from 'framer-motion';
import { Heart, Activity, Users, Baby, Smartphone, Shield, Plug, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const benefits = [
    {
      icon: <Activity size={28} />,
      title: 'Blood Circulation',
      description: 'Promotes blood circulation with light to medium exercise, enhancing the health benefits of exercise.'
    },
    {
      icon: <Baby size={28} />,
      title: 'Active Youth',
      description: 'Helps children and teens become more physically active by integrating fitness band technology into their routines.'
    },
    {
      icon: <Users size={28} />,
      title: 'Family Health',
      description: 'Creates a healthier environment and home life for families.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Parental Engagement',
      description: 'Provides parents with better tools to engage in their kids\' health and fitness journey.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Healthy Habits',
      description: 'Conditions kids to perform exercise while playing on their smartphones, no matter where they are.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Parental Monitoring',
      description: 'Allows parents to monitor their children\'s game playing time on their smartphones, ensuring a balanced lifestyle.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Medical Accessibility',
      description: 'User-friendly for anyone with medical needs, such as post-surgery physical therapy or diabetic patients.'
    }
  ];

  const howItWorks = [
    {
      icon: <Smartphone size={40} />,
      title: 'Bluetooth Connection',
      description: 'CyclePath utilizes Bluetooth exercise bike technology to connect your smartphone to the bike.'
    },
    {
      icon: <Activity size={40} />,
      title: 'Fitness Sync',
      description: 'Your information and statistics are synced with the included fitness band technology.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Eco-Friendly Design',
      description: 'The bike operates without outside power, emits no harmful gases or radiation, and is suitable for all ages.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Energy Generation',
      description: 'As you pedal, you generate energy, enabling you to charge your phone or any device through the USB port.'
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
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-hero-title">About <span className="gradient-text">CyclePath</span></h1>
          <p className="about-hero-subtitle">
            Discover innovative home exercise technology that combines the health benefits
            of exercise with fun gaming experiences.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="about-intro">
        <div className="about-intro-container">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-card glass-card">
              <div className="about-image-placeholder">
                <Activity size={100} className="placeholder-icon" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">Revolutionary Hybrid Technology</h2>
            <p className="about-description">
              This hybrid technology, featuring a Bluetooth exercise bike, offers both health
              benefits and game-playing capabilities. It represents an exciting new category
              in home gaming and home exercise, paving the way for children and adults to
              discover how to combine both activities effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="about-benefits">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Benefits</h2>
          <p className="section-subtitle">
            Transform your lifestyle with CyclePath
          </p>
        </motion.div>

        <motion.div
          className="benefits-list"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="benefit-item-icon gradient-text">{benefit.icon}</div>
              <div className="benefit-item-content">
                <h3 className="benefit-item-title">{benefit.title}</h3>
                <p className="benefit-item-description">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="about-how-it-works">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How Does It Work?</h2>
          <p className="section-subtitle">
            Simple technology, powerful results
          </p>
        </motion.div>

        <motion.div
          className="how-it-works-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              className="how-it-works-card glass-card"
              variants={fadeInUp}
            >
              <div className="how-it-works-icon gradient-text">{item.icon}</div>
              <h3 className="how-it-works-title">{item.title}</h3>
              <p className="how-it-works-description">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="how-it-works-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="how-it-works-card glass-card">
            <Plug size={80} className="usb-icon" />
            <div className="usb-connection">
              <div className="usb-line"></div>
              <div className="usb-pulse"></div>
            </div>
            <Smartphone size={40} className="phone-icon" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-description">
            At CyclePath, we believe in making fitness fun and accessible for everyone.
            Our mission is to revolutionize the way people think about exercise by
            combining it with the engaging world of gaming. We're committed to creating
            products that promote health, bring families together, and make staying
            active an enjoyable part of your daily routine.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
