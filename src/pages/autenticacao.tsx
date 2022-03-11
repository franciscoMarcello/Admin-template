/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInpult from "../components/auth/AuthInput";
import { WarnIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { login, cadastrar, loginGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  function chamarErro(msg, tempoErro = 3) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoErro * 1000);
  }

  async function submeter() {
    try {
      if (modo === "login") {
        await login(email, password);
        chamarErro("Ocorreu um erro no login");
      } else {
        await cadastrar(email, password);
      }
    } catch (e) {
      setErro(e?.message ?? "Erro inesperado");
    }
  }
  return (
    <div className="flex  h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem aleatoria"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 m-10 w-full lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5 ">
          {modo === "login"
            ? "Entre com sua conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        {erro ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-800 rounded-lg">
            {WarnIcon()}
            <span className="ml-2 ">{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInpult
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInpult
          label="Senha"
          tipo="password"
          valor={password}
          valorMudou={setPassword}
          obrigatorio
        />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
          onClick={submeter}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 "
          onClick={loginGoogle}
        >
          Entrar com Google
        </button>
        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              onClick={() => setModo("cadastro")}
            >
              {" "}
              Criar uma Conta
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já tem possui uma conta?
            <a
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              onClick={() => setModo("login")}
            >
              {" "}
              Entrar
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
