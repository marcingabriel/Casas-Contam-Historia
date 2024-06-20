 // Seleciona todos os elementos que deseja animar
 const elementsToAnimate = document.querySelectorAll('.animate');
    
 // Cria uma instância do Intersection Observer para cada elemento
 elementsToAnimate.forEach(elementToAnimate => {
     const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
             // Verifica se o elemento está visível na tela
             if (entry.isIntersecting) {
                 // Adiciona as classes de animação
                 entry.target.classList.add('opacity-100', 'animate-fade-down', 'animate-once','animate-delay-400','animate-ease-in');
                 // Desconecta o observador, pois não é mais necessário
                 observer.unobserve(entry.target);
             }
         });
     });
 
     // Observa o elemento atual
     observer.observe(elementToAnimate);
 });




  // Seleciona todos os elementos que deseja animar
  const elementsToAnimate2 = document.querySelectorAll('.animate-left');
    
  // Cria uma instância do Intersection Observer para cada elemento
  elementsToAnimate2.forEach(elementToAnimate => {
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              // Verifica se o elemento está visível na tela
              if (entry.isIntersecting) {
                  // Adiciona as classes de animação
                  entry.target.classList.add('opacity-100', 'animate-fade-left', 'animate-once','animate-delay-200','animate-ease-in');
                  // Desconecta o observador, pois não é mais necessário
                  observer.unobserve(entry.target);
              }
          });
      });
  
      // Observa o elemento atual
      observer.observe(elementToAnimate);
  });



   // Seleciona todos os elementos que deseja animar
 const elementsToAnimate3 = document.querySelectorAll('.animate-up');
    
 // Cria uma instância do Intersection Observer para cada elemento
 elementsToAnimate3.forEach(elementToAnimate => {
     const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
             // Verifica se o elemento está visível na tela
             if (entry.isIntersecting) {
                 // Adiciona as classes de animação
                 entry.target.classList.add('opacity-100', 'animate-fade-up', 'animate-once','animate-delay-700','animate-ease-in-out','animate-alternate','animate-fill-both');
                 // Desconecta o observador, pois não é mais necessário
                 observer.unobserve(entry.target);
             }
         });
     });
 
     // Observa o elemento atual
     observer.observe(elementToAnimate);
 });