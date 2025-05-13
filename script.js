document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      navLinks.forEach(l => l.classList.remove('active'));
      
      this.classList.add('active');
    });
  });

  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      sidebarLinks.forEach(l => l.classList.remove('active'));
      
      this.classList.add('active');
    });
  });

  const cartButton = document.querySelector('.cart-button');
  if (cartButton) {
    cartButton.addEventListener('click', function() {
      alert('Carrinho de compras clicado!');
    });
  }

  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        alert('Pesquisando por: ' + this.value);
      }
    });
  }
});