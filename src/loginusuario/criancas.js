const urlcriancas ="https://crud-server-json-trans-peste.vercel.app/criancas"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const campopreencher = document.querySelector('section#peste')


function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${idurl}`
}

async function preencherdados ()
{
const dadoscriancas = await fetch(urlcriancas+`/${idurl}`)
const criancas = await dadoscriancas.json()
console.log(dadoscriancas)
console.log(criancas.type)
const div = document.createElement('div')
        const nome = document.createElement('p')
         const botaoeditar = document.createElement('a')
         const spanfotos = document.createElement('span')
         const fotocrianca1 = document.createElement('img')
         const fotocrianca2 = document.createElement('img')
         spanfotos.appendChild(fotocrianca1)
         spanfotos.appendChild(fotocrianca2)
       
         botaoeditar.innerHTML = "Editar Perfil"
         botaoeditar.setAttribute('href',`../loginusuario/telacadastrocri.html?id=${criancas.id}`)
         nome.innerHTML = `<strong>Nome</strong>:${criancas.nome} `
         const email = document.createElement('p')
         email.innerHTML = `<strong>email</strong>:${criancas.email}`
         const telefone = document.createElement('p')
        telefone.innerHTML =`<strong>Telefone</strong>:${criancas.telefone}`
        const enderecoescola = document.createElement('p')
        enderecoescola.innerHTML =`<strong>Endereço da escola</strong>:${criancas.endereco_escola}`
        const cpf = document.createElement('p')
        cpf.innerHTML =`<strong>CPF</strong>:${criancas.cpf}`
        const nascimento = document.createElement('p')
        nascimento.innerHTML =`<strong>Data de nascimento</strong>:${criancas.data_nascimento}`
        const idcrianca = document.createElement('p')
        idcrianca.innerHTML =`<strong>Id da criança</strong>:${criancas.id}`
        const nome_escola = document.createElement('p')
        nome_escola.innerHTML =`<strong>Escola</strong>:${criancas.nome_escola}`
        const avaliacao = document.createElement('p')
        avaliacao.innerHTML =`<strong>Avaliação</strong>:${criancas.avalicao}`
        const responsaveisid = document.createElement('p')
        responsaveisid.innerHTML =`<strong>Id do responsável</strong>:${criancas.responsaveisid}`
        const h1 = document.createElement('h1')
        h1.innerHTML = `<strong>Perfil da peste</strong>`


        div.appendChild(h1)    
        div.appendChild(nome)
        div.appendChild(cpf)
        div.appendChild(telefone)
        div.appendChild(nascimento)
        div.appendChild(nome_escola)
        div.appendChild(enderecoescola)
        div.appendChild(avaliacao)
        div.appendChild(responsaveisid)
        div.appendChild(botaoeditar)
        div.appendChild(spanfotos)
        campopreencher.appendChild(div)

    

}
preencherdados ()

function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${idurl} `
}

function redirecionarperfil()
{
        window.location.href= `../loginusuario/perfilusuario.html?id=${idurl} `
}
if(!idurl)
{
    window.location.href="../telainicial/login.html"
}
