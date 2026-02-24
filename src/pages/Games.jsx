import { motion } from 'framer-motion';
import { Gamepad2, Download, Play } from 'lucide-react';
import './Games.css';

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'Bike & Hill',
      description: 'Follow the path and collect the balls with this off-road cycling track game. CyclePath automatically adjusts the resistance.',
      image: 'https://isteam.wsimg.com/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/SmartSelect_20190623-163831_Bike_Hills.gif/:/cr=t:5.66%25,l:21.65%25,w:63.91%25,h:94.34%25/rs=w:388,h:291.72932330827064,cg:true,m',
      category: 'Adventure',
      platforms: ['iOS', 'Android']
    },
    {
      id: 2,
      title: 'Cat Run',
      description: 'The goal of this game is speed. Pedal as fast as you can to collect fish bones while avoiding obstacles trying to slow you down.',
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/Screen%20Shot%202019-12-16%20at%206.45.23%20PM.png/:/cr=t:6.61%25,l:0%25,w:100%25,h:76.21%25/rs=w:388,h:291.72932330827064,cg:true',
      category: 'Action',
      platforms: ['iOS', 'Android']
    },
    {
      id: 3,
      title: 'Speed Demon',
      description: 'Race against time in this high-speed cycling adventure. Challenge yourself with increasing difficulty levels.',
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      category: 'Racing',
      platforms: ['iOS', 'Android']
    },
    {
      id: 4,
      title: 'Mountain Trek',
      description: 'Navigate through challenging mountain trails while building your endurance. Perfect for outdoor simulation.',
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      category: 'Simulation',
      platforms: ['iOS']
    }
  ];

  const comingSoonGames = [
    {
      title: 'Cosmic Cycle',
      description: 'Journey through space while pedaling through galaxies',
      category: 'Adventure'
    },
    {
      title: 'Urban Racer',
      description: 'Navigate city streets and compete in virtual races',
      category: 'Racing'
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
      className="games"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="games-hero">
        <div className="games-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="games-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Gamepad2 size={60} className="hero-icon" />
          <h1 className="games-hero-title">Games</h1>
          <p className="games-hero-subtitle">
            Experience fitness gaming like never before. Our games integrate seamlessly
            with CyclePath to make exercise fun and engaging.
          </p>
        </motion.div>
      </section>

      {/* Available Games */}
      <section className="games-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Available Games</h2>
          <p className="section-subtitle">
            Download and play these exciting games with your CyclePath
          </p>
        </motion.div>

        <motion.div
          className="games-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="game-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <div className="game-image">
                <img src={game.image} alt={game.title} />
                <div className="game-category">{game.category}</div>
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-platforms">
                  {game.platforms.map((platform) => (
                    <span key={platform} className="platform-badge">
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="game-actions">
                  <button className="btn-primary">
                    <Download size={18} />
                    Download
                  </button>
                  <button className="btn-secondary">
                    <Play size={18} />
                    Play Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Coming Soon */}
      <section className="coming-soon-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Coming Soon</h2>
          <p className="section-subtitle">
            Exciting new games in development
          </p>
        </motion.div>

        <motion.div
          className="coming-soon-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {comingSoonGames.map((game, index) => (
            <motion.div
              key={index}
              className="coming-soon-card glass-card"
              variants={fadeInUp}
            >
              <div className="coming-soon-icon gradient-text">
                <Gamepad2 size={48} />
              </div>
              <h3 className="coming-soon-title">{game.title}</h3>
              <p className="coming-soon-description">{game.description}</p>
              <div className="coming-soon-category">{game.category}</div>
              <div className="coming-soon-badge">Coming Soon</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Info Banner */}
      <section className="games-info">
        <motion.div
          className="games-info-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Gamepad2 size={48} className="info-icon" />
          <h3>More Games Coming</h3>
          <p>
            When we go into full production we will have a wide selection of various games
            for both iOS and Android. All games will be able to be downloaded from this
            website or the app store.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Games;
