// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.1

//EU POSSO VOTAR CASO:
// SEJA HOMEM OU MULHER
//TENHA MAIS DE 16 ANOS 
//TENHA TITULO DE ELEITOR 

//----------------------------------
//------CONTEXTO DE ATRIBUIÇÃO------
//----------------------------------
let sexo = "h" //ou "m"
let idade = 17
let possuiTituloEleitor = true

//----------------------------------
//------CONTEXTO DE VALIDAÇÃO-------
//----------------------------------
if((sexo == 'h' || sexo =='m') && idade >= 16 && possuiTituloEleitor == true){
    console.log('você pode votar')
}else{
    console.log('voce nao pode votar')
}