//Dados enviados pelo cliente
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true}
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}
let impnac= 1.12
let impint= 1.2



//Verificar se o produto é nacional ou internacional, e mostrar o valor com imposto
if (produtoC.internacional == true) {
    console.log ('Produto Internacional - R$ '+produtoC.valor * impint+'')
} else {
    console.log('Produto Nacional - R$ '+produtoC.valor * impnac+'')
}































