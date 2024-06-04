function casasPorBairro(casas, bairro, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo do container

    const casasDoBairro = casas.filter(casa => casa.bairro === bairro);
    if (casasDoBairro.length === 0) {
        console.error(`Nenhuma casa encontrada para o bairro '${bairro}'!`);
        return;
    }

    casasDoBairro.forEach((casa, index) => {
        const carouselHtml = `
        <div id="controls-carousel-${index}" class="mr-5 relative mt-5 mb-5 w-full p-4 flex flex-col" data-carousel="static">
            <div class="relative h-56 overflow-hidden rounded-lg md:h-72">
                <div class="loading-spinner absolute inset-0 flex items-center justify-center spinnerContainer"></div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="${casa.imagemCasa}" class="outraDiv absolute block w-full md:h-3/4 object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-300 hover:opacity-75 transform transition-transform duration-300 hover:scale-110" alt="Desenho" data-drawer-target="${casa.drawer}" data-drawer-show="${casa.drawer}" aria-controls="${casa.drawer}">
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="${casa.imagemDesenho}" class="outraDiv  w-full md:h-3/4 absolute block object-cover object-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-600 hover:opacity-75 transform transition-transform duration-300 hover:scale-110 " alt="Casa" data-drawer-target="${casa.drawer}" data-drawer-show="${casa.drawer}" aria-controls="${casa.drawer}">
                </div>
            </div>

    
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-gray-800 dark:text-white" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 dark:bg-gray-300 ">
                    <svg class="w-5 h-5 text-sienna dark:text-white rtl:rotate-180 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-gray-800 dark:text-white" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 dark:bg-gray-300  ">
                    <svg class="w-5 h-5 text-sienna dark:text-white rtl:rotate-180 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            <p class="text-center">${casa.endereco}</p>
            <div class="text-center mt-2 ">
                <button type="button" class=" bg-white text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Detalhes</button>
            </div>
        </div>
    `;
    container.innerHTML += carouselHtml;
    
     const drawerHtml = `
        <div id="${casa.drawer}" class="fixed top-0 left-0 z-40 h-full p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-96 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>Informações</h5>
            <button type="button" data-drawer-hide="${casa.drawer}" aria-controls="${casa.drawer}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close menu</span>
            </button>

            <h3 class="text-center font-semibold mb-2 text-gray-600">Atualmente</h3>
            <img id="imageUrl" data-modal-target="crud-modal" data-modal-toggle="crud-modal" src="${casa.imagemCasa}" class="mb-2 w-full h-1/3  transform transition-transform duration-300 hover:scale-105" alt="..." title="Clique para ampliar a imagem">
            <!--
            <h3 class="text-center font-semibold mb-2 text-gray-600">Original</h3>
            <img id="imageUrl2" data-modal-target="crud-modal" data-modal-toggle="crud-modal" src="${casa.imagemCasaOriginal}" class="mb-2  transform transition-transform duration-300 hover:scale-105" alt="..." title="Clique para ampliar a imagem">
            -->
            <h3 class="text-center font-semibold mb-2 text-gray-600">Desenho</h3> 
            <img id="imageUrl3" data-modal-target="crud-modal" data-modal-toggle="crud-modal" src="${casa.imagemDesenho}" class="mb-2  transform transition-transform duration-300 hover:scale-105" alt="..." title="Clique para ampliar a imagem">
            <p class="text-left mb-6 text-sm text-gray-800 dark:text-gray-600">"${casa.endereco}"</p>
            <p class="text-left mb-6 text-sm text-gray-800 dark:text-gray-600"> ${casa.detalhes}</p>
                
            <div class="py-4 text-center items-center">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onclick="window.open('https://www.google.com/maps/d/u/0/viewer?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&femb=1&ll=-19.585877802214714%2C-42.648934215410065&z=22', '_blank')">Ver no Google Maps</button>     
            </div>
        </div>
        `;
        container.innerHTML += drawerHtml;

        const modalHtml = `
        <!-- Main modal -->
        <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 ">
            <div class="relative p-8 w-full max-w-3xl max-h-screen ">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Foto
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form class="p-4 md:p-5">
                        <div class="relative">
                            <img id="modal-image" src="" alt="Imagem em tamanho maior" class="">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += modalHtml;

    });
}


// Exemplo de utilização para exibir casas de um bairro específico
const casas = [
    {
        imagemCasa: 'img/36165061bbcfedb0d136f7dc381c920f.jpg',
        endereco: "Rua A, 123",
        imagemDesenho: 'img/desenho.jpg',
        drawer: 1,
        bairro: "Centro",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: "Localizada em uma das áreas mais pitorescas de Timóteo, nossa casa oferece fácil acesso a todas as comodidades locais, incluindo escolas, supermercados e parques. Situada em uma rua tranquila e arborizada, nossa casa proporciona um ambiente sereno para viver e desfrutar da vida na cidade",
    },
        //Bairro Funcionarios 
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Cyro Cotta Poggiali, 09.png',
        endereco: "Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09",
        imagemDesenho: 'img/desenhos/4.jpg',
        drawer: 2,
        bairro: "Funcionarios",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, n 11.jpg',
        endereco: "Bairro Funcionarios. Avenida Alberto Batista Gallo, n 11.",
        imagemDesenho: 'img/desenhos/3.jpg',
        drawer: 3,
        bairro: "Funcionarios",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Jucelino Kubisckek, 12.png',
        endereco: "Bairro Funcionarios. Avenida Jucelino Kubisckek, 12.",
        imagemDesenho: 'img/desenhos/5.jpg',
        drawer: 4,
        bairro: "Funcionarios",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, 4.png',
        endereco: "Avenida Alberto Batista Gallo, 4.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 5,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, 8.png',
        endereco: "Avenida Alberto Batista Gallo, 8. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 57,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, 10.png',
        endereco: "Avenida Alberto Batista Gallo, 10. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 58,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, no12.jpg',
        endereco: "Avenida Alberto Batista Gallo, 12. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 59,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Almir de Souza Ameno, 28.png',
        endereco: "Avenida Almir de Souza Ameno, 28. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 60,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Almir de Souza Ameno, 56.png',
        endereco: "Avenida Almir de Souza Ameno, 56. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 61,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Jucelino Kubisckek, 14.png',
        endereco: "Avenida Jucelino Kubisckek, 14. ",
        imagemDesenho: 'img/desenhos/5.jpg',
        drawer: 62,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Endereço Avenida Alberto Batista Gallo, 10.png',
        endereco: "Avenida Alberto Batista Gallo, 10. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 63,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Endereço Avenida Jucelino Kubisckek, 30.jpg',
        endereco: "Avenida Jucelino Kubisckek, 30. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 64,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Endereço Avenida Jucelino Kubisckek, 52.jpg',
        endereco: "Endereço Avenida Jucelino Kubisckek, 52. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 65,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Rua Cinquenta e oito, 7.png',
        endereco: "Rua Cinquenta e oito, 7. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 66,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Rua Coronel Geraldo Batista, 16C.jpg',
        endereco: "Rua Coronel Geraldo Batista, 16C. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 67,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Funcionarios/Rua Coronel Geraldo Batista, 18.png',
        endereco: "Rua Coronel Geraldo Batista, 18. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 68,
        bairro: "Funcionarios",
        video: "",
        detalhes: ""

    },

        //Bairro Timirim
    {
        imagemCasa: 'img/casas/Timirim/Rua Teobaldo Gomes Pinto, 15.png',
        endereco: "Bairro Timirim. Rua Teobaldo Gomes Pinto, 15",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 6,
        bairro: "Timirim",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: "Localizada em uma das áreas mais pitorescas de Timóteo, nossa casa oferece fácil acesso a todas as comodidades locais, incluindo escolas, supermercados e parques. Situada em uma rua tranquila e arborizada, nossa casa proporciona um ambiente sereno para viver e desfrutar da vida na cidade"

    },

    {
        imagemCasa: 'img/casas/Timirim/image-001.jpg',
        endereco: "Rua Domingos Quaresma, 10.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 69,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-002.jpg',
        endereco: "Rua José Julio Laje, 11.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 70,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-003.jpg',
        endereco: "Rua Domingos Quaresma, 8.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 71,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-004.jpg',
        endereco: "Rua Joaquim Carlos De Oliveira, 16.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 72,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-005.jpg',
        endereco: "Rua Teobaldo Gomes Pinto, 6.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 73,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-006.jpg',
        endereco: "Rua Teobaldo Gomes Pinto, 4.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 74,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-007.jpg',
        endereco: "Rua Teobaldo Gomes Pinto, 8.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 75,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-008.jpg',
        endereco: "Rua José Júlio Laje, 23.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 76,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-009.jpg',
        endereco: "Rua Joaquim Carlos de Oliveira, 6.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 77,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-010.jpg',
        endereco: "Avenida Efigenia Pereira Bitencourt, 34.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 78,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-011.jpg',
        endereco: "Avenida Efigenia Pereira Bitencourt, 40.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 79,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-012.jpg',
        endereco: "Avenida José Viana da Silva, 268.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 80,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-013.jpg',
        endereco: "Avenida José Viana da Silva, 240.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 81,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-014.jpg',
        endereco: "Avenida José Viana da Silva, 267.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 82,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-015.jpg',
        endereco: "Avenida José Viana da Silva, 156.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 83,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-016.jpg',
        endereco: "Avenida Efigenia Pereira Bitencourt, 28.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 84,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-017.jpg',
        endereco: "Avenida Efigenia Pereira Bitencourt, 6.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 85,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Timirim/image-018.jpg',
        endereco: "Avenida Efigenia Pereira Bitencourt, 10.",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 86,
        bairro: "Timirim",
        video: "",
        detalhes: ""

    },




    //Bairro Vila dos tecnicos

    {
        imagemCasa: 'img/casas/tecnicos/Rua Trinta e Sete, 8.png',
        endereco: "Vila dos tecnicos. Rua Trinta e Sete, 8",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 7,
        bairro: "Tecnicos",
        video: "https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Rua Jair de Freitas, 3.jpg',
        endereco: "Rua Jair de Freitas, 3",
        imagemDesenho: 'img/desenhos/7.jpg',
        drawer: 8,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Rua Trinta e Sete, 32.jpg',
        endereco: "Rua Trinta e Sete, 32.",
        imagemDesenho: 'img/desenhos/1.jpg',
        drawer: 9,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Avenida Levindo Ribeiro Araujo, 30.jpg',
        endereco: "Avenida Levindo Ribeiro Araujo, 30.",
        imagemDesenho: 'img/desenhos/8.jpg',
        drawer: 10,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Rua Trinta e Sete, 1.jpg',
        endereco: "Rua Trinta e Sete, 1.",
        imagemDesenho: 'img/desenhos/1.jpg',
        drawer: 11,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Avenida Levindo Ribeiro Araujo,30.jpg',
        endereco: " Avenida Levindo Ribeiro Araujo,30.",
        imagemDesenho: 'img/desenhos/9.jpg',
        drawer: 13,
        bairro: "Tecnicos",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/tecnicos/Avenida Levindo Ribeiro Araujo, 22.jpg',
        endereco: "Avenida Levindo Ribeiro Araujo, 22.",
        imagemDesenho: 'img/desenhos/10.jpg',
        drawer: 14,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/Rua Jair de Freitas, 1.jpg',
        endereco: "Rua Jair de Freitas, 2.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 15,
        bairro: "Tecnicos",
        detalhes: ""

    },


    {
        imagemCasa: 'img/casas/tecnicos/Rua Trinta e Sete, 10.jpg',
        endereco: "Rua Trinta e Sete, 10.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 16,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-000.jpg',
        endereco: "Rua Levindo Ribeiro Araújo Duarte, 8.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 107,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-001.jpg',
        endereco: "Rua Maria Aparecida Martins Prado, 29.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 108,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-002.jpg',
        endereco: "Rua Maria Aparecida Martins Prado, 21.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 109,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-003.jpg',
        endereco: "Rua Maria Aparecida Martins Prado, 15.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 110,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-004.jpg',
        endereco: "Rua 43, 5.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 111,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-005.jpg',
        endereco: "Rua 43.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 112,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-006.jpg',
        endereco: "Rua Maria Aparecida Martins Prado, 8.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 113,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-007.jpg',
        endereco: "Rua Jair de Freitas, 5.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 114,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-010.jpg',
        endereco: "Rua Trinta e Sete, 24.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 115,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-011.jpg',
        endereco: "Rua Trinta e Sete, 26.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 116,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-015.jpg',
        endereco: " Avenida Levindo Ribeiro Araujo, 26.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 117,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-019.jpg',
        endereco: "Rua Trinta e Sete, 4.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 118,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-020.jpg',
        endereco: " Rua Trinta e Sete, 13.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 119,
        bairro: "Tecnicos",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/tecnicos/image-023.jpg',
        endereco: "Avenida Levindo Ribeiro Araujo, 4.",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 120,
        bairro: "Tecnicos",
        detalhes: ""

    },

    

    //Bairro Bromelias
   
    {
        imagemCasa: 'img/casas/Bromelias/Avenida Amazonas, 30..jpg',
        endereco: "Avenida Amazonas, 30.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 17,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Avenida Jovino Augusto da Silva, 699..jpg',
        endereco: "Avenida Jovino Augusto da Silva, 699.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 18,
        bairro: "Bromelias",
        detalhes: ""

    },


    {
        imagemCasa: 'img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 9..jpg',
        endereco: "Avenida Linthiz Oliveira Novais, 9.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 19,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 11..jpg',
        endereco: "Avenida Linthiz Oliveira Novais, 11.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 20,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 14..jpg',
        endereco: "Avenida Linthiz Oliveira Novais, 14.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 21,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua 19 de Novembro.jpg',
        endereco: "Rua 19 de Novembro.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 23,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Demerval Klein, 1 (2).jpg',
        endereco: "Rua Demerval Klein, 1.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 24,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Domingos Pereira Sobrinho, 6..jpg',
        endereco: "Rua Domingos Pereira Sobrinho, 6.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 25,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Domingos Pereira Sobrinho, 7..jpg',
        endereco: "Rua Domingos Pereira Sobrinho, 7.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 26,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Gregório de Morais, 3..jpg',
        endereco: "Rua Gregório de Morais, 3.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 27,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Gregório de Morais, 6..jpg',
        endereco: "Rua Gregório de Morais, 6.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 28,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Joaquim Lima do Amaral, 15.jpg',
        endereco: "Rua Joaquim Lima do Amaral, 15.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 29,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua José Fernandes Almeida, 21.jpg',
        endereco: "Rua José Fernandes Almeida, 21.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 30,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua José Fernandes Almeida, 25.jpg',
        endereco: "Rua José Fernandes Almeida, 25.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 31,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua José Fernandes de Almeida, 4..jpg',
        endereco: "Rua José Fernandes de Almeida, 4.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 32,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua José Raimundo Viana, 2..jpg',
        endereco: "Rua José Raimundo Viana, 2.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 33,
        bairro: "Bromelias",
        detalhes: ""

    },

    
    {
        imagemCasa: 'img/casas/Bromelias/Rua José Raimundo Viana, 39..jpg',
        endereco: "Rua José Raimundo Viana, 39.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 34,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 15.jpg',
        endereco: "Rua Manoel Samora, 15.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 35,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 17..jpg',
        endereco: "Rua Manoel Samora, 17.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 36,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 27.jpg',
        endereco: "Rua Manoel Samora, 27.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 37,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 28.jpg',
        endereco: "Rua Manoel Samora, 28.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 38,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 41..jpg',
        endereco: "Rua Manoel Samora, 41.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 39,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 51..jpg',
        endereco: "Rua Manoel Samora, 51.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 40,
        bairro: "Bromelias",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 56.jpg',
        endereco: "Rua Manoel Samora, 56.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 41,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 63..jpg',
        endereco: "Rua Manoel Samora, 63.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 42,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 69..jpg',
        endereco: "Rua Manoel Samora, 69.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 43,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 74..jpg',
        endereco: "Rua Manoel Samora, 74.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 44,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 104..jpg',
        endereco: "Rua Manoel Samora, 104.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 45,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 106..jpg',
        endereco: "Rua Manoel Samora, 106.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 46,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 136..jpg',
        endereco: "Rua Manoel Samora, 136.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 47,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 138.jpg',
        endereco: "Rua Manoel Samora, 138.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 48,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Manoel Samora, 156.jpg',
        endereco: "Rua Manoel Samora, 156.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 49,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Professora Ana de Staacks, 1..jpg',
        endereco: "Rua Professora Ana de Staacks, 1.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 50,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Professora Ana de Staacks, 2..jpg',
        endereco: "Rua Professora Ana de Staacks, 2.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 51,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Professora Ana Staacks, 5..jpg',
        endereco: "Rua Professora Ana Staacks, 5.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 52,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Raimundo Pereira de Souza, 2..jpg',
        endereco: "Rua Raimundo Pereira de Souza, 2.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 53,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Raimundo Pereira de Souza, 3..jpg',
        endereco: "Rua Raimundo Pereira de Souza, 3.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 54,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Sergipe, 135..jpg',
        endereco: "Rua Sergipe, 135.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 55,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Bromelias/Rua Walter Giffoni, 3..jpg',
        endereco: "Rua Walter Giffoni, 3. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 56,
        bairro: "Bromelias",
        video: "",
        detalhes: ""

    },

    //Olaria

    {
        imagemCasa: 'img/casas/Olaria/image-000.jpg',
        endereco: "Rua Antônio Pedra da Silva,14. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 87,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-001.jpg',
        endereco: "Rua Antônio Pedra da Silva,12. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 88,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-002.jpg',
        endereco: "Rua Antônio Pedra da Silva, 3. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 89,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-003.jpg',
        endereco: "Rua Maria Rodrigues de Carvalho, 11. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 90,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-004.jpg',
        endereco: "Rua Maria Rodrigues de Carvalho, 18. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 91,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-005.jpg',
        endereco: "Rua Maria Rodrigues de Carvalho, 14. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 92,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-006.jpg',
        endereco: "Rua Joaquim Ferreira Santiago, 6. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 93,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-007.jpg',
        endereco: "Rua Joaquim Ferreira Santiago, 4. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 94,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-008.jpg',
        endereco: "Rua João Alves de Azevedo, 4.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 95,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-009.jpg',
        endereco: "Rua João Alves de Azevedo, 8.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 96,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-010.jpg',
        endereco: "Rua Maria de Rodrigues Carvalho, 10. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 97,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-011.jpg',
        endereco: "Rua Geraldo Magela Salgado, 10. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 98,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-012.jpg',
        endereco: "Rua Geraldo Magela Salgado, 10. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 99,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-013.jpg',
        endereco: "Avenida Judith Maria do Carmo, 58. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 100,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-014.jpg',
        endereco: "Avenida Judith Maria do Carmo,154. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 101,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-015.jpg',
        endereco: "Avenida Judith Maria do Carmo,190. ",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 102,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-016.jpg',
        endereco: "Rua José Zacarias da Silveira, 8.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 103,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-017.jpg',
        endereco: "Avenida Judith Maria do Carmo,199.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 104,
        bairro: "Olaria",
        video: "",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-018.jpg',
        endereco: "Avenida Judith Maria do Carmo, 211.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 105,
        bairro: "Olaria",
        detalhes: ""

    },

    {
        imagemCasa: 'img/casas/Olaria/image-019.jpg',
        endereco: "Avenida Acesita, 298.",
        imagemDesenho: 'img/icon-casa.png',
        drawer: 106,
        bairro: "Olaria",
        detalhes: ""

    },


  //Bairro Quintandinha comecando do 121


  {
    imagemCasa: 'img/casas/Quintandinha/image-000.jpg',
    endereco: "?",
    imagemDesenho: 'img/desenhos/2.jpg',
    drawer: 121,
    bairro: "Quintandinha",
    detalhes: ""

},





];

// Chama a função para exibir casas do bairro "Centro"

//const bairroCentro = "Centro";
//casasPorBairro(casas, bairroCentro, "casas-centro");

//const bairroFuncionarios = "Funcionarios";
//casasPorBairro(casas, bairroFuncionarios, "casas-funcionarios");

//const bairroTimirim = "Timirim";
//casasPorBairro(casas, bairroTimirim, "casas-timirim");


//const bairroBromelias = "Bromelias";
//casasPorBairro(casas, bairroBromelias, "casas-bromelias");

//const bairroOlaria = "Olaria";
//casasPorBairro(casas, bairroOlaria, "casas-olaria");

//const bairroQuintandinha = "Quintandinha";
//casasPorBairro(casas, bairroQuintandinha, "casas-quintandinha");

const bairroTecnicos = "Tecnicos";
casasPorBairro(casas, bairroTecnicos, "casas-tecnicos");










// Seletor para todos os elementos de imagem
const imageElements = document.querySelectorAll('[id^="imageUrl"]');

// Event listener para cada elemento de imagem
imageElements.forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.getElementById('modal-image');
        const imageUrl = image.getAttribute('src');
        modalImage.src = imageUrl;
    });
});


const spinnerContainers = document.querySelectorAll('.spinnerContainer');
    const outrasDivs = document.querySelectorAll('.outraDiv');


    function ocultarSpinnerContainers() {
        spinnerContainers.forEach(container => {
            container.style.display = 'none';
        });
        console.log('Mouse entrou em uma outraDiv');
    }

    outrasDivs.forEach(div => {
        div.addEventListener('mouseenter', ocultarSpinnerContainers);
    });




