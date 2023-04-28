const menuItems = {
    tapas: [
      { name: '', price: 'tapa/racion' },
      { name: 'Ensaladilla Rusa', price: '2,50€/4,50€' },
      { name: 'Chorizo criollo', price: '2,50€' },
      { name: 'Croquetas de jamon', price: '2,50€ / 5€' },
      { name: 'Croquetas de cocido', price: '5€' },
      { name: 'Pimientos del padron', price: ' 5€' },
      { name: 'Provoleta', price: '2,50€ / 4,50€' },
    ],
    especialidades: [
      { name: 'Entraña', price: '9€' },
      { name: 'tira de asado', price: '10,90€' },
      { name: 'bondiola a la cerveza y chimichurri', price: '7,90€' },
      { name: 'secreto', price: '7,90€' },
      { name: 'rosada', price: '8,90€' },
      { name: 'milanesa', price: '10€' },
      { name: 'Lomo bajo', price: '17,00€' },
    ],
    empanadas_argentinas: [

      { name: 'ternera', price: '2,70€' },
      { name: 'cochinita', price: '2,70€' },
      { name: 'tinga de pollo', price: '2,70€' },
      { name: 'jamin y queso', price: '2,70€' },
      { name: 'caprece', price: '2,70€' },
      { name: 'fugazzeta', price: '2,70€' },
      { name: 'verdura y salsa blanca', price: '2,70€' },

    ],
    nuestros_tacos: [
      { name: 'Taco de suadero', price: '2,20€' },
      { name: 'taco de cochinita', price: '2,20€' },
      { name: 'taco de carnitas', price: '2,20€' , tags: ['vegetariano']},

    ],
    bebidas: [
      { name: 'Soda', price: '$1.99' },
      { name: 'Agua', price: '$1.49' },
    ],
    postre: [
      { name: 'tarta de chocolate', price: '3€' },
      { name: 'tarta de queso con fresa', price: '3€' },
      { name: 'tarta de manzana con dulce de leche', price: '3€' },

    ],
  };
  
  const menuCategories = document.querySelector('.menu-categories');
  const menuContainer = document.querySelector('.menu-items');
  
  function createCategoryButton(category) {
    const categoryBtn = document.createElement('li');
    categoryBtn.textContent = category.replace(/_/g, ' ');
    categoryBtn.dataset.category = category;
  
    categoryBtn.addEventListener('click', function () {
      showCategoryItems(this.dataset.category);
    });
  
    menuCategories.appendChild(categoryBtn);
  }
  
  function showCategoryItems(category) {
    menuContainer.innerHTML = '';
  
    menuItems[category].forEach((item) => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
  
      const menuItemName = document.createElement('span');
      menuItemName.textContent = item.name;
  
      const menuItemPrice = document.createElement('span');
      menuItemPrice.textContent = item.price;
  
      menuItem.appendChild(menuItemName);
      menuItem.appendChild(menuItemPrice);
  
      menuContainer.appendChild(menuItem);
    });
  
    updateSelectedCategory(category);
  }
  
  
function updateSelectedCategory(selectedCategory) {
  const categoryButtons = document.querySelectorAll('.menu-categories li');
  categoryButtons.forEach((button) => {
    if (button.dataset.category === selectedCategory) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
}
  
  for (const category in menuItems) {
    createCategoryButton(category);
  }
  
  showCategoryItems('tapas');
  

  const scrollImageContainer = document.querySelector('.scroll-image-container');
const scrollImage = document.querySelector('.scroll-image');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollImage.style.opacity = 1 - scrollTop / scrollImageContainer.offsetHeight;
});