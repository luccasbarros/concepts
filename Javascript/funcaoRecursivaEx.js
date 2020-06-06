function fatorial(base) { // RECURSIVA
    if (base == 0) {
        return 1;
    }
    else {
        return (base * fatorial(base-1));
 }
}

console.log(fatorial(5))

function fatorial(n) {  // FOR

    var resultado = 1;

    for(var cont=1; cont = n; cont++) {

        resultado = resultado * n;

        var n = n - 1;
    }

    return resultado;
}