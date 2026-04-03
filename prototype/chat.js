/* =============================================
   ProPlayHub — Live Chat Widget (Stub)
   US-08: Chat widget for all pages
   ============================================= */

(function () {
  'use strict';

  /* ---------- Auto-reply messages ---------- */
  var replies = [
    'Thanks for reaching out! A CSR will be with you shortly. (Simulated \u2014 prototype only)',
    'We appreciate your message! A team member will respond soon. (Simulated \u2014 prototype only)',
    'Got it! Hang tight while we connect you with support. (Simulated \u2014 prototype only)'
  ];

  /* ---------- Build DOM ---------- */
  function buildWidget() {
    /* Floating chat button */
    var btn = document.createElement('button');
    btn.id = 'chat-toggle-btn';
    btn.className = 'chat-fab';
    btn.setAttribute('aria-label', 'Open live chat');
    btn.innerHTML = '\uD83D\uDCAC';
    document.body.appendChild(btn);

    /* Chat panel */
    var panel = document.createElement('div');
    panel.id = 'chat-panel';
    panel.className = 'chat-panel hidden';
    panel.innerHTML =
      '<div class="chat-header">' +
        '<span class="chat-header-title">\uD83D\uDCAC ProPlayHub Support</span>' +
        '<button class="chat-close-btn" aria-label="Close chat">&times;</button>' +
      '</div>' +
      '<div class="chat-messages" id="chat-messages"></div>' +
      '<div class="chat-input-area">' +
        '<input type="text" class="chat-input" id="chat-input" placeholder="Type a message\u2026" autocomplete="off">' +
        '<button class="chat-send-btn" id="chat-send-btn">Send</button>' +
      '</div>';
    document.body.appendChild(panel);

    return { btn: btn, panel: panel };
  }

  /* ---------- Helpers ---------- */
  function addMessage(text, sender) {
    var msgArea = document.getElementById('chat-messages');
    var bubble = document.createElement('div');
    bubble.className = 'chat-msg chat-msg-' + sender;
    bubble.textContent = text;
    msgArea.appendChild(bubble);
    msgArea.scrollTop = msgArea.scrollHeight;
  }

  function showWelcome() {
    var msgArea = document.getElementById('chat-messages');
    if (msgArea.children.length === 0) {
      addMessage('Welcome to ProPlayHub Support! How can we help you today?', 'agent');
    }
  }

  function pickReply() {
    return replies[Math.floor(Math.random() * replies.length)];
  }

  /* ---------- Initialise ---------- */
  function init() {
    var els = buildWidget();
    var btn = els.btn;
    var panel = els.panel;
    var input = document.getElementById('chat-input');
    var sendBtn = document.getElementById('chat-send-btn');

    /* Toggle open */
    btn.addEventListener('click', function () {
      panel.classList.remove('hidden');
      btn.classList.add('hidden');
      showWelcome();
      input.focus();
    });

    /* Close */
    panel.querySelector('.chat-close-btn').addEventListener('click', function () {
      panel.classList.add('hidden');
      btn.classList.remove('hidden');
    });

    /* Send message */
    function sendMessage() {
      var text = input.value.trim();
      if (!text) return;
      addMessage(text, 'user');
      input.value = '';
      input.focus();

      /* Automated reply after 1.5 s */
      setTimeout(function () {
        addMessage(pickReply(), 'agent');
      }, 1500);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  /* Run when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
