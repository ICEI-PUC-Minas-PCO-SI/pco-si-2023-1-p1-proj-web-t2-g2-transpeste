

const inputnome = document.querySelector('input#nome')
const inputtelefone = document.querySelector('input#telefone')
const inputemail = document.querySelector('input#email')

const urlresponsavel = "https://crud-server-json-trans-peste.vercel.app/responsaveis"

const urlinteira = new URLSearchParams(window.location.search)
const idurl = urlinteira.get('id')

async function DadosResponsavel() {
  console.log(urlresponsavel + '/' + idurl)
  const dadosnaURL = await fetch(urlresponsavel + '/' + idurl)
  console.log(dadosnaURL)
  const dadosquepegueijason = await dadosnaURL.json()

  inputnome.value = dadosquepegueijason.nome + ' ' + dadosquepegueijason.sobrenome
  inputtelefone.value = dadosquepegueijason.telefone
  inputemail.value = dadosquepegueijason.email
}
DadosResponsavel()

function salvar() {
  const nascimento = document.getElementById('nascimento').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereço').value;

  const responsavel = {
    "id": idurl,
    "nome": inputnome.value,
    "telefone": inputtelefone.value,
    "email": inputemail.value,
    "nascimento": nascimento,
    "cpf": cpf,
    "endereco": endereco
  };

  var url = `https://crud-server-json-trans-peste.vercel.app/responsaveis`;

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(responsavel),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    location.reload();
  }).catch(error => {
    console.log(error);
  });
}










// async function DadosMotoristas(){
//     console.log(urlmotoristas+'/'+idurl)
//     const dadosnaURL = await fetch(urlmotoristas+'/'+idurl)
//     console.log (dadosnaURL)
//     const dadosquepegueijason = await dadosnaURL.json()

//     inputnome.value = dadosquepegueijason.nome +' '+ dadosquepegueijason.sobrenome
//     inputtelefone.value = dadosquepegueijason.telefone
//     inputemail.value = dadosquepegueijason.email
// }
// DadosMotoristas()

// function salvar(){
//     const nome = inputnome.value
//     const telefone = inputtelefone.value
//     const email = inputemail.value
// }