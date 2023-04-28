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
      { name: 'taco de carnitas', price: '2,20€' },

    ],
    bebidas: [
      { name: 'Soda', price: '$1.99' },
      { name: 'Agua', price: '$1.49' },
    ],
    postre: [
      { name: 'tarta de chocolate', price: '3€' , tags: ['celiaco']},
      { name: 'tarta de queso con fresa', price: '3€' },
      { name: 'tarta de manzana con dulce de leche', price: '3€' },

    ],
  };
  

  // Seleccionamos los elementos del DOM
  const menuCategories = document.querySelector('.menu-categories');
  const menuContainer = document.querySelector('.menu-items');
  

  // Funcion que crea los botones de las categorias
  function createCategoryButton(category) {
    const categoryBtn = document.createElement('li');
    categoryBtn.textContent = category.replace(/_/g, ' ');
    categoryBtn.dataset.category = category;
  
    categoryBtn.addEventListener('click', function () {
      showCategoryItems(this.dataset.category);
    });
  
    menuCategories.appendChild(categoryBtn);
  }
  

  // Funcion que muestra los items de la categoria seleccionada
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

      addIconsIfTagsExist(item, menuItem); // Llamar a la función para agregar íconos si el ítem tiene etiquetas

  
      menuContainer.appendChild(menuItem);
    });
  
    updateSelectedCategory(category);
  }
  
  
  // Funcion que actualiza el boton de la categoria seleccionada
  
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
  


  // Scroll image
  const scrollImageContainer = document.querySelector('.scroll-image-container');
const scrollImage = document.querySelector('.scroll-image');


// Actualizamos la opacidad de la imagen en funcion del scroll
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollImage.style.opacity = 1 - scrollTop / scrollImageContainer.offsetHeight;
});


// funcion añadir etiqueta vegana, celiaca .......

function getSvgPathForTag(tag) {
  switch (tag) {
    case 'vegetariano':
      return '<svg> ... </svg>'; // Reemplaza con el código SVG o la ruta al archivo SVG para el ícono vegetariano
    case 'celiaco':
      return '<img src="img/alergenos/Gluten.svg" alt="con gluten"/>'; // Reemplaza con el código SVG o la ruta al archivo SVG para el ícono sin gluten
    case 'sin_lactosa':
      return '<svg> ... </svg>'; // Reemplaza con el código SVG o la ruta al archivo SVG para el ícono sin lactosa
    // Agrega más casos según las etiquetas que necesites
    default:
      return '';
  }
}



function addIconsIfTagsExist(item, menuItem) {
  if (item.tags) {
    // Crear contenedor de etiquetas
    const menuItemTags = document.createElement('div');
    menuItemTags.classList.add('menu-item-tags');

    // Crear y agregar los íconos SVG para cada etiqueta
    item.tags.forEach((tag) => {
      const tagIcon = document.createElement('div');
      tagIcon.classList.add('tag-icon');
      
      const svgPath = getSvgPathForTag(tag);
      tagIcon.innerHTML = svgPath;

      menuItemTags.appendChild(tagIcon);
    });

    // Añadir contenedor de etiquetas
    menuItem.appendChild(menuItemTags);
  }
}
