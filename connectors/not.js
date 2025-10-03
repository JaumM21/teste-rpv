// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir caso:
// maior de idade
// possuir cnh
// ser br
//----------------------------------
//------CONTEXTO DE ATRIBUIÇÃO------
//----------------------------------
let idade = 18
let possuicnh = true
let nacionalidade = 'br'
let minhavalidacao = idade >= 18 && possuicnh == true && nacionalidade == 'br'


//----------------------------------
//------CONTEXTO DE VALIDAÇÃO-------
//----------------------------------
if (!(idade >= 18 && possuicnh == true && nacionalidade == 'br')){
    console.log('vc pode nao dirigir')
}else{
    console.log('vc pode dirigir')
}