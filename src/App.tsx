import { useState } from 'react';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import dark from './themes/dark';
import light from './themes/light';

import './App.scss';

function App() {
	const [theme, setTheme] = useState(light);

	const changeTheme = () => {
		theme === light ? setTheme(dark) : setTheme(light);
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div style={{ height: '100vh', width: '100%' }}>
					Hello Football World!
					<Button variant='contained' color='primary' onClick={changeTheme}>
						Change Theme
					</Button>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
