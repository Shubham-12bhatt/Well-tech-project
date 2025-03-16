// Sample product data
const products = [
  {
      id: 1,
      name: "Ashwagandha Root Powder",
      category: "Herbs & Supplements",
      image: "https://t4.ftcdn.net/jpg/12/28/34/35/360_F_1228343582_vFrrsqREel3v3M7EzvTVFZBvbxMAFn6j.jpg",
      currentPrice: 499,
      originalPrice: 599,
      discount: "17%",
      badge: "Bestseller",
      rating: 4.8,
      reviewCount: 124,
      description: "Organic Ashwagandha root powder to help reduce stress and anxiety. Supports adrenal function and thyroid health.",
      stock: 45,
      tags: ["bestseller", "herbs"]
  },
  {
      id: 2,
      name: "Triphala Formula",
      category: "Ayurvedic Formulations",
      image: "https://greneraorganics.in/cdn/shop/products/1_ab8d1481-79db-487c-8264-9a8930f4e125_1024x1024.jpg?v=1654598596",
      currentPrice: 399,
      originalPrice: 499,
      discount: "13%",
      badge: "Popular",
      rating: 4.7,
      reviewCount: 89,
      description: "Traditional Ayurvedic formula supporting digestion and detoxification. Contains Amalaki, Bibhitaki, and Haritaki.",
      stock: 32,
      tags: ["bestseller", "formulations"]
  },
  {
      id: 3,
      name: "Brahmi Mind Support",
      category: "Herbs & Supplements",
      image: "https://www.kudosayurveda.com/wp-content/uploads/2021/04/5-3-1.jpg",
      currentPrice: 549,
      originalPrice: null,
      discount: null,
      badge: "New",
      rating: 4.5,
      reviewCount: 37,
      description: "Supports mental clarity, focus and memory. Traditional herb for enhancing cognitive function.",
      stock: 28,
      tags: ["new", "herbs"]
  },
  {
      id: 4,
      name: "Neem Purifying Oil",
      category: "Essential Oils",
      image: "https://media.istockphoto.com/id/1357894587/photo/neem-oil-in-bottle-and-neem-leaf-with-branch-on-wooden-background.jpg?s=612x612&w=0&k=20&c=9bo5iW0b52Ks6x2lRfKdO__q1vCJMUxmj9zirUgQAAw=",
      currentPrice: 299,
      originalPrice: 399,
      discount: "24%",
      badge: "Sale",
      rating: 4.6,
      reviewCount: 65,
      description: "Pure Neem oil for skin conditions. Helps with acne, eczema, and fungal infections.",
      stock: 19,
      tags: ["sale", "oils"]
  },
  {
      id: 5,
      name: "Turmeric Curcumin Capsules",
      category: "Herbs & Supplements",
      image: "https://m.media-amazon.com/images/I/81p-cD4RFxL.jpg",
      currentPrice: 699,
      originalPrice: 799,
      discount: "15%",
      badge: "Bestseller",
      rating: 4.9,
      reviewCount: 152,
      description: "High-potency turmeric extract with enhanced bioavailability. Anti-inflammatory and antioxidant support.",
      stock: 56,
      tags: ["bestseller", "herbs"]
  },
  {
      id: 6,
      name: "Chyawanprash Herbal Jam",
      category: "Ayurvedic Formulations",
      image: "https://m.media-amazon.com/images/I/71VOjFL99wL.jpg",
      currentPrice: 499,
      originalPrice: null,
      discount: null,
      badge: null,
      rating: 4.7,
      reviewCount: 84,
      description: "Traditional Ayurvedic superfood jam with over 40 herbs and spices. Immune support and vitality.",
      stock: 23,
      tags: ["formulations"]
  },
  {
  id: 7,
        name: "Kumkumadi Face Oil",
        category: "Natural Skincare",
        image: "https://images-static.nykaa.com/media/catalog/product/3/7/3789a2e8907935899719_1.jpg",
        currentPrice: 899,
        originalPrice: 999,
        discount: "13%",
        badge: "Popular",
        rating: 4.8,
        reviewCount: 76,
        description: "Luxurious facial oil with saffron and 25 precious herbs. Reduces dark spots and promotes glowing skin.",
        stock: 17,
        tags: ["skincare", "bestseller"]
    },
    {
        id: 8,
        name: "Tulsi Holy Basil Tea",
        category: "Herbs & Supplements",
        image: "https://media.istockphoto.com/id/1423117189/photo/basil-tea-in-transparent-cup.jpg?s=612x612&w=0&k=20&c=qrXK3FYOg92CHQDQvmbX4WC5wvMV8KQ50WroVnwPHJw=",
        currentPrice: 199,
        originalPrice: null,
        discount: null,
        badge: "New",
        rating: 4.6,
        reviewCount: 42,
        description: "Organic Tulsi tea blend for stress relief and immune support. Contains three sacred varieties of Tulsi.",
        stock: 38,
        tags: ["new", "herbs"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize product display
    displayProducts('all');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize cart functionality
    initCart();
});

// Display products based on filter
function displayProducts(filter) {
    const productGrid = document.querySelector('.product-grid');
    
    // Clear current products
    productGrid.innerHTML = '';
    
    // Filter products based on selected filter
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.tags.includes(filter));
    }
    
    // Create product cards
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Update filter buttons
    updateFilterButtons(filter);
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    // Badge
    if (product.badge) {
        const badge = document.createElement('div');
        badge.className = 'product-badge';
        badge.textContent = product.badge;
        card.appendChild(badge);
    }
    
    // Image
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);
    
    // Product info
    const info = document.createElement('div');
    info.className = 'product-info';
    
    // Name
    const name = document.createElement('h3');
    name.textContent = product.name;
    info.appendChild(name);
    
    // Category
    const category = document.createElement('div');
    category.className = 'product-category';
    category.textContent = product.category;
    info.appendChild(category);
    
    // Price
    const price = document.createElement('div');
    price.className = 'product-price';
    
    const currentPrice = document.createElement('span');
    currentPrice.className = 'current-price';
    currentPrice.textContent = `₹${product.currentPrice.toFixed(2)}`;
    price.appendChild(currentPrice);
    
    if (product.originalPrice) {
        const originalPrice = document.createElement('span');
        originalPrice.className = 'original-price';
        originalPrice.textContent = `₹${product.originalPrice.toFixed(2)}`;
        price.appendChild(originalPrice);
        
        const discount = document.createElement('span');
        discount.className = 'discount';
        discount.textContent = product.discount;
        price.appendChild(discount);
    }
    
    info.appendChild(price);
    
    // Add to cart button
    const button = document.createElement('button');
    button.className = 'btn add-to-cart';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', function(e) {
        e.preventDefault();
        addToCart(product);
    });
    info.appendChild(button);
    
    card.appendChild(info);
    
    // Make the card clickable to view product details
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('add-to-cart')) {
            viewProductDetails(product.id);
        }
    });
    
    return card;
}

// Update filter buttons active state
function updateFilterButtons(activeFilter) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === activeFilter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            // Redirect to category page or filter products
            // For now, we'll just filter products
            displayProducts(category);
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more .btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, this would load more products from the server
            alert('In a real application, this would load more products from the server.');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // In a real application, this would send the email to the server
            alert(`Thank you for subscribing with ${email}. You'll receive our updates soon!`);
            this.reset();
        });
    }
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
            if (nav.classList.contains('show')) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = '#fff';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            } else {
                nav.style.display = '';
            }
        });
    }
}

// Initialize cart functionality
// Enhanced Cart Functionality
function initCart() {
  // Check if cart exists in localStorage
  let cart = JSON.parse(localStorage.getItem('welltech-cart')) || [];
  
  // Update cart count
  updateCartCount(getTotalItemsInCart(cart));
  
  // Add event listener to cart icon
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
      cartIcon.addEventListener('click', function(e) {
          e.preventDefault();
          toggleCartDropdown();
      });
  }
  
  // Close cart dropdown when clicking outside
  document.addEventListener('click', function(e) {
      const cartDropdown = document.querySelector('.cart-dropdown');
      const cartIcon = document.querySelector('.cart-icon');
      
      if (cartDropdown && !cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
          cartDropdown.classList.remove('show');
      }
  });
}

// Add product to cart
function addToCart(product) {
  // Get current cart
  let cart = JSON.parse(localStorage.getItem('welltech-cart')) || [];
  
  // Check if product already exists in cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingProductIndex > -1) {
      // Increase quantity
      cart[existingProductIndex].quantity += 1;
  } else {
      // Add new product to cart
      cart.push({
          id: product.id,
          name: product.name,
          price: product.currentPrice,
          image: product.image,
          quantity: 1
      });
  }
  
  // Save cart to localStorage
  localStorage.setItem('welltech-cart', JSON.stringify(cart));
  
  // Update cart count
  updateCartCount(getTotalItemsInCart(cart));
  
  // Update cart dropdown if visible
  const cartDropdown = document.querySelector('.cart-dropdown');
  if (cartDropdown && cartDropdown.classList.contains('show')) {
      renderCartItems();
  }
  
  // Show success message
  showNotification(`${product.name} added to cart!`);
}

// Calculate total items in cart (including quantities)
function getTotalItemsInCart(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Update cart count in header
function updateCartCount(count) {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
      cartCount.textContent = count;
  }
}

// Toggle cart dropdown
function toggleCartDropdown() {
  // Check if cart dropdown already exists
  let cartDropdown = document.querySelector('.cart-dropdown');
  
  if (!cartDropdown) {
      // Create cart dropdown
      cartDropdown = document.createElement('div');
      cartDropdown.className = 'cart-dropdown';
      
      // Add cart dropdown to header
      const headerIcons = document.querySelector('.header-icons');
      headerIcons.style.position = 'relative';
      headerIcons.appendChild(cartDropdown);
      
      // Style cart dropdown
      cartDropdown.style.position = 'absolute';
      cartDropdown.style.top = '100%';
      cartDropdown.style.right = '0';
      cartDropdown.style.width = '320px';
      cartDropdown.style.backgroundColor = '#fff';
      cartDropdown.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      cartDropdown.style.borderRadius = '4px';
      cartDropdown.style.padding = '15px';
      cartDropdown.style.zIndex = '100';
      cartDropdown.style.display = 'none';
      cartDropdown.style.maxHeight = '400px';
      cartDropdown.style.overflowY = 'auto';
  }
  
  // Toggle display
  cartDropdown.classList.toggle('show');
  
  // Update display style based on class
  if (cartDropdown.classList.contains('show')) {
      cartDropdown.style.display = 'block';
      renderCartItems();
  } else {
      cartDropdown.style.display = 'none';
  }
}

// Render cart items in dropdown
function renderCartItems() {
  const cartDropdown = document.querySelector('.cart-dropdown');
  if (!cartDropdown) return;
  
  // Get cart items
  const cart = JSON.parse(localStorage.getItem('welltech-cart')) || [];
  
  // Clear current content
  cartDropdown.innerHTML = '';
  
  // If cart is empty
  if (cart.length === 0) {
      cartDropdown.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
      return;
  }
  
  // Create cart header
  const cartHeader = document.createElement('div');
  cartHeader.className = 'cart-header';
  cartHeader.innerHTML = `<h3>Your Cart (${getTotalItemsInCart(cart)} items)</h3>`;
  cartDropdown.appendChild(cartHeader);
  
  // Create cart items container
  const cartItems = document.createElement('div');
  cartItems.className = 'cart-items';
  
  // Add each item to cart
  cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
          <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
              <h4>${item.name}</h4>
              <div class="cart-item-price">₹${item.price.toFixed(2)} × ${item.quantity}</div>
          </div>
          <div class="cart-item-actions">
              <button class="cart-item-remove" data-id="${item.id}">×</button>
          </div>
      `;
      
      // Style cart item
      cartItem.style.display = 'flex';
      cartItem.style.alignItems = 'center';
      cartItem.style.padding = '10px 0';
      cartItem.style.borderBottom = '1px solid #eee';
      
      // Style image
      const cartItemImage = cartItem.querySelector('.cart-item-image');
      cartItemImage.style.width = '60px';
      cartItemImage.style.height = '60px';
      cartItemImage.style.marginRight = '10px';
      
      // Style image
      const img = cartItem.querySelector('img');
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '4px';
      
      // Style details
      const cartItemDetails = cartItem.querySelector('.cart-item-details');
      cartItemDetails.style.flex = '1';
      
      // Style product name
      const productName = cartItem.querySelector('h4');
      productName.style.fontSize = '14px';
      productName.style.margin = '0 0 5px 0';
      
      // Style price
      const price = cartItem.querySelector('.cart-item-price');
      price.style.fontSize = '12px';
      price.style.color = '#777';
      
      // Style remove button
      const removeBtn = cartItem.querySelector('.cart-item-remove');
      removeBtn.style.background = 'none';
      removeBtn.style.border = 'none';
      removeBtn.style.fontSize = '20px';
      removeBtn.style.cursor = 'pointer';
      removeBtn.style.color = '#999';
      
      // Add event listener to remove button
      removeBtn.addEventListener('click', function() {
          removeFromCart(item.id);
      });
      
      cartItems.appendChild(cartItem);
  });
  
  cartDropdown.appendChild(cartItems);
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Create cart footer
  const cartFooter = document.createElement('div');
  cartFooter.className = 'cart-footer';
  cartFooter.innerHTML = `
      <div class="cart-total">
          <span>Total:</span>
          <span class="total-price">₹${total.toFixed(2)}</span>
      </div>
      <div class="cart-actions">
          <a href="cart.html" class="btn view-cart">View Cart</a>
          <a href="checkout.html" class="btn checkout">Checkout</a>
      </div>
  `;
  
  // Style cart footer
  cartFooter.style.marginTop = '15px';
  
  // Style cart total
  const cartTotal = cartFooter.querySelector('.cart-total');
  cartTotal.style.display = 'flex';
  cartTotal.style.justifyContent = 'space-between';
  cartTotal.style.fontWeight = 'bold';
  cartTotal.style.margin = '10px 0';
  
  // Style cart actions
  const cartActions = cartFooter.querySelector('.cart-actions');
  cartActions.style.display = 'flex';
  cartActions.style.gap = '10px';
  
  // Style buttons
  const buttons = cartActions.querySelectorAll('.btn');
  buttons.forEach(btn => {
      btn.style.flex = '1';
      btn.style.textAlign = 'center';
      btn.style.padding = '8px';
      btn.style.fontSize = '14px';
  });
  
  const checkoutBtn = cartFooter.querySelector('.checkout');
  checkoutBtn.style.backgroundColor = 'var(--accent-color)';
  
  cartDropdown.appendChild(cartFooter);
}

// Remove item from cart
function removeFromCart(productId) {
  // Get current cart
  let cart = JSON.parse(localStorage.getItem('welltech-cart')) || [];
  
  // Find item index
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex > -1) {
      // Remove item
      cart.splice(itemIndex, 1);
      
      // Save updated cart
      localStorage.setItem('welltech-cart', JSON.stringify(cart));
      
      // Update cart count
      updateCartCount(getTotalItemsInCart(cart));
      
      // Re-render cart items
      renderCartItems();
  }
}

// Update product quantity in cart
function updateCartItemQuantity(productId, quantity) {
  // Get current cart
  let cart = JSON.parse(localStorage.getItem('welltech-cart')) || [];
  
  // Find item index
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex > -1) {
      // Update quantity
      cart[itemIndex].quantity = quantity;
      
      // If quantity is 0, remove item
      if (quantity <= 0) {
          cart.splice(itemIndex, 1);
      }
      
      // Save updated cart
      localStorage.setItem('welltech-cart', JSON.stringify(cart));
      
      // Update cart count
      updateCartCount(getTotalItemsInCart(cart));
      
      // Re-render cart items
      renderCartItems();
  }
}

// Add CSS for cart dropdown
function addCartStyles() {
  const style = document.createElement('style');
  style.textContent = `
      .cart-dropdown {
          display: none;
      }
      
      .cart-dropdown.show {
          display: block;
      }
      
      .cart-header {
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
      }
      
      .cart-header h3 {
          margin: 0;
          font-size: 16px;
      }
      
      .empty-cart {
          text-align: center;
          padding: 20px 0;
          color: #777;
      }
      
      .cart-items {
          max-height: 240px;
          overflow-y: auto;
      }
      
      .cart-item {
          transition: background-color 0.2s;
      }
      
      .cart-item:hover {
          background-color: #f9f9f9;
      }
      
      .cart-item-remove:hover {
          color: #ff0000;
      }
      
      .total-price {
          color: var(--primary-color);
      }
      
      .view-cart:hover, .checkout:hover {
          transform: translateY(-2px);
      }
  `;
  document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize product display
  displayProducts('all');
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize cart functionality
  initCart();
  
  // Add cart styles
  addCartStyles();
});

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// View product details
function viewProductDetails(productId) {
    // In a real application, this would navigate to a product detail page
    // For now, we'll just show an alert
    const product = products.find(p => p.id === productId);
    alert(`Viewing details for ${product.name}. In a real application, this would navigate to a product detail page.`);
    
    // Example URL for a product detail page:
    // window.location.href = `product.html?id=${productId}`;
}

// Function to render product detail page
function renderProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        // Handle product not found
        return;
    }
    
    // Get product detail elements
    const productTitle = document.querySelector('.product-detail h2');
    const productCategory = document.querySelector('.product-detail .product-category');
    const productPrice = document.querySelector('.product-detail .product-price');
    const productRating = document.querySelector('.product-detail .stars');
    const productReviews = document.querySelector('.product-detail .review-count');
    const productDescription = document.querySelector('.product-detail .product-description');
    const mainImage = document.querySelector('.product-detail .main-image');
    
    // Set product details
    productTitle.textContent = product.name;
    productCategory.textContent = product.category;
    
    // Set price
    productPrice.innerHTML = `
        <span class="current-price">$${product.currentPrice.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        ${product.discount ? `<span class="discount">${product.discount}</span>` : ''}
    `;
    
    // Set rating
    productRating.innerHTML = getStarRating(product.rating);
    productReviews.textContent = `(${product.reviewCount} reviews)`;
    
    // Set description
    productDescription.textContent = product.description;
    
    // Set main image
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Set up add to cart button
    const addToCartBtn = document.querySelector('.product-detail .add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product);
    });
}

// Helper function to generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Check if we're on a product detail page
if (document.querySelector('.product-detail')) {
    const productId = parseInt(getUrlParameter('id'));
    if (productId) {
        renderProductDetail(productId);
    }
}

// Create product detail page HTML
function createProductDetailPage(product) {
    return `
    <div class="product-detail">
        <div class="container">
            <div class="product-detail-grid">
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                    <div class="thumbnail-grid">
                        <img src="${product.image}" alt="${product.name}" class="thumbnail active">
                        <img src="/api/placeholder/100/100" alt="${product.name}" class="thumbnail">
                        <img src="/api/placeholder/100/100" alt="${product.name}" class="thumbnail">
                        <img src="/api/placeholder/100/100" alt="${product.name}" class="thumbnail">
                    </div>
                </div>
                <div class="product-content">
                    <h2>${product.name}</h2>
                    <div class="product-category">${product.category}</div>
                    <div class="product-rating">
                        <div class="stars">${getStarRating(product.rating)}</div>
                        <div class="review-count">(${product.reviewCount} reviews)</div>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.currentPrice.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        ${product.discount ? `<span class="discount">${product.discount}</span>` : ''}
                    </div>
                    <div class="product-description">
                        ${product.description}
                    </div>
                    <div class="product-meta">
                        <div class="product-availability">
                            <span>Availability:</span> ${product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                        </div>
                        <div class="product-sku">
                            <span>SKU:</span> WT-${product.id.toString().padStart(4, '0')}
                        </div>
                    </div>
                    <div class="quantity-selector">
                        <div class="quantity-btn minus">-</div>
                        <input type="number" class="quantity-input" value="1" min="1" max="${product.stock}">
                        <div class="quantity-btn plus">+</div>
                    </div>
                    <div class="product-actions">
                        <button class="btn add-to-cart">Add to Cart</button>
                        <button class="wishlist-btn"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Function to handle product search
function searchProducts(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        return [];
    }
    
    return products.filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    });
}

// Function to display search results
function displaySearchResults(results) {
    const searchResultsContainer = document.querySelector('.search-results');
    
    if (!searchResultsContainer) {
        return;
    }
    
    searchResultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        return;
    }
    
    const resultsList = document.createElement('div');
    resultsList.className = 'search-results-grid';
    
    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-content">
                <h3>${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-price">
                    <span class="current-price">$${product.currentPrice.toFixed(2)}</span>
                </div>
                <button class="btn">View Product</button>
            </div>
        `;
        
        resultItem.addEventListener('click', function() {
            viewProductDetails(product.id);
        });
        
        resultsList.appendChild(resultItem);
    });
    
    searchResultsContainer.appendChild(resultsList);
}

// Handle search input
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value;
        const results = searchProducts(query);
        displaySearchResults(results);
    });
}

// Function to initialize quantity selector
function initQuantitySelector() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');
    
    if (!minusBtn || !plusBtn || !quantityInput) {
        return;
    }
    
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        const maxValue = parseInt(quantityInput.getAttribute('max'));
        if (currentValue < maxValue) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    quantityInput.addEventListener('change', function() {
        let currentValue = parseInt(this.value);
        const maxValue = parseInt(this.getAttribute('max'));
        
        if (isNaN(currentValue) || currentValue < 1) {
            this.value = 1;
        } else if (currentValue > maxValue) {
            this.value = maxValue;
        }
    });
}

// Connect to the main WellTech website
function connectToMainWebsite() {
    // This function would handle the integration with the main WellTech website
    // For now, we'll just set up links to the main site
    
    // Add main site link to the logo
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.href = 'https://welltech-main.com'; // Replace with your actual main site URL
    }
    
    // Add footer link to the main site
    const footerLinks = document.querySelectorAll('.footer-column ul li a');
    footerLinks.forEach(link => {
        if (link.textContent === 'About Us') {
            link.href = 'https://welltech-main.com/about'; // Replace with your actual main site URL
        }
    });
    
    // Add API integration for product sync
    // This would be implemented in a real application
    console.log('Connected to main WellTech website');
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product display
    displayProducts('all');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize cart functionality
    initCart();
    
    // Initialize quantity selector on product pages
    initQuantitySelector();
    
    // Connect to main WellTech website
    connectToMainWebsite();
});