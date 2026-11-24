import { useState, useEffect } from "react";
import {
  ShoppingBag,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  X
} from "lucide-react";

import SizeFinder from "./components/SizeFinder";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("ironix-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
});
useEffect(() => {
  localStorage.setItem("ironix-cart", JSON.stringify(cart));
}, [cart]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [message, setMessage] = useState("");

  const applyRecommendedSize = (size) => {
  const updatedSizes = {};

  products.forEach((product) => {
    updatedSizes[product.id] = size;
  });

  setSelectedSizes(updatedSizes);
  setMessage(`Recommended size ${size} applied to your collection!`);
};

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    const size = selectedSizes[product.id] || "M";

    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          size,
          quantity: 1
        }
      ];
    });

    setMessage(`${product.name} added to cart!`);
    setCartOpen(true);
  };

  const updateQuantity = (id, size, change) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id, size) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">
          IRONIX<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#products">COLLECTION</a>
          <a href="#size-finder">SIZE FINDER</a>
        </div>

        <button
          className="cart-link"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingBag size={20} />
          SHOPPING BAG ({cartCount})
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="section-label">
              BUILT FOR MOVEMENT
            </span>

            <h1>
              TRAIN HARD.
              <br />
              <span>LOOK SHARP.</span>
            </h1>

            <p>
              Performance meets everyday style.
              Discover your perfect fit with IRONIX.
            </p>

            <a href="#products" className="hero-btn">
              EXPLORE COLLECTION <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200"
              alt="Fitness training environment"
            />
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <span className="section-label">
              OUR COLLECTION
            </span>
            <h2>EXPLORE THE DROP.</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <strong>₹{product.price}</strong>

                <label className="product-size-label">
                  SELECT SIZE
                </label>

                <select
                  value={selectedSizes[product.id] || "M"}
                  onChange={(e) =>
                    setSelectedSizes((previous) => ({
                      ...previous,
                      [product.id]: e.target.value
                    }))
                  }
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingBag size={17} />
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </section>

        <SizeFinder onRecommend={applyRecommendedSize} />

        <section className="cta-section">
          <h2>YOUR FIT. YOUR RULES.</h2>
          <p>
            Discover the collection and find your perfect fit.
          </p>
          <a href="#products">EXPLORE COLLECTION</a>
        </section>
      </main>

      <footer>
        <h2>IRONIX<span>.</span></h2>
        <p>BUILT FOR MOVEMENT. DESIGNED FOR EVERYDAY.</p>
        <p>© 2026 IRONIX DEMO PROJECT</p>
      </footer>

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-header">
              <h2>YOUR BAG ({cartCount})</h2>

              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X />
              </button>
            </div>

            {message && (
              <p className="cart-message">{message}</p>
            )}

            {cart.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={45} />
                <h3>Your bag is empty</h3>
                <p>Explore our collection and find your fit.</p>
                <button
                  onClick={() => setCartOpen(false)}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div
                      className="cart-item"
                      key={`${item.id}-${item.size}`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>Size: {item.size}</p>
                        <strong>₹{item.price}</strong>

                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, -1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={15} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={15} />
                          </button>

                          <button
                            className="remove-btn"
                            onClick={() =>
                              removeItem(item.id, item.size)
                            }
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Subtotal</span>
                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <p>Shipping and taxes are not included.</p>

                  <button
                    className="checkout-btn"
                    onClick={() =>
                      alert(
                        "This is a demo cart. Live Shopify checkout is not connected."
                      )
                    }
                  >
                    DEMO CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
