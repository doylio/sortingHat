import React from 'react';
import Hat from '../Hat/Hat';
import './HatContainer.css';


const HatContainer = ({hats}) => {
	
	let hatArray = [];

	for(let i = 0; i < hats; i++) {
		hatArray.push(
			<Hat width={100} height={100} number={Math.floor(Math.random() * 16777216)} />
		);
	}

	return (
		<div>
			<div id="sort-select">
				<h3>Select Sort Method:</h3>
				<select>
					<option>-</option>
					<option>Select Sort</option>
					<option>Bubble Sort</option>
					<option>Merge Sort</option>
				</select>
			</div>
			<button id="sort-btn">Sort!</button>
			<div id="hat-box">
				{hatArray}
			</div>
		</div>
	);
}

export default HatContainer;