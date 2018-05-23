import React from 'react';
import './SortMenu.css';

const SortMenu = ({onOptionSelect, onSortBtn}) => {

	return (
		<div>
			<div id="sort-select">
				<h3>Select Sort Method:</h3>
				<select onChange={onOptionSelect}>
					<option>-</option>
					<option>Selection Sort</option>
					<option>Bubble Sort</option>
					<option>Insertion Sort</option>
					<option>Merge Sort</option>
				</select>
			</div>
			<button id="sort-btn" onClick={onSortBtn}>Sort!</button>
		</div>
	);
}

export default SortMenu;