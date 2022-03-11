import BotaoTema from "./BotaoTema";
import Title from "./Title";
import useAppData from "../../data/hook/useAppData";
import Avatar from "./Avatar";

interface CabecalhoProps {
  title: string;
  subTitle: string;
}
export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useAppData();
  return (
    <div className="flex ">
      <Title title={props.title} subTitle={props.subTitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoTema tema={tema} alternarTema={alternarTema} />
        <Avatar className="ml-3" />
      </div>
    </div>
  );
}
