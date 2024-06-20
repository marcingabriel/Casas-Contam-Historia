import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import { DrawerComponent } from './Drawer';

export function Component({ desenho, casa, endereco, bairro }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="ml-2 pr-3 mt-2 mb-2 w-full  md:p-3 flex flex-col h-56  xl:h-60 2xl:h-72  ">
        <Carousel slide={false}>
          <img
            src={desenho}
            alt="desenho da casa"
            onClick={openDrawer}
            className="cursor-pointer w-full h-full object-cover object-center transition-opacity duration-300 hover:opacity-75 transform transition-transform duration-300 hover:scale-110" 
          />
          <img
            src={casa}
            alt="foto da casa"
            onClick={openDrawer}
            className="cursor-pointer w-full h-full object-cover object-center  transition-opacity duration-300 hover:opacity-75 transform transition-transform duration-300 hover:scale-110"
          />
        </Carousel>
      </div>

      <DrawerComponent
        isOpen={isDrawerOpen}
        handleClose={closeDrawer}
        desenho={desenho}
        casa={casa}
        endereco = {endereco}
        bairro = {bairro}
      />
    </div>
  );
}
