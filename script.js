// Header muda estilo ao rolar
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll);

// Menu mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navScrim = document.getElementById('navScrim');

const setNavOpen = open => {
  mainNav.classList.toggle('is-open', open);
  navToggle.classList.toggle('is-active', open);
  navScrim.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
};

navToggle.addEventListener('click', () => setNavOpen(!mainNav.classList.contains('is-open')));
navScrim.addEventListener('click', () => setNavOpen(false));
mainNav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => setNavOpen(false))
);

// Tabs do cardápio
const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-grid');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const target = tab.dataset.tab;
    panels.forEach(p => { p.hidden = p.dataset.panel !== target; });
  });
});

// Formulário de reserva (sem backend — apenas confirmação visual)
const form = document.getElementById('reserveForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  note.textContent = `Obrigado, ${nome || 'visitante'}! Sua reserva foi recebida — em breve entraremos em contato.`;
  form.reset();
});
