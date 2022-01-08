import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

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

    // Submit al formulario

    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });

  function mostrarClient(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: empresaInput.value,
      empresa: telefonoInput.value,
      id: parseInt(idInput.value),
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    // Reescribe el objeto
    editarCliente(cliente);
  }
})();
