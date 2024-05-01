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
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div class="loading-spinner absolute inset-0 flex items-center justify-center spinnerContainer"></div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="${casa.imagemCasa}" class="outraDiv absolute block w-full  h-3/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-300 hover:opacity-75 transform transition-transform duration-300 hover:scale-110" alt="Desenho" data-drawer-target="${casa.drawer}" data-drawer-show="${casa.drawer}" aria-controls="${casa.drawer}">
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="${casa.imagemDesenho}" class="outraDiv w-full h-3/4 absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-600 hover:opacity-75 transform transition-transform duration-300 hover:scale-110" alt="Casa" data-drawer-target="${casa.drawer}" data-drawer-show="${casa.drawer}" aria-controls="${casa.drawer}">

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
                
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Documentario da casa</div>
                <p class="text-gray-700 text-base text-left">
                    Descrição do vídeo.
                </p>
            </div>
            <iframe width="w-full" height="350" src="https://www.youtube.com/embed/vveDw4Uth3s?si=9OA1OFR2bO0umU79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               
      
            <div class="py-4 text-center items-center">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onclick="window.open('https://www.google.com/maps/d/u/0/viewer?mid=1W8_QiOSp1uzTWyAPHwDGDDFahhPzCUo&femb=1&ll=-19.585877802214714%2C-42.648934215410065&z=22', '_blank')">Ver no Google Maps</button>     
            </div>
        </div>
        `;
        container.innerHTML += drawerHtml;

        const modalHtml = `
        <!-- Main modal -->
        <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-8 w-full max-w-3xl  md:max-w-4xl lg:max-w-4xl">
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
                            <img id="modal-image" src="" alt="Imagem em tamanho maior" class="w-full h-full">
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
        detalhes: "Localizada em uma das áreas mais pitorescas de Timóteo, nossa casa oferece fácil acesso a todas as comodidades locais, incluindo escolas, supermercados e parques. Situada em uma rua tranquila e arborizada, nossa casa proporciona um ambiente sereno para viver e desfrutar da vida na cidade"

    },
        //Bairro Funcionarios 
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Cyro Cotta Poggiali, 09.png',
        endereco: "Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09",
        imagemDesenho: 'img/desenhos/4.jpg',
        drawer: 2,
        bairro: "Funcionarios",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, n 11.jpg',
        endereco: "Bairro Funcionarios. Avenida Alberto Batista Gallo, n 11.",
        imagemDesenho: 'img/desenhos/3.jpg',
        drawer: 3,
        bairro: "Funcionarios",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Jucelino Kubisckek, 12.png',
        endereco: "Bairro Funcionarios. Avenida Jucelino Kubisckek, 12.",
        imagemDesenho: 'img/desenhos/5.jpg',
        drawer: 4,
        bairro: "Funcionarios",
        detalhes: ""

    },
    {
        imagemCasa: 'img/casas/Funcionarios/Avenida Alberto Batista Gallo, n 11.jpg',
        endereco: "Bairro Funcionarios. Avenida Alberto Batista Gallo, n 11.",
        imagemDesenho: 'img/desenhos/Funcionarios/fachada2.png',
        drawer: 5,
        bairro: "Funcionarios",
        detalhes: ""

    },

        //Bairro Timirim
    {
        imagemCasa: 'img/casas/Timirim/Rua Teobaldo Gomes Pinto, 15.png',
        endereco: "Bairro Timirim. Rua Teobaldo Gomes Pinto, 15",
        imagemDesenho: 'img/desenhos/Timirim/fachada1.png',
        drawer: 6,
        bairro: "Timirim",
        detalhes: "Localizada em uma das áreas mais pitorescas de Timóteo, nossa casa oferece fácil acesso a todas as comodidades locais, incluindo escolas, supermercados e parques. Situada em uma rua tranquila e arborizada, nossa casa proporciona um ambiente sereno para viver e desfrutar da vida na cidade"

    },

    //Bairro Vila dos tecnicos

    {
        imagemCasa: 'img/casas/tecnicos/Rua Trinta e Sete, 8.png',
        endereco: "Vila dos tecnicos. Rua Trinta e Sete, 8",
        imagemDesenho: 'img/desenhos/2.jpg',
        drawer: 7,
        bairro: "Tecnicos",
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


   




];

// Chama a função para exibir casas do bairro "Centro"

const bairroCentro = "Centro";
casasPorBairro(casas, bairroCentro, "casas-centro");

const bairroFuncionarios = "Funcionarios";
casasPorBairro(casas, bairroFuncionarios, "casas-funcionarios");

const bairroTimirim = "Timirim";
casasPorBairro(casas, bairroTimirim, "casas-timirim");


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




