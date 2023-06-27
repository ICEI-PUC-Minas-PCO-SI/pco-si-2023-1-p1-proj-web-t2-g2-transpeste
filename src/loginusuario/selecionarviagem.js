const url = "https://crud-server-json-trans-peste.vercel.app/solicitacao";
const url1 = "https://crud-server-json-trans-peste.vercel.app/responsaveis";
const caixa_sugestoes = document.getElementById("caixa_sugestoes");
const dadosurl = new URLSearchParams(window.location.search);
const urlID = dadosurl.get("id");

async function preencher() {
  const preencherDados = await fetch(url);
  const preencherDadosJson = await preencherDados.json();
  preencherDadosJson.map(async (dados) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = await obterNomeSolicitante(dados.solicitante);
    const p = document.createElement("p");
    p.innerHTML =
    "<strong>Rota: </strong>" + dados.escola + "<br>" + "<strong>Partida: </strong>" + dados.partida;
    const aceitar = document.createElement("button");
    aceitar.setAttribute("id", "button1");
    aceitar.setAttribute("onclick", "aceitar()");
    aceitar.innerHTML = "Aceitar";
    const deletar = document.createElement("button");
    deletar.setAttribute("id", "button2");
    deletar.setAttribute("onclick", "deletar()");    
    deletar.innerHTML = "deletar";
    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(aceitar);
    div.appendChild(deletar);
    caixa_sugestoes.appendChild(div);
  });
}

async function obterNomeSolicitante(id) {
  const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/responsaveis/${id}`);
  const data = await response.json();

  if (data && data.nome) {
    return data.nome;
  } else {
    return "Nome não encontrado";
  }
}

preencher();

async function aceitar() {
  const preencherDados1 = await fetch(url + "/" + urlID);
  console.log(url + "/" + urlID);
  const preencherDadosJson1 = await preencherDados1.json();
  const veiculoid = 1;
  console.log(veiculoid);
  const criancasid = preencherDadosJson1.crianca;
  console.log(preencherDadosJson1.crianca);
  const responsavelid = preencherDadosJson1.solicitante;  
  console.log(preencherDadosJson1.solicitante);
  const dados = {
    veiculoid: veiculoid,
    criancas: criancasid,
    responsavel: responsavelid,
  };
  axios
    .post("https://crud-server-json-trans-peste.vercel.app/ocupacao", dados)
    .then(function (response) {
      
    })
    .catch(function (error) {
      alert("Solicitação aceita!");
      location.reload();
    });
}

// async function recusar() {
//   const preencherDados2 = await fetch(url1 + "/" + urlID);
//   const preencherDadosJson2 = await preencherDados2.json();
//   const veiculoid = 1;
//   const criancasid = preencherDadosJson2.criancas;
//   const responsavelid = preencherDadosJson2.responsavel;
//   const dados = {
//     veiculoid: veiculoid,
//     criancas: criancasid,
//     responsavel: responsavelid,
//   };
//   axios
//    .post("https://crud-server-json-trans-peste.vercel.app/ocupacao", dados)
//    .then(function (response) {
//       // Recarregar a página após a solicitação ser recusada
//       location.reload();
//     })
//    .catch(function (error) {
//       alert("Solicitação recusada!");
//     });
// }

async function deletar() {  
  axios
   .delete("https://my-json-server.typicode.com/Machada1/CRUD-SERVER-JSON-TransPeste/responsaveis/1" )
    .then(function (response) {
      
      location.reload();
    })
   .catch(function (error) {
      alert("Deletado!");
      const div = document.createElement("div");
      div.innerHTML = "Deletado!";
      location.reload();
    });
}

function redirecionarhome()
{
        window.location.href= `../telainicialusu/cadastrarrota.html?id=${urlID} `
}

function redirecionarperfil()
{
        window.location.href= `../loginusuario/perfilusuario.html?id=${urlID} `
}
