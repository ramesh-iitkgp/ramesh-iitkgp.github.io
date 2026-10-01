/**
 * Twin Star Hotel & Suites — Complete 3-in-1 Hospitality Operating System
 * WebKartX Demo Preview: Luxury Website + 0% Booking Engine + Front Desk PMS & CRM
 */

// Global Hotel State & Configuration
window.currentHotel = {
  name: "Twin Star Hotel & Suites",
  shortName: "TWIN STAR",
  city: "Chennai",
  area: "Abiramapuram",
  phone: "+91 98404 60459",
  phoneDigits: "919840460459",
  currency: "INR",
  symbol: "₹",
  rooms: {
    "oak-standard": { name: "Oak (Premier Deluxe AC Room)", price: 2400, original: 3100 },
    "maple-deluxe": { name: "Maple (Signature Panoramic Suite)", price: 3200, original: 4000 },
    "mahogany-executive": { name: "Mahogany (Presidential Royal Villa Suite)", price: 4500, original: 5800 }
  }
};

// Current Active Platform Mode: 'website' | 'engine' | 'operations'
window.currentPlatformMode = 'website';
window.currentOpsSubtab = 'rooms';
window.currentModalRoomId = 'maple-deluxe';
window.currentModalCategory = 'bedroom';

// Categorized Room Photography & Luxury Suite Data
const ROOM_CATEGORIZED_DATA = {
  'oak-standard': {
    name: 'Oak (Premier Deluxe AC Room)',
    shortTitle: 'Oak Premier Room',
    badge: 'Smart Business & Solo Travelers',
    price: 2400,
    original: 3100,
    size: '210 sq.ft',
    bed: 'Queen Plush Bed',
    guests: '2 Adults',
    view: 'Courtyard & Tropical Garden View',
    desc: 'Thoughtfully curated luxury room featuring soundproof double-glazed windows, premium pocket-spring queen mattress, dedicated ergonomic workstation, 43" 4K Smart TV, and an Italian-tiled rainfall shower en-suite.',
    amenities: ['500Mbps Fiber Wi-Fi', 'Complimentary Breakfast Buffet', 'Italian Rainfall Shower', 'Work Desk & USB Ports', 'In-room Electronic Safe', '24/7 Room Dining'],
    categories: {
      bedroom: [
        { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80', caption: 'Plush Queen Bed with 400-thread count Egyptian cotton' },
        { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', caption: 'Spacious bedroom layout with ambient bedside reading lamps' },
        { url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80', caption: 'Warm evening lighting with spacious wardrobe and digital safe' }
      ],
      balcony: [
        { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', caption: 'Private balcony facing peaceful tropical courtyard' },
        { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', caption: 'Outdoor morning coffee deck with garden vistas' }
      ],
      bathroom: [
        { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', caption: 'Spotless marble bathroom with high-pressure rainfall shower' },
        { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80', caption: 'Modern vanity with backlit mirror and herbal toiletries' }
      ],
      living: [
        { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80', caption: 'Ergonomic business workstation and high-speed fiber connectivity' },
        { url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80', caption: 'Lounge seating with complimentary tea and coffee station' }
      ]
    }
  },
  'maple-deluxe': {
    name: 'Maple (Signature Panoramic Suite)',
    shortTitle: 'Maple Deluxe Suite',
    badge: 'Most Popular Suite • Couples & VIPs',
    price: 3200,
    original: 4000,
    size: '320 sq.ft',
    bed: 'King Size Cloud Mattress',
    guests: 'Up to 3 Guests',
    view: 'Panoramic City & Sunset View',
    desc: 'Spacious panoramic suite featuring a grand king bed, dedicated living lounge with velvet armchairs, private teakwood balcony, refrigerated minibar, Nespresso machine, and a spa-inspired bathroom with a deep soaking tub.',
    amenities: ['Private Teakwood Balcony', 'Deep Soaking Bathtub', 'Gourmet Breakfast Buffet', 'Nespresso Coffee Machine', '55" 4K OLED Smart TV', 'Priority 12:00 PM Check-In'],
    categories: {
      bedroom: [
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80', caption: 'Grand King Bed with custom upholstered headboard & mood lighting' },
        { url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80', caption: 'Sunlit master suite with floor-to-ceiling soundproof glass' },
        { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80', caption: 'Artful interior detailing and plush hypoallergenic pillows' }
      ],
      balcony: [
        { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80', caption: 'Panoramic balcony with teak outdoor loungers overlooking sunset' },
        { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80', caption: 'Lush greenery and fresh breeze from private terrace' }
      ],
      bathroom: [
        { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80', caption: 'Spa bathroom with deep freestanding soaking tub and rain shower' },
        { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', caption: 'Double marble vanity and plush cotton waffle bathrobes' }
      ],
      living: [
        { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80', caption: 'Elegantly appointed seating lounge with plush sofa and coffee table' },
        { url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80', caption: 'Minibar, wine cooler, and gourmet coffee setup' }
      ]
    }
  },
  'mahogany-executive': {
    name: 'Mahogany (Presidential Royal Villa Suite)',
    shortTitle: 'Mahogany Royal Suite',
    badge: 'Ultra-Luxury • Family & Executives',
    price: 4500,
    original: 5800,
    size: '520 sq.ft',
    bed: 'Master Emperor King Bed',
    guests: 'Up to 4 Guests',
    view: 'Wraparound Penthouse Skyline & Pool View',
    desc: 'Our premier luxury offering: sprawling master residence with an independent living salon, dining room, private wraparound sun deck, jacuzzi bath, 24/7 dedicated personal butler service, and complimentary airport chauffeur transfer.',
    amenities: ['Private Jacuzzi & Double Shower', 'Dedicated Butler Service', 'Airport Chauffeur Transfer', 'Wraparound Penthouse Sun Deck', 'Evening Cocktail Hour Access', 'Complimentary In-room Dining Breakfast'],
    categories: {
      bedroom: [
        { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80', caption: 'Palatial Master Emperor King Suite with custom wood millwork' },
        { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80', caption: 'Private sitting alcove and dressing area with walk-in wardrobe' },
        { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80', caption: 'Luxury linen styling with automated blackout shades' }
      ],
      balcony: [
        { url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', caption: 'Wraparound rooftop sun deck with daybeds and skyline panorama' },
        { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', caption: 'Private outdoor dining table for intimate starlit dinners' }
      ],
      bathroom: [
        { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80', caption: 'Opulent Italian Carrara marble bathroom with dual rain showers' },
        { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80', caption: 'Jacuzzi hydrotherapy spa tub with panoramic garden view' }
      ],
      living: [
        { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Grand executive salon with sectional sofa and dining for 4' },
        { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', caption: 'Full private bar, espresso bar, and state-of-the-art Bang & Olufsen sound' }
      ]
    }
  }
};

// 18 Keys Front Desk PMS State (Pre-seeded Realistic Mock Data)
window.pmsRooms = [
  // Floor 1 (Oak Standard AC)
  { id: '101', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'CLEAN', guest: null, dates: null, channel: null, housekeeper: 'Lakshmi P', notes: 'Ready for check-in' },
  { id: '102', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'OCCUPIED', guest: 'Priya Narayanan', dates: 'Sep 27 - Sep 30', channel: 'Direct (0% Fee)', isDirect: true, housekeeper: 'Lakshmi P', notes: 'Attending medical conference' },
  { id: '103', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'OCCUPIED', guest: 'Suresh Raina', dates: 'Sep 28 - Oct 01', channel: 'MakeMyTrip (20%)', isDirect: false, housekeeper: 'Lakshmi P', notes: 'Late checkout requested' },
  { id: '104', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'OCCUPIED', guest: 'Kavita Rao', dates: 'Sep 28 - Oct 02', channel: 'Direct (0% Fee)', isDirect: true, housekeeper: 'Lakshmi P', notes: 'Quiet room near corner' },
  { id: '105', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'OCCUPIED', guest: 'Ananya Sen', dates: 'Sep 26 - Oct 01', channel: 'Agoda (20%)', isDirect: false, housekeeper: 'Lakshmi P', notes: 'Requested extra bath towels' },
  { id: '106', floor: '1', type: 'Oak (Standard AC)', code: 'OAK', status: 'OCCUPIED', guest: 'Vijay Shankar', dates: 'Sep 29 - Oct 03', channel: 'Corporate Direct', isDirect: true, housekeeper: 'Lakshmi P', notes: 'HCL corporate account' },

  // Floor 2 (Maple Deluxe Suite)
  { id: '201', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'OCCUPIED', guest: 'Ramesh Sundaram (VIP)', dates: 'Sep 28 - Oct 04', channel: 'Direct VIP (0% Fee)', isDirect: true, housekeeper: 'Lakshmi P', notes: 'VIP guest. Prefers filter coffee.' },
  { id: '202', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'CLEAN', guest: null, dates: null, channel: null, housekeeper: 'Lakshmi P', notes: 'Sanitized and inspected' },
  { id: '203', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'OCCUPIED', guest: 'Anand Kumar', dates: 'Sep 25 - Oct 01', channel: 'MakeMyTrip (20%)', isDirect: false, housekeeper: 'Lakshmi P', notes: 'Requested extra pillows' },
  { id: '204', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'INSPECTED', guest: null, dates: null, channel: null, housekeeper: 'Lakshmi P', notes: 'Supervisor inspected' },
  { id: '205', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'DIRTY', guest: null, dates: null, channel: null, housekeeper: 'Lakshmi P', notes: 'Checkout at 11 AM • Ready for cleaning' },
  { id: '206', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'OCCUPIED', guest: 'Karthik Raja', dates: 'Sep 27 - Oct 02', channel: 'Booking.com (18%)', isDirect: false, housekeeper: 'Lakshmi P', notes: 'Family stay with 1 child' },
  { id: '207', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'CLEAN', guest: null, dates: null, channel: null, housekeeper: 'Lakshmi P', notes: 'Ready for check-in' },
  { id: '208', floor: '2', type: 'Maple (Deluxe Suite)', code: 'MAPLE', status: 'OCCUPIED', guest: 'Sneha Iyer', dates: 'Sep 26 - Oct 03', channel: 'Corporate Direct', isDirect: true, housekeeper: 'Lakshmi P', notes: 'Corporate billing required' },

  // Floor 3 (Mahogany Executive Suite)
  { id: '301', floor: '3', type: 'Mahogany (Executive Suite)', code: 'MAHOGANY', status: 'OCCUPIED', guest: 'Vikram Malhotra (VIP)', dates: 'Sep 28 - Oct 05', channel: 'Direct VIP (0% Fee)', isDirect: true, housekeeper: 'Vasanth K', notes: 'Suite VIP turndown prepared' },
  { id: '302', floor: '3', type: 'Mahogany (Executive Suite)', code: 'MAHOGANY', status: 'CLEAN', guest: null, dates: null, channel: null, housekeeper: 'Vasanth K', notes: 'Balcony glass polished' },
  { id: '303', floor: '3', type: 'Mahogany (Executive Suite)', code: 'MAHOGANY', status: 'OCCUPIED', guest: 'Rajesh Khanna', dates: 'Sep 27 - Oct 02', channel: 'Agoda (20%)', isDirect: false, housekeeper: 'Vasanth K', notes: 'Fruit basket placed' },
  { id: '304', floor: '3', type: 'Mahogany (Executive Suite)', code: 'MAHOGANY', status: 'DIRTY', guest: null, dates: null, channel: null, housekeeper: 'Vasanth K', notes: 'Priority cleaning for 2 PM check-in' }
];

// Room Filters State
window.activeFloorFilter = 'ALL';
window.activeStatusFilter = 'ALL';

// Active Folios
window.guestFolios = {
  '201': {
    guestName: 'Ramesh Sundaram (VIP Guest)',
    roomNumber: '201',
    roomType: 'Maple (Deluxe Suite)',
    folioNumber: 'FOL-TT-8492-CH-01',
    checkIn: 'Sep 28, 2026',
    checkOut: 'Oct 04, 2026',
    charges: [
      { date: '2026-09-28', cat: 'ROOM', sac: '996311', desc: 'Room Charge - Maple Suite (Night 1)', qty: 1, rate: 3200, gstRate: 12, tax: 384, total: 3584 },
      { date: '2026-09-29', cat: 'ROOM', sac: '996311', desc: 'Room Charge - Maple Suite (Night 2)', qty: 1, rate: 3200, gstRate: 12, tax: 384, total: 3584 },
      { date: '2026-09-28', cat: 'DINING', sac: '996331', desc: 'Twin Star Bistro - Chettinad Dinner & Filter Coffee', qty: 1, rate: 1450, gstRate: 5, tax: 72.5, total: 1522.5 },
      { date: '2026-09-28', cat: 'TRANSPORT', sac: '996412', desc: 'Chennai Airport (MAA) Sedan Chauffeur Pickup', qty: 1, rate: 850, gstRate: 0, tax: 0, total: 850 }
    ],
    payments: [
      { date: '2026-09-28', method: 'UPI (Direct Booking Advance)', ref: 'UPI-984210992', status: 'SUCCEEDED', amount: 5000 }
    ]
  },
  '102': {
    guestName: 'Priya Narayanan',
    roomNumber: '102',
    roomType: 'Oak (Standard AC)',
    folioNumber: 'FOL-TT-9102-CH-01',
    checkIn: 'Sep 27, 2026',
    checkOut: 'Sep 30, 2026',
    charges: [
      { date: '2026-09-27', cat: 'ROOM', sac: '996311', desc: 'Room Charge - Oak Standard AC (3 Nights)', qty: 3, rate: 2400, gstRate: 12, tax: 864, total: 8064 }
    ],
    payments: [
      { date: '2026-09-27', method: 'HDFC Visa Card', ref: 'CARD-AUTH-882194', status: 'SUCCEEDED', amount: 8064 }
    ]
  },
  '301': {
    guestName: 'Vikram Malhotra (VIP)',
    roomNumber: '301',
    roomType: 'Mahogany (Executive Suite)',
    folioNumber: 'FOL-TT-1102-CH-01',
    checkIn: 'Sep 28, 2026',
    checkOut: 'Oct 05, 2026',
    charges: [
      { date: '2026-09-28', cat: 'ROOM', sac: '996311', desc: 'Executive Suite 7 Nights Package', qty: 7, rate: 4500, gstRate: 12, tax: 3780, total: 35280 }
    ],
    payments: [
      { date: '2026-09-28', method: 'Direct Bank Transfer (NEFT)', ref: 'NEFT-559021-HDFC', status: 'SUCCEEDED', amount: 35280 }
    ]
  }
};
window.selectedFolioRoomId = '201';

// --------------------------------------------------------------------------
// Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Load business.json if present
  try {
    const res = await fetch('./data/business.json');
    if (res.ok) {
      const data = await res.json();
      if (data.business_name) {
        window.currentHotel.name = data.business_name;
        window.currentHotel.shortName = data.short_name || data.business_name.split(' ')[0].toUpperCase();
      }
      if (data.city) window.currentHotel.city = data.city;
      if (data.area) window.currentHotel.area = data.area;
      if (data.phone) {
        window.currentHotel.phone = data.phone;
        window.currentHotel.phoneDigits = data.whatsapp_number_digits || data.phone.replace(/\D/g, '');
      }
    }
  } catch (e) {
    // defaults
  }

  // URL Query Parameters Personalization
  const urlParams = new URLSearchParams(window.location.search);
  const qName = urlParams.get('name') || urlParams.get('hotel') || urlParams.get('business_name');
  const qCity = urlParams.get('city');
  const qPhone = urlParams.get('phone') || urlParams.get('whatsapp');
  const qMode = urlParams.get('view') || urlParams.get('tab') || urlParams.get('mode');

  if (qName) {
    window.currentHotel.name = qName.trim();
    window.currentHotel.shortName = window.currentHotel.name.split(' ')[0].toUpperCase();
  }
  if (qCity) {
    window.currentHotel.city = qCity.trim();
  }
  if (qPhone) {
    window.currentHotel.phone = qPhone.trim();
    window.currentHotel.phoneDigits = qPhone.replace(/\D/g, '');
  }

  // Set default dates
  initStayDates();

  // Apply Personalization Across DOM
  applyHotelPersonalization();

  // Render Rooms Board, Calendar, and Folio
  renderRoomCards();
  renderCalendarGrid();
  renderFolio();
  updateOtaCalculator();

  // If URL specified initial mode
  if (qMode === 'operations' || qMode === 'pms' || qMode === 'admin') {
    switchPlatformMode('operations');
  } else if (qMode === 'engine' || qMode === 'booking') {
    switchPlatformMode('engine');
  } else {
    // Check hash
    if (window.location.hash === '#admin-operations' || window.location.hash === '#operations') {
      switchPlatformMode('operations');
    } else if (window.location.hash === '#booking-engine' || window.location.hash === '#engine') {
      switchPlatformMode('engine');
    }
  }

  // Refresh icons
  if (window.lucide) window.lucide.createIcons();
});

// --------------------------------------------------------------------------
// Categorized Room Gallery & Suite Inspection Modal
// --------------------------------------------------------------------------
function openRoomDetailModal(roomId) {
  const room = ROOM_CATEGORIZED_DATA[roomId] || ROOM_CATEGORIZED_DATA['maple-deluxe'];
  window.currentModalRoomId = roomId;

  const m = document.getElementById('roomDetailModal');
  const title = document.getElementById('modalRoomTitle');
  const badge = document.getElementById('modalRoomBadge');
  const origPrice = document.getElementById('modalRoomOriginal');
  const directPrice = document.getElementById('modalRoomPrice');
  const specs = document.getElementById('modalRoomSpecs');
  const amenitiesList = document.getElementById('modalAmenitiesList');

  // Update counts on tabs
  const countBed = document.getElementById('catCountBedroom');
  const countBalcony = document.getElementById('catCountBalcony');
  const countBath = document.getElementById('catCountBathroom');
  const countLiving = document.getElementById('catCountLiving');

  if (title) title.textContent = room.name;
  if (badge) badge.textContent = room.badge;
  if (origPrice) origPrice.textContent = `₹${room.original.toLocaleString('en-IN')}`;
  if (directPrice) directPrice.textContent = `₹${room.price.toLocaleString('en-IN')}`;

  if (specs) {
    specs.innerHTML = `
      <span><i data-lucide="maximize-2" style="width: 13px; height: 13px;"></i> ${room.size}</span>
      <span><i data-lucide="bed" style="width: 13px; height: 13px;"></i> ${room.bed}</span>
      <span><i data-lucide="users" style="width: 13px; height: 13px;"></i> ${room.guests}</span>
      <span><i data-lucide="eye" style="width: 13px; height: 13px;"></i> ${room.view}</span>
    `;
  }

  if (countBed) countBed.textContent = room.categories.bedroom.length;
  if (countBalcony) countBalcony.textContent = room.categories.balcony.length;
  if (countBath) countBath.textContent = room.categories.bathroom.length;
  if (countLiving) countLiving.textContent = room.categories.living.length;

  if (amenitiesList) {
    amenitiesList.innerHTML = room.amenities.map(a => `
      <span class="room-amenity-pill">
        <i data-lucide="check-circle-2" style="width: 13px; height: 13px; color: #10b981;"></i>
        ${a}
      </span>
    `).join('');
  }

  // Default to bedroom category
  selectRoomCategory('bedroom');

  if (m) m.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeRoomDetailModal() {
  const m = document.getElementById('roomDetailModal');
  if (m) m.style.display = 'none';
}

function selectRoomCategory(categoryKey) {
  window.currentModalCategory = categoryKey;
  const room = ROOM_CATEGORIZED_DATA[window.currentModalRoomId] || ROOM_CATEGORIZED_DATA['maple-deluxe'];
  const photos = room.categories[categoryKey] || room.categories.bedroom;

  // Toggle active tab buttons
  const tabBtns = document.querySelectorAll('.cat-tab-btn');
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-cat') === categoryKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Render thumbnails
  const thumbsContainer = document.getElementById('modalThumbsStrip');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = photos.map((p, idx) => `
      <div class="room-thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectFeaturedPhoto(${idx})">
        <img src="${p.url}" alt="${p.caption}">
      </div>
    `).join('');
  }

  // Display first photo
  selectFeaturedPhoto(0);
}

function selectFeaturedPhoto(photoIndex) {
  const room = ROOM_CATEGORIZED_DATA[window.currentModalRoomId] || ROOM_CATEGORIZED_DATA['maple-deluxe'];
  const photos = room.categories[window.currentModalCategory] || room.categories.bedroom;
  const p = photos[photoIndex] || photos[0];

  const featImg = document.getElementById('modalFeaturedImage');
  const captionEl = document.getElementById('modalPhotoCaption');
  const counterEl = document.getElementById('modalPhotoCounter');

  if (featImg) featImg.src = p.url;
  if (captionEl) captionEl.textContent = p.caption;
  if (counterEl) counterEl.textContent = `Photo ${photoIndex + 1} of ${photos.length}`;

  // Update active thumb
  const thumbs = document.querySelectorAll('.room-thumb-item');
  thumbs.forEach((t, i) => {
    if (i === photoIndex) t.classList.add('active');
    else t.classList.remove('active');
  });
}

// --------------------------------------------------------------------------
// Dual Booking Actions: 1) Direct WhatsApp, 2) Direct Booking Engine
// --------------------------------------------------------------------------
function openWhatsAppForRoom(roomId) {
  const room = ROOM_CATEGORIZED_DATA[roomId] || ROOM_CATEGORIZED_DATA['maple-deluxe'];
  const checkIn = document.getElementById('calcCheckIn')?.value || 'Upcoming Stay';
  const checkOut = document.getElementById('calcCheckOut')?.value || 'Upcoming Stay';
  const nights = document.getElementById('nightsDisplay')?.textContent || '3 Nights';

  const message = `Hello ${window.currentHotel.name}! 🌟 I would like to book the *${room.name}* directly (0% OTA commission).

📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut} (${nights})
💰 Direct Rate: ₹${room.price.toLocaleString('en-IN')}/night

Please confirm room availability and send payment QR code. Thank you!`;
  const url = `https://wa.me/${window.currentHotel.phoneDigits}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function bookCurrentModalRoomOnWhatsApp() {
  openWhatsAppForRoom(window.currentModalRoomId);
}

function bookCurrentModalRoomInEngine() {
  closeRoomDetailModal();
  selectRoomForBooking(window.currentModalRoomId);
}

function selectRoomForBooking(roomId) {
  switchPlatformMode('engine', roomId);
}

// --------------------------------------------------------------------------
// 3-in-1 Platform View Switcher
// --------------------------------------------------------------------------
function switchPlatformMode(mode, preselectRoomId) {
  window.currentPlatformMode = mode;

  // View containers
  const vWebsite = document.getElementById('viewWebsite');
  const vEngine = document.getElementById('viewEngine');
  const vOps = document.getElementById('viewOperations');

  // Mode buttons
  const tabWebsite = document.getElementById('tabModeWebsite');
  const tabEngine = document.getElementById('tabModeEngine');
  const tabOps = document.getElementById('tabModeOps');

  // Floating button elements
  const floatText = document.getElementById('floatingPmsText');
  const floatBadge = document.getElementById('floatingPmsBadge');

  if (vWebsite) vWebsite.classList.remove('active-view');
  if (vEngine) vEngine.classList.remove('active-view');
  if (vOps) vOps.classList.remove('active-view');

  if (tabWebsite) tabWebsite.classList.remove('active');
  if (tabEngine) tabEngine.classList.remove('active');
  if (tabOps) tabOps.classList.remove('active');

  if (mode === 'engine') {
    if (vEngine) vEngine.classList.add('active-view');
    if (tabEngine) tabEngine.classList.add('active');
    if (floatText) floatText.textContent = 'Switch to Hotelier PMS';
    if (floatBadge) floatBadge.textContent = 'Admin';
    window.location.hash = '#engine';

    if (preselectRoomId) {
      const radio = document.querySelector(`input[name="engineRoom"][value="${preselectRoomId}"]`);
      if (radio) {
        radio.checked = true;
        syncAndRecalculate('engineRoom');
      }
    }
  } else if (mode === 'operations') {
    if (vOps) vOps.classList.add('active-view');
    if (tabOps) tabOps.classList.add('active');
    if (floatText) floatText.textContent = 'Switch to Guest Website';
    if (floatBadge) floatBadge.textContent = 'Preview';
    window.location.hash = '#operations';
  } else {
    if (vWebsite) vWebsite.classList.add('active-view');
    if (tabWebsite) tabWebsite.classList.add('active');
    if (floatText) floatText.textContent = 'Switch to Hotelier PMS';
    if (floatBadge) floatBadge.textContent = 'Admin';
    window.location.hash = '#website';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) window.lucide.createIcons();
}

function toggleFloatingView() {
  if (window.currentPlatformMode === 'operations') {
    switchPlatformMode('website');
  } else {
    switchPlatformMode('operations');
  }
}

// --------------------------------------------------------------------------
// Hotelier Operations Subtab Switcher
// --------------------------------------------------------------------------
function switchOpsSubtab(tabName) {
  window.currentOpsSubtab = tabName;

  const panels = ['panelRooms', 'panelCalendar', 'panelAnalytics', 'panelFolio', 'panelCrm'];
  panels.forEach(pId => {
    const el = document.getElementById(pId);
    if (el) el.classList.remove('active-panel');
  });

  const subtabs = ['subtabRooms', 'subtabCalendar', 'subtabAnalytics', 'subtabFolio', 'subtabCrm'];
  subtabs.forEach(sId => {
    const el = document.getElementById(sId);
    if (el) el.classList.remove('active');
  });

  if (tabName === 'calendar') {
    const p = document.getElementById('panelCalendar');
    const s = document.getElementById('subtabCalendar');
    if (p) p.classList.add('active-panel');
    if (s) s.classList.add('active');
  } else if (tabName === 'analytics') {
    const p = document.getElementById('panelAnalytics');
    const s = document.getElementById('subtabAnalytics');
    if (p) p.classList.add('active-panel');
    if (s) s.classList.add('active');
  } else if (tabName === 'folio') {
    const p = document.getElementById('panelFolio');
    const s = document.getElementById('subtabFolio');
    if (p) p.classList.add('active-panel');
    if (s) s.classList.add('active');
  } else if (tabName === 'crm') {
    const p = document.getElementById('panelCrm');
    const s = document.getElementById('subtabCrm');
    if (p) p.classList.add('active-panel');
    if (s) s.classList.add('active');
  } else {
    const p = document.getElementById('panelRooms');
    const s = document.getElementById('subtabRooms');
    if (p) p.classList.add('active-panel');
    if (s) s.classList.add('active');
  }

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// PMS Front Desk & Room Status Board
// --------------------------------------------------------------------------
function filterRoomCards(type, val, btnEl) {
  if (type === 'floor') window.activeFloorFilter = val;
  if (type === 'status') window.activeStatusFilter = val;

  if (btnEl && btnEl.parentElement) {
    const siblings = btnEl.parentElement.querySelectorAll('.filter-pill');
    siblings.forEach(s => s.classList.remove('active'));
    btnEl.classList.add('active');
  }

  renderRoomCards();
}

function renderRoomCards() {
  const container = document.getElementById('opsRoomsContainer');
  if (!container) return;

  const filtered = window.pmsRooms.filter(r => {
    if (window.activeFloorFilter !== 'ALL' && r.floor !== window.activeFloorFilter) return false;
    if (window.activeStatusFilter !== 'ALL' && r.status !== window.activeStatusFilter) return false;
    return true;
  });

  container.innerHTML = filtered.map(r => {
    let statusClass = 'status-clean';
    let statusLabel = r.status;
    let actionBtnHtml = '';

    if (r.status === 'OCCUPIED') {
      statusClass = 'status-occupied';
      actionBtnHtml = `<button class="btn-room-action" onclick="openFolioForRoom('${r.id}')"><i data-lucide="receipt" style="width:13px;height:13px;"></i> View Folio</button>`;
    } else if (r.status === 'DIRTY') {
      statusClass = 'status-dirty';
      actionBtnHtml = `<button class="btn-room-action" onclick="cleanRoom('${r.id}')"><i data-lucide="sparkles" style="width:13px;height:13px;"></i> Clean Room</button>`;
    } else if (r.status === 'CLEAN') {
      statusClass = 'status-clean';
      actionBtnHtml = `<button class="btn-room-action" onclick="inspectRoom('${r.id}')"><i data-lucide="check" style="width:13px;height:13px;"></i> Inspect</button>`;
    } else if (r.status === 'INSPECTED') {
      statusClass = 'status-inspected';
      actionBtnHtml = `<button class="btn-room-action" onclick="assignWalkIn('${r.id}')"><i data-lucide="user-plus" style="width:13px;height:13px;"></i> Quick Check-In</button>`;
    }

    const guestHtml = r.guest ? `
      <div class="ops-room-guest-box">
        <div class="guest-name-row">
          <span>${r.guest}</span>
          <span class="channel-tag ${r.isDirect ? 'direct' : 'ota'}">${r.channel}</span>
        </div>
        <div class="guest-dates-row">
          <i data-lucide="calendar" style="width:12px;height:12px;display:inline;vertical-align:middle;"></i>
          ${r.dates}
        </div>
      </div>
    ` : `
      <div class="ops-room-guest-box" style="background:#ffffff; border: 1px dashed #cbd5e1;">
        <span style="font-size: 0.78rem; color: #94a3b8; font-style: italic;">No guest currently checked-in</span>
      </div>
    `;

    return `
      <div class="ops-room-card">
        <div class="ops-room-top">
          <div>
            <span class="room-num-badge">Room ${r.id}</span>
            <div class="room-tier-label">${r.type} • Floor ${r.floor}</div>
          </div>
          <span class="status-pill ${statusClass}">${statusLabel}</span>
        </div>

        ${guestHtml}

        <div class="housekeeper-line">
          <span><i data-lucide="user" style="width:12px;height:12px;display:inline;vertical-align:middle;"></i> ${r.housekeeper}</span>
          <span style="font-size: 0.72rem; color: #64748b;">${r.notes}</span>
        </div>

        ${actionBtnHtml}
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function cleanRoom(roomId) {
  const room = window.pmsRooms.find(r => r.id === roomId);
  if (room) {
    room.status = 'CLEAN';
    room.notes = 'Cleaned & ready for inspection';
    renderRoomCards();
  }
}

function inspectRoom(roomId) {
  const room = window.pmsRooms.find(r => r.id === roomId);
  if (room) {
    room.status = 'INSPECTED';
    room.notes = 'Supervisor inspected & approved';
    renderRoomCards();
  }
}

function assignWalkIn(roomId) {
  const room = window.pmsRooms.find(r => r.id === roomId);
  if (room) {
    room.status = 'OCCUPIED';
    room.guest = 'Walk-In Guest (Mr. Vijay)';
    room.dates = 'Oct 01 - Oct 03';
    room.channel = 'Direct Walk-In (0%)';
    room.isDirect = true;
    room.notes = 'Checked in at front desk';
    renderRoomCards();
  }
}

function simulateHousekeepingTurndown() {
  window.pmsRooms.forEach(r => {
    if (r.status === 'DIRTY') {
      r.status = 'CLEAN';
      r.notes = 'Housekeeping completed';
    }
  });
  renderRoomCards();
  alert('🧹 Housekeeping complete! All dirty rooms marked as CLEAN and ready for guest check-in.');
}

function simulateNewWalkIn() {
  const cleanRoom = window.pmsRooms.find(r => r.status === 'CLEAN' || r.status === 'INSPECTED');
  if (cleanRoom) {
    assignWalkIn(cleanRoom.id);
    switchOpsSubtab('rooms');
    alert(`✓ Walk-in guest successfully assigned to Room ${cleanRoom.id} (${cleanRoom.type}) with zero OTA commission!`);
  } else {
    alert('All rooms currently occupied or being cleaned.');
  }
}

// --------------------------------------------------------------------------
// Multi-Day Reservation Gantt Calendar
// --------------------------------------------------------------------------
function renderCalendarGrid() {
  const tbody = document.getElementById('tapeTableBody');
  if (!tbody) return;

  const sampleRows = [
    {
      num: '102 Oak',
      cells: [
        { span: 3, cls: 'res-direct', title: 'Priya Narayanan (Direct 0%)' },
        { span: 4, cls: 'res-booking', title: 'Rohit Sharma (Booking.com)' }
      ]
    },
    {
      num: '104 Oak',
      cells: [
        { span: 1, empty: true },
        { span: 4, cls: 'res-direct', title: 'Kavita Rao (Direct 0%)' },
        { span: 2, empty: true }
      ]
    },
    {
      num: '105 Oak',
      cells: [
        { span: 3, cls: 'res-agoda', title: 'Ananya Sen (Agoda)' },
        { span: 3, cls: 'res-direct', title: 'Harish K. (Direct 0%)' },
        { span: 1, empty: true }
      ]
    },
    {
      num: '201 Maple',
      cells: [
        { span: 7, cls: 'res-direct', title: 'Ramesh Sundaram (VIP Direct 0%)' }
      ]
    },
    {
      num: '203 Maple',
      cells: [
        { span: 4, cls: 'res-mmt', title: 'Anand Kumar (MakeMyTrip 20%)' },
        { span: 3, cls: 'res-direct', title: 'Gautam S. (Direct 0%)' }
      ]
    },
    {
      num: '206 Maple',
      cells: [
        { span: 2, empty: true },
        { span: 4, cls: 'res-booking', title: 'Karthik Raja (Booking.com)' },
        { span: 1, empty: true }
      ]
    },
    {
      num: '301 Mahogany',
      cells: [
        { span: 7, cls: 'res-direct', title: 'Vikram Malhotra (Executive Suite VIP)' }
      ]
    },
    {
      num: '303 Mahogany',
      cells: [
        { span: 4, cls: 'res-agoda', title: 'Rajesh Khanna (Agoda)' },
        { span: 3, cls: 'res-direct', title: 'Sunil Rao (Direct 0%)' }
      ]
    }
  ];

  tbody.innerHTML = sampleRows.map(row => {
    let cellsHtml = '';
    row.cells.forEach(c => {
      if (c.empty) {
        cellsHtml += `<td colspan="${c.span}" style="background:#ffffff; border:1px solid #f1f5f9;"></td>`;
      } else {
        cellsHtml += `
          <td colspan="${c.span}" style="padding:4px;">
            <div class="tape-res-block ${c.cls}" onclick="alert('${c.title} • Booking Reference Verified • Status: Active')">
              <span>${c.title}</span>
              <span style="font-size:0.65rem;opacity:0.9;">${c.span}N</span>
            </div>
          </td>
        `;
      }
    });

    return `
      <tr>
        <td style="font-weight:700; text-align:left; background:#f8fafc; border:1px solid #e2e8f0;">
          ${row.num}
        </td>
        ${cellsHtml}
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// Interactive OTA Commission Loss Calculator
// --------------------------------------------------------------------------
function updateOtaCalculator() {
  const roomsSlider = document.getElementById('calcRoomsSlider');
  const adrSlider = document.getElementById('calcAdrSlider');
  const occSlider = document.getElementById('calcOccSlider');

  const roomsVal = document.getElementById('calcRoomsVal');
  const adrVal = document.getElementById('calcAdrVal');
  const occVal = document.getElementById('calcOccVal');
  const resultDrain = document.getElementById('calcResultDrain');

  if (!roomsSlider || !adrSlider || !occSlider) return;

  const rooms = parseInt(roomsSlider.value, 10);
  const adr = parseInt(adrSlider.value, 10);
  const occ = parseInt(occSlider.value, 10);

  if (roomsVal) roomsVal.textContent = `${rooms} Rooms`;
  if (adrVal) adrVal.textContent = `₹${adr.toLocaleString('en-IN')} / night`;
  if (occVal) occVal.textContent = `${occ}% Occupancy`;

  const totalRoomNights = rooms * 365 * (occ / 100);
  const otaNights = totalRoomNights * 0.40;
  const otaRevenue = otaNights * adr;
  const annualDrain = Math.round(otaRevenue * 0.18);

  if (resultDrain) {
    resultDrain.textContent = `₹${annualDrain.toLocaleString('en-IN')}`;
  }
}

// --------------------------------------------------------------------------
// Live Guest Folio & Invoicing System
// --------------------------------------------------------------------------
function selectFolio(roomId) {
  window.selectedFolioRoomId = roomId;

  const items = ['folioItem201', 'folioItem102', 'folioItem301'];
  items.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  const activeEl = document.getElementById(`folioItem${roomId}`);
  if (activeEl) activeEl.classList.add('active');

  renderFolio();
}

function openFolioForRoom(roomId) {
  switchOpsSubtab('folio');
  selectFolio(roomId);
}

function renderFolio() {
  const folio = window.guestFolios[window.selectedFolioRoomId] || window.guestFolios['201'];
  if (!folio) return;

  const titleEl = document.getElementById('folioGuestTitle');
  const numEl = document.getElementById('folioNumber');
  if (titleEl) titleEl.textContent = `${folio.guestName} (Room ${folio.roomNumber} - ${folio.roomType})`;
  if (numEl) numEl.textContent = folio.folioNumber;

  // Render Charges
  const chargesBody = document.getElementById('folioChargesBody');
  let gross = 0;
  let tax = 0;

  if (chargesBody) {
    chargesBody.innerHTML = folio.charges.map(c => {
      gross += c.rate * c.qty;
      tax += c.tax;
      return `
        <tr>
          <td>${c.date}</td>
          <td><span class="status-pill status-inspected" style="font-size:0.65rem;">${c.cat}</span></td>
          <td><code>${c.sac}</code></td>
          <td><strong>${c.desc}</strong></td>
          <td style="text-align:center;">${c.qty}</td>
          <td>₹${c.rate.toLocaleString('en-IN')}</td>
          <td>${c.gstRate}%</td>
          <td style="text-align:right; font-weight:700;">₹${c.total.toLocaleString('en-IN')}</td>
        </tr>
      `;
    }).join('');
  }

  // Render Payments
  const paymentsBody = document.getElementById('folioPaymentsBody');
  let totalPaid = 0;
  if (paymentsBody) {
    paymentsBody.innerHTML = folio.payments.map(p => {
      totalPaid += p.amount;
      return `
        <tr>
          <td>${p.date}</td>
          <td><strong>${p.method}</strong></td>
          <td><code>${p.ref}</code></td>
          <td><span class="status-pill status-clean" style="font-size:0.65rem;">${p.status}</span></td>
          <td style="text-align:right; font-weight:700; color:#059669;">₹${p.amount.toLocaleString('en-IN')}</td>
        </tr>
      `;
    }).join('');
  }

  const net = gross + tax;
  const balance = Math.max(0, net - totalPaid);

  const grossVal = document.getElementById('folioGrossVal');
  const taxVal = document.getElementById('folioTaxVal');
  const netVal = document.getElementById('folioNetVal');
  const paidVal = document.getElementById('folioPaidVal');
  const balVal = document.getElementById('folioBalanceVal');

  if (grossVal) grossVal.textContent = `₹${gross.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  if (taxVal) taxVal.textContent = `₹${tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  if (netVal) netVal.textContent = `₹${net.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  if (paidVal) paidVal.textContent = `₹${totalPaid.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  if (balVal) balVal.textContent = `₹${balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
}

function promptAddCharge() {
  const desc = prompt('Enter charge description:', 'Twin Star Bistro - Executive Lunch Special');
  if (!desc) return;
  const amountStr = prompt('Enter charge amount in ₹ (before 5% GST):', '850');
  if (!amountStr) return;

  const rate = parseFloat(amountStr) || 850;
  const tax = Math.round(rate * 0.05 * 100) / 100;
  const total = rate + tax;

  const folio = window.guestFolios[window.selectedFolioRoomId];
  if (folio) {
    folio.charges.push({
      date: new Date().toISOString().split('T')[0],
      cat: 'POS_DINING',
      sac: '996331',
      desc: desc,
      qty: 1,
      rate: rate,
      gstRate: 5,
      tax: tax,
      total: total
    });
    renderFolio();
    alert('✓ Charge successfully posted to guest folio!');
  }
}

// --------------------------------------------------------------------------
// Official GST Tax Invoice Modal
// --------------------------------------------------------------------------
function openGstInvoiceModal(folioId) {
  const m = document.getElementById('gstInvoiceModal');
  const hotelNameEl = document.getElementById('gstHotelName');
  if (hotelNameEl) hotelNameEl.textContent = window.currentHotel.name;

  if (m) m.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeGstInvoiceModal() {
  const m = document.getElementById('gstInvoiceModal');
  if (m) m.style.display = 'none';
}

// --------------------------------------------------------------------------
// WhatsApp CRM Automation Modal
// --------------------------------------------------------------------------
function openWhatsAppModal(guestName, type) {
  const m = document.getElementById('whatsappModal');
  const header = document.getElementById('waGuestHeader');
  const content = document.getElementById('whatsappMessageContent');

  if (header) header.textContent = `WhatsApp message to: ${guestName}`;

  let msg = '';
  if (type === 'welcome') {
    msg = `Dear <strong>${guestName}</strong>, welcome to <strong>${window.currentHotel.name}</strong>! 🌟 Your AC room key is ready. High-speed Wi-Fi network: <em>TwinStar_Guest</em> (Passcode: <em>Star2026</em>). For in-room dining, dial 9. Have a wonderful stay!`;
  } else if (type === 'promo') {
    msg = `Hello <strong>${guestName}</strong>! As a valued guest of <strong>${window.currentHotel.name}</strong>, enjoy an exclusive <strong>15% Direct Discount</strong> on your next visit with code <strong>DIRECTVIP15</strong> on our official booking engine: https://ramesh-iitkgp.github.io/twin-star-hotel/`;
  } else if (type === 'review') {
    msg = `Dear <strong>${guestName}</strong>, thank you for staying at <strong>${window.currentHotel.name}</strong>! We hope you enjoyed your time with us. Could you take 30 seconds to share your experience on Google? It means the world to our team: https://g.page/r/twinstar-review/`;
  }

  if (content) content.innerHTML = msg;
  if (m) m.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeWhatsAppModal() {
  const m = document.getElementById('whatsappModal');
  if (m) m.style.display = 'none';
}

// --------------------------------------------------------------------------
// Booking Engine Dynamic Synchronization & Recalculation
// --------------------------------------------------------------------------
function initStayDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkOut = new Date(today);
  checkOut.setDate(checkOut.getDate() + 4);

  const inStr = tomorrow.toISOString().split('T')[0];
  const outStr = checkOut.toISOString().split('T')[0];

  const heroIn = document.getElementById('heroCheckIn');
  const heroOut = document.getElementById('heroCheckOut');
  if (heroIn) heroIn.value = inStr;
  if (heroOut) heroOut.value = outStr;

  const calcIn = document.getElementById('calcCheckIn');
  const calcOut = document.getElementById('calcCheckOut');
  if (calcIn) calcIn.value = inStr;
  if (calcOut) calcOut.value = outStr;

  const engIn = document.getElementById('engineViewCheckIn');
  const engOut = document.getElementById('engineViewCheckOut');
  if (engIn) engIn.value = inStr;
  if (engOut) engOut.value = outStr;

  recalculateTotal();
  recalculateEngineView();
}

function syncAndRecalculate(source) {
  if (source === 'engineViewCheckIn' || source === 'engineViewCheckOut') {
    const engIn = document.getElementById('engineViewCheckIn');
    const engOut = document.getElementById('engineViewCheckOut');
    const calcIn = document.getElementById('calcCheckIn');
    const calcOut = document.getElementById('calcCheckOut');

    if (calcIn && engIn) calcIn.value = engIn.value;
    if (calcOut && engOut) calcOut.value = engOut.value;
  }

  recalculateEngineView();
  recalculateTotal();
}

function recalculateEngineView() {
  const engIn = document.getElementById('engineViewCheckIn');
  const engOut = document.getElementById('engineViewCheckOut');
  if (!engIn || !engOut) return;

  const inDate = new Date(engIn.value);
  const outDate = new Date(engOut.value);
  let nights = Math.round((outDate - inDate) / (1000 * 60 * 60 * 24));
  if (nights < 1) nights = 1;

  const nightsDisplay = document.getElementById('engineViewNights');
  if (nightsDisplay) nightsDisplay.textContent = `${nights} Night${nights > 1 ? 's' : ''} Selected`;

  const selectedRoomEl = document.querySelector('input[name="engineRoom"]:checked');
  const roomKey = selectedRoomEl ? selectedRoomEl.value : 'maple-deluxe';
  const roomData = window.currentHotel.rooms[roomKey] || window.currentHotel.rooms['maple-deluxe'];

  const selectedMealEl = document.querySelector('input[name="engineMealPlan"]:checked');
  const mealKey = selectedMealEl ? selectedMealEl.value : 'cp';
  let mealRate = 0;
  let mealTitle = 'EP (Room Only)';
  if (mealKey === 'cp') { mealRate = 250; mealTitle = 'CP Breakfast Buffet'; }
  if (mealKey === 'map') { mealRate = 650; mealTitle = 'MAP Half Board'; }

  let addonsTotal = 0;
  const chkTransfer = document.getElementById('engineAddonTransfer');
  const chkLate = document.getElementById('engineAddonLateCheckout');
  const chkSpa = document.getElementById('engineAddonSpa');

  if (chkTransfer && chkTransfer.checked) addonsTotal += 850;
  if (chkLate && chkLate.checked) addonsTotal += 500;
  if (chkSpa && chkSpa.checked) addonsTotal += 1200;

  const roomBase = roomData.price * nights;
  const mealTotal = mealRate * nights;
  const subtotal = roomBase + mealTotal + addonsTotal;
  const taxes = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + taxes;

  const otaEquivalent = (roomData.original * nights) + mealTotal + addonsTotal;
  const otaSavings = Math.max(0, otaEquivalent - grandTotal);

  const sumHotel = document.getElementById('engineSummaryHotelName');
  const sumRoom = document.getElementById('engineSummaryRoomName');
  const sumDate = document.getElementById('engineSummaryDateLine');
  const lblNights = document.getElementById('engineLabelRoomNights');
  const valBase = document.getElementById('engineValRoomBase');
  const lblMeal = document.getElementById('engineLabelMealPlan');
  const valMeal = document.getElementById('engineValMealPlan');
  const rowAddons = document.getElementById('engineRowAddons');
  const valAddons = document.getElementById('engineValAddons');
  const valTaxes = document.getElementById('engineValTaxes');
  const valGrand = document.getElementById('engineValGrandTotal');
  const otaSavingsEl = document.getElementById('engineOtaSavingsText');

  if (sumHotel) sumHotel.textContent = window.currentHotel.name;
  if (sumRoom) sumRoom.textContent = roomData.name;
  if (sumDate) sumDate.textContent = `${engIn.value} to ${engOut.value} (${nights} nights)`;
  if (lblNights) lblNights.textContent = `${roomData.name.split(' ')[0]} (${nights} nights × ₹${roomData.price.toLocaleString('en-IN')})`;
  if (valBase) valBase.textContent = `₹${roomBase.toLocaleString('en-IN')}`;
  if (lblMeal) lblMeal.textContent = mealTitle;
  if (valMeal) valMeal.textContent = `₹${mealTotal.toLocaleString('en-IN')}`;

  if (rowAddons && valAddons) {
    if (addonsTotal > 0) {
      rowAddons.style.display = 'flex';
      valAddons.textContent = `₹${addonsTotal.toLocaleString('en-IN')}`;
    } else {
      rowAddons.style.display = 'none';
    }
  }

  if (valTaxes) valTaxes.textContent = `₹${taxes.toLocaleString('en-IN')}`;
  if (valGrand) valGrand.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (otaSavingsEl) otaSavingsEl.textContent = `₹${(roomData.original - roomData.price) * nights}`;

  window.lastQuotation = {
    hotelName: window.currentHotel.name,
    roomName: roomData.name,
    inDate: engIn.value,
    outDate: engOut.value,
    nights: nights,
    mealPlan: mealTitle,
    grandTotal: `₹${grandTotal.toLocaleString('en-IN')}`
  };
}

function recalculateTotal() {
  const calcIn = document.getElementById('calcCheckIn');
  const calcOut = document.getElementById('calcCheckOut');
  if (!calcIn || !calcOut) return;

  const inDate = new Date(calcIn.value);
  const outDate = new Date(calcOut.value);
  let nights = Math.round((outDate - inDate) / (1000 * 60 * 60 * 24));
  if (nights < 1) nights = 1;

  const nightsDisplay = document.getElementById('nightsDisplay');
  if (nightsDisplay) nightsDisplay.textContent = `${nights} Night${nights > 1 ? 's' : ''} Selected`;

  const selectedRoomEl = document.querySelector('input[name="selectedRoom"]:checked');
  const roomKey = selectedRoomEl ? selectedRoomEl.value : 'maple-deluxe';
  const roomData = window.currentHotel.rooms[roomKey] || window.currentHotel.rooms['maple-deluxe'];

  const selectedMealEl = document.querySelector('input[name="mealPlan"]:checked');
  const mealKey = selectedMealEl ? selectedMealEl.value : 'cp';
  let mealRate = 0;
  let mealTitle = 'EP (Room Only)';
  if (mealKey === 'cp') { mealRate = 250; mealTitle = 'CP Breakfast Buffet'; }
  if (mealKey === 'map') { mealRate = 650; mealTitle = 'MAP (Dinner + Breakfast)'; }

  let addonsTotal = 0;
  const chkTransfer = document.getElementById('addonTransfer');
  const chkLate = document.getElementById('addonLateCheckout');
  if (chkTransfer && chkTransfer.checked) addonsTotal += 850;
  if (chkLate && chkLate.checked) addonsTotal += 500;

  const roomBase = roomData.price * nights;
  const mealTotal = mealRate * nights;
  const subtotal = roomBase + mealTotal + addonsTotal;
  const taxes = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + taxes;

  const valBase = document.getElementById('valRoomBase');
  const valMeal = document.getElementById('valMealPlan');
  const valTaxes = document.getElementById('valTaxes');
  const valGrand = document.getElementById('valGrandTotal');

  if (valBase) valBase.textContent = `₹${roomBase.toLocaleString('en-IN')}`;
  if (valMeal) valMeal.textContent = `₹${mealTotal.toLocaleString('en-IN')}`;
  if (valTaxes) valTaxes.textContent = `₹${taxes.toLocaleString('en-IN')}`;
  if (valGrand) valGrand.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// --------------------------------------------------------------------------
// Confirm Direct Booking & Send to CRM/PMS Backend
// --------------------------------------------------------------------------
function confirmDirectBooking() {
  const guestName = document.getElementById('engineGuestName')?.value || 'Ramesh Sundaram (VIP Guest)';
  const phone = document.getElementById('engineGuestPhone')?.value || '+91 98404 60459';
  const email = document.getElementById('engineGuestEmail')?.value || 'ramesh@example.com';
  
  // 1. Dispatch into PMS Rooms Store
  const targetRoom = window.pmsRooms.find(r => r.status === 'CLEAN' || r.status === 'INSPECTED') || window.pmsRooms[0];
  if (targetRoom) {
    targetRoom.status = 'OCCUPIED';
    targetRoom.guest = `${guestName} (Direct)`;
    targetRoom.dates = `${window.lastQuotation.inDate} - ${window.lastQuotation.outDate}`;
    targetRoom.channel = 'Direct Engine (0%)';
    targetRoom.isDirect = true;
    targetRoom.notes = `Online direct booking (${window.lastQuotation.nights} nights)`;
    renderRoomCards();
  }

  // 2. Create Active Folio in PMS
  const folioNum = `FOL-DIR-${Math.floor(1000 + Math.random() * 9000)}`;
  window.guestFolios[targetRoom ? targetRoom.id : '201'] = {
    guestName: guestName,
    roomNumber: targetRoom ? targetRoom.id : '201',
    roomType: window.lastQuotation.roomName,
    folioNumber: folioNum,
    checkIn: window.lastQuotation.inDate,
    checkOut: window.lastQuotation.outDate,
    charges: [
      {
        date: window.lastQuotation.inDate,
        cat: 'ROOM',
        sac: '996311',
        desc: `Room Charge - ${window.lastQuotation.roomName} (${window.lastQuotation.nights} Nights)`,
        qty: window.lastQuotation.nights,
        rate: 3200,
        gstRate: 12,
        tax: 768,
        total: 7168
      },
      {
        date: window.lastQuotation.inDate,
        cat: 'DINING',
        sac: '996331',
        desc: window.lastQuotation.mealPlan,
        qty: window.lastQuotation.nights,
        rate: 250,
        gstRate: 5,
        tax: 37.5,
        total: 787.5
      }
    ],
    payments: [
      {
        date: new Date().toISOString().split('T')[0],
        method: 'Direct UPI Advance',
        ref: `UPI-${Math.floor(100000000 + Math.random() * 900000000)}`,
        status: 'SUCCEEDED',
        amount: 5000
      }
    ]
  };

  // 3. Update Front Desk KPI Stats
  const occVal = document.getElementById('kpiOccupancy');
  if (occVal) occVal.textContent = '88.9%';
  const revVal = document.getElementById('kpiTodayRev');
  if (revVal) revVal.textContent = '₹85,792';

  // 4. Open Voucher Modal with PMS Link
  openSimulatedVoucher();
}

function openSimulatedVoucher() {
  const quote = window.lastQuotation || {
    hotelName: window.currentHotel.name,
    roomName: "Maple (Signature Panoramic Suite)",
    inDate: "Tomorrow",
    outDate: "In 4 Days",
    mealPlan: "CP (Breakfast Buffet Included)",
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
  const vGuest = document.getElementById('vGuestName');

  const guestNameInput = document.getElementById('engineGuestName');
  if (vGuest && guestNameInput) vGuest.textContent = guestNameInput.value;

  if (vHotelTitle) vHotelTitle.textContent = quote.hotelName;
  if (vRoomCat) vRoomCat.textContent = quote.roomName;
  if (vCheckIn) vCheckIn.textContent = `${quote.inDate} (12:00 PM Check-in)`;
  if (vCheckOut) vCheckOut.textContent = `${quote.outDate} (11:00 AM Check-out)`;
  if (vMeal) vMeal.textContent = quote.mealPlan;
  if (vTotal) vTotal.textContent = quote.grandTotal;
  if (vId) vId.textContent = `WKX-${Math.floor(100000 + Math.random() * 900000)}`;

  if (vModal) vModal.style.display = 'flex';
  if (window.lucide) window.lucide.createIcons();
}

function closeVoucherModal() {
  const vModal = document.getElementById('voucherModal');
  if (vModal) vModal.style.display = 'none';
}

// --------------------------------------------------------------------------
// Dynamic Personalization Across Elements
// --------------------------------------------------------------------------
function applyHotelPersonalization() {
  const h = window.currentHotel;

  const platTitle = document.getElementById('platformHotelTitle');
  if (platTitle) platTitle.textContent = `${h.name} • ${h.city}`;

  const opsTitle = document.getElementById('opsHotelTitle');
  if (opsTitle) opsTitle.textContent = `${h.name} — Front Desk Operations`;

  const opsCity = document.getElementById('opsCityTag');
  if (opsCity) opsCity.textContent = `${h.area}, ${h.city}`;

  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = `${h.name} | Official Hotel & Resort Website • ${h.city}`;

  const leadHotelName = document.getElementById('leadHotelName');
  if (leadHotelName) leadHotelName.textContent = `${h.name} Management`;

  const hotelHeaderName = document.getElementById('hotelHeaderName');
  if (hotelHeaderName) hotelHeaderName.textContent = h.shortName;

  const headerCity = document.getElementById('headerCity');
  if (headerCity) headerCity.textContent = h.city.toUpperCase();

  const headerPhoneText = document.getElementById('headerPhoneText');
  const headerPhoneBtn = document.getElementById('headerPhoneBtn');
  if (headerPhoneText) headerPhoneText.textContent = h.phone;
  if (headerPhoneBtn) headerPhoneBtn.href = `tel:${h.phoneDigits}`;

  const heroMainTitle = document.getElementById('heroMainTitle');
  const heroCityAccent = document.getElementById('heroCityAccent');
  const heroHotelNameInline = document.getElementById('heroHotelNameInline');
  if (heroCityAccent) heroCityAccent.textContent = `${h.area}, ${h.city}`;
  if (heroHotelNameInline) heroHotelNameInline.textContent = h.name;

  const footerHotelName = document.getElementById('footerHotelName');
  const copyHotelName = document.getElementById('copyHotelName');
  if (footerHotelName) footerHotelName.textContent = h.shortName;
  if (copyHotelName) copyHotelName.textContent = h.name;
}
