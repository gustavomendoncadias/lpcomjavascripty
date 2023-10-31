/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
*/
let valor_hora = 37.5
let horas_mes = 180
let salario_bruto = valor_hora * horas_mes
let ir = salario_bruto * 0.11
let inss = salario_bruto * 0.08
let sindicato = salario_bruto * 0.05
let descontos = ir + inss + sindicato
let salario_liquido = salario_bruto - descontos
console.log("ir (11%) : r$" + ir.toFixed(2))
console.log("inss (8%) : r$ " + inss.toFixed(2))
console.log("sindicato (5%) : r$" + sindicato.toFixed(2))
console.log("salario liquido: r$ " + salario+salario_liquido.toFixed(2))
