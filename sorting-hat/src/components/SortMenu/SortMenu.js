import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import './SortMenu.css';

const SortMenu = ({onOptionSelect, onSortBtn, onHatInputChange, updateHatArray, setDelay, sorting, onTurboModeChange, turboMode}) => {

	return (
		<div className="container-fluid">
			<div id="sort-menu" className="row">
				<div id="sort-select" className="col-lg-6 col-md-12">
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
							</select>
						</div>
					</div>
					<div className="row" >
						<div className="col-md-7 col-sm-12">
							<h3>Set Number of Hats:</h3>
						</div>
						<div className="col-md-5 col-sm-12">
							<input type='number' min='10' max='500' onChange={onHatInputChange} />
							<button id="hat-button" onClick={updateHatArray}>Set</button>
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
					</div>
				</div>
				<div className="col-lg-6 col-md-12 d-none d-md-block">
					<InfoBox />
				</div>
				<button className="btn center" id="sort-btn" onClick={onSortBtn}>
				{
					sorting
					? "Cancel Sort"
					: "Sort!"
				}
				</button>
			</div>
		</div>
	);
}

export default SortMenu;