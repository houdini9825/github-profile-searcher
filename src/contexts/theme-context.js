import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
	const [activeTheme, setActiveTheme] = useState('light');

	const toggleTheme = () => {
		setActiveTheme((prevState) => {
			return prevState === 'light' ? 'dark' : 'light';
		});
	};

	const context = { activeTheme, toggleTheme };

	return (
		<ThemeContext.Provider value={context}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContextProvider };
export default ThemeContext;
