var i, soma=0;

let x = parseInt(prompt('Quantos numeros vão ser digitados? '));
for(i=0;i<x;i++)
{
   let y = parseInt(prompt('Digite um número'));
   soma += y; 
}
let media = soma/x;
alert(`A média dos números digitados é ${media}`)