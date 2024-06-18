const cadastro = document.querySelector(".cadastro")

const nome = document.querySelector('.nome')
const sobrenome = document.querySelector('.sobrenome')
const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const confirmSenha = document.querySelector('.confirmSenha')


function cadastrar(){
    fetch("http://localhost:8080/usuarios", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },

        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            senha: senha.value
        
        })
    })
    .then(function(res) {console.log(res)})
    .catch(function(res) {console.log(res)})
}


function limparCampos(){
    nome.value = ""
    sobrenome.value = ""
    email.value = ""
    senha.value = ""
    confirmSenha.value = ""
}

function validation(){
    if(!nome.value || !sobrenome.value || !email.value || !senha.value){
        alert("Dados Incompletos!")
    } else{

        if(senha.value !== confirmSenha.value){
            return alert("Senhas incompatíveis")
        }
    }

    if(nome.value.length < 3) alert("Informe um nome com pelo menos 3 caracteres!")
    if(sobrenome.value.length < 4) alert("Informe um sobre nome com pelo menos 4 caracteres!")
    //if(typeof nome.value === Number) alert("Números não são permitidos")
    
}

cadastro.addEventListener('click', function(e){
    e.preventDefault()
    
    validation()

    cadastrar()
    limparCampos()

    // const dados = {
    //     nome: nome.value,
    //     email: email.value,
    //     senha: senha.value,
    //     telefone: telefone.value
    // }
})
