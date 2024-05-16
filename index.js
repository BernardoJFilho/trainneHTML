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
        if (array[index].value === 0){
            mensage.innerHTML = 'Preencha todos os campos'
        } else {
            mensage.innerHTML = ''
            if (checkbox) {
                if (!funcCheckbox(origem, destino)){
                    const mensagem = 'Nao tem passagens de ida e volta para esses lugares';
                    alert(mensagem)
                    check1.checked = false;
                    break;
                }
                else {
                    const mensagem = 'Buscando dados';
                    alert(mensagem);
                    break;
                }
            }
            else {
                const mensagem = 'Buscando dados';
                alert(mensagem);
                break;
            }
        }
    }
}

const funcCheckbox = (param1, param2) => {
    const elements = cidades['idaEvolta'];
    for (let i = 0; i < elements.length - 1; i++) {
        const city1 = elements[i];
        for (let j = 0; j < elements.length; j++) {
            const city2 = elements[j];
            if (param1.value === city1 && param2.value === city2 && city1 !== city2) {
                return true;
            }
        }
    }
    return false;
}

const listaIdaEvolta = cidades.idaEvolta;
const listaIda = cidades.ida;

const criarParagrafo = (city1, city2, idaOuVolta) => {
    const cidade = document.createElement("p");
    const texto = document.createTextNode(`${city1} -> ${city2}, possui ${idaOuVolta ? 'ida e volta' : 'passagem só de ida'}`);
    cidade.appendChild(texto);
    cidade.style.color = idaOuVolta ? 'green' : 'red';
    cidadesId.appendChild(cidade);
}

const gerar = (param) => {
    const isSaoPaulo = param[0] === 'Sao paulo';
    for (let i = 0; i < param.length - 1; i++) {
        const element = param[i];
        for (let j = 0; j < param.length; j++) {
            const element2 = param[j];
            if (element !== element2 && isSaoPaulo) {
                criarParagrafo(element, element2, true);
            }
            if (element !== element2 && !isSaoPaulo) {
                criarParagrafo(element, element2, false)
            }
        }
    }
}

gerar(listaIdaEvolta)
gerar(listaIda)
