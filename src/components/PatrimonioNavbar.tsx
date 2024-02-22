import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PatrimonioNavbar = () => {
	const { logout } = useAuth();
	return (
		<nav className="bg-[#0055D4] w-full flex items-center justify-between px-4 py-2 xl:px-">
			<Image
				src="/logo-preenchida.svg"
				width={40}
				height={40}
				alt="IBMP Logo"
				className="lg:w-14 lg:h-14"
			/>
			<ul className="flex gap-4 text-white rounded px-3 py-1 xl:px-6 xl:py-2 xl:text-xl font-inter font-semibold lg:gap-8">
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/relatorio-icon.svg"
						width={20}
						height={20}
						alt="Ícone de relatório"
					/>
					Inventário
				</Link>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/wall-icon.svg"
						width={30}
						height={30}
						alt="Ícone de parede de obra"
					/>
					Gestão de obras
				</Link>
				<Link
					href="/"
					className="flex gap-2 items-center hover:scale-110 transition-all"
				>
					<Image
						src="/itemBox-icon.svg"
						width={25}
						height={25}
						alt="Ícone de caixa de papelão"
					/>
					Itens Solicitados
				</Link>
				<Link
					href="/"
					className="flex gap-2 hover:scale-110 transition-all"
					onClick={logout}
				>
					<Image
						src="/logout-icon.svg"
						width={25}
						height={25}
						alt="Ícone de logout"
					/>
				</Link>
			</ul>
		</nav>
	);
};
