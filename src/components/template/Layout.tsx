import Cabecalho from "./Cabecalho";
import Drawer from "./Drawer";
import Content from "./Content";
import useAppData from "../../data/hook/useAppData";
import ForcarAutecnticacao from "../auth/ForcarAutenticacao";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}
export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    <ForcarAutecnticacao>
      <div className={` ${tema} flex h-screen w-screen`}>
        <Drawer />
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
          <Cabecalho title={props.title} subTitle={props.subTitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForcarAutecnticacao>
  );
}
