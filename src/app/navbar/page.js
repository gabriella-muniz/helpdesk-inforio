"use client";
import React, { useState } from "react";
import Style from "../navbar/navbar.css";
import {
  SlBubbles,
  SlSettings,
  SlEarphonesAlt,
  SlLogout,
} from "react-icons/sl";
import ResumoTicket from "../tela-funcionario/resumo-ticket/resumo";
import cadastro from "../cadastro/page";
import Link from "next/link";
import ModalSuporte from "../components/ModalSuporte/Modal";
import Button from "../components/button/button";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggle");
  const [openModal, setOpenModal] = useState(false);

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // ToggleIcon
    toggleIcon === "nav-toggle"
      ? setToggleIcon("nav-toggle toggle")
      : setToggleIcon("nav-toggle");
  };

  return (
    <>
      <>
        <nav className="nav">
          <div className="logo-img">
            <img
              src="http://www.inforio.com.br/images/logo.png"
              alt="logo"
            ></img>
          </div>

          <ul className={active}>
            <li className="nav-item">
              <SlBubbles />
              <a href="#" className="nav-link">
                Chamados
              </a>
            </li>

            <li className="nav-item">
              <SlEarphonesAlt />
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  console.log("clique");
                  setOpenModal(true);
                }}
              >
                Suporte
              </a>
            </li>
            <li className="nav-item">
              <SlLogout />
              <a href="/login" className="nav-link">
                Sair
              </a>
            </li>
          </ul>

          <div className="avatar-container">
            <img
              width="100%"
              src="https://img.freepik.com/vetores-premium/perfil-de-avatar-ilustracoes-vetoriais-para-site-redes-sociais-icone-de-perfil-de-usuario_495897-226.jpg"
              className="avatar-img"
              alt="logo"
            />
            <span>Patricia</span>
          </div>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </>
      <ModalSuporte
        isOpen={openModal}
        setCloseModal={() => setOpenModal(false)}
      />
      <div className="button-novo-cadastro">
        <Link href="/cadastro">
          <button className="button-cadastro" type="submit">
            {" "}
            Cadastrar usuário
          </button>
        </Link>
      </div>
      <div className="resumoTicket">
        <ResumoTicket />
      </div>
    </>
  );
}

export default Navbar;
