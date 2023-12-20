
  document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burgerButton');
    const burgerButtonClose = document.getElementById('burgerButtonClose');
    const menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function () {
      menu.classList.toggle('show');
      body.classList.toggle('fixed');
     
    });
    burgerButtonClose.addEventListener('click', function () {
        menu.classList.remove('show');
        body.classList.remove('fixed');
      });
  });
 
  document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.buttons__selector');
    const cards = document.querySelectorAll('.cards__item');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('data-atribute');
  
        // Додаємо або видаляємо клас 'hide' в залежності від категорії
        cards.forEach(card => {
          if (category === 'All' || card.classList.contains(category)) {
            card.classList.remove('card-hide');
     
          } else {
            card.classList.add('card-hide');
          }
        });
      });
    });
  });