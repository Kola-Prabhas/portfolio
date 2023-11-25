import "./Home.css";

function Home() {
	return (
		<div
			className="home"
			id="Home"
		>
			<div className="home_content">
				<h1 className="home_heading">Welcome!</h1>
				<p className="home_text">
					This is <span className="clr_text">Prabhas</span>,
					I'm a <span className="clr_text">Frontend</span> Developer
			    </p>				
			</div>
		</div>
	)

}


export { Home };