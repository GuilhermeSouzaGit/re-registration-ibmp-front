import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface AuthContextType {
	token: string | null;
	user: string | null;
	role: string | null;
	login: (token: string, userId: string, role: string) => Promise<void>;
	logout: () => void;
	isAuth: () => {
		userToken: string | null;
		userId: string | null;
		role: string | null;
	};
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
	token: null,
	user: null,
	role: null,
	login: async () => {},
	logout: () => {},
	isAuth: () => ({ userToken: null, userId: null, role: null }),
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUserId] = useState<string | null>(null);
	const [role, setRole] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		const storedUser = localStorage.getItem("user");
		const storedRole = localStorage.getItem("role");
		if (storedToken && storedUser && storedRole) {
			setToken(storedToken);
			setUserId(JSON.parse(storedUser));
			setRole(JSON.parse(storedRole));
		}
	}, []);

	const login = async (token: string, userId: string, role: string) => {
		setToken(token);
		setUserId(userId);
		setRole(role);
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(userId));
		localStorage.setItem("role", JSON.stringify(role));
	};

	const logout = () => {
		setToken(null);
		setUserId(null);
		setRole(null);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		localStorage.removeItem("role");
	};

	const isAuth = () => {
		const userToken = localStorage.getItem("token");
		const userId = localStorage.getItem("user");
		const role = localStorage.getItem("role");
		return { userToken, userId, role };
	};

	return (
		<AuthContext.Provider
			value={{ token, user, role, login, logout, isAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
