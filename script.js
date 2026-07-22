document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Menú Móvil
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Cerrar menú al presionar una opción
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Envío a WhatsApp con validación
function enviarWhats(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const tipo = document.getElementById("tipo").value;
  const medidas = document.getElementById("medidas").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !telefono) {
    alert("Por favor llena tu nombre y teléfono.");
    return false;
  }

  let texto = `Hola, quiero cotizar un trabajo de impresión.%0A`;
  texto += `Nombre: ${encodeURIComponent(nombre)}%0A`;
  texto += `Teléfono: ${encodeURIComponent(telefono)}%0A`;
  texto += `Tipo de trabajo: ${encodeURIComponent(tipo)}%0A`;
  if (medidas) texto += `Medidas: ${encodeURIComponent(medidas)}%0A`;
  if (mensaje) texto += `Detalles: ${encodeURIComponent(mensaje)}`;

  window.open(`https://wa.me/525528236389?text=${texto}`, "_blank");
  return false;
}
