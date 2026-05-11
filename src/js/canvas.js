// Canvas animation for hero background
export function initCanvasAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let points = [];

  function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    points = [];
    for(let i = 0; i < 40; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains('dark');
    ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.1)' : 'rgba(217, 119, 6, 0.05)';
    ctx.lineWidth = 1;

    points.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

      points.slice(i + 1).forEach(p2 => {
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if(dist < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(animateCanvas);
  }

  window.addEventListener('resize', initCanvas);
  initCanvas();
  animateCanvas();
}
