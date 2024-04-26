
// El usuario deberá rellenar el prompt con su edad, y la misma será almacenada en la variable "edad", dicha "edad" se almacenará en la variable "edadNumero" de tipo de dato "Number". Si el usuario ingresa cualquier otro tipo de dato, le aparecerá una alerta que le comunica que debería ingresar un número valido, y le volverá a aparecer para que rellene el prompt. En cuanto al ciclo/loop, al estar creado con do-while se repetirá infinitamente hasta que el usuario ingrese en el prompt su edad con el tipo de dato "Number".
do{
    alert('Ingresa un número válido');
    var edad = prompt('¿Cuál es tu edad?');
    var edadNumero = Number(edad);
} while(isNaN(edadNumero));



// Se crea una constante "esUnNumero" para hacer referencia a que el usuario ingresó en el prompt su edad de tipo de dato "Number", el navegador al detectar su edad, muestra en consola "Ingresaste un número".
const  esUnNumero = !isNaN(edadNumero);

if (esUnNumero){
    console.log('Ingresaste un número');
}

