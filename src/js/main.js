// Main entry point
import { initTheme } from './theme.js'
import { initScrollReveal } from './animations.js'
import { initCanvasAnimation } from './canvas.js'
import { initModals } from './modal.js'
import { smoothScroll, log } from './utils.js'
import '../css/styles.css'

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  log('Initializing application...')
  
  initTheme()
  initScrollReveal()
  initCanvasAnimation()
  initModals()
  smoothScroll()
  
  log('Application initialized successfully')
})
