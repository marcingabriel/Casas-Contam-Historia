import React, { useState, useEffect } from 'react';
import {Component} from './Carousel'

function CasasGaleria() {
  const [filtroBairro, setFiltroBairro] = useState('');
  const [casasData] = useState([
    { desenho: "img/desenhos/Funcionarios/fachada3.png", casa: "img/casas/Funcionarios/AvenidaCyroCottaPoggiali09.png", endereco: "Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09", bairro: "Funcionarios" },
    { desenho: "img/desenhos/4.jpg", casa: "img/casas/Funcionarios/Avenida Cyro Cotta Poggiali, 09.png", endereco: "Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09", bairro: "Funcionarios" },
    { desenho: "img/desenhos/3.jpg", casa: "img/casas/Funcionarios/Avenida Alberto Batista Gallo, n 11.jpg", endereco: "Bairro Funcionarios. Avenida Alberto Batista Gallo, n 11.", bairro: "Funcionarios" },
    { desenho: "img/desenhos/5.jpg", casa: "img/casas/Funcionarios/Avenida Jucelino Kubisckek, 12.png", endereco: "Bairro Funcionarios. Avenida Jucelino Kubisckek, 12.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Alberto Batista Gallo, 4.png", endereco: "Avenida Alberto Batista Gallo, 4.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Alberto Batista Gallo, 8.png", endereco: "Avenida Alberto Batista Gallo, 8.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Alberto Batista Gallo, 10.png", endereco: "Avenida Alberto Batista Gallo, 10.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Alberto Batista Gallo, no12.jpg", endereco: "Avenida Alberto Batista Gallo, 12.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Almir de Souza Ameno, 28.png", endereco: "Avenida Almir de Souza Ameno, 28.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Avenida Almir de Souza Ameno, 56.png", endereco: "Avenida Almir de Souza Ameno, 56.", bairro: "Funcionarios" },
    { desenho: "img/desenhos/5.jpg", casa: "img/casas/Funcionarios/Avenida Jucelino Kubisckek, 14.png", endereco: "Avenida Jucelino Kubisckek, 14.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Endereço Avenida Alberto Batista Gallo, 10.png", endereco: "Avenida Alberto Batista Gallo, 10.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Endereço Avenida Jucelino Kubisckek, 30.jpg", endereco: "Avenida Jucelino Kubisckek, 30.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Endereço Avenida Jucelino Kubisckek, 52.jpg", endereco: "Endereço Avenida Jucelino Kubisckek, 52.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Rua Cinquenta e oito, 7.png", endereco: "Rua Cinquenta e oito, 7.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Rua Coronel Geraldo Batista, 16C.jpg", endereco: "Rua Coronel Geraldo Batista, 16C.", bairro: "Funcionarios" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Funcionarios/Rua Coronel Geraldo Batista, 18.png", endereco: "Rua Coronel Geraldo Batista, 18.", bairro: "Funcionarios" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/Rua Teobaldo Gomes Pinto, 15.png", endereco: "Bairro Timirim. Rua Teobaldo Gomes Pinto, 15", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-001.jpg", endereco: "Rua Domingos Quaresma, 10.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-002.jpg", endereco: "Rua José Julio Laje, 11.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-003.jpg", endereco: "Rua Domingos Quaresma, 8.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-004.jpg", endereco: "Rua Joaquim Carlos De Oliveira, 16.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-005.jpg", endereco: "Rua Teobaldo Gomes Pinto, 6.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-006.jpg", endereco: "Rua Teobaldo Gomes Pinto, 4.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-007.jpg", endereco: "Rua Teobaldo Gomes Pinto, 8.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-008.jpg", endereco: "Rua José Júlio Laje, 23.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-009.jpg", endereco: "Rua Joaquim Carlos de Oliveira, 6.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-010.jpg", endereco: "Avenida Efigenia Pereira Bitencourt, 34.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-011.jpg", endereco: "Avenida Efigenia Pereira Bitencourt, 40.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-012.jpg", endereco: "Avenida José Viana da Silva, 268.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-013.jpg", endereco: "Avenida José Viana da Silva, 240.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-014.jpg", endereco: "Avenida José Viana da Silva, 267.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-015.jpg", endereco: "Avenida José Viana da Silva, 156.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-016.jpg", endereco: "Avenida Efigenia Pereira Bitencourt, 28.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-017.jpg", endereco: "Avenida Efigenia Pereira Bitencourt, 6.", bairro: "Timirim" },
    { desenho: "img/desenhos/Timirim/fachada1.png", casa: "img/casas/Timirim/image-018.jpg", endereco: "Avenida Efigenia Pereira Bitencourt, 10.", bairro: "Timirim" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/Rua Trinta e Sete, 8.png", endereco: "Vila dos tecnicos. Rua Trinta e Sete, 8", bairro: "Tecnicos" },
    { desenho: "img/desenhos/7.jpg", casa: "img/casas/tecnicos/Rua Jair de Freitas, 3.jpg", endereco: "Rua Jair de Freitas, 3", bairro: "Tecnicos" },
    { desenho: "img/desenhos/1.jpg", casa: "img/casas/tecnicos/Rua Trinta e Sete, 32.jpg", endereco: "Rua Trinta e Sete, 32.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/8.jpg", casa: "img/casas/tecnicos/Avenida Levindo Ribeiro Araujo, 30.jpg", endereco: "Avenida Levindo Ribeiro Araujo, 30.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/1.jpg", casa: "img/casas/tecnicos/Rua Trinta e Sete, 1.jpg", endereco: "Rua Trinta e Sete, 1.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/9.jpg", casa: "img/casas/tecnicos/Avenida Levindo Ribeiro Araujo,30.jpg", endereco: " Avenida Levindo Ribeiro Araujo,30.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/10.jpg", casa: "img/casas/tecnicos/Avenida Levindo Ribeiro Araujo, 22.jpg", endereco: "Avenida Levindo Ribeiro Araujo, 22.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/Rua Jair de Freitas, 1.jpg", endereco: "Rua Jair de Freitas, 2.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/Rua Trinta e Sete, 10.jpg", endereco: "Rua Trinta e Sete, 10.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-000.jpg", endereco: "Rua Levindo Ribeiro Araújo Duarte, 8.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-001.jpg", endereco: "Rua Maria Aparecida Martins Prado, 29.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-002.jpg", endereco: "Rua Maria Aparecida Martins Prado, 21.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-003.jpg", endereco: "Rua Maria Aparecida Martins Prado, 15.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-004.jpg", endereco: "Rua 43, 5.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-005.jpg", endereco: "Rua 43.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-006.jpg", endereco: "Rua Maria Aparecida Martins Prado, 8.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-007.jpg", endereco: "Rua Jair de Freitas, 5.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-010.jpg", endereco: "Rua Trinta e Sete, 24.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-011.jpg", endereco: "Rua Trinta e Sete, 26.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-015.jpg", endereco: " Avenida Levindo Ribeiro Araujo, 26.", bairro: "Tecnicos" },
    
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-020.jpg", endereco: " Rua Trinta e Sete, 13.", bairro: "Tecnicos" },
    { desenho: "img/desenhos/2.jpg", casa: "img/casas/tecnicos/image-023.jpg", endereco: "Avenida Levindo Ribeiro Araujo, 4.", bairro: "Tecnicos" },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Avenida Amazonas, 30..jpg", endereco: "Avenida Amazonas, 30.", bairro: "Bromelias", detalhes: "", drawer: 17 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Avenida Jovino Augusto da Silva, 699..jpg", endereco: "Avenida Jovino Augusto da Silva, 699.", bairro: "Bromelias", detalhes: "", drawer: 18 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 9..jpg", endereco: "Avenida Linthiz Oliveira Novais, 9.", bairro: "Bromelias", detalhes: "", drawer: 19 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 11..jpg", endereco: "Avenida Linthiz Oliveira Novais, 11.", bairro: "Bromelias", detalhes: "", drawer: 20 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Avenida Linthiz Oliveira Novais, 14..jpg", endereco: "Avenida Linthiz Oliveira Novais, 14.", bairro: "Bromelias", detalhes: "", drawer: 21 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua 19 de Novembro.jpg", endereco: "Rua 19 de Novembro.", bairro: "Bromelias", detalhes: "", drawer: 23 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Demerval Klein, 1 (2).jpg", endereco: "Rua Demerval Klein, 1.", bairro: "Bromelias", detalhes: "", drawer: 24 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Domingos Pereira Sobrinho, 6..jpg", endereco: "Rua Domingos Pereira Sobrinho, 6.", bairro: "Bromelias", detalhes: "", drawer: 25 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Domingos Pereira Sobrinho, 7..jpg", endereco: "Rua Domingos Pereira Sobrinho, 7.", bairro: "Bromelias", detalhes: "", drawer: 26 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Gregório de Morais, 3..jpg", endereco: "Rua Gregório de Morais, 3.", bairro: "Bromelias", detalhes: "", drawer: 27 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Gregório de Morais, 6..jpg", endereco: "Rua Gregório de Morais, 6.", bairro: "Bromelias", detalhes: "", drawer: 28 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Joaquim Lima do Amaral, 15.jpg", endereco: "Rua Joaquim Lima do Amaral, 15.", bairro: "Bromelias", detalhes: "", drawer: 29 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua José Fernandes Almeida, 21.jpg", endereco: "Rua José Fernandes Almeida, 21.", bairro: "Bromelias", detalhes: "", drawer: 30 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua José Fernandes Almeida, 25.jpg", endereco: "Rua José Fernandes Almeida, 25.", bairro: "Bromelias", detalhes: "", drawer: 31 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua José Fernandes de Almeida, 4..jpg", endereco: "Rua José Fernandes de Almeida, 4.", bairro: "Bromelias", detalhes: "", drawer: 32 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua José Raimundo Viana, 2..jpg", endereco: "Rua José Raimundo Viana, 2.", bairro: "Bromelias", detalhes: "", drawer: 33 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua José Raimundo Viana, 39..jpg", endereco: "Rua José Raimundo Viana, 39.", bairro: "Bromelias", detalhes: "", drawer: 34 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 15.jpg", endereco: "Rua Manoel Samora, 15.", bairro: "Bromelias", detalhes: "", drawer: 35 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 17..jpg", endereco: "Rua Manoel Samora, 17.", bairro: "Bromelias", detalhes: "", drawer: 36 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 27.jpg", endereco: "Rua Manoel Samora, 27.", bairro: "Bromelias", detalhes: "", drawer: 37 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 28.jpg", endereco: "Rua Manoel Samora, 28.", bairro: "Bromelias", detalhes: "", drawer: 38 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 41..jpg", endereco: "Rua Manoel Samora, 41.", bairro: "Bromelias", detalhes: "", drawer: 39 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 51..jpg", endereco: "Rua Manoel Samora, 51.", bairro: "Bromelias", detalhes: "", drawer: 40 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 56.jpg", endereco: "Rua Manoel Samora, 56.", bairro: "Bromelias", detalhes: "", drawer: 41 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 63..jpg", endereco: "Rua Manoel Samora, 63.", bairro: "Bromelias", detalhes: "", drawer: 42 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 69..jpg", endereco: "Rua Manoel Samora, 69.", bairro: "Bromelias", detalhes: "", drawer: 43 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 74..jpg", endereco: "Rua Manoel Samora, 74.", bairro: "Bromelias", detalhes: "", drawer: 44 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 104..jpg", endereco: "Rua Manoel Samora, 104.", bairro: "Bromelias", detalhes: "", drawer: 45 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 106..jpg", endereco: "Rua Manoel Samora, 106.", bairro: "Bromelias", detalhes: "", drawer: 46 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 136..jpg", endereco: "Rua Manoel Samora, 136.", bairro: "Bromelias", detalhes: "", drawer: 47 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 138.jpg", endereco: "Rua Manoel Samora, 138.", bairro: "Bromelias", detalhes: "", drawer: 48 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Manoel Samora, 156.jpg", endereco: "Rua Manoel Samora, 156.", bairro: "Bromelias", detalhes: "", drawer: 49 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Professora Ana de Staacks, 1..jpg", endereco: "Rua Professora Ana de Staacks, 1.", bairro: "Bromelias", detalhes: "", drawer: 50 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Professora Ana de Staacks, 2..jpg", endereco: "Rua Professora Ana de Staacks, 2.", bairro: "Bromelias", detalhes: "", drawer: 51 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Professora Ana Staacks, 5..jpg", endereco: "Rua Professora Ana Staacks, 5.", bairro: "Bromelias", detalhes: "", drawer: 52 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Raimundo Pereira de Souza, 2..jpg", endereco: "Rua Raimundo Pereira de Souza, 2.", bairro: "Bromelias", detalhes: "", drawer: 53 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Raimundo Pereira de Souza, 3..jpg", endereco: "Rua Raimundo Pereira de Souza, 3.", bairro: "Bromelias", detalhes: "", drawer: 54 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Sergipe, 135..jpg", endereco: "Rua Sergipe, 135.", bairro: "Bromelias", detalhes: "", drawer: 55 },
    { desenho: "img/icon-casa.png", casa: "img/casas/Bromelias/Rua Walter Giffoni, 3..jpg", endereco: "Rua Walter Giffoni, 3.", bairro: "Bromelias", detalhes: "", drawer: 56 },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-000.jpg', endereco: "Rua Antônio Pedra da Silva,14.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-001.jpg', endereco: "Rua Antônio Pedra da Silva,12.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-002.jpg', endereco: "Rua Antônio Pedra da Silva, 3.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-003.jpg', endereco: "Rua Maria Rodrigues de Carvalho, 11.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-004.jpg', endereco: "Rua Maria Rodrigues de Carvalho, 18.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-005.jpg', endereco: "Rua Maria Rodrigues de Carvalho, 14.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-006.jpg', endereco: "Rua Joaquim Ferreira Santiago, 6.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-007.jpg', endereco: "Rua Joaquim Ferreira Santiago, 4.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-008.jpg', endereco: "Rua João Alves de Azevedo, 4.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-009.jpg', endereco: "Rua João Alves de Azevedo, 8.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-010.jpg', endereco: "Rua Maria de Rodrigues Carvalho, 10.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-011.jpg', endereco: "Rua Geraldo Magela Salgado, 10.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-012.jpg', endereco: "Rua Geraldo Magela Salgado, 10.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-013.jpg', endereco: "Avenida Judith Maria do Carmo, 58.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-014.jpg', endereco: "Avenida Judith Maria do Carmo,154.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-015.jpg', endereco: "Avenida Judith Maria do Carmo,190.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-016.jpg', endereco: "Rua José Zacarias da Silveira, 8.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-017.jpg', endereco: "Avenida Judith Maria do Carmo,199.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-018.jpg', endereco: "Avenida Judith Maria do Carmo, 211.", bairro: "Olaria" },
    { desenho: 'img/icon-casa.png', casa: 'img/casas/Olaria/image-019.jpg', endereco: "Avenida Acesita, 298.", bairro: "Olaria" },
  ]);

  // Função para filtrar por bairro
  const filtrarPorBairro = (data, filtro) => {
    return data.filter(casa => casa.bairro.toLowerCase().includes(filtro.toLowerCase()));
  };

  // Função para capturar mudanças no input HTML existente
  const handleInputChange = () => {
    const input = document.getElementById('filtroBairroInput');
    if (input) {
      setFiltroBairro(input.value);
    }
  };

  // Efeito para sincronizar o estado com o input HTML existente
  useEffect(() => {
    const input = document.getElementById('filtroBairroInput');
    if (input) {
      input.addEventListener('input', handleInputChange);

      // Limpar o listener ao desmontar o componente
      return () => {
        input.removeEventListener('input', handleInputChange);
      };
    }
  }, []); // Dependência vazia para executar apenas uma vez

    // Agrupar as casas por bairro
    const casasPorBairro = {};
    casasData.forEach(casa => {
      if (!casasPorBairro[casa.bairro]) {
        casasPorBairro[casa.bairro] = [];
      }
      casasPorBairro[casa.bairro].push(casa);

    });

    // Filtrar os bairros que correspondem ao filtro
  const bairrosFiltrados = Object.keys(casasPorBairro).filter(bairro =>
    filtrarPorBairro(casasPorBairro[bairro], filtroBairro).length > 0
  );

  return (
    <div>
      {/* Renderizar casas por bairro filtrado */}
      {bairrosFiltrados.map(bairro => (
        <div key={bairro} className="mb-4">
          <h2 className="text-xl font-bold mb-2">{bairro}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtrarPorBairro(casasPorBairro[bairro], filtroBairro).map(casa => (
              <Component
                key={casa.endereco}
                desenho={casa.desenho}
                casa={casa.casa}
                endereco={casa.endereco}
                bairro={casa.bairro}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CasasGaleria;
