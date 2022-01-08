const url = "http://localhost:4000/clientes";

// Crear cliente

export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (err) {
    console.log(err);
  }
};

// Obtener un cliente

export const obtenerClientes = async (clientes) => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (err) {
    console.log(err);
  }
};

// Elimina un cliente

export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.log(err);
  }
};

// Obtiene a un cliente por su ID

export const obtenerCliente = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`);
    const cliente = respuesta.json();
    return cliente;
  } catch (err) {
    console.log(err);
  }
};

// modificar un registro

export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (err) {
    console.log(err);
  }
};
