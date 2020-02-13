import React from 'react';
import MainNavbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import Cards from './Components/Cards';
import Palla from './Components/Palla';
import Palla2 from './Components/Palla2';
import Footer from './Components/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<MainNavbar />
			<HeroBanner />
			<Cards />
			<Palla />
			<Palla2 />
			<Footer />
		</div>
	);
}

export default App;
