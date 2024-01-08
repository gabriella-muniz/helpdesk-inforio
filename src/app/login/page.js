"use client"
import style from '../login/style-login.css'
import Link from 'next/link'
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase'; 
import { useRouter } from 'next/router';
import { BiUser  } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";



export default function Login() {
   
    return (
        
      <> 
        
      <div className='background'> 
      <LoginCard title= "Entre na sua conta">
      
      <form className="form">
            <div className="input-container">
              <Input type="email" placeholder="Digite seu email" />
              <BiUser className="icon" />
            </div>
            <div className="input-container">
              <Input type="password" placeholder="Digite sua senha" />
              <BiLockAlt className="icon"/>
            </div>

            <Button>Entrar</Button>
            <Link href="/cadastro">Ainda não possui conta? Crie uma! </Link>
            <Link href="/lembrar">Esqueceu a senha? Clique aqui</Link>
          </form>
         
         </LoginCard>
         </div>
         
         </>
     
  )
}