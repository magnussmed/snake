import React, { Component } from "react";
import Sketch from "react-p5";

class Snake {
	width = 600
	height = 600
	x1 = 20
	y2 = 20
	x = 0
	y = 0
	test = 12

	constructor( p ) {
		this.rowsAndCols( p, this.x, this.y, this.width, this.height );
		this.createSnake( p );
		this.p = p
	}

	rowsAndCols = ( p, x1, y2, width, height ) => {
		for ( var x = 0; x < width; x += width / 20 ) {
			for ( var y = 0; y < height; y += height / 20 ) {
				p.line(x, 0, x, height);
				p.line(0, y, width, y);
			}
		}
	}

	createSnake = ( p ) => {
		let v = p.createVector( this.x, this.x );
		let sq = p.square( v.x, v.y, 30 );

		p.keyPressed = ( p ) => {
			if ( p.keyCode === 38 ) {
				// Up
				this.y = this.y - 20;
			} else if ( p.keyCode === 40 ) {
				// Down
				this.y = this.y + 20;
			} else if ( p.keyCode === 37 ) {
				// Left
				this.x = this.x - 20;
			} else if ( p.keyCode === 39 ) {
				// Right
				console.log('right');
				this.x = this.x + 20;
			}

			this.moveSnake( this.x, this.y )
		}
	}

	moveSnake = ( x, y ) => {
		let v = this.p.createVector( this.x, this.x );
		let sq = this.p.square( v.x, v.y, 30 );
	}
}
export default Snake;
