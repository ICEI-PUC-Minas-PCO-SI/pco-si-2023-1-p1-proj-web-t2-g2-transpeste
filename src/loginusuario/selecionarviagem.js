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
    h2.innerHTML = await obterNomeMotorista(dados.motoristasid);
    var pesteNome = await obterNomePeste(dados.criancas);
    const p = document.createElement("p");
    p.innerHTML =
    "<strong>Peste: </strong>"+ pesteNome +  "<br><strong>Rota: </strong>" + dados.escola + "<br>" + "<strong>Partida: </strong>" + dados.partida;
    
    const deletar = document.createElement("button");
    deletar.setAttribute("id", "button2");
    deletar.setAttribute("onclick", "deletar()");    
    deletar.innerHTML = "deletar";
    const div = document.createElement("div");
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(deletar);
    caixa_sugestoes.appendChild(div);
  });
}

async function obterNomeMotorista(id) {
  const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/motoristas/${id}`);
  const data = await response.json();
  
  return data.nome; 
}

async function obterNomePeste(id){
  const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/criancas/${id}`);
  const data = await response.json();
 
  return data.nome;
}

preencher();

async function deletar() {  
  axios
   .delete(`https://crud-server-json-trans-peste.vercel.app/solicitacao/${urlID}`)
   alert(`https://crud-server-json-trans-peste.vercel.app/solicitacao/${urlID}`)
    .then(function (response) {
      
      location.reload();
    })
   .catch(function (error) {
      alert("Deletado!");
      
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

if(!urlID)
{
    window.location.href="../telainicial/login.html"
}
