import style from '../cadastro/cadastro.css'
import Button from '../components/button/button';

import Input from '../components/input/input';
import LoginCard from "../login-card/page";
import Link from 'next/link';

export default function Cadastro(){
    return (
        <> 
        
        <div className="background"> 
           <LoginCard title= "Crie sua conta">
           <form className='form'> 
           <Input type= "text" placeholder="Digite seu nome" />
            <Input type= "email" placeholder="Digite seu email" />
            <Input type= "number" placeholder="CPF" />
            <Input type="tel" id="telefone" pattern="(00)00000-0000" required placeholder="Telefone: (xx) xxxxx-xxxx"></Input>
            <Input type= "password" placeholder="Crie sua senha" />
            <Input type= "password" placeholder="Informe sua senha novamente" />
           <Button>Cadastrar</Button>
           <Link href="/login">Já possui uma conta? Faça login! </Link>
        </form>
            </LoginCard>
        </div>
        
        </>
    )
}