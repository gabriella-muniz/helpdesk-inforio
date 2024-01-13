import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import "./resumo.css";
import "./modal.css";

const statusStyles = {
  'Aberto': { background: 'rgb(145 254 159 / 47%)', color: 'green' },
  'Fechado': { background: '#ffadad8f', color: 'red' },
  'Pendente': { background: 'rgba(243, 243, 154, 0.842)', color: 'rgb(194, 194, 0)' },
};

const makeStyle = (status) => statusStyles[status] || {};

const Filter = ({ onFilterChange, filterType, options }) => {
  const handleFilterChange = (event) => {
    onFilterChange(filterType, event.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor={`${filterType}Filter`}>{`Filtrar por ${filterType}:`}</label>
      <select id={`${filterType}Filter`} onChange={handleFilterChange}>
        <option value="">Todos</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const BasicTable = ({ data }) => {
  return (
    <TableContainer component={Paper} className='TableContainer'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: 'center' }}></TableCell>
            <TableCell style={{ textAlign: 'left', paddingLeft: '0' }} className='soli'>Solicitante</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Assunto</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Responsável</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Status</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Chamado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='TableBody'>
          {data.map((row, index) => (
            <TableRow key={index} style={{ alignItems: 'center' }}>
              <TableCell style={{ width: '1px' }} className='Avatar1'><Avatar alt={`Foto de ${row.nome}`} src={row.perfil} /></TableCell>
              <TableCell style={{ textAlign: 'center' }}><span className='nome'>{row.nome}</span></TableCell>
              <TableCell style={{ textAlign: 'center' }}>{row.assunto}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{row.resp}</TableCell>
              <TableCell style={{ textAlign: 'center', padding: '10px' }}><span className="status" style={makeStyle(row.status)}>{row.status}</span></TableCell>
              <TableCell style={{ textAlign: 'center' }}>{row.chamado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ResumoTicket = () => {
  const [modal, setModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [solicitanteFilter, setSolicitanteFilter] = useState("");
  const [assuntoFilter, setAssuntoFilter] = useState("");
  const [responsavelFilter, setResponsavelFilter] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "status":
        setStatusFilter(value);
        break;
      case "solicitante":
        setSolicitanteFilter(value);
        break;
      case "assunto":
        setAssuntoFilter(value);
        break;
      case "responsavel":
        setResponsavelFilter(value);
        break;
      default:
        break;
    }
  };

  const data = [
    { perfil: 'https://i.pinimg.com/236x/80/86/3a/80863aef9cf71d83e6c2f3abf96a6162.jpg', nome: 'Carlos Oliveira', assunto: 'Erro em tela', resp: 'Patrícia', status: 'Fechado', chamado: <button onClick={toggleModal}>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/564x/92/0a/1f/920a1f9ce3f97307a96d81b8da464ec4.jpg', nome: 'Pedro Santos', assunto: 'Computador não liga', resp: 'Marcos', status: 'Aberto', chamado: <button>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/564x/94/3a/e8/943ae8f26a559ff3d0aa1ebf7a9c02bb.jpg', nome: 'Amanda Silva', assunto: 'Problemas na rede', resp: 'Não atribuído', status: 'Pendente', chamado: <button>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/236x/9d/96/32/9d9632c13142954d11fb4d5c7430e463.jpg', nome: 'Maria Souza', assunto: 'Software indisponível', resp: 'Não atribuído', status: 'Pendente', chamado: <button>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/564x/76/26/36/7626365dc4b612cbef511ac0b5509124.jpg', nome: 'Ana Oliveira', assunto: 'Computador não liga', resp: 'Gabriel', status: 'Aberto', chamado: <button>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/236x/cb/57/5a/cb575a492a659596bd12f60378a2dc5e.jpg', nome: 'Juliana Pereira', assunto: 'Erro em tela', resp: 'Juliana', status: 'Fechado', chamado: <button>Visualizar</button> },
    { perfil: 'https://i.pinimg.com/236x/13/4a/8e/134a8e059aa9bd2e44043cc6044401ef.jpg', nome: 'Lucas Silva', assunto: 'Software indisponível', resp: 'Juliana', status: 'Fechado', chamado: <button>Visualizar</button> }
  ];

  const filteredData = data.filter((item) =>
    (statusFilter === "" || item.status === statusFilter) &&
    (solicitanteFilter === "" || item.nome === solicitanteFilter) &&
    (assuntoFilter === "" || item.assunto === assuntoFilter) &&
    (responsavelFilter === "" || item.resp === responsavelFilter)
  );

  return (
    <>
      <Filter onFilterChange={handleFilterChange} filterType="status" options={["Aberto", "Fechado", "Pendente"]} />
      <Filter onFilterChange={handleFilterChange} filterType="solicitante" options={["Carlos Oliveira", "Pedro Santos", "Amanda Silva", "Maria Souza", "Ana Oliveira", "Juliana Pereira", "Lucas Silva"]} />
      <Filter onFilterChange={handleFilterChange} filterType="assunto" options={["Erro em tela", "Computador não liga", "Problemas na rede", "Software indisponível"]} />
      <Filter onFilterChange={handleFilterChange} filterType="responsavel" options={["Patrícia", "Marcos", "Não atribuído", "Gabriel", "Juliana"]} />
      <BasicTable data={filteredData} />
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {/* Restante do código do modal... */}
          </div>
        </div>
      )}
    </>
  );
};

export default ResumoTicket;
