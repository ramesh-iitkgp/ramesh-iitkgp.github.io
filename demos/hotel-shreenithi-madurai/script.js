/**
 * Luxury Hotel & Suites — Complete 3-in-1 Hospitality Operating System
 * WebKartX Demo Preview: Luxury Website + 0% Booking Engine + Front Desk PMS & CRM
 */

// Global Hotel State & Configuration
window.currentHotel = {
  name: "Grand Star Resort & Luxury Suites",
  shortName: "GRAND STAR",
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
      { date: '2026-09-28', cat: 'DINING', sac: '996331', desc: 'The Palm Bistro & Lounge - Chettinad Dinner & Filter Coffee', qty: 1, rate: 1450, gstRate: 5, tax: 72.5, total: 1522.5 },
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
  const qImage = urlParams.get('image') || urlParams.get('hero') || urlParams.get('hero_image') || urlParams.get('bg');
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
  if (qImage) {
    window.currentHotel.heroImage = qImage.trim();
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

  // Hero Concept Selection (?concept=1, 2, or 3/ginger)
  const qConcept = urlParams.get('concept') || urlParams.get('hero') || urlParams.get('c');
  if (qConcept === '1' || qConcept === 'c1') {
    switchHeroConcept('1');
  } else if (qConcept === '2' || qConcept === 'c2') {
    switchHeroConcept('2');
  } else {
    // Default to Ginger Lean Luxe template (Concept 3)
    switchHeroConcept('3');
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
// Fresh Hero Section Helpers (3-Star & Budget/Boutique Optimization)
// --------------------------------------------------------------------------
function openWhatsAppInquiry() {
  const h = window.currentHotel;
  const inDate = document.getElementById('heroCheckIn')?.value || 'Upcoming Stay';
  const outDate = document.getElementById('heroCheckOut')?.value || 'Upcoming Stay';
  const guests = document.getElementById('heroGuests')?.value || '2 Guests';
  const roomSelect = document.getElementById('heroRoomSelect');
  const roomName = roomSelect ? roomSelect.options[roomSelect.selectedIndex].text : 'AC Room';

  const msg = `Hello ${h.name}! 🌟 I am checking availability for direct booking:
• City: ${h.city}
• Room: ${roomName}
• Check-in: ${inDate}
• Check-out: ${outDate}
• Guests: ${guests}

Please confirm best available direct room rates and availability. Thank you!`;

  const url = `https://wa.me/${h.phoneDigits}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function updateHeroCardPrice() {
  const sel = document.getElementById('heroRoomSelect');
  if (!sel) return;
  const val = sel.value;
  const rateEl = document.getElementById('heroDirectRate');
  const otaEl = document.getElementById('heroOtaRate');
  const miniImg = document.getElementById('heroMiniRoomImg');
  const miniTitle = document.getElementById('heroMiniRoomTitle');
  const miniSpecs = document.getElementById('heroMiniRoomSpecs');
  const miniSave = document.getElementById('heroMiniRoomSave');

  let directPrice = 2400;
  let otaPrice = 3200;
  let imgSrc = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80';
  let title = 'Oak (Standard AC Room)';
  let specs = 'Queen Bed • 180 sq.ft • Chilled AC • Attached Bath';
  let saveText = '✓ Save ₹800 Booking Direct';

  if (val === 'maple-deluxe') {
    directPrice = 3200;
    otaPrice = 4000;
    imgSrc = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80';
    title = 'Maple (Deluxe Suite)';
    specs = 'King Bed • 240 sq.ft • City View • Armchair Lounge';
    saveText = '✓ Save ₹800 Booking Direct';
  } else if (val === 'mahogany-executive') {
    directPrice = 4500;
    otaPrice = 5800;
    imgSrc = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80';
    title = 'Mahogany (Executive Suite)';
    specs = 'Grand King • 360 sq.ft • Balcony • Living Area';
    saveText = '✓ Save ₹1,300 Booking Direct';
  }

  if (rateEl) rateEl.textContent = `₹${directPrice.toLocaleString('en-IN')}`;
  if (otaEl) otaEl.textContent = `₹${otaPrice.toLocaleString('en-IN')}`;
  if (miniImg) miniImg.src = imgSrc;
  if (miniTitle) miniTitle.textContent = title;
  if (miniSpecs) miniSpecs.textContent = specs;
  if (miniSave) miniSave.textContent = saveText;
}

function proceedToBookingFromHero() {
  const sel = document.getElementById('heroRoomSelect')?.value || 'oak-standard';
  const inDate = document.getElementById('heroCheckIn')?.value;
  const outDate = document.getElementById('heroCheckOut')?.value;

  const engIn = document.getElementById('engineViewCheckIn');
  const engOut = document.getElementById('engineViewCheckOut');
  if (engIn && inDate) engIn.value = inDate;
  if (engOut && outDate) engOut.value = outDate;

  switchPlatformMode('engine', sel);
}

function syncHeroDateToEngine() {
  const hIn = document.getElementById('heroCheckIn');
  const hOut = document.getElementById('heroCheckOut');
  const eIn = document.getElementById('engineViewCheckIn');
  const eOut = document.getElementById('engineViewCheckOut');
  const cIn = document.getElementById('calcCheckIn');
  const cOut = document.getElementById('calcCheckOut');

  if (hIn && eIn) eIn.value = hIn.value;
  if (hOut && eOut) eOut.value = hOut.value;
  if (hIn && cIn) cIn.value = hIn.value;
  if (hOut && cOut) cOut.value = hOut.value;

  if (typeof recalculateEngineView === 'function') recalculateEngineView();
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
  const desc = prompt('Enter charge description:', 'The Palm Bistro & Lounge - Executive Lunch Special');
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
  const h = window.currentHotel;
  const hotelNameEl = document.getElementById('gstHotelName');
  if (hotelNameEl) hotelNameEl.textContent = h.name;

  const gstAddr = document.getElementById('gstAddressLine');
  if (gstAddr) {
    gstAddr.innerHTML = `${h.address || ('Central Road, ' + h.city + ', Tamil Nadu')}<br><strong>GSTIN:</strong> 33AAACT9842F1Z8 • <strong>State Code:</strong> 33 (Tamil Nadu)<br>Phone: ${h.phone} • Email: ${h.email || ('reservations@' + (h.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')) + '.com')}`;
  }

  const gstSign = document.getElementById('gstSignatoryHotel');
  if (gstSign) gstSign.textContent = `For ${h.name}`;

  const gstDining = document.getElementById('gstDiningItem');
  if (gstDining) gstDining.textContent = `${h.shortName || h.name} In-House Dining - Dinner & Breakfast Service`;

  const gstTransfer = document.getElementById('gstTransferItem');
  if (gstTransfer) gstTransfer.textContent = `${h.city} Station / Airport Chauffeur Transfer`;

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
  const waRec = document.getElementById('waReceptionTag');

  const hName = window.currentHotel.name;
  const hShort = window.currentHotel.shortName || hName.split(' ')[0].toUpperCase();
  const hCity = window.currentHotel.city;
  const hSlug = hName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  if (header) header.textContent = `WhatsApp message to: ${guestName}`;
  if (waRec) waRec.textContent = `${hName} Reception Desk`;

  let msg = '';
  if (type === 'welcome') {
    msg = `Dear <strong>${guestName}</strong>, welcome to <strong>${hName}</strong>, ${hCity}! 🌟 Your AC room key is ready. High-speed Wi-Fi network: <em>${hShort}_Guest</em> (Passcode: <em>Welcome2026</em>). For in-room dining, dial 9. Have a wonderful stay!`;
  } else if (type === 'promo') {
    msg = `Hello <strong>${guestName}</strong>! As a valued guest of <strong>${hName}</strong>, enjoy an exclusive <strong>15% Direct Discount</strong> on your next visit to ${hCity} with code <strong>DIRECTVIP15</strong> on our official booking engine: https://ramesh-iitkgp.github.io/twin-star-hotel/?name=${encodeURIComponent(hName)}&city=${encodeURIComponent(hCity)}`;
  } else if (type === 'review') {
    msg = `Dear <strong>${guestName}</strong>, thank you for staying at <strong>${hName}</strong>, ${hCity}! We hope you enjoyed your time with us. Could you take 30 seconds to share your experience on Google? It means the world to our team: https://g.page/r/${hSlug}-review/`;
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

  const c3In = document.getElementById('c3CheckIn');
  const c3Out = document.getElementById('c3CheckOut');
  if (c3In) c3In.value = inStr;
  if (c3Out) c3Out.value = outStr;

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

  const sumHotel = document.getElementById('summaryHotelName');
  if (sumHotel) sumHotel.textContent = window.currentHotel.name;
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
  const name = h.name || 'Grand Star Luxury Resort & Suites';
  const city = h.city || 'Chennai';
  const phone = h.phone || '+91 98404 60459';
  const phoneDigits = h.phoneDigits || phone.replace(/\D/g, '');
  const shortName = h.shortName || name.split(' ')[0].toUpperCase();
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const email = h.email || `reservations@${slug}.com`;
  const address = h.address || `Central Road, ${city}`;

  // 1. Top bar & Unified Mode Switcher
  const platTitle = document.getElementById('platformHotelTitle');
  if (platTitle) platTitle.textContent = `${name} • ${city}`;

  const opsTitle = document.getElementById('opsHotelTitle');
  if (opsTitle) opsTitle.textContent = `${name} — Front Desk Operations`;

  const opsCity = document.getElementById('opsCityTag');
  if (opsCity) opsCity.textContent = city;

  const opsHeaderTag = document.getElementById('opsHeaderPropertyTag');
  if (opsHeaderTag) opsHeaderTag.textContent = `HOTEL PROPERTY MANAGEMENT SYSTEM • ${city.toUpperCase()}`;

  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = `${name} | Official Hotel & Resort Website • ${city}`;

  const leadHotelName = document.getElementById('leadHotelName');
  if (leadHotelName) leadHotelName.textContent = `${name} Management`;

  // 2. Header & Branding
  const hotelHeaderName = document.getElementById('hotelHeaderName');
  if (hotelHeaderName) hotelHeaderName.textContent = shortName;

  const headerCity = document.getElementById('headerCity');
  if (headerCity) headerCity.textContent = city.toUpperCase();

  const hotelHeaderSubtitle = document.getElementById('hotelHeaderSubtitle');
  if (hotelHeaderSubtitle) hotelHeaderSubtitle.innerHTML = `RESORT &amp; LUXURY SUITES • <span>${city.toUpperCase()}</span>`;

  const headerPhoneText = document.getElementById('headerPhoneText');
  const headerPhoneBtn = document.getElementById('headerPhoneBtn');
  if (headerPhoneText) headerPhoneText.textContent = phone;
  if (headerPhoneBtn) headerPhoneBtn.href = `tel:${phoneDigits}`;

  // 3. Hero Section (Fresh Modern 3-Star & Budget/Boutique Design)
  const heroMainTitle = document.getElementById('heroMainTitle');
  if (heroMainTitle) {
    heroMainTitle.innerHTML = `<span class="block-light">Fresh, Clean &amp; Comfortable Stays in ${city} at</span><span class="block-accent" id="heroCityAccent">${name}</span>`;
  }
  const heroCityAccent = document.getElementById('heroCityAccent');
  if (heroCityAccent) heroCityAccent.textContent = name;

  const heroHotelNameInline = document.getElementById('heroHotelNameInline');
  if (heroHotelNameInline) heroHotelNameInline.textContent = name;

  const heroSubtitleText = document.getElementById('heroSubtitleText');
  if (heroSubtitleText) {
    heroSubtitleText.innerHTML = `Welcome to <strong>${name}</strong>, ${city}. Spotless air-conditioned rooms, free high-speed Wi-Fi, 24/7 hot water, central transit connectivity, and guaranteed best direct rates with zero OTA middleman commission.`;
  }

  const heroBadgeText = document.getElementById('heroBadgeText');
  if (heroBadgeText) heroBadgeText.textContent = `Official Direct Booking Portal • Verified Hotel in ${city}`;

  const heroImg = document.getElementById('heroImage');
  if (heroImg && h.heroImage) {
    heroImg.src = h.heroImage;
  } else if (heroImg) {
    heroImg.src = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85';
  }

  // Concept 2 Hero Personalization
  const c2CityTag = document.getElementById('c2CityTag');
  if (c2CityTag) c2CityTag.textContent = city;

  const c2CityTitle = document.getElementById('c2CityTitle');
  if (c2CityTitle) c2CityTitle.textContent = city;

  const c2HotelNameInline = document.getElementById('c2HotelNameInline');
  if (c2HotelNameInline) c2HotelNameInline.textContent = name;

  // Concept 3 (Ginger Lean Luxe) Hero Personalization
  const c3CityTitle = document.getElementById('c3CityTitle');
  if (c3CityTitle) c3CityTitle.textContent = city;

  const c3HotelTitle = document.getElementById('c3HotelTitle');
  if (c3HotelTitle) c3HotelTitle.textContent = name;

  const c3BarDestination = document.getElementById('c3BarDestination');
  if (c3BarDestination) c3BarDestination.textContent = `${city} • ${name}`;

  const c3HeroTagline = document.getElementById('c3HeroTagline');
  if (c3HeroTagline) {
    c3HeroTagline.textContent = `Experience modern hospitality designed for smart travelers at ${name}, ${city}. Spotless AC suites, complimentary high-speed Wi-Fi, 24/7 hot water, delicious in-house dining, and guaranteed 0% commission direct rates.`;
  }

  const c3HeroImg = document.getElementById('c3HeroImg');
  if (c3HeroImg && h.heroImage) {
    c3HeroImg.src = h.heroImage;
  }

  // 4. Booking Quote Summaries (Modal & 0% Engine)
  const summaryHotelName = document.getElementById('summaryHotelName');
  if (summaryHotelName) summaryHotelName.textContent = name;

  const engineSummaryHotelName = document.getElementById('engineSummaryHotelName');
  if (engineSummaryHotelName) engineSummaryHotelName.textContent = name;

  // 5. Dining Section
  const diningSection = document.getElementById('dining');
  if (diningSection) {
    const diningTitle = diningSection.querySelector('.section-title');
    if (diningTitle) diningTitle.textContent = `${name} Dining & In-House Café`;

    const diningDesc = diningSection.querySelector('.section-desc');
    if (diningDesc) diningDesc.textContent = `From piping hot breakfast buffets to chef's signature multi-cuisine dinners and 24/7 in-room dining at ${name}, ${city}.`;

    const diningImg = diningSection.querySelector('img');
    if (diningImg) diningImg.alt = `Dining at ${name}`;
  }

  // 6. Location & Contact Section
  const locSection = document.getElementById('location');
  if (locSection) {
    const locTitle = locSection.querySelector('.section-title');
    if (locTitle) locTitle.textContent = `Prime Connectivity in ${city}`;

    const locDesc = document.getElementById('locationDescText');
    if (locDesc) locDesc.textContent = `Centrally located in ${city}, offering peaceful surroundings with effortless reach to key business, transit, and cultural destinations.`;

    const landmarks = locSection.querySelectorAll('.landmark-item span');
    if (landmarks.length >= 4) {
      landmarks[0].innerHTML = `<strong>${city} City Center &amp; Shopping:</strong> 5 mins drive`;
      landmarks[1].innerHTML = `<strong>Local Cultural &amp; Heritage Sites:</strong> 10 mins drive`;
      landmarks[2].innerHTML = `<strong>${city} Main Railway Junction:</strong> 15 mins drive`;
      landmarks[3].innerHTML = `<strong>${city} Airport &amp; Transit Hub:</strong> 25 mins drive`;
    }
  }

  const hotelFullAddressName = document.getElementById('hotelFullAddressName');
  if (hotelFullAddressName) hotelFullAddressName.textContent = name;

  const hotelFullAddress = document.getElementById('hotelFullAddress');
  if (hotelFullAddress) hotelFullAddress.textContent = address;

  const footerPhone = document.getElementById('footerPhone');
  if (footerPhone) {
    footerPhone.href = `tel:${phoneDigits}`;
    footerPhone.innerHTML = `<i data-lucide="phone"></i> ${phone}`;
  }

  const footerEmail = document.getElementById('footerEmail');
  if (footerEmail) {
    footerEmail.href = `mailto:${email}`;
    footerEmail.innerHTML = `<i data-lucide="mail"></i> ${email}`;
  }

  // 7. Footer
  const footerHotelName = document.getElementById('footerHotelName');
  if (footerHotelName) footerHotelName.textContent = shortName;

  const copyHotelName = document.getElementById('copyHotelName');
  if (copyHotelName) copyHotelName.textContent = name;

  const footerSubtitle = document.querySelector('.footer-logo .hotel-subtitle');
  if (footerSubtitle) footerSubtitle.textContent = `HOTEL & SUITES • 0% COMMISSION DIRECT ENGINE • ${city.toUpperCase()}`;

  // 8. Booking Voucher Modal
  const voucherHotelTitle = document.getElementById('voucherHotelTitle');
  if (voucherHotelTitle) voucherHotelTitle.textContent = name;

  // 9. GST Tax Invoice Modal Defaults
  const gstHotelName = document.getElementById('gstHotelName');
  if (gstHotelName) gstHotelName.textContent = name;

  const gstAddr = document.getElementById('gstAddressLine');
  if (gstAddr) {
    gstAddr.innerHTML = `${address}<br><strong>GSTIN:</strong> 33AAACT9842F1Z8 • <strong>State Code:</strong> 33 (Tamil Nadu)<br>Phone: ${phone} • Email: ${email}`;
  }

  const gstSign = document.getElementById('gstSignatoryHotel');
  if (gstSign) gstSign.textContent = `For ${name}`;

  const gstDining = document.getElementById('gstDiningItem');
  if (gstDining) gstDining.textContent = `${shortName} In-House Dining - Dinner & Breakfast Service`;

  const gstTransfer = document.getElementById('gstTransferItem');
  if (gstTransfer) gstTransfer.textContent = `${city} Station / Airport Chauffeur Transfer`;

  const waRec = document.getElementById('waReceptionTag');
  if (waRec) waRec.textContent = `${name} Reception Desk`;

  // 10. Reviews section location tags & text
  const reviewCityTags = document.querySelectorAll('.reviewer-meta span');
  reviewCityTags.forEach((tag, idx) => {
    if (idx === 0) tag.textContent = `${city} • Family Stay`;
    if (idx === 1) tag.textContent = `${city} • Business Travel`;
    if (idx === 2) tag.textContent = `${city} • Holiday Stay`;
  });

  const reviewTexts = document.querySelectorAll('.review-card .review-text');
  if (reviewTexts.length >= 3) {
    reviewTexts[0].textContent = `Booking direct through their official website saved us ₹600 compared to Treebo & MakeMyTrip. Centrally located in ${city} with easy access to main transit and key sights. Spotless rooms and polite front desk staff.`;
    reviewTexts[1].textContent = `The Maple Deluxe room was spacious with parquet flooring and great AC. Authentic ${city} filter coffee and hot breakfast buffet. Direct booking gave us complimentary 12 PM check-in without hassle.`;
    reviewTexts[2].textContent = `Quiet residential surroundings in ${city} with effortless access to business centers and the airport. The in-house ${shortName} dining served great food and room service was prompt.`;
  }

  // 11. Personalize mock guest folios in memory
  if (window.guestFolios) {
    Object.values(window.guestFolios).forEach(folio => {
      if (folio.charges) {
        folio.charges.forEach(c => {
          if (c.desc) {
            c.desc = c.desc.replace(/Chennai Airport/gi, `${city} Airport`);
            c.desc = c.desc.replace(/The Palm Bistro & Lounge/gi, `${shortName} Bistro & Lounge`);
            c.desc = c.desc.replace(/The Palm Bistro/gi, `${shortName} Bistro`);
          }
        });
      }
    });
  }

  // 12. Run universal text-node replacement sweep
  deepReplaceHotelPlaceholders(name, city, shortName, phone, email, address);

  // Re-generate Lucide icons if any were replaced
  if (window.lucide) window.lucide.createIcons();
}

/**
 * Universal text-node walker to replace any residual placeholders
 * across the DOM tree and HTML attributes.
 */
function deepReplaceHotelPlaceholders(name, city, shortName, phone, email, address) {
  if (!name && !city) return;

  const walkTextNodes = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let txt = node.nodeValue;
      if (!txt || !txt.trim()) return;

      // Replace Hotel Name variants
      if (name) {
        txt = txt.replace(/Twin\s*Star\s*Hotel\s*(&|and)?\s*Suites/gi, name);
        txt = txt.replace(/Twin\s*Star\s*Hotel/gi, name);
        txt = txt.replace(/Twin\s*Star\s*Bistro/gi, `${name} Dining`);
        txt = txt.replace(/Twin\s*Star/gi, name);
        txt = txt.replace(/Grand\s*Star\s*Resort\s*(&|and)?\s*(Luxury\s*)?Suites/gi, name);
        txt = txt.replace(/Grand\s*Star\s*Resort/gi, name);
        txt = txt.replace(/Grand\s*Star/gi, name);
        txt = txt.replace(/TWIN\s*STAR/g, (shortName || name).toUpperCase());
        txt = txt.replace(/GRAND\s*STAR/g, (shortName || name).toUpperCase());
      }

      // Replace City variants (if city is provided and not Chennai)
      if (city) {
        txt = txt.replace(/South\s*Chennai/gi, city);
        txt = txt.replace(/Abiramapuram,\s*Chennai/gi, city);
        txt = txt.replace(/Abiramapuram/gi, city);
        txt = txt.replace(/Madras\s*ENT\s*Hospital/gi, `${city} Central Landmark`);
        txt = txt.replace(/Mylapore\s*Kapaleeshwarar\s*Temple/gi, `${city} Cultural Sites`);
        txt = txt.replace(/RA\s*Puram/gi, `${city} Central`);
        txt = txt.replace(/Chennai\s*International\s*Airport\s*\([^)]*\)/gi, `${city} Airport & Transit`);
        txt = txt.replace(/Chennai\s*Airport\s*\([^)]*\)/gi, `${city} Airport`);
        txt = txt.replace(/Chennai\s*Airport/gi, `${city} Airport`);
        txt = txt.replace(/Chennai\s*filter\s*coffee/gi, 'freshly brewed local filter coffee');
        txt = txt.replace(/Chennai\s*•\s*Family\s*Stay/gi, `${city} • Verified Guest Stay`);
        if (city.toLowerCase() !== 'chennai') {
          txt = txt.replace(/\bChennai\b/g, city);
          txt = txt.replace(/\bCHENNAI\b/g, city.toUpperCase());
        }
      }

      if (node.nodeValue !== txt) {
        node.nodeValue = txt;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;

      // Check placeholder and title attributes
      ['placeholder', 'title', 'alt'].forEach(attr => {
        if (node.hasAttribute(attr)) {
          let val = node.getAttribute(attr);
          if (name) {
            val = val.replace(/Twin\s*Star\s*Hotel\s*(&|and)?\s*Suites/gi, name);
            val = val.replace(/Twin\s*Star/gi, name);
            val = val.replace(/Grand\s*Star/gi, name);
          }
          if (city && city.toLowerCase() !== 'chennai') {
            val = val.replace(/Chennai/gi, city);
          }
          node.setAttribute(attr, val);
        }
      });

      for (let child of node.childNodes) {
        walkTextNodes(child);
      }
    }
  };

  // Run on head (meta tags)
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = `Experience refined accommodations at ${name}, ${city}. Direct booking engine with 0% commission, complimentary breakfast, best rate guarantee, and instant WhatsApp booking.`;
  }
  const ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.content = `${name} • Official Hotel Preview`;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = `Direct booking engine, luxurious AC suites, in-house dining, and 0% OTA commission for ${name}, ${city}.`;

  // Run on body
  walkTextNodes(document.body);
}

// ==========================================================================
// Hero Concept Switcher (Concept 1: Split Hero vs Concept 2: Room Showcase vs Concept 3: Ginger Lean Luxe)
// ==========================================================================
window.switchHeroConcept = function(conceptId) {
  const c1 = document.getElementById('heroConcept1');
  const c2 = document.getElementById('heroConcept2');
  const c3 = document.getElementById('heroConcept3');
  const btn1 = document.getElementById('btnConcept1');
  const btn2 = document.getElementById('btnConcept2');
  const btn3 = document.getElementById('btnConcept3');

  if (conceptId === '1' || conceptId === 'c1') {
    if (c1) c1.style.display = 'block';
    if (c2) c2.style.display = 'none';
    if (c3) c3.style.display = 'none';
    if (btn1) btn1.classList.add('active');
    if (btn2) btn2.classList.remove('active');
    if (btn3) btn3.classList.remove('active');
  } else if (conceptId === '2' || conceptId === 'c2') {
    if (c1) c1.style.display = 'none';
    if (c2) c2.style.display = 'block';
    if (c3) c3.style.display = 'none';
    if (btn1) btn1.classList.remove('active');
    if (btn2) btn2.classList.add('active');
    if (btn3) btn3.classList.remove('active');
  } else {
    // Concept 3 (Ginger Lean Luxe)
    if (c1) c1.style.display = 'none';
    if (c2) c2.style.display = 'none';
    if (c3) c3.style.display = 'block';
    if (btn1) btn1.classList.remove('active');
    if (btn2) btn2.classList.remove('active');
    if (btn3) btn3.classList.add('active');
  }

  // Update URL without reload for easy bookmarking and sharing
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('concept', conceptId);
    window.history.replaceState({}, '', url.toString());
  } catch (e) {}

  if (window.lucide) window.lucide.createIcons();
};

window.syncC3DatesToEngine = function() {
  const cin = document.getElementById('c3CheckIn');
  const cout = document.getElementById('c3CheckOut');
  const engCin = document.getElementById('engineViewCheckIn');
  const engCout = document.getElementById('engineViewCheckOut');
  if (cin && engCin && cin.value) engCin.value = cin.value;
  if (cout && engCout && cout.value) engCout.value = cout.value;
  if (typeof calculateEngineStay === 'function') calculateEngineStay();
};

window.toggleHeroVideo = function() {
  const vid = document.getElementById('c3HeroVideo');
  const txt = document.getElementById('videoToggleText');
  const dot = document.querySelector('.video-indicator-dot');
  if (!vid) return;

  if (vid.paused) {
    vid.play();
    if (txt) txt.textContent = 'Live Hotel Ambiance';
    if (dot) dot.style.display = 'inline-block';
  } else {
    vid.pause();
    if (txt) txt.textContent = 'Video Paused';
    if (dot) dot.style.display = 'none';
  }
};

// Concept 2 Room Interactive Switcher
const C2_ROOM_DATA = {
  'oak-standard': {
    title: 'Oak (Standard AC Room)',
    desc: 'Spotless sanitization, crisp white linens, high-speed fiber Wi-Fi, chilled AC, and 24/7 power backup.',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    direct: '₹2,400',
    ota: '₹3,200',
    save: '₹800',
    needlePoints: '77,80 83,80 115,48'
  },
  'maple-deluxe': {
    title: 'Maple (Deluxe Suite)',
    desc: 'Spacious luxury living area, king size spring mattress, smart 4K TV, work desk, and complimentary hot breakfast.',
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
    direct: '₹3,800',
    ota: '₹4,900',
    save: '₹1,100',
    needlePoints: '77,80 83,80 128,42'
  },
  'mahogany-executive': {
    title: 'Mahogany (Executive Suite)',
    desc: 'Panoramic private balcony, dual AC zones, deep bathtub & jacuzzi, mini-bar, and VIP front desk priority service.',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    direct: '₹5,500',
    ota: '₹6,800',
    save: '₹1,300',
    needlePoints: '77,80 83,80 138,55'
  }
};

window.selectC2Room = function(roomId) {
  const data = C2_ROOM_DATA[roomId] || C2_ROOM_DATA['oak-standard'];

  // Update active pill button
  const btnOak = document.getElementById('c2BtnOak');
  const btnMaple = document.getElementById('c2BtnMaple');
  const btnMahogany = document.getElementById('c2BtnMahogany');

  if (btnOak) btnOak.classList.toggle('active', roomId === 'oak-standard');
  if (btnMaple) btnMaple.classList.toggle('active', roomId === 'maple-deluxe');
  if (btnMahogany) btnMahogany.classList.toggle('active', roomId === 'mahogany-executive');

  // Update room details
  const img = document.getElementById('c2RoomImg');
  const title = document.getElementById('c2RoomTitle');
  const desc = document.getElementById('c2RoomDesc');
  const price = document.getElementById('c2RoomPrice');

  if (img) img.src = data.img;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.desc;
  if (price) price.innerHTML = `${data.direct} <small>/ night</small>`;

  // Update savings meter & breakdown
  const savingsVal = document.getElementById('c2SavingsVal');
  const directComp = document.getElementById('c2DirectComp');
  const otaComp = document.getElementById('c2OtaComp');
  const saveComp = document.getElementById('c2SaveComp');

  if (savingsVal) savingsVal.textContent = `You Save ${data.save}`;
  if (directComp) directComp.textContent = data.direct;
  if (otaComp) otaComp.textContent = data.ota;
  if (saveComp) saveComp.textContent = `✓ ${data.save}/night`;

  // Update needle in gauge SVG
  const gaugeSvg = document.querySelector('.gauge-svg polygon');
  if (gaugeSvg) {
    gaugeSvg.setAttribute('points', data.needlePoints);
  }

  if (window.lucide) window.lucide.createIcons();
};
