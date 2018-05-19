import React from 'react'
import './Hat.css'


class Hat extends React.Component {

	render() {
		return (
			<div>
				<canvas id={this.props.number} width={this.props.width} height={this.props.height} ></canvas>
				<p>{
					this.props.menu
					? ""
					: this.props.number
				}</p>
			</div>
		);
	}

	componentDidMount() {

		drawWizardHat(this.props.width, this.props.height, this.props.number);

		function toHex(num){
			let hex = num.toString(16);
			while (hex.length < 6) {
				hex = "0" + hex;
			}
			return "#" + hex;
		}

		function drawWizardHat(cWidth, cHeight, number){
			let canvas = document.getElementById(number);
			let context = canvas.getContext('2d');
			//Hat Base shape
			drawEllipse(cWidth * 0.5, cHeight * 0.7, cWidth * 0.9, cHeight * 0.14);
			context.fillStyle = toHex(number) || "yellow";
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
			// //Color written underneath
			// context.font = `${cWidth * 0.06}px monospace`;
			// context.fillStyle = "white";
			// context.fillText(number, cWidth * 0.380, cHeight * 0.85);

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
	}
}

export default Hat;