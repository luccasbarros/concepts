var convidados = [ // Array exemplo
    {id: 123, nome:'Luccas', idade: '25', genero: 'M'},
    {id: 456, nome:'Ana', idade: '15', genero: 'F'},
    {id: 789, nome:'Julia', idade: '22', genero: 'F'},
    {id: 111, nome:'Adriano', idade: '17', genero: 'M'},
    {id: 222, nome:'Pamela', idade: '22', genero: 'F'},
    {id: 333, nome:'Fabia', idade: '29', genero: 'F'}
]

var insira = Number(prompt('Insira o id do convidado que queira clonar: ')) // Clone de objeto

var convidadoClonado = convidados.filter(function(item) { // Retornar o id que quero clonar
    return item.id == insira
})

var novo = Object.create(convidadoClonado) // Crio um novo objeto com esse convidado clonado.

console.log(novo) // Saída

    
