// import { motion } from 'framer-motion';
// import { Heart, Activity, Users, Baby, Smartphone, Shield, Plug, Zap } from 'lucide-react';
// import './About.css';

// const About = () => {
//   const benefits = [
//     {
//       icon: <Activity size={28} />,
//       title: 'Vibe Check',
//       description: 'Keep that blood flowin\' with easy-to-medium cardio. It\'s health, but make it fun.'
//     },
//     {
//       icon: <Baby size={28} />,
//       title: 'Gamer Gains',
//       description: 'Getting teens off the couch by making fitness part of the quest. No more boring gym sessions.'
//     },
//     {
//       icon: <Users size={28} />,
//       title: 'Fam Goals',
//       description: 'Building a healthier home base for the whole squad. Family bonding, but better.'
//     },
//     {
//       icon: <Heart size={28} />,
//       title: 'Hype Squad',
//       description: 'Tools for parents to cheer on the grind and stay in the loop. We love to see it.'
//     },
//     {
//       icon: <Smartphone size={28} />,
//       title: 'Daily Quests',
//       description: 'Turn exercise into a habit, anywhere, anytime. Just you and your phone. Pure convenience.'
//     },
//     {
//       icon: <Shield size={28} />,
//       title: 'Playtime Balance',
//       description: 'Keeping track of screen time so life stays balanced. Work hard, play harder, stay healthy.'
//     },
//     {
//       icon: <Activity size={28} />,
//       title: 'Everyone\'s Invited',
//       description: 'Accessible for recovery or cardio. Whether you\'re post-op or just vibes, we\'ve got you.'
//     }
//   ];

//   const howItWorks = [
//     {
//       icon: <Smartphone size={40} />,
//       title: 'Instant Sync',
//       description: 'Connect your phone to the bike in seconds using Bluetooth. It\'s giving seamless.'
//     },
//     {
//       icon: <Activity size={40} />,
//       title: 'Data Drop',
//       description: 'Your stats sync straight to your band. Grind identified. Track every win.'
//     },
//     {
//       icon: <Shield size={40} />,
//       title: 'Green Energy',
//       description: 'No batteries. No plug. Just pure power from your own effort. Eco-friendly and elite.'
//     },
//     {
//       icon: <Zap size={40} />,
//       title: 'Unlimited Power',
//       description: 'Pedal to charge. Your grind literally powers your phone. That\'s a W for everyone.'
//     }
//   ];

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <motion.div
//       className="about"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="about-hero-background">
//           <div className="hero-gradient-1"></div>
//           <div className="hero-gradient-2"></div>
//         </div>

//         <motion.div
//           className="about-hero-content"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="about-hero-title">CyclePath? <span className="gradient-text">Real.</span></h1>
//           <p className="about-hero-subtitle">
//             Level up your workout. CyclePath turns sweat into gameplay. 
//             Lowkey the best way to move.
//           </p>
//         </motion.div>
//       </section>

//       {/* About Content */}
//       <section className="about-intro">
//         <div className="about-intro-container">
//           <motion.div
//             className="about-image"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="about-image-card glass-card">
//               <div className="about-image-placeholder">
//                 <Activity size={100} className="placeholder-icon" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="about-text"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="about-title">The Ultimate Mashup</h2>
//             <p className="about-description">
//               Bluetooth bike meets mobile gaming. It's a whole new vibe for home workouts. 
//               Whether you're a pro or just starting, we're merging grinding with gaming. 
//               No cap—this is the future of fitness.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="about-benefits">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="section-title">The Perks</h2>
//           <p className="section-subtitle">
//             Upgrade your routine.
//           </p>
//         </motion.div>

//         <motion.div
//           className="benefits-list"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               className="benefit-item glass-card"
//               variants={fadeInUp}
//               whileHover={{ scale: 1.02, x: 10 }}
//             >
//               <div className="benefit-item-icon gradient-text">{benefit.icon}</div>
//               <div className="benefit-item-content">
//                 <h3 className="benefit-item-title">{benefit.title}</h3>
//                 <p className="benefit-item-description">{benefit.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* How It Works Section */}
//       <section className="about-how-it-works">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="section-title">The Setup</h2>
//           <p className="section-subtitle">
//             Big results, zero effort.
//           </p>
//         </motion.div>

//         <motion.div
//           className="how-it-works-grid"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {howItWorks.map((item, index) => (
//             <motion.div
//               key={index}
//               className="how-it-works-card glass-card"
//               variants={fadeInUp}
//             >
//               <div className="how-it-works-icon gradient-text">{item.icon}</div>
//               <h3 className="how-it-works-title">{item.title}</h3>
//               <p className="how-it-works-description">{item.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="how-it-works-visual"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="how-it-works-card glass-card">
//             <Plug size={80} className="usb-icon" />
//             <div className="usb-connection">
//               <div className="usb-line"></div>
//               <div className="usb-pulse"></div>
//             </div>
//             <Smartphone size={40} className="phone-icon" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Mission Section */}
//       <section className="about-mission">
//         <motion.div
//           className="mission-content"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="mission-title">Our Mission</h2>
//           <p className="mission-description">
//             We're here to make fitness not suck. We believe staying active should feel 
//             like a game, not a chore. We're building a world where every rep counts 
//             toward the win. Join the squad and start the grind.
//           </p>
//         </motion.div>
//       </section>
//     </motion.div>
//   );
// };

// export default About;
import { motion } from 'framer-motion';
import { Heart, Activity, Users, Baby, Smartphone, Shield, Plug, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const benefits = [
    {
      icon: <Activity size={28} />,
      title: 'Fun Cardio',
      description: 'Light-to-medium intensity workouts that improve heart health while keeping things enjoyable.'
    },
    {
      icon: <Baby size={28} />,
      title: 'Youth Engagement',
      description: 'Motivating teens to stay active by turning fitness into an interactive experience.'
    },
    {
      icon: <Users size={28} />,
      title: 'Family Wellness',
      description: 'Helping families build healthier routines together at home.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Parental Support',
      description: 'Simple tools for parents to track progress and encourage healthy habits.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Daily Motivation',
      description: 'Turn movement into a consistent habit—anywhere, anytime, using just your phone.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Healthy Balance',
      description: 'Smart tracking that supports a balanced relationship with screen time.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Accessible for Everyone',
      description: 'Suitable for beginners, recovery users, and experienced athletes.'
    }
  ];

  const howItWorks = [
    {
      icon: <Smartphone size={40} />,
      title: 'Instant Sync',
      description: 'Connect your phone to your bike in seconds using Bluetooth.'
    },
    {
      icon: <Activity size={40} />,
      title: 'Real-Time Stats',
      description: 'Track speed, distance, and performance as you ride.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Self-Powered',
      description: 'No batteries or outlets required—powered by your own movement.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Optional Charging',
      description: 'Pedal-generated energy can help charge your phone while you ride.'
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
            About <span className="gradient-text">CyclePath</span>
          </h1>
          <p className="about-hero-subtitle">
            Turning everyday cycling into an interactive fitness experience.
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
            <h2 className="about-title">Who We Are</h2>
            <p className="about-description">
              CyclePath was created with a simple belief: fitness should feel like play, not a chore.
              We combine Bluetooth-enabled bikes with mobile gaming to make staying active engaging,
              motivating, and accessible for everyone.
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
          <h2 className="section-title">Why CyclePath</h2>
          <p className="section-subtitle">
            Designed to support healthier, more active lifestyles.
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple setup. Powerful results.
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
            To make staying active enjoyable, inclusive, and sustainable.
            We’re building a future where every movement feels rewarding
            and every workout feels like progress.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;