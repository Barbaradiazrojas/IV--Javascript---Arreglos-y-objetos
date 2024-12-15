const propiedades_alquiler = [
  {
    nombre: 'Apartamento Moderno',
    src: './assets/img/apartamento_modeno.jpg',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '27, avenida Francisco Garcia Huidobro, Santiago',
    habitaciones: 3,
    costo: 850000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa Familiar',
    src: './assets/img/casa_familiar.jpg',
    descripcion: 'Casa amplia ideal para familias.',
    ubicacion: 'Viña del Mar, Chile',
    habitaciones: 4,
    costo: 1200000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Estudio Minimalista',
    src: './assets/img/estudio_minimalista.jpg',
    descripcion: 'Estudio acogedor para profesionales.',
    ubicacion: 'Providencia, Santiago',
    habitaciones: 1,
    costo: 450000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Cabaña en el Bosque',
    src: './assets/img/cabana_bosque.jpg',
    descripcion: 'Hermosa cabaña rodeada de naturaleza.',
    ubicacion: 'Pucón, Chile',
    habitaciones: 2,
    costo: 700000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Departamento Urbano',
    src: './assets/img/departamento_urbano.jpg',
    descripcion: 'Este elegante departamento moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '896, Federico García Lorca,Providencia',
    habitaciones: 2,
    costo: 600000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Penthouse de Lujo',
    src: './assets/img/penthouse_lujo.jpg',
    descripcion: 'Exclusivo penthouse con terraza.',
    ubicacion: 'Vitacura, Santiago',
    habitaciones: 5,
    costo: 2500000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Casa de Campo',
    src: './assets/img/casa_campo.jpg',
    descripcion: 'Casa perfecta para descansar.',
    ubicacion: 'Quillota, Chile',
    habitaciones: 3,
    costo: 950000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Loft Industrial',
    src: './assets/img/loft_industrial.jpg',
    descripcion: 'Diseño único en una ubicación estratégica.',
    ubicacion: 'Ñuñoa, Santiago',
    habitaciones: 1,
    costo: 800000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Villa Mediterránea',
    src: './assets/img/villa_mediterranea.jpg',
    descripcion: 'Amplia villa con piscina privada.',
    ubicacion: '465 orquideas, La Serena',
    habitaciones: 4,
    costo: 1800000,
    smoke: false,
    pets: false
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('propiedades_alquiler');
  if (container) {
    container.innerHTML = construccion_card(propiedades_alquiler);
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
  return contenidoHtml; // Devuelve el HTML generado
};
