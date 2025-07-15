const emojis = ['∞', '∞', '∞','💗'];

function createFloatingEmoji() {
  const emoji = document.createElement('div');
  emoji.className = 'floating-emoji';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.top = Math.random() * 100 + 'vh';
  emoji.style.animationDuration = (5 + Math.random() * 4) + 's';
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 8000);
}

setInterval(createFloatingEmoji, 900);
for (let i = 0; i < 12; i++) createFloatingEmoji(); 