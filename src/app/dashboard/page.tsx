"use client";
import { MainNav } from "@/components/Main-nav";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { H1 } from "@/components/H1";

export default function page() {
	const { role } = useAuth();

	const whichRole = () => {
		if (role === "patrimonio") {
			return "Patrimônio";
		} else if (role === "secretaria") {
			return "Secretaria";
		}
	};

	return (
		<>
			<MainNav />
			<div className="flex flex-col gap-8 p-4 md:p-8 xl:p-16">
				<H1
					className="text-[#002D70]"
					text={`Painel Administrativo (${whichRole()})`}
				></H1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
					<div className="flex flex-col items-center text-center p-4 text-white bg-[#0055D4] rounded-2xl font-bold w-full">
						<p className="text-[#BEBEBE] md:text-2xl">
							Número de Membros
						</p>
						<h2 className="text-2xl md:text-3xl">89</h2>
					</div>
					<div className="flex flex-col items-center text-center p-4 text-white bg-[#0055D4] rounded-2xl font-bold w-full">
						<p className="text-[#BEBEBE] md:text-2xl">
							Número de Batismos
						</p>
						<h2 className="text-2xl md:text-3xl">4</h2>
					</div>
					<div className="flex flex-col items-center text-center p-4 text-white bg-[#0055D4] rounded-2xl font-bold w-full">
						<p className="text-[#BEBEBE] md:text-2xl">
							Próximo Evento
						</p>
						<h2 className="text-2xl md:text-3xl">24/02</h2>
					</div>
				</div>
				<div>
					<div className="flex flex-col items-center text-center p-4 text-white bg-[#0055D4] rounded-2xl font-bold w-full">
						<p className="text-[#BEBEBE] md:text-2xl">
							Última atividade
						</p>
						<h2 className="text-2xl md:text-3xl">
							2 Novos membros adicionados
						</h2>
					</div>
				</div>
				<div>
					<div className="flex flex-col items-center text-center p-4 text-white bg-[#0055D4] rounded-2xl font-bold w-full">
						<p className="text-[#BEBEBE] md:text-2xl">
							Última sessão administrativa
						</p>
						<h2 className="text-2xl md:text-3xl">04/02/2024</h2>
					</div>
				</div>
			</div>
		</>
	);
}
