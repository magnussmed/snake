import React, { Component } from "react";

class Snake {
	width = 600
	height = 600
	x = 0
	y = 0
	xspeed = 10
	yspeed = 0
	tail = [[0, 0], [10, 0], [20, 0], [30, 0]]
	xfeed = null
	yfeed = null
	newTail = []

	constructor( p ) {
		this.p = p
		this.randomFeed();
		this.moveSnake( p )
	}

	moveSnake = ( p ) => {
		p.keyPressed = ( p ) => {
			if ( p.keyCode === 38 ) {
				// Up
				this.dir( 0, -10 );
			} else if ( p.keyCode === 40 ) {
				// Down
				this.dir( 0, 10 );
			} else if ( p.keyCode === 39 ) {
				// Right
				this.dir( 10, 0 );
			} else if ( p.keyCode === 37 ) {
				// Left
				this.dir( -10, 0 );
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
		this.newTail = []
		for ( var i = 0; i < this.tail.length; i++ ) {
			this.newTail.push(this.tail[i])
		}

		for ( var i = 0; i < this.newTail.length; i++ ) {
			this.newTail[i][0] = this.newTail[i][0]+10;
			this.newTail[i][1] = this.newTail[i][1]+0;
			this.p.fill( 255 );
			this.p.rect( this.newTail[i][0], this.newTail[i][1], 10, 10 );
		}

		this.tail = this.newTail;

		console.log(this.tail);
	}

	eat = ( p ) => {
		var d = this.p.dist( this.x, this.y, this.xfeed, this.yfeed )
		if ( d < 1 ) {
			return true;
		} else {
			return false;
		}
	}

	randomFeed = () => {
		let x = Math.round(0 + Math.random() * (this.width - 0));
		let y = Math.round(0 + Math.random() * (this.height - 0));
		x = Math.ceil((x) / 10) * 10;
		y = Math.ceil((y) / 10) * 10;
		if ( x >= this.width ) {
			x = this.width - 10;
		}
		if ( y >= this.height ) {
			y = this.height - 10;
		}
		this.p.fill(255, 0, 0);
		this.p.rect( x, y, 10, 10 );
		this.xfeed = x;
		this.yfeed = y;
	}
}
export default Snake;
