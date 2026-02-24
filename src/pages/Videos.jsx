import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import './Videos.css';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'CyclePath Gaming Elliptical',
      description: 'See our innovative gaming elliptical in action',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'CyclePath Promo Video',
      description: 'Learn more about our vision and technology',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Interview with Digital Trends',
      description: 'CyclePath featured on Digital Trends',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Interview with CEO',
      description: 'Exclusive interview with the CyclePath CEO',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      title: 'Shark Tank Submission Video',
      description: 'Our Shark Tank pitch submission',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 6,
      title: 'CES Las Vegas 2020',
      description: 'CyclePath at CES 2020',
      thumbnail: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      youtubeId: 'dQw4w9WgXcQ'
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
      className="videos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="videos-hero">
        <div className="videos-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="videos-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Youtube size={60} className="hero-icon" />
          <h1 className="videos-hero-title">Videos</h1>
          <p className="videos-hero-subtitle">
            Watch CyclePath in action and learn more about our revolutionary technology
          </p>
        </motion.div>
      </section>

      {/* Videos Grid */}
      <section className="videos-section">
        <motion.div
          className="videos-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="video-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <div
                className="video-thumbnail"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail-image"
                />
                <div className="play-overlay">
                  <Play size={48} className="play-icon" />
                </div>
                <div className="video-duration">12:34</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="video-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <div className="video-player">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-modal-info">
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Videos;
