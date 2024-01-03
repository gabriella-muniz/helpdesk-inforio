"use client"
import { database } from '../../../services/firebase';
import {  useState } from 'react';
import style from '../cadastro/cadastro.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";
import Link from 'next/link';
import { getDatabase, ref, push, set } from 'firebase/database';


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagens, setMensagens] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    senha: '',
    confirmaSenha: '',
  });
  const [sucesso, setSucesso] = useState(false);

  const gravar = (e) => {
    e.preventDefault();

    // Verifique se todos os campos necessários estão preenchidos antes de gravar no banco de dados
    if (!nome || !email || !cpf || !telefone || !senha || senha !== confirmaSenha) {
      console.error('Formulário inválido');
      return;
    }

    // Use o método push() ou set() conforme necessário para salvar os dados
    // Aqui estou usando push() como exemplo

    // Crie uma referência para o nó "contatos" no seu banco de dados
    const db = getDatabase();
    const contatosRef = ref(db, 'contatos');

    // Gere uma nova chave única para cada registro
    const novoContatoRef =  push(contatosRef);

    // Salve os dados no nó "contatos" usando a chave gerada
    set(novoContatoRef, {
      nome,
      email,
      telefone,
      cpf,
      senha,
      confirmaSenha,
    });

    // Configura o estado de sucesso para exibir a mensagem adequada
    setSucesso(true);
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    // Limpa as mensagens de erro antes de validar novamente
    setMensagens({
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      senha: '',
      confirmaSenha: '',
    });
    setSucesso(false);

    // validação de cada campo 
    if (!nome) {
      setMensagens((prev) => ({ ...prev, nome: 'Campo nome é obrigatório ❌' }));
    }

    if (!email) {
      setMensagens((prev) => ({ ...prev, email: 'Campo email é obrigatório ❌' }));
    }

    if (!cpf) {
      setMensagens((prev) => ({ ...prev, cpf: 'Campo CPF é obrigatório ❌' }));
    }

    if (!telefone) {
      setMensagens((prev) => ({ ...prev, telefone: 'Campo telefone é obrigatório ❌' }));
    }

    if (!senha) {
      setMensagens((prev) => ({ ...prev, senha: 'Campo senha é obrigatório ❌' }));
    }

    if (senha !== confirmaSenha) {
      setMensagens((prev) => ({ ...prev, confirmaSenha: 'As senhas não coincidem ❌' }));
    }

    // Se houver mensagens de erro, o formulário é inválido
    if (Object.values(mensagens).some((mensagem) => mensagem !== '')) {
      return;
    }

    // Simulando a lógica de salvar dados no Firebase
    gravar(e);
    // Lógica para salvar dados...
  };

  

  return (
    <>
      <div className="background">
        <LoginCard title="Crie sua conta">
          <form className='form' onSubmit={handleCadastro}>
            <Input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            {mensagens.nome && <p className="erro">{mensagens.nome}</p>}

            <Input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {mensagens.email && <p className="erro">{mensagens.email}</p>}

            <Input type="number" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            {mensagens.cpf && <p className="erro">{mensagens.cpf}</p>}

            <Input type="tel" id="telefone"   placeholder="Telefone: (xx) xxxxx-xxxx" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            {mensagens.telefone && <p className="erro">{mensagens.telefone}</p>}

            <Input type="password" placeholder="Crie sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            {mensagens.senha && <p className="erro">{mensagens.senha}</p>}

            <Input type="password" placeholder="Informe sua senha novamente" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
            {mensagens.confirmaSenha && <p className="erro">{mensagens.confirmaSenha}</p>}

            {sucesso && Object.values(mensagens).every((mensagem) => mensagem === '') && <p className="sucesso">Cadastro realizado com sucesso! ✔️</p>}

            <Button type="submit">Cadastrar</Button>
            <Link href="/login">Já possui uma conta? Faça login! </Link>
          </form>
        </LoginCard>
      </div>
    </>
  );
}



