


import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

import './App.css';



function App() {

	return (
		    <div className="app">
				<Navbar />
				<Home />
			    <About />
			    <Skills />
			    <Projects />
				<Footer />
			</div>
    );
}

export default App;
