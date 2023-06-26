const url = "https://crud-server-json-trans-peste.vercel.app/solicitacao";
const caixa_sugestoes = document.getElementById("caixa_sugestoes");
const dadosurl = new URLSearchParams(window.location.search);
const urlID = dadosurl.get("id");

async function preencher(){
    const preencherDados = await fetch(url + "/" + urlID);
    const preencherDadosJson = await preencherDados.json();   
    console.log(urlID);

        const h2 = document.createElement("h2");
        h2.innerHTML = preencherDadosJson.solicitante;
        const p = document.createElement("p");
        p.innerHTML = "<strong>Rota: </strong>" + preencherDadosJson.escola + "<br>" + "<strong>Partida: </strong>" + preencherDadosJson.partida;
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
preencher()