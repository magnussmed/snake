import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "react-p5";

class App extends Component {
	x = 50
	y = 50

	setup = p5 => {
		p5.createCanvas( 600, 600 );
	}
	draw = p5 => {
		p5.background(0)
		p5.ellipse(this.x, this.y, 70, 70)
		this.x++
	}

	render() {
		return <Sketch setup={this.setup} draw={this.draw} />
	}
}
export default App;
const wrapper = document.getElementById("game");
ReactDOM.render(<App />, wrapper);
