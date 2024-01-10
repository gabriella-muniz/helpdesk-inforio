"use client"
import style from '../login/style-login.css'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from '../login-card/page';
import TrocarSenhaModal from '../components/trocarSenhaModal/trocar-senha-modal';
import { useRouter } from 'next/router';
import { BiUser  } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";



export default function Login() {
  const [isTrocarSenhaModalOpen, setTrocarSenhaModalOpen] = useState(false);
 

  return (
    <>
      <div className="background">
        <LoginCard title="Entre na sua conta">
          <form className="form">
           <div className='input-container'> <Input type="email" placeholder="Digite seu email" />
           <BiUser className='icon'/> 
           </div>

           <div className='input-container'> <Input type="password" placeholder="Digite sua senha" />
           <BiLockAlt className="icon"/>
           </div>
           
            <Button type="submit">Entrar</Button>
            <Button className='button2' type="button" onClick={() => setTrocarSenhaModalOpen(true)}>Esqueceu a senha? Clique aqui!</Button>
          </form>
        </LoginCard>
      </div>

      {isTrocarSenhaModalOpen && (
        <TrocarSenhaModal onClose={() => setTrocarSenhaModalOpen(false)} />
      )}
    </>
  );
}
