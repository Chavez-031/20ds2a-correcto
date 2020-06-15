var numeros = [1,2,34,5,-2,54,3 ];

var min = numeros[0];

for (var i = 0; i < numeros.length ; i++) {
    if (numeros[i] < min) {
       
        min = numeros[i];
    }
}
console.log('Valor mínimo: ' + min);