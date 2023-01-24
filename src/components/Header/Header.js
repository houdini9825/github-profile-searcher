import styles from './Header.module.scss';
import ThemeContext from '../../contexts/theme-context';
import classname from 'classname';
import { useContext } from 'react';
import MoonImage from '../../assets/icon-moon.svg';
import SunImage from '../../assets/icon-sun.svg';

function Header({ className }) {
	const { activeTheme, toggleTheme } = useContext(ThemeContext);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	const handleClick = () => {
		toggleTheme();
	};

	const themeText = activeTheme === 'light' ? 'dark' : 'light';
	const themeImg = activeTheme === 'light' ? MoonImage : SunImage;

	return (
		<div className={containerClasses}>
			<h1>devfinder</h1>
			<button onClick={handleClick}>
				{themeText} <img src={themeImg} />
			</button>
		</div>
	);
}

export default Header;
