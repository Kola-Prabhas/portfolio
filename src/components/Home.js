import "./styles.css";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useContext } from "react";
import { ThemeContext } from "./Context";

function Home() {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`home ${theme.mode === 'dark'? 'home-dk': 'home-lt'}`}
			id="Home"
		>
			<div className="home_content">
				<div className="home_content_wrapper">
					<h3 className="home_heading">Welcome! This is </h3>
					<h1 className="home_name">Prabhas Kola</h1>
					<h3 className="home_skill">I'm a Frontend Developer</h3>	
					<p className="home_text">
						I'm a Frontend developer. I can make visually appealing and
						easy to use websites using React.js, the most popular frontend library. I like to do taks that
						challenge my current skills and provide scope for my improvement. Find me on
					</p>

					<div className={`home_icons ${theme.mode === 'light'? 'home_icons-lt': ''}`}>
						<a href="#i"><FaGithub size="lg"/></a>
						<a href="#i"><FaXTwitter size="lg"/></a>
						<a href="#i"><FaDiscord size="lg"/></a>
						<a href="#i"><FaInstagram size="lg"/></a>
					</div>
				</div>	
			</div>
		</div>
	)

}


export { Home };