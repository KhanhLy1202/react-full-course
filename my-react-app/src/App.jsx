import List from './List.jsx';
const fruits = [
	{ id: 1, name: 'apple', calories: 95 },
	{ id: 2, name: 'orange', calories: 234 },
	{ id: 3, name: 'banana', calories: 33 },
];
const vegetables = [
	{ id: 4, name: 'carrot', calories: 228 },
	{ id: 5, name: 'rau', calories: 22 },
	{ id: 6, name: 'coconut', calories: 655 },
];
function App() {
	return (
		<>
			{fruits.length > 0 && <List items={fruits} category="Fruits" />}
			{vegetables.length > 0 && (
				<List items={vegetables} category="Vegetable" />
			)}
		</>
	);
}

export default App;
