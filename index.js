const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const passagens = document.getElementById("passagens");
const classe = document.getElementById("classe");
const mensage = document.getElementById("mensage");
const check1 = document.getElementById("check1");
const cidadesId = document.getElementById("cidadesId");

function teste(){
    const checkbox = check1.checked
    const array = [origem, destino, passagens, classe];
    for (let index = 0; index < array.length; index++) {
        if (array[index].value == 0){
            mensage.innerHTML = 'Preencha todos os campos'
        } else {
            mensage.innerHTML = ''
        }
    }
    // cidades['ida'].map(element => console.log(element))
}

function renderPage() {
    
}
cidades['idaEvolta'].forEach(element => {
    const cidade = document.createElement("p");
    const text = document.createTextNode(element)
    cidade.appendChild(text);
    cidadesId.appendChild(cidade);
});
// const cidade = document.createElement("p");
// const text = document.createTextNode("salve")
// cidade.appendChild(text);
// cidadesId.appendChild(cidade);



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