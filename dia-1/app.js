// Optei por realizar um sorteio das possibilidades de valores das variáveis, para criar um script mais dinâmico e que pudesse ser testado em diversas situações
let possibilidadesVariavel = [1, '1', 30, '30', 10, '10'];

// Criada a função apenas com o objetivo de executar o algoritmo várias vezes no navegador através de um botão
function sortearComparar() { 
    console.log('Execução do algoritmo')
    let variaveis = [];

    // Sorteio do valor das variáveis
    for(i = 1; i<=2; i++) {
        let indiceSorteado = parseInt(Math.random()*possibilidadesVariavel.length);
        let variavelSorteada = possibilidadesVariavel[indiceSorteado];
        variaveis.push(variavelSorteada);
    }

    // Imprime valor e tipo das variáveis sorteadas
    for(let variavel of variaveis) {
        console.log(`Variável: ${variavel}, Tipo: ${typeof(variavel)}`)
    }

    // Texto inicial
    texto = "As variáveis sorteadas "

    // Verifica se as váriaveis têm o mesmo valor (igualdade ampla)
    if (variaveis[0] == variaveis[1]) {
        texto = texto + "possuem o mesmo valor" 
        
        // Verifica se as variáveis têm o mesmo tipo (igualdade estrita)
        if (variaveis[0] === variaveis[1]) {
            texto = texto + " e mesmo tipo."
        // Se tipos diferentes
        } else {
            texto = texto + ", mas não possuem o mesmo tipo."
            }
        // Se valores diferentes     
    } else {
        texto = texto + "não possuem o mesmo valor."
    }

    // Imprime um texto personalizado de acordo com as condições
    console.log(texto)
}

