/**
 * PONNUS HOMESTAY — CHINNAKANAL, MUNNAR
 * Interactive Application & Direct WhatsApp Mountain Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Room Configuration Data
  const ROOMS = {
    'deluxe-valley': {
      id: 'deluxe-valley',
      name: 'Deluxe Tea Valley View Room',
      rate: 1699,
      image: './assets/images/deluxe-valley-room.jpg',
      category: 'Valley View',
      specs: '1 King Bed • 2 Guests • Attached Bath • 24/7 Hot Water • Balcony Sit-Out • Free Wi-Fi'
    },
    'panoramic-suite': {
      id: 'panoramic-suite',
      name: 'Panoramic Mountain Mist Suite',
      rate: 2299,
      image: './assets/images/tea-view-suite.jpg',
      category: 'Mountain Suite',
      specs: '1 King Bed + Lounge • 2-3 Guests • 180° Mist Views • Hot Kettle • Luxury Bath'
    },
    'cozy-cottage': {
      id: 'cozy-cottage',
      name: 'Cozy Hillside Cottage Room',
      rate: 1499,
      image: './assets/images/cozy-cottage-bedroom.jpg',
      category: 'Cottage Classic',
      specs: '1 Queen Bed • 2 Guests • Attached Bath • Mountain Air • Wi-Fi • Garden View'
    },
    'family-plantation': {
      id: 'family-plantation',
      name: 'Spacious Family Plantation Suite',
      rate: 2999,
      image: './assets/images/family-mountain-suite.jpg',
      category: 'Family Suite',
      specs: '2 King Beds • Up to 5 Guests • Private Mountain Balcony • Spacious Lounge • Hot Water'
    }
  };

  const WHATSAPP_PHONE = '919447962994';
  const PHONE_DISPLAY = '+91 94479 62994';

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
  const modalTripType = document.getElementById('modalTripType');
  const modalCampfire = document.getElementById('modalCampfire');
  const modalSafari = document.getElementById('modalSafari');
  const modalMeals = document.getElementById('modalMeals');
  const modalName = document.getElementById('modalName');

  const calcRoomLabel = document.getElementById('calcRoomLabel');
  const calcNightsLabel = document.getElementById('calcNightsLabel');
  const calcBaseTotal = document.getElementById('calcBaseTotal');
  const calcCampfireRow = document.getElementById('calcCampfireRow');
  const calcCampfireTotal = document.getElementById('calcCampfireTotal');
  const calcSafariRow = document.getElementById('calcSafariRow');
  const calcSafariTotal = document.getElementById('calcSafariTotal');
  const calcMealsRow = document.getElementById('calcMealsRow');
  const calcMealsTotal = document.getElementById('calcMealsTotal');
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

  // Strip Form submit handler
  const stripBookingForm = document.getElementById('stripBookingForm');
  if (stripBookingForm) {
    stripBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedRoom = document.getElementById('stripRoom').value;
      const selectedGuests = document.getElementById('stripGuests').value;

      if (modalRoomSelect) modalRoomSelect.value = selectedRoom;
      if (modalGuests) modalGuests.value = selectedGuests;

      openBookingModal();
    });
  }

  // Calculate pricing and compile WhatsApp message
  function calculateModalSummary() {
    const rKey = modalRoomSelect ? modalRoomSelect.value : 'deluxe-valley';
    const room = ROOMS[rKey] || ROOMS['deluxe-valley'];

    const cinDate = new Date(modalCheckIn.value || today);
    const coutDate = new Date(modalCheckOut.value || tomorrow);

    let nights = 1;
    if (coutDate > cinDate) {
      const diff = Math.abs(coutDate - cinDate);
      nights = Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1;
    }

    const guests = modalGuests ? modalGuests.value : '2 Guests';
    const tripType = modalTripType ? modalTripType.value : 'Couple / Honeymoon Getaway';
    const name = modalName && modalName.value.trim() ? modalName.value.trim() : 'Guest';

    // Base Room Price
    const baseTotal = room.rate * nights;

    // Addons
    const hasCampfire = modalCampfire ? modalCampfire.checked : false;
    const campfireTotal = hasCampfire ? 500 : 0;

    const hasSafari = modalSafari ? modalSafari.checked : false;
    const safariTotal = hasSafari ? 2200 : 0;

    const hasMeals = modalMeals ? modalMeals.checked : false;
    const numGuests = parseInt(guests) || 2;
    const mealsTotal = hasMeals ? (400 * nights * numGuests) : 0;

    const grandTotal = baseTotal + campfireTotal + safariTotal + mealsTotal;

    // Update UI elements
    if (calcRoomLabel) calcRoomLabel.textContent = `${room.name}`;
    if (calcNightsLabel) calcNightsLabel.textContent = `${nights} Night${nights > 1 ? 's' : ''} • ₹${room.rate.toLocaleString('en-IN')}/night`;
    if (calcBaseTotal) calcBaseTotal.textContent = `₹${baseTotal.toLocaleString('en-IN')}`;

    if (calcCampfireRow) {
      if (hasCampfire) {
        calcCampfireRow.style.display = 'flex';
        calcCampfireTotal.textContent = `₹${campfireTotal.toLocaleString('en-IN')}`;
      } else {
        calcCampfireRow.style.display = 'none';
      }
    }

    if (calcSafariRow) {
      if (hasSafari) {
        calcSafariRow.style.display = 'flex';
        calcSafariTotal.textContent = `₹${safariTotal.toLocaleString('en-IN')}`;
      } else {
        calcSafariRow.style.display = 'none';
      }
    }

    if (calcMealsRow) {
      if (hasMeals) {
        calcMealsRow.style.display = 'flex';
        calcMealsTotal.textContent = `₹${mealsTotal.toLocaleString('en-IN')}`;
      } else {
        calcMealsRow.style.display = 'none';
      }
    }

    if (calcGrandTotal) calcGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // WhatsApp Formatted Text
    const waText = 
`*New Booking Inquiry — Ponnus Homestay, Chinnakanal* ⛰️
_Near Balu Stores, Chinnakanal, Munnar (Kerala)_
━━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${name}
🛏️ *Room Type:* ${room.name}
📅 *Check-In:* ${modalCheckIn.value}
📅 *Check-Out:* ${modalCheckOut.value} (${nights} Night${nights > 1 ? 's' : ''})
👥 *Guests:* ${guests}
🌄 *Trip Type:* ${tripType}
🔥 *Campfire & BBQ:* ${hasCampfire ? 'Yes (Requested)' : 'No'}
🚙 *Kolukkumalai Sunrise 4x4 Safari:* ${hasSafari ? 'Yes (Requested)' : 'No'}
🍲 *Kerala Homely Meals:* ${hasMeals ? 'Yes (Requested)' : 'No'}
💰 *Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')} (Direct WhatsApp Best Rate)
━━━━━━━━━━━━━━━━━━━━━
Hello! We would like to confirm room availability and book our Munnar stay directly. Kindly share the confirmation details.`;

    if (waPreviewText) waPreviewText.textContent = waText;

    if (btnSendWhatsApp) {
      const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
      btnSendWhatsApp.href = waLink;
    }
  }

  // Attach change listeners to modal inputs
  [modalRoomSelect, modalCheckIn, modalCheckOut, modalGuests, modalTripType, modalCampfire, modalSafari, modalMeals, modalName].forEach(input => {
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
