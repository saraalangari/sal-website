// Add some extra floating hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'fixed';
  heart.style.fontSize = '1.5rem';
  heart.style.color = '#ff69b4';
  heart.style.opacity = '0.6';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '-1';
  
  // Random position
  heart.style.left = Math.random() * 100 + '%';
  heart.style.top = Math.random() * 100 + '%';
  
  // Animation
  heart.style.animation = `float ${3 + Math.random() * 3}s ease-in-out infinite`;
  heart.style.animationDelay = Math.random() * 2 + 's';
  
  document.body.appendChild(heart);
  
  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000);

// Add the float animation to the CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(180deg);
    }
  }
`;
document.head.appendChild(style); 

function goToInfinity() {
  window.location.href = 'infinity.html';
}

function goToInfinity2() {
  window.location.href = 'infinity.html';
}