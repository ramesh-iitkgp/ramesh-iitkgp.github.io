/**
 * TINNAI MESS – GRAMIYA MANAM (திண்ணை மெஸ்)
 * Interactive Menu, Cart & WhatsApp Ordering Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Hero Background Crossfade Slider
  const heroSlides = document.querySelectorAll('.hero-bg-slide');
  let currentSlide = 0;
  if (heroSlides.length > 1) {
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5500);
  }

  // 3. Menu Database
  const MENU_ITEMS = [
    // Meals
    {
      id: 'vazhai-sappadu',
      title: 'Traditional Vazhai Ilai Sappadu',
      category: 'meals',
      price: 240,
      isNonVeg: false,
      desc: 'Authentic unlimited feast on fresh banana leaf with aromatic Ponni rice, traditional Sambar, Vatha Kulambu, Rasam, Kootu, Poriyal, Appalam, More Milagai, Curd & Payasam.',
      thumb: './assets/images/vazhai-ilai-sappadu.png'
    },
    {
      id: 'kootanchoru',
      title: 'Gramiya Kootanchoru',
      category: 'village',
      price: 260,
      isNonVeg: false,
      desc: 'Traditional South Indian community pot rice slow-cooked with garden vegetables, lentils, country ghee, and freshly ground spices. Pure nostalgia in every morsel.',
      thumb: './assets/images/kootanchoru.png'
    },
    {
      id: 'thookuchatti',
      title: 'Gramiya Thookuchatti Choru',
      category: 'village',
      price: 380,
      isNonVeg: true,
      desc: 'Served in an authentic brass tiffin-carrier: Piping hot rice layered with choice of Mutton Chukka or Nattu Kozhi, rich village gravies, boiled egg, and crispy sides.',
      thumb: './assets/images/thookuchatti.png'
    },
    {
      id: 'potlam-rice',
      title: 'Banana Leaf Potlam Sadham',
      category: 'village',
      price: 320,
      isNonVeg: true,
      desc: 'Hot aromatic rice tied tightly inside fresh scorched banana leaves infused with tender mutton pieces and thick pepper gravy.',
      thumb: './assets/images/food-pot-6.jpg'
    },
    // Non-Veg Delicacies
    {
      id: 'nattu-kozhi-varuval',
      title: 'Nattu Kozhi Varuval (Country Chicken)',
      category: 'nonveg',
      price: 310,
      isNonVeg: true,
      desc: 'Free-range country chicken pan-roasted with shallots (chinna vengayam), crushed black peppercorns, and curry leaves.',
      thumb: './assets/images/food-leaf-4.jpg'
    },
    {
      id: 'mutton-sukka',
      title: 'Chettinad Mutton Chukka',
      category: 'nonveg',
      price: 360,
      isNonVeg: true,
      desc: 'Tender baby goat morsels slow-braised and dry-roasted in authentic hand-ground Chettinad spices and cold-pressed gingelly oil.',
      thumb: './assets/images/chettinad-curry.jpg'
    },
    {
      id: 'vanjaram-fry',
      title: 'Tawa Vanjaram Meen Varuval',
      category: 'nonveg',
      price: 340,
      isNonVeg: true,
      desc: 'Fresh King Fish / Seer Fish steak marinated in coastal red chilli masala and pan-seared to crispy perfection.',
      thumb: './assets/images/fish-fry.jpg'
    },
    {
      id: 'nandu-masala',
      title: 'Nandu Masala (Mud Crab Roast)',
      category: 'nonveg',
      price: 390,
      isNonVeg: true,
      desc: 'Whole fresh sea crab tossed in a rich, fiery pepper and garlic masala that pairs divinely with hot rice or parotta.',
      thumb: './assets/images/food-leaf-4.jpg'
    },
    // Biryani & Parotta
    {
      id: 'seeraga-mutton-biryani',
      title: 'Seeraga Samba Mutton Biryani',
      category: 'biryani',
      price: 350,
      isNonVeg: true,
      desc: 'Dindigul-style fragrant Seeraga Samba short-grain rice dum-cooked with tender mutton pieces, served with Dalcha & Onion Pachadi.',
      thumb: './assets/images/mutton-biryani.jpg'
    },
    {
      id: 'kari-dosa',
      title: 'Madurai Style Mutton Kari Dosa',
      category: 'biryani',
      price: 290,
      isNonVeg: true,
      desc: 'Thick, fluffy Kal Dosa layered with spiced egg wash and crowned with minced tender mutton keema.',
      thumb: './assets/images/food-pot-6.jpg'
    },
    {
      id: 'bun-parotta-salna',
      title: 'Bun Parotta (2 Pcs) with Salna',
      category: 'biryani',
      price: 140,
      isNonVeg: false,
      desc: 'Crispy, layered, flaky coin bun parottas served with rich aromatic Madurai road-side vegetable/chicken salna.',
      thumb: './assets/images/service-concept.jpg'
    },
    // Desserts & Drinks
    {
      id: 'jigarthanda',
      title: 'Special Madurai Jigarthanda',
      category: 'drinks',
      price: 120,
      isNonVeg: false,
      desc: 'The iconic coolant made with badam pisin, chilled condensed milk, nannari syrup, and topped with rich basundi ice cream.',
      thumb: './assets/images/filter-coffee.jpg'
    },
    {
      id: 'elaneer-payasam',
      title: 'Elaneer Payasam (Tender Coconut)',
      category: 'drinks',
      price: 110,
      isNonVeg: false,
      desc: 'Delicate, soothing dessert made from fresh tender coconut pulp, coconut milk, and cardamom.',
      thumb: './assets/images/filter-coffee.jpg'
    },
    {
      id: 'kumbakonam-degree-coffee',
      title: 'Kumbakonam Degree Filter Coffee',
      category: 'drinks',
      price: 60,
      isNonVeg: false,
      desc: 'Traditional freshly brewed chicory-infused decoction frothed high in brass davarah and tumbler.',
      thumb: './assets/images/filter-coffee.jpg'
    }
  ];

  // 4. Cart State & Management
  let cart = [];

  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const btnOpenCart = document.getElementById('openCartBtn');
  const btnCloseCart = document.getElementById('closeCartBtn');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const btnCheckoutWhatsApp = document.getElementById('btnCheckoutWhatsApp');
  const cartBranchSelect = document.getElementById('cartBranchSelect');

  function openCart() {
    cartDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnOpenCart) btnOpenCart.addEventListener('click', openCart);
  if (btnCloseCart) btnCloseCart.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    cartCountBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <p style="font-size: 2rem; margin-bottom: 0.5rem;">🍃</p>
          <h4>Your cart is empty</h4>
          <p style="font-size: 0.85rem; color: #78716c; margin-top: 0.25rem;">Add some mouth-watering village specials to start your direct order.</p>
        </div>
      `;
      if (btnCheckoutWhatsApp) btnCheckoutWhatsApp.style.display = 'none';
      return;
    }

    if (btnCheckoutWhatsApp) btnCheckoutWhatsApp.style.display = 'flex';

    cartItemsList.innerHTML = '';
    cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div>
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-unit-price">₹${item.price} each</div>
        </div>
        <div class="cart-qty-controls">
          <button class="btn-qty" data-id="${item.id}" data-action="dec">−</button>
          <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
          <button class="btn-qty" data-id="${item.id}" data-action="inc">+</button>
        </div>
      `;
      cartItemsList.appendChild(row);
    });

    // Wire up qty buttons
    cartItemsList.querySelectorAll('.btn-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        const item = cart.find(i => i.id === id);
        if (!item) return;

        if (action === 'inc') {
          item.qty += 1;
        } else if (action === 'dec') {
          item.qty -= 1;
          if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
          }
        }
        updateCartUI();
      });
    });

    // Generate WhatsApp Checkout Message
    if (btnCheckoutWhatsApp) {
      const branch = cartBranchSelect ? cartBranchSelect.value : 'RA Puram, Chennai';
      let msg = `*New Direct Food Order — Tinnai Mess (Gramiya Manam)* 🍃\n`;
      msg += `--------------------------------\n`;
      msg += `📍 *Branch:* ${branch}\n`;
      msg += `🍴 *Order Items:*\n`;
      cart.forEach((i, idx) => {
        msg += `${idx + 1}. ${i.title} x ${i.qty} = ₹${(i.price * i.qty).toLocaleString('en-IN')}\n`;
      });
      msg += `--------------------------------\n`;
      msg += `💰 *Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n`;
      msg += `💡 *0% Delivery Portal Commission (Direct Kitchen Order)*\n`;
      msg += `--------------------------------\n`;
      msg += `Vanakkam! Please confirm availability and prepare this order for Takeaway / Delivery.`;

      btnCheckoutWhatsApp.href = `https://wa.me/917582985829?text=${encodeURIComponent(msg)}`;
    }
  }

  function addToCart(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(i => i.id === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
    openCart();
  }

  // 5. Render Menu Items
  const menuContainer = document.getElementById('menuItemsGrid');
  function renderMenu(filter = 'all') {
    if (!menuContainer) return;
    menuContainer.innerHTML = '';

    const filtered = filter === 'all' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(i => i.category === filter);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item-card';
      card.innerHTML = `
        <div class="menu-item-thumb">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy">
        </div>
        <div class="menu-item-info">
          <div class="menu-item-top">
            <span class="menu-item-title">
              <span class="veg-nonveg-indicator ${item.isNonVeg ? 'non-veg' : ''}"></span>
              ${item.title}
            </span>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
          <div class="menu-item-bottom">
            <span class="menu-item-price">₹${item.price}</span>
            <button class="btn-add-item" data-id="${item.id}">
              + Add
            </button>
          </div>
        </div>
      `;
      menuContainer.appendChild(card);
    });

    // Attach Add Button listeners
    menuContainer.querySelectorAll('.btn-add-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });
  }

  // Initial menu render
  renderMenu('all');

  // Category Tab Switching
  const categoryTabs = document.querySelectorAll('.menu-cat-btn');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderMenu(cat);
    });
  });

  // Attach Add buttons from Trio Cards
  document.querySelectorAll('.btn-add-trio').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });

  if (cartBranchSelect) {
    cartBranchSelect.addEventListener('change', updateCartUI);
  }

  // 6. Table Reservation Form Dispatch via WhatsApp
  const resForm = document.getElementById('tableReservationForm');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const branch = document.getElementById('resBranch').value;
      const name = document.getElementById('resName').value;
      const phone = document.getElementById('resPhone').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const guests = document.getElementById('resGuests').value;
      const notes = document.getElementById('resNotes').value || 'None';

      const msg = `*New Table Reservation Request — Tinnai Mess* 🍃\n` +
        `--------------------------------\n` +
        `📍 *Branch:* ${branch}\n` +
        `👤 *Guest Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📅 *Date:* ${date}\n` +
        `⏰ *Time Slot:* ${time}\n` +
        `👥 *Guests:* ${guests}\n` +
        `📝 *Special Notes:* ${notes}\n` +
        `--------------------------------\n` +
        `Vanakkam! Please confirm this table reservation.`;

      const waUrl = `https://wa.me/917582985829?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 7. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileNavLinks');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
});
