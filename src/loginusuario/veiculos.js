const urlveiculo ="https://crud-server-json-trans-peste.vercel.app/veiculos"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const campopreencher = document.querySelector('section#peste')


function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${idurl}`
}

async function preencherdados ()
{
const dadosveiculo = await fetch(urlveiculo+`/${idurl}`)
const veiculo = await dadosveiculo.json()
console.log(dadosveiculo)
console.log(veiculo.type)
const div = document.createElement('div')
        const h1 = document.createElement('h1')
         const modelo = document.createElement('p')
         const marca = document.createElement('p')
         const botaoeditar = document.createElement('a')
         const botaoassento = document.createElement('a')
         const spanfotos = document.createElement('span')
         const fotoveiculo = document.createElement('img')
         spanfotos.appendChild(fotoveiculo)
         
         h1.innerHTML = "Seu veículo"
         botaoeditar.innerHTML = "Editar"
         botaoeditar.setAttribute('href',`../loginmotorista/cadastroveiculo.html?id=${veiculo.id}`)
         botaoassento.innerHTML = "Assento"
         botaoassento.setAttribute('href',`../loginusuario/selecionarassento.html?id=${veiculo.id}`)
         modelo.innerHTML = `<strong>Modelo</strong>:${veiculo.modelo}`
         marca.innerHTML = `<strong>Marca</strong>:${veiculo.marca}`
        const placa = document.createElement('p')
        placa.innerHTML =`<strong>Placa</strong>:${veiculo.placa}`
        const ano = document.createElement('p')
        ano.innerHTML = `<strong>Ano</strong>:${veiculo.ano}`
        const assentos = document.createElement('p')
        assentos.innerHTML = `<strong>Assentos</strong>:${veiculo.assentos}`
        const renavam = document.createElement('p')
        renavam.innerHTML = `<strong>Renavam</strong>:${veiculo.renavam}`
        const chassi = document.createElement('p')
        chassi.innerHTML = `<strong>Chassi</strong>:${veiculo.chassi}`
        const motoristasid = document.createElement('p')
        motoristasid.innerHTML = `<strong>Id do motorista:</strong>:${veiculo.motoristasid}`
        const veiculosid = document.createElement('p')
        veiculosid.innerHTML = `<strong>Id do veículo:</strong>:${veiculo.veiculosid}`

        div.appendChild(h1)
        div.appendChild(modelo)
        div.appendChild(placa)
        div.appendChild(marca)
        div.appendChild(ano)
        div.appendChild(assentos)
        div.appendChild(renavam)
        div.appendChild(chassi)
        div.appendChild(botaoeditar)
        div.appendChild(botaoassento)
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
        window.location.href= `../loginmotorista/perfildefi.html?id=${idurl} `
}
