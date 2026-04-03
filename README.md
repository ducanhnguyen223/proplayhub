<div align="center">

# 🎮 ProPlayHub

### Level Up Your Game

A gaming subscription platform prototype — browse plans, manage your profile, and unlock exclusive deals.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=digitalocean)](https://proplayhub-wjvy8.ondigitalocean.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![DigitalOcean](https://img.shields.io/badge/Deployed%20on-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white)

</div>

---

## About

ProPlayHub is a frontend prototype for a gaming subscription service. Users can register an account, choose from three subscription tiers, add optional extras, apply discount codes, and complete a checkout — all without a backend.

State is managed entirely in the browser via `localStorage` and `sessionStorage`.

---

## Features

- **Authentication** — register, login, logout with client-side session management
- **Subscription Plans** — Starter / Pro / Elite tiers with live pricing
- **Add-ons** — optional extras (extra storage, multi-device, coach session, game pass)
- **Checkout Flow** — order summary, automatic 15% app discount, promo code support
- **Payment Form** — VISA card validation (16-digit, CVV, expiry)
- **Personalised Deals** — curated deals based on user's selected gaming platform
- **CSR Dashboard** — internal customer service representative view

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Landing | `index.html` | Hero, features overview, pricing teaser |
| Register | `register.html` | Account creation with form validation |
| Confirmation | `confirmation.html` | Registration success + simulated email |
| Login | `login.html` | Login form with session guard |
| Account | `account.html` | View and edit user profile |
| Packages | `packages.html` | Browse plans and add-ons with live pricing |
| Checkout | `checkout.html` | Order summary with discount code input |
| Payment | `payment.html` | VISA card form with validation |
| Order Confirm | `order-confirm.html` | Receipt page, clears session |
| Deals | `deals.html` | Platform-personalised game deals |
| CSR | `csr.html` | Customer service portal |
| CSR Dashboard | `csr-dashboard.html` | CSR admin dashboard |

---

## Getting Started

No build step required.

```bash
git clone https://github.com/ducanhnguyen223/proplayhub.git
cd proplayhub/prototype
open index.html   # or just drag into your browser
```

> **Demo accounts:** Register any account on the site — credentials are saved in your browser's `localStorage`.

---

## Discount Codes

| Code | Discount |
|------|----------|
| `PROMO15` | 15% off |
| `GAMING10` | 10% off |

An automatic **15% app discount** is applied at checkout before any promo code.

---

<div align="center">

Built as part of COMP1807 Agile & Scrum coursework.

</div>
