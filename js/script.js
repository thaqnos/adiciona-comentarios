let formulario = document.getElementById("formulario-de-comentarios")

formulario.addEventListener("submit", function(evento){
    //preventDefault() - previne ações default do submit (que é um evento) que é recarregar a página
    evento.preventDefault()

    //captar o elemento de input para guardar a mensagem
    let inputForm = document.getElementById("input-formulario")
    
    //pegar o >valor< do input fornecido pelo usuário e guardar em uma variável
    let mensagem = inputForm.value

    // pegar a div 
    let divComentarios = document.getElementById("todos-os-comentarios")

    // criar um >parágrafo<
    let comentarios = document.createElement("p")

    // adicionar estilo ao comentário
    comentarios.classList.add("comentario")

    // colocar o parágrafo que eu criei como filho da div
    divComentarios.appendChild(comentarios)
    
    // colocar o conteúdo na outra div
    comentarios.textContent = mensagem

})
