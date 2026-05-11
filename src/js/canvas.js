// Canvas animation for hero background
export default function initCanvasAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let points = [];

  function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    points = [];
    for (let i = 0; i < 40; i += 1) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains('dark');
    ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.1)' : 'rgba(217, 119, 6, 0.05)';
    ctx.lineWidth = 1;

    points = points.map((point) => {
      const nextPoint = { ...point };
      nextPoint.x += nextPoint.vx;
      nextPoint.y += nextPoint.vy;

      if (nextPoint.x < 0 || nextPoint.x > canvas.width) nextPoint.vx *= -1;
      if (nextPoint.y < 0 || nextPoint.y > canvas.height) nextPoint.vy *= -1;

      return nextPoint;
    });

    points.forEach((point, index) => {
      points.slice(index + 1).forEach((otherPoint) => {
        const dist = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
        if (dist < 200) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(otherPoint.x, otherPoint.y);
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
