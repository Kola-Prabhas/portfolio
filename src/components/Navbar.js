import { useRef } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { ThemeContext } from "./Context";
import { useContext } from "react";

import "./styles.css";



const links = ["Home", "About", "Skills", "Projects", "Contact"];


function Navbar() {
	const { theme, handleTheme } = useContext(ThemeContext);
	const navbar = useRef(null);
	

	function handleClick() {
		navbar.current.classList.toggle('visible');
	}



	

	return (

		<>
			<div className={`nav_container ${theme.mode === 'dark'? 'nav_container-dk': 'nav_container-lt'}`}>
				<label className="theme_toggle" >
					<input type='checkbox' className="theme" onClick={() => handleTheme()} />
					<FaRegMoon className="moon" />
					<MdSunny className="sun" />
					<span className="toggle_wrapper"></span>
				</label>

				<ul className='navbar remove' ref={navbar}>
					{/* <a className="logo" href="#Home">KPN</a> */}

					{
						links.map((link, index) => {
							return (
								<li
									key={index}
									className="nav_item"
								>
									<a href={`#${link}`} className="nav_link">{link}</a>
								</li>
							);
						})
					}
				</ul>

				<label className={`nav_toggle ${theme.mode === 'light'? 'nav_toggle-lt': ''}`}>
					<input type='checkbox' className={`toggle ${theme.mode === 'light'? 'toggle-lt': ''}`} onClick={handleClick}/>
				</label>

				
			</div>
		</>
	);
}


export { Navbar };