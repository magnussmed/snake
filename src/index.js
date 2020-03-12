import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";
import Snake from "./assets/Snake.js";

class Game extends Component {
	s = null
	feed = null

	setup = ( p, s ) => {
		p.createCanvas( 600, 600 );
		this.s = new Snake( p )
		p.frameRate( 10 );
		this.feed = this.s.randomFeed();
		this.s.score( 0 );
	}

	draw = ( p, s ) => {
		p.background( 51 )
		this.s.death( p );
		this.s.update( p );
		this.s.show();

		p.fill( 255, 0, 100 );
		p.rect( this.feed[0], this.feed[1], 20, 20 );

		var r = this.s.eat();
		if ( r ) {
			this.feed = this.s.randomFeed();
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
