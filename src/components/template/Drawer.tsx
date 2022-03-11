import MenuItem from "./MenuItem";
import { AjustIcon, HomeIcon, NotifyIcon, LogOut } from "../icons";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";
export default function Drawer() {
  const { logout } = useAuth();
  return (
    <aside className="flex flex-col dark:bg-gray-900  bg-gray-200 text-gray700">
      <div
        className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Inicio" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={AjustIcon} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={NotifyIcon} />
      </ul>
      <ul>
        <MenuItem
          onClick={logout}
          texto="Sair"
          icone={LogOut}
          className={`text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:text-white `}
        />
      </ul>
    </aside>
  );
}
