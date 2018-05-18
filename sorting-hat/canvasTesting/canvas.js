const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
drawWizardHat(context, canvas.width, canvas.height, "#22FF66");


function drawWizardHat(context, cWidth, cHeight, color) {
	drawEllipse(cWidth * 0.5, cHeight * 0.7, cWidth * 0.9, cHeight * 0.14);
	context.fillStyle = color;
	context.fill();
	context.closePath();
	context.beginPath();
	context.moveTo(cWidth * 0.67, cHeight * 0.672);
	context.bezierCurveTo(cWidth * 0.652, cHeight * 0.414, cWidth * 0.572, cHeight * 0.05, cWidth * 0.214, cHeight * 0.18);
	context.bezierCurveTo(cWidth * 0.206, cHeight * 0.184, cWidth * 0.368, cHeight * 0.226, cWidth * 0.374, cHeight * 0.232);
	context.bezierCurveTo(cWidth * 0.42, cHeight * 0.286, cWidth * 0.318, cHeight * 0.702, cWidth * 0.318, cHeight * 0.672);
	context.stroke();
	context.fill();
	context.font = `${cWidth * 0.06}px monospace`;
	context.fillStyle = OppositeColor(color);
	context.fillText(color, cWidth * 0.380, cHeight * 0.7);

}

function OppositeColor(color){
	let r = 255 -parseInt(color.slice(1,3), 16);
	let g = 255 - parseInt(color.slice(1,3), 16);
	let b = 255 - parseInt(color.slice(1,3), 16);
	let hexR = (r).toString(16);
	let hexG = (g).toString(16);
	let hexB = (b).toString(16);
	return '#' + hexR + hexG + hexB;
}

function drawEllipse(centerX, centerY, width, height, color) {
	
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