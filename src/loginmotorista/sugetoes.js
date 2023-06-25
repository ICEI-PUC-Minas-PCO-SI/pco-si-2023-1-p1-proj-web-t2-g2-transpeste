const url = "https://crud-server-json-trans-peste.vercel.app/solicitacao";
const caixa_sugestoes = document.getElementById("caixa_sugestoes");

async function preencher(){
    const preencherDados = await fetch(url);
    const preencherDadosJson = await preencherDados.json();    
    preencherDadosJson.map(
        (dados) => {
            const h2 = document.createElement("h2");
            h2.innerHTML = dados.solicitante;
            const p = document.createElement("p");
            p.innerHTML = "<strong>Rota: </strong>" + dados.escola + "<br>" + "<strong>Partida: </strong>" + dados.partida;
            const aceitar = document.createElement("button");
            aceitar.setAttribute("id","button1") 
            aceitar.innerHTML = "Aceitar";
            const recusar = document.createElement("button");
            recusar.setAttribute("id","button2");
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
