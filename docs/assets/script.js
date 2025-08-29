// Mobile drawer toggle + subtle header shadow
const btn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.drawer');
if (btn && drawer){
  btn.addEventListener('click', ()=>drawer.classList.toggle('open'));
}
const nav = document.querySelector('nav');
let last = 0;
window.addEventListener('scroll', ()=>{
  const y = window.scrollY || 0;
  if(!nav) return;
  nav.style.boxShadow = y > 8 ? '0 6px 24px rgba(2,6,23,.08)' : 'none';
  last = y;
});
