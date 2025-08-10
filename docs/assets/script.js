
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();

  // GA4 click tracking (will no-op if gtag not present)
  const track = (name, params={}) => {
    try { gtag && gtag('event', name, params); } catch(e){}
  };

  document.querySelectorAll('[data-cta]').forEach(el => {
    el.addEventListener('click', () => track('cta_click', { id: el.dataset.cta }));
  });

  document.querySelectorAll('a').forEach(a => {
    if (a.href && a.href.startsWith('mailto:')){
      a.addEventListener('click', () => track('contact_email_click'));
    }
    if (a.href && a.href.includes('linkedin.com')){
      a.addEventListener('click', () => track('linkedin_click'));
    }
    if (a.href && a.href.includes('github.com')){
      a.addEventListener('click', () => track('github_click'));
    }
  });
});
