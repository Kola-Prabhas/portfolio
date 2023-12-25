function Footer() {
	return (
		<div className="footer_wrapper">
			<div id='Contact' className="footer">
				<h2 className="footer_heading">Contact Me</h2>
				
				<form className="form">
					
					<input type='text' placeholder="Name" />
					<input type='text' placeholder="Email" />
					
					<textarea className="textarea" placeholder="Message"></textarea>
				</form>

				<a href='#unknown' className="footer_button">Send message</a>
			</div>
		</div>
	)
}


export { Footer };