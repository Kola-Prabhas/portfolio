import { useState } from 'react';


import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ThemeContext } from './components/Context';

import './App.css';



function App() {
	const [theme, setTheme] = useState({ mode: 'dark' });

	function handleTheme() {
		const mode = theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' };
		setTheme(mode);
	}



	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
		    <div className={theme.mode === 'dark'? 'app': 'app_lt'}>
				<Navbar />
				<Home />
			    <About />
			    <Skills />
			    <Projects />
				<Footer />
			</div>
		</ThemeContext.Provider>
    );
}

export default App;
