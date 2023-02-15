import styles from './Styles.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return <footer className={styles.footer}>Copyright &copy; {year}</footer>;
};

export default Footer;
