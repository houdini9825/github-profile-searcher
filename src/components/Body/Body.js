import styles from './Body.module.scss';
import ThemeContext from '../../contexts/theme-context';
import classname from 'classname';
import { useContext } from 'react';
import Followers from '../Followers/Followers';
import IconText from '../IconText/IconText';

function Body({ data, className }) {
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
			<div className={styles.titleContainer}>
				<img src={data.profilePic} />
				<div className={styles.innerTitleContainer}>
					<h3>{data.name}</h3>
					<p className={styles.gitHandle}>{data.gitHandle}</p>
					<p className={styles.joinDate}>Joined {data.joinDate}</p>
				</div>
			</div>
			<p className={styles.bio}>{data.bio}</p>
			<Followers
				className={styles.followers}
				repoVal={data.repoVal}
				followersVal={data.followersVal}
				followingVal={data.followingVal}
			/>
			<div className={styles.iconTextContainer}>
				<IconText
					className={styles.icon}
					type="location"
					content={data.location}
				/>
				<IconText
					className={styles.icon}
					type="website"
					content={data.website}
				/>
				<IconText
					className={styles.icon}
					type="twitter"
					content={data.twitHandle}
				/>
				<IconText
					className={styles.icon}
					type="company"
					content={data.company}
				/>
			</div>
		</div>
	);
}

export default Body;
