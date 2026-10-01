/**
 * Twin Star Hotel & Suites — Interactive Booking Engine & Dynamic Personalizer
 * WebKartX Hospitality Demo Experience
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Default Twin Star Configuration
  let currentHotel = {
    name: "Twin Star Hotel & Suites",
    shortName: "TWIN STAR",
    city: "Chennai",
    area: "Abiramapuram",
    phone: "+91 98404 60459",
    phoneDigits: "919840460459",
    currency: "INR",
    symbol: "₹",
    rooms: {
      "oak-standard": { name: "Oak (Standard AC Room)", price: 2400, original: 3100 },
      "maple-deluxe": { name: "Maple (Deluxe Suite)", price: 3200, original: 4000 },
      "mahogany-executive": { name: "Mahogany (Executive Suite)", price: 4500, original: 5800 }
    }
  };

  // 3. Load from data/business.json if present
  try {
    const res = await fetch('./data/business.json');
    if (res.ok) {
      const data = await res.json();
      if (data.business_name) {
        currentHotel.name = data.business_name;
        currentHotel.shortName = data.short_name || data.business_name.split(' ')[0].toUpperCase();
      }
      if (data.city) currentHotel.city = data.city;
      if (data.area) currentHotel.area = data.area;
      if (data.phone) {
        currentHotel.phone = data.phone;
        currentHotel.phoneDigits = data.whatsapp_number_digits || data.phone.replace(/\D/g, '');
      }
    }
  } catch (e) {
    // Keep defaults
  }

  // 4. Overwrite from URL Query Parameters (High-Priority Real-Time Dynamic Demo Personalization)
  const urlParams = new URLSearchParams(window.location.search);
  const qName = urlParams.get('name') || urlParams.get('hotel') || urlParams.get('business_name');
  const qCity = urlParams.get('city');
  const qPhone = urlParams.get('phone') || urlParams.get('whatsapp');

  if (qName) {
    currentHotel.name = qName.trim();
    currentHotel.shortName = currentHotel.name.split(' ')[0].toUpperCase();
  }
  if (qCity) {
    currentHotel.city = qCity.trim();
  }
  if (qPhone) {
    currentHotel.phone = qPhone;
    currentHotel.phoneDigits = qPhone.replace(/\D/g, '');
  }

  // Apply Personalization to DOM
  applyPersonalization(currentHotel);

  // 5. Setup Default Dates
  const today = new Date();
  const checkInDate = new Date(today);
  checkInDate.setDate(today.getDate() + 1);
  const checkOutDate = new Date(today);
  checkOutDate.setDate(today.getDate() + 4);

  const formatDateVal = (d) => d.toISOString().split('T')[0];
  
  const heroIn = document.getElementById('heroCheckIn');
  const heroOut = document.getElementById('heroCheckOut');
  const calcIn = document.getElementById('calcCheckIn');
  const calcOut = document.getElementById('calcCheckOut');

  if (heroIn) heroIn.value = formatDateVal(checkInDate);
  if (heroOut) heroOut.value = formatDateVal(checkOutDate);
  if (calcIn) calcIn.value = formatDateVal(checkInDate);
  if (calcOut) calcOut.value = formatDateVal(checkOutDate);

  // Sync hero inputs with engine inputs
  if (heroIn && calcIn) heroIn.addEventListener('change', () => { calcIn.value = heroIn.value; recalculateTotal(); });
  if (heroOut && calcOut) heroOut.addEventListener('change', () => { calcOut.value = heroOut.value; recalculateTotal(); });

  // Initial Calculation
  window.currentHotelState = currentHotel;
  recalculateTotal();
});

/**
 * Apply Hotel Personalization across headers, hero, summary, and vouchers
 */
function applyPersonalization(hotel) {
  const isPersonalized = hotel.name !== "Twin Star Hotel & Suites";

  // Page Title
  document.title = `${hotel.name} | Official Luxury Hotel Website • ${hotel.city}`;

  // Top Banner
  const leadHotelName = document.getElementById('leadHotelName');
  if (leadHotelName) leadHotelName.textContent = `${hotel.name} Management`;

  // Header Brand
  const hotelHeaderName = document.getElementById('hotelHeaderName');
  if (hotelHeaderName) hotelHeaderName.textContent = hotel.shortName || hotel.name;

  const headerCity = document.getElementById('headerCity');
  if (headerCity) headerCity.textContent = hotel.city.toUpperCase();

  const headerPhoneText = document.getElementById('headerPhoneText');
  const headerPhoneBtn = document.getElementById('headerPhoneBtn');
  if (headerPhoneText) headerPhoneText.textContent = hotel.phone;
  if (headerPhoneBtn) headerPhoneBtn.href = `tel:${hotel.phone.replace(/\s+/g, '')}`;

  // Hero Section
  const heroCityAccent = document.getElementById('heroCityAccent');
  if (heroCityAccent) heroCityAccent.textContent = hotel.city;

  const heroHotelNameInline = document.getElementById('heroHotelNameInline');
  if (heroHotelNameInline) heroHotelNameInline.textContent = hotel.name;

  // Full Address
  const hotelFullAddressName = document.getElementById('hotelFullAddressName');
  if (hotelFullAddressName) hotelFullAddressName.textContent = hotel.name;

  const footerPhone = document.getElementById('footerPhone');
  if (footerPhone) {
    footerPhone.innerHTML = `<i data-lucide="phone"></i> ${hotel.phone}`;
    footerPhone.href = `tel:${hotel.phone.replace(/\s+/g, '')}`;
  }

  // Summary & Vouchers
  const summaryHotelName = document.getElementById('summaryHotelName');
  if (summaryHotelName) summaryHotelName.textContent = hotel.name;

  const voucherHotelTitle = document.getElementById('voucherHotelTitle');
  if (voucherHotelTitle) voucherHotelTitle.textContent = hotel.name;

  const copyHotelName = document.getElementById('copyHotelName');
  if (copyHotelName) copyHotelName.textContent = hotel.name;

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Select Room for Booking from Rooms grid
 */
function selectRoomForBooking(roomId) {
  const radio = document.querySelector(`input[name="selectedRoom"][value="${roomId}"]`);
  if (radio) {
    radio.checked = true;
    
    // Update active highlight classes on room grid buttons
    document.querySelectorAll('.room-card').forEach(card => {
      const btn = card.querySelector('.btn-select-room');
      if (card.getAttribute('data-room-id') === roomId) {
        if (btn) btn.classList.add('active');
      } else {
        if (btn) btn.classList.remove('active');
      }
    });

    // Update radio option classes
    document.querySelectorAll('.radio-option').forEach(opt => {
      const input = opt.querySelector('input');
      if (input && input.value === roomId) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });

    recalculateTotal();

    // Smooth scroll to engine
    const engineElem = document.getElementById('booking-engine');
    if (engineElem) {
      engineElem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Recalculate Live Booking Engine Rates & WhatsApp Link
 */
function recalculateTotal() {
  const hotel = window.currentHotelState || {
    name: "Twin Star Hotel & Suites",
    phoneDigits: "919840460459",
    rooms: {
      "oak-standard": { name: "Oak (Standard AC Room)", price: 2400 },
      "maple-deluxe": { name: "Maple (Deluxe Suite)", price: 3200 },
      "mahogany-executive": { name: "Mahogany (Executive Suite)", price: 4500 }
    }
  };

  // 1. Calculate Nights
  const inVal = document.getElementById('calcCheckIn')?.value;
  const outVal = document.getElementById('calcCheckOut')?.value;
  let nights = 3;

  if (inVal && outVal) {
    const d1 = new Date(inVal);
    const d2 = new Date(outVal);
    const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    nights = diff > 0 ? diff : 1;
  }

  const nightsDisplay = document.getElementById('nightsDisplay');
  if (nightsDisplay) nightsDisplay.textContent = `${nights} Night${nights > 1 ? 's' : ''} Selected`;

  // 2. Room Price
  const selectedRoomRadio = document.querySelector('input[name="selectedRoom"]:checked');
  const roomId = selectedRoomRadio ? selectedRoomRadio.value : 'maple-deluxe';
  const roomInfo = hotel.rooms[roomId] || hotel.rooms['maple-deluxe'];
  const roomRate = roomInfo.price;
  const roomTotal = roomRate * nights;

  // Update radio option visual selection
  document.querySelectorAll('.radio-option').forEach(opt => {
    const input = opt.querySelector('input');
    if (input && input.checked) opt.classList.add('selected');
    else opt.classList.remove('selected');
  });

  // 3. Meal Plan
  const selectedMealRadio = document.querySelector('input[name="mealPlan"]:checked');
  const mealType = selectedMealRadio ? selectedMealRadio.value : 'cp';
  let mealRatePerNight = 0;
  let mealName = "EP (Room Only)";

  if (mealType === 'cp') {
    mealRatePerNight = 250;
    mealName = "CP Breakfast Buffet";
  } else if (mealType === 'map') {
    mealRatePerNight = 650;
    mealName = "MAP Breakfast & Dinner";
  }
  const mealTotal = mealRatePerNight * nights;

  document.querySelectorAll('.meal-option').forEach(opt => {
    const input = opt.querySelector('input');
    if (input && input.checked) opt.classList.add('selected');
    else opt.classList.remove('selected');
  });

  // 4. Add-ons
  let addonsTotal = 0;
  const addonTransfer = document.getElementById('addonTransfer');
  const addonLateCheckout = document.getElementById('addonLateCheckout');

  if (addonTransfer && addonTransfer.checked) addonsTotal += 850;
  if (addonLateCheckout && addonLateCheckout.checked) addonsTotal += 500;

  // 5. Subtotal, Taxes, Grand Total
  const subtotal = roomTotal + mealTotal + addonsTotal;
  const taxes = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + taxes;

  // OTA savings (approx 20% extra OTA markup)
  const otaEquivalent = Math.round(grandTotal * 1.25);
  const savings = otaEquivalent - grandTotal;

  // 6. Update UI
  const formatRs = (num) => `₹${num.toLocaleString('en-IN')}`;

  const summaryRoomName = document.getElementById('summaryRoomName');
  if (summaryRoomName) summaryRoomName.textContent = roomInfo.name;

  const summaryDateLine = document.getElementById('summaryDateLine');
  if (summaryDateLine && inVal && outVal) {
    const d1Str = new Date(inVal).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const d2Str = new Date(outVal).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    summaryDateLine.textContent = `${d1Str} – ${d2Str} (${nights} night${nights > 1 ? 's' : ''})`;
  }

  const labelRoomNights = document.getElementById('labelRoomNights');
  if (labelRoomNights) labelRoomNights.textContent = `${roomInfo.name.split(' ')[0]} Room (${nights} nights × ${formatRs(roomRate)})`;

  const valRoomBase = document.getElementById('valRoomBase');
  if (valRoomBase) valRoomBase.textContent = formatRs(roomTotal);

  const labelMealPlan = document.getElementById('labelMealPlan');
  if (labelMealPlan) labelMealPlan.textContent = mealName;

  const valMealPlan = document.getElementById('valMealPlan');
  if (valMealPlan) valMealPlan.textContent = formatRs(mealTotal);

  const rowAddons = document.getElementById('rowAddons');
  const valAddons = document.getElementById('valAddons');
  if (rowAddons && valAddons) {
    if (addonsTotal > 0) {
      rowAddons.style.display = 'flex';
      valAddons.textContent = formatRs(addonsTotal);
    } else {
      rowAddons.style.display = 'none';
    }
  }

  const valTaxes = document.getElementById('valTaxes');
  if (valTaxes) valTaxes.textContent = formatRs(taxes);

  const valGrandTotal = document.getElementById('valGrandTotal');
  if (valGrandTotal) valGrandTotal.textContent = formatRs(grandTotal);

  const valSavings = document.getElementById('valSavings');
  if (valSavings) valSavings.textContent = formatRs(savings);

  // 7. Generate Live WhatsApp Reservation Link
  const btnWhatsapp = document.getElementById('btnWhatsappBook');
  if (btnWhatsapp) {
    const waText = encodeURIComponent(
      `Hello ${hotel.name}! 👋\n\nI want to reserve a room directly:\n• Room: ${roomInfo.name}\n• Dates: ${inVal} to ${outVal} (${nights} nights)\n• Meal Plan: ${mealName}\n• Total Direct Quote: ${formatRs(grandTotal)} (0% Commission)\n\nPlease confirm availability and payment link. Thank you!`
    );
    btnWhatsapp.href = `https://wa.me/${hotel.phoneDigits || '919840460459'}?text=${waText}`;
  }

  // Store for voucher modal
  window.lastQuotation = {
    hotelName: hotel.name,
    roomName: roomInfo.name,
    inDate: inVal,
    outDate: outVal,
    nights: nights,
    mealPlan: mealName,
    grandTotal: formatRs(grandTotal)
  };
}

/**
 * Open Simulated Booking Voucher Modal
 */
function openSimulatedVoucher() {
  const quote = window.lastQuotation || {
    hotelName: "Twin Star Hotel & Suites",
    roomName: "Maple (Deluxe Suite)",
    inDate: "Selected Date",
    outDate: "Selected Date",
    mealPlan: "CP (Breakfast Included)",
    grandTotal: "₹11,592"
  };

  const vModal = document.getElementById('voucherModal');
  const vHotelTitle = document.getElementById('voucherHotelTitle');
  const vRoomCat = document.getElementById('vRoomCategory');
  const vCheckIn = document.getElementById('vCheckIn');
  const vCheckOut = document.getElementById('vCheckOut');
  const vMeal = document.getElementById('vMealPlan');
  const vTotal = document.getElementById('vTotalAmount');
  const vId = document.getElementById('voucherId');

  if (vHotelTitle) vHotelTitle.textContent = quote.hotelName;
  if (vRoomCat) vRoomCat.textContent = quote.roomName;
  if (vCheckIn) vCheckIn.textContent = `${quote.inDate} (12:00 PM Check-in)`;
  if (vCheckOut) vCheckOut.textContent = `${quote.outDate} (11:00 AM Check-out)`;
  if (vMeal) vMeal.textContent = quote.mealPlan;
  if (vTotal) vTotal.textContent = quote.grandTotal;
  if (vId) vId.textContent = `WKX-${Math.floor(100000 + Math.random() * 900000)}`;

  if (vModal) vModal.style.display = 'flex';
}

function closeVoucherModal() {
  const vModal = document.getElementById('voucherModal');
  if (vModal) vModal.style.display = 'none';
}

/**
 * Open Room Photos Modal
 */
const ROOM_PHOTOS = {
  'oak-standard': [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  ],
  'maple-deluxe': [
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
  ],
  'mahogany-executive': [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80'
  ]
};

function openRoomPhotos(roomId) {
  const pModal = document.getElementById('photoModal');
  const grid = document.getElementById('photoGalleryGrid');
  const title = document.getElementById('photoModalTitle');

  const photos = ROOM_PHOTOS[roomId] || ROOM_PHOTOS['maple-deluxe'];
  if (title) title.textContent = roomId === 'oak-standard' ? 'Oak Standard Room Gallery' : (roomId === 'maple-deluxe' ? 'Maple Deluxe Suite Gallery' : 'Mahogany Executive Suite Gallery');

  if (grid) {
    grid.innerHTML = photos.map(url => `<img src="${url}" alt="Room photo" loading="lazy">`).join('');
  }

  if (pModal) pModal.style.display = 'flex';
}

function closePhotoModal() {
  const pModal = document.getElementById('photoModal');
  if (pModal) pModal.style.display = 'none';
}
