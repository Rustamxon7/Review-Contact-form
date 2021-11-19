const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const msg = document.querySelector('.form-group-textarea');

function validationEmail(e) {
  if (email.value !== email.value.toLowerCase()) {
    msg.style.display = 'block';
    e.preventDefault();
  }
}

form.addEventListener('submit', validationEmail);
