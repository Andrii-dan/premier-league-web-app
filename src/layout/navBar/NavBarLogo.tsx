import Typography from '@mui/material/Typography';

import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

const NavBarLogo = () => {
	return (
		<Typography
			component='span'
			sx={{
				fontSize: '24px',
				fontWeight: '700',
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
			}}
		>
			Premier
			<img alt='logo' src={logo} className={styles.logo_icon} />
			League
		</Typography>
	);
};

export default NavBarLogo;
