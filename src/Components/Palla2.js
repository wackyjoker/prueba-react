import React from 'react';
import Parallax from 'react-rellax';
class Palla extends React.Component {
	render() {
		return (
			<div>
				<Parallax speed={3} centered={true} zIndex={11} className="palla-text">
					<p>business over the world </p>
				</Parallax>
			</div>
		);
	}
}

export default Palla;
