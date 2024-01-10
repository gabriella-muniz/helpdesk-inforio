"use client"

import style from '../trocarSenhaModal/lembrar.css';
import React from 'react';
import Link from 'next/link';
import Button from '../button/button';
import Input from '../input/input'
import LoginCard from '@/app/login-card/page';
import { BiMailSend } from "react-icons/bi";

const TrocarSenhaModal = ({ onClose }) => {
    const handleLoginLinkClick = () => {
        onClose(); // Adiciona o fechamento do modal quando o link é clicado
      };
  return(
    <>
<div onClose={onClose}className='background-lembrar'>
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

export default TrocarSenhaModal;
