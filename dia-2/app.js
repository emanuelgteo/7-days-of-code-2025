// Função que solicita o input e valida os dados de entrada
function solicitarInput(textoSolicitacao, tipoEsperado) {
    let entrada = "";
        while(true) {
            // Solicita o dado
            entrada = prompt(textoSolicitacao);

            // Se apertado o botão cancelar, a função é parada imediatamente
            if (entrada == null) {
                throw new Error("Operação cancelada.");
            } 
            // Se for apertado o botão 'OK' sem digitar nada, será solicitado o input novamente 
            if(entrada == "") {
                alert("Nenhum valor foi digitado! Vamos tentar novamente");
                continue;
            }
            // Verifica se o input solicitado deve ser um número
            if(tipoEsperado == 'numero') {
                // Se a entrada não for um número, será solicitado o input novamente
                if (isNaN(entrada)) {
                    alert("Você não digitou um número! Vamos tentar novamente");
                    continue;
                // Se for um número, retorna o valor de entrada
                } else {
                    return entrada;
                }
            }

            // Mesma lógica apresentada anteriormente, mas comparando entradas que devem ser strings
            if(tipoEsperado == 'string') {
                if (isNaN(entrada)) {
                    return entrada;
                } else {
                    alert("Você digitou um número! Vamos tentar novamente");
                    continue;
                }
            }
        }    
}

try {
    let nome = solicitarInput("Qual o seu nome? ", "string");
    let idade = solicitarInput("Quantos anos você tem? ", "numero")
    let linguagem = solicitarInput("Qual linguagem de programação você está estudando no momento? ", "string")

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

    while(true) {
        let gostaEstudar = solicitarInput(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO `, "numero");

        if (gostaEstudar == 1) {
            alert("Muito bom! Continue estudando e você terá muito sucesso.");
            break;
        } else if (gostaEstudar == 2) {
            alert("Ahh que pena... Já tentou aprender outras linguagens?");
            break;
        } else {
            alert("Eu falei para responder com 1 ou 2! Vamos tentar novamente");
        }
    }
} catch(error) {
    alert("Operação cancelada.")
}