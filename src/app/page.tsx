import Image from "next/image";

export default function Home() {
	return (
		<main className="h-full bg-[url('../../public/bg.jpg')] bg-no-repeat bg-cover flex justify-center">
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
					className="bg-white rounded-lg px-6 py-8 lg:px-10 lg:py-12"
				>
					<h1 className="text-[#008181] font-bold text-center mb-4 md:mb-8 text-xl md:text-2xl xl:text-3xl">
						Bem-vindo
					</h1>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col">
							<label htmlFor="email">E-mail</label>
							<input
								type="email"
								name="email"
								id="email"
								className="border-black border-[1px] rounded outline-none px-2"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="password">Senha</label>
							<input
								type="password"
								name="password"
								id="password"
								className="border-black border-[1px] rounded outline-none px-2"
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
