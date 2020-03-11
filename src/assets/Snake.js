import React, { Component } from "react";

class Snake {
	width = 600
	height = 600
	x = 0
	y = 0
	xspeed = 20
	yspeed = 0
	xfeed = null
	yfeed = null
	scale = 20

	constructor( p ) {
		this.p = p
		this.moveSnake( p )
	}

	moveSnake = ( p ) => {
		p.keyPressed = ( p ) => {
			if ( p.keyCode === 38 ) {
				// Up
				this.dir( 0, -this.scale );
			} else if ( p.keyCode === 40 ) {
				// Down
				this.dir( 0, this.scale );
			} else if ( p.keyCode === 39 ) {
				// Right
				this.dir( this.scale, 0 );
			} else if ( p.keyCode === 37 ) {
				// Left
				this.dir( -this.scale, 0 );
			}
		}
	}

	dir = ( x, y ) => {
		this.xspeed = x;
		this.yspeed = y;
	}

	update = () => {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	show = () => {
		this.p.fill( 255 );
		this.p.rect( this.x, this.y, this.scale, this.scale );
	}

	eat = ( p ) => {
		var d = this.p.dist( this.x, this.y, this.xfeed, this.yfeed )
		if ( d < 1 ) {
			return true;
		} else {
			return false;
		}
	}

	randomFeed = ( p ) => {
		let x = Math.round(0 + Math.random() * (this.width - 0));
		let y = Math.round(0 + Math.random() * (this.height - 0));
		x = Math.ceil((x) / this.scale ) * this.scale;
		y = Math.ceil((y) / this.scale ) * this.scale;
		if ( x >= this.width ) {
			x = this.width - this.scale;
		}
		if ( y >= this.height ) {
			y = this.height - this.scale;
		}
		this.p.fill( 255, 0, 100 );
		this.p.rect( x, y, this.scale, this.scale );
		this.xfeed = x;
		this.yfeed = y;

		return [x, y];
	}
}
export default Snake;
