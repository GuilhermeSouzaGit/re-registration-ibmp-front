"use client";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/Button";
import { H1 } from "@/components/H1";
import { MainNav } from "@/components/Main-nav";
import React, { useEffect, useState } from "react";

export default function page() {
	const { token } = useAuth();
	const [members, setMembers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/api/members/get-all-members/", {
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

	console.log(members);

	return (
		<>
			<MainNav />
			<div className="flex flex-col gap-8 p-4 md:p-8 xl:p-16">
				<Button action="/dashboard" text="Voltar" />
				<H1 text="Gestão de membros (89)" />
				<div className="flex max-w-full rounded-[32px] overflow-hidden">
					<div className="grid grid-cols-6 w-[4000px]">
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Nome
							</h1>
							<div></div>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Nascimento
							</h1>
							<div></div>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Sexo
							</h1>
							<div></div>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Telefone
							</h1>
							<div></div>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Estado Civil
							</h1>
							<div></div>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-center bg-[#0055D4] text-white font-medium py-2">
								Batismo
							</h1>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
