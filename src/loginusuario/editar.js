

const inputnome = document.querySelector('input#nome')
const inputtelefone = document.querySelector('input#telefone')
const inputemail = document.querySelector('input#email')

const urlresponsavel= "https://crud-server-json-trans-peste.vercel.app/responsaveis"
const urlmotoristas= "https://crud-server-json-trans-peste.vercel.app/motoristas"
const urlinteira = new URLSearchParams(window.location.search)
const idurl = urlinteira.get('id')

async function DadosResponsavel(){
    console.log(urlresponsavel+'/'+idurl)
    const dadosnaURL = await fetch(urlresponsavel+'/'+idurl)
    console.log (dadosnaURL)
    const dadosquepegueijason = await dadosnaURL.json()

    inputnome.value = dadosquepegueijason.nome +' '+ dadosquepegueijason.sobrenome
    inputtelefone.value = dadosquepegueijason.telefone 
    inputemail.value = dadosquepegueijason.email
}
DadosResponsavel()

function EditarResponsavel(){
    const nascimento = document.getElementById('nascimento').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereço').value;

    axios
    .get('https://crud-server-json-trans-peste.vercel.app/responsaveis?nascimento=' + nascimento)
    .get('https://crud-server-json-trans-peste.vercel.app/responsaveis?cpf=' + cpf)
    .get('https://crud-server-json-trans-peste.vercel.app/responsaveis?endereco=' + endereco)

    const responsavel = {
        nascimento:nascimento,
        cpf: cpf,
        endereco: endereco
      };

      axios.put('https://crud-server-json-trans-peste.vercel.app/responsaveis', responsavel)
      .then(function(responseCadastro) {
        alert('Informações atualizadas com sucesso!');
        // Redireciona para a página do responsável
        window.location.href = '../loginusuario/perfilusuario.html';
      })
      .catch(function(error) {
        alert('Informações atualizadas com sucesso!');
        console.error('Erro ao salvar informações:', error);
        // Salva as informações mesmo em caso de erro
        window.location.href = '../loginusuario/perfilusuario.html';
      });

}

function salvar(){
    const nome = inputnome.value 
    const telefone = inputtelefone.value
    const email = inputemail.value
}











async function DadosMotoristas(){
    console.log(urlmotoristas+'/'+idurl)
    const dadosnaURL = await fetch(urlmotoristas+'/'+idurl)
    console.log (dadosnaURL)
    const dadosquepegueijason = await dadosnaURL.json()

    inputnome.value = dadosquepegueijason.nome +' '+ dadosquepegueijason.sobrenome
    inputtelefone.value = dadosquepegueijason.telefone 
    inputemail.value = dadosquepegueijason.email
}
DadosMotoristas()

function salvar(){
    const nome = inputnome.value 
    const telefone = inputtelefone.value
    const email = inputemail.value
}