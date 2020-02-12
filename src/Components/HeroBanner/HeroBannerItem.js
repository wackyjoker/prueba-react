import React from 'react';

class HeroBannerItem extends React.Component {
	render() {
		return (
			<Carousel.Item>
				<img className="d-block" src={this.props.img} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		);
	}
}

export default HeroBannerItem;

const HeroBannerProps = [
	{
		img: 'https://via.placeholder.com/640x240',
		title: 'First slide label',
		alt: 'First slide',
		parrafo: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
	}
];
