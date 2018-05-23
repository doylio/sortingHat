import React from 'react';
import Hat from '../Hat/Hat';
import './HatContainer.css';
import SortMenu from '../SortMenu/SortMenu';
import Modal from 'react-responsive-modal';




class HatContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			sortingMethod: '',
			hatArray: [],
			sorted: false,
			startTime: undefined,
			endTime: undefined,
		};

	}

	sleep = (ms = 10) => {
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
	            await this.sleep(1);
	        }
	        len--;
	    } while (swapped)
	    this.setState({
	    	sorted: true,
	    	endTime: new Date().getTime(),
	    });
	}

	async mergeSort() {
		let list = this.state.hatArray;
				

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

	onOptionSelect = (event) => {
		this.setState({sortingMethod: event.target.value});
		console.log(this.state.sortingMethod);
	}

	onSortBtn = () => {
		if(this.state.sortingMethod === '-') {
			return;
		}
	
		this.setState({startTime: new Date().getTime()});

		if(this.state.sortingMethod === 'Bubble Sort') {
			this.bubbleSort();
		} else if(this.state.sortingMethod === 'Merge Sort') {
			this.mergeSort();
		} else if(this.state.sortingMethod === 'Selection Sort') {
			this.selectionSort();
		} else if(this.state.sortingMethod === 'Insertion Sort') {
			this.insertionSort();
		}
	}

	onCloseModal = () => {
		this.setState({sorted: false});
	}

	render() {
		let {sorted, hatArray, sortingMethod, startTime, endTime} = this.state;

		return (
			<div>
				<SortMenu onOptionSelect={this.onOptionSelect} onSortBtn={this.onSortBtn} />
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
					<p>{`${sortingMethod} sorted ${this.props.hats} hats in ${(endTime - startTime) / 1000} seconds.`}</p>
				</Modal>
				<div id="hat-box">
					{hatArray}
				</div>
			</div>
		);
	}

	componentDidMount() {
		let hatArray = [];
		for(let i = 0; i < this.props.hats; i++) {
			hatArray.push(
				<Hat width={100} height={100} number={Math.random()} />
			);
		}
		this.setState({hatArray: hatArray});
	}
}

export default HatContainer;