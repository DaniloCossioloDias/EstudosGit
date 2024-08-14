function enviarDados() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let data = document.getElementById("data").value;
    let div = document.getElementById("area-texto");
    
    div.innerHTML = nome, cpf, data;
    
}