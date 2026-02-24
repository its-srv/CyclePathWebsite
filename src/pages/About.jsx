import { motion } from 'framer-motion';
import { Heart, Activity, Users, Baby, Smartphone, Shield, Plug, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const benefits = [
    {
      icon: <Activity size={28} />,
      title: 'Boost circulation',
      description: 'Easy sessions that get your blood moving and leave you energized.'
    },
    {
      icon: <Baby size={28} />,
      title: 'Kids actually move',
      description: 'Games that turn screen time into play time with real activity.'
    },
    {
      icon: <Users size={28} />,
      title: 'Family vibes',
      description: 'Play together, cheer each other on, make moving a group thing.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Parents who care (but chill)',
      description: 'Quick ways to join the fun and track progress without the hassle.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Build healthy habits',
      description: 'Short, fun sessions that stick — no drama, just daily wins.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Better screen balance',
      description: 'Games that nudge kids to move, not just stare — healthier playtime.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Rehab-friendly',
      description: 'Gentle and usable for recovery or anyone easing back into movement.'
    }
  ];

  const howItWorks = [
    {
      icon: <Smartphone size={40} />,
      title: 'Instant pair',
      description: 'Connect your phone fast. No headaches, just go.'
    },
    {
      icon: <Activity size={40} />,
      title: 'Live stats',
      description: 'Your session updates in real time. Track progress, flex gains.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Self-powered and chill',
      description: 'Generates energy while you ride. Clean, quiet, home-friendly.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Charge while you ride',
      description: 'Plug in your phone and top up battery as you pedal. Simple.'
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
          <h1 className="about-hero-title">
            <span className="gradient-text">CyclePath</span> — Pedal. Play. Level up.
          </h1>
          <p className="about-hero-subtitle">
            Turn workouts into games. Pedal to score, charge, and feel great. 🚴‍♂️🎮
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
            <h2 className="about-title">Why it’s different</h2>
            <p className="about-description">
              We fused a home bike with mobile games. You pedal, the game reacts. No boring workouts — just play that moves you.
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
          <h2 className="section-title">Why you’ll love it</h2>
          <p className="section-subtitle">
            Fun workouts. Real results. Zero snooze.
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
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle">
            Pair. Pedal. Play. Simple setup, instant fun.
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
          <h2 className="mission-title">Our mission</h2>
          <p className="mission-description">
            Make fitness fun. Bring people together. Help you move more, not less. Build gear that nudges you to play and feel better.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
