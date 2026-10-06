const header = document.querySelector('#header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

window.addEventListener('scroll', () => header?.classList.toggle('is-stuck', window.scrollY > 8));

menuButton?.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.firstChild.textContent = opened ? 'Fermer ' : 'Menu ';
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.firstChild.textContent = 'Menu ';
}));

const form = document.querySelector('[data-contact-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = form.querySelector('[data-form-message]');
  message.textContent = 'Merci. Votre demande a bien été préparée. L’équipe vous recontactera après la mise en ligne du service de messagerie.';
  message.hidden = false;
  form.reset();
});
