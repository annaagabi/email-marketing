// console.log("funcionou")

(function(){ // Função anônima
    // console.log("entrou aqui")
    emailjs.init({ // Está estartando
        publicKey:"GTFgF8LiRkgI-YHA9",
    })
})();

// Document é uma ref - ele pega o documento que está sendo renderizado (nesse caso o html)
document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault()
    // Service ID e template ID do Email JS (o template ID é o código do index com o email)
    emailjs.sendForm("service_8dhuui9","template_wirhgjs", this).then(
        function(){
            //Caso de certo
            console.log("sucess")
            alert("Email enviado com sucesso")
        }
    ), function(err){
        // Caso de erro
        console.log("Fail", err)
        alert("Falha ao enviar o e-mail, tente mais tarde!")
    }

})