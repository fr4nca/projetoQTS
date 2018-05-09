const axios = require('axios')

const funcoes = {
    add: (a, b) => {
        return a + b
    },
    nulo: () => null,
    verificaValor: (x) => x,
    criaUser: () => {
        let usuario = { nome: 'Victor', sobrenome: 'França' }
        return usuario
    },
    getUsuario: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => console.log(err))
}

module.exports = funcoes