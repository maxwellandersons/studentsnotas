let students = [
  { name: "Ana", prova1: 8, prova2: 9 },

  { name: "Paulo", prova1: 5, prova2: 6 },

  { name: "Maxwell", prova1: 7, prova2: 8},

]

function calcAverage(prova1, prova2) {
  let average = (prova1 + prova2) / 2
  return average
}

for (let student of students) {
  let average = calcAverage(student.prova1, student.prova2)

  if (average >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
