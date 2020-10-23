import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearLogin } from "../reducers/loginReducer";

const Header = props => {
	const headerStyle = {
		border: "solid",
		borderWidth: 5,
		padding: 10
	};
	const padding = {
		padding: 5
	};
	const toRight = {
		padding: 5,
		float: "right"
	};

	const handleLogout = async event => {
		event.preventDefault();
		props.clearLogin();
	};
	return (
		<div style={headerStyle}>
			<Link style={padding} to="/">
				Front Page
      </Link>

			<Link style={padding} to="/events">
				Events
      </Link>
			<Link style={padding} to="/contact">
				Contact us
      </Link>

			{!props.login ? (
				<Link style={padding} to="/login">
					Admin login
				</Link>
			) : (
					<div>
						<Link style={padding} to="/addevent">Add new event</Link>

						<p>Logged in {props.login.username}
							<button style={toRight} onClick={handleLogout}>Logout </button>
						</p>
					</div>
				)}
		</div>
	);
};

const dispatchToProps = {
	clearLogin
};

const mapStateToProps = state => {
	return {
		login: state.login
	};
};

export default connect(mapStateToProps, dispatchToProps)(Header);
