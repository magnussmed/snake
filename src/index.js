import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import Snake from "./assets/game/Snake.js";

class Game extends Component {
	x = 50
	y = 50

	setup = ( p ) => {
		p.createCanvas( 600, 600 );
		new Snake( p )
	}

	render() {
		return (
			<Sketch setup={this.setup} draw={this.draw} />
		);
	}
}
export default Game;
const wrapper = document.getElementById("game");
ReactDOM.render(<Game />, wrapper);
