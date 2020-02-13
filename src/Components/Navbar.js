import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { FaUserAlt, FaShoppingBag, FaLanguage } from 'react-icons/fa';

const MainNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark">
			<Navbar.Brand href="#home">
				<img src={logo} className="App-logo" alt="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					{/*      nav izquierda         */}
					<Nav.Link href="#Link1">Link1</Nav.Link>
					<Nav.Link href="#Link2">Link2</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			{/*      nav derecha         */}
			<Nav id="second-nav">
				<Nav.Link href="#language" className="lang">
					<FaLanguage /> <span>Language</span>
				</Nav.Link>
				<Nav.Link href="#user">
					<FaUserAlt /> <span id="user">User</span>
				</Nav.Link>
				<Nav.Link eventKey={2} href="#unid">
					<FaShoppingBag />
					<span id="unit">5 UND</span>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default MainNavbar;
