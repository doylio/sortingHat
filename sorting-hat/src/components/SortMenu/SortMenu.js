import React from 'react';
import './SortMenu.css';

const SortMenu = ({onOptionSelect, onSortBtn, onHatInputChange, updateHatArray, setDelay, sorting}) => {

	return (
		<div>
			<div id="sort-select">
				<span>
					<h3>Select Sort Method:</h3>
					<select onChange={onOptionSelect}>
						<option>-</option>
						<option>Selection Sort</option>
						<option>Bubble Sort</option>
						<option>Insertion Sort</option>
						<option>Merge Sort</option>
						<option>Quick Sort</option>
					</select>
				</span>
				<span>
					<h3>Set Number of Hats:</h3>
					<input type='number' min='10' max='500' onChange={onHatInputChange} />
					<button id="hat-button" onClick={updateHatArray}>Set</button>
				</span>
				<span>
					<h3>Set delay per action(ms):</h3>
					<input type='number' max='1000'  onChange={setDelay}/>
				</span>
			</div>
			<button id="sort-btn" onClick={onSortBtn}>
				{
					sorting
					? "Cancel Sort"
					: "Sort!"
				}
			</button>
		</div>
	);
}

export default SortMenu;