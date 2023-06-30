
  const urlresponsavel ="https://crud-server-json-trans-peste.vercel.app/responsaveis"
const urlmotorista = "https://crud-server-json-trans-peste.vercel.app/motoristas"
const urlrotas= "https://crud-server-json-trans-peste.vercel.app/rotas"
const urlcrianca ="https://crud-server-json-trans-peste.vercel.app/criancas"
const urlsolicitacao = "https://crud-server-json-trans-peste.vercel.app/solicitacao"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const selectrota = window.document.querySelector('select#rotas')
const selected = window.document.querySelector('option#selected')
const selectmotorista=window.document.querySelector('select#motorista')
const inputpartida =window.document.querySelector('input#partida')
const selectcrianca =window.document.querySelector('select#crianca')
var fundo = document.body;
var avaliacao1 
var idmotoristadefi=""

async function preenchercrianca()
{
const dadoscrianca = await fetch(urlcrianca)
const criancajson = await dadoscrianca.json()
var valid =0;
criancajson.map(
  (post)=>{
if(post.responsaveisid==idurl)
{
  valid ++;
  const option = document.querySelector('option')
  option.innerHTML = post.nome
  option.setAttribute("value",`${post.id}`)
    selectcrianca.appendChild(option)
}
  }
)
if(valid==0)
{ const option = document.querySelector('option')
option.innerHTML ="0 crianças cadastrada"
option.setAttribute('value',"null")
selectcrianca.appendChild(option)
}
}
preenchercrianca()

var rotas = ["Santo Agostinho","CEFET", "funec ","Santa Maria","SESI"]

// cria uma função  para receber o banco de dados do otavio 

async function preencherrotas(rotas)
{

    
    
if(rotas==null)
{
    
    const option = document.createElement('option')
    option.innerHTML = 'Sem veiculos'
    selectveiculo.appendChild(option)
}
else
{
  
    for(var i=0;i<rotas.length;i++)
    {
        const option = document.createElement('option')
        option.innerHTML=rotas[i]
        option.setAttribute('value','../imagens/capetinha.png')
        selectrota.appendChild(option)
    }

}

}

preencherrotas(rotas)


async function preenchermotorista() {
    
  if ( selectrota.value=="null") {
   
    $(document).ready(function(){

      Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Selecione uma rota!',
    
  })
    })
  } else {
  
    const dadosrotas = await fetch(urlrotas);
    const rotas = await dadosrotas.json();
    const valorrotas = selectrota.value;
  var valid =0;
    rotas.map(
    (post)=>{
        selectmotorista.innerHTML=""
       const textoselectrota = selectrota.options[selectrota.selectedIndex];
       const texto = textoselectrota.text;
      
      

      if(texto==post.escola)
      {
      valid ++ ;
       var idmotorista = post.motoristasid;
       verificarmotorista(idmotorista)
       
      }
            
        
        
    }
   )
   if(valid==0)
   {
    const option =document.createElement('option')
    option.innerHTML = "Não há motoristas"
    option.setAttribute('value',"null")
    selectmotorista.appendChild(option)
   }
    
}

}





async function verificarmotorista(idmotorista) {
  
    const urlmotoristaatualizada = `https://crud-server-json-trans-peste.vercel.app/motoristas/${idmotorista}`;
    const dadosmotoristas = await fetch(urlmotoristaatualizada);
    const motorista = await dadosmotoristas.json(); // Corrigido para motorista em vez de motoristas
    console.log(motorista.type); 
    const option = document.createElement('option');
    option.innerText = motorista.nome + " " + motorista.sobrenome; // Corrigido para motorista.nome e motorista.sobrenome
    option.setAttribute('value',idmotorista)
    selectmotorista.appendChild(option);
  }
  
  

var nomemotorista = "";
var dados = {};

async function enviardados() {
   

 if(selectrota.value=="null" || selectmotorista.value=="null"|inputpartida.value==""|| selectcrianca.value=="null")
{
 
  $(document).ready(function(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Preencha todas as informações!',
    
  })
})
}
else
{
 
    const textoselectrota = selectrota.options[selectrota.selectedIndex];
    const textorota = textoselectrota.text;
    const textoselectmotorista = selectmotorista.options[selectmotorista.selectedIndex];
    const textomotorista = textoselectmotorista.text;
    const textopartida = inputpartida.value;
    const idcrianca =  selectcrianca.value;
   idmotoristadefi =selectmotorista.value;



  const pedido = {escola:textorota,solicitante:idurl,crianca:idcrianca,avaliacao:avaliacao1,partida:textopartida,motoristasid:idmotoristadefi}

    axios.post('https://crud-server-json-trans-peste.vercel.app/solicitacao',pedido)
  .then(function(response){
      
  }
  )
  .catch(function(error) { $(document).ready(function(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Solicitação salva com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
window.location.reload()
  }) });
  
}
 
}

function redirecionarperfil()
{
    window.location.href = `../loginusuario/perfilusuario.html?id=${idurl}`
}
  

async function pegaravaliacao(idcrianca)
{
  
  const dadoscrianca = await fetch(urlcrianca+"/"+idcrianca)
  const dadoscriancajson = await dadoscrianca.json()

  
return  dadoscriancajson.avalicao;

} 
pegaravaliacao(1).then(function(dados_ocupacao) {avaliacao1=dados_ocupacao} )
        



if(!idurl)
{
    window.location.href="../telainicial/login.html"
}

