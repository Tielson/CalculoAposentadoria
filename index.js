let idade
let contribuiçãoTempo
let calculo
let nome


let options
let Idade
let ContribuiçãoTempo


while (options != 3) {
  options = Number(prompt(`olá, trabalhador! Digite o numero correspondente ao seu genero:
  
  1.Homem
  2.Mulher
  3. Sair do programa
  `))

  switch (options) {
    case 1:
      nome = prompt('Qual seu nome')

      idade = Number(prompt(`Digite sua idade:`))


      contribuiçãoTempo = Number(prompt('Digite o tempo de contribuição:'))


      calculo = Number(idade) + Number(contribuiçãoTempo)
      console.log(calculo)

      if (contribuiçãoTempo >= 35) {
        if (calculo >= 95) {
          alert(`${nome} ,você pode se aposentar`)
        }
        else {
          alert(`${nome}, não é possivel se aposentar`)
        }
      }
      else {
        alert(`${nome}, não é possivel se ...`)

      }

      break
    case 2:
      nome = prompt('Qual seu nome')
      idade = Number(prompt(`Digite sua idade:`))

      contribuiçãoTempo = Number(prompt('Digite o tempo de contribuição:'))


      calculo = Number(idade) + Number(contribuiçãoTempo)
      console.log(calculo)

      if (contribuiçãoTempo >= 30) {
        if (calculo >= 85) {
          alert(`${nome} ,você pode se aposentar`)
        }
        else {
          alert(`${nome}, não é possivel se aposentar`)
        }
      }
      else {
        alert(`${nome}, não é possivel se ...`)
      }

      break
    case 3: alert("GoodBye!")
      break
    default:
      alert("Opção invalida. Tente novamente")
  }
}
