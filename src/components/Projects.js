import { useContext } from "react";
import { ThemeContext } from "./Context";
import "./styles.css";

function Projects() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={theme.mode === 'dark'? 'wrapper-dk': 'wrapper-lt'}>
			<div className='projects_wrapper' id="Projects">
				<h2 className="project_heading">My Projects</h2>
				<div className="projects">
					<Project
						name='Portfolio'
						src='./images/portfolio-img.png'
						github='https://github.com/Kola-Prabhas/portfolio'
						live='https://kola-prabhas.github.io/portfolio/'
					/>
					<Project name='Tic-Tac-Toe' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					
				</div>
			</div>
		</div>

	);
}


function Project(props) {
	const { theme } = useContext(ThemeContext);

	// const observer = new IntersectionObserver((entries, observer) => {
	// 	entries.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			entry.target.classList.add('project-show');
	// 		} else {
	// 			entry.target.classList.remove('project-show');
	// 			// observer.unobserve(entry.target);				
	// 		}
	// 	});

	// }, {threshold: 0.3});


	// const elements = document.querySelectorAll('.project');
	// elements.forEach(elem => observer.observe(elem));

	return (
		// <div className={`project project-hide ${theme.mode === 'light' ? 'project-lt' : ''}`}>
		<div className={`project ${theme.mode === 'light' ? 'project-lt' : ''}`}>
			<div className="project_image_wrapper">
				<img src={props.src} alt="project" className="project_image" />
			</div>
			<h3 className='project_name'>{props.name}</h3>
			<div className='project_links'>
				<a href={`${props.github}`}>Github</a>
				<a href={`${props.live}`}>Live</a>
			</div>
		</div>
	);
	
}

export { Projects };