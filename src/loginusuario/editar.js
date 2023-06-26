const inputnome = document.querySelector('input#nome')
const inputtelefone = document.querySelector('input#telefone')
const inputemail = document.querySelector('input#email')
const urlresponsavel= "https://crud-server-json-trans-peste.vercel.app/responsaveis"
const urlmotorista= "https://https://crud-server-json-trans-peste.vercel.app/motoristas"
const urlinteira = new URLSearchParams(window.location.search)
const idurl = urlinteira.get('id')

async function preencherdadosresponsavel(){
    console.log(urlresponsavel+'/'+idurl)
    const dadosnaURL = await fetch(urlresponsavel+'/'+idurl)
    console.log (dadosnaURL)
    const dadosquepegueijason = await dadosnaURL.json()

    inputnome.value = dadosquepegueijason.nome +' '+ dadosquepegueijason.sobrenome
    inputtelefone.value = dadosquepegueijason.telefone 
    inputemail.value = dadosquepegueijason.email
}
preencherdados()

function salvar(){
    const nome = inputnome.value 
    const telefone = inputtelefone.value
    const email = inputemail.value
}

async function preencherdadosmotorista(){
    console.log
}
