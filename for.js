var edad = prompt('¿Cuál es tu edad?');
var edadNumero = Number(edad);

const veces = 100;

for (let i = 0; i < 100; i++) {
    if (isNaN(edadNumero)) {
        alert('Ingresa un número válido');
        edad = prompt('¿Cuál es tu edad?');
        edadNumero = Number(edad);
    } else {
        break;
    }
}

const esUnNumero = !isNaN(edadNumero);

if (esUnNumero) {
    console.log('Ingresaste un número');
}

