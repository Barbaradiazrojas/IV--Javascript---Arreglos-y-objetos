document.addEventListener('DOMContentLoaded', () => {
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
      }
  ];

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
      }
  ];

  const cardContainerAlquiler = document.getElementById('card-container-alquiler');
  const cardContainerVentas = document.getElementById('card-container-ventas');

  if (typeof construccion_card === 'function') {
      if (cardContainerAlquiler && Array.isArray(propiedades_alquiler)) {
          cardContainerAlquiler.innerHTML = construccion_card(propiedades_alquiler, 3);
      } else {
          console.warn('El contenedor de alquiler o las propiedades de alquiler no están disponibles.');
      }

      if (cardContainerVentas && Array.isArray(propiedades_ventas)) {
          cardContainerVentas.innerHTML = construccion_card(propiedades_ventas, 3);
      } else {
          console.warn('El contenedor de ventas o las propiedades de ventas no están disponibles.');
      }
  } else {
      console.error('La función construccion_card no está definida.');
  }
});
