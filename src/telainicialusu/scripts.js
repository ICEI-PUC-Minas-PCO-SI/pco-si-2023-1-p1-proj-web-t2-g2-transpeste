const urlresponsavel ="https://crud-server-json-trans-peste.vercel.app/responsaveis"
const urlmotorista = "https://crud-server-json-trans-peste.vercel.app/motoristas"
const urlrotas= "https://crud-server-json-trans-peste.vercel.app/rotas"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const selectrota = window.document.querySelector('select#rotas')
const selected = window.document.querySelector('option#selected')
const selectmotorista=window.document.querySelector('select#motorista')
const inputpartida =window.document.querySelector('input#partida')
const inputchegada =window.document.querySelector('input#chegada')
var fundo = document.body;




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
   
   alert('voce ainda não selecionou uma rota')
  } else {
  
    const dadosrotas = await fetch(urlrotas);
    const rotas = await dadosrotas.json();
    const valorrotas = selectrota.value;
  
    rotas.map(
    (post)=>{
        selectmotorista.innerHTML=""
       const textoselectrota = selectrota.options[selectrota.selectedIndex];
       const texto = textoselectrota.text;
      
      
console.log(texto)
      if(texto==post.escola)
      {
      
       var idmotorista = post.motoristasid;
       verificarmotorista(idmotorista)
       
      }
            
        
        
    }
   )
    
}

}

async function bemvindo(idresponsavel) {
   
    const urlresponsavelatualizada = `https://crud-server-json-trans-peste.vercel.app/responsaveis/${idresponsavel}`;
    console.log(urlresponsavelatualizada)
    const dadosresponsavel = await fetch(urlresponsavelatualizada);
    const responsavel = await dadosresponsavel.json(); // Corrigido para motorista em vez de motoristas
    console.log(responsavel.type);
    
   
     alert( ` Bem vindo ${responsavel.nome} ${responsavel.sobrenome}`)
    
}
async function verificarmotorista(idmotorista) {
   
    const urlmotoristaatualizada = `https://crud-server-json-trans-peste.vercel.app/motoristas/${idmotorista}`;
    const dadosmotoristas = await fetch(urlmotoristaatualizada);
    const motorista = await dadosmotoristas.json(); // Corrigido para motorista em vez de motoristas
    console.log(motorista.type);
    
   
    const option = document.createElement('option');
    option.innerText = motorista.nome + " " + motorista.sobrenome; // Corrigido para motorista.nome e motorista.sobrenome
    selectmotorista.appendChild(option);
  }
  
function salvar()
{
   
    console.log(inputpartida.value)
    console.log(inputchegada.value)
    
if(selectrota.value=="null" || selectmotorista.value=="null"|inputchegada.value==""|| inputpartida.value=="")
{
alert('Ta faltando informação doidão')
}
else
{
    alert('preencheu tudo boa garoto')
    window.location.href="../loginusuario/avaliarviagem.html"
}


}

var nomemotorista = "";
var dados = {};

async function enviardados() {
   
  const textoselectrota = selectrota.options[selectrota.selectedIndex];
  const textorota = textoselectrota.text;
  const textoselectmotorista = selectmotorista.options[selectmotorista.selectedIndex];
  const textomotorista = textoselectmotorista.text;
  const textopartida = inputpartida.value;
  const textochegada = inputchegada.value;
  const idmotorista = idurl;

 
}

function redirecionarperfil()
{
    window.location.href = `http://127.0.0.1:5500/src/loginusuario/perfilusuario.html?id=${idurl}`
}
  

  


if(!idurl)
{
    window.location.href="../telainicial/login.html"
}
else
{
 
   bemvindo(idurl)
}