import { useContext } from 'react';
import { ThemeContext } from './Context';
import './styles.css';





function About() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`about ${theme.mode === 'dark'? 'about-dk': 'about-lt'}`}
			id="About"
		>
			<div className="about-wrapper">
				<h2 className="about_heading">About Me</h2>
				<p className="about_text">👋 Hello, World! I'm Prabhas Kola, a passionate and curious student immersed in the dynamic world of programming and web development.
					{/* My journey started with the elegant dance of Python, the interactive nature of JavaScript, and the solidity of Solidity in blockchain development. */}<br /> <br /> 

					🚀 As a front-end enthusiast, I specialize in crafting immersive user experiences with HTML, CSS, and React.
					{/* I believe in the power of clean code and intuitive design to elevate digital interactions. */}<br /><br /> 

					{/* 💻 Beyond the pixels, I delve into the realms of computer science, exploring the intricacies of data structures and algorithms that form the backbone of efficient software. */}
					{/* Databases, operating systems, and computer networks are not just buzzwords to me—they're the puzzle pieces I eagerly assemble to build robust solutions. */}<br /><br /> 

					🌐 Join me on this coding adventure where each line of code tells a story, and every project is an opportunity to learn and innovate.
					{/* Let's turn ideas into reality and create a digital landscape that leaves a lasting impression. */}<br /><br /> 

					📚 Currently navigating the exciting landscape of academia, I'm always open to new challenges and collaborations.
					Let's connect, code, and make the web a better place together!</p>
			</div>
		</div>
		

	);

}





export { About };