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
        <div id="${modalId}" class="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-80 ">
            <div class="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/2 relative" style="max-height: calc(90%); overflow-y: auto; margin-top: 70px;">
                <button class="absolute top-2 right-2 text-gray-600 hover:text-blue-800 close-modal text-2xl">
                    &times;
                </button>
                <h3 class="text-center font-playfair-display font-bold text-2xl mb-4">Depoimento Completo</h3>
                <p id="${modalTextId}" class="text-center text-gray-600 mb-4">${depoimento.entrevista}</p>
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

const entrevista = `
<div class="space-y-4">
    <div>
        <h4 class="font-semibold">Funcionários - Avenida Alberto Batista Gallo</h4>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo mora na casa?</h5>
        <p>R: Vou falar pelo meu marido que chegou antes de mim, desde 2017, por aí.</p>
    </div>
    <div>
        <h5 class="font-semibold">É proprietário?</h5>
        <p>R: Não, locação.</p>
    </div>
    <div>
        <h5 class="font-semibold">Foi o primeiro morador? Sabe quem foi?</h5>
        <p>R: Os primeiros moradores daqui, eu sei o nome da senhora, dona Alzira. São os pais do Geraldo Cruz, o proprietário da contabilidade Soares e Cruz, eles é que são os proprietários desta casa.</p>
    </div>
    <div>
        <h5 class="font-semibold">A casa já passou por alguma reforma ou intervenção?</h5>
        <p>R: Intervenções simples como acrescentar portas onde era espaço de passagem, uma varandinha no quintal. Na fachada absolutamente nada, ela está intacta. As portas são as portas que foram colocadas e adquiridas desde o início da construção, as grades, o telhado, tudo. Portas internas, portas externas tudo é da construção. Esse forro é um forro da época também. Logo em seguida quando vieram as questões dos forros antigos, tanto é que a madeira dele, se observarem é até mais grossa, hoje em dia não existe mais forro de madeira desse material. Então à intervenção esse forro foi pintado porque ele era de madeira mesmo. Foram intervenções mínimas que foram feitas porque a gente precisou de pintar porque a gente aplicou um material por causa de cupim. Aí a gente aplicou o material e trouxe uma tinta de proteção para que houvesse essa conservação.</p>
    </div>
    <div>
        <h5 class="font-semibold">Existem dificuldades para a preservação ou manutenção da casa?</h5>
        <p>R: Não, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês. É manutenção simples, simples mesmo, temos dificuldade nenhuma não.</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabia que essa casa é da época da implantação da siderúrgica?</h5>
        <p>R: Sabia, sempre soube.</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para você?</h5>
        <p>R: Muita, na verdade, principalmente pela família né? É uma família muito querida por nós. Os proprietários, um dos filhos, são amigos do meu marido há mais de 20 anos, então realmente essa casa aqui (é importante).</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para a cidade?</h5>
        <p>R: Eu acho, muito. Eu estava falando disso outro dia com meu marido. Eu acredito que daqui a no máximo 10 anos talvez a gente não tenha mais nenhuma casa em Timóteo da época da fundação de Timóteo. Eu acho que o patrimônio histórico da cidade está pecando muito com os proprietários. Porque o quê que acontece, essa conscientização, é claro, os proprietários tem que ter um pouquinho também, mas essa conscientização de patrimônio histórico ela é pública, tem que partir da gestão pública. Se não vier da gestão pública a tendência é derrubar, a casa aí da frente foi toda derrubada semana passada, eu fui vendo ela desmontando pedacinho por pedacinho e falei “Ai meu Deus, que dó!”.</p>
    </div>
    <div>
        <h5 class="font-semibold">Houveram acontecimentos marcantes na casa?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Entende sobre patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Conhece algum patrimônio histórico de Timóteo?</h5>
        <p>R: Eu acho que todo mundo fala de vários lugares né? A Igreja do Timirim, o Forno Hoffman, só que, eu tenho um pouquinho de entendimento de gestão pública, eu acho que as casas são o maior patrimônio histórico de uma cidade, porque são essas casas que contam as histórias das pessoas que fizeram a cidade. De dentro dessa casa aqui, nasceu, cresceu, foi criado e se formou um dos maiores contadores do Vale do Aço que é o Geraldo Cruz, e ninguém sabe disso. Aí, olha só, ele construiu uma contabilidade tão grande, de tamanha credibilidade e referência, que a filha dele hoje segue os caminhos do pai, o filho é contador e segue os caminhos do pai, a outra filha também é prestadora de serviços na área financeira. Então assim, é o que eu falo dessa linha de referência histórica, a referência histórica vai muito além dos imóveis assim. E eu estou falando só do Geraldo mas tem outros irmãos também que construíram histórias no ramo da imobiliária, e que são pessoas muito queridas e conhecidas na cidade. A mãe dele, a dona Alzira era uma pessoa muito que todo mundo admirava muito, faleceu no ano passado. Então assim, quem são essas pessoas que moraram nessas casas? A gente tem sim, igual eu falei, o Coliseu ali, tem muitos espaços bacanas, a praça de Acesita aqui em cima, lá em cima na sede com certeza a igreja, lá em cima também tem história. Mas eu acho que as casas de Timóteo, dentro das possibilidades, deveriam ser conservadas o máximo possível por causa da história delas, as pessoas que começaram Timóteo, moraram nessas casas.</p>
    </div>
    <div>
        <h5 class="font-semibold">Qual a importância do patrimônio histórico para você?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Qual a importância do patrimônio histórico para a cidade?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">A siderúrgica tem um papel significativo para a construção da história da cidade?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">O patrimônio histórico de Timóteo está sendo preservado?</h5>
        <p>R: Eu sei que depois de tombado os recursos que vem pro proprietário são poucos e mínimos, para valer a pena para a pessoa a gestão pública tinha que fazer um trabalho de conscientização muito grande. Essa casa aqui, para valer a pena para o proprietário, tinha que trazer um movimento aqui para dentro, um museu ou um lugar de visitação, algo assim que aí o poder público ia poder ressarcir o proprietário sem que ele se sentisse lesado. Porque por exemplo, se não me engano a casa da frente aqui os proprietários estão pedindo dois milhões de reais nela, e o patrimônio não paga isso, a gente sabe disso, a pontuação não garante esse valor para a pessoa. Mas em compensação, talvez com conscientização eles se dessem por satisfeitos. Mas é igual estou falando, eu estou colocando de 5 a 10 anos mas no ritmo que está indo eu acho que em 5 anos a gente não vai ter nenhuma casa mais.</p>
    </div>
    <div>
        <h5 class="font-semibold">O que a população pode fazer para preservar o patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Como as pessoas podem aprender mais e serem conscientizadas sobre este patrimônio?</h5>
        <p>R: Trabalho com marketing, né? E vocês são reis do celular, a geração do celular, vocês tem que ir pra internet, gravar vídeo, viralizar vídeo, fazer vídeo na porta das casas, buscando saber essas histórias que eu acabei de falar, quem morou aqui, quem é a pessoa, faz homenagem a elas, posta no Tiktok, no Instagram, no Facebook, coloca no Whatsapp, vai na rádio, pede o pessoal da rádio para contar a história das pessoas, entendeu? Sabe porque? As pessoas é que movimentam as pessoas, então assim, eu trabalharia dessa forma, com a internet, vai na porta das casas e pede autorização para os proprietários, entendeu? Eu se fosse vocês iria lá no Geraldo Cruz e falaria assim: “Geraldo, posso contar a história da sua casa, há quanto tempo ela existe, gravar um vídeo na porta da sua casa lá só para a gente poder registrar?” E vai para essas portas das casas, e fala que a gente só quer contar a história, encontra mais uns 3, que aí o que acontece, quando vocês colocam 1 história, é só uma história, quando vocês contam 3 histórias todo mundo vai querer que conte a história do outro, é uma coisa do mineiro, o mineiro quer saber mais e o mineiro gosta de saber da história do outro, e do outro, e do outro e quer contar a dele também, e aí vocês vão contaminar, e aí eu tenho certeza que a cidade vai se sensibilizar. E aí ao invés da gente ver uma Araújo, aonde ela está, a gente estaria vendo uma casa belíssima de mais de 60 anos, preservada, talvez com um centro cultural lá dentro, um espaço interativo contando a história.</p>
    </div>
</div>
`;




// Exemplo de depoimentos
const depoimentos = [
    {
        bairro: "Funcionários ",
        texto: "Existem dificuldades para a preservação ou manutenção da casa? R: Não, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês. ...", 
        entrevista: entrevista

        
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


