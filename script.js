const numero = document.getElementById('inputnumero')
const res = document.getElementById('res')

function medirRaio() {
    
    var raio = Math.PI * numero.value ** 2
    raio = parseFloat(raio).toFixed(2)
    res.innerHTML = `O resultado é ${raio}`
}