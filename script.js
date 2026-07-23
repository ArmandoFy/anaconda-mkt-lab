document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Menú Móvil con accesibilidad aria-expanded
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  // Cerrar menú al presionar una opción
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Lightbox: ver imágenes de la galería en grande
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

document.querySelectorAll(".gal-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    const img = tile.querySelector(".gal-zoom");
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    // Bloquear el scroll de fondo mientras el lightbox está abierto
    document.body.style.overflow = "hidden";
  });
});

function cerrarLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  // Restaurar el scroll del cuerpo
  document.body.style.overflow = "auto";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", cerrarLightbox);
}
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) cerrarLightbox();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarLightbox();
});

// Contador de Caracteres para el área de mensaje
const mensajeInput = document.getElementById("mensaje");
const charCount = document.getElementById("char-count");

if (mensajeInput && charCount) {
  mensajeInput.addEventListener("input", () => {
    const currentLength = mensajeInput.value.length;
    charCount.textContent = `${currentLength} / 500`;
  });
}

// Envío a WhatsApp con validación nativa (Sin alert)
function enviarWhats(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const tipo = document.getElementById("tipo").value;
  const medidas = document.getElementById("medidas").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const errorBox = document.getElementById("form-error");

  // Limpiar mensaje de error
  errorBox.style.display = "none";
  errorBox.textContent = "";

  if (!nombre || !telefono) {
    errorBox.textContent =
      "Por favor, completa tu nombre y número de teléfono.";
    errorBox.style.display = "block";
    return false;
  }

  // Validar teléfono de 10 dígitos
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(telefono)) {
    errorBox.textContent =
      "Por favor, ingresa un número de teléfono válido a 10 dígitos.";
    errorBox.style.display = "block";
    return false;
  }

  let texto = `Hola, quiero cotizar un trabajo de impresión.%0A`;
  texto += `Nombre: ${encodeURIComponent(nombre)}%0A`;
  texto += `Teléfono: ${encodeURIComponent(telefono)}%0A`;
  texto += `Tipo de trabajo: ${encodeURIComponent(tipo)}%0A`;
  if (medidas) texto += `Medidas: ${encodeURIComponent(medidas)}%0A`;
  if (mensaje) texto += `Detalles: ${encodeURIComponent(mensaje)}`;

  window.open(`https://wa.me/525539787716?text=${texto}`, "_blank");
  return false;
}
