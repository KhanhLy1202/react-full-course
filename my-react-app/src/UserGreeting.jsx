import propTypes from 'prop-types';
function UserGreeting(props) {
	const wellcomeMessage = (
		<h2 className="welcome-message">Welcome {props.username}</h2>
	);

	const loginPromt = <h2 className="logon-promt">Please log in to continue</h2>;
	return props.isLoggedIn ? wellcomeMessage : loginPromt;
}

UserGreeting.propTypes = {
	isLoggedIn: propTypes.bool,
	username: propTypes.string,
};
UserGreeting.defaultProps = {
	isLoggedIn: false,
	username: 'Guest',
};
export default UserGreeting;
