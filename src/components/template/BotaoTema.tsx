import { MoonIcon, SunIcon } from "../icons";

interface BotaoTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoTema(props: BotaoTemaProps) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={` hidden  bg-gradient-to-r from-yellow-300 to bg-yellow-600 w-14 lg:w-24 h-8 sm:flex items-center cursor-pointer p-1 rounded-full  mr-3 
      `}
    >
      <div
        className={`
                flex items-center jutify-center bg-white text-yellow-600 w-6
           h-6 rounded-full  `}
      >
        {SunIcon(4)}
      </div>
      <div
        className={` hidden lg:flex items-center ml-3 text-white
            `}
      >
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={` hidden justify-end  bg-gradient-to-r from-gray-500 to bg-gray-900 w-14 lg:w-24 h-8 sm:flex items-center cursor-pointer p-1 rounded-full  
      `}
    >
      <div
        className={` hidden lg:flex items-center mr-2 text-gray-300
            `}
      >
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`
                flex items-center jutify-center bg-black text-yellow-300 w-6
           h-6 rounded-full  `}
      >
        {MoonIcon(4)}
      </div>
    </div>
  );
}
