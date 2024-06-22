const cadastro = document.querySelector(".cadastro")

const nome = document.querySelector('.nome')
const sobrenome = document.querySelector('.sobrenome')
const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const confirmSenha = document.querySelector('.confirmSenha')

const spanName = document.querySelector('.span-name')
const spanSobrenome = document.querySelector('.span-sobrenome')
const spanEmail = document.querySelector('.span-email')
const spanSenha = document.querySelector('.span-senha')
const spanConfirmSenha = document.querySelector('.spam-ConfirmSenha')


function cadastrar(){
    fetch("http://localhost:8080/usuarios", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },

        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            sobrenome: sobrenome,
            email: email,
            senha: senha
        
        })
    })
    .then(function(res) {console.log(res)})
    .catch(function(res) {console.log(res)})
}


function limparCampos(){
    nome = ""
    sobrenome = ""
    email = ""
    senha = ""
    confirmSenha = ""
}



cadastro.addEventListener('click', function(e){
    e.preventDefault()

    //cadastrar()
    //limparCampos()
    if(nameValidation() && sobrenomeValidation() && emailValidation() && senhaValidation()){
        setTimeout((item) =>{
            window.location.href = "http://127.0.0.1:5500/index.html"
        }, 3000)
    }

   
})

function nameValidation(){
    const regex = /^[a-zA-Z\s]+$/

    function validationNum(){
        return regex.test(nome.value)
    }

    if(nome.value.length < 3 || !nome.value || !validationNum()){
        spanName.style.color = "red"
        return false
    } else{
        spanName.style.color = "green"
        return true
    }
}



function sobrenomeValidation(){
    const regex = /^[a-zA-Z\s]+$/

    function validationSobre(){
        return regex.test(sobrenome.value)
    }

    if(sobrenome.value.length < 4 || !sobrenome.value || !validationSobre()){
        spanSobrenome.style.color = "red"
        return false
    } else{
        spanSobrenome.style.color = "green"
        return true
    }
}


function emailValidation(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    function validationEmail(){
        return regex.test(email.value)
    }

    if(email.value.length < 4 || !email.value || !validationEmail()){
        spanEmail.style.color = "red"
        return false
    } else{
        spanEmail.style.color = "green"
        return true
    }
}

function senhaValidation(){
    if(senha.value.length < 5 || !senha.value && confirmSenha.value !== senha.value){
        spanSenha.style.color = "red"
        spanConfirmSenha.style.color = "red"
        return false
    } else{
        spanSenha.style.color = "green"
        if(senha.value === confirmSenha.value) {
            spanConfirmSenha.style.color = "green"  
            spanConfirmSenha.innerHTML = "Insira uma senha com pelo menos 5 caracter"
            return true
        } else{
            spanConfirmSenha.innerHTML = "Senhas não coincidem"
            spanConfirmSenha.style.color = "red"
        }
    }
}



