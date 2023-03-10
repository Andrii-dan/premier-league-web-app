import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import dark from './layout/themes/dark';
import light from './layout/themes/light';

import './App.scss';
import NavBar from './layout/navBar/NavBar';

function App() {
	const [themeMode, setThemeMode] = useState(dark);

	const switchThemeMode = () => {
		themeMode === light ? setThemeMode(dark) : setThemeMode(light);
	};

	return (
		<>
			<ThemeProvider theme={themeMode}>
				<CssBaseline />
				<NavBar
					themeMode={themeMode === light ? 'light' : 'dark'}
					switchThemeMode={switchThemeMode}
				/>
			</ThemeProvider>
		</>
	);
}

export default App;
