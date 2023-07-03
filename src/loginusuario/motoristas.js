const urlmotoristas ="https://crud-server-json-trans-peste.vercel.app/motoristas"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const campopreencher = document.querySelector('section#peste')


function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${idurl}`
}

async function preencherdados ()
{
const dadosmotoristas = await fetch(urlmotoristas+`/${idurl}`)
const motoristas = await dadosmotoristas.json()
console.log(dadosmotoristas)
console.log(motoristas.type)
const div = document.createElement('div')
        const h1 = document.createElement('h1')
         const nome = document.createElement('p')
         const email = document.createElement('p')
         const botaoeditar = document.createElement('a')
         const botaosolicita = document.createElement('a')
         const botaomeusveiculos = document.createElement('a')
         const spanfotos = document.createElement('span')
         const fotomotorista = document.createElement('img')
         const fotocnh = document.createElement('img')
         spanfotos.appendChild(fotomotorista)
         spanfotos.appendChild(fotocnh)
       
         botaoeditar.innerHTML = "Editar perfil"
         botaoeditar.setAttribute('href',`../loginmotorista/perfilmoto.html?id=${motoristas.id}`)
         botaosolicita.innerHTML = "Solicitações pendentes"
         botaosolicita.setAttribute('href',`../loginmotorista/sugestoes.html?id=${motoristas.id}`)
         botaomeusveiculos.innerHTML = "Meus veículos"
         botaomeusveiculos.setAttribute('href',`../loginusuario/perfil_veiculo.html?id=${motoristas.id}`)

         nome.innerHTML = `<strong>Nome</strong>:${motoristas.nome}  ${motoristas.sobrenome}`
         email.innerHTML = `<strong>email</strong>:${motoristas.email}`
        h1.innerHTML = `Bem vindo, ${motoristas.nome}  ${motoristas.sobrenome} ` 
        const telefone = document.createElement('p')
        telefone.innerHTML =`<strong>Telefone</strong>:${motoristas.telefone}`
        const endereco = document.createElement('p')
        endereco.innerHTML =`<strong>Endereço</strong>:${motoristas.endereco}`
        const cpf = document.createElement('p')
        cpf.innerHTML =`<strong>CPF</strong>:${motoristas.cpf}`
        const nascimento = document.createElement('p')
        nascimento.innerHTML =`<strong>Data de nascimento</strong>:${motoristas.nascimento}`
        const cnh = document.createElement('p')
        cnh.innerHTML =`<strong>CNH</strong>:${motoristas.cnh}`
        const cnhvenc = document.createElement('p')
        cnhvenc.innerHTML =`<strong>Validade da CNH</strong>:${motoristas.cnhvenc}`
                
        div.appendChild(h1)
        div.appendChild(nome)
        div.appendChild(cpf)
        div.appendChild(endereco)
        div.appendChild(nascimento)
        div.appendChild(cnh)
        div.appendChild(cnhvenc)
        div.appendChild(telefone)
        div.appendChild(email)
        div.appendChild(spanfotos)
        campopreencher.appendChild(div)

    

}
preencherdados ()

function redirecionarhome()
{
        window.location.href= `../loginmotorista/cadastrarrota.html?id=${idurl} `
}

function redirecionarperfil()
{
        window.location.href= `../loginusuario/perfil_motorista.html?id=${idurl} `
}
if(!idurl)
{
    window.location.href="../telainicial/login.html"
}
function editarperfil()
{
        window.location.href= `../loginmotorista/perfilmoto.html?id=${idurl} `
}
function solicipendentes()
{
        window.location.href= `../loginmotorista/sugestoes.html?id=${idurl} `
}
function meusveiculos()
{
        window.location.href= `../loginusuario/perfil_veiculo.html?id=${idurl} `
}

