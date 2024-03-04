import { useState } from 'react';

function MyComponent() {
	const [name, setName] = useState('Guest');
	const [age, setAge] = useState(0);
	const [isEmployee, setEm] = useState(false);

	const updateName = () => {
		setName('Bro');
	};

	const updateAge = () => {
		setAge(age + 2);
	};

	const updateEm = () => {
		setEm(!isEmployee);
	};
	return (
		<div>
			<p>Name: {name}</p>
			<button onClick={updateName}>Click me</button>

			<p>Age: {age}</p>
			<button onClick={updateAge}>Click me</button>

			<p>Name: {isEmployee ? 'Yes' : 'No'}</p>
			<button onClick={updateEm}>Click me</button>
		</div>
	);
}

export default MyComponent;
