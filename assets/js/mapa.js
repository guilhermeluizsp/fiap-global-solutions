document.addEventListener("DOMContentLoaded", function () {
  const paths = document.querySelectorAll("path");
  paths.forEach((path) => {
    path.addEventListener("click", (e) => {
      if (e.target.classList.contains("com-fonte")) {
        const fonte = e.target.getAttribute("data-fonte");
        const ativo = e.target.getAttribute("data-ativo") === "1";

        document.getElementById("tipo-fonte").innerText = fonte;
        document.getElementById("status-fonte").innerText = ativo
          ? "Ativo"
          : "Inativo";

        const modalEl = document.getElementById("modalInformacoes");
        const myModal = new bootstrap.Modal(modalEl, {
          keyboard: false,
        });

        myModal.show();
      }
    });
  });
});
