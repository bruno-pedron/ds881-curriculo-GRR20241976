// Modal management
export default function initModals() {
  window.openModal = (src) => {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    img.src = src;
    modal.classList.remove('hidden');
    setTimeout(() => img.classList.remove('scale-95'), 10);
    document.body.classList.add('modal-active');
  };

  window.closeModal = () => {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    img.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      img.src = '';
      document.body.classList.remove('modal-active');
    }, 200);
  };

  // Close modal on backdrop click
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeModal();
      }
    });
  }
}
