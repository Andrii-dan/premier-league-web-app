import { AppBar, Button, IconButton, Toolbar, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import useMediaQuery from '@mui/material/useMediaQuery';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBarLogo from './NavBarLogo';

type Props = {
	themeMode: string;
	switchThemeMode: () => void;
};

const NavBar = ({ themeMode, switchThemeMode }: Props) => {
	const theme = useTheme();
	const tabletWidthAndUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<AppBar
			position='sticky'
			enableColorOnDark
			sx={{ justifyContent: 'center', alignItems: 'center', maxHeight: '64px' }}
		>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					maxWidth: '1680px',
					p: tabletWidthAndUp ? '0 15px' : '0 8px',
				}}
			>
				<NavBarLogo />
				<Box sx={{ justifyContent: 'flex-end' }}>
					{tabletWidthAndUp ? (
						<>
							<Button variant='text' color='secondary' sx={{ mr: '8px' }}>
								Login
							</Button>
							<Button
								variant='outlined'
								color='secondary'
								endIcon={
									themeMode === 'light' ? <NightsStayIcon /> : <LightModeIcon />
								}
								onClick={switchThemeMode}
							>
								Switch Mode
							</Button>
						</>
					) : (
						<>
							<IconButton color='secondary'>
								<AccountCircleIcon />
							</IconButton>
							<IconButton color='secondary' onClick={switchThemeMode}>
								{themeMode === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
							</IconButton>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
