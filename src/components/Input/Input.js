import styles from './Input.module.scss';
import ThemeContext from '../../contexts/theme-context';
import classname from 'classname';
import { useContext, useState } from 'react';
import SearchImg from '../../assets/icon-search.svg';

function Input({ className, onSearch }) {
	const { activeTheme } = useContext(ThemeContext);
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState(false);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	const handleChange = (e) => {
		setInputValue(e.target.value);
		setError(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputValue || !onSearch(inputValue)) setError(true);

		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit} className={containerClasses}>
			<img src={SearchImg} />
			<input
				placeholder="Search GitHub username..."
				value={inputValue}
				onChange={handleChange}
			/>
			{error && <p>No results</p>}
			<button>Search</button>
		</form>
	);
}

export default Input;
