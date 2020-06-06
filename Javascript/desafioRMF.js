var convidados = [ // Array exemplo
    {id: 123, nome:'Luccas', idade: '25', genero: 'M'},
    {id: 456, nome:'Ana', idade: '15', genero: 'F'},
    {id: 789, nome:'Julia', idade: '22', genero: 'F'},
    {id: 111, nome:'Adriano', idade: '17', genero: 'M'},
    {id: 222, nome:'Pamela', idade: '22', genero: 'F'},
    {id: 333, nome:'Fabia', idade: '29', genero: 'F'}
]

var barrar = convidados.filter(function(item) { // Retornar menores de idade.
    return item.idade < 18;
})

console.log('Menores de 18: ', barrar)

Array.prototype.groupBy = function(prop) {  // Função groupBy para agrupar por certa propriedade
    var value = this.reduce(function (agrupado, item) {
        var key = item[prop]; // item.marca

        agrupado[key] = (agrupado[key] || []).concat(item);
        return agrupado;

    }, {}); ;

    return value;
};


convidados.sort(function (a, b) {  // Organizar os convidados por ordem alfabética.
    if (a.nome > b.nome) {
        return 1;
    } else if (a.nome < b.nome) {
        return -1;
    } else {
        return 0;
    }
})


var pessoasFiltradas = convidados.filter(function(item){  // Retornar convidados com +18 idade e agrupar por gênero
    return item.idade >= 18
}).groupBy('genero')

console.log(pessoasFiltradas)