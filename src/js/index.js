// Seleção de elementos
const generatePasswordBtn = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')

const openCloseGenPassBtn = document.querySelector("#open-gen-pass")
const generatePassContainer = document.querySelector("#generate-options")

const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numberInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPassword = document.querySelector("#copy-password")

const openResgisterContainer = document.querySelector('#open-register')
const registerContainer = document.querySelector('#register-swap')
const loginContainer = document.querySelector('#login-swap')


// Funções
// Letras, números, simbolos
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>,.!/?#$#¨%&+-*";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//Gerar senha e mostrar

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = +lengthInput.value;

    const generators = [];
    
    if(lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if(numberInput.checked){
        generators.push(getNumber)
    }

    if(symbolsInput.checked){
        generators.push(getSymbol)
    }

    if(generators.length === 0){
        return
    }

    console.log(generators.length)

    for(i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            
            password += randomValue;
        });
    };

    password = password.slice(0, passwordLength);
    
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};


// Eventos

generatePasswordBtn.addEventListener('click', () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol)
});

openCloseGenPassBtn.addEventListener("click", () => {
    generatePassContainer.classList.toggle('hide')
})

copyPassword.addEventListener("click", () => {
    event.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPassword.innerText = "Senha copiada!"

        setTimeout(()=>{
            copyPassword.innerText = "Copiar"
        }, 4000)
    })
})

openResgisterContainer.addEventListener("click", () => {
    registerContainer.classList.toggle('swap')
    loginContainer.classList.toggle('swap')

    
})