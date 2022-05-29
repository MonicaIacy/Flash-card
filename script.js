const conceito = document.querySelector('.inputConceito')
const significado = document.querySelector('.inputSignificado')
const flashCard = document.querySelector('.flashCard')
const flashCardConceito = document.querySelector('.conceito')
const flashCardResposta = document.querySelector('.resposta')
const container = document.querySelector('.container')
const criarBtn = document.querySelector('.criarBtn')
const novoBtn = document.querySelector('.novoBtn')

criarBtn.addEventListener('click', criar)

function criar() {
  container.style.display = 'none'
  flashCard.style.display = 'block'
  flashCardConceito.innerText = conceito.value
  flashCardResposta.innerText = significado.value

  flashCardConceito.style.display = 'block'

  novoBtn.style.display = 'none'

  flashCardConceito.addEventListener('click', mostrarResposta)
}

function mostrarResposta() {
  flashCardConceito.style.display = 'none'
  flashCardResposta.style.display = 'block'

  flashCardResposta.addEventListener('click', retornaConceito)

  novoBtn.style.display = 'block'
  novoBtn.addEventListener('click', criarNovo)
}

function retornaConceito() {
  flashCardConceito.style.display = 'block'
  flashCardResposta.style.display = 'none'
}

function criarNovo() {
  if (flashCardConceito.style.display == 'none' &&
  flashCardResposta.style.display == 'block') {
    flashCardConceito.style.display = 'block'
    flashCardResposta.style.display = 'none'
  } 
  
  flashCard.style.display = 'none'
  container.style.display = 'block'
  
  conceito.value = ''
  significado.value = ''
}
