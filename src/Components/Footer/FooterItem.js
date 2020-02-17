import React from 'react';
import { Col } from 'react-bootstrap';

class FooterItem extends React.Component {
	render() {
		return (
			<Col className="foot-list">
				<h6>{this.props.title}</h6>
				<ul>
					<a href={'#/'}>
						<li>{this.props.item1}</li>
					</a>
					<a href={'#/'}>
						<li>{this.props.item2}</li>
					</a>
					<a href={'#/'}>
						<li>{this.props.item3}</li>
					</a>
					<a href={'#/'}>
						<li>{this.props.item4}</li>
					</a>
					<a href={'#/'}>
						<li>{this.props.item5}</li>
					</a>
				</ul>
			</Col>
		);
	}
}

export default FooterItem;

export const FooterItems = [
	{
		title: 'Submenu 1',
		item1: 'Item One',
		item2: 'Item Two',
		item3: 'Item Three',
		item4: 'Item Four',
		item5: 'Item Five'
	},
	{
		title: 'Submenu 2',
		item1: 'Item One',
		item2: 'Item Two',
		item3: 'Item Three',
		item4: 'Item Four',
		item5: 'Item Five'
	},
	{
		title: 'Submenu 3',
		item1: 'Item One',
		item2: 'Item Two',
		item3: 'Item Three',
		item4: 'Item Four',
		item5: 'Item Five'
	},
	{
		title: 'Submenu 4',
		item1: 'Item One',
		item2: 'Item Two',
		item3: 'Item Three',
		item4: 'Item Four',
		item5: 'Item Five'
	}
];
