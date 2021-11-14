document.querySelector('.formprincipal').innerHTML = `
    <h2>Cadastre-se para receber as <br> principais notiticas do mundo da informática!</h2>
    <form action="" classs="form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome"/>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Digite seu email">
        <label for="texto">Digite aqui sua mensagem:</label>
        <textarea name="" id="mensagem" cols="30" rows="10" placeholder="Sua mensagem aqui"></textarea>
        <input type="submit" value="enviar" id="enviar" onclick="enviarArquivo(event)">
    </form>


`
var listaDeMensagens = [];
const mensagemTExto = document.querySelector('#mensagem');
const enviarBotao = document.querySelector('#enviar');
enviarBotao.addEventListener('click', alertaEProm)

function enviarArquivo(event) {
    const divFormulario = document.querySelector('.formprincipal');
    divFormulario.style.display = "none";
    event.preventDefault();
    listaDeMensagens = mensagemTExto.value;
    console.log(listaDeMensagens)
}

function alertaEProm() {
    alert('Mensagem enviada com sucesso');
    let escolha = confirm('deseja retornar a navegação?');
    if (escolha == true) {
        window.location.href = './index.html';
    } else { document.querySelector('.formprincipal').style.display = "block" }

}