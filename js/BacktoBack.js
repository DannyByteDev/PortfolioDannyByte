// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block"; // Mostrar el botón
  } else {
    backToTopButton.style.display = "none"; // Ocultar el botón
  }
};

// Función para volver al inicio de la página
document.getElementById("backToTop").onclick = function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
};
