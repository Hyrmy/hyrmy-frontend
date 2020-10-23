import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearLogin } from "../reducers/loginReducer";

const Footer = props => {


	const middleColumn = {
		width: '33%',
		height: '100px',
		backgroundColor: 'black',
		textColor: 'white',
		padding: '20px',
		textAlign: 'center'
	};
	const someColumn = {
		float: 'left',
		width: '33%',
		height: '100px',
		backgroundColor: 'black',
		textColor: 'white',
		padding: '35px'
	};
		const logoColumn = {
		float: 'left',
		width: '33%',
		height: '100px',
		backgroundColor: 'black',
		padding: '10px'
	};
	const row = {
		content: "",
		clear: 'both'
	};
//, paddingRight: '100px'

	return (
		//Musta footer
		<div class="row" style={row}>
			<div class="logoColumn" style={logoColumn}>
				<div style={{float:'right'}}>
					<img alt="hyrmy-footer" src="../../hyrmy-footer.png" width="80" height="80" />
				</div>
			</div>
			<div class="middleColumn" style={middleColumn}>
				<p style={{ color: 'white'}}>Helsingin yliopiston raskaan musiikin ystävät - HYRMY<br />Ulrika klusteri, Leppäsuonkatu 11, 00100 HELSINKI</p>
			</div>

			<div class="someColumn" style={someColumn}>
				<a href="https://www.facebook.com/groups/hyrmy/">
					<img border="0" alt="hyrmy-facebook" src="../../facebook-icon.png" width="30" height="30" />
				</a>
				<a href="https://twitter.com/HYRMY">
					<img border="0" alt="hyrmy-twitter" src="../../twitter-big.png" width="30" height="30" /></a>

				<a href="https://www.instagram.com/hyrmy_hki/">
					<img border="0" alt="instagram-big" src="../../hyrmy-instagram-black.png" width="30" height="30" /></a>
				<br />
			</div>
		</div>
	);
};


export default Footer;
