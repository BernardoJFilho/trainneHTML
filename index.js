const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const passagens = document.getElementById("passagens");
const classe = document.getElementById("classe");
const mensage = document.getElementById("mensage");
const check1 = document.getElementById("check1");
const cidadesId = document.getElementById("cidadesId");
const listaIdaEvolta = cidades.idaEvolta;
const listaIda = cidades.ida;
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
    const element = cidades.idaEvolta;
    if (checkbox == true) {
        for (let i = 0; i < element.length - 1; i++) {
            if (origem.value == element[i] && destino.value == element[i + 1]) {
                console.log('passou');
            } else {
                console.log('nao passou');
            }
        }
    }
    const array = [origem, destino, passagens, classe];
    for (let index = 0; index < array.length; index++) {
        if (array[index].value == 0){
            mensage.innerHTML = 'Preencha todos os campos'
        } else {
            mensage.innerHTML = ''
        }
    }
}




for (let i = 0; i < listaIdaEvolta.length - 1; i++) {
    const cidade = document.createElement("p");
    const text = document.createTextNode(`${listaIdaEvolta[i]} -> ${listaIdaEvolta[i + 1]}, possui ida e volta`)
    cidade.appendChild(text);
    cidadesId.appendChild(cidade);
}


for (let i = 0; i < listaIda.length - 1; i++) {
    const cidade = document.createElement("p");
    const text = document.createTextNode(`${listaIda[i]} -> ${listaIda[i + 1]}, não possui ida e volta`)
    cidade.appendChild(text);
    cidadesId.appendChild(cidade);
}

function renderPage() {
    console.log('click');
}

