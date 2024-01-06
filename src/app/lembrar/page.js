"use client"
import React, { useState } from 'react';
import style from '../lembrar/lembrar.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";
import Link from "next/link";


export default function Lembrar(){

    return (
        <> 
        <div className="background"> 
           <LoginCard title= "Recuperar a senha">
           <form className='form'> 
           <label>Insira o seu e-mail</label>
            <Input className='input-email' type= "email" placeholder="Digite o email" />
        
           <div className='buttons-lembrar'>
               <Button type="submit">Enviar</Button>
               <Link href="/login">Já possui uma conta? Faça login!</Link>
           </div>
        </form>
            </LoginCard>
        </div>
        </>
        
    );
}