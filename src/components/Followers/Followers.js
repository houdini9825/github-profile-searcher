import styles from './Followers.module.scss';
import ThemeContext from '../../contexts/theme-context';
import classname from 'classname';
import { useContext } from 'react';

function Followers({ className, repoVal, followersVal, followingVal }) {
	const { activeTheme } = useContext(ThemeContext);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	return (
		<div className={containerClasses}>
			<div>
				<p className={styles.title}>Repos</p>
				<p className={styles.value}>{repoVal}</p>
			</div>
			<div>
				<p className={styles.title}>Followers</p>
				<p className={styles.value}>{followersVal}</p>
			</div>
			<div>
				<p className={styles.title}>Following</p>
				<p className={styles.value}>{followingVal}</p>
			</div>
		</div>
	);
}

export default Followers;
