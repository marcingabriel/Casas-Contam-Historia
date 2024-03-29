document.getElementById('barraPesquisa').addEventListener('input', function() {
    const termoPesquisa = this.value.toLowerCase();
    const todosBairros = document.querySelectorAll('[id^="container-"]');

    todosBairros.forEach(container => {
        const nomeBairro = container.id.split('-')[1]; // Extrai o nome do bairro do ID

        if (nomeBairro.includes(termoPesquisa)) {
            container.style.display = 'block'; // Mostra o contêiner se o termo de pesquisa estiver contido em seu nome
        } else {
            container.style.display = 'none'; // Oculta o contêiner se o termo de pesquisa não estiver contido em seu nome
        }
    });
});
