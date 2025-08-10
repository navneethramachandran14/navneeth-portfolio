
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();

  // GA4 click tracking
  const track = (name, params={}) => { try { gtag && gtag('event', name, params); } catch(e){} };

  document.querySelectorAll('[data-cta]').forEach(el => {
    el.addEventListener('click', () => track('cta_click', { id: el.dataset.cta }));
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) { e.preventDefault(); document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});
