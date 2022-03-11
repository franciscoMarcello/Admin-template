import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
import Image from "next/image";
import avatar from "../../../public/images/avatar.svg";

interface AvatarUsuarioProps {
  className?: string;
}
export default function Avatar(props: AvatarUsuarioProps) {
  const { usuario } = useAuth();
  return (
    <Link href="/perfil">
      <a>
        <Image
          src={usuario?.imagemUrl ?? avatar}
          alt="Avatar do Usuário"
          width={40}
          height={40}
          className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        />
      </a>
    </Link>
  );
}
