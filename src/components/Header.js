import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearLogin } from "../reducers/loginReducer";

const Header = props => {
	const headerStyle = {
		backgroundColor: "black",
		borderWidth: 5,
		padding: 10,
		height: "80px",
		textAlign: 'center'
	};
	const padding = {
		padding: 5,
		color: "white"
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
			<Link style={padding} to="/"><h4 style={{display:"inline"}}>Front Page</h4></Link>
			<Link style={padding} to="/events"><h4 style={{display:"inline"}}>Events</h4></Link>
			<Link style={padding} to="/contact"><h4 style={{display:"inline"}}>Contact us</h4></Link>

			{!props.login ? (
				<Link style={padding} to="/login"><h4 style={{display:"inline"}}>Admin login</h4></Link>


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
