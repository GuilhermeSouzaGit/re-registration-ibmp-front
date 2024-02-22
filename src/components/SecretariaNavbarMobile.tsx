import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const SecretariaNavbarMobile = () => {
	const [menu, setMenu] = useState(false);
	const { logout } = useAuth();
	return (
		<>
			{menu ? (
				<Image
					src="/xmark-solid.svg"
					width={20}
					height={20}
					alt="ícone do menu"
					className="hover:cursor-pointer"
					onClick={() => {
						setMenu(false);
					}}
				></Image>
			) : (
				<Image
					src="/bars-solid.svg"
					width={20}
					height={20}
					alt="ícone do menu"
					className="hover:cursor-pointer inline lg:hidden"
					onClick={() => {
						setMenu(true);
					}}
				></Image>
			)}
			<ul
				className={`flex flex-col fixed py-16 z-10 bg-[#0055D4] top-0 ${menu ? "left-0" : "-left-80"} transition-all lg:hidden gap-8 text-white rounded px-4 md:px-8 h-full text-xs md:text-base xl:text-xl font-inter font-semibold`}
			>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/users-icon.svg"
						width={20}
						height={20}
						alt="Ícone de usuários"
						className="md:w-8 md:h-8"
					/>
					Gestão de membros
				</Link>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/relatorio-icon.svg"
						width={15}
						height={15}
						alt="Ícone de relatório"
						className="md:w-8 md:h-8"
					/>
					Atas e relatórios
				</Link>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/baptism-icon.svg"
						width={20}
						height={20}
						alt="Ícone de batismo"
						className="md:w-8 md:h-8"
					/>
					Gestão de batismos
				</Link>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/calendar-icon.svg"
						width={18}
						height={18}
						alt="Ícone de calendário"
						className="md:w-8 md:h-8"
					/>
					Calendário e eventos
				</Link>
				<Link
					href="/"
					className="flex gap-2 hover:scale-110 transition-all"
					onClick={logout}
				>
					<Image
						src="/logout-icon.svg"
						width={18}
						height={18}
						alt="Ícone de logout"
						className="md:w-8 md:h-8"
					/>
				</Link>
			</ul>
		</>
	);
};
