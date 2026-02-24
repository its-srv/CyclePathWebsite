import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Filter, X, Check } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const categories = ['all', 'bikes', 'accessories', 'merchandise'];

  const products = [
    {
      id: 1,
      name: 'CyclePath Gaming Bike',
      category: 'bikes',
      price: 499.99,
      originalPrice: 599.99,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/5.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg=true',
      description: 'Bluetooth-enabled exercise bike with gaming integration',
      features: ['Bluetooth connectivity', 'USB charging port', 'Fitness band sync', 'Adjustable resistance'],
      badge: 'Pre-Order'
    },
    {
      id: 2,
      name: 'Fitness Band Pro',
      category: 'accessories',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      description: 'Advanced fitness tracking band for CyclePath',
      features: ['Heart rate monitor', 'Step counter', 'Sleep tracking', 'Water resistant'],
      badge: 'In Stock'
    },
    {
      id: 3,
      name: 'CyclePath Premium Mat',
      category: 'accessories',
      price: 49.99,
      originalPrice: null,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      description: 'Non-slip exercise mat for your CyclePath',
      features: ['Extra thick cushioning', 'Non-slip surface', 'Easy to clean', 'Durable material'],
      badge: 'In Stock'
    },
    {
      id: 4,
      name: 'CyclePath Hoodie',
      category: 'merchandise',
      price: 59.99,
      originalPrice: null,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      description: 'Official CyclePath branded hoodie',
      features: ['Premium cotton blend', 'Embroidered logo', 'Multiple sizes', 'Unisex fit'],
      badge: 'In Stock'
    },
    {
      id: 5,
      name: 'CyclePath Water Bottle',
      category: 'merchandise',
      price: 19.99,
      originalPrice: null,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      description: 'Insulated water bottle with CyclePath logo',
      features: ['24oz capacity', 'Double-wall insulation', 'BPA-free', 'Leak-proof lid'],
      badge: 'In Stock'
    },
    {
      id: 6,
      name: 'Extended Warranty',
      category: 'accessories',
      price: 89.99,
      originalPrice: null,
      image: 'https://img1.wsimg.com/isteam/ip/3495e2a8-0d69-44aa-9914-653f23472d2c/WALL2.png',
      description: '3-year extended warranty for CyclePath bike',
      features: ['Full coverage', '24/7 support', 'Free repairs', 'Parts replacement'],
      badge: 'Digital'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

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
      className="shop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-background">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <motion.div
          className="shop-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ShoppingCart size={60} className="hero-icon" />
          <h1 className="shop-hero-title">Shop</h1>
          <p className="shop-hero-subtitle">
            Get your CyclePath equipment and exclusive merchandise
          </p>
        </motion.div>
      </section>

      {/* Availability Notice */}
      <section className="availability-notice">
        <motion.div
          className="notice-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Check size={24} className="notice-icon" />
          <div className="notice-content">
            <h3>Pre-Order Now</h3>
            <p>
              This product will be available for shipping in 2022. All orders placed are pre-orders.
              Reserve yours today to be among the first to experience CyclePath!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by Category</span>
          </div>
          <div className="filter-options">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <motion.div
          className="products-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card glass-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-badge">{product.badge}</div>
                <button
                  className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    size={20}
                    fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <div className="product-info">
                <div className="product-category">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-features">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <button
                    className={`add-to-cart-btn ${cart.includes(product.id) ? 'added' : ''}`}
                    onClick={() => addToCart(product.id)}
                  >
                    {cart.includes(product.id) ? (
                      <>
                        <Check size={18} />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          className="cart-summary"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="cart-summary-content">
            <ShoppingCart size={20} />
            <span>{cart.length} item{cart.length > 1 ? 's' : ''} in cart</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Shop;
