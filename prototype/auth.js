/* auth.js — ProPlayHub authentication helpers */

const AUTH_KEY = 'pph_user';
const SESSION_KEY = 'pph_session';

function register(data) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
}

function login(username, password) {
  const user = getUser();
  if (!user) return { ok: false, msg: 'Account not found. Please register first.' };
  if (user.username !== username) return { ok: false, msg: 'Username not found.' };
  if (user.password !== password) return { ok: false, msg: 'Incorrect password.' };
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username, loggedIn: true }));
  return { ok: true };
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'index.html';
}

function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}

function getUser() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null; }
}

function isLoggedIn() {
  const s = getSession();
  return s && s.loggedIn === true;
}

function requireAuth() {
  if (!isLoggedIn()) window.location.href = 'login.html';
}

function requireGuest() {
  if (isLoggedIn()) window.location.href = 'account.html';
}
