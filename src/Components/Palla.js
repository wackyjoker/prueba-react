import React from 'react';
import Parallax from 'react-rellax';
class Palla extends React.Component {
	render() {
		return (
			<section id="parallax">
				<Parallax speed={-2} className="plane">
					<img src={require('../styles/img/plane.png')} alt="plane" />
				</Parallax>
				<Parallax speed={1.5} centered={true} zIndex={10} className="edificio">
					<img src={require('../styles/img/edificio.png')} alt="edificio" />
				</Parallax>
			</section>
		);
	}
}

export default Palla;
