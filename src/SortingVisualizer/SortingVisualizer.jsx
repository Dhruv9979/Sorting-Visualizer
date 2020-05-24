import React from "react";
import { mergeSort, quickSort, bubbleSort } from "../sortingAlgorithms/mergeSort.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    mergeSort() {
        
    }

    quickSort() {

    }

    bubbleSort() {

    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = mergeSort(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        const { array } = this.state;
        return [
			<header key = {"Navigation"}>
				<section className="logo">
					<h1>Sorting Algorithm</h1>
                </section>
				<nav>
					<ul className="items">
						<li>
							<a onClick={() => this.resetArray()} href="#">
								New Array
							</a>
						</li>
						<li>
							<a onClick={() => this.mergeSort()} href="#">
								Merge
							</a>
						</li>
						<li>
							<a onClick={() => this.quickSort()} href="#">
								Quick
							</a>
						</li>
						<li>
							<a onClick={() => this.bubbleSort()} href="#">
								Bubble
							</a>
						</li>
					</ul>
				</nav>
				<div className="menu-toggle">
					<i className="fa fa-bars" aria-hidden="true"></i>
				</div>
			</header>,
			<div className="array-container" key="Array">
				{array.map((value, idx) => (
					<div
						className="array-bar"
						key={idx}
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: `${value}px`,
						}}
					></div>
				))}
			</div>,
		];
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
            return false;
            }
        }
    return true;
}