/* discount.js — ProPlayHub discount & pricing helpers */

const DISCOUNT_CODES = {
  'PROMO15': { pct: 15, label: 'Promo 15%' },
  'GAMING10': { pct: 10, label: 'Gaming 10%' }
};

const APP_DISCOUNT_PCT = 15; // automatic app discount

const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    price: 9.99,
    features: ['1 platform', '10 GB cloud storage', 'Standard support', 'Basic tournaments']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 19.99,
    features: ['3 platforms', '50 GB cloud storage', 'Priority support', 'All tournaments', 'Monthly deals'],
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 34.99,
    features: ['Unlimited platforms', '200 GB cloud storage', '24/7 VIP support', 'Exclusive tournaments', 'Personalised deals', 'Early access']
  }
];

const ADDONS = [
  { id: 'extra_storage', label: 'Extra 100 GB Storage', price: 2.99 },
  { id: 'multi_device',  label: 'Multi-Device (x5)',    price: 1.99 },
  { id: 'coach_session', label: 'Monthly Coach Session', price: 4.99 },
  { id: 'game_pass',    label: 'Monthly Game Pass',     price: 3.49 }
];

function applyCode(code) {
  const upper = (code || '').trim().toUpperCase();
  return DISCOUNT_CODES[upper] || null;
}

function calcTotal(basePrice, addonsSelected, promoCode) {
  const addonsTotal = addonsSelected.reduce((sum, id) => {
    const a = ADDONS.find(x => x.id === id);
    return sum + (a ? a.price : 0);
  }, 0);

  const subtotal = basePrice + addonsTotal;
  const appDiscount = +(subtotal * APP_DISCOUNT_PCT / 100).toFixed(2);
  const afterApp = +(subtotal - appDiscount).toFixed(2);

  let promoDiscount = 0;
  let promoLabel = '';
  if (promoCode) {
    const found = applyCode(promoCode);
    if (found) {
      promoDiscount = +(afterApp * found.pct / 100).toFixed(2);
      promoLabel = found.label;
    }
  }

  const total = +(afterApp - promoDiscount).toFixed(2);
  return { subtotal, appDiscount, afterApp, promoDiscount, promoLabel, total };
}

function fmt(n) {
  return '£' + Number(n).toFixed(2);
}
