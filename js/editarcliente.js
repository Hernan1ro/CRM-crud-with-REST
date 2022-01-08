import { obtenerCliente } from "./API.js";

(function () {
  //Campos del formulario

  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosUrl = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosUrl.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarClient(cliente);
  });

  function mostrarClient(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }
})();
