import Student from './Student.jsx';

function App() {
	return (
		<>
			<Student name="Ly" age={30} isStudent={true} />
			<Student name="Keo Em" age={42} isStudent={false} />
			<Student name="CHange" />
		</>
	);
}

export default App;
