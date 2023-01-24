import styles from './App.module.scss';
import classname from 'classname';
import ThemeContext from './contexts/theme-context';
import { useContext, useEffect, useState, useCallback } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Body from './components/Body/Body';

const cleanData = (data) => {
	return {
		name: data.name ? data.name : 'No Name Available',
		gitHandle: `@${data.login}`,
		joinDate: new Date(data.created_at).toDateString(),
		bio: data.bio ? data.bio : 'No bio available',
		repoVal: data.public_repos,
		followersVal: data.followers,
		followingVal: data.following,
		location: data.location,
		website: data.html_url,
		twitHandle: data.twitter_username,
		company: data.company,
		profilePic: data.avatar_url,
	};
};

function App() {
	const { activeTheme } = useContext(ThemeContext);
	const [userData, setUserData] = useState({
		name: 'The Octocat',
		gitHandle: '@octocat',
		joinDate: '26 Jan 2011',
		bio: 'Lorem ipsum testi pjipj ijpjpj pji pjij pijpij jipjpij ijpjp ijp jipjpij ijp jipjpj joijpoj iojpoj poij pijp ijpjpjpjipjp jijpioj pijpj jpj',
		repoVal: 8,
		followersVal: 3938,
		followingVal: 8,
		location: 'San Francisco',
		website: 'https://github.blog',
		twitHande: '',
		company: '@github',
		profilePic: 'https://avatars.githubusercontent.com/u/583231?v=4',
	});

	const containerClasses = classname(styles.container, {
		[styles.light]: activeTheme === 'light',
		[styles.dark]: activeTheme === 'dark',
	});

	const getUserInfo = useCallback(async (input) => {
		try {
			const response = await fetch(
				`https://api.github.com/users/${input}`
			);
			if (!response.ok) throw new Error('Failed to fetch data.');
			const data = await response.json();
			const newData = await cleanData(data);
			setUserData(newData);
			return true;
		} catch (err) {
			return false;
		}
	}, []);

	return (
		<div className={containerClasses}>
			<div className={styles.div}>
				<Header />
				<Input onSearch={getUserInfo} className={styles.input} />
				<Body data={userData} className={styles.body} />
			</div>
		</div>
	);
}

export default App;
