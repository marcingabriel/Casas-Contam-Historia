function exibirDepoimentos(depoimentos, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo do container

    depoimentos.forEach((depoimento, index) => {
        const modalHtml = `
        <!-- Modal overlay -->
        <div id="crud-modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50" onclick="fecharModal(event)">
            <!-- Modal content -->
            <div class="bg-white rounded-lg shadow dark:bg-gray-700 max-w-lg w-full p-6 relative" onclick="event.stopPropagation()">
                <!-- Modal header -->
                <div class="flex items-center justify-between border-b pb-4 mb-4">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Depoimento
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onclick="fecharModal()">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span class="sr-only">Fechar modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="text-gray-700 dark:text-gray-300">
                    <p>${depoimento.texto}</p>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += modalHtml;
    });
}

function abrirModal() {
    const modal = document.getElementById('crud-modal');
    modal.classList.remove('hidden');
}

function fecharModal(event) {
    if (event) {
        const modal = document.getElementById('crud-modal');
        if (event.target === modal || event.target.closest('button')) {
            modal.classList.add('hidden');
        }
    } else {
        const modal = document.getElementById('crud-modal');
        modal.classList.add('hidden');
    }
}

// Exemplo de depoimentos
const depoimentos = [
    {
        texto: "Este é o primeiro depoimento. É um exemplo de como o modal vai exibir um depoimento.",
    },
    {
        texto: "Este é o segundo depoimento. O modal pode exibir vários depoimentos se necessário.",
    }
];

document.getElementById('ler-mais').addEventListener('click', function(event) {
    event.preventDefault();
    exibirDepoimentos(depoimentos, 'modal-container');
    abrirModal();
});