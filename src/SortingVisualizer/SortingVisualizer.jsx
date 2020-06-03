import React from "react";
import { mergeSortAnimations } from "../sortingAlgorithms/mergeSort.js";
import { bubbleSortAnimations } from "../sortingAlgorithms/bubbleSort.js";
import { quickSortAnimations, quickSort, pivot } from "../sortingAlgorithms/quickSort.js";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 0.1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 350;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        // 250, 150, 50, 350, 300, 400, 100, 200, 450
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 600));
        }

        this.setState({ array });
		const arrayBars = document.getElementsByClassName("array-bar");
		var arrayLength = arrayBars.length;
		for (let j = 0; j < arrayLength; j++) {
			var jBarStyle = arrayBars[j].style;
			jBarStyle.backgroundColor = PRIMARY_COLOR;
		}
    }

    makeAllBarsGreen() {
        console.log("Sorted");
        const arrayBars = document.getElementsByClassName("array-bar");
        var arrayLength = arrayBars.length;
        for (let j = 0; j < arrayLength; j++) {
            var jBarStyle = arrayBars[j].style;
            jBarStyle.backgroundColor = "limegreen";
        }
    }

    mergeSort() {
        const animations = mergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i === animations.length - 1){
                        this.makeAllBarsGreen();
                    }
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    if (i === animations.length - 1) {
                        this.makeAllBarsGreen();
                    }
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const array = this.state.array;
        const animations = quickSortAnimations(array);
        console.log(animations);
        const arrayBars = document.getElementsByClassName("array-bar");

        for (let i = 0; i < animations.length; i++) {
            setTimeout(() => {
                var [oldPosition, newPosition] = animations[i];

                var oldBarStyle = arrayBars[oldPosition].style;
                var newBarStyle = arrayBars[newPosition].style;
                var pivotIndex;
                var pivotBar;
                const dummyAnimations = [];
                if (array.length > 1) {
                    if( 0 < array.length) {
                        pivotIndex = pivot(array, 0, array.length - 1, dummyAnimations);
                        pivotBar = arrayBars[pivotIndex].style;
                        pivotBar.backgroundColor = "purple";
						//Left Side
						quickSort(dummyAnimations, array, 0, pivotIndex - 1);
						//Right Side
						quickSort(dummyAnimations, array, 0, array.length - 1);
                    }
                }

                oldBarStyle.height = `${this.state.array[oldPosition]}px`;
                newBarStyle.height = `${this.state.array[newPosition]}px`;
                
                oldBarStyle.backgroundColor = "yellow";
                newBarStyle.backgroundColor = "red";
                pivotBar.backgroundColor = "purple";

                var currentPosition = oldPosition;
                for (let j = 0; j < currentPosition; j++) {
                    var jBarStyle = arrayBars[j].style;
                    jBarStyle.backgroundColor = "green";
                    pivotBar.backgroundColor = "purple";
                }
                if (i === animations.length - 1) {
                    this.makeAllBarsGreen();
                }
            }, i * ANIMATION_SPEED_MS);
        }
    }

    async bubbleSort() {
        const array = this.state.array;
        const animations = bubbleSortAnimations(array);
        const arrayBars = document.getElementsByClassName("array-bar");
        for(let i = 0; i < animations.length; i++){
            setTimeout(() => {
				var [oldPosition, newPosition] = animations[i];
				var oldBarStyle = arrayBars[oldPosition].style;
				var newBarStyle = arrayBars[newPosition].style;

				var temp = this.state.array[oldPosition];
				this.state.array[oldPosition] = this.state.array[newPosition];
				this.state.array[newPosition] = temp;

				oldBarStyle.height = `${this.state.array[oldPosition]}px`;
				newBarStyle.height = `${this.state.array[newPosition]}px`;

				oldBarStyle.backgroundColor = "red";
				newBarStyle.backgroundColor = "green";

				var currentPosition = oldPosition;
				for (let j = 0; j < currentPosition; j++) {
					var jBarStyle = arrayBars[j].style;
					jBarStyle.backgroundColor = "red";
				}
				if (i === animations.length - 1) {
					this.makeAllBarsGreen();
				}
			}, i * ANIMATION_SPEED_MS);
        }
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 1; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = quickSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        const { array } = this.state;
        return [
			<header key={"Navigation"}>
				<section className="logo">
					<h1>Sorting Algorithms</h1>
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
								Merge Sort
							</a>
						</li>
						<li>
							<a onClick={() => this.quickSort()} href="#">
								Quick Sort
							</a>
						</li>
						<li>
							<a onClick={() => this.bubbleSort()} href="#">
								Bubble Sort
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
    min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
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