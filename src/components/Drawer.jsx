"use client";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

export function DrawerComponent({ isOpen, handleClose,desenho,casa,endereco }) {
  return (
    <Drawer open={isOpen} onClose={handleClose} style={{ width: "40vw", maxWidth: "400px" }} >
      <Drawer.Header title="Informacoes" />
      <Drawer.Items>
       <h1>Desenho da Casa</h1>
       <img src={desenho} alt="Desenho da casa" className="" />
       <h1>Casa</h1>
       <img src={casa} alt="Foto da casa" className=" " />
       <h2>{endereco}</h2>
      </Drawer.Items>
    </Drawer>
  );
}
