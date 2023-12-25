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
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com'/>
				</div>
			</div>
		</div>

	);
}


function Project(props) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`project ${theme.mode === 'light'? 'project-lt': ''}`}>
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