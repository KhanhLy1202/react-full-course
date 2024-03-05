import { useState } from 'react';

function Form() {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState();
	const [comment, setComment] = useState('');
	const [select, setSelect] = useState('Chili');
	const [shipping, setShipping] = useState('');

	function updateName(event) {
		setName(event.target.value);
	}

	function updateQuantity(event) {
		setQuantity(event.target.value);
	}

	function updateComment(event) {
		setComment(event.target.value);
	}

	function updateSelect(event) {
		setSelect(event.target.value);
	}

	function updateShipping(event) {
		setShipping(event.target.value);
	}

	return (
		<div>
			<input onChange={updateName} value={name} />
			<p>Name: {name}</p>

			<input onChange={updateQuantity} type="number" value={quantity} />
			<p>Quantity: {quantity}</p>

			<textarea
				onChange={updateComment}
				value={comment}
				placeholder="Comment here"
			/>
			<p>Comment: {comment}</p>

			<select value={select} onChange={updateSelect}>
				<option value="">Select</option>
				<option value="Apple">Apple</option>
				<option value="Banana">Banana</option>
				<option value="Chili">Chili</option>
			</select>
			<p>Select: {select}</p>

			<label>
				<input
					type="radio"
					checked={shipping === 'Pick up'}
					onChange={updateShipping}
					value="Pick up"
				/>{' '}
				Pick up
			</label>

			<label>
				<input
					type="radio"
					checked={shipping === 'Delivery'}
					onChange={updateShipping}
					value="Delivery"
				/>{' '}
				Delivery
			</label>

			<p>Shipping: {shipping}</p>
		</div>
	);
}
export default Form;
