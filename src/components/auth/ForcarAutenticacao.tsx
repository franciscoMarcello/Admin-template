import Image from "next/image";
import Head from "next/head";
import Router from "next/router";
import loading from "../../../public/images/loading.gif";
import useAuth from "../../data/hook/useAuth";
export default function ForcarAutecnticacao(props) {
  const { usuario, carregando } = useAuth();
  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes("admin-template-auth")){
                        window.location.href = "/autenticacao"
                    }`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }
  function rederizarCarregando() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loading} alt="loading" />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return rederizarCarregando();
  } else {
    Router.push("/autenticacao");
    return null;
  }
}
