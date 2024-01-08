import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context";
import "../styles/projects.css";

const projects = {
	Portfolio: {
		image: "./images/portfolio.jpg",
		github: "https://github.com/Kola-Prabhas/portfolio",
		live: "https://kola-prabhas.github.io/portfolio/"
	},
	'Tic-Tac-Toe': {
		image: "./images/TicTacToe.jpg",
		github: "https://github.com/Kola-Prabhas/tic-tac-toe",
		live: "https://kola-prabhas.github.io/tic-tac-toe/"		
	}
}

function Projects() {
	const { theme } = useContext(ThemeContext);

	useEffect(AnimateProject, []);

	return (
		<div className={theme.mode === 'dark'? 'wrapper-dk': 'wrapper-lt'}>
			<div className='projects_wrapper' id="Projects">
				<h2 className="project_heading">My Projects</h2>
				<div className="projects">
					<Project
						name='Portfolio'					
					/>
					<Project
						name='Tic-Tac-Toe'
					/>					
				</div>
			</div>
		</div>

	);
}


function Project({ name }) {
	const { theme } = useContext(ThemeContext);

	

	return (
		<div className={`project project-hide ${theme.mode === 'light' ? 'project-lt' : ''}`}>
		 {/* <div className={`project ${theme.mode === 'light' ? 'project-lt' : ''}`}> */}
			<div className="project_image_wrapper">
				<img src={projects[name].image} alt="project" className="project_image" />
			</div>
			<h3 className='project_name'>{name}</h3>
			<div className='project_links'>
				<a href={projects[name].github}>Github</a>
				<a href={projects[name].live}>Live</a>
			</div>
		</div>
	);
	
}


function AnimateProject() {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('project-show');
			} else {
				entry.target.classList.remove('project-show');
				// observer.unobserve(entry.target);				
			}
		});

	}, {threshold: 0.3});


	const elements = document.querySelectorAll('.project');
	elements.forEach(elem => observer.observe(elem));

}

export { Projects };