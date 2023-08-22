const express = require("express")
const router = express.Router()

const app = express()
const porta = 8080

const mulheres = [
    {
        nome: 'Marianna Veras',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFSJ4bMLDGTHw/profile-displayphoto-shrink_800_800/0/1688498522348?e=1698278400&v=beta&t=rKggyaY2HrydPhlArWofUDUxeaTFGwX0bOuaTi7Hlfs',
        miniBio: 'Design e Agilista'
    },
    {
        nome: 'Iana Chan',
        imagem: '',
        miniBio: 'Fundadora do PrograMaria'
    },
    {
        nome: 'Marianna Maldi',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFSJ4bMLDGTHw/profile-displayphoto-shrink_800_800/0/1688498522348?e=1698278400&v=beta&t=rKggyaY2HrydPhlArWofUDUxeaTFGwX0bOuaTi7Hlfs',
        miniBio: 'Design e Mae'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)