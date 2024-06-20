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
        <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  md:m-2 m-5 lg:m-0">
            <a href="#">
                <img class="rounded-t-lg  object-cover object-center md:h-2/5 w-full" src="${depoimento.desenho}" alt="desenho" />
            </a>
            <div class="p-5">
                <h3 class="text-center font-playfair-display font-bold text-2xl mb-2">
                    <span class="block font-bold">${depoimento.bairro}</span>
                </h3>
                <h4 class="text-center font-medium text-gray-500 text-sm mb-4">${depoimento.endereço}</h4> <!-- Subtítulo adicionado -->
                <p class="text-center text-gray-600 mb-4 text-sm md:text-base">${depoimento.texto}</p>
                <a href="#" id="${depoimentoId}" class="  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ler mais
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        `;




        // Cria o HTML do modal correspondente
        modaisHtml += `
        <div id="${modalId}" class="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-80 ">
            <div class="modalz bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 relative " style="max-height: calc(90%); overflow-y: auto; margin-top: 70px; ">
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
        const modalContent = modal.querySelector('.modalz');
    
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

const entrevista1 = `
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

const entrevista2 = `
<div class="space-y-4">
    <div>
        <h4 class="font-semibold">Funcionários - Instituto de Educação Passos Gigantes
        </h4>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo mora na casa?</h5>
        <p>R: R: Eu moro aqui desde 1962.</p>
    </div>
    <div>
        <h5 class="font-semibold">É proprietário?</h5>
        <p>R: Sou proprietária.</p>
    </div>
    <div>
        <h5 class="font-semibold">Foi o primeiro morador? Sabe quem foi?</h5>
        <p>R: Antes teve um morador, não sei, tem tantos anos, era seu Antônio mas não sei o sobrenome dele.</p>
    </div>
    <div>
        <h5 class="font-semibold">A casa já passou por alguma reforma ou intervenção?</h5>
        <p>R: R: Não, na fachada não, só limpeza e lá no fundo.
            R: Acrescentou um anexo na garagem.</p>
    </div>
    <div>
        <h5 class="font-semibold">Existem dificuldades para a preservação ou manutenção da casa?</h5>
        <p>R: É muito grande e velha né?</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabia que essa casa é da época da implantação da siderúrgica?</h5>
        <p>Sei, ué!</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para você?</h5>
        <p>R: É né, os filhos foram criados aqui, eu trabalhei aqui no grupo Getúlio Vargas, é tudo perto, pra mim foi ótimo.
        R: É super interessante, porque desde criancinha nós vivemos aí no quintal, nosso pai criava galinhas, e muitas galinhas, então era muito bonito, muito interessante.
        </p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para a cidade?</h5>
        <p>R: É né, construída a muitos anos, eu conheci o construtor daqui, ele morou nessa casa.
           R: É de grande valor né, ela precisa de manutenções, você tem que manter, tubulações, parte elétrica, tem que mudar todas essas coisas, mas tem uma estrutura forte. E quando for vender algum dia, com certeza ela terá imenso valor, não saberemos se vai continuar casinha aí ou se algum prédio.</p>
    </div>
    <div>
        <h5 class="font-semibold">Houveram acontecimentos marcantes na casa?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Entende sobre patrimônio histórico?</h5>
        <p>R:Patrimônio é o que pertence à prefeitura.</p>
    </div>
    <div>
        <h5 class="font-semibold">Conhece algum patrimônio histórico de Timóteo?</h5>
        <p>R: O grupo Getúlio Vargas, que foi onde trabalhei 27 anos.
           R: A igreja, a fundação Aperam.</p>
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
        <p>R: Muito, e como desenvolveu.
        </p>
    </div>
    <div>
        <h5 class="font-semibold">O patrimônio histórico de Timóteo está sendo preservado?</h5>
        <p>R: Está né, apesar de que a gente fica aqui confinada, mas está sendo preservado.</p>
    </div>
    <div>
        <h5 class="font-semibold">O que a população pode fazer para preservar o patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Como as pessoas podem aprender mais e serem conscientizadas sobre este patrimônio?</h5>
        <p>R: R: Tem que frequentar a escola, o colégio, principalmente os alunos.</p>
    </div>
</div>
`;

const entrevista3 = ` 
    <div class="space-y-4">
    <div>
        <h4 class="font-semibold">Bromélias - Irmãos</h4>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo sua mãe mora na casa?</h5>
        <p>R: Em torno de 50 anos.</p>
    </div>
    <div>
        <h5 class="font-semibold">É proprietária?</h5>
        <p>R: É, meu pai faleceu recentemente.</p>
        <p>R: Comprou a casa da Acesita na época, trabalhou lá 40 anos, na época que nasceu o bairro, Bromélias.</p>
    </div>
    <div>
        <h5 class="font-semibold">Foi o primeiro morador? Sabe quem foi?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">A casa já passou por alguma reforma ou intervenção?</h5>
        <p>R: Não, original mesmo.</p>
    </div>
    <div>
        <h5 class="font-semibold">Existem dificuldades para a preservação ou manutenção da casa?</h5>
        <p>R: Não.</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabia que essa casa é da época da implantação da siderúrgica?</h5>
        <p>R: Sim.</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para você?</h5>
        <p>R: Muito, é uma história de vida né, nascemos e fomos criados aqui, meu pai e minha mãe chegaram a morar na rua de baixo mas eu não era nascido não e depois mudaram pra cá, não sei quanto tempo mas essa casa deve ter uns 50 anos mais ou menos.</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para a cidade?</h5>
        <p>R: Demais, com certeza.</p>
    </div>
    <div>
        <h5 class="font-semibold">Houveram acontecimentos marcantes na casa?</h5>
        <p>R: Eu lembro quando eu era criança, era piso vermelhão, fazia com xadrez, não tinha cerâmica. Era uma casa muito simples então, aquele vermelhão cimentado, passava o xadrez aí tinha vermelho, amarelo, verde, o nosso era vermelho, aí vinha e encerava, com a enceradeira que nem usa isso mais, passava cera pastosa.</p>
    </div>
    <div>
        <h5 class="font-semibold">Entende sobre patrimônio histórico?</h5>
        <p>R: Uma noção mais ou menos.</p>
    </div>
    <div>
        <h5 class="font-semibold">Conhece algum patrimônio histórico de Timóteo?</h5>
        <p>R: Tem um patrimônio que recentemente foi vendido né, o hotel Acesita aqui, o restaurante, aí demoliu todo, agora é drogaria Araújo, então é um patrimônio que na época que eles venderam criou alguma polêmica pela população, mas quem tá vendendo é a família. Nós vivemos nisso aí, compra e venda, compra e venda, quem comprou poderia ter preservado? Sim, mas não era o objetivo, a drogaria Araújo é uma rede de drogaria famosa né, que montou a farmácia aí. A cidade vai mudando né, então por exemplo esse era um patrimônio histórico da cidade, o hotel Acesita.</p>
    </div>
    <div>
        <h5 class="font-semibold">Qual a importância do patrimônio histórico para você e para a cidade?</h5>
        <p>R: Importante pela memória, mas conforme eu falei aí a memória foi apagada né, então não tem mais, aí fica as fotos. Funcionou ali muitos anos. Ainda preserva lá, ainda bem, a fundação Aperam, que aquilo ali também é um patrimônio da cidade, que tá lá quietinho, que é da Aperam né então eles não vão mexer. Que eu me lembre assim, à princípio, tenho outra recordação que é o Carnaval. Eu era criança e o Carnaval vinha pessoal de fora, de Ipatinga, Fabriciano e cidades vizinhas. E isso foi se perdendo, provavelmente por falta de verba, talvez, creio que a prefeitura ajudava na época, eu era criança então não sei falar ao certo. Mas certamente, porque era atração, turismo, movimentava a cidade, na época não tinha muito hotel mas tinha alguma coisa.</p>
    </div>
    <div>
        <h5 class="font-semibold">A siderúrgica tem um papel significativo para a construção da história da cidade?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">O patrimônio histórico de Timóteo está sendo preservado?</h5>
        <p>R: Vai mudando a configuração, aqui por exemplo a tendência é virar prédio. É natural, a população tá crescendo, e não tem lugar então tem que crescer pra cima. O terreiro por ali, cimentado, meu pai construiu uma casa lá nos fundos, de dois andares e a gente mora lá desde 97, esse terreiro é uma qualidade de vida que hoje está se perdendo. As crianças que nascem hoje é tudo dentro de apartamento, aquele cubículo igual uma caixa de fósforo, mas é a realidade né? Quando eu me casei em 2010 eu senti muita diferença, que morar em apartamento é loucura, quem não tem a experiência acha que é legal, eu achava que era legal, mas legal é isso aqui, espaço, sair pro terreiro, tomar um sol. Aí tem gente hoje em dia, por exemplo, pessoa mais velha que os filhos já casaram, um casal, tá lá, aí o filho já casou, mora fora, aí mora em uma casa e quer ir para um apartamento, “Aí que a casa é muito grande”, às vezes nunca morou né? Não tem a experiência, fica quietinho, eu falo isso, fica quieto. Aí vem o outro lado da moeda né, que a moeda tem a cara e a coroa, quem mora em casa fala que é grande, muita coisa pra arrumar, e realmente é mais, mas é muito melhor.</p>
    </div>
    <div>
        <h5 class="font-semibold">O que a população pode fazer para preservar o patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Como as pessoas podem aprender mais e serem conscientizadas sobre este patrimônio?</h5>
        <p>R:</p>
    </div>
    </div>
`

    const entrevista4= ` 
      <div class="space-y-4">
    <div>
        <h4 class="font-semibold">Bromélias - Rua Manoel Samora </h4>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo mora na casa??</h5>
        <p>R: São 7 anos.</p>
    </div>
    <div>
        <h5 class="font-semibold">É proprietário? Em qual contexto você se encontra nela hoje?</h5>
        <p>R:Não sou proprietário da casa. Eu falo que eu sou um merecedor de ter essa casa, esse quintal, foi um desejo e ela aconteceu pra mim, apareceu essa casa, e eu cuido dela há 7 anos. Ela é alugada e os donos são uma construtora, o objetivo deles é construir um prédio, porém o plano diretor atual da cidade não permite uma construção tão grande, então eles esperam para ter essa oportunidade de fazer um projeto maior aqui.</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabe quem foi o primeiro morador?</h5>
        <p>R:: A primeira família a morar era a família de um engenheiro italiano que veio trabalhar na construção da Acesita, 
        então a casa é da época de 60 para 70. O engenheiro se chamava Giovanni Moro.</p>
    </div>
    <div>
        <h5 class="font-semibold">A casa já passou por alguma reforma ou intervenção?</h5>
        <p>R: Eu acho que a fachada mesmo, ela conserva, o próprio símbolo da Acesita está gravado na frente, os triângulos invertidos. Então eu acredito que a fachada não passou por reformas, a única coisa foi o forro, que foi colocado um forro de PVC nela, no mais, a fachada continua, 
        alpendre e o ladrilho também são originais, eu acredito</p>
    </div>
    <div>
        <h5 class="font-semibold">Existem dificuldades para a preservação ou manutenção da casa?</h5>
        <p>R: As telhas são telhas francesas e a madeira é muito antiga, 
        então dá muito cupim. O peso do telhado também é uma coisa muito forte, 
        então dá goteiras na casa, isso é uma dificuldade.</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabia que essa casa é da época da implantação da siderúrgica?</h5>
        <p>R: Isso!</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para você?</h5>
        <p>R: Eu acredito que sim, mas acredito também na energia que eu trago para as casas que eu vou morar sempre, como eu estou aqui hoje, amanhã eu posso não estar então eu tenho certeza que qualquer lugar que eu for vai ter a minha energia, 
        as minhas características vão estar implantadas na casa, então eu posso dar vida a qualquer ambiente em que eu estiver.</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para a cidade?</h5>
        <p>R:Com certeza, hoje, atualmente então como esse espaço cultural de receber artistas, de trazer conhecimento de obras e de jardinagem e paisagismo, nesse contexto hoje, ela se 
        torna mais importante do que só uma fachada, então com certeza é importantíssimo.</p>
    </div>
    <div>
        <h5 class="font-semibold">Houveram acontecimentos marcantes na casa?</h5>
        <p>R: Todos os acontecimentos são marcantes, a visita do Tizumba, as folias, os boi bumbás, as 
        cantorias que a gente faz de rodas de violas, tudo isso é marcante pra mim em cada ocasião</p>
    </div>
    <div>
        <h5 class="font-semibold">Se não fosse por esse espaço, seria mais difícil realizar essas atividades?</h5>
        <p>R:Com certeza, essas atividades só acontecem por causa do espaço. 
        Acaba sendo uma locação para vários artistas fazerem seus clipes, então com certeza.</p>
    </div>
    <div>
        <h5 class="font-semibold">Entende sobre patrimônio histórico?</h5>
        <p>R:Pode ser material ou imaterial. Eu acredito que essa casa poderia facilmente ser tombada se os donos quisessem isso, 
        como patrimônio é uma coisa que traga alguma referência para a cidade, o contexto da
         implementação siderúrgica, essa história de ter o símbolo da Acesita. 
         Então tem essa importância o patrimônio material do espaço físico. 
         Como uma casa de patrimônio material a gente recebe guardas de Congado, 
         por exemplo,  que são patrimônios imateriais da cidade de Timóteo. A guarda de Congo de São Sebastião de Timóteo é uma parceira nossa, da casa, a gente faz estandartes da folia, do congado, e depois eles vem, tem a feijoada, a fogueira, tem o hasteamento da bandeira. Esse é o nosso patrimônio imaterial que está sendo preservado a partir dessa dinâmica da casa.</p>
    </div>
    <div>
        <h5 class="font-semibold">Conhece algum patrimônio histórico de Timóteo?</h5>
        <p>R: A igreja eu acredito que já é né, a igreja de São José do Operário, 
        a fundação Aperam é também. A gente perdeu a pouco tempo o hotel que era o 
        restaurante Monte Alto, que foi demolido. Mas casas como essa, existem 
        várias por aí, esse muro de cobogó, toda essa fachada é muito comum, 
        é só reparar mais que você vai encontrar nessas fachadas.</p>
    </div>
    <div>
        <h5 class="font-semibold">Qual a importância do patrimônio histórico para você e para a cidade?</h5>
        <p>R: Deixar esse legado, deixar essas informações, isso é o patrimônio histórico, 
        levar essas informações e não deixar isso guardado.</p>
    </div>
    <div>
        <h5 class="font-semibold">A siderúrgica tem um papel significativo para a construção da história da cidade?</h5>
        <p>R:Importante, com certeza é importante, mas nem sempre é benéfico. 
        Acho que é uma questão de mais valia, de exploração do serviço e de concessão 
        de áreas, o tanto de território que a indústria possui no nosso redor, 
        nesse contexto de Timóteo, para expansão por exemplo, essas áreas 
        poderiam ser mais bem estruturadas. E aí fica em uma coisa meio de áreas de 
        preservação ambientais que são importantíssimas, aí eles plantam eucalipto, 
        que é uma coisa que prejudica, aqui por exemplo os cupins, aqui atrás tem uma 
        mata de eucalipto da Aperam, então essa preservação não é a preservação que a 
        gente quer. Agora financeiramente para o desenvolvimento da cidade a aperam é 
        super rentável.</p>
    </div>
    <div>
        <h5 class="font-semibold">O patrimônio histórico de Timóteo está sendo preservado?</h5>
        <p>R: Não, de forma alguma. Os únicos bens que são realmente preservados é a 
        Igrejinha de São José e a fundação Aperam, no mais nenhum dos outros bens tem 
        algum incentivo ou alguma coisa para se preservar. Por exemplo, 
        o Quintal Café com Arte, é uma fachada que está sendo preservada, 
        e de uma forma muito elegante e consciente de ser, então mais iniciativas como
         essa deveriam ser tomadas</p>
    </div>
    <div>
        <h5 class="font-semibold">O que a população pode fazer para preservar o patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Como as pessoas podem aprender mais e serem conscientizadas sobre este patrimônio?</h5>
        <p>R:Participando, convivendo com esse tipo de estruturas, então estou citando mais uma vez o Quintal Café com Arte, porque é um lugar que você pode ver a 
        beleza na arquitetura daquela forma que era na década de 60, 70, e mesmo assim enxergar o belo da coisa, o olhar estético da coisa.</p>
    </div>
    </div>
`
    const entrevista5 = `
        <div class="space-y-4">
    <div>
        <h4 class="font-semibold">Vila dos Técnicos - Zona Eleitoral</h4>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo trabalha na casa?</h5>
        <p>R: 6 anos.</p>
    </div>
    <div>
        <h5 class="font-semibold">Há quanto tempo a proprietária mora na casa?</h5>
        <p>R:  Eu acho que mais de 50 anos.</p>
    </div>
    <div>
        <h5 class="font-semibold">Foi o primeiro morador? Sabe quem foi?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">A casa já passou por alguma reforma ou intervenção?</h5>
        <p>R: Não.</p>
    </div>
    <div>
        <h5 class="font-semibold">Existem dificuldades para a preservação ou manutenção da casa?</h5>
        <p>R: Não, tranquilo.</p>
    </div>
    <div>
        <h5 class="font-semibold">Sabia que essa casa é da época da implantação da siderúrgica?</h5>
        <p>R: Sim!</p>
    </div>
    <div>
        <h5 class="font-semibold">A história da casa é importante para você?</h5>
        <p>R: Para mim não, mas pros moradores é né? Deve ser.</p>
    <div>
        <h5 class="font-semibold">A história da casa é importante para a cidade?</h5>
        <p>R: É importante sim.</p>
    </div>
    <div>
        <h5 class="font-semibold">Houveram acontecimentos marcantes na casa?</h5>
        <p>R: Não.</p>
    </div>
    <div>
        <h5 class="font-semibold">Entende sobre patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Conhece algum patrimônio histórico de Timóteo?</h5>
        <p>R: Coliseu, tem um alto forno lá na Olaria.</p>
    </div>
    <div>
        <h5 class="font-semibold">Qual a importância do patrimônio histórico para você e para a cidade?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">A siderúrgica tem um papel significativo para a construção da história da cidade?</h5>
        <p>R: Teve sim.</p>
    </div>
    <div>
        <h5 class="font-semibold">O patrimônio histórico de Timóteo está sendo preservado?</h5>
        <p>R:Tá não.</p>
    </div>
    <div>
        <h5 class="font-semibold">O que a população pode fazer para preservar o patrimônio histórico?</h5>
        <p>R:</p>
    </div>
    <div>
        <h5 class="font-semibold">Como as pessoas podem aprender mais e serem conscientizadas sobre este patrimônio?</h5>
        <p>R:Não sei não</p>
    </div>
    </div>
    
    
    
    
    
    
    `
    

// Exemplo de depoimentos
const depoimentos = [
    {
        bairro: "Funcionários ",
        texto: "Existem dificuldades para a preservação ou manutenção da casa? R: Não, já tem mais de 60 anos e como foi feita de madeiras muito nobres, aqui tem peroba rosa e outros tipos de madeira que meu marido saberia identificar para vocês. ...", 
        entrevista: entrevista1,
        endereço: "Avenida Alberto Batista Gallo",
        desenho: "img/desenhos/2.jpg"
        
    },
    {
        bairro: "Funcionários",
        texto: " A história da casa é importante para você? R: É né, os filhos foram criados aqui, eu trabalhei aqui no grupo Getúlio Vargas, é tudo perto, pra mim foi ótimo. R: É super interessante, porque desde criancinha nós vivemos aí no quintal, nosso pai criava galinhas ...",
        entrevista: entrevista2,
        endereço: "Instituto de Educação Passos Gigantes",
        desenho: "img/desenhos/3.jpg"
    },
    {
        bairro: "Bromélias",
        texto: "Houveram acontecimentos marcantes na casa? R: Eu lembro quando eu era criança, era piso vermelhão, fazia com xadrez, não tinha cerâmica. Era uma casa muito simples então, aquele vermelhão cimentado, passava o xadrez aí tinha vermelho, amarelo, verde, o nosso era vermelho, aí vinha e encerava",
        entrevista: entrevista3,
        endereço: "Bromélias - Irmãos",
        desenho: "img/desenhos/4.jpg"
    },
    {
        bairro: "Bromélias",
        texto: "A história da casa é importante para a cidade? R: Com certeza, hoje, atualmente então como esse espaço cultural de receber artistas, de trazer conhecimento de obras e de jardinagem e paisagismo, nesse contexto hoje, ela se torna ...",
        entrevista: entrevista4,
        endereço: "Bromélias - Rua Manoel Samora",
        desenho: "img/desenhos/4.jpg"
    },

    {
        bairro: "Vila dos Técnicos ",
        texto: "Existem dificuldades para a preservação ou manutenção da casa?R: Não, tranquilo.Sabia que essa casa é da época da implantação da siderúrgica?R: Sim!A história da casa é importante para você?R: Para mim não, mas pros moradores é ...",
        entrevista: entrevista5,
        endereço: "Vila dos Técnicos - Zona Eleitoral",
        desenho: "img/desenhos/7.jpg"
    },
];

exibirDepoimentos(depoimentos, "depoimentos-container");


