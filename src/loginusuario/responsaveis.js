const urlresponsavel ="https://crud-server-json-trans-peste.vercel.app/responsaveis"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const campopreencher = document.querySelector('section#peste')




function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${idurl}`
}

async function preencherdados ()
{
const dadosresponsavel = await fetch(urlresponsavel+`/${idurl}`)
const responsavel = await dadosresponsavel.json()
console.log(dadosresponsavel)
console.log(responsavel.type)
const div = document.createElement('div')
        const h1 = document.createElement('h1')
         const nome = document.createElement('p')
         const email = document.createElement('p')
         const botaoeditar = document.createElement('a')
         const botaoviagem = document.createElement('a')
         const botaocriança = document.createElement('a')
         const spanfotos = document.createElement('span')
         const fotocriança1 = document.createElement('img')
         const fotocriança2 = document.createElement('img')
         spanfotos.appendChild(fotocriança1)
         spanfotos.appendChild(fotocriança2)
       
         botaoeditar.innerHTML = "Editar Perfil"
         botaoviagem.innerHTML = " Minhas Solictaçôes"
         botaocriança.innerHTML = " Cadastrar Criança"
         botaocriança.setAttribute('href',`../loginusuario/cadastrarcrianca.html?id=${responsavel.id}`)
         botaoeditar.setAttribute('href',`../loginusuario/editarusuario.html?id=${responsavel.id}`)
         nome.innerHTML = `<strong>Nome</strong>:${responsavel.nome}  ${responsavel.sobrenome}`
         email.innerHTML = `<strong>E-mail</strong>:${responsavel.email}`
        h1.innerHTML = `Bem vindo, ${responsavel.nome}  ${responsavel.sobrenome} ` 
        const telefone = document.createElement('p')
        telefone.innerHTML =`<strong>Telefone</strong>:${responsavel.telefone}`
        const cpf = document.createElement('p')
        cpf.innerHTML =`<strong>CPF</strong>:${responsavel.cpf}`
        const endereco = document.createElement('p')
        endereco.innerHTML =`<strong>Endereço</strong>:${responsavel.endereco}`
        const nascimento = document.createElement('p')
        nascimento.innerHTML =`<strong>Data de nascimento</strong>:${responsavel.nascimento}`
        const senha = document.createElement('p')
        senha.innerHTML =`<strong>Senha</strong>:${responsavel.senha}`


        div.appendChild(h1)
        div.appendChild(nome)
        div.appendChild(cpf)
        div.appendChild(endereco)
        div.appendChild(nascimento)
        div.appendChild(telefone)
        div.appendChild(email)
        div.appendChild(senha)
        div.appendChild(botaoeditar)
        div.appendChild(botaoviagem)
        div.appendChild(botaocriança)
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
        window.location.href= `../loginusuario/perfilusuario.html?id=${idurl} `
}