import React, { Component } from "react";

class Snake {
	width = 600
	height = 600
	x = 0
	y = 0
	xspeed = 1
	yspeed = 0
	xfeed = null
	yfeed = null
	scale = 20
	total = 0
	tail = []

	constructor( p ) {
		this.p = p
		this.moveSnake( p )
	}

	moveSnake = ( p ) => {
		p.keyPressed = ( p ) => {
			if ( p.keyCode === 38 ) {
				// Up
				this.dir( 0, -1 );
			} else if ( p.keyCode === 40 ) {
				// Down
				this.dir( 0, 1 );
			} else if ( p.keyCode === 39 ) {
				// Right
				this.dir( 1, 0 );
			} else if ( p.keyCode === 37 ) {
				// Left
				this.dir( -1, 0 );
			}
		}
	}

	dir = ( x, y ) => {
		this.xspeed = x;
		this.yspeed = y;
	}

	update = ( p ) => {
		if ( this.total === this.tail.length ) {
			for ( var i = 0; i < this.tail.length-1; i++ ) {
				this.tail[i] = this.tail[i+1];
				console.log("test");
			}
		}
		this.tail[this.total-1] = this.p.createVector( this.x, this.y );

		this.x = this.x + this.xspeed * this.scale;
		this.y = this.y + this.yspeed * this.scale;

		this.x = this.p.constrain( this.x, 0, this.width - this.scale );
		this.y = this.p.constrain( this.y, 0, this.height - this.scale );
	}

	show = () => {
		this.p.fill( 255 );
		for ( var i = 0; i < this.tail.length; i++ ) {
			this.p.rect( this.tail[i].x, this.tail[i].y, this.scale, this.scale );
		}
		this.p.rect( this.x, this.y, this.scale, this.scale );
	}

	eat = ( p ) => {
		var d = this.p.dist( this.x, this.y, this.xfeed, this.yfeed )
		if ( d < 1 ) {
			console.log(this.tail);
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
