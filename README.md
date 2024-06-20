# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Casas Galeria:
filtrarPorBairro: Função que filtra os itens de um array por bairro, com base no filtroBairro. Utiliza filter() para retornar apenas os itens cujo nome do bairro inclui filtroBairro (insensitivo a maiúsculas/minúsculas).

handleInputChange: Função que é chamada quando o usuário digita no input HTML. Ela atualiza o estado filtroBairro com o valor atual do input.

useEffect: Hook que adiciona um listener ao input HTML para capturar mudanças. Limpa esse listener ao desmontar o componente.

casasPorBairro: Um objeto onde cada chave é o nome do bairro e o valor é um array de objetos de casas que pertencem a esse bairro. Isso é construído percorrendo casasData e agrupando as casas pelo nome do bairro.

bairrosFiltrados: Array que contém apenas os nomes de bairro que têm casas correspondentes ao filtro filtroBairro. Ele é gerado filtrando as chaves do objeto casasPorBairro com base na função filtrarPorBairro.

Renderização: Agora, o código renderiza apenas os bairros que têm casas correspondentes ao filtro filtroBairro. Cada bairro é renderizado como uma div com um título (h2) e as casas correspondentes são renderizadas dentro de um grid.