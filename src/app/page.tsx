"use client";
import React, { FormEvent, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";

export default function Home() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const { login } = useAuth();

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		fetch("https://re-registration-ibmp-back.onrender.com/api/user/login/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => {
				const status = res.status;
				return res.json().then((data) => ({ status, data }));
			})
			.then(({ status, data }) => {
				console.log(status, data);
				const { token, userId, role } = data;
				if (status === 200) {
					login(token, userId, role);
					router.push("/dashboard");
				} else {
					console.log("Ocorreu um erro ao efetuar o login");
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<main className="h-svh bg-[url('../../public/bg.jpg')] bg-no-repeat bg-cover flex justify-center">
			<nav className="absolute w-full flex items-center justify-between px-4 py-2 xl:px-">
				<Image
					src="/logo.svg"
					width={40}
					height={40}
					alt="IBMP Logo"
					className="lg:w-14 lg:h-14"
				/>
				<button className="bg-[#008181] text-white rounded px-3 py-1 xl:px-6 xl:py-2 xl:text-xl font-inter font-light hover:scale-110 transition-all">
					Cadastrar-se
				</button>
			</nav>
			<div className="flex flex-col items-center justify-center">
				<form
					action=""
					className="bg-white rounded-lg px-8 py-8 lg:px-12 lg:py-12 2xl:py-20"
					onSubmit={handleLogin}
				>
					<h1 className="text-[#008181] font-bold text-center mb-4 md:mb-8 text-xl md:text-2xl xl:text-3xl">
						Bem-vindo
					</h1>
					<div className="flex flex-col gap-4 2xl:w-80">
						<div className="flex flex-col">
							<label htmlFor="email" className="text-xl">
								E-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="border-black border-[1px] rounded outline-none px-2 py-1"
								ref={emailRef}
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="password" className="text-xl">
								Senha
							</label>
							<input
								type="password"
								name="password"
								id="password"
								className="border-black border-[1px] rounded outline-none px-2 py-1"
								ref={passwordRef}
							/>
						</div>
						<button className="w-full bg-[#008181] text-white py-2 rounded font-semibold">
							Entrar
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}
