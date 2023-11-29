import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

import "./footer.css";



function Footer() {
	return (
		<section className="footer_wrapper">
			<div className="footer">
				<p>Find Me On</p>
				<div className="links">
					<Icon><FaLinkedin /></Icon>
					<Icon><FaGithub /></Icon>
					<Icon><FaXTwitter /></Icon>
					<Icon><FaDiscord /></Icon>
				</div>
			</div>
		</section>
	)
}


function Icon({ children }) {

	return (
		<a href="#icon" className="icons">
			{children}
		</a>
	)
	
}


export { Footer };