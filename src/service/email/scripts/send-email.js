emailjs.init({
    publicKey: "GTFgF8LiRkgI-YHA9"
})

function handleEmail(){
    let templateParams = {
        name: "Destinatário",
        from_name: "Suporte de Domingo",
        message: "Conteúdo da mensagem..."
    }

    emailjs.send("service_8dhuui9", )
}