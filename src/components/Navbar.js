import { useRef } from "react";


import "./styles.css";



const links = ["Home", "About", "Skills", "Projects", "Contact"];


function Navbar() {
	const navbar = useRef(null);
	

	function handleClick() {
		navbar.current.classList.toggle('visible');
	}



	

	return (

		<>
			<div className="nav_container">

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

				<label className='nav_toggle'>
					<input type='checkbox' className='toggle' onClick={handleClick}/>
				</label>
			</div>
		</>
	);
}


export { Navbar };