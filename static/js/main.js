document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createForm');
  const container = document.getElementById('itemsContainer');
  const emptyState = document.getElementById('emptyState');
  const counter = document.getElementById('counter');
  const toast = document.getElementById('toast');

  let totalItems = 0;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de valores
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;

    // Ocultar mensaje de lista vacía
    if (totalItems === 0) {
      emptyState.style.display = 'none';
    }

    // Crear la tarjeta dinámica
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-info">
        <h3>${nombre}</h3>
        <span>${categoria}</span>
      </div>
      <div class="dot-indicator"></div>
    `;

    // Insertar al inicio de la lista
    container.prepend(card);

    // Actualizar el contador
    totalItems++;
    counter.textContent = `${totalItems} ítem${totalItems > 1 ? 's' : ''}`;

    // Limpiar formulario
    form.reset();

    // Mostrar notificación Toast
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
});