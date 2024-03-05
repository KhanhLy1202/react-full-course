import { useState } from 'react';

function ColorPicker() {
	const [color, setColor] = useState('#FFFFFF');

	function updateColor(e) {
		setColor(e.target.value);
	}

	return (
		<div>
			<p style={{ backgroundColor: color }}>Color: {color}</p>
			<input type="color" value={color} onChange={updateColor} />
		</div>
	);
}

export default ColorPicker;
