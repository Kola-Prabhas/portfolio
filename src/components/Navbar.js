import { useState } from "react";


import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";

import "./Navbar.css";

const links = ["Home", "About", "Projects"];

function Navbar() {
	const [visible, setVisible] = useState(false);

	function handleClick() {
		setVisible(!visible);
	}

	const classname = visible ? "navbar" : "navbar hidden";


	return (
		<div className="nav_container">
			<ul className={classname}>
				{
					links.map((link, index) => {
						return (
							<li
								key={index}
								className="nav_item"
							>
								<a href={`#${link}`}
								className="nav_link"
								>
										{link}
									</a>
							</li>
						);
					})
				} 
			</ul>
			<a
				onClick={handleClick}				
				className="nav_icon"
				href="#undefined"
			>
				
				{
					visible ? <BiArrowToTop /> : <BiArrowToBottom />
                }
			</a>
		</div>
	)
}


export { Navbar };