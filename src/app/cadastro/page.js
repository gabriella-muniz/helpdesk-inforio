"use client";

import { database } from "../../../services/firebase";
import React, { useState } from "react";
import style from "../cadastro/cadastro.css";
import Button from "../components/button/button";
import Input from "../components/input/input";
import LoginCard from "../login-card/page";
import Link from "next/link";
import { getDatabase, ref, push, set } from "firebase/database";
import { BiUser } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsEye } from "react-icons/bs";



export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [image, setImage] = useState("");
  const [mensagens, setMensagens] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    confirmaSenha: "",
  });
  const [sucesso, setSucesso] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    //console.log("Upload Imagem");//
  };

  const gravar = (e) => {
    e.preventDefault();

    // Verificação de campos necessários
    if (
      !nome ||
      !email ||
      !cpf ||
      !telefone ||
      !senha ||
      senha !== confirmaSenha
    ) {
      console.error("Formulário inválido");
      return;
    }

    // referência "contatos"
    const db = getDatabase();
    const contatosRef = ref(db, "contatos");

    // chave única para cada registro
    const novoContatoRef = push(contatosRef);

    // Salvar os dados dos "contatos" usando a chave gerada
    set(novoContatoRef, {
      nome,
      email,
      telefone,
      cpf,
      senha,
      confirmaSenha,
      image,
    });

    // mensagem adequada
    setSucesso(true);
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    // Limpa as mensagens de erro antes de validar novamente
    setMensagens({
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      senha: "",
      confirmaSenha: "",
      image: "",
    });
    setSucesso(false);

    // validação de cada campo
    if (!nome) {
      setMensagens((prev) => ({
        ...prev,
        nome: "Campo nome é obrigatório ❌",
      }));
    }

    if (!email) {
      setMensagens((prev) => ({
        ...prev,
        email: "Campo email é obrigatório ❌",
      }));
    }

    if (!cpf) {
      setMensagens((prev) => ({ ...prev, cpf: "Campo CPF é obrigatório ❌" }));
    }

    if (!telefone) {
      setMensagens((prev) => ({
        ...prev,
        telefone: "Campo telefone é obrigatório ❌",
      }));
    }

    if (!senha) {
      setMensagens((prev) => ({
        ...prev,
        senha: "Campo senha é obrigatório ❌",
      }));
    }

    if (senha !== confirmaSenha) {
      setMensagens((prev) => ({
        ...prev,
        confirmaSenha: "As senhas não coincidem ❌",
      }));
    }

    // Se houver mensagens de erro, o formulário é inválido
    if (Object.values(mensagens).some((mensagem) => mensagem !== "")) {
      return;
    }

    // chamando a const gravar com o evento e upload imagem
    uploadImage(e);
    gravar(e);
  };

  return (
    <>
      <div className="background">
        <LoginCard title="Cadastro de conta">
          <form className="form" onSubmit={handleCadastro}>
            <div className="input-container">
              <Input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              /><BiUser className="icon" />
              {mensagens.nome && <p className="erro">{mensagens.nome}</p>}
            </div>

            <div className="input-container">
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><MdAlternateEmail className="icon"/>
              {mensagens.email && <p className="erro">{mensagens.email}</p>}
            </div>

            <div>
              <Input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              {mensagens.cpf && <p className="erro">{mensagens.cpf}</p>}
            </div>

            <div className="input-container">
              <Input
                type="tel"
                id="telefone"
                placeholder="Telefone: (xx) xxxxx-xxxx"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              /> <FiPhone className="icon"/>
              {mensagens.telefone && <p className="erro">{mensagens.telefone}</p>}
            </div>

            <div className="input-container">
              <Input
                type="password"
                placeholder="Cadastrosua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              /> <BsEye className="icon"/>
              {mensagens.senha && <p className="erro">{mensagens.senha}</p>}
            </div>

            <div className="input-container">
              <Input
                type="password"
                placeholder="Informe sua senha novamente"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
              /> <BsEye className="icon"/>
              {mensagens.confirmaSenha && (
                <p className="erro">{mensagens.confirmaSenha}</p>
              )}
            </div>

            {sucesso &&
              Object.values(mensagens).every((mensagem) => mensagem === "") && (
                <p className="sucesso">Cadastro realizado com sucesso! ✔️</p>
              )}

            <label>Carregue uma imagem</label>
            <input
              className="input-image"
              type="file"
              name="Image"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <Button type="submit">Cadastrar</Button>
            <Link href="/login">Já possui uma conta? Faça login! </Link>
          </form>
        </LoginCard>
      </div>
    </>
  );
}
