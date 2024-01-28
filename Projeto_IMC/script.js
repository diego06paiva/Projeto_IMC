const form = document.querySelector(".form")
form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const peso = document.querySelector(".peso").value
    const altura = document.querySelector(".altura").value

    const imc = peso / (altura * altura)

    const contafeita = document.querySelector(".contafeita")
    contafeita.innerHTML = `<p> Seu IMC é  ${imc.toFixed(2)} </p>`

    
    if (imc < 18.5) {
        contafeita.classList.add('magreza')
        contafeita.innerHTML = ` Seu IMC é ${imc.toFixed(2)} - Magreza`
        contafeita.classList.remove('normal')
        contafeita.classList.remove('sobrepeso')
        contafeita.classList.remove('obesidade')
        contafeita.classList.remove('obesidade-grave')
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        contafeita.classList.add('normal')
        contafeita.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Normal`
        contafeita.classList.remove('magreza')
        contafeita.classList.remove('sobrepeso')
        contafeita.classList.remove('obesidade')
        contafeita.classList.remove('obesidade-grave')
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        contafeita.classList.add('sobrepeso')
        contafeita.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Sobrepeso`
        contafeita.classList.remove('magreza')
        contafeita.classList.remove('normal')
        contafeita.classList.remove('obesidade')
        contafeita.classList.remove('obesidade-grave')
    }
    else if (imc >= 30 && imc <= 39.9) {
        contafeita.classList.add('obesidade')
        contafeita.innerHTML = `Seu IMC é ${imc.toFixed(2)} - Obesidade `
        contafeita.classList.remove('magreza')
        contafeita.classList.remove('sobrepeso')
        contafeita.classList.remove('normal')
        contafeita.classList.remove('obesidade-grave')
    }
    else if (imc > 40) {
        contafeita.classList.add('obesidade-grave')
        contafeita.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ☠️Obesidade grave☠️`
        contafeita.classList.remove('magreza')
        contafeita.classList.remove('sobrepeso')
        contafeita.classList.remove('obesidade')
        contafeita.classList.remove('normal')
    }
    else {
        contafeita.classList.add('sentido')
        contafeita.innerHTML = "Isso não faz sentido"
    }

    const resetar = document.querySelector(".resetar")
    resetar.addEventListener('click', function (evento) {
        evento.reset()
    })
   

})



