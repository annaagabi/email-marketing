// const dotenv = require('dotenv')
// dotenv.config()

emailjs.init({ // Método dentro do emailjs
    publicKey: "GTFgF8LiRkgI-YHA9"
});
// emailjs.init({ // Método dentro do emailjs
//     publicKey: process.env.PUBLIC_KEY
// });

// É um botão que executa uma função
// O handle é um nome global para algo que executa uma função
function handleEmail(){
    let templateParams = { // Parametros do template
        user_name: "Destinatário", // Coloca o nome do seu cliente
        user_email: "annaa0478@gmail.com", // Quem vai receber
        from_name: "Livraria Vellaris", // Quem está mandando
        message: "Ei dev, Thanks? Venho te trazer novidades" // Conteúdo da mensagem
    }

    // Engenharia do email js (emailjs)
    emailjs.send("service_8dhuui9", "template_q1qb1w8", templateParams)
    // emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID_SEND, templateParams)
        .then((res) => {
            console.log("Email enviado com sucesso", res.status, res.text)
        }), (error)=>{
            console.error("erro ao enviar email", error)
        }
}