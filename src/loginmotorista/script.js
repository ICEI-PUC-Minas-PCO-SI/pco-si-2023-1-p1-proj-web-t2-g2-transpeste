const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
const urlrotas = 'https://crud-server-json-trans-peste.vercel.app/rotas'
const urlsolicitacao = "https://crud-server-json-trans-peste.vercel.app/solicitacao"
const urlveiculos = "https://crud-server-json-trans-peste.vercel.app/veiculos"
const inputpartida =window.document.querySelector('input#partida')
const inputchegada =window.document.querySelector('input#chegada')
const selectrota = window.document.querySelector('select#rotas')
var rotas = ["Santo Agostinho","CEFET", "funec ","Santa Maria","SESI"]
const selectmotorista=window.document.querySelector('select#motorista')



function preencherrotas()
{
    for(var i=0;i<rotas.length;i++)
    {
        const option = document.createElement('option')
        option.innerHTML = rotas[i]
        selectrota.appendChild(option)
    }
}preencherrotas()

async function preenhcerveiculo()
{var valid =0;
    selectmotorista.innerHTML =" "
    const urlfetch = await fetch (urlveiculos)
    const dadosurljson = await urlfetch.json()

    dadosurljson.map(
        (post)=>{
            console.log(post.motoristasid)
            if(post.motoristasid==idurl)
            {
                valid ++;
                console.log(post.motoristasid)
                const option = document.createElement('option')
                option.innerHTML =post.modelo+" "+  post.placa
                option.setAttribute('value',`${post.placa}`)
                console.log(option.value)
                selectmotorista.appendChild(option)
            }
        }
       
    )
    if(valid==0)
    {
        const option = document.createElement('option')
        option.innerHTML ="0 veiculos cadastrados" 
        option.setAttribute("value","null")
        selectmotorista.appendChild(option) 
    }
}

async function verificarveiculovazio()
{
const dadosveiculo = await fetch(urlveiculos)
const dadosveiculojson = await dadosveiculo.json()
var valid = 0;
dadosveiculojson.map(
    (post)=>{
        if(post.motoristasid==idurl)
        {
valid ++
        }
        
    }
   
)
if(valid==0)
{


    $(document).ready(function(){
        Swal.fire({
            icon: 'info',
            title: '<strong>Você não tem veiculos cadastrados</strong>',
            text: 'Cadastre seu veiculo para começar a fazer viagens',
            footer: '<a href="../loginmotorista/cadastroveiculo.html?id='+idurl+'">Castrar veiculo</a>'
          })
    })
}
 }

 verificarveiculovazio()

 

async function enviardados()
{
    const dadosrota = await fetch(urlrotas)
    const rotajson = await dadosrota.json()
     var validrota =0

     rotajson.map(
    (post)=>{
        if(idurl==post.motoristasid)
        {
            console.log('entreiaqui')
            if(selectmotorista.value==post.placaveiculo && selectrota.value==post.escola)
            {
validrota ++
            }
        }
    }
)
console.log(validrota)
if(validrota>0)
{
    console.log('mai de uma rota')
    $(document).ready(function(){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ja existe rota atrelada a esse veiculo!',
          
        })
      })
}
else
{
    console.log(validrota)
    if(selectmotorista.value=="null")
    {
        console.log("aqui")
        $(document).ready(function(){
            Swal.fire({
                icon: 'info',
                title: '<strong>Você não tem veiculos cadastrados</strong>',
                text: 'Cadastre seu veiculo para começar a fazer viagens',
                footer: '<a href="../loginmotorista/cadastroveiculo.html?id='+idurl+'">Castrar veiculo</a>'
              })
        })
    }
    else if(selectrota.value=="null" || inputchegada.value==""|| inputpartida.value=="")
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
    
    const pedido = {
        escola:textorota,motoristasid:idurl,placaveiculo:selectmotorista.value
    }
    axios.post('https://crud-server-json-trans-peste.vercel.app/rotas',pedido)
    .then(function(response){
        
    }
    )
    .catch(function(error) {  
        window.location.reload()
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Rota Cadastrada',
        showConfirmButton: false,
        timer: 1500
      }) 
    
    });
    }
}
    
}

function redirecionarperfil()
{
    window.location.href = `../loginusuario/perfil_motorista.html?id=${idurl}`
}

  


if(!idurl)
{
    window.location.href="../telainicial/login.html"
}
