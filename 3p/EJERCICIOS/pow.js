function pow(x, y) {


    let resultado = 1;
    for (let i = 1; i <= y; i++) {

        resultado = resultado * x;

    }
    return resultado;
}

console.log(pow(2, 3))