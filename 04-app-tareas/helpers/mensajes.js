require('colors');

// NO SE USA, ES EL ANTIGUO ANTES DEL INQUIRER

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log(`================================`.green);
    console.log(`     Selecciona una opción`.green);
    console.log(`================================\n`.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Lista de tareas`);
    console.log(`${'3.'.green} Lista de tareas completadas`);
    console.log(`${'4.'.green} Lista de tareas pendientes`);
    console.log(`${'5.'.green} Completar tareas`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Selecciona una opción: `, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Presiona ${'ENTER'.green} para continuar\n`, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
