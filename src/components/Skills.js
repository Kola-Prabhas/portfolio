import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import { useContext } from "react";
import { ThemeContext } from "./Context";


import './styles.css';


// const pythonLogo = "public/images/python-5.svg";




function Skills() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`skills_wrapper ${theme.mode === 'dark'? 'skills_wrapper-dk': 'skills_wrapper-lt'}`}
			id="Skills"
		>
			<h2 className="skill_heading">My Skills</h2>
			<div className="skills">
				<SkillBar name="React" bgColor="#61DAFB" percent={75}>
					<FaReact style={{ color: '#61DAFB' }}/>
				</SkillBar>
				<SkillBar name="Javascript" bgColor="#F7DF1E" percent={90}>
					<IoLogoJavascript style={{ color: '#F7DF1E' }}/>
				</SkillBar>
				<SkillBar name="Python" bgColor="#FFD43C" percent={70}>
					<FaPython style={{ color: "#FFD43C" }} />
				</SkillBar>
				<SkillBar name="Rust" bgColor="#CE422B" percent={60}>
					<FaRust style={{ color: '#CE422B' }} />
				</SkillBar>	
				<SkillBar name="Html5" bgColor={'#FF5733'}  percent={83}>
					<FaHtml5 style={{ color: '#FF5733'}} />
				</SkillBar>
				<SkillBar name="Css3" bgColor={'#4747A5'} percent={78}>
					<FaCss3 style={{color: '#4747A5'}} />

				</SkillBar>
			</div>
		</div>
	);
}



function SkillBar(props) {
	const { theme } = useContext(ThemeContext);

	const observer2 = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const classList = entry.target.classList;
			if (entry.isIntersecting) {
				classList.add('pb_animation');
				// classList.add('show');
				
			} else {
				classList.remove('pb_animation');
				// classList.remove('show');				
			}
		});

	});



	const skillBars = document.querySelectorAll('.progress_bar');
	// const skillElems = document.querySelectorAll('.hide');
	skillBars.forEach(elem => observer2.observe(elem));
	// skillElems.forEach(elem => observer1.observe(elem));



	return (
		// <div className="skill_bar hide"  >
		<div className="skill_bar"  >

			<div className="row">
				<span className="skill_logo">{props.children}</span>
				<span className="skill_name   info">{props.name}</span>
			</div>
			
			<div className={`progress ${theme.mode === 'light' ? 'progress-lt' : ''}`}>
				<span style={{ width: `${props.percent}%` }}>
					<span style={{ backgroundColor: `${props.bgColor}` }} className="progress_bar"></span>
				</span>
			</div>
		</div>
	);
}





export { Skills };