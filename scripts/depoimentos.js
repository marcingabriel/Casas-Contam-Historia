function exibirDepoimentos(depoimentos, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo do container

    let depoimentosHtml = ''; // Variável para armazenar o HTML dos depoimentos
    let modaisHtml = ''; // Variável para armazenar o HTML dos modais

    depoimentos.forEach((depoimento, index) => {
        const depoimentoId = `depoimento-${index}`;
        const modalId = `modal-${index}`;
        const modalTextId = `modal-text-${index}`;

        // Cria o HTML do depoimento
        depoimentosHtml += `
        <div class="flex flex-col items-center p-8 rounded-lg shadow-md">
            <h3 class="text-center font-playfair-display font-bold text-2xl mb-4">
                <span class="block font-bold">${depoimento.bairro}</span>
            </h3>
            <p class="text-center text-gray-600 mb-4">${depoimento.texto}</p>
            <a href="#" id="${depoimentoId}" class="ler-mais text-center text-blue-500 uppercase font-semibold tracking-wide transition transform hover:scale-110">Ler mais </a>
        </div>
        `;

        // Cria o HTML do modal correspondente
        modaisHtml += `
        <div id="${modalId}" class="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
                <button class="absolute top-2 right-2 text-gray-600 hover:text-blue-800 close-modal text-2xl">
                    &times;
                </button>
                <h3 class="text-center font-playfair-display font-bold text-2xl mb-4">Depoimento Completo</h3>
                <p id="${modalTextId}" class="text-center text-gray-600 mb-4">${depoimento.texto}</p>
                <button class="close-button block mx-auto mt-4 bg-blue-500 text-white p-2 rounded">Fechar</button>
            </div>
        </div>
    
    
        `;
    });

    // Adiciona o HTML dos depoimentos e dos modais ao container
    container.innerHTML = depoimentosHtml + modaisHtml;

    // Adiciona eventos de clique para abrir e fechar os modais
    depoimentos.forEach((depoimento, index) => {
        const depoimentoId = `depoimento-${index}`;
        const modalId = `modal-${index}`;
    
        const modal = document.getElementById(modalId);
        const modalContent = modal.querySelector('.bg-white');
    
        document.getElementById(depoimentoId).addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('hidden');
        });
    
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    
        modal.querySelector('.close-button').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    
        // Adicionando evento para fechar o modal ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    
        // Impedir que o clique no conteúdo do modal feche o modal
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
}




// Exemplo de depoimentos
const depoimentos = [
    {
        bairro: "Funcionários ",
        texto: "Existem dificuldades para a preservação ou manutenção da casa? R: Não, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês. ...", 
      


        
    },
    {
        bairro: "Funcionários",
        texto: " - Instituto de Educação Passos Gigantes - Há quanto tempo mora na casa? R: Eu moro aqui desde 1962. É proprietário? R: Sou proprietária.",
    },
    {
        bairro: "Bromélias",
        texto: "Houveram acontecimentos marcantes na casa? R: Eu lembro quando eu era criança, era piso vermelhão, fazia com xadrez, não tinha cerâmica. Era uma casa muito simples então, aquele vermelhão cimentado, passava o xadrez aí tinha vermelho, amarelo, verde, o nosso era vermelho, aí vinha e encerava",
    },
];

exibirDepoimentos(depoimentos, "depoimentos-container");
