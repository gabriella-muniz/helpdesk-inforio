"use client";

import Login from "./login/page";
import Cadastro from "./cadastro/page";
import { ChakraProvider } from "@chakra-ui/react";
import Lembrar from "./lembrar/page";

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
