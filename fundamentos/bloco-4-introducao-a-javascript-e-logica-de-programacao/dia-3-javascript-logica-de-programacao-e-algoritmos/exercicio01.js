//1 - O fatorial é representado pelo sinal ! 4! = 4 x 3 x 2 x 1 = 24 Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

num = 10
result = num
for (var i = num - 1; i >= 1; i--) {
    num = num * i; // or num *= i;
 }
 console.log(num);