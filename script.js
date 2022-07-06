function calculateSalary(fixSalary, valorVendas) {
    let salarioTotal = 0

    if(valorVendas <= 1200) {
        salarioTotal = fixSalary + (valorVendas * 0.03)
    } else {
        salarioTotal = fixSalary + (valorVendas * 0.05)
    }
    return salarioTotal
}

function cashMachine(saque, fixSalary, valorVendas) {
    let salarioTotal    = calculateSalary(fixSalary, valorVendas)
    let resto           = salarioTotal - saque
    let resultDuzentos   = 0
    let resultCem       = 0
    let resultCinquenta = 0
    let resultVinte     = 0
    let resultDez       = 0
    let resultCinco     = 0
    let resultDois      = 0
    let desconto        = saque

    

    for(let i = 0; i < saque; i++) {
        if(desconto >= 200) {
            resultDuzentos += 1
            desconto = desconto - 200
        } else if(desconto >= 100) {
            resultCem += 1
            desconto = desconto - 100
        } else if(desconto >= 50) {
            resultCinquenta += 1
            desconto = desconto - 50
        } else if(desconto >= 20) {
            resultDez += 1
            desconto = desconto - 20
        } else if(desconto >= 10) {
            resultDez += 1
            desconto = desconto - 10
        } else if(desconto >= 5) {
            resultCinco += 1
            desconto = desconto - 5 
        } else if(desconto >= 2) {
            resultDois += 1
            desconto = desconto - 2 
        }
        
    }
    return `O saque será de ${resultDuzentos} notas de duzentos, ${resultCem} de notas de cem, ${resultCinquenta} notas de cinquenta, ${resultVinte} notas de vinte, ${resultDez} notas de dez, ${resultCinco} notas de cinco e ${resultDois} notas de dois reais.  O restante do salario é ${resto}.`
}
 console.log(cashMachine(462, 2000, 1000))

function calculateStock(currentStock, maxStock, minStock) {
    media = (maxStock + minStock)/2
    
    if( currentStock >= media) {
        return 'Não efetuar compra'
    } else{
        return 'Efetuar compra'
    }
}

function calculateAge(yearBirth, currentYear) {
    let yearAge   = (currentYear - yearBirth)
    let monthsAge = yearAge * 12
    let daysAge   = yearAge * 365
    let weeksAge  = yearAge * 52

    return `Você tem ${yearAge} anos, ${monthsAge} meses, ${weeksAge} semanas ou ${daysAge} dias`
}

function getDiagonal(matrixSquare) {

    let diagonal = []
    for(let j = 0; j < matrixSquare.length; j++) {
        diagonal.push(matrixSquare[j][j])
    }
return diagonal
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(getDiagonal(matrix))
