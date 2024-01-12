"use client";

import React, { useState } from 'react';
import style from '../cadastro/cadastro.css';
import Button from '../components/button/button';
import Input from '../components/input/input';
import LoginCard from "../login-card/page";

export default function AberturaChamado() {
  const [assunto, setAssunto] = useState('selecionar');
  const [outrosAssuntos, setOutrosAssuntos] = useState('');
  const [resumo, setResumo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const simularEnvioChamado = async () => {
    // Simulação de envio do chamado
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucesso = Math.random() < 0.8; // 80% de chance de sucesso

        if (sucesso) {
          resolve('Seu chamado foi aberto, aguarde o retorno de um de nossos técnicos.');
        } else {
          reject('Erro ao enviar o chamado. Tente novamente.');
        }
      }, 1000); // Simula um atraso de 1 segundo, como uma chamada de API real
    });
  };

  const abrirChamado = async (e) => {
    e.preventDefault();

    // Verificação de campos necessários
    if (assunto === 'selecionar' || (assunto === 'outros' && !outrosAssuntos) || !resumo) {
      setMensagem('Preencha todos os campos antes de enviar o chamado.');
      return;
    }

    try {
      // Simula o envio do chamado
      const resposta = await simularEnvioChamado();
      setMensagem(resposta);
    } catch (error) {
      console.error('Erro ao enviar o chamado:', error);
      setMensagem('Erro ao enviar o chamado. Tente novamente.');
    }
  };

  const handleAssuntoChange = (e) => {
    setAssunto(e.target.value);

    // Limpar campo de "Outros" quando o assunto é alterado
    if (e.target.value !== 'outros') {
      setOutrosAssuntos('');
    }
  };

  return (
    <>
      <div className="background">
        <LoginCard title="Abertura de Chamado">
          <form className='form' onSubmit={abrirChamado}>
            <label>Selecione o assunto:</label>
            <select value={assunto} onChange={handleAssuntoChange}>
              <option value="selecionar" disabled>Selecionar</option>
              <option value="falha-login">Falha no login</option>
              <option value="sistema-inoperante">Sistema inoperante</option>
              <option value="sistema-lento">Sistema lento</option>
              {/* Adicione mais opções conforme necessário */}
              <option value="outros">Outros</option>
            </select>

            {assunto === 'outros' && (
              <>
                <label>Informe o assunto:</label>
                <Input type="text" placeholder="Assunto" value={outrosAssuntos} onChange={(e) => setOutrosAssuntos(e.target.value)} />
              </>
            )}

            <label>Resumo do ocorrido:</label>
            <Input type="text" placeholder="Resumo do ocorrido" value={resumo} onChange={(e) => setResumo(e.target.value)} />

            <label>Anexar imagem (opcional):</label>
            <input type="file" accept="image/*" onChange={(e) => setImagem(e.target.files[0])} />

            {mensagem && <p className="mensagem">{mensagem}</p>}

            <Button type="submit">Enviar</Button>
          </form>
        </LoginCard>
      </div>
    </>
  );
}
