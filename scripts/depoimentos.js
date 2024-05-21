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
                <span class="block font-bold">VILA DOS TECNICOS</span>
            </h3>
            <p class="text-center text-gray-600 mb-4">${depoimento.texto}</p>
            <a href="#" id="${depoimentoId}" class="ler-mais text-center text-blue-500 uppercase font-semibold tracking-wide transition transform hover:scale-110">Ler mais </a>
        </div>
        `;

        // Cria o HTML do modal correspondente
        modaisHtml += `
        <div id="${modalId}" class="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h3 class="text-center font-playfair-display font-bold text-2xl mb-4">Depoimento Completo</h3>
                <p id="${modalTextId}" class="text-center text-gray-600 mb-4">${depoimento.texto}</p>
                <button class="close-modal block mx-auto mt-4 bg-blue-500 text-white p-2 rounded">Fechar</button>
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

        document.getElementById(depoimentoId).addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById(modalId).classList.remove('hidden');
        });

        document.getElementById(modalId).querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById(modalId).classList.add('hidden');
        });
    });
}

// Exemplo de depoimentos
const depoimentos = [
    {
        texto: "Este é o primeiro depoimento. É um exemplo de como o modal vai exibir um depoimento.",
    },
    {
        texto: "Este é o segundo depoimento. O modal pode exibir vários depoimentos se necessário.",
    },
    {
        texto: "Este é o terceiro depoimento.",
    },
];

exibirDepoimentos(depoimentos, "depoimentos-container");
