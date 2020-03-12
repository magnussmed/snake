import React, { Component } from "react";
import ReactDOM from "react-dom";

class Snake {
	width = 600
	height = 600
	xfeed = null
	yfeed = null
	scale = 30
	x = ( 600 / 2 ) - 30;
	y = ( 600 / 2 ) - 30;
	xspeed = 0;
	yspeed = 0;
	total = 0
	highscore = 1
	tail = []

	constructor( p ) {
		this.p = p
		this.moveSnake( p )
	}

	moveSnake = ( p ) => {
		p.keyPressed = ( p ) => {
			if ( p.keyCode === 38 ) {
				// Up
				if ( this.total > 0 ) {
					if ( this.yspeed !== 1 ) {
						this.dir( 0, -1 );
					}
				} else {
					this.dir( 0, -1 );
				}
			} else if ( p.keyCode === 40 ) {
				// Down
				if ( this.total > 0 ) {
					if ( this.yspeed !== -1 ) {
						this.dir( 0, 1 );
					}
				} else {
					this.dir( 0, 1 );
				}
			} else if ( p.keyCode === 39 ) {
				// Right
				if ( this.total > 0 ) {
					if ( this.xspeed !== -1 ) {
						this.dir( 1, 0 );
					}
				} else {
					this.dir( 1, 0 );
				}
			} else if ( p.keyCode === 37 ) {
				// Left
				if ( this.total > 0 ) {
					if ( this.xspeed !== 1 ) {
						this.dir( -1, 0 );
					}
				} else {
					this.dir( -1, 0 );
				}
			}
		}
	}

	dir = ( x, y ) => {
		this.yspeed = y;
		this.xspeed = x;
	}

	update = ( p ) => {
		if ( this.total === this.tail.length ) {
			for ( var i = 0; i < this.tail.length-1; i++ ) {
				this.tail[i] = this.tail[i+1];
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

	death = ( p ) => {
		for ( var i = 0; i < this.tail.length; i++ ) {
			var pos = this.tail[i];
			var d = this.p.dist( this.x, this.y, pos.x, pos.y );
			if ( d < 1 ) {
				this.total = 0;
				this.tail = [];
				this.x = ( this.width / 2 ) - this.scale;
				this.y = ( this.height / 2 ) - this.scale;
				this.xspeed = 0;
				this.yspeed = 0;
				this.score( this.total );
			}
		}
	}

	eat = ( p ) => {
		var d = this.p.dist( this.x, this.y, this.xfeed, this.yfeed )
		if ( d < 1 ) {
			this.total++;
			this.score( this.total );
			return true;
		} else {
			return false;
		}
	}

	score = ( score ) => {
		if ( score >= this.highscore ) {
			this.highscore = score;
		}

		const element = (
			<div>
				<h2>High score: { this.highscore + 1 }</h2>
				<h2>Score: { score + 1 }</h2>
			</div>
		);
		ReactDOM.render( element, document.getElementById( 'counter' ) );
	}

	randomFeed = ( p ) => {
		let x = Math.round( 0 + Math.random() * this.width );
		let y = Math.round( 0 + Math.random() * this.height );
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

	makeGrid = ( p ) => {
		for ( var x = 0; x < this.width; x += this.width / 20 ) {
			for ( var y = 0; y < this.height; y += this.height / 20 ) {
				this.p.stroke( 57 );
				this.p.strokeWeight( 1 );
				this.p.line( x, 0, x, this.height );
				this.p.line( 0, y, this.width, y );
			}
		}
		this.p.line( 0, this.width, this.width, this.width );
		this.p.line( this.height, 0, this.height, this.height );
	}
}
export default Snake;
