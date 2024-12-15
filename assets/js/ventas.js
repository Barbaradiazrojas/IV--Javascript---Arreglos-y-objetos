const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: './assets/img/10.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Reñaca, Chile',
    habitaciones: 4,
    costo: 50000000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Departamento de estudiantes',
    src: './assets/img/11.jpg',
    descripcion: 'Departamento adaptado para estudiantes',
    ubicacion: '789 Barrio Universitario, Viña del Mar',
    habitaciones: 3,
    costo: 70000000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Casa fabricada con Container',
    src: './assets/img/12.jpg',
    descripcion: 'Esta Casa orece un servicio personalizado, adaptado a instalaciones modernas y exclusivas.',
    ubicacion: '567 Skyline Avenue, Santiago.',
    habitaciones: 1,
    costo: 50800000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa Prefabricada',
    src: './assets/img/13.jpg',
    descripcion: 'Este servicio ofrece una casa prefabricada, instalada según indicaciones.',
    ubicacion: '567 Skyline Avenue, Valparaíso',
    habitaciones: 3,
    costo: 38000000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Loft',
    src: './assets/img/14.jpg',
    descripcion: 'Loft de dos pisos moderno y exclusivo.',
    ubicacion: '567 Skyline Avenue, Ñuñoa',
    habitaciones: 1,
    costo: 48000000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Departamento con vista al mar',
    src: './assets/img/15.jpg',
    descripcion: 'Departamento hermoso ubicado en zona costera.',
    ubicacion: '567 Skyline Avenue, Santo Domingo',
    habitaciones: 4,
    costo: 88000000,
    smoke: false,
    pets: true
  },
    {
      nombre: 'Departamento residencial',
      src: './assets/img/16.jpg',
      descripcion: 'Departamento centrico, cercano a metro, colegios y bancos.',
      ubicacion: '567 Skyline Avenue, Santiago',
      habitaciones: 3,
      costo: 3800,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Casa Familiar',
      src: './assets/img/17.jpg',
      descripcion: 'Esta casa ofrece un patio grande, exclusiva cocina, 5 baños, un espacio confortable para la familia.',
      ubicacion: '567 Skyline Avenue, Lampa',
      habitaciones: 14,
      costo: 200000000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Casa de lujo',
      src: './assets/img/18.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
      ubicacion: '567 Skyline Avenue, Santo Domingo',
      habitaciones: 8,
      costo: 400000000,
      smoke: false,
      pets: true
    },
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
