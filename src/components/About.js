import './About.css';


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
				<div className="skills">
					

				</div>
			</div>	


		</div>

	);

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