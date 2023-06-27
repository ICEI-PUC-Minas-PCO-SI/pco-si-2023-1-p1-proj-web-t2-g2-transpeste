const url = "https://crud-server-json-trans-peste.vercel.app/solicitacao";
const caixa_sugestoes = document.getElementById("caixa_sugestoes");
const dadosurl = new URLSearchParams(window.location.search);
const urlID = dadosurl.get("id");

async function preencher(){
    const preencherDados = await fetch(url);
    const preencherDadosJson = await preencherDados.json();    
    preencherDadosJson.map(
        (dados) => {
            const h2 = document.createElement("h2");
            h2.innerHTML = obterNomeSolicitante(dados.solicitante);
            h2.innerHTML = dados.solicitante;
            const p = document.createElement("p");
            p.innerHTML = "<strong>Rota: </strong>" + dados.escola + "<br>" + "<strong>Partida: </strong>" + dados.partida;
            const aceitar = document.createElement("button");
            aceitar.setAttribute("id","button1") 
            aceitar.setAttribute("onclick", "aceitar()");
            aceitar.innerHTML = "Aceitar";
            const recusar = document.createElement("button");            
            recusar.setAttribute("id","button2");
            recusar.setAttribute("onclick", "recusar()");
            recusar.innerHTML = "Recusar";
            const div = document.createElement("div");
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(aceitar);
            div.appendChild(recusar);
            caixa_sugestoes.appendChild(div);
        }
    )
}
preencher()

async function aceitar() { 
    const id = document.getElementById("button1").getAttribute("id");
    const url = `https://crud-server-json-trans-peste.vercel.app/solicitacao/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: "Aceito"
        })
    })
    alert("Solicitação Aceita com sucesso!");
    window.location.href= `../loginmotorista/cadastrarrota.html?id=${id} `
}

async function recusar() { 
    const id = document.getElementById("button2").getAttribute("id");
    const url = `https://crud-server-json-trans-peste.vercel.app/solicitacao/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: "Recusado"
        })
    })
    alert("Solicitação Recusada com sucesso!");
    window.location.href= `../loginmotorista/cadastrarrota.html?id=${id} `   
}

async function obterNomeSolicitante(id) {
    const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/solicitacao/${urlID}`);
    const data = await response.json();
  
    if (data && data.nome) {
      return data.nome;
    } else {
      return "Nome não encontrado";
    }
  }

function redirecionarhome()
{
    window.location.href= `../loginmotorista/cadastrarrota.html?id=${urlID} `
}

function redirecionarperfil()
{
    window.location.href= `../loginmotorista/perfildefi.html?id=${urlID} `
}
