const financiamento = document.querySelector("#input_financiamento")
const prazo = document.querySelector("#input_prazo")
const parcela = document.querySelector("#input_parcela")
const juros = document.querySelector("#input_juros")
const botao = document.querySelector("#botao_preencher")

botao.addEventListener('click', ()=>{
    calculaRenda(financiamento.valueAsNumber, prazo.valueAsNumber, juros.valueAsNumber)

})

function calculaRenda(financiamento, prazo, juros){
    let jurosMensal = juros / 12
    let parcelaSemJuros = financiamento / prazo

    let calc = parcelaSemJuros + (parcelaSemJuros * jurosMensal) 

    let rendaBruta = (calc / 30) * 100
    console.log(parcelaSemJuros)
    console.log(calc)
    //console.log(rendaBruta)

}