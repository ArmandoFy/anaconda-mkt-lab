document.getElementById("year").textContent = new Date().getFullYear();

function enviarWhats(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const tipo = document.getElementById("tipo").value;
  const medidas = document.getElementById("medidas").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  let texto = `Hola, quiero cotizar un trabajo de impresión.%0A`;
  texto += `Nombre: ${encodeURIComponent(nombre)}%0A`;
  texto += `Teléfono: ${encodeURIComponent(telefono)}%0A`;
  texto += `Tipo de trabajo: ${encodeURIComponent(tipo)}%0A`;
  if (medidas) texto += `Medidas: ${encodeURIComponent(medidas)}%0A`;
  if (mensaje) texto += `Detalles: ${encodeURIComponent(mensaje)}`;

  window.open(`https://wa.me/525528236389?text=${texto}`, "_blank");
  return false;
}
