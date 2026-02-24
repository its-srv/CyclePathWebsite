import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Zap, Smartphone, Users, Shield, Gamepad2 } from 'lucide-react';
import './Home.css';

const Home = () => {
  const benefits = [
    {
      icon: <Heart size={32} />,
      title: 'Health Benefits',
      description: 'Promotes blood circulation with light to medium exercise, enhancing overall health and wellness.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Active Lifestyle',
      description: 'Helps children and teens become more physically active by integrating fitness into their gaming routines.'
    },
    {
      icon: <Users size={32} />,
      title: 'Family Health',
      description: 'Creates a healthier environment and home life for families with shared fitness goals.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Energy Generation',
      description: 'Generate energy while you pedal and charge your devices through the USB port.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Smart Integration',
      description: 'Connects via Bluetooth to sync your stats with fitness band technology.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Accessible for All',
      description: 'User-friendly for medical needs, post-surgery therapy, and diabetic patients.'
    }
  ];

  const features = [
    {
      title: 'Bluetooth Connectivity',
      description: 'Seamlessly connect your smartphone and sync your fitness data.'
    },
    {
      title: 'Fitness Band Integration',
      description: 'Track your progress with integrated fitness band technology.'
    },
    {
      title: 'Self-Powered',
      description: 'No external power needed - generate your own energy while exercising.'
    },
    {
      title: 'Eco-Friendly',
      description: 'Zero emissions, no harmful gases or radiation.'
    },
    {
      title: 'USB Charging',
      description: 'Charge your devices while you pedal.'
    },
    {
      title: 'All Ages Welcome',
      description: 'Suitable for users of all ages and fitness levels.'
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
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">CyclePath</span>
              <span className="hero-title-sub">2Life</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionizing home fitness through innovative gaming technology.
              Transform your exercise routine into an immersive gaming experience.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/shop" className="btn-primary">
                Pre-Order Now
                <ArrowRight size={20} className="btn-icon" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="hero-card float">
              <Gamepad2 size={120} className="hero-icon" />
              <div className="hero-glow"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About CyclePath</h2>
          <p className="section-subtitle">
            A revolutionary hybrid technology combining health benefits with gaming
          </p>
        </motion.div>

        <motion.div
          className="about-preview-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-text">
            <p className="about-description">
              CyclePath represents an exciting new category in home gaming and home exercise,
              paving the way for children and adults to discover how to combine both activities
              effectively. Our Bluetooth exercise bike offers both health benefits and
              game-playing capabilities.
            </p>
            <Link to="/about" className="learn-more-link">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            className="about-stats"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { value: '100%', label: 'Eco-Friendly' },
              { value: '0', label: 'Emissions' },
              { value: '∞', label: 'Fun' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card glass-card"
                variants={fadeInUp}
              >
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose CyclePath?</h2>
          <p className="section-subtitle">
            Experience the perfect fusion of fitness and entertainment
          </p>
        </motion.div>

        <motion.div
          className="benefits-grid grid-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="benefit-icon gradient-text">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple setup, powerful results
          </p>
        </motion.div>

        <motion.div
          className="steps-container"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="step-card"
              variants={fadeInUp}
            >
              <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="step-title">{feature.title}</h3>
              <p className="step-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-background"></div>
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Ready to Transform Your Fitness?</h2>
          <p className="cta-description">
            Join the revolution and be the first to experience CyclePath
          </p>
          <div className="cta-buttons">
            <Link to="/shop" className="btn-primary">
              Pre-Order Now
              <ArrowRight size={20} className="btn-icon" />
            </Link>
            <Link to="/videos" className="btn-secondary">
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <motion.div
          className="quick-links-grid grid-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { title: 'Explore Games', description: 'Discover our gaming library', link: '/games', icon: <Gamepad2 size={32} /> },
            { title: 'Watch Videos', description: 'See CyclePath in action', link: '/videos', icon: <Activity size={32} /> },
            { title: 'Get Support', description: 'We\'re here to help', link: '/support', icon: <Shield size={32} /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="quick-link-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={item.link} className="quick-link-content">
                <div className="quick-link-icon gradient-text">{item.icon}</div>
                <h3 className="quick-link-title">{item.title}</h3>
                <p className="quick-link-description">{item.description}</p>
                <ArrowRight size={20} className="quick-link-arrow" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
