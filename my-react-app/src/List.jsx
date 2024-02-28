import propTypes from 'prop-types';

function List(props) {
	const category = props.category;
	const itemList = props.items;

	// fruits.sort((a, b) => a.name.localeCompare(b.name)); //anphabetical
	// fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse //anphabetical
	// fruits.sort((a, b) => a.calories - b.calories); //numberic
	// fruits.sort((a, b) => b.calories - a.calories); // reverse numberic

	// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
	// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

	const listItems = itemList.map((item) => (
		<li key={item.id}>
			{item.name}: &nbsp; {item.calories}
		</li>
	));
	return (
		<div>
			<h2>{category}</h2>
			<ol>{listItems}</ol>
		</div>
	);
}
List.propTypes = {
	category: propTypes.string,
	items: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.number,
			calories: propTypes.number,
			name: propTypes.string,
		})
	),
};
List.defaultProps = {
	category: 'Category',
	items: [],
};
export default List;
