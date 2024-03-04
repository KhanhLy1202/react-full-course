import { useState } from 'react';

function Count() {
	const [count, setCount] = useState(0);

	const increate = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};
	const dicreate = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p>{count}</p>
			<button onClick={increate}>Increment</button>
			<button onClick={reset}>Reset</button>
			<button onClick={dicreate}>Decreament</button>
		</div>
	);
}

export default Count;
