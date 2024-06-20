import { useState } from 'react'
import {Component} from './Carousel'

function CasasMain() {
return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    <Component desenho= "img/desenhos/Funcionarios/fachada3.png" casa="img/casas/Funcionarios/AvenidaCyroCottaPoggiali09.png" endereco="Bairro Funcionarios. Avenida Cyro Cotta Poggiali, 09" bairro=" Funcionarios" />
    <Component desenho= "img/desenhos/Timirim/fachada1.png" casa="img/casas/Timirim/Rua Teobaldo Gomes Pinto, 15.png" endereco="Bairro Timirim. Rua Teobaldo Gomes Pinto, 15" bairro="Timirim"  />
    <Component desenho= "img/desenhos/Tecnicos/fachada1.png" casa="img/casas/tecnicos/Rua Trinta e Sete, 8.png" endereco="Vila dos tecnicos. Rua Trinta e Sete, 8" bairro="Tecnicos"  />
  </div> 
 )
  
}

export default CasasMain
