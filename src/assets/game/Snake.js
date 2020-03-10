import React, { Component } from "react";
import Sketch from "react-p5";

class Snake {
	width = 600
	height = 600
	x = 20
	y = 20

	constructor( p ) {
		this.rowsAndCols( p, this.x, this.y, this.width, this.height );
		this.createSnake( p );
	}

	rowsAndCols = ( p, x, y, width, height ) => {
		console.log(x)
		for ( var x = 0; x < width; x += width / 20 ) {
			for ( var y = 0; y < height; y += height / 20 ) {
				p.stroke(0);
				p.strokeWeight(1);
				p.line(x, 0, x, height);
				p.line(0, y, width, y);
			}
		}
	}

	createSnake = ( p ) => {
		p.square( 0, 0, 30 );
	}
}
export default Snake;
