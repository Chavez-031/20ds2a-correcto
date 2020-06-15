var numeros = [1,2,3,4,5,6,100,23];

var min = numeros[0];

for (var i = 0; i < numeros.length ; i++) {
    if (numeros[i] > min) {
       
        min = numeros[i];
    }
}
console.log('Valor maximo: ' + min);