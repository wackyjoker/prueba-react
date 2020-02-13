import React from 'react';
import MainNavbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import Cards from './Components/Cards';
import Parallax from './Components/Parallax';
import './App.scss';

function App() {
	return (
		<div className="App">
			<MainNavbar />
			<HeroBanner />
			<Cards />
			<Parallax />
		</div>
	);
}

export default App;
