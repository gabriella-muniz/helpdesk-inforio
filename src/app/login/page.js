"use client"
import style from '../login/style-login.css'
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from '../login-card/page';
import TrocarSenhaModal from '../components/trocarSenhaModal/trocar-senha-modal';

export default function Login() {
  const [isTrocarSenhaModalOpen, setTrocarSenhaModalOpen] = useState(false);
 

  return (
    <>
      <div className="background">
        <LoginCard title="Entre na sua conta">
          <form className="form">
            <Input type="email" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit">Entrar</Button>
            <Link href="/cadastro">Ainda não possui conta? Crie uma!</Link>
            <Button type="button" onClick={() => setTrocarSenhaModalOpen(true)}>Esqueceu a senha? Clique aqui!</Button>
          </form>
        </LoginCard>
      </div>

      {isTrocarSenhaModalOpen && (
        <TrocarSenhaModal onClose={() => setTrocarSenhaModalOpen(false)} />
      )}
    </>
  );
}
