import React from 'react'
import './Hat.css'


class Hat extends React.Component {

	render() {
		const fontSize = this.props.width / 100;
		return (
			<div id={"d" + this.props.number}>
				<canvas id={"c" + this.props.number} width={this.props.width} height={this.props.height} ></canvas>
				<p style={{fontSize: fontSize + "rem"}}>{
					this.props.menu
					? ""
					: Math.floor(this.props.number * 10000)
				}</p>
			</div>
		);
	}

	HSVtoRGB = (h, s, v) => {
	    var r, g, b, i, f, p, q, t;

	    i = Math.floor(h * 6);
	    f = h * 6 - i;
	    p = v * (1 - s);
	    q = v * (1 - f * s);
	    t = v * (1 - (1 - f) * s);
	    switch (i % 6) {
	        case 0: r = v; g = t; b = p; break;
	        case 1: r = q; g = v; b = p; break;
	        case 2: r = p; g = v; b = t; break;
	        case 3: r = p; g = q; b = v; break;
	        case 4: r = t; g = p; b = v; break;
	        case 5: r = v; g = p; b = q; break;
	        default: break;
	    }
	    return {
	        r: Math.round(r * 255),
	        g: Math.round(g * 255),
	        b: Math.round(b * 255)
	    };
	}

	drawWizardHat = (cWidth, cHeight, number) => {
		let canvas = document.getElementById("c" + number);
		let context = canvas.getContext('2d');
		//Hat Base shape
		drawEllipse(cWidth * 0.5, cHeight * 0.7, cWidth * 0.9, cHeight * 0.14);
		context.stroke();
		let { r, g, b } = this.HSVtoRGB(number, 1.0, 0.5);
		context.fillStyle = `rgb(${r}, ${g}, ${b})`;
		context.fill();
		context.closePath();
		//Hat Body shape
		context.beginPath();
		context.moveTo(cWidth * 0.67, cHeight * 0.672);
		context.bezierCurveTo(cWidth * 0.652, cHeight * 0.414, cWidth * 0.572, cHeight * 0.05, cWidth * 0.214, cHeight * 0.18);
		context.bezierCurveTo(cWidth * 0.206, cHeight * 0.184, cWidth * 0.368, cHeight * 0.226, cWidth * 0.374, cHeight * 0.232);
		context.bezierCurveTo(cWidth * 0.42, cHeight * 0.286, cWidth * 0.318, cHeight * 0.702, cWidth * 0.318, cHeight * 0.672);
		context.stroke();
		context.fill();

		function drawEllipse(centerX, centerY, width, height) {
		
			context.beginPath(); 
	  		context.moveTo(centerX, centerY - height/2);
	  
	  		context.bezierCurveTo(
		    centerX + width/2, centerY - height/2,
		    centerX + width/2, centerY + height/2,
		    centerX, centerY + height/2);

			context.bezierCurveTo(
		    centerX - width/2, centerY + height/2,
		    centerX - width/2, centerY - height/2,
		    centerX, centerY - height/2);
		}
	}

	componentDidMount() {

		this.drawWizardHat(this.props.width, this.props.height, this.props.number);

	}
	componentDidUpdate() {

		this.drawWizardHat(this.props.width, this.props.height, this.props.number);

	}
}

export default Hat;