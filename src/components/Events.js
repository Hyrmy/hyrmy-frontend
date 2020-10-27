import React from 'react'
import { connect } from 'react-redux'
import { removeEvent } from '../reducers/eventReducer'
import { createSuccessNotification, createErrorNotification, clearNotification } from '../reducers/notificationReducer'
import { Link } from "react-router-dom"




const Events = (props) => {
	const rowStyle = {
		borderRadius: '25px',
		background: "black",
		padding: "25px",
		width: "600px",
	};
	const tableStyle = {
		borderCollapse: "separate",
		borderSpacing: "50px"

	};
	return (
		<div style={{ height: "900px" }}>
			<h2>Events</h2>

			<table style={tableStyle}>
				{props.visibleEvents.map(event =>
					<tr key={event.id} style={rowStyle}>
						<td style={rowStyle}>
							<Link to={`events/${event.id}`} style={{color:"white"}} ><h3>{`${event.title}`}</h3></Link>
						</td>
					</tr>
				)}

			</table>

		</div >

	)
}


const eventsToShow = ({ events }) => {
	return events

}


const dispatchToProps = {
	removeEvent,
	createSuccessNotification,
	clearNotification,
	createErrorNotification
}
const mapStateToProps = (state) => {
	return {
		visibleEvents: eventsToShow(state),
		login: state.login
	}
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(Events)
