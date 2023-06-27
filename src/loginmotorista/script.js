const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')
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
                selectmotorista.appendChild(option)
            }
        }
       
    )
    if(valid==0)
    {
        const option = document.createElement('option')
        option.innerHTML ="0 veiculos cadastrados" 
        selectmotorista.appendChild(option) 
    }
}

function enviardados()
{
    if(selectrota.value=="null" || selectmotorista.value=="null"|inputchegada.value==""|| inputpartida.value=="")
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
        escola:textorota,motoristasid:idurl
    }
    axios.post('https://crud-server-json-trans-peste.vercel.app/rotas',pedido)
    .then(function(response){
        
    }
    )
    .catch(function(error) {   Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Rota Cadastrada',
        showConfirmButton: false,
        timer: 1500
      })  });
    }
}

function redirecionarperfil()
{
    window.location.href = `../loginusuario/perfil_motorista.html?id=${idurl}`
}

async function bemvindo(idresponsavel) {
   
    const urlresponsavelatualizada = `https://crud-server-json-trans-peste.vercel.app/motoristas/${idresponsavel}`;
    console.log(urlresponsavelatualizada)
    const dadosresponsavel = await fetch(urlresponsavelatualizada);
    const responsavel = await dadosresponsavel.json(); // Corrigido para motorista em vez de motoristas
    console.log(responsavel.type);
    
   
    $(document).ready(function(){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: ` Bem vindo ${responsavel.nome} ${responsavel.sobrenome}`,
          showConfirmButton: false,
          timer: 1500
        })
        
       })
    
}

if(!idurl)
{
    window.location.href="../telainicial/login.html"
}
else
{
 
   bemvindo(idurl)
}