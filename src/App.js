import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";

// Page that lets us increase or decrease
// How many pokemon are on screen
// App component needs to:
// - Keep track of how many pokemon to show
// - iterate over a single, DRY modular pokemon component
// - buttons to increase Pokemon count
// - button to decrease Pokemon count

class App extends React.Component {
	constructor() {
		super();

		// Start with atleast 1 pokemon on screen
		this.state = {
			pokemonCount: 1,
		};
	}

	render() {
		return (
			<div>
				<h1>Pokemon page</h1>

				<Pokemon></Pokemon>
			</div>
		);
	}
}

export default App;
