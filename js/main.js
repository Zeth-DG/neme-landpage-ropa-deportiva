// js/main.js
import productosReales from './catalogo.json' with { type: 'json' };

console.log('📦 Productos cargados exitosamente:', productosReales);

// Cargar el carrito desde localStorage al iniciar (o iniciar vacío si no hay nada)
let carrito = JSON.parse(localStorage.getItem('neme_carrito')) || [];

function guardarCarritoEnStorage() {
  localStorage.setItem('neme_carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function renderizarTarjetasMejoradas(productos, contenedor) {
  contenedor.innerHTML = "";
  
  if (!productos || productos.length === 0) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No hay productos disponibles en esta colección por el momento.</p>
      </div>
    `;
    return;
  }
  
  productos.forEach((producto, index) => {
    const delay = index * 0.05;
    
    contenedor.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card-producto" style="animation-delay: ${delay}s">
          <div class="producto-imagen-wrapper">
            <img
              src="${producto.imagen}"
              alt="${producto.nombre || 'Producto neme'}"
              class="producto-imagen"
              loading="lazy"
              onerror="this.src='https://via.placeholder.com/300x400?text=Imagen+No+Disponible'">
            
            ${index === 0 ? '<span class="badge-nuevo">Nuevo</span>' : ''}
          </div>
          
          <div class="producto-info">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <p class="producto-categoria">${producto.categoria}</p>
            
            <!-- Botón para agregar al carrito -->
            <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Funciones del Carrito
window.agregarAlCarrito = function(id) {
  const producto = productosReales.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    guardarCarritoEnStorage();
    mostrarNotificacionTemporal(producto.nombre);
  }
};

window.eliminarDelCarrito = function(index) {
  carrito.splice(index, 1);
  guardarCarritoEnStorage();
  renderizarContenidoCarrito();
};

function actualizarContadorCarrito() {
  const contadorEl = document.getElementById('contador-carrito');
  if (contadorEl) {
    contadorEl.textContent = carrito.length;
  }
}

function renderizarContenidoCarrito() {
  const contenedorCarrito = document.getElementById('contenedor-carrito-items');
  const totalCarritoEl = document.getElementById('total-carrito');
  
  if (!contenedorCarrito) return;

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = `
      <div class="text-center py-4 text-muted">
        <p>Tu carrito está vacío.</p>
      </div>
    `;
    if (totalCarritoEl) totalCarritoEl.textContent = '$0';
    return;
  }

  let html = '';
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    html += `
      <div class="carrito-item d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
        <div class="d-flex align-items-center gap-3">
          <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
          <div>
            <h6 class="mb-0 text-dark" style="font-size: 0.9rem;">${item.nombre}</h6>
            <small class="text-muted">$${item.precio}</small>
          </div>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})">
          ✕
        </button>
      </div>
    `;
  });

  contenedorCarrito.innerHTML = html;
  if (totalCarritoEl) totalCarritoEl.textContent = `$${total}`;
}

function mostrarNotificacionTemporal(nombreProducto) {
  console.log(`Agregado al carrito: ${nombreProducto}`);
}

function inicializarProductos() {
  // Actualizar el contador apenas cargue la página con los datos del localStorage
  actualizarContadorCarrito();

  const categorias = [
    { id: 'modalFuerza', contenedorId: 'contenedor-fuerza', filtro: 'FUERZA' },
    { id: 'modalNadar', contenedorId: 'contenedor-nadar', filtro: 'NADAR' },
    { id: 'modalCorrer', contenedorId: 'contenedor-correr', filtro: 'CORRER' },
    { id: 'modalOtros', contenedorId: 'contenedor-otros', filtro: 'OTROS DEPORTES' }
  ];

  categorias.forEach(cat => {
    const modalEl = document.getElementById(cat.id);
    const contenedor = document.getElementById(cat.contenedorId);

    if (modalEl && contenedor) {
      modalEl.addEventListener('show.bs.modal', () => {
        contenedor.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="mt-3 text-muted">Cargando colección...</p>
          </div>
        `;

        setTimeout(() => {
          const productosFiltrados = productosReales.filter(p => p.categoria.includes(cat.filtro));
          renderizarTarjetasMejoradas(productosFiltrados, contenedor);
        }, 200);
      });
    }
  });

  // Evento para actualizar la vista del carrito al abrir su modal
  const modalCarritoEl = document.getElementById('modalCarrito');
  if (modalCarritoEl) {
    modalCarritoEl.addEventListener('show.bs.modal', () => {
      renderizarContenidoCarrito();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarProductos();
});