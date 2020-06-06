var funcionario = {
    nome: 'Luccas',
    idade: 25,
    numRegistro: '1115A',
    departamento: 'TI',
    eventos: [
        {evento: 'faltou', data:'18/05/2010'}
    ],
    detalhes: {
        hobbies: ['Fotografia', 'Corrida']
    },
    registrarEntrada: function(data) {
        console.log('Registro de data de entrada: ' + data);
    },
    registrarSaida: function(data) {
        console.log('Registro de data de saida: ', data );
    }
}

funcionario.registrarEntrada('06/05/2025');

