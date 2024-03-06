import { useState } from 'react';

function UpdateCarObj() {
	const [car, setCar] = useState({ name: 'Audi', year: 2017, model: 'Sedans' });

	function updateName(e) {
		setCar({ ...car, name: e.target.value });
	}

	function updateYear(e) {
		setCar({ ...car, year: e.target.value });
	}

	return (
		<div>
			<p>
				{car.name} {car.year} {car.model}
			</p>
			<input value={car.name} onChange={updateName} />
			<input value={car.year} type="number" onChange={updateYear} />
		</div>
	);
}

export default UpdateCarObj;
