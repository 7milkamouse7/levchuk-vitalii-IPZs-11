document.addEventListener('DOMContentLoaded', function () {
   
    const body = document.getElementById('body');
    const contactFormButton = this.getElementById('contactFormButton');
    const contactFormButtonClose = this.getElementById('contactFormButtonClose');
    const contactForm = this.getElementById('contactForm');
    const formOverlay = this.getElementById('formOverlay');
  
   
    contactFormButton.addEventListener('click', function () {
        contactForm.classList.toggle('show');
        formOverlay.classList.toggle('show');
        body.classList.toggle('fixed');
      });
    contactFormButtonClose.addEventListener('click', function () {
        contactForm.classList.remove('show');
        formOverlay.classList.remove('show');
        body.classList.remove('fixed');
      });
  });