// console.log("funcionou")

(function(){
    // console.log("entrou aqui")
    emailjs.init({
        publicKey:"SYpBXsW0esAkB8Dil",
    })
})();


document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault()
    emailjs.sendForm("service_u6xt6wv","template_i6si4pf", this).then(
        function(){
            console.log("sucess")
            alert("Email enviado com sucesso")
        }
    ), function(err){
        console.log("Fail", err)
        alert("Falha ao enviar o e-mail, tente mais tarde!")
    }

})