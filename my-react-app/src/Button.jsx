function Button() {
	// const handleClick = () => console.log('ak');
	// let count = 0;
	// const handleClick = (name) => {
	// 	if (count < 3) {
	// 		count++;
	// 		console.log(`${name} you click me ${count} time/s`);
	// 	} else {
	// 		console.log(`${name} stop clicking me`);
	// 	}
	// };

	const handleClick = (e) => (e.target.textContent = 'Ouch');
	return <button onDoubleClick={(e) => handleClick(e)}>Click me !</button>;
}

export default Button;
