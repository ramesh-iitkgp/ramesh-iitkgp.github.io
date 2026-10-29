/* Presentation hooks run after the existing asynchronous hotel personalization. */
window.refreshFreshDesign = function () {
  const h = window.currentHotel;
  const lead = document.getElementById('leadHotelName');
  if (lead) lead.textContent = h.name;
  const diningTitle = document.querySelector('#dining .section-title');
  if (diningTitle) diningTitle.textContent = 'A good day starts with a great bite.';
  const name = document.getElementById('hotelHeaderName');
  if (name) name.textContent = h.name.replace(/\s*(Resort & Luxury Suites|Luxury Resort & Suites)$/i, '').trim() || h.name;
  const subtitle = document.getElementById('hotelHeaderSubtitle');
  if (subtitle) subtitle.textContent = `YOUR CITY STAY · ${h.city.toUpperCase()}`;
  const title = document.getElementById('c3HotelTitle');
  if (title) title.textContent = h.name;
  const destination = document.getElementById('c3BarDestination');
  if (destination) { destination.textContent = h.city; destination.title = `${h.name}, ${h.city}`; }
  const image = document.getElementById('c3HeroImg');
  if (image && !h.heroImage) image.src = 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2200&q=85';
  const localDate = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const cin = document.getElementById('c3CheckIn');
  const cout = document.getElementById('c3CheckOut');
  if (cin && cout) {
    cin.min = localDate(new Date());
    const next = new Date(`${cin.value}T12:00:00`); next.setDate(next.getDate()+1);
    cout.min = localDate(next);
  }
  document.querySelectorAll('.room-img').forEach(img => { img.loading = 'lazy'; });
};

window.syncC3DatesToEngine = function () {
  const cin = document.getElementById('c3CheckIn');
  const cout = document.getElementById('c3CheckOut');
  if (!cin?.value || !cout) return;
  const next = new Date(`${cin.value}T12:00:00`); next.setDate(next.getDate()+1);
  const minOut = `${next.getFullYear()}-${String(next.getMonth()+1).padStart(2,'0')}-${String(next.getDate()).padStart(2,'0')}`;
  cout.min = minOut;
  if (!cout.value || cout.value <= cin.value) cout.value = minOut;
  ['engineViewCheckIn','heroCheckIn','calcCheckIn'].forEach(id => { const el=document.getElementById(id); if(el) el.value=cin.value; });
  ['engineViewCheckOut','heroCheckOut','calcCheckOut'].forEach(id => { const el=document.getElementById(id); if(el) el.value=cout.value; });
  recalculateEngineView();
  recalculateTotal();
};

window.searchFreshStay = function () {
  const form = document.querySelector('.fresh-booking');
  if (!form.reportValidity()) return;
  syncC3DatesToEngine();
  const guests = Number(document.getElementById('c3GuestSelect').value);
  // The current engine offers one room per quotation; match room capacity to party size.
  switchPlatformMode('engine', guests > 3 ? 'mahogany-executive' : guests > 2 ? 'maple-deluxe' : 'oak-standard');
};
