import React from 'react';

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	};

	increment() {
		this.setState((prev) => {
            return {
			count: prev.count + 1
		}});
	}

	decrement() {
		if (this.state.count > 0)
			this.setState((prev) => {
                return {
				count: prev.count - 1
			}});
	}

	render() {
		return (
			<div>
				<h3 className="font-bold text-3xl m-5">{this.state.count}</h3>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={this.increment}
				>
					Увеличить
				</button>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={this.decrement}
				>
					Уменьшить
				</button>
			</div>
		);
	}
}

export default ClassCounter;
