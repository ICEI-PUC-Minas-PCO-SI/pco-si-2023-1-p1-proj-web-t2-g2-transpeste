var page = 1;
var info = [];

const dadosurl = new URLSearchParams(window.location.search)
const idurl = dadosurl.get('id')

// if(!idurl)
// {
//     window.location.href="../telainicial/login.html"
// }


$(document).ready(function () {

    getAssentos()
        .then(function (dados_ocupacao) {
            var promises = dados_ocupacao.map(function (obj) {
                return Promise.all([getCrianca(obj), getVeiculo(obj), getResponsavel(obj)])
                    .then(function (results) {
                        var crianca = results[0];
                        var veiculo = results[1];
                        var responsavel = results[2];
                        montaobj(obj, crianca, veiculo, responsavel);
                    });
            });

            return Promise.all(promises);
        })
        .then(function () {
            drawCards(0);
            retirarCrianca();
            paginationFunctions();
        })
        .catch(function (error) {
            console.error(error);
        });
});


function redirecionarhome() {
    window.location.href = `../loginmotorista/cadastrarrota.html?id=${idurl} `
}

function redirecionarperfil() {
    window.location.href = `../loginusuario/perfil_motorista.html?id=${idurl} `
}


function getAssentos() {
    return axios.get('https://crud-server-json-trans-peste.vercel.app/ocupacao')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });
}

function getCrianca(dados_ocupacao) {

    return axios.get('https://crud-server-json-trans-peste.vercel.app/criancas?id=' + dados_ocupacao.criancas)
        .then(function (response) {

            return response.data[0];
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });


}

function getResponsavel(dados_ocupacao) {

    return axios.get('https://crud-server-json-trans-peste.vercel.app/responsaveis?id=' + dados_ocupacao.responsavel)
        .then(function (response) {
            return response.data[0];
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });

}

function getVeiculo(dados_ocupacao) {

    return axios.get('https://crud-server-json-trans-peste.vercel.app/veiculos?id=' + dados_ocupacao.veiculoid)
        .then(function (response) {
            return response.data[0];
        })
        .catch(function (error) {
            console.error(error);
            throw error;
        });

}

function montaobj(assento, crianca, veiculo, responsavel) {

    var idlink = crianca ? crianca.id : ''
    var obj = {
        numAssento: assento.id,
        idCrianca: crianca ? crianca.id : '',
        nomeCrianca: crianca ? crianca.nome : '',
        telCrianca: crianca ? crianca.telefone : '',
        enderecoEscola: crianca ? crianca.endereco_escola : '',
        nomeEscola: crianca ? crianca.nome_escola : '',
        nomeResponsavel: responsavel ? responsavel.nome : '',
        telResponsavel: responsavel ? responsavel.telefone : '',
        endeResponsavel: responsavel ? responsavel.endereco : '',
        veiculoNome: veiculo ? veiculo.marca + ' - ' + veiculo.modelo : '',
        link: '../loginmotorista/avaliarpeste.html?id=' + idurl + '&idcrianca=' + idlink
    }

    info.push(obj);

}

function retirarCrianca() {

    var controle = false;


    document.addEventListener('click', function (event) {

        if (event.target.classList == 'btn btn-danger') {
            Swal.fire({
                title: 'Deseja retirar a peste deste assento?',
                showDenyButton: true,
                confirmButtonText: 'Retirar',
                denyButtonText: `Não Retirar`,
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(`https://crud-server-json-trans-peste.vercel.app/ocupacao/${event.target.id}`)
                        .then(function (response) {

                        })

                    controle = true;

                } else if (result.isDenied) {
                    Swal.fire('A peste não foi retirada', '', 'info')
                }
            })
        }

    })

    if (controle == true) {
        location.reload();
    }

}

function paginationFunctions() {

    document.addEventListener('click', function (event) {

        if (event.target.id == 'nextBtn' && page < products.length / 9) {
            page++;
            document.querySelector("#numberBtn").textContent = page
            drawCards(0 + 9 * (page - 1));
        }

        if (event.target.id == 'previousBtn' && page != 1) {
            page--;
            document.querySelector("#numberBtn").textContent = page
            drawCards(0 + 9 * (page - 1));
        }

        if (event.target.id == 'firstBtn' && page != 1) {
            page = 1;
            document.querySelector("#numberBtn").textContent = page
            drawCards(0 + 9 * (page - 1));
        }

        if (event.target.id == 'lastBtn') {
            page = parseInt(products.length / 9) + 1;
            document.querySelector("#numberBtn").textContent = page
            drawCards(0 + 9 * (page - 1));
        }

    });

}

function drawCards(page) {

    var innerCol1 = '';
    var innerCol2 = '';
    var innerCol3 = '';

    info.sort((a, b) => {

        return a.numAssento - b.numAssento;

    });

    if (info.length > 0) {

        for (var i = page; i < page + 3; i++) {
            if (i < info.length)
                innerCol1 += '<div class="card" style="width: 80%;">\
            <div class="card-body">\
            <h5 class="card-title">Assento ' + info[i].numAssento + ' <button type="button" class="btn btn-danger" id="' + info[i].numAssento + '" style = "width: 30%; height: 10%; float: right;"><i class="fa-solid fa-xmark"></i></button> </h5>\
            </div>\
            <ul class="list-group list-group-flush">\
            <li class="list-group-item">Nome da peste: ' + info[i].nomeCrianca + '</li>\
            <li class="list-group-item">Nome da escola da peste: ' + info[i].nomeEscola + '</li>\
            <li class="list-group-item">Endereço da escola da peste: ' + info[i].enderecoEscola + '</li>\
            <li class="list-group-item">Nome do pai: ' + info[i].nomeResponsavel + '</li>\
            <li class="list-group-item">Endereço do pai: ' + info[i].endeResponsavel + '</li>\
            <li class="list-group-item">Telefone do pai: ' + info[i].telResponsavel + '</li>\
            <li class="list-group-item">Van aderida: ' + info[i].veiculoNome + '</li>\
            <li class="list-group-item"><a target = "_blank" href = "' + info[i].link + '" style="text-align: right;">Avalie a criança</a></li>\
            </ul>\
            </div>\
            </div>\
            <br>\
            <br>';

        }

        page = page + 3;

        for (var i = page; i < page + 3; i++) {
            if (i < info.length)
                innerCol2 += '<div class="card" style="width: 80%;">\
        <div class="card-body">\
        <h5 class="card-title">Assento ' + info[i].numAssento + ' <button type="button" class="btn btn-danger" id="' + info[i].numAssento + '" style = "width: 30%; height: 10%; float: right;"><i class="fa-solid fa-xmark"></i></button> </h5>\
        </div>\
        <ul class="list-group list-group-flush">\
        <li class="list-group-item">Nome da peste: ' + info[i].nomeCrianca + '</li>\
        <li class="list-group-item">Nome da escola da peste: ' + info[i].nomeEscola + '</li>\
        <li class="list-group-item">Endereço da escola da peste: ' + info[i].enderecoEscola + '</li>\
        <li class="list-group-item">Nome do pai: ' + info[i].nomeResponsavel + '</li>\
        <li class="list-group-item">Endereço do pai: ' + info[i].endeResponsavel + '</li>\
        <li class="list-group-item">Telefone do pai: ' + info[i].telResponsavel + '</li>\
        <li class="list-group-item">Van aderida: ' + info[i].veiculoNome + '</li>\
        <li class="list-group-item"><a target = "_blank" href = "' + info[i].link + '" style="text-align: right;">Avalie a criança</a></li>\
        </ul>\
        </div>\
        </div>\
        <br>\
        <br>';
        }

        page = page + 3;

        for (var i = page; i < page + 3; i++) {
            if (i < info.length)
                innerCol3 += '<div class="card" style="width: 80%;">\
        <div class="card-body">\
        <h5 class="card-title">Assento ' + info[i].numAssento + ' <button type="button" class="btn btn-danger" id="' + info[i].numAssento + '" style = "width: 30%; height: 10%; float: right;"><i class="fa-solid fa-xmark"></i></button> </h5>\
        </div>\
        <ul class="list-group list-group-flush">\
        <li class="list-group-item">Nome da peste: ' + info[i].nomeCrianca + '</li>\
        <li class="list-group-item">Nome da escola da peste: ' + info[i].nomeEscola + '</li>\
        <li class="list-group-item">Endereço da escola da peste: ' + info[i].enderecoEscola + '</li>\
        <li class="list-group-item">Nome do pai: ' + info[i].nomeResponsavel + '</li>\
        <li class="list-group-item">Endereço do pai: ' + info[i].endeResponsavel + '</li>\
        <li class="list-group-item">Telefone do pai: ' + info[i].telResponsavel + '</li>\
        <li class="list-group-item">Van aderida: ' + info[i].veiculoNome + '</li>\
        <li class="list-group-item"><a target = "_blank" href = "' + info[i].link + '" style="text-align: right;">Avalie a criança</a></li>\
        </ul>\
        </div>\
        </div>\
        <br>\
        <br>';
        }

        document.querySelector(".card-holder").innerHTML = innerCol1;
        document.querySelector(".card-holder2").innerHTML = innerCol2;
        document.querySelector(".card-holder3").innerHTML = innerCol3;

    }
}
