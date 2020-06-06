var convidados = [];

var quantidade = (Number(prompt('Insira a quantidade de convidados da sua festa: '))); // Entrada

for(i=0; i < quantidade; i++) {  // Laço para inserir infos dos convidados
    
    var nome = prompt('Insira o nome do convidado: ');
    var idade = Number(prompt('Insira a idade do convidado: '));
    var cpf = prompt('Insira o CPF do convidado: ');
    var genero = prompt('Insira o gênero da pessoa: ')
    convidados.push({nome, idade, cpf, genero});

}


console.log('Convidados cadastrados com sucesso!');  // Saída.

while (true) {  // Laço que faz a verificação da busca.
    var busca = prompt('Deseja realizar uma busca?');

    if (busca == 'S') {
        var param = prompt('Por idade, nome ou cpf?');  // Parâmetros de busca.

        if (param == 'nome') {  // Nome
            var buscaNome = prompt('Insira o nome: ');

            var arrayNome = convidados.filter(function(convidados) {  // Busca de convidados por nome.
                return convidados.nome == buscaNome;
            })
            
            
            console.log(arrayNome);

            break;

        } else if (param == 'idade') {  // Busca de convidados por idade.
            var buscaIdade = prompt('Insira a idade: ');

            var arrayIdade = convidados.filter(function(convidados) {
                return convidados.idade == buscaIdade;
            })

            console.log(arrayIdade);
            break;

        } else if (param == 'cpf') {  // Busca de convidados por cpf.
            var buscaCpf = prompt('Insira o cpf: ')

           var arrayCpf = convidados.filter(function(convidados) {
               return convidados.cpf == buscaCpf;
           })

            console.log(arrayCPF);
            break;
        }

       
    } else {
        console.log('Você não deseja realizar a busca.');  // Retorna quando não quiser realizar uma busca.
        break;
    }
}