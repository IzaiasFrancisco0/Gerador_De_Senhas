

function addArray(){

const uppercase = document.getElementById("letras_maiuscula").checked;
const lowercase = document.getElementById("letras_minusculas").checked;
const numero = document.getElementById("numero").checked;
const caracter = document.getElementById('caracter_especial').checked;


let arraySenha = [];

    if(uppercase){
        arraySenha.push("AEIOUFGHIOKLMNOPQRSTUVWXYZ")
    }
    if(lowercase){
        arraySenha.push("aeioufghijklmnopqrstuvwxyz")
    }
    if(numero){
        arraySenha.push("12345678910");
    }
    if(caracter){
        arraySenha.push("/.^@#$*&!");
    }
    return arraySenha;
}
function quantidadeValor(){
    const quantidade = document.getElementById("quantidade").value;
    if(isNaN(quantidade) || quantidade < 10 || quantidade > 40 ){
        alert("Digite um número entre 15 e 50");
        return null;
    }
    return parseInt(quantidade);
}

function randomCharTypes(arraySenha){
    const randomIndex = Math.floor(Math.random() * arraySenha.length);
    return arraySenha[randomIndex][Math.floor(Math.random() * arraySenha[randomIndex].length)];
}

function generatePassword(quantidade, arraySenha){
    let passwordGenerate = '';
    while(passwordGenerate.length < quantidade){
        passwordGenerate += randomCharTypes(arraySenha);
    }
    return passwordGenerate;
}

const gerarSenha = document.getElementById("gerarSenha");

gerarSenha.addEventListener('click', function(){
    const senhaInput = document.getElementById("senha")

    const quantidade = quantidadeValor();
    if(quantidade !== null){
       const senhaGerada = generatePassword(quantidade, addArray());
        senhaInput.value = senhaGerada;
    }
})

const copiarSenha = document.getElementById("copiarSenha");

copiarSenha.addEventListener('click', function(){
    const senhaInput = document.getElementById("senha").value
    navigator.clipboard.writeText(senhaInput).then(function() {
        alert("Senha copiada: " + senhaInput);
        senhaInput.textContent = '';
    }, function(err) {
        console.error('Erro ao copiar senha: ', err);
    });
})

