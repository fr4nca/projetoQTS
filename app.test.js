const funcoes = require('./app')

test('Adiciona 2 + 2 e resulta 4', () => {
    expect(funcoes.add(2, 2)).toBe(4)
})

test('Adiciona 2 + 2 e não resulta 5', () => {
    expect(funcoes.add(2, 2)).not.toBe(5)
})

test('Retorna nulo', () => {
    expect(funcoes.nulo()).toBeNull()
})

test('Deve ser falso', () => {
    expect(funcoes.verificaValor(null)).toBeFalsy()
})

test('Usuario deve ser Victor França', () => {
    expect(funcoes.criaUser()).toEqual({ nome: 'Victor', sobrenome: 'França' })
})

test('Victor deve estar no array', () => {
    usuarios = ['Victor', 'Ronan', 'Edgard']
    expect(usuarios).toContain('Victor')
})

//https://jsonplaceholder.typicode.com/users/1
test('Nome do usuario da requisição deve ser Leanne Graham', () => {
    return funcoes.getUsuario()
        .then(dado => {
            expect(dado.name).toEqual('Leanne Graham')
        })
})

test('Verifica se a função existe', () => {
    expect(funcoes.add).toBeDefined()
})



