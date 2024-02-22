"use client";
import { useAuth } from "@/app/context/AuthContext";
import React from "react";
import { SecretariaNavbar } from "./SecretariaNavbar";
import { PatrimonioNavbar } from "./PatrimonioNavbar";

export const MainNav = () => {
	const { role } = useAuth();

	return (
		<>
			{role === "patrimonio" && <PatrimonioNavbar />}
			{role === "secretaria" && <SecretariaNavbar />}
		</>
	);
};
