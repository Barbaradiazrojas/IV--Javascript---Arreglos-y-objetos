// Función para verificar si se permiten mascotas
const condicion_mascotas = (condicion = false) => {
  return condicion
      ? `<p class="text-success">
           <i class="fas fa-paw"></i> Mascotas permitidas
         </p>`
      : `<p class="text-danger">
           <i class="fas fa-ban"></i> No se permiten mascotas
         </p>`;
};

// Función para verificar si se permite fumar
const condicion_fumar = (condicion = false) => {
  return condicion
      ? `<p class="text-success">
           <i class="fas fa-smoking"></i> Permitido fumar
         </p>`
      : `<p class="text-danger">
           <i class="fas fa-smoking-ban"></i> No se permite fumar
         </p>`;
};

// Función para construir las tarjetas con información de las propiedades
const construccion_card = (contenido, ciclos = 0) => {
  let contador = 0; // Lleva el conteo de tarjetas generadas
  let contenidoHtml = ''; // Contenedor para el HTML generado

  // Itera sobre el arreglo de contenido
  for (let objeto of contenido) {
      contador++;
      contenidoHtml += `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img
                  src="${objeto.src}"
                  class="card-img-top"
                  alt="Imagen del inmueble"
              />
              <div class="card-body">
                  <h5 class="card-title">
                      ${objeto.nombre}
                  </h5>
                  <p class="card-text">
                      ${objeto.descripcion}
                  </p>
                  <p>
                      <i class="fas fa-map-marker-alt"></i> ${objeto.ubicacion}
                  </p>
                  <p>
                      <i class="fas fa-bed"></i> ${objeto.habitaciones} Habitaciones |
                      <i class="fas fa-bath"></i> 2 Baños
                  </p>
                  <p>
                      <i class="fas fa-dollar-sign"></i> ${objeto.costo.toLocaleString('es-CL')}
                  </p>
                  ${condicion_fumar(objeto.smoke)}
                  ${condicion_mascotas(objeto.pets)}
              </div>
          </div>
      </div>`;
      // Si se alcanza el límite de ciclos especificado, detener y devolver el HTML acumulado
      if (contador === ciclos) break;
  }
  return contenidoHtml; // Devuelve el HTML generado
};
