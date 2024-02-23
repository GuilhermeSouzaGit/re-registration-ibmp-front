"use client";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/Button";
import { H1 } from "@/components/H1";
import { MainNav } from "@/components/Main-nav";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Member {
	name: string;
	memberPhoto: string;
	email: string;
	dateOfBirth: string;
	gender: string;
	phone: string;
	maritalStatus: string;
	baptismDate: string;
}

export default function page() {
	const { token } = useAuth();
	const [members, setMembers] = useState<Member[]>([]);

	useEffect(() => {
		fetch("https://re-registration-ibmp-back.onrender.com/api/members/get-all-members/", {
			method: "GET",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setMembers(data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [token]);
	// overflow-x-scroll scroll whitespace-nowrap scroll-smooth
	return (
		<>
			<MainNav />
			<div className="flex flex-col gap-8 p-4 md:p-8 xl:p-16">
				<Button action="/dashboard" text="Voltar" />
				<H1 text="Gestão de membros (89)" />
				<div className="flex max-w-fit rounded-xl overflow-hidden">
					<div className="flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
						<div className="flex flex-col w-max">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Nome
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex items-center gap-4 w-full px-8 py-4`}
									>
										<div className="w-16 h-16 rounded-full overflow-hidden flex items-center">
											<Image
												src={member.memberPhoto}
												width={80}
												height={80}
												alt={`Foto do membro ${member.name}`}
												className=""
											/>
										</div>
										<p className="text-white flex flex-col">
											{member.name.length > 20
												? `${member.name.substring(0, 20)}...`
												: member.name}
											<span className="text-[#BEBEBE] text-xs">
												{member.email}
											</span>
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
						<div className="flex flex-col w-fit">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Nascimento
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex justify-center items-center gap-4 w-full px-8 py-4`}
									>
										<p className="text-white font-semibold flex flex-col py-5">
											{member.dateOfBirth}
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
						<div className="flex flex-col w-fit">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Sexo
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex justify-center items-center gap-4 px-8 py-4`}
									>
										<p className="text-white font-semibold flex flex-col py-5">
											{member.gender === undefined
												? "Não informado"
												: member.gender}
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
						<div className="flex flex-col w-fit">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Telefone
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex justify-center items-center gap-4 px-8 py-4`}
									>
										<p className="text-white font-semibold flex flex-col py-5">
											{member.phone === undefined
												? "Não informado"
												: member.phone}
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
						<div className="flex flex-col w-fit">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Estado Civil
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex justify-center items-center gap-4 px-8 py-4`}
									>
										<p className="text-white font-semibold flex flex-col py-5">
											{member.maritalStatus === undefined
												? "Não informado"
												: member.maritalStatus}
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
						<div className="flex flex-col w-fit">
							<h1 className="text-center text-lg bg-[#0055D4] text-white font-medium py-2">
								Batismo
							</h1>
							{members.length > 0 ? (
								members.map((member, index) => (
									<div
										key={index}
										className={`${index % 2 == 0 ? "bg-[#002D70]" : "bg-[#0055D4]"} flex justify-center items-center gap-4 px-8 py-4`}
									>
										<p className="text-white font-semibold flex flex-col py-5">
											{member.baptismDate === undefined ||
											member.baptismDate === ""
												? "Não informado"
												: member.baptismDate}
										</p>
									</div>
								))
							) : (
								<p>Carregando</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
