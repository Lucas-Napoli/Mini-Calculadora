var resultado = document.querySelector("#resultado")

function calcula(valor){
    //alert(`Você digitou ${valor}`)//
    resultado.value += valor

    switch(resultado.value[0]){
    case '*':
        resultado.value = ''
    case '/':
        resultado.value = ''
    case '.':
        resultado.value = ''
    case '00':
        resultado.value = ''        
    }
}

function limpar(){
    resultado.value = ''
}

function apagar(){
    resultado.value = resultado.value.substring(0, (resultado.value.length -1))
}

function resultadofinal(){
    resultado.value = eval(resultado.value)
}
