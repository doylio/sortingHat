import React from 'react';
import Hat from '../Hat/Hat';
import './HatContainer.css';
import SortMenu from '../SortMenu/SortMenu';
import Modal from 'react-responsive-modal';



class HatContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			sortingMethod: '-',
			numberOfHats: 10,
			delay: 0,
			hatArray: [],
			sorting: false,
			sorted: false,
			startTime: undefined,
			endTime: undefined,
		};

	}

	globalHatArray = [];

	sleep = (ms = this.state.delay) => {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async bubbleSort() {
		let list = this.state.hatArray;
		let len = list.length;
		let swapped;
	    do {
	        swapped = false
	        for (let i = 1; i < len; i++) {
	            if (list[i - 1].props.number > list[i].props.number){
	                let temp = list[i - 1];
	                list[i - 1] = list[i];
	                list[i] = temp;
	                swapped = true;
	            	this.setState({hatArray: list});
	            }
	            await this.sleep();
	        }
	        len--;
	    } while (swapped)
	    this.setState({
	    	sorted: true,
	    	endTime: new Date().getTime(),
	    	sorting: false,
	    });
	}

	async mergeWrap() {
		this.globalHatArray = this.state.hatArray;
		await this.mergeSort(0, this.globalHatArray.length - 1);
		this.setState({
	    	sorted: true,
	    	endTime: new Date().getTime(),
	    	sorting: false,
	    });
	}


	async mergeSort(l, r) {
		if(l < r) {
			console.log(l);
			const m = Math.floor((l + r) / 2);
			this.mergeSort(l, m);
			this.mergeSort(m + 1, r);
			await this.sleep((r - l) * this.state.delay);
			this.merge(l, m, r);	
		}
	}

	merge(l, m, r) {
		let left = this.globalHatArray.slice(l, m + 1);
		let right = this.globalHatArray.slice(m + 1, r + 1);
		let ptr = l;
		while(left.length && right.length) {
			if(left[0].props.number <= right[0].props.number) {
				this.globalHatArray[ptr] = left.shift();
			} else {
				this.globalHatArray[ptr] = right.shift();
			}
			ptr++;
		}

		while(left.length) {
			this.globalHatArray[ptr] = left.shift();
			ptr++;
		}

		while(right.length) {
			this.globalHatArray[ptr] = right.shift();
			ptr++;
		}
		this.setState({hatArray: this.globalHatArray});
	}

	async selectionSort() {
		let list = this.state.hatArray;
		for (let i = 0; i < list.length; i++) {
			let min = i;
			for (let j = i; j < list.length; j++) {
				if(list[j].props.number < list[min].props.number) {
					min = j;
				}
				await this.sleep();
			}
			let temp = list[i];
			list[i] = list[min];
			list[min] = temp;
			this.setState({hatArray: list});
		}
		this.setState({
			sorted: true,
			endTime: new Date().getTime(),
			sorting: false,
		});
	}

	async insertionSort() {
		let list = this.state.hatArray;
		for(let i = 1; i < list.length; i++) {
			for(let j = i; j > 0; j--) {
				if(list[j].props.number < list[j - 1].props.number) {
					let temp = list[j];
					list[j] = list[j - 1];
					list[j - 1] = temp;
				} else {
					break;
				}
				this.setState({hatArray: list});
				await this.sleep();
			}
		}
		this.setState({
			sorted: true,
			endTime: new Date().getTime(),
		});
	
	}

	setDelay = (event) => {
		this.setState({delay: event.target.value});
	}

	updateHatArray = () => {
		let hatArray = [];
		for(let i = 0; i < this.state.numberOfHats; i++) {
			hatArray.push(
				<Hat width={100} height={100} number={Math.random()} />
			);
		}
		this.setState({hatArray: hatArray});
	}

	onHatInputChange = (event) => {
    	this.setState({
    		numberOfHats: event.target.value
    	});
	}

	onOptionSelect = (event) => {
		this.setState({sortingMethod: event.target.value});
	}

	onSortBtn = () => {
		if(!this.state.sorting) {
			
			if(this.state.sortingMethod === '-') {
				return;
			}

			this.setState({
				sorting: true,
				startTime: new Date().getTime(),
			});
			
			switch(this.state.sortingMethod) {
				case 'Bubble Sort':
					this.bubbleSort();
					break;
				case 'Merge Sort':
					this.mergeWrap();
					break;
				case 'Selection Sort':
					this.selectionSort();
					break;
				case 'Insertion Sort':
					this.insertionSort();
					break;
				default:
					break;
			}
		} else {
			console.log('line 163')
			this.setState({sorting: false});
		}
	}

	onCloseModal = () => {
		this.setState({sorted: false});
	}

	render() {
		let {sorted, hatArray, sortingMethod, startTime, endTime, numberOfHats, sorting, delay} = this.state;
		console.log(this.state.sorting);
		return (
			<div>
				<SortMenu 
					onOptionSelect={this.onOptionSelect} 
					onSortBtn={this.onSortBtn} 
					onHatInputChange={this.onHatInputChange}
					updateHatArray={this.updateHatArray}
					setDelay={this.setDelay}
					sorting={sorting}
				/>
				<Modal 
					open={sorted} 
					onClose={this.onCloseModal} 
					classNames={{
						modal: 'custom-modal',
						closeIcon: 'modal-close-button'
					}}
					center 
				>
					<h1>Sorting Complete!</h1>
					<p>{`${sortingMethod} sorted ${numberOfHats} hats in ${(endTime - startTime) / 1000} seconds with a delay time of ${delay} milliseconds.`}</p>
				</Modal>
				<div id="hat-box">
					{hatArray}
				</div>
			</div>
		);
	}

	componentDidMount() {
		let hatArray = [];
		for(let i = 0; i < this.state.numberOfHats; i++) {
			hatArray.push(
				<Hat width={100} height={100} number={Math.random()} />
			);
		}
		this.setState({hatArray: hatArray});
	}
}

export default HatContainer;