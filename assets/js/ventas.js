const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 3800,
    smoke: false,
    pets: true
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('propiedades_venta');
  if (container) {
    container.innerHTML = construccion_card(propiedades_ventas);
  }
});

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
  return contenidoHtml; 
};
