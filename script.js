const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["05-05", "01-01", "06-01"],
  journal: ["01-05", "07-01", "10-01"],
}

nlwSetup.setData(data)
nlwSetup.load()