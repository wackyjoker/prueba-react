import React from 'react';
import { Col } from 'react-bootstrap';
class FooterItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Col sm={3}>
				<h3>{this.props.title}</h3>
				<ul>
					<li>{this.props.item1}</li>
					<li>{this.props.item2}</li>
					<li>{this.props.item3}</li>
					<li>{this.props.item4}</li>
					<li>{this.props.item5}</li>
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
