import React from 'react';
import InputRange from 'react-input-range';
import InfoBox from '../InfoBox/InfoBox';
import './SortMenu.css';

const SortMenu = (props) => {
	const { 
		onOptionSelect, 
		onSortBtn, 
		onHatInputChange, 
		updateHatArray, 
		setDelay, 
		sorting, 
		onTurboModeChange, 
		turboMode, 
		sortingMethod, 
		onHatSizeChange, 
		hatSize,  
	} = props;

	return (
		<div className="container-fluid">
			<div id="sort-menu" className="row">
				<div id="sort-select" className="col-lg-6 col-md-12">
					<div className="row" >
						<div className="col-md-7 col-sm-12">
							<h3>Set Number of Hats:</h3>
						</div>
						<div className="col-md-5 col-sm-12">
							<input type='number' min='2' max='10000' onChange={onHatInputChange} />
							<button id="hat-button" onClick={updateHatArray}>Set</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7 col-sm-12">
							<h3>Select Hat Size:</h3>
						</div>
						<div className="col-md-5 col-sm-12 p-3 pl-4">
							<InputRange 
								maxValue={500}
								minValue={50}
								step={10}
								value={hatSize}
								onChange={onHatSizeChange}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-md-7 col-sm-12">
							<h3>Select Sort Method:</h3>
						</div>
						<div className="col-md-5 col-sm-12">
							<select onChange={onOptionSelect}>
								<option>-</option>
								<option>Selection Sort</option>
								<option>Bubble Sort</option>
								<option>Insertion Sort</option>
								<option>Merge Sort</option>
								<option>Quick Sort</option>
								<option>Heap Sort</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7 col-sm-12">
							<h3 className="mw-100">Set delay per action(ms):</h3>
						</div>
						<div className="col-md-5 col-sm-12">
							{
								turboMode
								? <input disabled style={{backgroundColor: "#565650"}}/>
								: <input type='number' onChange={setDelay}/>
							}
						</div>
					</div>
					<div>
						<label><input type="checkbox" onChange={onTurboModeChange} />Turbo Mode</label>
						{
							turboMode
							? <p className="turbo-message">Turbo mode removes all delays and optimizes the functions for speed!</p>
							: null
						}
					</div>
				</div>
				<div className="col-lg-6 col-md-12 d-none d-md-block">
					<InfoBox sortingMethod={sortingMethod} />
				</div>
				<div>
					<button className="btn center" id="sort-btn" onClick={onSortBtn}>
					{
						sorting
						? "Cancel Sort"
						: "Sort!"
					}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SortMenu;