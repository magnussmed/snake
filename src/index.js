import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import Snake from "./assets/Snake.js";

class Game extends Component {
	s = null

	setup = ( p, s ) => {
		p.createCanvas( 600, 600 );
		p.background( 51 )
		p.frameRate( 10 )
		this.s = new Snake( p )
	}

	draw = ( p, s ) => {
		this.s.update();
		this.s.show();
		var r = this.s.eat();
		if ( r ) {
			this.s.randomFeed();
		}
	}

	render() {
		return (
			<Sketch setup={ this.setup } draw={ this.draw } />
		);
	}
}
export default Game;
const wrapper = document.getElementById("game");
ReactDOM.render(<Game />, wrapper);
