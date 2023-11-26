import './About.css';

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiPython } from "react-icons/si";



function About() {
	return (
		<div
			className="about"
			id="About"
		>
			<div className="about_content_wrapper">
				<div className="about_content">
					I'm passionate about frontend development.I build web applications using React.js, for
					more details about me have a look at my <a
						href="../../Prabhas-Resume.pdf"
						className="resume_link"
						download
					>
					    Resume
				    </a>.	
				</div>
				<div>
					Some of my skills includes <ColorText>React</ColorText> <ColorText>Javascript</ColorText> {' '}
					<ColorText>HTML & CSS</ColorText> <ColorText>Python</ColorText> 
				</div>
				<div className="skills">
					<SkillCard>
						<FaReact className='react_icon'/>
					</SkillCard>
					<SkillCard>
						<SiJavascript className='react_icon' />
					</SkillCard>
					<SkillCard>
						<SiHtml5 className='react_icon' />
					</SkillCard>
					<SkillCard>
						<SiCss3 className='react_icon' />
					</SkillCard>
					<SkillCard>
						<SiPython className='react_icon' />
					</SkillCard>			

				</div>
			</div>	


		</div>

	);

}


function ColorText({ children }) {
	return (
		<span
			className='color_text'
		>
			{children}
		</span>
	)
}

function DownloadLink({ link, children }) {
	return (
		<a
			href={link}
			className="resume_link"
			download
		>
			{children}			
		</a>
	)
}

function SkillCard({ children }) {
	return (
		<div
			className="skill_card"
		>
			{children}
		</div>

	);
}


export { About };