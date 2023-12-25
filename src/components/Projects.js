import "./styles.css";

function Projects() {
	return (
		<div className="wrapper">
			<div className='projects_wrapper' id="Projects">
				<h2 className="project_heading">My Projects</h2>
				<div className="projects">
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
					<Project name='portfolio' src='./images/image.jpg' github='www.github.com' live='www.live.com' />
				</div>
			</div>
		</div>

	);
}


function Project(props) {
	return (
		<div className="project">
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