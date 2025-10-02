const estanteria = {
  libros: [
    { nombre: 'El caballero oscuro', autor: 'Frank Miller', leido: false },
    { nombre: 'El mundo amarillo', autor: 'Albert Espinosa', leido: false },
    { nombre: 'Harry Potter y el caliz de fuego', autor: 'J.K. Rowling', leido: true },
    { nombre: 'El ingenioso hidalgo Don Quijote de la Mancha', autor: 'Miguel de Cervantes', leido: false },
    { nombre: 'Berserk', autor: 'Kentaro Miura', leido: true },
    { nombre: 'Iliada', autor: 'Homero', leido: false }
  ],
  log() {
    console.log("--- Estado de tus libros ---");
    this.libros.forEach(libro => {
      if (libro.leido) {
        console.log(`Ya has leído ${libro.nombre} de ${libro.autor}`);
      } else {
        console.log(`Aun no has leído ${libro.nombre} de ${libro.autor}`);
      }
    });
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    if (librosNoLeidos.length > 0) {
      const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
      const libroSugerido = librosNoLeidos[indiceRandom];
      console.log(`\n--- Sugerencia de lectura ---`);
      console.log(`Te sugiero leer: ${libroSugerido.nombre} de ${libroSugerido.autor}`);
    } else {
      console.log("\n¡Felicidades, has leído todos los libros!");
    }
  }
};

// Verificamos el funcionamiento
estanteria.log();
estanteria.sugerencia();