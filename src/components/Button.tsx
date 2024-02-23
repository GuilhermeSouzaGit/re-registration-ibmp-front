import Link from "next/link";
import React from "react";

interface ButtonProps {
	action: string;
	text: string;
}

export const Button: React.FC<ButtonProps> = ({ action, text }) => {
	return (
		<Link
			href={action}
			className="bg-[#0055D4] text-white font-semibold px-8 py-2 w-fit rounded-xl text-xl hover:scale-110 transition-all"
		>
			{text}
		</Link>
	);
};
