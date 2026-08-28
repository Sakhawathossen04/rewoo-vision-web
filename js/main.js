const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open', !expanded);
});

document.querySelectorAll('.primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const downloadControl = document.querySelector('.download-control');
const downloadToggle = document.querySelector('.download-toggle');
const downloadMenu = document.querySelector('#app-download-menu');

function closeDownloadMenu() {
  if (!downloadToggle || !downloadMenu || !downloadControl) return;
  downloadToggle.setAttribute('aria-expanded', 'false');
  downloadMenu.hidden = true;
  downloadControl.classList.remove('is-open');
}

downloadToggle?.addEventListener('click', (event) => {
  event.stopPropagation();
  if (!downloadMenu || !downloadControl) return;
  const willOpen = downloadMenu.hidden;
  downloadMenu.hidden = !willOpen;
  downloadToggle.setAttribute('aria-expanded', String(willOpen));
  downloadControl.classList.toggle('is-open', willOpen);
});

downloadMenu?.addEventListener('click', (event) => event.stopPropagation());
document.addEventListener('click', closeDownloadMenu);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDownloadMenu();
    downloadToggle?.focus();
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const commandButtons = document.querySelectorAll('.command-item');
commandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    commandButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});
