function mostrarInfo(elemento, nombre, descripcion) {
  const box = document.getElementById('info-box');
  const nombreRamo = document.getElementById('ramo-nombre');
  const descRamo = document.getElementById('ramo-descripcion');

  nombreRamo.textContent = nombre;
  descRamo.textContent = descripcion;
  box.style.display = 'block';

  // Cambiar estado tachado si ya está marcado
  if (elemento.classList.contains('tachado')) {
    elemento.classList.remove('tachado');
  } else {
    elemento.classList.add('tachado');
  }
}
