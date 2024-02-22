import React from "react";

interface H1Props {
	text: string;
	className: string;
}

export const H1: React.FC<H1Props> = ({ text, className }) => {
	return <h1 className={`text-2xl font-bold ${className}`}>{text}</h1>;
};
