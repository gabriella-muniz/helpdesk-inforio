import React from "react";
import Navbar from "@/app/navbar/page";

const BACKGROUND_MODAL = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "1000",
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",

  backgroundColor: "black",
  color: "white",
  borderRadius: "8px",
};

const CONTENT = {
  marginLeft: "2px",
  marginBottom: "10px",
};

const PARAGRAPH = {
  marginBottom: "10px",
  marginLeft: "10px",
};

const STYLE_CONTAINER = {
    display: "flex",
    justifyContent: "flex-end",
}

// const STYLE_BUTTON = {
//     display: "flex",
//     justifyContent: "center",
//     width: "100",
//     padding: "15px 25px",
//     border: "0",
//     backgroundColor: "rgb(66, 139, 202)",
//     color: "white",
//     fontSize: "18px",
//     borderRadius: "10px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     marginBottom: "20px",
// };

export default function ModalSuporte({ isOpen, setCloseModal }) {
  const closeModal = () => {
    setCloseModal();
  };

  if (isOpen) {
    return (
      <div style={BACKGROUND_MODAL} onClick={closeModal}>
        <div style={MODAL_STYLE} onClick={(e) => e.stopPropagation()}>
          <h1>Perguntas Frequentes</h1>
          <hr />
          <h3 style={CONTENT}>
            1- Como posso entrar em contato com o suporte?
          </h3>
          <p style={PARAGRAPH}>
            Você pode entrar em contato conosco enviando um e-mail para
            support@example.com ou ligando para o nosso número de suporte.
          </p>
          <h3 style={CONTENT}>
            2- Qual é o número de telefone do suporte técnico?
          </h3>
          <p style={PARAGRAPH}>
            O número de telefone do suporte técnico é (81) 91236-5478.
          </p>
          <h3 style={CONTENT}>
            3- Como relato problemas técnicos com meu computador?
          </h3>
          <p style={PARAGRAPH}>
            Relate problemas técnicos do seu computador entrando em contato com
            a equipe de TI.
          </p>
          <div style={STYLE_CONTAINER}>
          <button onClick={setCloseModal}>
            Close
          </button>
          </div>
          
        </div>
      </div>
    );
  }
  return null;
}
