import React from 'react';
import { Carousel } from 'react-bootstrap';

class HeroBanner extends React.Component {
	constructor() {
		super();
		this.states = [
			{
				title: 'First slide label',
				alt: 'First slide',
				url: 'https://via.placeholder.com/640x240'
			},
			{ title: 'Second slide label', alt: 'Second slide', url: 'https://via.placeholder.com/640x240' },
			{ title: 'Third slide label', alt: 'Third slide', url: 'https://via.placeholder.com/640x240' }
		];
	}
	render() {
		const content = this.states.map((item, index) => {
			return (
				<Carousel.Item key={index}>
					<img className="d-block w-auto" src={item.url} alt={item.alt} />
					<Carousel.Caption>
						<h3>{item.title}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});

		return <Carousel>{content}</Carousel>;
	}
}

export default HeroBanner;
