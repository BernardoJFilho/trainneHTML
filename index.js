const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const passagens = document.getElementById("passagens");
const classe = document.getElementById("classe");
const mensage = document.getElementById("mensage");
const check1 = document.getElementById("check1");
const cidadesId = document.getElementById("cidadesId");

const cidades = { 
    'idaEvolta': [
        'Sao paulo',
        'Rio de janeiro',
        'Salvador',
        'Curitiba',
        'Recife',
    ],
    'ida': [
        'Brasilia', 
        'Fortaleza',
        'Belo Horizonte',
        'Manaus',
    ]
}

function teste(){
    const checkbox = check1.checked
    const array = [origem, destino, passagens, classe];
    for (let index = 0; index < array.length; index++) {
        if (array[index].value == 0){
            mensage.innerHTML = 'Preencha todos os campos'
        } else {
            mensage.innerHTML = ''
            if (checkbox == true) {
                for (let i = 0; i < cidades['idaEvolta'].length - 1; i++) {
                    const element = cidades['idaEvolta'];
                    if (origem.value == element[i] && destino.value == element[i + 1]) {
                        alert('passou');
                        break
                    } else {
                        console.log('nao passou');
                    }
                }
            }
        }
    }
}

const listaIdaEvolta = cidades.idaEvolta;
const listaIda = cidades.ida;

const gerar = (param) => {
    for (let i = 0; i < param.length - 1; i++) {
        const cidade = document.createElement("p");
        const text = document.createTextNode(`${param[i]} -> ${param[i + 1]}, possui ida e volta`)
        cidade.appendChild(text);
        cidadesId.appendChild(cidade);
    }
}

gerar(listaIdaEvolta)
gerar(listaIda)


function renderPage() {
    console.log('click');
}

