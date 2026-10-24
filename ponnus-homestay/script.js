/**
 * PONNUS HOMESTAY — MUVATTUPUZHA, KERALA
 * Interactive Application & WhatsApp Direct Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Room Configuration Data
  const ROOMS = {
    'deluxe-ac': {
      id: 'deluxe-ac',
      name: 'Deluxe AC Patient & Couple Sanctuary',
      rate: 1399,
      image: './assets/images/deluxe-ac-bedroom-1.jpg',
      category: 'Air-Conditioned',
      specs: '1 King Bed • 2 Guests • Attached Bath • Split AC • Wi-Fi • Balcony'
    },
    'executive-suite': {
      id: 'executive-suite',
      name: 'Executive Long-Stay Care Suite',
      rate: 1799,
      image: './assets/images/executive-patient-suite.jpg',
      category: 'Premium Suite',
      specs: '1 King + Recliner • 2-3 Guests • Orthopedic Bed • Hot Kettle • Dining'
    },
    'comfort-non-ac': {
      id: 'comfort-non-ac',
      name: 'Comfort Non-AC Standard Room',
      rate: 899,
      image: './assets/images/comfort-double-bedroom.jpg',
      category: 'Economy Non-AC',
      specs: 'Queen / Double Bed • 2 Guests • Attached Bath • Ceiling Fan • Wi-Fi'
    },
    'family-multi-bed': {
      id: 'family-multi-bed',
      name: 'Spacious Family & Attendant Suite',
      rate: 2199,
      image: './assets/images/spacious-family-room.jpg',
      category: 'Family Suite',
      specs: '2 Double Beds • Up to 4 Guests • Attached Bath • AC • Balcony'
    }
  };

  const WHATSAPP_PHONE = '919605616938';
  const PHONE_DISPLAY = '+91 96056 16938';

  // 3. Header Scroll Effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 4. Hero Background Slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  if (heroSlides.length > 1) {
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5500);
  }

  // 5. Mobile Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // 6. Date Setup for Booking Inputs
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const stripCheckIn = document.getElementById('stripCheckIn');
  const stripCheckOut = document.getElementById('stripCheckOut');
  const modalCheckIn = document.getElementById('modalCheckIn');
  const modalCheckOut = document.getElementById('modalCheckOut');

  if (stripCheckIn) stripCheckIn.value = formatDate(today);
  if (stripCheckOut) stripCheckOut.value = formatDate(tomorrow);
  if (modalCheckIn) modalCheckIn.value = formatDate(today);
  if (modalCheckOut) modalCheckOut.value = formatDate(tomorrow);

  // 7. Booking Modal Logic
  const bookingModal = document.getElementById('bookingModal');
  const btnCloseModal = document.getElementById('closeBookingModal');
  const modalRoomSelect = document.getElementById('modalRoomSelect');
  const modalGuests = document.getElementById('modalGuests');
  const modalPurpose = document.getElementById('modalPurpose');
  const modalMeals = document.getElementById('modalMeals');
  const modalPickup = document.getElementById('modalPickup');
  const modalName = document.getElementById('modalName');

  const calcRoomLabel = document.getElementById('calcRoomLabel');
  const calcNightsLabel = document.getElementById('calcNightsLabel');
  const calcBaseTotal = document.getElementById('calcBaseTotal');
  const calcMealsRow = document.getElementById('calcMealsRow');
  const calcMealsTotal = document.getElementById('calcMealsTotal');
  const calcPickupRow = document.getElementById('calcPickupRow');
  const calcPickupTotal = document.getElementById('calcPickupTotal');
  const calcGrandTotal = document.getElementById('calcGrandTotal');
  const waPreviewText = document.getElementById('waPreviewText');
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');

  function openBookingModal(preselectedRoom = null) {
    if (preselectedRoom && modalRoomSelect) {
      modalRoomSelect.value = preselectedRoom;
    }
    // Sync dates from strip if available
    if (stripCheckIn && modalCheckIn && stripCheckIn.value) {
      modalCheckIn.value = stripCheckIn.value;
    }
    if (stripCheckOut && modalCheckOut && stripCheckOut.value) {
      modalCheckOut.value = stripCheckOut.value;
    }

    calculateModalSummary();
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Trigger buttons across page
  document.querySelectorAll('.open-booking-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const rKey = btn.getAttribute('data-room') || null;
      openBookingModal(rKey);
    });
  });

  // Strip Form submit handler -> opens modal with strip values
  const stripBookingForm = document.getElementById('stripBookingForm');
  if (stripBookingForm) {
    stripBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedRoom = document.getElementById('stripRoom').value;
      const selectedGuests = document.getElementById('stripGuests').value;
      const selectedPurpose = document.getElementById('stripPurpose').value;

      if (modalRoomSelect) modalRoomSelect.value = selectedRoom;
      if (modalGuests) modalGuests.value = selectedGuests;
      if (modalPurpose) modalPurpose.value = selectedPurpose;

      openBookingModal();
    });
  }

  // Calculate pricing and generate WhatsApp message
  function calculateModalSummary() {
    const rKey = modalRoomSelect ? modalRoomSelect.value : 'deluxe-ac';
    const room = ROOMS[rKey] || ROOMS['deluxe-ac'];

    const cinDate = new Date(modalCheckIn.value || today);
    const coutDate = new Date(modalCheckOut.value || tomorrow);

    let nights = 1;
    if (coutDate > cinDate) {
      const diff = Math.abs(coutDate - cinDate);
      nights = Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1;
    }

    const guests = modalGuests ? modalGuests.value : '2 Guests';
    const purpose = modalPurpose ? modalPurpose.value : 'Visiting Sabine Hospital (IVF / Treatment)';
    const name = modalName && modalName.value.trim() ? modalName.value.trim() : 'Guest';

    // Base Room Price
    const baseTotal = room.rate * nights;

    // Addons
    const hasMeals = modalMeals ? modalMeals.checked : false;
    const mealsTotal = hasMeals ? (350 * nights * (parseInt(guests) || 2)) : 0;

    const hasPickup = modalPickup ? modalPickup.checked : false;
    const pickupTotal = hasPickup ? 1200 : 0;

    const grandTotal = baseTotal + mealsTotal + pickupTotal;

    // Update UI elements
    if (calcRoomLabel) calcRoomLabel.textContent = `${room.name}`;
    if (calcNightsLabel) calcNightsLabel.textContent = `${nights} Night${nights > 1 ? 's' : ''} • ₹${room.rate.toLocaleString('en-IN')}/night`;
    if (calcBaseTotal) calcBaseTotal.textContent = `₹${baseTotal.toLocaleString('en-IN')}`;

    if (calcMealsRow) {
      if (hasMeals) {
        calcMealsRow.style.display = 'flex';
        calcMealsTotal.textContent = `₹${mealsTotal.toLocaleString('en-IN')}`;
      } else {
        calcMealsRow.style.display = 'none';
      }
    }

    if (calcPickupRow) {
      if (hasPickup) {
        calcPickupRow.style.display = 'flex';
        calcPickupTotal.textContent = `₹${pickupTotal.toLocaleString('en-IN')}`;
      } else {
        calcPickupRow.style.display = 'none';
      }
    }

    if (calcGrandTotal) calcGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // WhatsApp Formatted Text
    const waText = 
`*New Direct Booking Inquiry — Ponnus Homestay* 🌿
_Near Sabine Hospital, Muvattupuzha, Kerala_
━━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${name}
🛏️ *Room Type:* ${room.name}
📅 *Check-In:* ${modalCheckIn.value}
📅 *Check-Out:* ${modalCheckOut.value} (${nights} Night${nights > 1 ? 's' : ''})
👥 *Guests:* ${guests}
🏥 *Purpose:* ${purpose}
🍲 *Homely Kerala Meals:* ${hasMeals ? 'Yes (Requested)' : 'No'}
🚕 *Cochin Airport Pickup:* ${hasPickup ? 'Yes (Requested)' : 'No'}
💰 *Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')} (Direct WhatsApp Discounted Rate)
━━━━━━━━━━━━━━━━━━━━━
Hello! I would like to check room availability and confirm my stay directly. Please let me know the booking confirmation.`;

    if (waPreviewText) waPreviewText.textContent = waText;

    if (btnSendWhatsApp) {
      const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
      btnSendWhatsApp.href = waLink;
    }
  }

  // Attach change listeners to modal inputs
  [modalRoomSelect, modalCheckIn, modalCheckOut, modalGuests, modalPurpose, modalMeals, modalPickup, modalName].forEach(input => {
    if (input) {
      input.addEventListener('change', calculateModalSummary);
      input.addEventListener('input', calculateModalSummary);
    }
  });

  // 8. Gallery Filter Tabs
  const filterBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 9. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 10. Room Details Modal
  const roomDetailModal = document.getElementById('roomDetailModal');
  const btnCloseRoomDetail = document.getElementById('closeRoomDetailModal');
  const roomDetailBtns = document.querySelectorAll('.btn-room-view');

  if (roomDetailBtns.length > 0) {
    roomDetailBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const rKey = btn.getAttribute('data-room');
        const room = ROOMS[rKey];
        if (!room) return;

        document.getElementById('detailModalImg').src = room.image;
        document.getElementById('detailModalTitle').textContent = room.name;
        document.getElementById('detailModalRate').textContent = `₹${room.rate.toLocaleString('en-IN')} / night`;
        document.getElementById('detailModalSpecs').textContent = room.specs;

        const detailBookBtn = document.getElementById('detailModalBookBtn');
        if (detailBookBtn) {
          detailBookBtn.onclick = () => {
            roomDetailModal.classList.remove('active');
            openBookingModal(rKey);
          };
        }

        roomDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  if (btnCloseRoomDetail && roomDetailModal) {
    btnCloseRoomDetail.addEventListener('click', () => {
      roomDetailModal.classList.remove('active');
      document.body.style.overflow = '';
    });
    roomDetailModal.addEventListener('click', (e) => {
      if (e.target === roomDetailModal) {
        roomDetailModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
