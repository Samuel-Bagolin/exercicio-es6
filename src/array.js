const alunos = [
    { nome: 'Ana', nota: 8.7 },
    { nome: 'Bruno', nota: 5.2 },
    { nome: 'Carla', nota: 9.1 },
    { nome: 'Diego', nota: 6.5 },
    { nome: 'Eduarda', nota: 7.8 },
    { nome: 'Felipe', nota: 4.9 },
    { nome: 'Gabriela', nota: 8.0 },
    { nome: 'Henrique', nota: 3.5 }
]

const alunosAprovados = alunos.filter(aprovados => aprovados.nota >= 6)

console.log(alunosAprovados)
