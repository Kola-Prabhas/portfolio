import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

import './App.css';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Projects />
		</>
    );
}

export default App;
