import React from 'react';


const InfoBox = ({ sortingMethod }) => {

	let text = "";

	switch (sortingMethod) {
		case 'Bubble Sort':
			text = 				
				<p className="m-1 p-2 text-left">
					Bubble sort is generally the least effective sorting algorithm and has a runtime of O(<em>n</em>&sup2;).  It looks at each adjacent pair of elements and swaps them if they are out of order.  This implementation checks each adjascent pair from lowest to highest, until the list is sorted.  This has the perceived effect of moving the next highest element to the top, while all other elements slowly sink into their places.
				</p>
			;
			break;
		case 'Selection Sort':
			text = 				
				<p className="m-1 p-2 text-left">
					Selection sort repeatedly scans the list for the nth lowest element, and then swaps it with the element in the nth position.  This makes it very easy to implement and explain, but incredibly inefficient, with a runtime of O(<em>n</em>&sup2;). It is only underperformed here by Bubble Sort.
				</p>
			;
			break;
		case 'Insertion Sort':
			text = 				
				<p className="m-1 p-2 text-left">
					Insertion sort is the best of the "slow algorithms".  Like Bubble sort and Selection Sort, it has a runtime of O(<em>n</em>&sup2;).  It creates a new list at the start of the array and adds elements to it, one by one, sorting them into their correct place in it's new list.  This makes it look like a sorted list is growing and that each new element is falling into its proper position.
				</p>
			;
			break;
		case 'Merge Sort':
			text = 				
				<p className="m-1 p-2 text-left">
					Merge sort was invented by John von Neumann in 1945.  It has a runtime of O(<em>n</em>log<em>n</em>).  This makes it incredibly efficient.  It uses a 'divide-and-conquer' method to achieve its high speed.  It breaks the list into sublists, each with a single element, and then merges them into sublists of length 2, correctly ordering the sublists as it goes.  It then merges those into sublists of length 4, and so on, until it has ordered the whole list.
				</p>
			;
			break;
		case 'Quick Sort': 
			text = 				
				<p className="m-1 p-2 text-left">
					Quick sort is the fastest sorting algorithm shown here in most situations.  It has a theoretic runtime of O(<em>n</em>&sup2;), but in practice it acts like an algorithm with O(<em>n</em>log<em>n</em>) runtime.  It was invented by Sir Tony Hoare in 1959.  Like many fast algorithms, it uses a 'divide-and-conquer' strategy.  It chooses a 'pivot' value at random from the list, and then moves each element to its proper side relative to the pivot.  In this case, values greater than the pivot go on the left and less than the pivot on the right.  It repeats this process on each side of the pivot, working smaller and smaller until the list is sorted.
				</p>
			;
			break;
		case 'Heap Sort':
			text = 				
				<p className="m-1 p-2 text-left">
					Heap sort is a popular sorting algorithm for its speed.  It was invented by JWJ Williams in 1964 and has a runtime of O(<em>n</em>log<em>n</em>).  It orders the list into a 'heap' or binary tree, such that each node in the tree has a maximum of two child nodes, and they are smaller than their parent.  This ensures that the topmost node is the largest element.  It then moves that element to the end of the list, and shifts the heap until the next largest element emerges on top.  The heap structure is difficult to see here, but one can see the effect at the end of the list, where the largest elements are placed in reverse order at the end of the list.
				</p>
			;
			break;
		default:
			text = <p></p>;
			break;
	}

	return (
			<div id="info-box">
				<p className="m-1 p-2 text-left">
					{text}
				</p>
			</div>
	);
}

export default InfoBox;