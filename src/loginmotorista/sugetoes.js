const urlsolicitacao = "https://crud-server-json-trans-peste.vercel.app/solicitacao";
const caixa_sugestoes = document.getElementById("caixa_sugestoes");
const dadosurl = new URLSearchParams(window.location.search);
const urlID = dadosurl.get("id");
const urlocupacao = "https://crud-server-json-trans-peste.vercel.app/ocupacao"
async function preencher(){
    const preencherDados = await fetch(urlsolicitacao);
    const preencherDadosJson = await preencherDados.json();    
    preencherDadosJson.map(
        async(dados) => {
            $(document).ready(async function () {
                if(urlID==dados.motoristasid)
            {
                const h2 = document.createElement("h2");
                h2.innerHTML = await obterNomeSolicitante(dados.solicitante);
                var pesteNome = await obterNomePeste(dados.crianca);
                const p = document.createElement("p");
                p.innerHTML = "<strong>Peste: </strong>"+ pesteNome + "<br>" + "<strong>Rota: </strong>" + dados.escola + "<br>" + "<strong>Partida: </strong>" + dados.partida;
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
        })           
        }
        
    )
}
preencher()

async function aceitar() { 
    
const dadosurl = await fetch(urlsolicitacao+"/"+urlID)
const urljson = await dadosurl.json()
console.log(urlsolicitacao+"/"+1)
console.log(urljson)
console.log(urljson.crianca)
console.log(urljson.solicitante)
const pedido = {
    veiculoid : 1,
    criancas :1,
    responsavel:1,

}

axios.post(urlocupacao,pedido)
.then(function(response){
      
}
)
.catch(function(error) {      
    
axios.delete(urlsolicitacao+"/"+1)
.then(function () {})
.catch(function(error) {
    
    $(document).ready(function(){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Solicitação aceita!',
            showConfirmButton: false,
            timer: 1500
        })
    }) 
})
setTimeout(function() {
    window.location.href= `../loginmotorista/sugestoes.html?id=${urlID} `;            
  },1200)

})
    
}

async function recusar() { 
    
    axios.delete(urlsolicitacao+"/"+1)
    .then(function () {})
    .catch(function(error) {
        
        $(document).ready(function(){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Solicitação cancelada!',
                showConfirmButton: false,
                timer: 1500
            })
        })
        setTimeout(function() {
            window.location.href= `../loginmotorista/sugestoes.html?id=${urlID} `;            
          },1200)    
    
    })
}

async function obterNomeSolicitante(id) {
    const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/responsaveis/${id}`);
    const data = await response.json();
    
    return data.nome; 
  }

  async function obterNomePeste(id){
    const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/criancas/${id}`);
    const data = await response.json();
   
    return data.nome;
  }

  async function obterNomeMotorista(id) {
    const response = await fetch(`https://crud-server-json-trans-peste.vercel.app/motoristas/${id}`);
    const data = await response.json();
    
    return data.nome; 
  }

  function redirecionarhome()
  {
          window.location.href= `../loginmotorista/cadastrarrota.html?id=${urlID} `
  }
  
  function redirecionarperfil()
  {
          window.location.href= `../loginusuario/perfil_motorista.html?id=${urlID} `
  }


