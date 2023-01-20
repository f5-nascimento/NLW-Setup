const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){

  //new Date() captura a data de hoje
  // toLocaleDateString converte a data em um formato completo para apenas o padrão exemplo: 03/03/2023
  //pt-br para o padrão brasileiro
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists =  nlwSetup.dayExists(today)  

  if(dayExists === true){
    alert('Dia á incluso')
    return
  }

  nlwSetup.addDay(today)
  alert(today)

}

function save(){
  localStorage.setItem('Marcado', JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["05-05", "01-01", "06-01"],
//   journal: ["01-05", "07-01", "10-01"],
// }

const data = JSON.parse(localStorage.getItem('Marcado')) || {}
nlwSetup.setData(data)
nlwSetup.load()