import "./Projects.css";

function Projects() {
	return (
		<div
			className="projects_wrapper"
			id="Projects"
		>
			<div className="projects_text">
				Here are some of my projects, I have worked on to show off my skills and proficiency in 
				various technologies.
			</div>
			<div className="projects">
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
				<ProjectCard imgUrl="/images/image.jpg" title="Portfolio">
					My portfolio is the place that has everything about me. You can find various technologies I use
					various skills I possess and information to contact me.
				</ProjectCard>
			
			</div>
		</div>

	)

}


function ProjectCard({imgUrl, title, children}) {
	return (
		<div className="project_card">
			<div className="image_wrapper">
				<img src={imgUrl} alt="Project" className="img" />
			</div>
			<h2 className="project_title">{title}</h2>
			<p className="project_description">{children}</p>
		</div>
	);
}


export { Projects };