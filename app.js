const botao = document.querySelector('button[data-js="submit"]')
const form = document.querySelector('form')

function meuFormulario(e) {
  e.preventDefault()

  const { nome, email } = form

  console.log('Nome: ', nome.value)
  console.log('E-mail: ', email.value)
}

botao.addEventListener('click', e => meuFormulario(e))
