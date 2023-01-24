import styles from './IconText.module.scss';
import ThemeContext from '../../contexts/theme-context';
import classname from 'classname';
import { useContext } from 'react';
import LocationImg from '../../assets/icon-location.svg';
import TwitterImg from '../../assets/icon-twitter.svg';
import WebsiteImg from '../../assets/icon-website.svg';
import CompanyImg from '../../assets/icon-company.svg';

const imageMap = {
	location: LocationImg,
	website: WebsiteImg,
	twitter: TwitterImg,
	company: CompanyImg,
};

function IconText({ className, content, type }) {
	const { activeTheme } = useContext(ThemeContext);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
			[styles.notFound]: !content,
		},
		className
	);

	let contentEl = <p>{content}</p>;

	if (!content) contentEl = <p>Not Available</p>;
	else if (type === 'website')
		contentEl = (
			<a target="_blank" href={content}>
				{content}
			</a>
		);

	return (
		<div className={containerClasses}>
			<img
				className={type === 'location' ? styles.location : ''}
				src={imageMap[type]}
			/>
			{contentEl}
		</div>
	);
}

export default IconText;
