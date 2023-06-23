const urlresponsavel ="https://crud-server-json-trans-peste.vercel.app/responsaveis"
const urlmotorista = "https://crud-server-json-trans-peste.vercel.app/motoristas"
const urlrotas= "https://crud-server-json-trans-peste.vercel.app/rotas"
const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const selectrota = window.document.querySelector('select#rotas')
const selectmotorista=window.document.querySelector('select#motorista')
const inputpartida =window.document.querySelector('input#partida')
const inputchegada =window.document.querySelector('input#chegada')
var fundo = document.body;
// banco de dados otavio 



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
    console.log(selectrota.text)
    dadosrotas.map(
    (post)=>{
       
            const option = document.createElement('option')
            option.innerText = post.nome + " "+post.sobrenome;
            selectmotorista.appendChild(option)
        
        
    }
   )
    
}

}



function salvar ()
{
    console.log(selectmotorista.value)
    console.log(selectrota.value)
    
if(selectrota.value=="null" || selectmotorista.value=="null"|inputchegada.value==null|| inputchegada.value==null)
{
alert('Ta faltando informação doidão')
}
else
{
    alert('preencheu tudo boa garoto')
    window.location.href="../loginusuario/avaliarviagem.html"
}


}



if(!idurl)
{
    
}
else
{
    
}
