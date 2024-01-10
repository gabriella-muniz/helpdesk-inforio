"use client"

import style from '../trocarSenhaModal/lembrar.css';
import React from 'react';
import Link from 'next/link';
import Button from '../button/button';
import Input from '../input/input'
import LoginCard from '@/app/login-card/page';
import { BiMailSend } from "react-icons/bi";

export default function TrocarSenhaModal ({ id='modal', onClose =() => {}}){
    const handleLoginLinkClick = () => {
        onClose(); 
      };

      const handleOutsideClick = (e) => {
        if(e.target.id == id) onClose();
    }


  return(
    <>
<div id={id} onClick={handleOutsideClick}className='background-lembrar'>
    <LoginCard title="Recuperar a senha">
     <form className='form'>
        <label>Insira o seu e-mail</label>
        <div className="input-container"> <Input
        
         type="email" 
         placeholder="Digite o email"/>
         <BiMailSend  className="icon" />
            </div>

          <div className='buttons-lembrar'>
          <Button type="submit">Enviar</Button>
          <Link href="/login"  onClick={handleLoginLinkClick}>Já possui uma conta? Faça login!
            </Link>
          </div>
        </form>
    </LoginCard>
    </div>
    </>
  );
};


