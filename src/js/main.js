// Main entry point
import initTheme from './theme';
import initScrollReveal from './animations';
import initCanvasAnimation from './canvas';
import initModals from './modal';
import { smoothScroll, log } from './utils';
import '../css/styles.css';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  log('Initializing application...');

  initTheme();
  initScrollReveal();
  initCanvasAnimation();
  initModals();
  smoothScroll();

  log('Application initialized successfully');
});
