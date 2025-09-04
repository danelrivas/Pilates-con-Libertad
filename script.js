// script.js

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

/* JS del popup */
document.addEventListener('DOMContentLoaded', () => {
  const fotoEspecial = document.getElementById('fotoEspecial');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  // Asegura que el popup esté cerrado al cargar la página
  popup.style.display = 'none';
  document.body.style.overflow = 'auto';

  // Abrir popup
  fotoEspecial.addEventListener('click', () => {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquea scroll
  });

  // Cerrar popup al hacer clic en la X
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Desbloquea scroll
  });

  // Cerrar popup si se hace clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto'; // Desbloquea scroll
    }
  });
});

// CONTADOR MENSAJE
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('mensaje');
  const contador = document.getElementById('contador');
  const max = parseInt(textarea.getAttribute('maxlength'));

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    contador.textContent = `${len}/${max}`;

    // Eliminar clases previas
    contador.classList.remove('naranja', 'rojo');

    // Cambiar color según cantidad
    if(len >= max) {
      contador.classList.add('rojo');        // máximo
    } else if(len >= Math.floor(max * 0.8)) {
      contador.classList.add('naranja');     // >80%
    }
  });
});

// CLEAN FORMULARIO
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form'); 
  const textarea = document.getElementById('mensaje'); 
  const contador = document.getElementById('contador'); 
  const max = parseInt(textarea.getAttribute('maxlength')); 
  const resetBtn = document.getElementById('resetBtn'); 

  resetBtn.addEventListener('click', () => {
    form.reset(); // vacía todos los campos
    contador.textContent = `0/${max}`; // reinicia el contador
    contador.classList.remove('naranja', 'rojo'); // quita colores si estaban
  });
});

// Menu hamburguesa
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

// Redes sociales toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleRedes = document.getElementById('toggleRedes');
  const barraRedes = document.getElementById('barraRedes');

  toggleRedes.addEventListener('click', () => {
    barraRedes.classList.toggle('active');
  });
});

